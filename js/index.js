const chatMessages = [
    [
        { name: 'ms1', delay: 1000, align: 'right', msg: '嘿嘿，好久不见😄，之前讨论的那个笔记本你最终整了个啥样的呢' },
        { name: 'ms2', delay: 1000, align: 'left', msg: '翔哥～刚在开车，去接我喝醉了的爸[捂脸]'}
    ],
    [
        {name: 'ms3', delay: 1000, align: 'left', msg: '这不是去年辞职然后今年疫情，然后又不晓得怎么安排自己。之前觉得有点累了，就再去读书。'},
        {name: 'ms4', delay: 1000, align: 'right', msg: '可以啊，出去深造下[强]'}
    ],
    [
        {name: 'ms4', delay: 1000, align: 'right', msg: '所以我觉得培养一门艺术，真的可以让自己又提升一个层次'},
        {name: 'ms5', delay: 1000, align: 'left', msg: '你太妖魔化了，净贴金'}
    ],
    [
        {name: 'ms6', delay: 1000, align: 'right', msg: '要不然生活在0和1的世界里，很无聊，特殊人除外'},
        {name: 'ms7', delay: 1000, align: 'left', msg: '0和1这个真的是，哈哈'}
    ],
    [
        {name: 'ms8', delay: 1000, align: 'left', msg: '我当时学习，特意避开了电脑技术，最后就保留了ps. 因为我搞不定电脑'},
        {name: 'ms9', delay: 1000, align: 'right', msg: '哈哈哈，理解理解'}
    ],
    [
        {name: 'ms10', delay: 1000, align: 'left', msg: '谁还不是配的上大乌苏的女同学'},
        {name: 'ms11', delay: 1000, align: 'right', msg: '歌词都冒出来了'},
        {name: 'ms12', delay: 1000, align: 'right', msg: '这样一看，我曾经认识的黄莹，得再重新认识一下了'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '今天去吃了一个荆州菜，感觉好好吃呀'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '第二个是这边的特产[奸笑]'},
        {name: 'ms15', delay: 1000, align: 'right', msg: '鱼糕撒'},
        {name: 'ms15', delay: 1000, align: 'left', msg: '是的，我前几天也刚吃'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '遇见是我的闹钟'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '这是我的精神粮食'},
        {name: 'ms15', delay: 1000, align: 'left', msg: '我其实很爱科比'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '要回大杭州了'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '是的，回到梦开始的地方'},
        {name: 'ms15', delay: 1000, align: 'right', msg: '这样说气势就比较足'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '黄三岁，三岁'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '哈哈哈，有点飘了'},
        {name: 'ms15', delay: 1000, align: 'left', msg: '觉得我比他小，比他弱，比他幼稚，比他小气，得照着我'},
        {name: 'ms15', delay: 1000, align: 'right', msg: '来自小男生天生的自信'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '好惨。。。翔哥我困了(இдஇ; )感觉今天被搞得太狠了[难过][难过][难过]大脑当机了已经'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '好的，睡觉吧'},
        {name: 'ms15', delay: 1000, align: 'right', msg: '早点睡好点'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '我感觉，快要走了，我身体各种不舒服了😂'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '牛排配红酒，再加一部电影，14天隔离就会过的很愉快'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '我也不晓得，就是不想学习的时候，几天做一下'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '估计十几个小时是有的吧。我做的慢'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '已经很好了'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '这手工活就很羡慕'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '得罪我的，我都用小本本记下来了'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '对你的小本本充满了好奇'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '我觉得你生活的环境，还是不错的'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '是，你已经带我看过了'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '晚安，你也可以安心睡觉了'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '嗯嗯，我恍惚一下'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '要起飞喽～'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '这是学校给我们备的零食'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '我看到了牛奶'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '单论这伙食，我觉得很nice'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '发完了，我就溜达了一会'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '尤其是那张香车美女'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '让人眼前一亮'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '来，是不是到24号了'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '给你一个安慰，今天我洗头了，哈哈哈。'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '[黄老师自拍超级美的美图]'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '哈哈哈，这就很棒'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '真美呢'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '我曾说过的话都陪伴着我度过流年，你曾爱过的人都相随着你度过余生'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '这个公众号的介绍就很..。'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '矫情'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '还好啊，我觉得可以先给你准备一个黄老师语录，然后给你记录下'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '然后我就跟大头说有人给我做这个,模板我也嫁.他说,走,哥带你现在去计算机学院,顺便送你8块钱.哈哈哈'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '没了没了,就是觉得我见识浅薄'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '哈哈哈，他就和我一样，波澜不惊'}
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '看了一个推荐帖子，我不想喝白葡萄酒，就买了这个'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '多少钱'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '不太懂这个，你就告诉味道如何'}
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '已经到了，并且躺着了'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '那感觉睡,还能睡个5小时'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '感恩，帮我度过了这个夜晚'}
    ],

    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '你的好多态度和细节,都觉得很温柔.人生看得就很清楚.'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '态度确实有，细节嘛，暂时别夸，这个确实欠缺很多'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '我的毕业论文，要写到：感谢曾先生对我学习的督促和支持'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '这就有点捧的高了'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '屋里光线非常好'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '光线好就很治愈，哈哈哈'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '一个人一间房？'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '对呀，就是几个人公用一个大厨房'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '这个应该还阔以，制造声音辅助睡眠的'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '哇塞'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '你这是在有效提高我的睡眠质量啊'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '没事儿没事儿，我看了一下天气预报，二到九度我都不知道穿啥'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '该裹的全裹上'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '这一早上太波折了'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '刚到教室，等待上课'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '我决定我要腌萝卜'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '腌萝卜是门技术活'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '仰慕大佬'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '我昨天晚上又把那个祈祷恋爱美食，快速的过了一下'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '是美食祈祷和恋爱'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '我正在愁看啥片子呢'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '那就它了，美食祈祷和恋爱'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '这个大佬对于现实中刻板的印象以及约定俗成的东西失去了兴趣，活在了自己构建的虚拟世界，不同于寻常，不约定某一种状态，就是自己认为最有趣的'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '你是我带过的最棒的学生'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '没有之一'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '今天我感觉和你之前一样了，嗓子也不舒服了'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '这还能隔空传染'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '你别甩锅'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '黄老师这个反应就很真实'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '今天好的差不多了，鼻涕也不流了'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '不错不错'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '要接着喝药哦'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '上辈子我没想到啥呢，可以有很多样子，但这辈子的你已在眼前，是独一无二的，遇见这辈子的你已足够幸运，非得加上上辈子的话，可能就是这辈子的相遇是上辈子的久别重逢'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '珍惜的是这辈子与你的时光'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '曾先生的话总是细水长流般滋润心田'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '黄老师刚发的照片给我的感觉就是如第一次初见'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '第一次初见？'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '所以不夸不舒服的感觉就上来了'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '你不是执行力挺强的嘛，怎么表个白这么磨叽'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '醒了有啥说的再说，我好好听着[奸笑]'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '哈哈，这是准确预计我要吐槽了，哈哈哈'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '此生只够爱一人'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '从前车马很慢，一生只够爱一人'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '我就很受用'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '起来做的第一件事'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '味道缺点啥，还需要再练习练习'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '真是满满的幸福'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '是淡了么，有玉米在的时候，都会偏香甜'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '所以，你很喜欢我吗？'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '不用咬牙，我陪着黄老师一路走下去'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '我常常在黑夜里睡不着'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '已经喜欢很久了'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '我就想成为黄老师的未来'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '那你努力一下'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '你的名字的笔画都是12哦～'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '我还是第一次知道'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '小时候嫌弃笔画多，写的哭'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '恋人也是12，家人也是12'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '我只是在路上'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '用我的方式，只是稍微笨了点'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '请问你是怎么收复我这两个闺蜜的？'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '没事呀，我不急，哈哈哈'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '我在布里斯托玩～'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '那不是得做大巴过去的'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '火车哦'}
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '捂上了我就说不了话了'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '这要怎么捂住？这是想让我亲你吗？'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '我觉得叫莹宝，也很可爱呀'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '只有我外婆这么叫我'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '莹宝'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '你心心念念的牛肉'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '深知我心'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '我今天上午还在想，牛肉什么时候登场'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '我妈特别喜欢那套红色的，感觉江湖气息，没烟火味，哈哈'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '世间尽有如此绝世出尘的女子'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '我喜欢第三张和最后一张'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '是的，你是不是有个啥要给我'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '就剪了一个之前很流行的小视频给你～'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '厉害了，莹宝有心了'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '只是那会觉得不太舒服'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '哈哈，没说这个哈，主要是要在乎你的人感到心安'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '莹宝做的就比我好太多了'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '莹宝遇见彩虹了，今天心情应该也不错'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '你觉得你不太能有这个？'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '一瞬间肯定是开心的呀，哈哈哈'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'right', msg: '哈哈哈，莹宝的奶音都让我感觉到是不是有点太残忍了，心都化了'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '以后这种事我还是少干，不忍心'},
        {name: 'ms14', delay: 1000, align: 'left', msg: '啊？该叫醒不还得叫醒'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '但是你刚才的截图来看我，确实已经交了'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '是的，已经提交了'},
    ],
    [
        {name: 'ms13', delay: 1000, align: 'left', msg: '我们9点出发哒'},
        {name: 'ms14', delay: 1000, align: 'right', msg: '真好，我现在就开始羡慕了'},
    ]
]
const timeList = [
    { year: 2020, month: 10, day: 4, id: 1},
    { year: 2020, month: 10, day: 4, id: 1},
    { year: 2020, month: 10, day: 5, id: 2},
    { year: 2020, month: 10, day: 5, id: 2},
    { year: 2020, month: 10, day: 6, id: 2},
    { year: 2020, month: 10, day: 6, id: 2},
    { year: 2020, month: 10, day: 7, id: 3},
    { year: 2020, month: 10, day: 8, id: 4},
    { year: 2020, month: 10, day: 8, id: 4},
    { year: 2020, month: 10, day: 9, id: 4},
    { year: 2020, month: 10, day: 11, id: 5},
    { year: 2020, month: 10, day: 11, id: 5},
    { year: 2020, month: 10, day: 14, id: 6},
    { year: 2020, month: 10, day: 17, id: 7},
    { year: 2020, month: 10, day: 18, id: 8},
    { year: 2020, month: 10, day: 20, id: 9},
    { year: 2020, month: 10, day: 21, id: 10},
    { year: 2020, month: 10, day: 23, id: 11},
    { year: 2020, month: 10, day: 24, id: 12},
    { year: 2020, month: 10, day: 25, id: 13},
    { year: 2020, month: 10, day: 27, id: 14},
    { year: 2020, month: 10, day: 30, id: 15},
    { year: 2020, month: 11, day: 1, id: 16},

    { year: 2020, month: 11, day: 2, id: 17},
    { year: 2020, month: 11, day: 3, id: 18},
    { year: 2020, month: 11, day: 4, id: 19},
    { year: 2020, month: 11, day: 5, id: 20},
    { year: 2020, month: 11, day: 6, id: 21},
    { year: 2020, month: 11, day: 7, id: 22},
    { year: 2020, month: 11, day: 8, id: 23},
    { year: 2020, month: 11, day: 9, id: 23},
    { year: 2020, month: 11, day: 14, id: 24},
    { year: 2020, month: 11, day: 19, id: 25},
    { year: 2020, month: 11, day: 20, id: 26},
    { year: 2020, month: 11, day: 22, id: 27},
    { year: 2020, month: 11, day: 26, id: 28},
    { year: 2020, month: 11, day: 28, id: 29},
    { year: 2020, month: 11, day: 28, id: 29},
    { year: 2020, month: 11, day: 29, id: 30},
    { year: 2020, month: 11, day: 30, id: 31},
    { year: 2020, month: 12, day: 1, id: 32},
    { year: 2020, month: 12, day: 2, id: 33},
    { year: 2020, month: 12, day: 5, id: 34},
    { year: 2020, month: 12, day: 6, id: 35},
    { year: 2020, month: 12, day: 7, id: 36},
    { year: 2020, month: 12, day: 8, id: 37},
    { year: 2020, month: 12, day: 9, id: 38},
    { year: 2020, month: 12, day: 12, id: 39},
    { year: 2020, month: 12, day: 13, id: 40},
    { year: 2020, month: 12, day: 15, id: 40},
    { year: 2020, month: 12, day: 16, id: 41},
    { year: 2020, month: 12, day: 18, id: 42},
    { year: 2020, month: 12, day: 20, id: 42},
]
const typedOptions = [
    {strings: ['再次寒暄时，依然是熟悉的味道, ...感觉回来了，一切都还在。 ^1000 没想到，第一天聊了很久，华丽的开场，嘿嘿'], typeSpeed: 100},
    {strings: ['知道了黄老师去英国的信息，有丝丝不舍, ^1000 也有一点小遗憾'], typeSpeed: 100},
    {strings: ['因为对艺术的敬仰，主要是不同，哈哈哈，聊起了黄老师专业的点点滴滴'], typeSpeed: 100},
    {strings: ['自然，也就顺便扯了些了我从事的专业'], typeSpeed: 100},
    {strings: ['黄老师聊起了一些碰到的问题，我开始炫技了，嘿嘿嘿 ^1000 内心觉得被需要还是蛮不错的',], typeSpeed: 100},
    {strings: ['聊到了黄老师的家人，也聊到了曾经发生过的故事，今晚感觉上头了，聊了好久'], typeSpeed: 100},
    {strings: ['感觉鱼糕这么神秘的食物第一次在外面出现，那接下来话题自然就是美食了'], typeSpeed: 100},
    {strings: ['今天聊到了各自喜欢的偶像，了解了彼此的精神食粮'], typeSpeed: 100},
    {strings: ['回到了工作的城市，城市这个词让我们聊起了旅行，工作，^1000以后的想法'], typeSpeed: 100},
    {strings: ['今天知道了黄老师还叫黄三岁，也知道了会说土味情话的侄儿'], typeSpeed: 100},
    {strings: ['聊到今天为止，黄老师第一次12点前睡觉，哈哈哈'], typeSpeed: 100},
    {strings: ['特殊时期，自然就说到了疫情，讨论黄老师隔离应该怎么吃 ^1000 吃货无疑了'], typeSpeed: 100},
    {strings: ['这几天提到的比较多的就是黄老师的在线课程了，不过偶然间知道了黄老师的手艺，真是了不起'], typeSpeed: 100},
    {strings: ['哈哈哈，知道了黄老师的还有个小本本，有点厉害了，居然还记得那次换司机开车'], typeSpeed: 100},
    {strings: ['未雨绸缪，帮黄老师想想去了英国之后怎么办，开始准备去英国了'], typeSpeed: 100},
    {strings: ['今天，黄老师就离开了，突然还有些些失落..., 一路顺风'], typeSpeed: 100},
    {strings: ['熬过了一整夜，黄老师终于到了，看到了各种零食和备好的餐点，算是有了慰藉，开始了在英国的分享'], typeSpeed: 100},
    {strings: ['黄老师第一次外出分享，都是美照，尤其那张香车旁的美女，嘿嘿'], typeSpeed: 100},
    {strings: ['今天1024，本身没啥特殊的，但收到了黄老师的祝福，开心开心极了'], typeSpeed: 100},
    {strings: ['原来黄老师还有个公众号，不得不说，文字写的真美，就和黄老师一样美'], typeSpeed: 100},
    {strings: ['听完这句话，我就暗想，黄老师可别忘了，嘿嘿嘿'], typeSpeed: 100},
    {strings: ['黄老师开始了一人饮酒醉的尝试，我想，应该就很迷人'], typeSpeed: 100},
    {strings: ['Wonderful tonight，虽然不是双十一，但有了幸福的“陪伴”'], typeSpeed: 100},

    {strings: ['上天派给我的任务是待你温柔呀'], typeSpeed: 100},
    {strings: ['"曾先生"第一次出现在我的视野，真好，但愿黄老师记得上面那句，哈哈哈'], typeSpeed: 100},
    {strings: ['今天黄老师搬到了新的宿舍，想想就开心'], typeSpeed: 100},
    {strings: ['找到了小睡眠，尝试着帮黄老师解决睡眠问题，睡不着真让人心疼，第一次觉得自己真能睡'], typeSpeed: 100},
    {strings: ['黄老师第一次在教室上课，感觉就很新奇，羡慕学生年代的生活'], typeSpeed: 100},
    {strings: ['不知道大佬的萝卜腌了没，哈哈哈哈哈哈哈哈'], typeSpeed: 100},
    {strings: ['看了黄老师喜欢的电影，没想到和黄老师的品味差不太多，后面一起看电影的日子得尽早安排上'], typeSpeed: 100},
    {strings: ['黄老师开始了第一堂教学，带我体验艺术的快乐，还得到了黄老师的谬赞，就很棒'], typeSpeed: 100},
    {strings: ['被打脸了，意外的感冒了，不过，收获到了黄老师时刻的关心，感觉和黄老师的距离也越来越近了'], typeSpeed: 100},
    {strings: ['在黄老师无微不至的关怀下，我的感冒好了，比个心'], typeSpeed: 100},
    {strings: ['你是我一眼望不尽的满心欢喜'], typeSpeed: 100},
    {strings: ['黄老师发了一张自拍，可真迷人，啧啧啧，眼前的黄老师越看越喜欢'], typeSpeed: 100},
    {strings: ['聊到了曾经的一段故事，不小心给黄老师留下了磨叽的印象，咳'], typeSpeed: 100},
    {strings: ['一生只够爱一个人，就是你了，当然今天又磨叽了'], typeSpeed: 100},
    {strings: ['第一次炒粉还不错，因为多了一个份调料，黄老师的甜'], typeSpeed: 100},
    {strings: ['我喜欢的人，有光，从此我也便有了光'], typeSpeed: 100},
    {strings: ['有了黄老师之后，开始对未来有了期许'], typeSpeed: 100},
    {strings: ['我想说：你的名字 ，是我见过最短的情诗'], typeSpeed: 100},
    {strings: ['此时此刻，你已经正在看了，哈哈哈哈'], typeSpeed: 100},
    {strings: ['黄老师去英国后的第一次旅行，景美但人更美'], typeSpeed: 100},
    {strings: ['这种可劲的甜蜜，以后可以多点，就很享受，嘿嘿'], typeSpeed: 100},
    {strings: ['今天过后，就开始甜蜜的叫莹宝啦，但黄老师这个称呼还是会想起来'], typeSpeed: 100},
    {strings: ['莹宝真是超级好，给我做了牛肉^1000 虽然吃不到，但心满意足'], typeSpeed: 100},
    {strings: ['莹宝给发了惊艳的照片，真好看，我的壁纸库又补充了不少，嘿嘿'], typeSpeed: 100},
    {strings: ['12.12又是个小惊喜，可把我乐坏了，美丽可爱的莹宝'], typeSpeed: 100},
    {strings: ['12.13出现了个小意外，惹莹宝不开心了，我承诺以后会加倍疼莹宝'], typeSpeed: 100},
    {strings: ['斯人若彩虹，遇上方知有'], typeSpeed: 100},
    {strings: ['第一次叫莹宝起床，好激动呀，世人见了你都称心动，唯独我醉了三千里'], typeSpeed: 100},
    {strings: ['莹宝终于写完了论文，终于可以放松下了，但熬了个夜，心疼'], typeSpeed: 100},
    {strings: ['莹宝开启了假日旅行，期待莹宝的分享哦～，一路顺风'], typeSpeed: 100},
]

;(function run(global) {
    const bgNode = document.getElementById('bg')
    const timerNode = document.getElementById('timer')

    const nextBtn = document.querySelector('.nav .next')
    const prevBtn = document.querySelector('.nav .prev')
    const $scene1 = $('#loadingPage')
    const $scene2 = $('.love-intro')
    const $scene3 = $('.slider-wrap')
    const $scene4 = $('#tail')
    const $scene5 = $('.coutdown')
    const $viewStoryBtn = $('.view-story')

    let storyIndex = 0
    let sceneIndex = 0
    
    let oldTime = null

    initTapLove()
    const res = initCountdown()
    if(res) {
        $scene5.fadeIn()
        fire()
        $('#snow').fadeIn() 
        const $music = $('#music')
        $('body').on('click', function () {
            $music.attr('src', './music/wanderful.mp3')
            $music[0].play()
        })
        return
    }
    $scene1.fadeIn()
    loadingImage().then(()=> {
        $scene1.fadeOut()
        setTimeout(()=> {
            $('#snow').fadeIn() 
            $scene2.fadeIn()
        }, 200)
    })
    
    toggleBg(sceneIndex)
    $viewStoryBtn.on('click', function() {
        $scene2.fadeOut()
        $scene3.fadeIn()
        setTimer(storyIndex)
        typed(storyIndex)
        global.startMessage(storyIndex)
        $('#music')[0].play()
    })
    const {next, prev } = initSlider()
    nextBtn.onclick = function() {
        storyIndex++
        next(storyIndex)
        typed(storyIndex)
        global.startMessage(storyIndex)
        if(storyIndex >= timeList.length) {
            destroyedSlider(()=> {
                const slider = document.querySelector('.slider-wrap')
                document.getElementById('app').removeChild(slider)
                toggleBg('en')

                $scene4.fadeIn()
                new Typed('#tail-content', {strings: ['回忆甚是甜蜜，甜蜜过后，是不是得做选择了呀，"点击"我看看'], typeSpeed: 100});
            })
        } else {
            toggleBg(storyIndex)
            setTimer(storyIndex)
            typed(storyIndex)
        }
    }
    prevBtn.onclick = function () {
        storyIndex--
        prev(storyIndex)
        typed(storyIndex)
        global.startMessage(storyIndex)
        if(storyIndex >= 0) {
            toggleBg(storyIndex)
            setTimer(storyIndex)
            typed(storyIndex)
        }
    }

    $('#tail-content').on('click', function() {
        Swal.fire(
            '莹宝',
            '喜欢你不是三分钟热度，是蓄谋已久后的深思熟虑，所以...，你愿意做我的<strong>女朋友</strong>么？',
        ).then(res => {
            if(res.isConfirmed) {
                const o = new Image()
                const t = new Date().getTime()
                localStorage.setItem('love_time', t) 
                o.src = 'https://www.brambling.cn/static/images/mp_code.jpg?t=' + t
                o.onLoad = function () {}
                $scene4.fadeOut()
                $scene5.fadeIn()
                initCountdown(t)
                fire()
                const $music = $('#music')
                $music.attr('src', './music/wanderful.mp3')
                $music[0].play()
            }
        })
    })

    function toggleBg(id) {
        if(id === undefined) {
            bgNode.style.backgroundImage = ''    
        } else {
            // https://cdn.brambling.cn/temp/bg0.jpeg
            if(typeof id === 'number') {
                const prefix = 'url(https://cdn.brambling.cn/temp/bg'
                // const prefix = 'url(./img/bg'
                bgNode.style.backgroundImage = prefix + ((id+1)%10) + '.jpeg)'
            } else {
                const prefix = 'url(https://cdn.brambling.cn/temp/'
                // const prefix = 'url(./img/'
                bgNode.style.backgroundImage = prefix + id + '.jpeg)'
            }
        }
    }
    function setTimer(index) {
        const nowTime = timeList[index]
        if(!oldTime) {
            oldTime = timeList[index]
        }
        if(oldTime.id === nowTime.id) {
            update(oldTime)
            return
        }
        anime({
            targets: oldTime,
            ...nowTime,
            round: 1,
            easing: 'linear',
            update: function () {
                update(oldTime)
            }
        })
        function update(newTime) {
            timerNode.querySelector('.year').innerHTML = newTime.year
            timerNode.querySelector('.month').innerHTML = newTime.month
            timerNode.querySelector('.day').innerHTML = newTime.day
        }
    }

})(window)

function loadingImage() {
    return new Promise((resolve, reject)=> {
        const imgList = [
            'https://cdn.brambling.cn/temp/en.jpeg',
            'https://cdn.brambling.cn/temp/china.png',
        ]
        for(let i = 0; i <= 10; i++) {
            imgList.push('https://cdn.brambling.cn/temp/bg' + i + '.jpeg')
        }
        let count = 0
        for(let i = 0; i < imgList.length; i++) {
            const oImg = new Image()
            oImg.src = imgList[i]
            oImg.onload = function() {
                progress()
            }
            oImg.onerror = function () {
                progress()
            }
        }
        function progress() {
            count++
            document.getElementById('loadingProgress').innerHTML = Math.ceil((count/(imgList.length*2))*100) + '%'
            if(count === imgList.length) {
                timeProgress()
            }
        }

        let timerCount = 60
        let timer = null
        function timeProgress() {
            timer = setTimeout(()=> {
                timerCount++
                if(timerCount >= 100) {
                    clearTimeout(timer)
                    timer = null
                    resolve()
                    return
                } else {
                    document.getElementById('loadingProgress').innerHTML = timerCount + '%'
                }
                timeProgress()
            }, 150)
        }
    })
}

function initTapLove() {
    $('body').on('click', function (e) {
        const love = document.createElement('div')
        love.className = 'love'
        love.style.animation = 'heart-burst steps(28) 0.8s both'
        const halfWidth = 50
        love.style.left = e.pageX - halfWidth + 'px'
        love.style.top = e.pageY - halfWidth + 'px'
        love.addEventListener(
            'animationend',
            function () {
                document.body.removeChild(love)
            },
            false
        )
        $('body').append(love)
    })
}
function initSlider() {
    const slider = document.querySelector('.slider')
    const items = slider.querySelectorAll('.chat-message-list li')
    const current = 0

    function anim(current, next, callback) {
        const duration = 400
        const offset = '-=' + 300

        const tl = anime.timeline({
            easing: 'easeInOutQuint',
            duration: duration,
            complete: callback,
        })
        const animatinoList = [
            {
                translateY: [0, '-.75em'],
                opacity: [1, 0],
                easing: 'easeInQuint',
                duration: 600,
                delay: (el, i) => 10 * (i + 1),
            },
            {
                translateY: -600,
                rotate: [0, '-15deg'],
                opacity: [1, 0],
                easing: 'easeInCubic',
            },
            {
                translateY: -600,
                rotate: [0, '15deg'],
                opacity: [1, 0],
                easing: 'easeInCubic',
            },
            {
                translateY: -600,
                rotate: [0, '-15deg'],
                opacity: [1, 0],
                easing: 'easeInCubic',
            },
            {
                translateY: -600,
                rotate: [0, '15deg'],
                opacity: [1, 0],
                easing: 'easeInCubic',
            }
        ]
        let r = null
        for(let i = 0; i < items.length; i++) {
            if(!r) {
                r = tl.add(animatinoList[i])
            } else {
                r = r.add(animatinoList[i])
            }
        }
    }

    let isPlaying = false

    function updateSlider(newIndex) {
        const currentItem = items[current]

        function callback() {
            currentItem.classList.remove('is-active')
            current = newIndex
            isPlaying = false
        }

        anim(currentItem, callback)
    }

    function next(index) {
        if (isPlaying) return
        isPlaying = true
        // updateSlider(index)
    }

    function prev(index) {
        if (isPlaying) return
        isPlaying = true
        // updateSlider(index)
    }
    
    return {
        next,
        prev
    }
}

let typedIns = null
function typed(index) {
    if(typedIns) {
        typedIns.destroy()
    }
    setTimeout(()=> {
        $('.typed-cursor').remove()
        $('#typed').html('')
        typedIns = new Typed('#typed', typedOptions[index]);
    }, 2000)
}

function destroyedSlider(cb) {
    anime({
        targets: '.slider-wrap',
        scale: 1.2,
        opacity: 0,

        easing: 'easeInOutQuad',
        complete: ()=> {
            cb()
        }
    })
}



;(function () {
    const requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60)
        }
    window.requestAnimationFrame = requestAnimationFrame

    var flakes = [],
        canvas = document.getElementById('snow'),
        ctx = canvas.getContext('2d'),
        flakeCount = 300,
        mX = -100,
        mY = -100

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    function snow() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (var i = 0; i < flakeCount; i++) {
            var flake = flakes[i],
                x = mX,
                y = mY,
                minDist = 150,
                x2 = flake.x,
                y2 = flake.y

            var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
                dx = x2 - x,
                dy = y2 - y

            if (dist < minDist) {
                var force = minDist / (dist * dist),
                    xcomp = (x - x2) / dist,
                    ycomp = (y - y2) / dist,
                    deltaV = force / 2

                flake.velX -= deltaV * xcomp
                flake.velY -= deltaV * ycomp
            } else {
                flake.velX *= 0.99
                if (flake.velY <= flake.speed) {
                    flake.velY = flake.speed
                }
                flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize
            }

            ctx.fillStyle = 'rgba(255,255,255,' + flake.opacity + ')'
            flake.y += flake.velY
            flake.x += flake.velX

            if (flake.y >= canvas.height || flake.y <= 0) {
                reset(flake)
            }

            if (flake.x >= canvas.width || flake.x <= 0) {
                reset(flake)
            }

            ctx.beginPath()
            ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2)
            ctx.fill()
        }
        requestAnimationFrame(snow)
    }

    function reset(flake) {
        flake.x = Math.floor(Math.random() * canvas.width)
        flake.y = 0
        flake.size = Math.random() * 3 + 2
        flake.speed = Math.random() * 1 + 0.5
        flake.velY = flake.speed
        flake.velX = 0
        flake.opacity = Math.random() * 0.5 + 0.3
    }

    function init() {
        for (var i = 0; i < flakeCount; i++) {
            var x = Math.floor(Math.random() * canvas.width),
                y = Math.floor(Math.random() * canvas.height),
                size = Math.random() * 3 + 2,
                speed = Math.random() * 1 + 0.5,
                opacity = Math.random() * 0.5 + 0.3

            flakes.push({
                speed: speed,
                velY: speed,
                velX: 0,
                x: x,
                y: y,
                size: size,
                stepSize: Math.random() / 30,
                step: 0,
                opacity: opacity,
            })
        }
        snow()
    }

    document.body.addEventListener('click', function (e) {
        mX = e.clientX
        mY = e.clientY
    })
    init()
})()

function initCountdown(timestamp) {
    let startTimer
    if(!timestamp) {
        startTimer = localStorage.getItem('love_time')
        if(startTimer) {
            // startTimer = Number(startTimer)
            startTimer = 1606621080000 // new Date('2020.11.29 11:38')
        } else {
            return false
        }
    } else {
        // startTimer = new Date(timestamp).getTime()
        startTimer = 1606621080000
    }
    // countdown
    let timer = setInterval(function() {
        const today = new Date().getTime();
        let diff = today - startTimer

        // math
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        // display
        document.getElementById("countdown-timer").innerHTML =
            "<div class=\"days timer_heart\"> \
        <div class=\"numbers \">" + days + "</div><span class=\"unit\">天</span></div> \
        <div class=\"hours timer_heart\"> \
        <div class=\"numbers \">" + hours + "</div><span class=\"unit\">时</span></div> \
        <div class=\"minutes timer_heart\"> \
        <div class=\"numbers \">" + minutes + "</div><span class=\"unit\">分</span></div> \
        </div>";

        // <div class=\"seconds\"> \<div class=\"numbers\">" + seconds + "</div>sec</div> \

    }, 1000);
    return true
}


;(function (win) {
    
    var chatDelay = 0
    function onRowAdded() {
        $('.chat-container').animate({
            scrollTop: $('.chat-container').prop('scrollHeight'),
        })
    }

    function start(index) {
        const messageList = chatMessages[index]
        if(index) {
            $('.chat-message-list').html('')
            chatDelay = 0
        }
        $.each(messageList, function (index, obj) {
            chatDelay = chatDelay + 1000
            chatDelay2 = chatDelay + obj.delay
            chatDelay3 = chatDelay2 + 10

            scrollDelay = chatDelay
            chatTimeString = ' '
            msgname = '.' + obj.name
            msginner = '.messageinner-' + obj.name
            spinner = '.sp-' + obj.name
            let lAvatar = obj.align === 'left' ? '<span class="avatar l-avatar" ></span>' : ''
            let rAvatar = obj.align === 'right' ? '<span class="avatar r-avatar"></span>' : ''
            $('.chat-message-list').append(
                "<li class='message-item message-" + obj.align + ' ' + obj.name + "' hidden><div class='wrap'><div class='sp-wrapper sp-" +
                    obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" +
                    obj.name + " msg-content' hidden>" + lAvatar+ "<span class='message-text'>" + obj.msg + '</span>' + rAvatar +
                    '</div></div></li>'
            )
            $(msgname).delay(chatDelay).fadeIn()
            $(spinner).delay(chatDelay2).hide(1)
            $(msginner).delay(chatDelay3).fadeIn()
            setTimeout(onRowAdded, chatDelay3)
            chatDelay = chatDelay3
        })
    }
    win.startMessage = start
})(window)


function fire() {
    var RENDERER = {
        LEAF_INTERVAL_RANGE : {min : 100, max : 200},
        FIREWORK_INTERVAL_RANGE : {min : 20, max : 200},
        SKY_COLOR : 'hsla(210, 60%, %luminance%, 0.2)',
        STAR_COUNT : 100,
        
        init : function(){
            this.setParameters();
            this.reconstructMethod();
            this.createTwigs();
            this.createStars();
            this.render();
        },
        setParameters : function(){
            this.$container = $('#jsi-fireworks-container');
            this.width = this.$container.width();
            this.height = this.$container.height();
            this.distance = Math.sqrt(Math.pow(this.width / 2, 2) + Math.pow(this.height / 2, 2));
            this.contextFireworks = $('<canvas class="fire-canvas" />').attr({width : this.width, height : this.height}).appendTo(this.$container).get(0).getContext('2d');
            this.contextTwigs = $('<canvas class="fire-canvas" />').attr({width : this.width, height : this.height}).appendTo(this.$container).get(0).getContext('2d');
            
            this.twigs = [];
            this.leaves = [new LEAF(this.width, this.height, this)];
            this.stars = [];
            this.fireworks = [new FIREWORK(this.width, this.height, this)];
            
            this.leafInterval = this.getRandomValue(this.LEAF_INTERVAL_RANGE) | 0;
            this.maxFireworkInterval = this.getRandomValue(this.FIREWORK_INTERVAL_RANGE) | 0;
            this.fireworkInterval = this.maxFireworkInterval;
        },
        reconstructMethod : function(){
            this.render = this.render.bind(this);
        },
        getRandomValue : function(range){
            return range.min + (range.max - range.min) * Math.random();
        },
        createTwigs : function(){
            this.twigs.push(new TWIG(this.width, this.height, 0, 0, Math.PI * 3 / 4, 0));
            this.twigs.push(new TWIG(this.width, this.height, this.width, 0, -Math.PI * 3 / 4, Math.PI));
            this.twigs.push(new TWIG(this.width, this.height, 0, this.height, Math.PI / 4, Math.PI));
            this.twigs.push(new TWIG(this.width, this.height, this.width, this.height, -Math.PI / 4, 0));
        },
        createStars : function(){
            for(var i = 0, length = this.STAR_COUNT; i < length; i++){
                this.stars.push(new STAR(this.width, this.height, this.contextTwigs, this));
            }
        },
        render : function(){
            requestAnimationFrame(this.render);
            
            var maxOpacity = 0,
                contextTwigs = this.contextTwigs,
                contextFireworks = this.contextFireworks;
            
            for(var i = this.fireworks.length - 1; i >= 0; i--){
                maxOpacity = Math.max(maxOpacity, this.fireworks[i].getOpacity());
            }
            contextTwigs.clearRect(0, 0, this.width, this.height);
            contextFireworks.fillStyle = this.SKY_COLOR.replace('%luminance', 5 + maxOpacity * 15);
            contextFireworks.fillRect(0, 0, this.width, this.height);
            
            for(var i = this.fireworks.length - 1; i >= 0; i--){
                if(!this.fireworks[i].render(contextFireworks)){
                    this.fireworks.splice(i, 1);
                }
            }
            for(var i = this.stars.length - 1; i >= 0; i--){
                this.stars[i].render(contextTwigs);
            }
            for(var i = this.twigs.length - 1; i >= 0; i--){
                this.twigs[i].render(contextTwigs);
            }
            for(var i = this.leaves.length - 1; i >= 0; i--){
                if(!this.leaves[i].render(contextTwigs)){
                    this.leaves.splice(i, 1);
                }
            }
            if(--this.leafInterval == 0){
                this.leaves.push(new LEAF(this.width, this.height, this));
                this.leafInterval = this.getRandomValue(this.LEAF_INTERVAL_RANGE) | 0;
            }
            if(--this.fireworkInterval == 0){
                this.fireworks.push(new FIREWORK(this.width, this.height, this));
                this.maxFireworkInterval = this.getRandomValue(this.FIREWORK_INTERVAL_RANGE) | 0;
                this.fireworkInterval = this.maxFireworkInterval;
            }
        }
    };
    var TWIG = function(width, height, x, y, angle, theta){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.theta = theta;
        this.rate = Math.min(width, height) / 500;
    };
    TWIG.prototype = {
        SHAKE_FREQUENCY : Math.PI / 300,
        MAX_LEVEL : 4,
        COLOR : 'hsl(120, 60%, 1%)',
        
        renderBlock : function(context, x, y, length, level, angle){
            context.save();
            context.translate(x, y);
            context.rotate(this.angle + angle * (level + 1));
            context.scale(this.rate, this.rate);
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, -length);
            context.stroke();
            context.fill();
            
            if(level == this.MAX_LEVEL){
                length = length / (1 - level / 10);
                
                context.save();
                context.beginPath();
                context.scale(1 - level / 10, 1 - level / 10);
                context.moveTo(0, -length);
                context.quadraticCurveTo(30, -length - 20, 0, -length - 80);
                context.quadraticCurveTo(-30, -length - 20, 0, -length);
                context.stroke();
                context.fill();
                context.restore();
                context.restore();
            }else{
                for(var i = -1; i <= 1; i += 2){
                    context.save();
                    context.translate(0, -40);
                    context.rotate((Math.PI / 3 - Math.PI / 20 * level) * i);
                    context.scale(1 - level / 10, 1 - level / 10);
                    context.beginPath();
                    context.moveTo(0, 0);
                    context.lineTo(0, -length * 0.8);
                    context.quadraticCurveTo(30, -length * 0.8 - 20, 0, -length * 0.8 - 80);
                    context.quadraticCurveTo(-30, -length * 0.8 - 20, 0, -length * 0.8);
                    context.stroke();
                    context.fill();
                    context.restore();
                }
                context.restore();
                level++;
                this.renderBlock(context, x + 40 * Math.sin(this.angle + angle * level), y - 40 * Math.cos(this.angle + angle * level) , length, level, angle);
            }
        },
        render : function(context){
            context.fillStyle = this.COLOR;
            context.strokeStyle = this.COLOR;
            context.lineWidth = 3;
            this.renderBlock(context, this.x, this.y, 40, 0,  Math.PI / 48 * Math.sin(this.theta));
            this.theta += this.SHAKE_FREQUENCY;
            this.theta %= Math.PI * 2;
        }
    };
    var LEAF = function(width, height, renderer){
        this.width = width;
        this.height = height;
        this.renderer = renderer;
        this.init();
    };
    LEAF.prototype = {
        OFFSET : 100,
        VELOCITY_Y : 3,
        COLOR : 'hsl(120, 60%, 1%)',
        
        init : function(){
            this.x = this.renderer.getRandomValue({min : 0, max : this.width});
            this.y = -this.OFFSET;
            this.vx = this.renderer.getRandomValue({min : 0, max : 1}) * (this.x <= this.width / 2 ? 1 : -1);
            this.vy = this.VELOCITY_Y;
            
            this.rate = this.renderer.getRandomValue({min : 0.4, max : 0.8});
            this.theta = this.renderer.getRandomValue({min : 0, max : Math.PI * 2});
            this.deltaTheta = this.renderer.getRandomValue({min : -Math.PI / 300, max : Math.PI / 300});
        },
        render : function(context){
            context.save();
            context.filleStyle = this.COLOR;
            context.translate(this.x, this.y);
            context.rotate(this.theta);
            context.scale(this.rate, this.rate);
            context.beginPath();
            context.moveTo(0, 0);
            context.quadraticCurveTo(30, -20, 0, -80);
            context.quadraticCurveTo(-30, -20, 0, 0);
            context.fill();
            context.restore();
            
            this.x += this.vx * this.rate;
            this.y += this.vy * this.rate;
            this.theta += this.deltaTheta;
            this.theta %= Math.PI * 2;
            
            return this.y <= this.height + this.OFFSET && this.x >= -this.OFFSET && this.x <= this.width + this.OFFSET;
        }
    };
    var STAR = function(width, height, context, renderer){
        this.width = width;
        this.height = height;
        this.renderer = renderer;
        this.init(context);
    };
    STAR.prototype = {
        RADIUS_RANGE : {min : 1, max : 4},
        COUNT_RANGE : {min : 100, max : 1000},
        DELTA_THETA : Math.PI / 30,
        DELTA_PHI : Math.PI / 50000,
        
        init : function(context){
            this.x = this.renderer.getRandomValue({min : 0, max : this.width});
            this.y = this.renderer.getRandomValue({min : 0, max : this.height});
            this.radius = this.renderer.getRandomValue(this.RADIUS_RANGE);
            this.maxCount = this.renderer.getRandomValue(this.COUNT_RANGE) | 0;
            this.count = this.maxCount;
            this.theta = 0;
            this.phi = 0;
            
            this.gradient = context.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            this.gradient.addColorStop(0, 'hsla(220, 80%, 100%, 1)');
            this.gradient.addColorStop(0.1, 'hsla(220, 80%, 80%, 1)');
            this.gradient.addColorStop(0.25, 'hsla(220, 80%, 50%, 1)');
            this.gradient.addColorStop(1, 'hsla(220, 80%, 30%, 0)');
        },
        render : function(context){
            context.save();
            context.globalAlpha = Math.abs(Math.cos(this.theta));
            context.translate(this.width / 2, this.height / 2);
            context.rotate(this.phi);
            context.translate(this.x - this.width / 2, this.y - this.height / 2);
            context.beginPath();
            context.fillStyle = this.gradient;
            context.arc(0, 0, this.radius, 0, Math.PI * 2, false);
            context.fill();
            context.restore();
            
            if(--this.count == 0){
                this.theta = Math.PI;
                this.count = this.maxCount;
            }
            if(this.theta > 0){
                this.theta -= this.DELTA_THETA;
            }
            this.phi += this.DELTA_PHI;
            this.phi %= Math.PI / 2;
        }
    };
    var FIREWORK = function(width, height, renderer){
        this.width = width;
        this.height = height;
        this.renderer = renderer;
        this.init();
    };
    FIREWORK.prototype = {
        COLOR : 'hsl(%hue, 80%, 60%)',
        PARTICLE_COUNT : 300,
        DELTA_OPACITY : 0.01,
        RADIUS : 2,
        VELOCITY : -3,
        WAIT_COUNT_RANGE : {min : 30, max : 60},
        THRESHOLD : 50,
        DELTA_THETA : Math.PI / 10,
        GRAVITY : 0.002,
        
        init : function(){
            this.setParameters();
            this.createParticles();
        },
        setParameters : function(){
            var hue = 256 * Math.random() | 0;
                
            this.x = this.renderer.getRandomValue({min : this.width / 8, max : this.width * 7 / 8});
            this.y = this.renderer.getRandomValue({min : this.height / 4, max : this.height / 2});
            this.x0 = this.x;
            this.y0 = this.height + this.RADIUS;
            this.color = this.COLOR.replace('%hue', hue);
            this.status = 0;
            this.theta = 0;
            this.waitCount = this.renderer.getRandomValue(this.WAIT_COUNT_RANGE);
            this.opacity = 1;
            this.velocity = this.VELOCITY;
            this.particles = [];
        },
        createParticles : function(){
            for(var i = 0, length = this.PARTICLE_COUNT; i < length; i++){
                this.particles.push(new PARTICLE(this.x, this.y, this.renderer));
            }
        },
        getOpacity : function(){
            return this.status == 2 ? this.opacity : 0;
        },
        render : function(context){
            switch(this.status){
            case 0:
                context.save();
                context.fillStyle = this.color;
                context.globalCompositeOperation = 'lighter';
                context.globalAlpha = (this.y0 - this.y) <= this.THRESHOLD ? ((this.y0 - this.y) / this.THRESHOLD) : 1;
                context.translate(this.x0 + Math.sin(this.theta) / 2, this.y0);
                context.scale(0.8, 2.4);
                context.beginPath();
                context.arc(0, 0, this.RADIUS, 0, Math.PI * 2, false);
                context.fill();
                context.restore();
                
                this.y0 += this.velocity;
                
                if(this.y0 <= this.y){
                    this.status = 1;
                }
                this.theta += this.DELTA_THETA;
                this.theta %= Math.PI * 2;
                this.velocity += this.GRAVITY;
                return true;
            case 1:
                if(--this.waitCount <= 0){
                    this.status = 2;
                }
                return true;
            case 2:
                context.save();
                context.globalCompositeOperation = 'lighter';
                context.globalAlpha = this.opacity;
                context.fillStyle = this.color;
                
                for(var i = 0, length = this.particles.length; i < length; i++){
                    this.particles[i].render(context, this.opacity);
                }
                context.restore();
                this.opacity -= this.DELTA_OPACITY;
                return this.opacity > 0;
            }
        }
    };
    var PARTICLE = function(x, y, renderer){
        this.x = x;
        this.y = y;
        this.renderer = renderer;
        this.init();
    };
    PARTICLE.prototype = {
        RADIUS : 1.5,
        VELOCITY_RANGE : {min : 0, max : 3},
        GRAVITY : 0.02,
        FRICTION : 0.98,
        
        init : function(){
            var radian = Math.PI * 2 * Math.random(),
                velocity = (1 - Math.pow(Math.random(), 6)) * this.VELOCITY_RANGE.max,
                rate = Math.random();
                
            this.vx = velocity * Math.cos(radian) * rate;
            this.vy = velocity * Math.sin(radian) * rate;
        },
        render : function(context, opacity){
            context.beginPath();
            context.arc(this.x, this.y, this.RADIUS, 0, Math.PI * 2, false);
            context.fill();
            
            this.x += this.vx;
            this.y += this.vy;
            this.vy += this.GRAVITY;
            this.vx *= this.FRICTION;
            this.vy *= this.FRICTION;
        }
    };
    $(function(){
        RENDERER.init();
    });
}