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
        {name: 'ms14', delay: 1000, align: 'right', msg: '那感觉睡,你笑起来很好看的你应该知道的'},
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
    /* { year: 2020, month: 10, day: 4, id: 1},
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
    { year: 2020, month: 12, day: 20, id: 42}, */
]
const typedOptions = [
    {strings: ['再次寒暄时，依然是熟悉的味道, ...感觉回来了，一切都还在 ^1000', '没想到，第一天聊了很久，华丽的开场'], typeSpeed: 100},
    {strings: ['知道了黄老师去英国的信息，有丝丝不舍, ^1000 也有一点遗憾'], typeSpeed: 100},
    {strings: ['因为对艺术的敬仰，聊起了专业的点点滴滴'], typeSpeed: 100},
    {strings: ['自然，今天也叫聊到了我的专业'], typeSpeed: 100},
    {strings: ['黄老师碰到了问题，我开始炫技了，嘿嘿嘿 ^1000', '内心觉得被人需要还是蛮不错的'], typeSpeed: 100},
    {strings: ['聊到了黄老师的家人，也聊到了曾经发生过的故事，今晚感觉上头了，聊了好久'], typeSpeed: 100},
    {strings: ['没想到黄老师还吃到了鱼糕，那话题自然就是家乡了'], typeSpeed: 100},
    {strings: ['今天聊到了各自喜欢的偶像，交换了精神食粮'], typeSpeed: 100},
    {strings: ['回到了工作的城市，城市这个词让我们想起来旅行，工作'], typeSpeed: 100},
    {strings: ['今天知道了黄老师还叫黄三岁，也知道了会说土味情话的侄儿'], typeSpeed: 100},
    {strings: ['聊到今天，黄老师第一次12点前睡觉，哈哈哈'], typeSpeed: 100},
    {strings: ['因为特殊时期，自然就说到了疫情，讨论黄老师隔离应该怎么吃 ^1000', '吃货无疑了'], typeSpeed: 100},
    {strings: ['这几天提到的比较多的就是黄老师的在线课程了，不过偶然间知道了黄老师的手艺，真是了不起'], typeSpeed: 100},
    {strings: ['哈哈哈，知道了黄老师的还有个小本本，有点厉害了，居然还记得那次换司机开车'], typeSpeed: 100},
    {strings: ['未雨绸缪，帮黄老师想想去了英国之后怎么办，开始准备去英国了'], typeSpeed: 100},
    {strings: ['今天，黄老师就离开了，突然还有些些失落..., 一路顺风'], typeSpeed: 100},
    {strings: ['熬过了一整夜，黄老师终于到了，看到了各种零食和备好的餐点，算是有了慰藉，开始了在英国的分享'], typeSpeed: 100},
    {strings: ['黄老师第一次外出分享，都是美照，尤其那张香车美女，嘿嘿'], typeSpeed: 100},
    {strings: ['今天1024，本身没啥特殊的，但收到了黄老师的祝福，开心开心极了'], typeSpeed: 100},
    {strings: ['原来黄老师还有个公众号，不得不说，文字写的真美，就和黄老师一样美'], typeSpeed: 100},
    {strings: ['听完这句话，我就埋下了种子，嘿嘿嘿'], typeSpeed: 100},
    {strings: ['黄老师开始了一人饮酒醉的尝试，我想，应该很迷人'], typeSpeed: 100},
    {strings: ['Wonderful tonight，虽然不是双十一，但有了陪伴'], typeSpeed: 100},

    {strings: ['上天派给我的任务是待你温柔呀'], typeSpeed: 100},
    {strings: ['"曾先生"第一次出现在我的视野，真好，但愿你记得，哈哈哈'], typeSpeed: 100},
    {strings: ['今天莹宝搬到了新的宿舍，想想就开心'], typeSpeed: 100},
    {strings: ['找到了小睡眠，尝试着帮黄老师解决睡眠问题，睡不着真让人心疼'], typeSpeed: 100},
    {strings: ['黄老师第一次在教室上课，感觉就很新奇，棒'], typeSpeed: 100},
    {strings: ['不知道大佬的萝卜腌了没，哈哈哈哈'], typeSpeed: 100},
    {strings: ['看了黄老师喜欢的电影，一起看电影的日子得尽早安排上'], typeSpeed: 100},
    {strings: ['黄老师开始了第一堂教学'], typeSpeed: 100},
    {strings: ['今天意外的感冒了，感觉黄老师的关心无时不在，距离也越来越近了'], typeSpeed: 100},
    {strings: ['在黄老师无微不至的关怀下，我的感冒好了，比个心'], typeSpeed: 100},
    {strings: ['你是我一眼望不尽的满心欢喜'], typeSpeed: 100},
    {strings: ['黄老师发了一张自拍，我沉沦了，真迷人'], typeSpeed: 100},
    {strings: ['聊到了曾经的一段故事，给黄老师留下了磨叽的印象'], typeSpeed: 100},
    {strings: ['一生只够爱一个人，就是你了，当然今天又磨叽了'], typeSpeed: 100},
    {strings: ['第一次炒粉还不错，因为多了一个份调料，黄老师的甜'], typeSpeed: 100},
    {strings: ['我喜欢的人，有光，从此我便有了光'], typeSpeed: 100},
    {strings: ['有了黄老师之后，开始对未来有了期许'], typeSpeed: 100},
    {strings: ['我想说：你的名字 ，是我见过最短的情诗'], typeSpeed: 100},
    {strings: ['此时此刻，你已经看到了，哈哈哈哈'], typeSpeed: 100},
    {strings: ['黄老师去英国后的第一次旅行，景美黄老师更美'], typeSpeed: 100},
    {strings: ['可劲的甜蜜，以后可以多点，嘿嘿'], typeSpeed: 100},
    {strings: ['今天过后，就开始甜蜜的叫莹宝啦，但黄老师这个称呼还是会想起来'], typeSpeed: 100},
    {strings: ['莹宝真是超级好，给我做了牛肉'], typeSpeed: 100},
    {strings: ['莹宝给我发了惊艳的照片，真美啊，我的壁纸库又补充了不少，嘿嘿'], typeSpeed: 100},
    {strings: ['12.12又是个小惊喜，可把我乐坏了，美丽可爱的莹宝'], typeSpeed: 100},
    {strings: ['12.13出现了个小意外，惹莹宝不开心了，以后会加倍疼莹宝'], typeSpeed: 100},
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
    loadingImage().then(()=> {
        $scene1.fadeOut()
        setTimeout(()=> {
            $('#snow').css('opacity', 1) 
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
                toggleBg()
                $scene4.fadeIn()
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
        if(index >= 0) {
            toggleBg(storyIndex)
            setTimer(storyIndex)
            typed(storyIndex)
        }
    }

    function toggleBg(id) {
        if(id === undefined) {
            bgNode.style.backgroundImage = ''    
        } else {
            bgNode.style.backgroundImage = 'url(./img/bg' + (id+1) + '.jpeg)'
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
        let count = 0
        let timer = null
        function progress() {
            timer = setTimeout(()=> {
                count++
                if(count >= 101) {
                    clearTimeout(timer)
                    timer = null
                    resolve()
                    return
                } else {
                    document.getElementById('loadingProgress').innerHTML = count + '%'
                }
                progress()
            }, 0)
        }
        progress()
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
        updateSlider(index)
    }

    function prev(index) {
        if (isPlaying) return
        isPlaying = true
        updateSlider(index)
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
