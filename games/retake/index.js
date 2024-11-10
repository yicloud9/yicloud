const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream/promises');
const fetch = require('node-fetch');

class MediaCrawler {
    constructor(options = {}) {
        this.targetUrl = options.targetUrl;
        this.baseDir = options.baseDir || './downloaded_media';
        this.imageDir = path.join(this.baseDir);
        this.audioDir = path.join(this.baseDir);
        
        // 存储URL集合
        this.mediaUrls = {
            images: new Set(),
            audio: new Set()
        };

        // 支持的媒体格式
        this.mediaFormats = {
            image: new Set([
                'image/jpeg',
                'image/png',
                'image/gif',
                'image/webp',
                'image/svg+xml'
            ]),
            audio: new Set([
                'audio/mpeg',
                'audio/wav',
                'audio/ogg',
                'audio/aac',
                'audio/midi',
                'audio/webm',
                'application/x-mpegURL'
            ])
        };

        // 创建目录
        this.initDirectories();
    }

    initDirectories() {
        [this.baseDir, this.imageDir, this.audioDir].forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    async start() {
        const browser = await puppeteer.launch({
            headless: false,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins,site-per-process',
                '--disable-site-isolation-trials',
                '--disable-features=BlockInsecurePrivateNetworkRequests',
                '--disable-features=RejectInsecurePrivateNetworkRequests',
                '--disable-extensions',
                '--ignore-certificate-errors',
                '--ignore-certificate-errors-spki-list'
            ],
            ignoreHTTPSErrors: true
        });

        try {
            const page = await browser.newPage();

            await page.setExtraHTTPHeaders({
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
              'Accept-Language': 'en-US,en;q=0.9',
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
          });

            // 设置用户代理
            await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36');

            // 设置拦截器
            await this.setupInterceptors(page);

            // 导航到目标页面
            await page.goto(this.targetUrl, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            // 等待页面加载完成
            await page.waitForTimeout(5000);

            // 自动滚动页面以触发懒加载
            await this.autoScroll(page);

            // 保存URL列表
            this.saveUrlsLists();

        } catch (error) {
            console.error('Crawling error:', error);
        } finally {
            // await browser.close();
        }
    }

    async setupInterceptors(page) {
        // 启用请求拦截
        await page.setRequestInterception(true);

        // 请求拦截器
        page.on('request', async request => {
            const url = request.url();
            if(this.isValidUrl(url)) {
              if (url.includes('svg') || url.includes('png') || url.includes('jpg')) {
                  const filename = this.generateFilename(url, 'image');
                  await this.downloadMedia(url, filename, 'image');
              } else if (url.includes('mp3')) {
                  // const filename = this.generateFilename(url, 'audio');
                  // await this.downloadMedia(url, filename, 'audio');
              }
            }
            request.continue();
        });

        // 响应拦截器
        page.on('response', async response => {
            // const url = response.url();
            // if (!this.isValidUrl(url)) return;
            // const contentType = response.headers()['content-type'];
            // try {
            //     if (this.isImageContentType(contentType)) {
            //         const filename = this.generateFilename(url, 'image');
            //         await this.downloadMedia(url, filename, 'image');
            //     } else if (this.isAudioContentType(contentType)) {
            //         const filename = this.generateFilename(url, 'audio');
            //         await this.downloadMedia(url, filename, 'audio');
            //     }
            // } catch (error) {
            //     console.error(`Failed to process ${url}:`, error);
            // }
        });
    }

    isImageContentType(contentType) {
        if (!contentType) return false;
        return Array.from(this.mediaFormats.image).some(format => 
            contentType.toLowerCase().includes(format)
        );
    }

    isAudioContentType(contentType) {
        if (!contentType) return false;
        return Array.from(this.mediaFormats.audio).some(format => 
            contentType.toLowerCase().includes(format)
        );
    }

    isAudioUrl(url) {
        const audioExtensions = ['.mp3', '.wav', '.ogg', '.aac', '.m4a', '.flac', '.m3u8'];
        return audioExtensions.some(ext => url.toLowerCase().endsWith(ext));
    }

    generateFilename(url, type) {
        let filename = path.basename(url).split('?')[0];
        
        // 如果没有扩展名，添加默认扩展名
        if (!path.extname(filename)) {
            filename += type === 'image' ? '.jpg' : '.mp3';
        }

        // 确保文件名唯一
        const dir = type === 'image' ? this.imageDir : this.audioDir;
        let counter = 1;
        let finalPath = path.join(dir, filename);
        
        while (fs.existsSync(finalPath)) {
            const ext = path.extname(filename);
            const name = path.basename(filename, ext);
            finalPath = path.join(dir, `${name}_${counter}${ext}`);
            counter++;
        }

        return path.basename(finalPath);
    }

    async downloadMedia(url, filename, type) {
        try {
          if (!this.isValidUrl(url)) {
            console.log(`Skipping invalid URL: ${url}`);
            return;
          }
            const dir = type === 'image' ? this.imageDir : this.audioDir;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const destPath = path.join(dir, filename);
            const fileStream = fs.createWriteStream(destPath);
            
            await pipeline(response.body, fileStream);
            console.log(`Downloaded ${type}: ${filename}`);
        } catch (error) {
            console.error(`Error downloading ${url}:`, error);
            throw error;
        }
    }

    async autoScroll(page) {
        await page.evaluate(async () => {
            await new Promise((resolve) => {
                let totalHeight = 0;
                const distance = 100;
                const timer = setInterval(() => {
                    const scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if (totalHeight >= scrollHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        });
    }

    saveUrlsLists() {
        const saveUrls = (urls, filename) => {
            const filepath = path.join(this.baseDir, filename);
            fs.writeFileSync(filepath, Array.from(urls).join('\n'));
        };

        saveUrls(this.mediaUrls.images, 'image_urls.txt');
        saveUrls(this.mediaUrls.audio, 'audio_urls.txt');
    }

    // 添加重试机制的下载方法
    async downloadWithRetry(url, filename, type, maxRetries = 3) {
        for (let i = 0; i < maxRetries; i++) {
            try {
                await this.downloadMedia(url, filename, type);
                return;
            } catch (error) {
                console.error(`Attempt ${i + 1} failed for ${url}:`, error);
                if (i === maxRetries - 1) throw error;
                await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
            }
        }
    }

    isValidUrl(url) {
      try {
          const parsed = new URL(url);
          const res = ['http:', 'https:'].includes(parsed.protocol);
          if(res) {
            console.log(url);
          }
          return res;
      } catch (e) {
          return false;
      }
    }

    // 批量下载的并发控制
    async downloadWithConcurrency(type, concurrency = 3) {
        const urls = Array.from(this.mediaUrls[type]);
        const chunks = [];
        
        for (let i = 0; i < urls.length; i += concurrency) {
            const chunk = urls.slice(i, i + concurrency);
            await Promise.all(chunk.map(url => {
                const filename = this.generateFilename(url, type);
                return this.downloadWithRetry(url, filename, type);
            }));
        }
    }
}

// 使用示例
async function run() {
    const crawler = new MediaCrawler({
        targetUrl: 'https://wowtbc.net/sprunkin/retake/index.html',
        baseDir: './assets'
    });

    try {
        await crawler.start();
        
        // 使用并发下载
        await crawler.downloadWithConcurrency('images', 3);
        // await crawler.downloadWithConcurrency('audio', 2);
    } catch (error) {
        console.error('Crawler failed:', error);
    }
}

run();
