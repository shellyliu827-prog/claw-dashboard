/**
 * data.js — 唯一数据源
 * 三层页面（年度 / 季度 / 月度）统一读取此文件
 * 修改目标时只改这里，三个页面自动同步
 */

// ── Q2 2026 目标列表 ────────────────────────────────────────────────────────
// status: 'active' | 'done' | 'skip'
// type:   'progress' | 'checkin' | 'list'
//   progress → 进度条 + 简短描述
//   checkin  → 文字状态描述
//   list     → 子项清单（用 items[]）
//
// showInMonthBadge: true  → 出现在月度页顶部 goals-bar 徽章里
// showInMonthCard:  true  → 出现在月度页底部 goal-card 卡片里

const Q2_GOALS = [
  {
    id: 'dance',
    icon: '💃',
    name: '舞蹈',
    hint: 'G社 160次 · 每周2节 · 到期 2027/7/27',
    status: 'active',
    type: 'checkin',
    checkinText: '本季已跳 0 节',
    checkinStyle: 'font-size:1.05rem;color:#f0c040;font-weight:600;',
    showInMonthBadge: true,
    showInMonthCard: true,
    cardDesc: 'G社每周2节 · 顺其自然<br>160次 → 2027/7/27'
  },
  {
    id: 'reading',
    icon: '📖',
    name: '输入 &amp; 写作',
    nameRaw: '输入 & 写作',
    hint: '观影 + 阅读 = 输入，写作不量化',
    status: 'active',
    type: 'media_count',   // 特殊类型：页面从 MEDIA_LOG 动态读取当季数量
    mediaTypes: ['movie', 'tv', 'book'],  // 统计这三类，不含音乐
    wishlist: [
      { title: '🎬 挽救计划', status: 'pending' },
      { title: '🎬 我许可',   status: 'pending' },
      { title: '🎬 太平年',   status: 'pending' }
    ],
    checkinEmpty: '暂无记录',
    showInMonthBadge: true,
    showInMonthCard: true,
    cardDesc: '观影 + 阅读 = 输入<br>写作：有感觉就写，不强迫'
  },
  {
    id: 'dentist',
    icon: '🦷',
    name: '看牙',
    hint: '和室友约一次洗牙',
    status: 'active',
    type: 'progress',
    progress: 0,
    checkinEmpty: '还没约，快去发消息',
    showInMonthBadge: true,
    showInMonthCard: true,
    cardDesc: '和室友约一次洗牙<br>这个季度完成它！'
  },
  {
    id: 'ear',
    icon: '👂',
    name: '看耳朵',
    hint: '右耳耳鸣，去医院查一查',
    status: 'active',
    type: 'progress',
    progress: 0,
    checkinEmpty: '还没去，别再拖了',
    showInMonthBadge: true,
    showInMonthCard: true,
    cardDesc: '右耳耳鸣 · 去医院查一查<br>别再拖了'
  },
  {
    id: 'declutter',
    icon: '🏠',
    name: '断舍离',
    hint: '翻翻家里的东西，出掉闲置',
    status: 'active',
    type: 'progress',
    progress: 0,
    checkinEmpty: '暂无记录，快去打卡～',
    showInMonthBadge: true,
    showInMonthCard: true,
    cardDesc: '翻翻家里的东西<br>出掉一些闲置'
  },
  {
    id: 'social',
    icon: '📱',
    name: '自媒体更新',
    hint: '把灵感库里的内容发出来',
    status: 'active',
    type: 'checkin',
    checkinText: '本季已发 4 条',
    checkinStyle: 'font-size:1.05rem;color:#f0c040;font-weight:600;',
    checkinSub: 'Delulu · 地球online · Like A Flower×2',
    showInMonthBadge: true,
    showInMonthCard: true,
    cardDesc: '把灵感库里的内容发出来<br>创造力要有出口'
  },
  {
    id: 'game',
    icon: '🎮',
    name: '游戏',
    hint: '✅ DS一周目通关 · 燕云剧情 · 世界之外补完',
    status: 'active',
    type: 'checkin',
    checkinText: '✅ DS一周目 4/17通关',
    checkinStyle: 'font-size:1rem;color:#5a9fd4;font-weight:600;',
    checkinSub: '燕云剧情 · 世界之外补完 进行中',
    showInMonthBadge: true,
    showInMonthCard: true
  },
  {
    id: 'film-fest',
    icon: '🎞️',
    name: '电影节记录补录',
    hint: '把参加过的电影节观影记录补进 MEDIA_LOG（上影节等）',
    status: 'done',
    type: 'progress',
    progress: 100,
    progressColor: 'linear-gradient(90deg,#e87a5a,#f4b47a)',
    checkinEmpty: '还没有电影节记录',
    showInMonthBadge: true,
    showInMonthCard: true,
    cardDesc: '补录历年电影节观影记录<br>书影音页未来可开电影节专区'
  },
  {
    id: 'moving',
    icon: '📦',
    name: '搬家',
    hint: 'Q2 内完成搬家',
    status: 'active',
    type: 'progress',
    progress: 0,
    progressColor: 'linear-gradient(90deg,#e87a5a,#f4b47a)',
    checkinEmpty: '暂无进展',
    showInMonthBadge: true,
    showInMonthCard: true,
    cardDesc: 'Q2 内完成搬家'
  },
  {
    id: 'dance-history',
    icon: '📋',
    name: '补录历史舞蹈记录',
    hint: '把 2025.2 ~ 2025 年底的舞蹈课记录补进 dance.html',
    status: 'done',
    type: 'checkin',
    checkinText: '✅ 已完成',
    checkinStyle: 'font-size:0.9rem;color:#4a9e4a;font-weight:600;',
    showInMonthBadge: false,
    showInMonthCard: false
  },
  // ⚠️ 「看电影」已合并入「输入 & 写作」，数据来源统一走 MEDIA_LOG
];

// ── 月度页 goal-card 附加条目（月度专属，不在 Q2_GOALS 里） ───────────────
const APRIL_EXTRA_CARDS = [
  {
    icon: '🎮',
    title: '死亡搁浅',
    desc: '本月目标：打完一周目<br>走好每一步',
    progressColor: 'linear-gradient(90deg,#5a9fd4,#7ab4f4)',
    cardStyle: 'border-color:#ddeaf8;background:#f5f9ff;'
  },
  {
    icon: '🏮',
    title: '燕云十六声',
    desc: '每天推一点剧情<br>不用赶，慢慢走',
    progressColor: 'linear-gradient(90deg,#d4884a,#f4b47a)',
    cardStyle: 'border-color:#f8e8d8;background:#fffaf5;'
  },
  {
    icon: '🌌',
    title: '世界之外',
    desc: '把没看完的剧情补完<br>别让故事烂尾在收藏夹',
    progressColor: 'linear-gradient(90deg,#9a4ad4,#c47af4)',
    cardStyle: 'border-color:#ecddf8;background:#fdf5ff;'
  }
];

// ── 舞蹈记录（日历用） ────────────────────────────────────────────────────
// 从 dance-log.csv 衍生而来，作为日历页面的舞蹈数据源
// 权威源仍是 dance-log.csv（给 dance.html 用），两边需同步维护
// 录入规则：同一老师同一天合并为一条，count 记节数

const DANCE_LOG = [
  // ── 一月 ──
  { date: '2026-01-02', month: 1, teacher: '小钰', genre: 'KPOP/MV', song: 'Dreams Come True', count: 2 },
  { date: '2026-01-11', month: 1, teacher: '九九', genre: 'KPOP/MV', song: '说出愿望吧', count: 2 },
  { date: '2026-01-28', month: 1, teacher: '糖糖', genre: 'KPOP/MV', song: 'Apink - Love Me More', count: 2 },

  // ── 三月 ──
  { date: '2026-03-07', month: 3, teacher: '诗宇', genre: 'KPOP/MV', song: 'Rude', count: 1 },
  { date: '2026-03-21', month: 3, teacher: 'Heesi', genre: 'CHOREO', song: '花 - 藤井风', count: 2 },

  // ── 四月 ──
  { date: '2026-04-02', month: 4, teacher: '四火', genre: 'KPOP/MV', song: 'TWS - Over Drive', count: 2 },
  { date: '2026-04-04', month: 4, teacher: '兔兔子', genre: 'KPOP/MV', song: 'Delulu', count: 2 },
  // ── 4/11 周六 MV DANCE 国贸店 连堂 ──
  { date: '2026-04-11', month: 4, teacher: '四火', genre: 'KPOP/MV', song: 'Like A Flower（裴珠泫）', count: 2 },
  // ── 4/18 周六 MV DANCE 国贸店 连堂 ──
  { date: '2026-04-18', month: 4, teacher: '四火', genre: 'KPOP/MV', song: 'I Do Me（KGMA精灵ver.）', count: 2 }
];

// ── 时间轴事件 ──────────────────────────────────────────────────────────────
// 统一管理全年关键节点，index.html 时间轴 + 月度页日历都从这里读取
// type: 'dance' | 'birthday' | 'wedding' | 'trip' | 'holiday' | 'note' | 'milestone'
//   birthday → 不写入 macOS 日历（通讯录自动管理）
//   holiday  → 不写入 macOS 日历（系统节假日已订阅）
//   其他类型 → 按 calendar 字段写入对应 macOS 日历

// ── 生日列表（从通讯录导入，月度页日历动态渲染，不写入 macOS 日历） ────────
// 字段：name(姓名), month(月份数字), day(日期数字)
const BIRTHDAY_LIST = [
  { name: '潘小乐', month: 11, day: 10 },
  { name: '黄泓熙', month: 4,  day: 10 },
  { name: '杨斯颖', month: 3,  day: 30 },
  { name: '杨晓玥', month: 6,  day: 11 },
  { name: '次仁拉姆', month: 7, day: 11 },
  { name: '柏源',   month: 4,  day: 15 },
  { name: '钱雨萱', month: 8,  day: 17 },
  { name: '简学慧', month: 7,  day: 19 },
  { name: '姚建华', month: 8,  day: 9  },
  { name: '刘之旻', month: 8,  day: 3  },
  { name: '刘君怡', month: 8,  day: 27 },
  { name: '张骞月', month: 8,  day: 21 },
  { name: '卢茉妍', month: 8,  day: 20 },
  { name: '张岳怡', month: 4,  day: 12 }
];

// ── 每日高光日记（diary 提醒事项同步而来） ───────────────────────────────
// 字段：date(YYYY-MM-DD), content(当天高光一句话)
// 录入方式：每晚 10 点提醒 → 在备注里写 → 自动同步
const DIARY = [
  { date: '2026-04-01', content: '就这样又去当摄影师，打两份工领一份工资……offline我跟你拼了。' },
  { date: '2026-04-02', content: '上班时间溜出来，去跳舞的路上开了好多花。课上人少，5个人完全沦为老师的玩具，还排了队型。实在是快乐。' },
  { date: '2026-04-03', content: '第一次吃洱火，感觉消失半月的食欲重生了……老板到底在火锅里放了什么我好撑……' },
  { date: '2026-04-04', content: '跳舞+游戏，又是理想中的一个独居的假期。' },
  { date: '2026-04-05', content: '懿琨来家里吃饭！做了一大桌超级成功的饭菜，尤其是春笋虾汤，完全是应季的神仙美味。' },
  { date: '2026-04-06', content: '又一个人去了环球！赶上了两次花车跳舞，还去看了没看过的水世界特技表演，排上了一次飞跃侏罗纪，吃了平先生面馆的油泼面。' },
  { date: '2026-04-07', content: '鼓起勇气和陌生人联机，过完了捕风捉影的剧情，拿到了江叔送的小马😭这真的不是原本应该在春节上线的剧情吗？？？' },
  { date: '2026-04-08', content: '麦麦终于有了豆浆+油条早餐组合！！！麦麦的一小步人类的一大步！！！' },
  { date: '2026-04-09', content: '沉迷搞各种自动化，以前用notion吃的苦还是太多了' },
  { date: '2026-04-10', content: '游戏号的第一篇帖子数据很好！今天又是倒赚公司token的一天！' },
  { date: '2026-04-11', content: '去舞室学舞遇到了各路的好朋友，有好朋友，有几面之缘的舞友，有同事，来来回回打招呼感觉很奇妙！去吃了之前发现的菲律宾菜小店。好羡慕准备离职的💊老师！希望大家都能去往想过的人生！' },
  { date: '2026-04-12', content: '去龙潭公园拍完了想拍的视频，花、风和柳絮都刚刚好，树给我当了支架。晚上看了挽救计划，电波对上好幸福☺️' },
  { date: '2026-04-13', content: '凌晨来姨妈，但还是点卯上了一天班。最近在思考"比较"和"无聊"这两个关键词。 比较很不好。意识到身边人让我无意识参与焦虑的点在于，ta们一直在做片面的比较。最好的解决方法就是不参与，和我从前的做法一样。 身边的人说"好无聊"的时候，我才发现自己已经很久没有感觉到无聊了。想做的太多，时间不够用精力不够用。这是一种好状态，意味着我有主心骨和自己的主线。' },
  { date: '2026-04-14', content: '突如其来的落户杂事打破了美好的一天🥲抓紧去过世界之外剧情了，欠的账真是越来越多！' },
  { date: '2026-04-15', content: '身份证刚补办完就找到了……笑不出来……为了走完剧情在死亡搁浅把自己雷的游戏类型玩了个遍🥲玩出一身汗，绝对不可能再有二周目了！' },
  { date: '2026-04-16', content: '过完了死亡搁浅，耗费时长快60h。最后一段玩得三心二意吧，男性视角叙事的空浮和无聊感压过了视听的震撼，丢失了吸引力。好在依然有动人的段落和体验。给自己鼓掌吧，克服了对战事题材是发自内心的恐惧和抵触，硬着头皮打过了很多不喜欢的玩法，终于也完成了我的这一单。Game is a journey.' },
  { date: '2026-04-17', content: '收到赠票去看了张杰的演唱会，无敌好的位置，特别慷慨的烟花。嗓子真的太好了，音色和稳定性都无敌，能常青是有真本事。' },
  { date: '2026-04-18', content: '最后把今天的电影票都出了，在家里过了个很舒服很舒服的周六。下午跳舞又遇到熟人，老师排了双人舞，跳得很开心。回家做椰子鸡，吃饭的时候用电脑看了会火山挚恋，打扫卫生，盘出可以卖掉的闲置，洗澡，玩死亡搁浅。如此熨贴。' },
];

// ── 自媒体灵感库 ────────────────────────────────────────────────────────
// status: 'todo'(待做) | 'done'(已发) | 'paused'(搁置)
// 来源：ideas.md，两边需同步维护

const IDEAS = [
  { icon: '🌸', title: '外景 like a flower', desc: '舞蹈外景拍摄 · 花为主题', date: '2026-03-25', status: 'done' },
  { icon: '\uD83D\uDC57', title: '跳爵士怎么穿显的我很会跳', desc: '爵士穿搭分享 · 参考CBXLAB', date: '2026-03-26', status: 'paused' },
  { icon: '\uD83D\uDC80', title: '跳死亡搁浅2的彩蛋舞蹈', desc: '游戏跨界舞蹈 · DS联动', date: '2026-04-02', status: 'todo' },
  { icon: '\uD83C\uDFAE', title: '地球online-上班路', desc: '生活随手拍+游戏联想文案', date: '2026-04-09', status: 'done' },
  { icon: '\uD83C\uDFAE', title: '地球online-底特律变人（鱼）', desc: '等合适镜头', date: '2026-04-09', status: 'todo' },
  { icon: '\uD83C\uDFAE', title: '地球online-底特律变人（给AI起名）', desc: '现实给AI命名 vs 游戏里人类给安卓命名', date: '2026-04-10', status: 'todo' },
  { icon: '\uD83C\uDFAE', title: '地球online-燕云（国博大历元宝→麻布袋）', desc: '等去国博拍', date: '2026-04-09', status: 'todo' },
  { icon: '\uD83C\uDFAE', title: '地球online-燕云十六声（待挖）', desc: '剧情点待定', date: '2026-04-09', status: 'todo' },
  { icon: '\u2705',  title: 'Delulu 课堂视频', desc: '已发布', date: '2026-04-04', status: 'done' },
  { icon: '💃', title: '跳舞 爱情鸟', desc: '待定', date: '2026-04-16', status: 'todo' },
  { icon: '🎵', title: '跳舞 Soul Below', desc: '舞蹈选题', date: '2026-04-17', status: 'todo' },
  { icon: '👗', title: '上班路 OOTD', desc: '上班路发现好机位，下周试拍', date: '2026-04-17', status: 'todo' }
];

// ── 发帖记录（自媒体更新日志） ──────────────────────────────────────
// 日历页面读取此数组，显示发帖标记；index.html 动态数 POST_LOG.length 作为发帖总数
// 字段：date(YYYY-MM-DD), month(月份数字), platform(平台), title(标题/选题), icon(emoji)
// 新增时按时间顺序插入，POST_COUNT 已废弃，勿再使用

const POST_LOG = [
  // ── 一月 ──
  { date: '2026-01-02', month: 1, platform: '小红书', title: '2025年终总结', icon: '📱' },
  { date: '2026-01-02', month: 1, platform: '小红书', title: 'Dreams Come True 课堂直拍', icon: '📱' },
  { date: '2026-01-09', month: 1, platform: '小红书', title: 'Hollywood Action', icon: '📱' },
  { date: '2026-01-22', month: 1, platform: '小红书', title: '双城之战音乐秀返场', icon: '📱' },
  { date: '2026-01-24', month: 1, platform: '小红书', title: 'Hypnotize', icon: '📱' },
  { date: '2026-01-28', month: 1, platform: '小红书', title: '杀青梗', icon: '📱' },
  { date: '2026-01-28', month: 1, platform: '小红书', title: 'Love Me More 课堂直拍', icon: '📱' },
  { date: '2026-01-31', month: 1, platform: '小红书', title: 'Love Me More 公园外拍', icon: '📱' },
  // ── 二月 ──
  { date: '2026-02-07', month: 2, platform: '小红书', title: '弥渡山歌 x Hypnotize 卡点', icon: '📱' },
  { date: '2026-02-11', month: 2, platform: '小红书', title: 'Trophy', icon: '📱' },
  { date: '2026-02-13', month: 2, platform: '小红书', title: "I'll See You There Tomorrow", icon: '📱' },
  // ── 三月 ──
  { date: '2026-03-07', month: 3, platform: '小红书', title: 'Rude！', icon: '📱' },
  { date: '2026-03-13', month: 3, platform: '小红书', title: '弥渡山歌', icon: '📱' },
  { date: '2026-03-19', month: 3, platform: '小红书', title: '史努比卡点', icon: '📱' },
  { date: '2026-03-21', month: 3, platform: '小红书', title: '花 课堂直拍', icon: '📱' },
  { date: '2026-03-30', month: 3, platform: '小红书', title: '那时雨', icon: '📱' },
  // ── 四月 ──
  { date: '2026-04-04', month: 4, platform: '小红书+视频号', title: 'Delulu 课堂直拍', icon: '📱' },
  { date: '2026-04-09', month: 4, platform: '小红书', title: '地球online-上班路', icon: '📱' },
  { date: '2026-04-11', month: 4, platform: '小红书', title: 'Like A Flower 课堂直拍', icon: '📱' },
  { date: '2026-04-12', month: 4, platform: '小红书', title: 'Like A Flower 户外版', icon: '📱' }
];

const TIMELINE_EVENTS = [
  // ── 一月 ──
  {
    date: '2026-01-01',
    month: 1,
    emoji: '🎊',
    title: '元旦',
    detail: '🎊 元旦',
    type: 'holiday',
    calendar: ''
  },
  {
    date: '2026-01-26',
    month: 1,
    emoji: '🧧',
    title: '除夕',
    detail: '🧧 除夕',
    type: 'holiday',
    calendar: ''
  },
  {
    date: '2026-01-27',
    month: 1,
    emoji: '🧧',
    title: '春节',
    detail: '🧧 春节',
    type: 'holiday',
    calendar: ''
  },
  {
    date: '2026-01-29',
    month: 1,
    emoji: '🧧',
    title: '初三',
    detail: '🧧 初三',
    type: 'holiday',
    calendar: ''
  },
  {
    date: '2026-01-30',
    month: 1,
    emoji: '🧧',
    title: '初四',
    detail: '🧧 初四',
    type: 'holiday',
    calendar: ''
  },
  {
    date: '2026-01-31',
    month: 1,
    emoji: '🧧',
    title: '初五',
    detail: '🧧 初五',
    type: 'holiday',
    calendar: ''
  },

  // ── 二月 ──
  {
    date: '2026-02-01',
    month: 2,
    emoji: '🧧',
    title: '初六',
    detail: '🧧 初六',
    type: 'holiday',
    calendar: ''
  },
  {
    date: '2026-02-02',
    month: 2,
    emoji: '🧧',
    title: '初七',
    detail: '🧧 初七',
    type: 'holiday',
    calendar: ''
  },
  {
    date: '2026-02-03',
    month: 2,
    emoji: '🧧',
    title: '初八',
    detail: '🧧 初八',
    type: 'holiday',
    calendar: ''
  },
  {
    date: '2026-02-04',
    month: 2,
    emoji: '🧧',
    title: '初九',
    detail: '🧧 初九',
    type: 'holiday',
    calendar: ''
  },

  // ── 三月 ──
  {
    date: '2026-03-16',
    month: 3,
    emoji: '🎮',
    title: '底特律变人一周目通关',
    detail: '🎮 底特律变人 · 一周目通关',
    type: 'milestone',
    calendar: '计划的提醒事项'
  },

  // ── 四月 ──
  {
    date: '2026-04-04',
    month: 4,
    emoji: '🌿',
    title: '清明节',
    detail: '🌿 清明节',
    type: 'holiday',
    calendar: '',
    style: { bg: '#f0f9e8', border: '#9dd49d', numColor: '#4a9e4a' }
  },
  {
    date: '2026-04-05',
    month: 4,
    emoji: '🌿',
    title: '清明假',
    detail: '🌿 清明假',
    type: 'holiday',
    calendar: ''
  },
  {
    date: '2026-04-06',
    month: 4,
    emoji: '🌿',
    title: '清明假',
    detail: '🌿 清明假',
    type: 'holiday',
    calendar: ''
  },
  {
    date: '2026-04-07',
    month: 4,
    emoji: '✦',
    title: '开始用 WorkBuddy',
    detail: '✦ 开始用WorkBuddy',
    type: 'milestone',
    calendar: '计划的提醒事项',
    style: { bg: 'background:#fffbf0;border-color:#e8c840;' }
  },
  {
    date: '2026-04-24',
    month: 4,
    emoji: '🚄',
    title: '出发→砀山南',
    detail: '🚄 G1567 北京南 16:22 → 砀山南 20:45｜检票口 10A/10B',
    type: 'trip',
    calendar: '飞行计划',
    memo: 'G1567 · 北京南16:22发 · 砀山南20:45到 · 历时4h23min',
    // 月小结邮件规则：trip 附属于同行程的 big event，不单独展示
    relatedBigEvent: '佳佳婚礼'
  },
  {
    date: '2026-04-26',
    month: 4,
    emoji: '💒',
    title: '佳佳婚礼',
    detail: '💒 佳佳婚礼！｜人生第一次参加朋友婚礼 🎊',
    type: 'wedding',
    calendar: '朋友啊朋友',
    memo: '人生第一次参加朋友婚礼，去安徽砀山 🎊',
    deco: '💜',
    // 月小结邮件：以此事件为主，出发那条作为附注
    travelNote: '4/24 G1567 北京南→砀山南 16:22 出发'
  },
  {
    date: '2026-04-17',
    month: 4,
    emoji: '🎮',
    title: '死亡搁浅一周目通关',
    detail: '🎮 死亡搁浅一周目通关！｜走完了每一步',
    type: 'milestone',
    calendar: '计划的提醒事项',
    memo: '凌晨通关，DS一周目完成'
  },
];

// ── 书影音记录（豆瓣定时同步 + 手动补录） ────────────────────────────────
// 数据层级：MEDIA_LOG 是主体（跟 DANCE_LOG 平级），可计数、可展示
// 字段说明：
//   date: 'YYYY-MM-DD'  豆瓣标记日期（或手动录入日期）
//   month: 月份数字
//   type: 'movie' | 'tv' | 'book' | 'music'
//   title: 作品名
//   rating: 1-5（豆瓣几颗星）
//   douban_url: 豆瓣链接（可选）
//   poster: 封面图 URL（可选，豆瓣 CDN）
//   context: 附加背景标签，如 '北影节' / '电影节' / '二刷'（可选）
//   note: 个人备注（可选）
// 更新方式：豆瓣同步脚本每周自动抓取，手动补录走 context/note 字段
const MEDIA_LOG = [
  // ── 2026年四月 · 北影节（context 标注观看背景） ──
  {
    date: '2026-04-18', month: 4,
    type: 'movie',
    title: '穿普拉达的女王',
    rating: 0,  // 待豆瓣标记后自动同步
    context: '北影节',
    note: '英皇IMAX激光厅（建国门）18:00 · 致命赶场第一场',
    douban_url: 'https://movie.douban.com/subject/1482022/'
  },
  {
    date: '2026-04-18', month: 4,
    type: 'movie',
    title: '心火',
    rating: 0,
    context: '北影节',
    note: 'CGS中国巨幕（学院南路）21:00 · 二刷！',
    douban_url: 'https://movie.douban.com/subject/1292427/'
  },
  {
    date: '2026-04-19', month: 4,
    type: 'movie',
    title: '太空见习生',
    rating: 0,
    context: '北影节',
    note: 'CINITY巨幕（双井）15:00 · ×2张',
    douban_url: ''
  },

  // ── 2026年二月（豆瓣同步） ──
  {
    date: '2026-02-20', month: 2,
    type: 'movie',
    title: '镖人：风起大漠',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/36474027/'
  },

  // ── 2026年一月（豆瓣同步） ──
  {
    date: '2026-01-12', month: 1,
    type: 'tv',
    title: '英雄联盟：双城之战 第二季（Arcane Season 2）',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/35669844/'
  },
  {
    date: '2026-01-12', month: 1,
    type: 'tv',
    title: '英雄联盟：双城之战 第一季（Arcane Season 1）',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/34867871/'
  }
,
  {
    date: '2025-01-29', month: 1,
    type: 'tv',
    title: '开端',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/35332289/'
  },
  {
    date: '2025-02-03', month: 2,
    type: 'movie',
    title: '哪吒之魔童闹海',
    rating: 4,
    note: '白磷体质......不知道在燃什么但是反正一直在燃......除了俩主角，塑造都还算饱满的🤔？',
    douban_url: 'https://movie.douban.com/subject/34780991/'
  },
  {
    date: '2025-06-13', month: 6,
    type: 'movie',
    title: '钻石般的她（Diamanti）',
    rating: 5,
    context: '上影节',
    note: '很subtle的女性力量呈现。如果你知道我看过这场之前看的是《日落大道》你也会觉得我是排片天才😏',
    douban_url: 'https://movie.douban.com/subject/36968995/'
  },
  {
    date: '2025-06-13', month: 6,
    type: 'movie',
    title: '日落大道（Sunset Blvd.）',
    rating: 4,
    context: '上影节',
    note: 'siff第一场',
    douban_url: 'https://movie.douban.com/subject/1298733/'
  },
  {
    date: '2025-06-13', month: 6,
    type: 'movie',
    title: '泳者之心（Young Woman and the Sea）',
    rating: 4,
    context: '上影节',
    note: '4.22补标',
    douban_url: 'https://movie.douban.com/subject/26656728/'
  },
  {
    date: '2025-06-16', month: 6,
    type: 'movie',
    title: '琳达！琳达！琳达！（リンダ リンダ リンダ）',
    rating: 5,
    context: '上影节',
    note: '青春片就像纪录片，一定要允许【发呆】的时刻。',
    douban_url: 'https://movie.douban.com/subject/1432699/'
  },
  {
    date: '2025-06-22', month: 6,
    type: 'movie',
    title: '初吻（ファーストキス）',
    rating: 4,
    context: '上影节',
    douban_url: 'https://movie.douban.com/subject/36894170/'
  },
  {
    date: '2025-06-22', month: 6,
    type: 'movie',
    title: '脸庞，村庄（Visages villages）',
    rating: 4,
    context: '上影节',
    douban_url: 'https://movie.douban.com/subject/26764928/'
  },
  {
    date: '2025-06-22', month: 6,
    type: 'movie',
    title: '悲惨世界：梦之队演唱会（Les Misérables the Dream Cast in Concert）',
    rating: 5,
    context: '上影节',
    douban_url: 'https://movie.douban.com/subject/35048691/'
  },
  {
    date: '2025-06-22', month: 6,
    type: 'movie',
    title: '新世纪福音战士新剧场版：序（ヱヴァンゲリヲン新劇場版：序）',
    rating: 4,
    context: '上影节',
    douban_url: 'https://movie.douban.com/subject/1968790/'
  },
  {
    date: '2025-08-09', month: 8,
    type: 'movie',
    title: '罗小黑战记2',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/36448279/'
  },
  {
    date: '2025-09-21', month: 9,
    type: 'movie',
    title: 'F1：狂飙飞车（F1: The Movie）',
    rating: 4,
    note: '没注意买到4d了😂',
    douban_url: 'https://movie.douban.com/subject/35689244/'
  },
  {
    date: '2025-11-23', month: 11,
    type: 'movie',
    title: '排球少年！！剧场版：垃圾场的决战（劇場版ハイキュー!! ゴミ捨て場の決戦）',
    rating: 0,
    douban_url: 'https://movie.douban.com/subject/36060209/'
  },
  {
    date: '2025-11-23', month: 11,
    type: 'movie',
    title: '大话西游之月光宝盒（西遊記第壹佰零壹回之月光寶盒）',
    rating: 0,
    douban_url: 'https://movie.douban.com/subject/1299398/'
  },
  {
    date: '2025-11-27', month: 11,
    type: 'movie',
    title: '疯狂动物城2（Zootopia 2）',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/26817136/'
  },

  {
    date: '2018-06-29', month: 6,
    type: 'movie',
    title: '水形物语 / The Shape of Water',
    rating: 2,
    note: '剧情推动得莫名其妙，实在对不起影片的主题、配乐、画面。影片探讨的话题和探讨的载体都让人眼前一亮，但故事讲不好，可惜。',
    douban_url: 'https://movie.douban.com/subject/26752852/'
  },
  {
    date: '2018-06-29', month: 6,
    type: 'movie',
    title: '蓝色骨头',
    rating: 4,
    note: '为舞蹈从三分给到了四分。尹昉的旁白意外的很有感觉',
    douban_url: 'https://movie.douban.com/subject/4842877/'
  },
  {
    date: '2018-06-29', month: 6,
    type: 'movie',
    title: '路过未来',
    rating: 3,
    note: '后劲儿是真的大，不过比起导演前几部电影的确是逊色许多。',
    douban_url: 'https://movie.douban.com/subject/26909423/'
  },
  {
    date: '2018-06-29', month: 6,
    type: 'movie',
    title: '红海行动',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/26861685/'
  },
  {
    date: '2018-06-30', month: 6,
    type: 'movie',
    title: '我不是药神',
    rating: 4,
    note: '点映场，哭成傻逼，出了影院只想当自来水。今年给的第二个五星。改了，四星。之前受情感左右了。',
    douban_url: 'https://movie.douban.com/subject/26752088/'
  },
  {
    date: '2018-07-25', month: 7,
    type: 'movie',
    title: '厕所英雄 / Toilet - Ek Prem Katha',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/26942645/'
  },
  {
    date: '2018-07-25', month: 7,
    type: 'movie',
    title: '北方一片苍茫',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/27079318/'
  },
  {
    date: '2018-07-25', month: 7,
    type: 'movie',
    title: '无问西东',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/6874741/'
  },
  {
    date: '2018-07-25', month: 7,
    type: 'movie',
    title: '霸王别姬',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1291546/'
  },
  {
    date: '2018-07-25', month: 7,
    type: 'movie',
    title: '家在水草丰茂的地方',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/11537965/'
  },
  {
    date: '2018-07-25', month: 7,
    type: 'movie',
    title: '告诉他们，我乘白鹤去了',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/11528251/'
  },
  {
    date: '2018-07-25', month: 7,
    type: 'movie',
    title: '罗曼蒂克消亡史',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/24751763/'
  },
  {
    date: '2018-07-25', month: 7,
    type: 'movie',
    title: '七月与安生',
    rating: 4,
    note: '"恋爱啊，恋爱是不一样的，柏拉图说人求索他缺失的另一半，那就是说两个人合在一起才是完整，可是合起来就变成一个了，你们懂吗？像你们这样，无论缺少或多出什么都无所谓，因为有一个人与你镜像对称，只有永远合不起来，才可以永远做伴。"其实不能分那么死的。七月与安生家明，无论哪种感情，都如此',
    douban_url: 'https://movie.douban.com/subject/25827935/'
  },
  {
    date: '2018-07-30', month: 7,
    type: 'movie',
    title: '西虹市首富',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/27605698/'
  },
  {
    date: '2018-08-04', month: 8,
    type: 'movie',
    title: '小偷家族 / 万引き家族',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/27622447/'
  },
  {
    date: '2018-08-16', month: 8,
    type: 'movie',
    title: '一出好戏',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26985127/'
  },
  {
    date: '2018-08-20', month: 8,
    type: 'movie',
    title: '伪装者',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/25994712/'
  },
  {
    date: '2018-08-20', month: 8,
    type: 'movie',
    title: '琅琊榜',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/25754848/'
  },
  {
    date: '2018-08-20', month: 8,
    type: 'movie',
    title: '快把我哥带走',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/30122633/'
  },
  {
    date: '2018-08-20', month: 8,
    type: 'movie',
    title: '曼菲',
    rating: 3,
    note: '舞蹈是美的。有很多片段非常动人。但作为纪录片还是散了些，更像一期电视节目。',
    douban_url: 'https://movie.douban.com/subject/27059131/'
  },
  {
    date: '2018-09-26', month: 9,
    type: 'movie',
    title: '嘉年华',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/27019527/'
  },
  {
    date: '2018-09-26', month: 9,
    type: 'movie',
    title: '一一',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1292434/'
  },
  {
    date: '2018-09-26', month: 9,
    type: 'movie',
    title: '野草莓 / Smultronstället',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1293071/'
  },
  {
    date: '2018-09-26', month: 9,
    type: 'movie',
    title: '江湖儿女',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26972258/'
  },
  {
    date: '2018-09-26', month: 9,
    type: 'movie',
    title: '冰海沉船 / A Night to Remember',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1292890/'
  },
  {
    date: '2018-10-04', month: 10,
    type: 'movie',
    title: '影',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/4864908/'
  },
  {
    date: '2018-11-01', month: 11,
    type: 'movie',
    title: '情书 / Love Letter',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1292220/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '你好，之华',
    rating: 3,
    note: '如果没看过情书给分也许会高一些吧。也许。',
    douban_url: 'https://movie.douban.com/subject/27615233/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '我的个神啊 / PK',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/10741643/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '一次别离 / جدایی نادر از سیمین',
    rating: 5,
    note: '我是特梅。没有背景音乐，但胜过有。最后的长镜头太有味道了。',
    douban_url: 'https://movie.douban.com/subject/5964718/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '找到你',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/27140071/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '秋菊打官司',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1300108/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '昨日青空',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/26290410/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '从上海到平遥',
    rating: 4,
    note: '今天突然想起来评分……那只猫犹如神来之笔，太喜欢了。',
    douban_url: 'https://movie.douban.com/subject/30248986/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '少年巴比伦',
    rating: 2,
    note: 'emmmm一星给李梦，一星给小董。看之前很期待，看完很失望。没有年代感，电视剧网剧这个水准还能吹一吹，电影不行。',
    douban_url: 'https://movie.douban.com/subject/25876760/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '绣春刀II：修罗战场',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/26270502/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '绣春刀',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/24745500/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '祖与占 / Jules et Jim',
    rating: 5,
    note: '我真的好喜欢好喜欢女主清唱那一段啊。',
    douban_url: 'https://movie.douban.com/subject/1292338/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '布达佩斯大饭店 / The Grand Budapest Hotel',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/11525673/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '唐人街探案2',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/26698897/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '毒液：致命守护者 / Venom',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/3168101/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '无名之辈',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/27110296/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '十二怒汉 / 12 Angry Men',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1293182/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '十二公民',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/24875534/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '狗十三',
    rating: 5,
    note: '曹保平为什么这么狠。 成长原来是件丢人的事，我现在才明白。',
    douban_url: 'https://movie.douban.com/subject/25716096/'
  },
  {
    date: '2018-12-12', month: 12,
    type: 'movie',
    title: '大江大河',
    rating: 5,
    note: '不是我说，那些给一星的短评翻到好多个了，要不就不给解释，要不就黑长相说装嫩的……真的没水平🌚豆瓣评分都这样评，这个数据还有什么好看的？',
    douban_url: 'https://movie.douban.com/subject/26797690/'
  },
  {
    date: '2018-12-19', month: 12,
    type: 'movie',
    title: '喜马拉雅天梯',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/24743696/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '背靠背，脸对脸',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1307856/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '大鱼海棠',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/5045678/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '他是龙 / Он - дракон',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/26726098/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '湄公河行动',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/25815034/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '一条狗的使命 / A Dog&#39;s Purpose',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/6873143/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '战狼2',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/26363254/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '闪光少女',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26790961/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '疯狂动物城 / Zootopia',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/25662329/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '飞屋环游记 / Up',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/2129039/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '当幸福来敲门 / The Pursuit of Happyness',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1849031/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '海上钢琴师 / La leggenda del pianista sull&#39;oceano',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1292001/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '泰坦尼克号 / Titanic',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1292722/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '火锅英雄',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/25662327/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '刺客聂隐娘',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/2303845/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '百鸟朝凤',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/10831445/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '我在故宫修文物',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/26910059/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '超时空同居',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/27133303/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '西小河的夏天',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/26799232/'
  },
  {
    date: '2018-12-23', month: 12,
    type: 'movie',
    title: '无双 / 無雙',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/26425063/'
  },
  {
    date: '2018-12-27', month: 12,
    type: 'movie',
    title: '龙猫 / となりのトトロ',
    rating: 5,
    note: '《龙猫》里流淌着的是真诚的熨帖。 干干净净的，最纯粹最本质的情感，被另一份真挚自然的力量所成全。天真却也动人得叫人落泪了。',
    douban_url: 'https://movie.douban.com/subject/1291560/'
  },
  {
    date: '2018-12-28', month: 12,
    type: 'book',
    title: '动物农场',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/3883991/'
  },
  {
    date: '2018-12-28', month: 12,
    type: 'book',
    title: '文学的邀约',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/26835549/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'movie',
    title: '再见列宁 / Good Bye Lenin!',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1292055/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'movie',
    title: '窈窕淑女 / My Fair Lady',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1297965/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'movie',
    title: '望乡 / サンダカン八番娼館 望郷',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1303073/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'movie',
    title: '码头风云 / On the Waterfront',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1292521/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'movie',
    title: '天梯：蔡国强的艺术',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/26679188/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'movie',
    title: '阿飞正传 / 阿飛正傳',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1305690/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'movie',
    title: '皮娜 / Pina',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/3742993/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'movie',
    title: '烈日灼心',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/24719063/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'movie',
    title: '无爱可诉 / Нелюбовь',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/26785590/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'movie',
    title: '纵横四海 / 縱橫四海',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1295409/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'movie',
    title: '活着',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1292365/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'movie',
    title: '浪潮 / Die Welle',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/2297265/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '青衣',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/3290807/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '活着',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/4913064/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '步履不停',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/26963321/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '如父如子',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/27611824/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '从一到无穷大',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/1102715/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '局外人',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/4908885/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '论摄影',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/4282084/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '芬兰人的噩梦',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/30234130/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '孩子们的诗',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/27133274/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '房思琪的初恋乐园',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/27614904/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '过于喧嚣的孤独',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/6781794/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '我们仨',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/19958089/'
  },
  {
    date: '2018-12-29', month: 12,
    type: 'book',
    title: '中国文脉',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/20383606/'
  },
  {
    date: '2018-12-30', month: 12,
    type: 'movie',
    title: '小戏骨：红楼梦之刘姥姥进大观园',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/26951951/'
  },
  {
    date: '2018-12-30', month: 12,
    type: 'movie',
    title: '最好的我们',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/26602244/'
  },
  {
    date: '2018-12-30', month: 12,
    type: 'movie',
    title: '美丽心灵 / A Beautiful Mind',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1306029/'
  },
  {
    date: '2018-12-30', month: 12,
    type: 'movie',
    title: '阿甘正传 / Forrest Gump',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1292720/'
  },
  {
    date: '2018-12-30', month: 12,
    type: 'movie',
    title: '中国合伙人',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/11529526/'
  },
  {
    date: '2018-12-30', month: 12,
    type: 'movie',
    title: '唐人街探案',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26311973/'
  },
  {
    date: '2018-12-30', month: 12,
    type: 'movie',
    title: '嫌疑人X的献身',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/26606743/'
  },
  {
    date: '2019-01-01', month: 1,
    type: 'movie',
    title: '人生果实 / 人生フルーツ',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/26874505/'
  },
  {
    date: '2019-01-01', month: 1,
    type: 'movie',
    title: '窃听风暴 / Das Leben der Anderen',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1900841/'
  },
  {
    date: '2019-01-01', month: 1,
    type: 'movie',
    title: '地球最后的夜晚',
    rating: 4,
    note: '其实还没想好到底该怎么给分。看着下7分了，先拉一拉……（怎么回事2019第一标居然是补标）',
    douban_url: 'https://movie.douban.com/subject/26633257/'
  },
  {
    date: '2019-01-03', month: 1,
    type: 'movie',
    title: '北京遇上西雅图',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/10574468/'
  },
  {
    date: '2019-01-03', month: 1,
    type: 'movie',
    title: '后会无期',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/25805741/'
  },
  {
    date: '2019-01-05', month: 1,
    type: 'movie',
    title: '四个春天',
    rating: 5,
    note: '🎼蓝色圆舞曲无限循环 悲伤点到即止，亮色真实人生。',
    douban_url: 'https://movie.douban.com/subject/27191492/'
  },
  {
    date: '2019-01-08', month: 1,
    type: 'movie',
    title: '三块广告牌 / Three Billboards Outside Ebbing, Missouri',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26611804/'
  },
  {
    date: '2019-01-11', month: 1,
    type: 'tv',
    title: '声入人心 第一季',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/30353394/'
  },
  {
    date: '2019-01-11', month: 1,
    type: 'movie',
    title: '步履不停 / 歩いても 歩いても',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/2222996/'
  },
  {
    date: '2019-01-16', month: 1,
    type: 'movie',
    title: '吉屋出租：百老汇剧场版 / Rent: Filmed Live on Broadway',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/24857754/'
  },
  {
    date: '2019-01-19', month: 1,
    type: 'movie',
    title: '啥是佩奇',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/30435141/'
  },
  {
    date: '2019-01-19', month: 1,
    type: 'movie',
    title: '马戏之王 / The Greatest Showman',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/3914513/'
  },
  {
    date: '2019-01-24', month: 1,
    type: 'movie',
    title: '爱乐之城 / La La Land',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/25934014/'
  },
  {
    date: '2019-01-25', month: 1,
    type: 'movie',
    title: '怦然心动 / Flipped',
    rating: 5,
    note: '少年懂爱',
    douban_url: 'https://movie.douban.com/subject/3319755/'
  },
  {
    date: '2019-01-28', month: 1,
    type: 'movie',
    title: '跳出我天地音乐剧 / Billy Elliot the Musical',
    rating: 5,
    note: 'Dance,dance,otherwise we are lost. Dance,dance,and we will shine.🌟',
    douban_url: 'https://movie.douban.com/subject/26264388/'
  },
  {
    date: '2019-01-28', month: 1,
    type: 'book',
    title: '故园风雨后',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/27910523/'
  },
  {
    date: '2019-02-03', month: 2,
    type: 'movie',
    title: '芝加哥 / Chicago',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1307697/'
  },
  {
    date: '2019-02-05', month: 2,
    type: 'movie',
    title: '飞驰人生',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/30163509/'
  },
  {
    date: '2019-02-05', month: 2,
    type: 'movie',
    title: '小猪佩奇过大年',
    rating: 1,
    note: '宣传片真厉害😢 公益广告＋动画片，歌舞部分不太行，尤其是在我进影院前刚在看音乐之声的情况下……',
    douban_url: 'https://movie.douban.com/subject/30295908/'
  },
  {
    date: '2019-02-06', month: 2,
    type: 'movie',
    title: '音乐之声 / The Sound of Music',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1294408/'
  },
  {
    date: '2019-02-06', month: 2,
    type: 'movie',
    title: '流浪地球',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26266893/'
  },
  {
    date: '2019-02-06', month: 2,
    type: 'movie',
    title: '疯狂的外星人',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/25986662/'
  },
  {
    date: '2019-02-06', month: 2,
    type: 'book',
    title: '流浪地球',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/3266609/'
  },
  {
    date: '2019-02-10', month: 2,
    type: 'movie',
    title: '悲惨世界 / Les Misérables',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/6860160/'
  },
  {
    date: '2019-02-10', month: 2,
    type: 'book',
    title: '弱传播',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/30383755/'
  },
  {
    date: '2019-02-10', month: 2,
    type: 'book',
    title: '1984',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/4820710/'
  },
  {
    date: '2019-02-16', month: 2,
    type: 'movie',
    title: '雨中曲 / Singin&#39; in the Rain',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1293460/'
  },
  {
    date: '2019-02-16', month: 2,
    type: 'movie',
    title: '2008年第29届北京奥运会开幕式 / Beijing 2008 Olympics Games Opening Ceremony',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/3173528/'
  },
  {
    date: '2019-02-16', month: 2,
    type: 'movie',
    title: '摇滚莫扎特 / Mozart L&#39;Opéra Rock',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/25754522/'
  },
  {
    date: '2019-02-16', month: 2,
    type: 'movie',
    title: '剧院魅影：25周年纪念演出 / The Phantom of the Opera at the Royal Albert Hall',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/24751811/'
  },
  {
    date: '2019-02-16', month: 2,
    type: 'movie',
    title: '肖申克的救赎 / The Shawshank Redemption',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1292052/'
  },
  {
    date: '2019-03-01', month: 3,
    type: 'movie',
    title: '谁先爱上他的 / 誰先愛上他的',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/27119586/'
  },
  {
    date: '2019-03-01', month: 3,
    type: 'book',
    title: '枕头人',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/4734066/'
  },
  {
    date: '2019-03-02', month: 3,
    type: 'movie',
    title: '绿皮书 / Green Book',
    rating: 3,
    note: '继水形之后，奥斯卡又让我emmmm了……故事叙述有趣，也够温情，观看体验非常非常好，但无甚新鲜，中规中矩，拿奖不太有前瞻意义。不过要强调的是，真的比水形好太多太多太多了！！！',
    douban_url: 'https://movie.douban.com/subject/27060077/'
  },
  {
    date: '2019-03-19', month: 3,
    type: 'movie',
    title: '过春天',
    rating: 4,
    note: '采用镜面反射非常多，其中父亲抽烟处最为出彩。视听语言完全OK，剪辑节奏是近来看的同类型电影中最好的一部，非常自然舒服。互绑手机那一段真的好绝！！！最后的字幕出来影院里的人都笑了，求生欲真的强😢很成功的处女作。',
    douban_url: 'https://movie.douban.com/subject/27191431/'
  },
  {
    date: '2019-03-22', month: 3,
    type: 'movie',
    title: '波西米亚狂想曲 / Bohemian Rhapsody',
    rating: 4,
    note: '引进被删减真的好气人。动人的更多是音乐和故事呢，作为电影本身则乏善可陈。不管怎么说完成度还是很高，因为音乐又加了一颗星，差不多。',
    douban_url: 'https://movie.douban.com/subject/5300054/'
  },
  {
    date: '2019-04-06', month: 4,
    type: 'movie',
    title: '风中有朵雨做的云',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26728669/'
  },
  {
    date: '2019-04-10', month: 4,
    type: 'movie',
    title: '回到未来 / Back to the Future',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1300555/'
  },
  {
    date: '2019-04-15', month: 4,
    type: 'movie',
    title: '爱你，西蒙 / Love, Simon',
    rating: 4,
    note: '是Utopia。',
    context: '第9届北影节',
    douban_url: 'https://movie.douban.com/subject/26654498/'
  },
  {
    date: '2019-04-15', month: 4,
    type: 'movie',
    title: '调音师 / Andhadhun',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/30334073/'
  },
  {
    date: '2019-04-15', month: 4,
    type: 'movie',
    title: '罗生门 / 羅生門',
    rating: 4,
    context: '第9届北影节',
    douban_url: 'https://movie.douban.com/subject/1291879/'
  },
  {
    date: '2019-04-18', month: 4,
    type: 'movie',
    title: '寻找英格玛·伯格曼 / Ingmar Bergman - Vermächtnis eines Jahrhundertgenies',
    rating: 3,
    note: '有意思的是儿子聊父亲的部分。',
    context: '第9届北影节',
    douban_url: 'https://movie.douban.com/subject/27148398/'
  },
  {
    date: '2019-04-18', month: 4,
    type: 'movie',
    title: '华盛顿邮报 / The Post',
    rating: 3,
    note: '工整而失了点惊喜。',
    douban_url: 'https://movie.douban.com/subject/26990609/'
  },
  {
    date: '2019-04-19', month: 4,
    type: 'movie',
    title: '老师·好',
    rating: 2,
    note: '实话说挺没意思的……看周围人都哭得挺惨的没好意思一出来就吐槽。比较工整，套路齐全，也因此观影体验极差。对我而言唯一的泪点是老师的口风琴声响起的那一刻。就像那个健美操节目一样，那是那时的我们所需要的东西，不管多少次见还是动容。still trapped In tropes.这样想还有点庆幸。',
    douban_url: 'https://movie.douban.com/subject/27663742/'
  },
  {
    date: '2019-04-20', month: 4,
    type: 'movie',
    title: '疯狂原始人 / The Croods',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1907966/'
  },
  {
    date: '2019-04-20', month: 4,
    type: 'movie',
    title: '摩纳哥王妃 / Grace of Monaco',
    rating: 3,
    note: '补个标',
    douban_url: 'https://movie.douban.com/subject/10450713/'
  },
  {
    date: '2019-04-20', month: 4,
    type: 'movie',
    title: '低俗小说 / Pulp Fiction',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1291832/'
  },
  {
    date: '2019-04-21', month: 4,
    type: 'movie',
    title: '请以你的名字呼唤我 / Call Me by Your Name',
    rating: 5,
    note: 'Summer time never fades. 愿以我的名字呼唤你，是爱你的surrender，更是因为在爱你的时候，我学会了爱自己。 视听表达太美了，无可抗拒地留下深刻记忆。',
    douban_url: 'https://movie.douban.com/subject/26799731/'
  },
  {
    date: '2019-04-24', month: 4,
    type: 'movie',
    title: '大护法',
    rating: 4,
    note: '补标，当年的惊艳之作',
    douban_url: 'https://movie.douban.com/subject/26811587/'
  },
  {
    date: '2019-04-24', month: 4,
    type: 'movie',
    title: '一代宗师 / 一代宗師',
    rating: 4,
    note: '补一下，快忘了',
    douban_url: 'https://movie.douban.com/subject/3821067/'
  },
  {
    date: '2019-04-24', month: 4,
    type: 'movie',
    title: '这个杀手不太冷 / Léon',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1295644/'
  },
  {
    date: '2019-04-30', month: 4,
    type: 'movie',
    title: '放牛班的春天 / Les choristes',
    rating: 4,
    note: '纸飞机和童声可供入梦。',
    douban_url: 'https://movie.douban.com/subject/1291549/'
  },
  {
    date: '2019-05-01', month: 5,
    type: 'movie',
    title: '妈妈咪呀 / Mamma Mia!',
    rating: 4,
    note: '寒假看的，好喜欢片尾曲。thank you for the music，the songs I&#39;m singing.',
    douban_url: 'https://movie.douban.com/subject/2054024/'
  },
  {
    date: '2019-05-01', month: 5,
    type: 'movie',
    title: '重版出来！',
    rating: 5,
    note: '16年的惊喜💫',
    douban_url: 'https://movie.douban.com/subject/26602304/'
  },
  {
    date: '2019-05-01', month: 5,
    type: 'movie',
    title: '垫底辣妹 / ビリギャル',
    rating: 4,
    note: '我又在补标😂',
    douban_url: 'https://movie.douban.com/subject/26259677/'
  },
  {
    date: '2019-05-03', month: 5,
    type: 'tv',
    title: '风中的女王 第三季 / Reign Season 3',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/26302918/'
  },
  {
    date: '2019-05-03', month: 5,
    type: 'tv',
    title: '风中的女王 第二季 / Reign Season 2',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/25863909/'
  },
  {
    date: '2019-05-03', month: 5,
    type: 'tv',
    title: '风中的女王 第一季 / Reign Season 1',
    rating: 3,
    note: '最近听歌随机到了插曲，突然想起来这部初中时觉得各个方面都奇奇怪怪却莫名其妙追了三季的剧hhhhh（不当历史剧看配乐和审美还是在线的…emmmm进一步论证烂剧出好配乐吗？',
    douban_url: 'https://movie.douban.com/subject/22614647/'
  },
  {
    date: '2019-05-05', month: 5,
    type: 'movie',
    title: '何以为家 / كفرناحوم',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/30170448/'
  },
  {
    date: '2019-05-05', month: 5,
    type: 'movie',
    title: '天使爱美丽 / Le Fabuleux destin d&#39;Amélie Poulain',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1292215/'
  },
  {
    date: '2019-05-06', month: 5,
    type: 'book',
    title: '夏日终曲',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/28659562/'
  },
  {
    date: '2019-05-13', month: 5,
    type: 'movie',
    title: '猫儿历险记 / The Aristocats',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1299122/'
  },
  {
    date: '2019-05-13', month: 5,
    type: 'movie',
    title: '101忠狗 / One Hundred and One Dalmatians',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1298204/'
  },
  {
    date: '2019-05-13', month: 5,
    type: 'movie',
    title: '小姐与流浪汉 / Lady and the Tramp',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1300075/'
  },
  {
    date: '2019-05-13', month: 5,
    type: 'tv',
    title: '和陌生人说话 第一季',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/27075258/'
  },
  {
    date: '2019-05-13', month: 5,
    type: 'movie',
    title: '如果蜗牛有爱情',
    rating: 3,
    note: '突然想起来补一下😂作是真作，但想到令人无语的原著我就忍不住加星了……',
    douban_url: 'https://movie.douban.com/subject/26345137/'
  },
  {
    date: '2019-05-13', month: 5,
    type: 'movie',
    title: '破冰行动',
    rating: 4,
    note: '……其实我觉得节奏不太行，详略把控很有问题，画面也算不上"电影质感"（真要说的话，同类别的蜗牛比这好啊……）看了三集对警务流程产生了大大的疑惑，总觉得为了带剧情使得办案效率极不合理。还是没走出类型的老旧风格吧，戏骨都在线，但也只是符合预期而已。🐳台词眼神还是不太行，但角色设定是真契合。观望',
    douban_url: 'https://movie.douban.com/subject/27052168/'
  },
  {
    date: '2019-05-15', month: 5,
    type: 'movie',
    title: '独领风骚 / Clueless',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1295295/'
  },
  {
    date: '2019-05-26', month: 5,
    type: 'movie',
    title: '五月天人生无限公司 / 五月天人生無限公司',
    rating: 3,
    note: '转眼真的太好哭了。',
    douban_url: 'https://movie.douban.com/subject/30310435/'
  },
  {
    date: '2019-05-29', month: 5,
    type: 'movie',
    title: '变身国王 / The Emperor&#39;s New Groove',
    rating: 3,
    note: 'tropes breaking The fourth wall',
    douban_url: 'https://movie.douban.com/subject/1301887/'
  },
  {
    date: '2019-05-30', month: 5,
    type: 'movie',
    title: '歌手2019',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/30219698/'
  },
  {
    date: '2019-05-30', month: 5,
    type: 'movie',
    title: '菊次郎的夏天 / 菊次郎の夏',
    rating: 4,
    note: '夏天又来啦。',
    douban_url: 'https://movie.douban.com/subject/1293359/'
  },
  {
    date: '2019-06-05', month: 6,
    type: 'movie',
    title: '战争游戏 / WarGames',
    rating: 3,
    note: '概念可算超前',
    douban_url: 'https://movie.douban.com/subject/1293522/'
  },
  {
    date: '2019-06-06', month: 6,
    type: 'movie',
    title: '断背山 / Brokeback Mountain',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1418834/'
  },
  {
    date: '2019-06-08', month: 6,
    type: 'movie',
    title: '国王的演讲 / The King&#39;s Speech',
    rating: 4,
    note: '想起来是高考前看的',
    douban_url: 'https://movie.douban.com/subject/4023638/'
  },
  {
    date: '2019-06-09', month: 6,
    type: 'movie',
    title: '每分钟120击 / 120 battements par minute',
    rating: 5,
    note: '用力活着又用力死去。剪辑转场真的花哨却让人爱得不行。节奏和叙事最好的状态到梦中红色的塞纳河结束。',
    douban_url: 'https://movie.douban.com/subject/26746559/'
  },
  {
    date: '2019-06-10', month: 6,
    type: 'movie',
    title: '萤火虫之墓 / 火垂るの墓',
    rating: 3,
    note: '有点小气。（好像是中学时一起看的）',
    douban_url: 'https://movie.douban.com/subject/1293318/'
  },
  {
    date: '2019-06-10', month: 6,
    type: 'movie',
    title: '美丽人生 / La vita è bella',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1292063/'
  },
  {
    date: '2019-06-11', month: 6,
    type: 'movie',
    title: '调音师(短片) / L&#39;accordeur',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/6846495/'
  },
  {
    date: '2019-06-11', month: 6,
    type: 'movie',
    title: '冰雪奇缘 / Frozen',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/4202982/'
  },
  {
    date: '2019-06-11', month: 6,
    type: 'movie',
    title: '同桌的妳',
    rating: 2,
    note: '……至今难忘当年第一排疼痛的颈椎和腻味的爆米花。当然更令人无语的还是电影。',
    douban_url: 'https://movie.douban.com/subject/24843198/'
  },
  {
    date: '2019-06-11', month: 6,
    type: 'movie',
    title: '初恋50次 / 50 First Dates',
    rating: 4,
    note: '初中时的上铺推荐给我的。对她印象好深啊，可是现在已经失去联系方式了。抱歉现在才看，像你说的那样，很可爱。',
    douban_url: 'https://movie.douban.com/subject/1309172/'
  },
  {
    date: '2019-06-12', month: 6,
    type: 'tv',
    title: '和陌生人说话 第二季',
    rating: 5,
    note: '人间戏不散场。',
    douban_url: 'https://movie.douban.com/subject/30327813/'
  },
  {
    date: '2019-06-12', month: 6,
    type: 'movie',
    title: '喜宴 / 囍宴',
    rating: 5,
    note: '这个度，妙啊。 这个编剧，妙啊。',
    douban_url: 'https://movie.douban.com/subject/1303037/'
  },
  {
    date: '2019-06-13', month: 6,
    type: 'movie',
    title: '色，戒',
    rating: 5,
    note: '三场情欲戏情绪叙事非常到位，光影色彩更是绝美。王佳芝的美像是她与易先生的爱之博弈，要钻进心里来充满了看客，又只留下床单上淡淡的坐痕。那首属于王佳芝的背景音乐起来的时候，她的眼睛，像她最后一套旗袍深蓝的领针一样在眼前晃了又晃，像个遥远的漩涡。（王力宏，又一选角形象贴合却演技欠佳典型。）（极巧的是看完后的下午看到三号厅昨天的推文，可验证一些热乎的感受，如及时雨。）',
    douban_url: 'https://movie.douban.com/subject/1828115/'
  },
  {
    date: '2019-06-14', month: 6,
    type: 'movie',
    title: '超体 / Lucy',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/24404677/'
  },
  {
    date: '2019-06-14', month: 6,
    type: 'movie',
    title: '星际穿越 / Interstellar',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1889243/'
  },
  {
    date: '2019-06-15', month: 6,
    type: 'movie',
    title: '罗马假日 / Roman Holiday',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1293839/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '那年青春我们正好',
    rating: 1,
    note: '结束一波关于前本命的补标……剩下只看过cut或者没看完的就不补了。现在有点心塞，想静静……',
    douban_url: 'https://movie.douban.com/subject/26415259/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '步步惊情',
    rating: 1,
    note: '……',
    douban_url: 'https://movie.douban.com/subject/10561869/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '精忠岳飞',
    rating: 2,
    note: '鸡肋是真的鸡肋',
    douban_url: 'https://movie.douban.com/subject/6539421/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '天涯织女',
    rating: 2,
    note: '嘉仪公主是真的美。',
    douban_url: 'https://movie.douban.com/subject/4202337/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '下一个奇迹',
    rating: 1,
    note: '？',
    douban_url: 'https://movie.douban.com/subject/5326540/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '回到爱开始的地方',
    rating: 3,
    note: '难得还记得老奶奶哭出的鼻涕哈哈哈',
    douban_url: 'https://movie.douban.com/subject/20378794/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '伤心童话',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/10453730/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '深夜前的五分钟',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/25742242/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '女医明妃传',
    rating: 3,
    note: '……',
    douban_url: 'https://movie.douban.com/subject/25817053/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '怪侠一枝梅',
    rating: 4,
    note: '那时候很喜欢。',
    douban_url: 'https://movie.douban.com/subject/4861422/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '仙剑奇侠传三',
    rating: 4,
    note: '电视剧启蒙🌝',
    douban_url: 'https://movie.douban.com/subject/3227335/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '心理罪之城市之光',
    rating: 3,
    note: '给17年画上句号的片子。',
    douban_url: 'https://movie.douban.com/subject/26774722/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '不二神探',
    rating: 1,
    note: '一点都不懂电影的年纪也不会被吸引被唬住的片子。',
    douban_url: 'https://movie.douban.com/subject/10604486/'
  },
  {
    date: '2019-06-16', month: 6,
    type: 'movie',
    title: '步步惊心',
    rating: 5,
    note: '是我的童年。今年百度贴吧清了2017年前的帖，才想起来关于这部剧的长达几年的回忆证明都被清空了。',
    douban_url: 'https://movie.douban.com/subject/5384548/'
  },
  {
    date: '2019-06-21', month: 6,
    type: 'movie',
    title: '大河唱',
    rating: 4,
    note: '音乐我真的好好好好好喜欢。看这部电影不需要门槛，这是我最爱的一个点。',
    douban_url: 'https://movie.douban.com/subject/30227699/'
  },
  {
    date: '2019-06-29', month: 6,
    type: 'movie',
    title: '触不可及 / Intouchables',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/6786002/'
  },
  {
    date: '2019-07-03', month: 7,
    type: 'movie',
    title: '摩登时代 / Modern Times',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1294371/'
  },
  {
    date: '2019-07-04', month: 7,
    type: 'movie',
    title: '白日焰火',
    rating: 4,
    note: '走情绪🉑️',
    douban_url: 'https://movie.douban.com/subject/21941804/'
  },
  {
    date: '2019-07-05', month: 7,
    type: 'movie',
    title: '狮子王 / The Lion King',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1301753/'
  },
  {
    date: '2019-07-08', month: 7,
    type: 'tv',
    title: '历史那些事 第一季',
    rating: 4,
    note: '真的很可爱，也是很别出心裁的尝试。',
    douban_url: 'https://movie.douban.com/subject/30335576/'
  },
  {
    date: '2019-07-20', month: 7,
    type: 'movie',
    title: '从你的全世界路过',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/26280528/'
  },
  {
    date: '2019-07-21', month: 7,
    type: 'movie',
    title: '哪吒之魔童降世',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26794435/'
  },
  {
    date: '2019-07-22', month: 7,
    type: 'movie',
    title: '西游记之大闹天宫',
    rating: 1,
    note: '特效太丑了吧…气质也非常奇怪…不堪入目（回程的车上为啥要放这个啊，我都快看晕车了）',
    douban_url: 'https://movie.douban.com/subject/5317291/'
  },
  {
    date: '2019-07-26', month: 7,
    type: 'movie',
    title: '单身男女 / 單身男女',
    rating: 3,
    note: 'emmmm偶然在电视上看完，心里堵得慌😥也许是因为八年过去了吧，女主的纠结现在看来简直令人匪夷所思。',
    douban_url: 'https://movie.douban.com/subject/4724739/'
  },
  {
    date: '2019-07-27', month: 7,
    type: 'movie',
    title: '超脱 / Detachment',
    rating: 5,
    note: '没有人是真正的救赎者。这是人与人之间，茫茫人生之中，最哀也最美的事。Detachment，超脱，也可解作脱节。',
    douban_url: 'https://movie.douban.com/subject/5322596/'
  },
  {
    date: '2019-08-01', month: 8,
    type: 'movie',
    title: '神偷奶爸 / Despicable Me',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/3287562/'
  },
  {
    date: '2019-08-01', month: 8,
    type: 'movie',
    title: '超能陆战队 / Big Hero 6',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/11026735/'
  },
  {
    date: '2019-08-01', month: 8,
    type: 'movie',
    title: '一个叫欧维的男人决定去死 / En man som heter Ove',
    rating: 4,
    note: '我们无数次擦肩而过，却从未认识彼此。',
    douban_url: 'https://movie.douban.com/subject/26628357/'
  },
  {
    date: '2019-08-02', month: 8,
    type: 'movie',
    title: '你的名字。 / 君の名は。',
    rating: 4,
    note: '太美了太美了。 虽然故事基本靠奇妙的设定在撑，男女主的相爱缺乏合理的轨迹，但这不妨碍我度过了美妙的一个多小时。总之很感谢创作者造了这样一个梦。',
    douban_url: 'https://movie.douban.com/subject/26683290/'
  },
  {
    date: '2019-08-04', month: 8,
    type: 'movie',
    title: '摔跤吧！爸爸 / Dangal',
    rating: 5,
    note: '认真地讲好了一个好故事。阿米尔汗的付出和用心真的肉眼可见，太厉害了。',
    douban_url: 'https://movie.douban.com/subject/26387939/'
  },
  {
    date: '2019-08-04', month: 8,
    type: 'movie',
    title: '西游记之大圣归来',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26277313/'
  },
  {
    date: '2019-08-04', month: 8,
    type: 'movie',
    title: '起舞吧！齐舞',
    rating: 3,
    note: '齐舞不齐，我真是…算了不说了…创意是不错的，但水平是全方位的emmmm…偶然看到一期里面国标➕古典的那个敦煌舞还不错的。',
    douban_url: 'https://movie.douban.com/subject/34262181/'
  },
  {
    date: '2019-08-11', month: 8,
    type: 'movie',
    title: '饮食男女 / 飲食男女',
    rating: 5,
    note: '会恍惚跳入看《一一》的状态，然而食物的自然参与又迅速把我拉开。大概一一是看了动容却很难有勇气再点开一遍的那种类型，而饮食男女就像电影名字所暗含的那样，是时时会愿意重温的类型。',
    douban_url: 'https://movie.douban.com/subject/1291818/'
  },
  {
    date: '2019-08-20', month: 8,
    type: 'movie',
    title: '送我上青云',
    rating: 4,
    note: '四星嫌多，三星觉少。题材大胆有讲头，笑点是直切人生的幽默，但作为文艺片，镜头表达铺陈和意象阐释实在不算细腻。想表达的太多，像梁美芝这样的角色要解释起来就什么视角都缺点儿意思，表达在互搏，又不是在思辨的那种互搏，更像掐架。老人最后选择的归宿让人想起蓝色骨头。小刘的角色摔得够狠，有意思。',
    douban_url: 'https://movie.douban.com/subject/27180759/'
  },
  {
    date: '2019-08-20', month: 8,
    type: 'movie',
    title: '花样年华 / 花樣年華',
    rating: 5,
    note: '梁朝伟最好看的是眼睛。',
    douban_url: 'https://movie.douban.com/subject/1291557/'
  },
  {
    date: '2019-08-29', month: 8,
    type: 'movie',
    title: '小欢喜',
    rating: 5,
    note: '追小欢喜的这段日子好像两个平行世界的短暂相交啊。一个盛夏的时间交换一场经历，分别时有不舍，但更觉满足。 因为我相信，那个平行世界永远有长城见证的梦想，灯火熨烫的爱意，以及未知却无畏的未来。 谢谢你们一夏的陪伴，少年人的每分每秒都是夏天🌿',
    douban_url: 'https://movie.douban.com/subject/26946624/'
  },
  {
    date: '2019-08-29', month: 8,
    type: 'movie',
    title: '蓝宇 / 藍宇',
    rating: 4,
    note: '想起叶子的眼神，就舍不得往下扣了。',
    douban_url: 'https://movie.douban.com/subject/1308076/'
  },
  {
    date: '2019-09-01', month: 9,
    type: 'movie',
    title: '铤而走险',
    rating: 3,
    note: '剧本出发点非常有趣，但推动全靠巧合套路一层又一层，观众的投入度和好奇心一点点地也就散掉了。难得的是每个人物线都还算得上饱满，两个亡命徒也有共情点在。大鹏的角色拿捏可能出了点偏差，表情近景总有种奇怪的痞气（或者说是匪气？）。欧豪不错，角色的感觉出来了。',
    douban_url: 'https://movie.douban.com/subject/30184555/'
  },
  {
    date: '2019-09-07', month: 9,
    type: 'movie',
    title: '推手',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1306939/'
  },
  {
    date: '2019-09-08', month: 9,
    type: 'movie',
    title: '楚门的世界 / The Truman Show',
    rating: 5,
    note: '最后一句台词……',
    douban_url: 'https://movie.douban.com/subject/1292064/'
  },
  {
    date: '2019-09-15', month: 9,
    type: 'movie',
    title: '罗小黑战记',
    rating: 4,
    note: '正好这个暑假突发奇想接触了一堆网文，因此感觉人物设定和世界观似曾相识感都还蛮强的，新鲜感不多。笑点很对味，但的确出圈有门槛。',
    douban_url: 'https://movie.douban.com/subject/26709258/'
  },
  {
    date: '2019-09-29', month: 9,
    type: 'movie',
    title: '圣诞玫瑰',
    rating: 3,
    note: '张震在探望室最后那一抬眼有值回我投入的时间。最后十分钟骂了十分钟脏话，不想回忆了。',
    douban_url: 'https://movie.douban.com/subject/10600271/'
  },
  {
    date: '2019-10-01', month: 10,
    type: 'movie',
    title: '攀登者',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/30413052/'
  },
  {
    date: '2019-10-01', month: 10,
    type: 'movie',
    title: '中国机长',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/30295905/'
  },
  {
    date: '2019-10-01', month: 10,
    type: 'movie',
    title: '波普先生的企鹅 / Mr. Popper&#39;s Penguins',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/3602084/'
  },
  {
    date: '2019-10-02', month: 10,
    type: 'movie',
    title: '千与千寻 / 千と千尋の神隠し',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1291561/'
  },
  {
    date: '2019-10-04', month: 10,
    type: 'book',
    title: '皆大欢喜',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/26774214/'
  },
  {
    date: '2019-10-04', month: 10,
    type: 'book',
    title: '第十二夜',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/26882497/'
  },
  {
    date: '2019-10-04', month: 10,
    type: 'book',
    title: '哈姆莱特',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/26646728/'
  },
  {
    date: '2019-10-04', month: 10,
    type: 'book',
    title: '李尔王',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/26649803/'
  },
  {
    date: '2019-10-04', month: 10,
    type: 'book',
    title: '威尼斯商人',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/26774210/'
  },
  {
    date: '2019-10-04', month: 10,
    type: 'book',
    title: '菊与刀',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/26171368/'
  },
  {
    date: '2019-10-04', month: 10,
    type: 'book',
    title: '乡土中国',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/20395476/'
  },
  {
    date: '2019-10-04', month: 10,
    type: 'book',
    title: '关键对话：如何高效能沟通（原书第2版）（珍藏版）',
    rating: 2,
    douban_url: 'https://book.douban.com/subject/27046682/'
  },
  {
    date: '2019-10-12', month: 10,
    type: 'movie',
    title: '罗小黑战记',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/10477598/'
  },
  {
    date: '2019-10-19', month: 10,
    type: 'movie',
    title: '双子杀手 / Gemini Man',
    rating: 4,
    note: '故事立意乏善可陈。但是为了技术层面的尝试和深挖，为了威尔史密斯的演绎，四星可给。',
    douban_url: 'https://movie.douban.com/subject/3097572/'
  },
  {
    date: '2019-10-26', month: 10,
    type: 'movie',
    title: '少年的你',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/30166972/'
  },
  {
    date: '2019-11-02', month: 11,
    type: 'movie',
    title: '天气之子 / 天気の子',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/30402296/'
  },
  {
    date: '2019-11-03', month: 11,
    type: 'movie',
    title: '四百击 / Les quatre cents coups',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1300056/'
  },
  {
    date: '2019-11-04', month: 11,
    type: 'book',
    title: '中国电视史',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/30167643/'
  },
  {
    date: '2019-11-06', month: 11,
    type: 'movie',
    title: '十二生肖',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/4212172/'
  },
  {
    date: '2019-11-13', month: 11,
    type: 'movie',
    title: '水浇园丁 / L&#39;arroseur arrosé',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1867744/'
  },
  {
    date: '2019-11-13', month: 11,
    type: 'movie',
    title: '辛亥革命',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/4896305/'
  },
  {
    date: '2019-11-13', month: 11,
    type: 'movie',
    title: '黄克功案件',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26005643/'
  },
  {
    date: '2019-11-13', month: 11,
    type: 'movie',
    title: '我们战斗吧',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/26794240/'
  },
  {
    date: '2019-11-13', month: 11,
    type: 'tv',
    title: '国家宝藏 第一季',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/27186619/'
  },
  {
    date: '2019-11-13', month: 11,
    type: 'movie',
    title: '欢乐颂2',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/26743573/'
  },
  {
    date: '2019-11-13', month: 11,
    type: 'movie',
    title: '欢乐颂',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/26430092/'
  },
  {
    date: '2019-11-14', month: 11,
    type: 'movie',
    title: '他来了，请闭眼',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/26088457/'
  },
  {
    date: '2019-11-14', month: 11,
    type: 'movie',
    title: '铁道飞虎',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/26389069/'
  },
  {
    date: '2019-11-14', month: 11,
    type: 'movie',
    title: '春光乍泄 / 春光乍洩',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1292679/'
  },
  {
    date: '2019-11-16', month: 11,
    type: 'movie',
    title: '苏东坡',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/27091593/'
  },
  {
    date: '2019-11-20', month: 11,
    type: 'movie',
    title: '饥饿游戏3：嘲笑鸟(上) / The Hunger Games: Mockingjay - Part 1',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/6533054/'
  },
  {
    date: '2019-11-20', month: 11,
    type: 'movie',
    title: '饥饿游戏3：嘲笑鸟(下) / The Hunger Games: Mockingjay - Part 2',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/10047547/'
  },
  {
    date: '2019-11-20', month: 11,
    type: 'movie',
    title: '饥饿游戏2：星火燎原 / The Hunger Games: Catching Fire',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/6874456/'
  },
  {
    date: '2019-11-20', month: 11,
    type: 'movie',
    title: '饥饿游戏 / The Hunger Games',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/3592853/'
  },
  {
    date: '2019-11-20', month: 11,
    type: 'movie',
    title: '四大名捕2',
    rating: 1,
    douban_url: 'https://movie.douban.com/subject/10604892/'
  },
  {
    date: '2019-11-20', month: 11,
    type: 'movie',
    title: '道士下山',
    rating: 1,
    douban_url: 'https://movie.douban.com/subject/24879839/'
  },
  {
    date: '2019-11-24', month: 11,
    type: 'movie',
    title: '阳光灿烂的日子',
    rating: 5,
    note: '无意看了一个片段，夏雨那时候好灵！ 看完了，夏雨太灵了！所有人都好灵！',
    douban_url: 'https://movie.douban.com/subject/1291875/'
  },
  {
    date: '2019-12-04', month: 12,
    type: 'movie',
    title: '车四十四',
    rating: 3,
    note: '演技一般 最后的笑有点意思',
    douban_url: 'https://movie.douban.com/subject/1308627/'
  },
  {
    date: '2019-12-07', month: 12,
    type: 'movie',
    title: '南方车站的聚会',
    rating: 4,
    note: '美则美矣。 主线故事的底色四个字概括《无名之辈》。 提心吊胆地去看，发现胡歌是在角色里的，看完长舒一口气。但也没看到惊喜和灵气，唉。武汉话有加分，破坏了他声线带来的熟悉感。 总的来说还是散了，有好的审美尖刻的讽刺，但是整体又粘合不起来，缺那么点精气神。四星勉强吧。',
    douban_url: 'https://movie.douban.com/subject/27668250/'
  },
  {
    date: '2019-12-11', month: 12,
    type: 'movie',
    title: '陪安东尼度过漫长岁月',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/26269510/'
  },
  {
    date: '2019-12-11', month: 12,
    type: 'movie',
    title: '捉妖记',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/25723907/'
  },
  {
    date: '2019-12-11', month: 12,
    type: 'movie',
    title: '被偷走的那五年',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/20513059/'
  },
  {
    date: '2019-12-11', month: 12,
    type: 'movie',
    title: '人再囧途之泰囧',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/10574622/'
  },
  {
    date: '2019-12-11', month: 12,
    type: 'movie',
    title: '歌舞青春 / High School Musical',
    rating: 3,
    note: '……？',
    douban_url: 'https://movie.douban.com/subject/1765009/'
  },
  {
    date: '2019-12-12', month: 12,
    type: 'movie',
    title: '厨子戏子痞子',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/6011806/'
  },
  {
    date: '2019-12-12', month: 12,
    type: 'movie',
    title: '分手大师',
    rating: 1,
    douban_url: 'https://movie.douban.com/subject/24879858/'
  },
  {
    date: '2019-12-12', month: 12,
    type: 'movie',
    title: '栀子花开',
    rating: 1,
    douban_url: 'https://movie.douban.com/subject/26021055/'
  },
  {
    date: '2019-12-12', month: 12,
    type: 'movie',
    title: '北京爱情故事',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/24736566/'
  },
  {
    date: '2019-12-16', month: 12,
    type: 'movie',
    title: '夜以继夜',
    rating: 3,
    note: '电影是从摩托车的长镜头开始渐入佳境的。弹烟圈的部分着实惊艳，无论是演员的表演，光影还是音效的配合都很到位，因此在人物描摹上的效果也立竿见影。走过人群的长镜头完全对得起李屏宾160米的轨道！！！其实对我而言，陆上行舟的特效片段非常贴合我个人对故乡的情感：试图回归而无法，最终面临的后果就是回归即毁灭。 影片前段部分叙事交代上有一定的理解障碍，如果提前没有看过简介，我很难说自己不会一头雾水半部片子。女主演员的生涩感很明显，不过放到整个角色里倒也不突兀。',
    douban_url: 'https://movie.douban.com/subject/27075252/'
  },
  {
    date: '2019-12-18', month: 12,
    type: 'movie',
    title: '灰姑娘 / Cinderella',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/6875263/'
  },
  {
    date: '2019-12-18', month: 12,
    type: 'movie',
    title: '哆啦A梦：伴我同行 / STAND BY ME ドラえもん',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/25769362/'
  },
  {
    date: '2019-12-21', month: 12,
    type: 'movie',
    title: '城市之光 / City Lights',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1293908/'
  },
  {
    date: '2019-12-22', month: 12,
    type: 'movie',
    title: '四月物语 / 四月物語',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1292371/'
  },
  {
    date: '2019-12-23', month: 12,
    type: 'movie',
    title: '深夜食堂电影版 / 映画 深夜食堂',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/25958787/'
  },
  {
    date: '2019-12-23', month: 12,
    type: 'movie',
    title: '极速蜗牛 / Turbo',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/6070226/'
  },
  {
    date: '2019-12-24', month: 12,
    type: 'movie',
    title: '南方与北方 / North &amp; South',
    rating: 5,
    note: '人物处理非常非常细腻，转变自然。时代大背景与个体命运形成了自洽，而不是强加。',
    douban_url: 'https://movie.douban.com/subject/1439487/'
  },
  {
    date: '2019-12-26', month: 12,
    type: 'movie',
    title: '青禾男高',
    rating: 1,
    douban_url: 'https://movie.douban.com/subject/26787124/'
  },
  {
    date: '2019-12-27', month: 12,
    type: 'tv',
    title: '请吃红小豆吧！第一季',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/30259908/'
  },
  {
    date: '2019-12-27', month: 12,
    type: 'tv',
    title: '水果传 第一季',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/27621014/'
  },
  {
    date: '2019-12-27', month: 12,
    type: 'movie',
    title: '德国：我们如何生活 / Deutschland - Wie wir leben',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/27052303/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'movie',
    title: '云中行走 / The Walk',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/25819229/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '滚蛋吧!肿瘤君',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/11622283/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '可不可以不艺术',
    rating: 2,
    douban_url: 'https://book.douban.com/subject/26426504/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '故乡相处流传',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/26879922/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '中国文脉',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/21321799/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '风流去',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/3464792/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '北方的河',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1086466/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '了不起的盖茨比',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/4149805/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '恶之花',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3662216/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '菜根谭',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1286547/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '猫城记',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/3345595/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '北大熏出来的评论',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/26825515/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '女孩,跑起来',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/26832613/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '人类群星闪耀时',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/26866539/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '行者无疆',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/20383609/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '查令十字街84号',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/26768309/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '天才在左 疯子在右',
    rating: 2,
    douban_url: 'https://book.douban.com/subject/4242172/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '精进',
    rating: 2,
    douban_url: 'https://book.douban.com/subject/26761696/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '时评中国2',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/30194169/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '时评中国',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/26717285/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '巴黎圣母院',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/25886226/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '价值的理由',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/10608218/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '瓦尔登湖',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/3522695/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '从你的全世界路过',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/25747921/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '然后，我就一个人了',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/6967980/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '拖拉一点也无妨',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/27604280/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '大城小爱',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/26401655/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '最美不过童话 2',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/26267099/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '最美不过童话1',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/26270519/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '雅舍小品',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/26647408/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '收山',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/26672441/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '断舍离',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/24749465/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '星空',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/4012128/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '怦然心动的人生整理魔法',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/10747883/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '小窗幽记',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/1274986/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '毛姆短篇小说精选集',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/10774752/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '你好，旧时光',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/26591331/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '暗恋·橘生淮南',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/25829434/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '文化苦旅',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1050339/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '野火集',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/4729583/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '看上去很美',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/1015584/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '玩偶之家',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3534238/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '步步惊心',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/6794017/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '琅琊榜（全三册）',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/25873686/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '白鹿原',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/10282439/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '把时间当作朋友',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3609132/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '穆斯林的葬礼',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/2244146/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '长恨歌',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/25882050/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '金锁记',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3017857/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '那些回不去的年少时光',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/4231381/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '最好的我们',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/24754316/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '雷雨',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1013416/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '你今天真好看',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/26602392/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '城南旧事',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1254588/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '灿烂千阳',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/2143732/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '小王子',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/1084336/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '窗边的小豆豆',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1007914/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '解忧杂货店',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/25862578/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '白夜行',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/10554308/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '堂吉诃德',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/25837852/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '亲爱的安德烈',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3369793/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '向左走·向右走',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1066462/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '朝花夕拾',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1449352/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '偷影子的人',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/10763902/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '岛上书店',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/26340138/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '阿狸·梦之城堡',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3554154/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '围城',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/24745649/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '我们仨',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1023045/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '平凡的世界',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/10517238/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '月亮和六便士',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/4123116/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '追风筝的人',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1770782/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '傲慢与偏见',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/4881639/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '呼兰河传',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1060852/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '目送',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3995526/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '一个人的朝圣',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/24934182/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '地下铁',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1056733/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '白鲸',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/2170030/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '儒林外史',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1042053/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '父与子全集',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1002898/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '孩子你慢慢来',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/4207781/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '明朝那些事儿（肆）',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/2253642/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '明朝那些事儿（伍）',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3009821/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '明朝那些事儿（陆）',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3274113/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '明朝那些事儿（柒）',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3626924/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '明朝那些事儿（叁）',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/2052448/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '明朝那些事儿（贰）',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1949338/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '明朝那些事儿（壹）',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1873231/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '许三观卖血记',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/4760224/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '鲁滨孙历险记',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1893466/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '雾都孤儿',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/2355626/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '阿Q正传',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1088065/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '无人生还',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/24859822/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '牧羊少年奇幻之旅',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3608208/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '东方快车谋杀案',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/24153048/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '红楼梦',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/1007305/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '温莎墓园日记',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/1819978/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '即兴判断',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/1888215/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '琼美卡随想录',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/1829614/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '云雀叫了一整天',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/22163516/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '哥伦比亚的倒影',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/1460313/'
  },
  {
    date: '2019-12-28', month: 12,
    type: 'book',
    title: '素履之往',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/1949679/'
  },
  {
    date: '2019-12-30', month: 12,
    type: 'movie',
    title: '书迷',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/30200070/'
  },
  {
    date: '2019-12-30', month: 12,
    type: 'book',
    title: '西班牙三棵树',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/1875581/'
  },
  {
    date: '2020-01-02', month: 1,
    type: 'movie',
    title: '误杀',
    rating: 4,
    note: '拳赛和事发现场的交叉蒙太奇是有东西的，羊的贯穿也非常妙。陈冲有一点点过，但整体基本拿住了。',
    douban_url: 'https://movie.douban.com/subject/30176393/'
  },
  {
    date: '2020-01-02', month: 1,
    type: 'movie',
    title: '宠爱',
    rating: 2,
    douban_url: 'https://movie.douban.com/subject/33417046/'
  },
  {
    date: '2020-01-08', month: 1,
    type: 'movie',
    title: '但是还有书籍',
    rating: 5,
    note: '很真诚。',
    douban_url: 'https://movie.douban.com/subject/33418361/'
  },
  {
    date: '2020-01-09', month: 1,
    type: 'movie',
    title: '2019最美的夜 bilibili晚会',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/34930755/'
  },
  {
    date: '2020-01-12', month: 1,
    type: 'book',
    title: '平如美棠',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/23008971/'
  },
  {
    date: '2020-01-14', month: 1,
    type: 'movie',
    title: '锦衣卫',
    rating: 2,
    note: '……李仁港啊……',
    douban_url: 'https://movie.douban.com/subject/3754946/'
  },
  {
    date: '2020-01-17', month: 1,
    type: 'movie',
    title: '爱丽丝梦游仙境2：镜中奇遇记 / Alice Through the Looking Glass',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/21441132/'
  },
  {
    date: '2020-01-17', month: 1,
    type: 'movie',
    title: '爱丽丝梦游仙境 / Alice in Wonderland',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/2336785/'
  },
  {
    date: '2020-01-17', month: 1,
    type: 'movie',
    title: '荒野猎人 / The Revenant',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/5327268/'
  },
  {
    date: '2020-01-17', month: 1,
    type: 'movie',
    title: '爱宠大机密 / The Secret Life of Pets',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/21817627/'
  },
  {
    date: '2020-01-25', month: 1,
    type: 'movie',
    title: '蝴蝶效应3：启示 / The Butterfly Effect 3: Revelations',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/3077413/'
  },
  {
    date: '2020-01-25', month: 1,
    type: 'movie',
    title: '知青',
    rating: 4,
    note: '青春与命运。',
    douban_url: 'https://movie.douban.com/subject/7163794/'
  },
  {
    date: '2020-01-27', month: 1,
    type: 'movie',
    title: '妖猫传',
    rating: 4,
    note: '杨贵妃是盛唐的抽象，视听效果是盛唐的气象。',
    douban_url: 'https://movie.douban.com/subject/5350027/'
  },
  {
    date: '2020-01-27', month: 1,
    type: 'movie',
    title: '非典十年祭',
    rating: 4,
    note: '这一次的起手，我们仍然输给了轻慢。',
    douban_url: 'https://movie.douban.com/subject/25960946/'
  },
  {
    date: '2020-01-27', month: 1,
    type: 'book',
    title: '嫌疑人X的献身',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3211779/'
  },
  {
    date: '2020-01-27', month: 1,
    type: 'book',
    title: '摆渡人',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/26356948/'
  },
  {
    date: '2020-01-27', month: 1,
    type: 'book',
    title: '华胥引（全二册）',
    rating: 2,
    douban_url: 'https://book.douban.com/subject/5916880/'
  },
  {
    date: '2020-01-27', month: 1,
    type: 'book',
    title: '额尔古纳河右岸',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/1706150/'
  },
  {
    date: '2020-01-27', month: 1,
    type: 'book',
    title: '边城',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/3191322/'
  },
  {
    date: '2020-01-28', month: 1,
    type: 'tv',
    title: '请吃红小豆吧！第二季',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/30409718/'
  },
  {
    date: '2020-01-28', month: 1,
    type: 'book',
    title: '寂寞的游戏',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/27104286/'
  },
  {
    date: '2020-01-29', month: 1,
    type: 'movie',
    title: '千年女优 / 千年女優',
    rating: 5,
    note: '爱和信仰是执念吗？',
    douban_url: 'https://movie.douban.com/subject/1307394/'
  },
  {
    date: '2020-01-29', month: 1,
    type: 'tv',
    title: '神探夏洛克 第三季 / Sherlock Season 3',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/10455629/'
  },
  {
    date: '2020-01-29', month: 1,
    type: 'tv',
    title: '神探夏洛克  第二季 / Sherlock Season 2',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/6522269/'
  },
  {
    date: '2020-01-29', month: 1,
    type: 'tv',
    title: '神探夏洛克 第一季 / Sherlock Season 1',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/3986493/'
  },
  {
    date: '2020-01-29', month: 1,
    type: 'movie',
    title: '请吃红小豆吧！外传 莫相忘',
    rating: 5,
    note: '三生三世相思豆。',
    douban_url: 'https://movie.douban.com/subject/34452946/'
  },
  {
    date: '2020-01-29', month: 1,
    type: 'movie',
    title: '黑天鹅 / Black Swan',
    rating: 5,
    note: '理解何为perfect，何为sex，何为一个个体，何为一个人。',
    douban_url: 'https://movie.douban.com/subject/1978709/'
  },
  {
    date: '2020-01-29', month: 1,
    type: 'book',
    title: '一个人的朝圣2',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/26584387/'
  },
  {
    date: '2020-01-29', month: 1,
    type: 'book',
    title: '与一万个城市擦身而过',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/26937873/'
  },
  {
    date: '2020-01-30', month: 1,
    type: 'movie',
    title: '2001太空漫游 / 2001: A Space Odyssey',
    rating: 5,
    note: '人类永恒的渺小，无知，迷茫与恐惧。无论是面对生命，面对未知，还是面对自己所创造的东西。 很多地方都看不懂，但确乎是被打动了。背景音消失的时候，能听见自己的呼吸声。和Dave的并没有什么不同。 这是一部太适合电影院的电影。把自己扔进漆黑的空间，就像人类置身于浩瀚。 最后！！！这居然是68年啊！！！库布里克到底是不是人啊！！！',
    douban_url: 'https://movie.douban.com/subject/1292226/'
  },
  {
    date: '2020-01-30', month: 1,
    type: 'book',
    title: '社交媒体简史',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/30434010/'
  },
  {
    date: '2020-01-31', month: 1,
    type: 'movie',
    title: '蓝色大门 / 藍色大門',
    rating: 4,
    note: '要是每一个孟克柔在长大的时候都可以遇到张士豪就好了。',
    douban_url: 'https://movie.douban.com/subject/1308575/'
  },
  {
    date: '2020-02-01', month: 2,
    type: 'movie',
    title: '平原上的夏洛克',
    rating: 4,
    note: '不好笑也不悬疑，但意料之外地有点浪漫。三星半。',
    douban_url: 'https://movie.douban.com/subject/33400376/'
  },
  {
    date: '2020-02-02', month: 2,
    type: 'movie',
    title: '龙凤店',
    rating: 2,
    note: '🌚',
    douban_url: 'https://movie.douban.com/subject/4735944/'
  },
  {
    date: '2020-02-02', month: 2,
    type: 'movie',
    title: '入殓师 / おくりびと',
    rating: 5,
    note: '结局落得出乎意料的俗套。此外满分。',
    douban_url: 'https://movie.douban.com/subject/2149806/'
  },
  {
    date: '2020-02-02', month: 2,
    type: 'book',
    title: '一个人消失在世上',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/24861167/'
  },
  {
    date: '2020-02-03', month: 2,
    type: 'movie',
    title: '重庆森林 / 重慶森林',
    rating: 5,
    note: '抽帧运镜滤镜都尤其的墨镜（哪部又不是呢？） 更喜欢后一个故事。 看这些片子，去认识那些我因为晚来这个世界，而错过其绝色风华时代的人，总是惊叹。',
    douban_url: 'https://movie.douban.com/subject/1291999/'
  },
  {
    date: '2020-02-04', month: 2,
    type: 'movie',
    title: '喜剧之王 / 喜劇之王',
    rating: 4,
    note: '没怎么笑，倒是有的时候想流泪，然后意识到也不过是在看戏。（3.5吧）',
    douban_url: 'https://movie.douban.com/subject/1302425/'
  },
  {
    date: '2020-02-04', month: 2,
    type: 'movie',
    title: '小城之春',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1323746/'
  },
  {
    date: '2020-02-04', month: 2,
    type: 'book',
    title: '娱乐至死',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/26319730/'
  },
  {
    date: '2020-02-05', month: 2,
    type: 'movie',
    title: '无人知晓 / 誰も知らない',
    rating: 5,
    note: '沉重到吃饭也恹恹。 同时又觉得是枝裕和好温柔好仁慈，至终没有让我们直面阿雪离开后，再无生气的脸。 不过这也是对于这几个孩子而言，最难堪的地方。死亡无从启齿，来人世一遭，模样模糊，"无人知晓"。',
    douban_url: 'https://movie.douban.com/subject/1292337/'
  },
  {
    date: '2020-02-05', month: 2,
    type: 'book',
    title: '时间的女儿',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/26898909/'
  },
  {
    date: '2020-02-06', month: 2,
    type: 'movie',
    title: '钢的琴',
    rating: 5,
    note: '时代的余温。 一部非常令人惊喜的片子，脚踏实地的优秀国产片。',
    douban_url: 'https://movie.douban.com/subject/4876722/'
  },
  {
    date: '2020-02-07', month: 2,
    type: 'movie',
    title: '天空之城 / 天空の城ラピュタ',
    rating: 4,
    note: '重看最喜欢的居然是老奶奶。她的浪漫是岁月里封藏的宝藏。',
    douban_url: 'https://movie.douban.com/subject/1291583/'
  },
  {
    date: '2020-02-08', month: 2,
    type: 'movie',
    title: '面纱 / The Painted Veil',
    rating: 4,
    note: '画面，配乐，演员的演绎上都达到了一种细腻隽永，但要说剧情和情感上的朦胧和婉转，还是直白简单了些。在疾疫当前的时刻看这部片子会有很多感触。疾病与死亡伴生着美也摧毁着美。美将永生，不一定是因为我们。就好像影片头尾花房里的花所暗示的那样。',
    douban_url: 'https://movie.douban.com/subject/1441238/'
  },
  {
    date: '2020-02-08', month: 2,
    type: 'movie',
    title: '黑猫警长',
    rating: 0,
    douban_url: 'https://movie.douban.com/subject/1860377/'
  },
  {
    date: '2020-02-09', month: 2,
    type: 'movie',
    title: '初吻 / La boum',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1340517/'
  },
  {
    date: '2020-02-10', month: 2,
    type: 'movie',
    title: '傲慢与偏见 / Pride &amp; Prejudice',
    rating: 5,
    note: '太美了。就是初见的Darcy和后面完全不像同一个人hhh，第一场为了表现性格上内向局促的一面，在表情和仪态上垮得有点厉害……',
    douban_url: 'https://movie.douban.com/subject/1418200/'
  },
  {
    date: '2020-02-10', month: 2,
    type: 'movie',
    title: '初吻2 / La boum 2',
    rating: 3,
    note: '第一部不经意之间的可爱少了很多……',
    douban_url: 'https://movie.douban.com/subject/1292864/'
  },
  {
    date: '2020-02-11', month: 2,
    type: 'movie',
    title: '三傻大闹宝莱坞 / 3 Idiots',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/3793023/'
  },
  {
    date: '2020-02-12', month: 2,
    type: 'movie',
    title: '佛罗里达乐园 / The Florida Project',
    rating: 3,
    note: '后半段很好，但其实很脱节。从道德立场来评判是很可笑的，应该是现象呈现而不是立场对决。',
    douban_url: 'https://movie.douban.com/subject/26778790/'
  },
  {
    date: '2020-02-13', month: 2,
    type: 'movie',
    title: '边城',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1305978/'
  },
  {
    date: '2020-02-14', month: 2,
    type: 'book',
    title: '鼠疫',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/24257229/'
  },
  {
    date: '2020-02-14', month: 2,
    type: 'book',
    title: '桃花源的故事',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/3634394/'
  },
  {
    date: '2020-02-15', month: 2,
    type: 'movie',
    title: '1917',
    rating: 5,
    note: '长镜头叙事，build up a world。 死亡与诗意。',
    douban_url: 'https://movie.douban.com/subject/30252495/'
  },
  {
    date: '2020-02-16', month: 2,
    type: 'movie',
    title: '极速车王 / Ford v Ferrari',
    rating: 4,
    note: '在风格化生产流程下的极致。',
    douban_url: 'https://movie.douban.com/subject/6538866/'
  },
  {
    date: '2020-02-20', month: 2,
    type: 'movie',
    title: '新世界',
    rating: 4,
    note: '本来只有三星的，最后两集拍太好了就放个水吧……这个剧组的班子太适合最后两集的拍法了，可惜剧情重心、节奏、风格都跑偏了，一手好牌打成这样。',
    douban_url: 'https://movie.douban.com/subject/30329906/'
  },
  {
    date: '2020-02-21', month: 2,
    type: 'movie',
    title: '亲爱的篮球 / Dear Basketball',
    rating: 4,
    note: '在上篮球网课，视频那一端的老师哭了。',
    douban_url: 'https://movie.douban.com/subject/27147737/'
  },
  {
    date: '2020-03-18', month: 3,
    type: 'tv',
    title: '航拍中国 第一季',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26694967/'
  },
  {
    date: '2020-03-18', month: 3,
    type: 'book',
    title: '小偷家族',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/30374817/'
  },
  {
    date: '2020-03-28', month: 3,
    type: 'movie',
    title: '我在中国做电影',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/34973406/'
  },
  {
    date: '2020-04-14', month: 4,
    type: 'tv',
    title: '请吃红小豆吧！ 第三季',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/34925289/'
  },
  {
    date: '2020-04-23', month: 4,
    type: 'movie',
    title: '想见你 / 想見你',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/30468961/'
  },
  {
    date: '2020-05-09', month: 5,
    type: 'movie',
    title: '猎狐',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26984534/'
  },
  {
    date: '2020-05-12', month: 5,
    type: 'tv',
    title: '青春有你 第二季',
    rating: 3,
    note: '二轮之后弃了……',
    douban_url: 'https://movie.douban.com/subject/33412881/'
  },
  {
    date: '2020-06-19', month: 6,
    type: 'movie',
    title: '阿拉丁 / Aladdin',
    rating: 4,
    note: '为了speechless俺加星了（捂脸',
    douban_url: 'https://movie.douban.com/subject/26891256/'
  },
  {
    date: '2020-06-20', month: 6,
    type: 'movie',
    title: '朱迪 / Judy',
    rating: 4,
    note: '前面一直看的兴趣缺缺，但最后的over the rainbow却哭到崩溃……好像一直会为这种隔着第四墙的牵连而动容，为了那近乎虚无的共鸣和并肩，赔进去一辈子也无妨。（人之将逝感拍得是很好的，想了想愿意为此加星）',
    douban_url: 'https://movie.douban.com/subject/27179039/'
  },
  {
    date: '2020-06-21', month: 6,
    type: 'movie',
    title: '死亡诗社 / Dead Poets Society',
    rating: 5,
    note: '可能大多数人印象最深刻的是captain，或是Keating的话。可我却一直忘不掉Tod在雪地里的那句"It&#39;s so beautiful"。 这么美的世界啊，拥有着那样的感知力，那样热爱着这一切的Neil，怎么会舍得离开。得知Neil离开，成员们冲向雪地的画面，景别角度和他们初次出逃那夜是那样相似，那时候他们不懂诗，现在他们成为诗。 "It&#39;s so beautiful."Tod说的时候是笑着的，说完却干呕了。',
    douban_url: 'https://movie.douban.com/subject/1291548/'
  },
  {
    date: '2020-06-24', month: 6,
    type: 'movie',
    title: '小妇人 / Little Women',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26348103/'
  },
  {
    date: '2020-06-27', month: 6,
    type: 'movie',
    title: '末代皇帝 / The Last Emperor',
    rating: 5,
    note: '"个人是历史的人质。"',
    douban_url: 'https://movie.douban.com/subject/1293172/'
  },
  {
    date: '2020-07-12', month: 7,
    type: 'movie',
    title: '一把青',
    rating: 5,
    note: '普通人的故事，从来不应该被定义为小格局。',
    douban_url: 'https://movie.douban.com/subject/26461145/'
  },
  {
    date: '2020-07-24', month: 7,
    type: 'movie',
    title: '隐秘的角落',
    rating: 5,
    note: '我们是怎样长大的啊。（结局两集相比之下略垮，但整体是完美的。）',
    douban_url: 'https://movie.douban.com/subject/33404425/'
  },
  {
    date: '2020-07-24', month: 7,
    type: 'movie',
    title: '乘风破浪的姐姐 第一季',
    rating: 3,
    note: '开始有多喜欢后来就有多失望。 噱头和热度的背后，节目本身质量堪忧，赛制堪称脑残，主题讨论也很苍白。（说实话很不喜欢看节目里撕逼，弹幕和微博里搓手期待的言论看多了有种生理性厌恶。这些场景对少数人来说是能够以小见大总结职场、生活规律，但总体来讲还是一群人在碎嘴八卦。聊聊八卦当然很正常，但是这个关切程度已经有些病态了。）（先替人杠了，"看节目只是图个乐子嘛，认真你就输了"。）',
    douban_url: 'https://movie.douban.com/subject/34894589/'
  },
  {
    date: '2020-07-29', month: 7,
    type: 'movie',
    title: '寻梦环游记 / Coco',
    rating: 5,
    note: '【影院复工后的第一部影片纪念】 爱将永恒，是因为我们。',
    douban_url: 'https://movie.douban.com/subject/20495023/'
  },
  {
    date: '2020-08-04', month: 8,
    type: 'movie',
    title: '妙先生',
    rating: 3,
    note: '【2019-12-31】 动作画面不如大护法，比较粗糙，暴力美学没有酣畅感直面感也就不再成为亮点，也就没有大护法带给我的分级之迫切性。 导演不同在题材处理上的感觉的确会不一样。大护法自成风格的冷硬到这里被冲淡不少，看起来是更有感情更有人味儿了，其实是更平庸了。连带着外露观念的台词表达，在大护法里可以算一种风格，在这里却和其他"正常"的内容挤在一起显得突兀。私人偏好，讲这种题材，越冷硬越疏离，效果越好。 在这个节点上看到这部电影的确是蛮戳人心的，撤档也不知是否因此。',
    douban_url: 'https://movie.douban.com/subject/34888476/'
  },
  {
    date: '2020-08-04', month: 8,
    type: 'movie',
    title: '乔乔的异想世界 / Jojo Rabbit',
    rating: 4,
    note: '或许真的是时代变得温柔和戏谑了，我也有些厌倦刻薄和高高在上的评价了，不太能对那些差评表示赞同。 尖锐从来不是我们面对世界的唯一可行方式，jojo妈妈放下小纸条时，是踩着轻快步伐的。 当然，在鞋带，蝴蝶和小胖的存在之下，电影名字和异想的主线实在是鸡肋莫名，可惜了。',
    douban_url: 'https://movie.douban.com/subject/30170546/'
  },
  {
    date: '2020-08-17', month: 8,
    type: 'movie',
    title: '哈利·波特与魔法石 / Harry Potter and the Sorcerer&#39;s Stone',
    rating: 4,
    note: '近期光遇玩家表示很淦，脑内串戏小剧场没停过😢',
    douban_url: 'https://movie.douban.com/subject/1295038/'
  },
  {
    date: '2020-10-02', month: 10,
    type: 'movie',
    title: '姜子牙',
    rating: 4,
    note: '3.5吧，试图在大鱼海棠和哪吒之间找平衡，然后奔向了妙先生…… 写意上比起哪吒有很大的进步，故事讲得也比较细腻，就是后半截稍显拉胯。骨铃线很喜欢，但是在妲己醒悟过来骨铃意义的地方，重现一遍台词真的很刻意，有种怼着观众脸说怕你看不懂的感觉……后半段的拉胯也就在于放大了这一点吧…… and，动画还是有偷懒的贴片啊，how come？？？',
    douban_url: 'https://movie.douban.com/subject/25907124/'
  },
  {
    date: '2020-10-06', month: 10,
    type: 'movie',
    title: '欲盖弥彰 / Shattered Glass',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1308589/'
  },
  {
    date: '2020-10-10', month: 10,
    type: 'movie',
    title: '一点就到家',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/35069506/'
  },
  {
    date: '2020-10-15', month: 10,
    type: 'movie',
    title: '烟火人间',
    rating: 3,
    note: '感觉做这个片子工作量好大啊…………我自己平时是不看短视频的，疫情期间有一个手机里的武汉新年的纪录片，给我留下了非常深刻的印象，从那个时候才开始思考和关注这类创作的可能性。 互联网万千个人影像的叙事是零散的，应该有人把它们拼合起来。 但拼合绝非简单的拼凑，谢谢导演做出的努力。',
    douban_url: 'https://movie.douban.com/subject/35212272/'
  },
  {
    date: '2020-10-15', month: 10,
    type: 'movie',
    title: '正常人 / Normal People',
    rating: 4,
    note: '大概是，我会认同和共感的青春片吧。像cmbyn那段，反而是因为太像，而不喜欢了。 "我们都想活的不一样，到最后才发现普通人的幸福，是多么难得可贵。如我们一生都在追寻，那飘渺的梦，遇见了同样的你，那种不言而喻的安全感，我始终相信我会平凡，但是要遇见你才能一起做个普通人。"',
    douban_url: 'https://movie.douban.com/subject/33477335/'
  },
  {
    date: '2020-10-26', month: 10,
    type: 'movie',
    title: '金刚川',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/35155748/'
  },
  {
    date: '2020-11-17', month: 11,
    type: 'movie',
    title: '风平浪静',
    rating: 4,
    note: '大家都说不好，但是真的很喜欢。 剧情当然是有bug的，但有些评论只是单纯的没看懂罢了，大可不必。甚至觉得，一场犯罪留下种种bug，剧情线却能够风平浪静往前推，本身就是那个看不见的权力网的结果。',
    douban_url: 'https://movie.douban.com/subject/27589933/'
  },
  {
    date: '2020-11-24', month: 11,
    type: 'movie',
    title: '气球',
    rating: 4,
    note: '看完之后字幕一拉，啊，果然是裴曼。 话题跑了，叙事很好、镜头很好，温柔和凌厉之间的位置也刚刚好。',
    douban_url: 'https://movie.douban.com/subject/30204413/'
  },
  {
    date: '2020-12-07', month: 12,
    type: 'movie',
    title: '她 / Her',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/6722879/'
  },
  {
    date: '2020-12-12', month: 12,
    type: 'movie',
    title: '一秒钟',
    rating: 4,
    note: '是很残酷的故事。 多少人就为了争取那一秒钟啊，可是删减修补成现在的成片，其实国师也失败了不是吗？ 只是在当下的心境下很难去指责和"点评"些什么。那份面对着胶片、放映机和银幕赤诚的爱意，是隔着灰暗而骨感的剧情也能完全触摸到的，那样热切地烫伤了每一个热爱光影的你我。',
    douban_url: 'https://movie.douban.com/subject/30257787/'
  },
  {
    date: '2020-12-13', month: 12,
    type: 'movie',
    title: '棒！少年',
    rating: 5,
    note: '有了自己拍摄的作品之后，进院线看的第一部纪录片。 有过实操的经历，才更加能够体会到这部纪录片有多珍贵、多优秀。',
    douban_url: 'https://movie.douban.com/subject/34930862/'
  },
  {
    date: '2020-12-19', month: 12,
    type: 'movie',
    title: '老师，你不知道吗？ / ねぇ先生、知らないの？',
    rating: 2,
    note: '疯狂嗷嗷akaso也没办法坚持看完全剧……',
    douban_url: 'https://movie.douban.com/subject/34896140/'
  },
  {
    date: '2020-12-25', month: 12,
    type: 'tv',
    title: '到了30岁还是处男，似乎会变成魔法师 番外篇 / 30歳まで童貞だと魔法使いになれるらしい 番外編',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/35288733/'
  },
  {
    date: '2020-12-25', month: 12,
    type: 'movie',
    title: '到了30岁还是处男，似乎会变成魔法师 / 30歳まで童貞だと魔法使いになれるらしい',
    rating: 4,
    note: '霓虹真的好会拍恋爱哦！',
    douban_url: 'https://movie.douban.com/subject/35201416/'
  },
  {
    date: '2020-12-25', month: 12,
    type: 'movie',
    title: '真爱至上 / Love Actually',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1292401/'
  },
  {
    date: '2020-12-25', month: 12,
    type: 'book',
    title: '动物凶猛',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/26288883/'
  },
  {
    date: '2021-01-01', month: 1,
    type: 'movie',
    title: '2020最美的夜bilibili晚会',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/35284485/'
  },
  {
    date: '2021-01-06', month: 1,
    type: 'movie',
    title: '我的团长我的团',
    rating: 5,
    note: '是脊梁。 【记30集群戏粗口】249，你是我爷爷。',
    douban_url: 'https://movie.douban.com/subject/2997325/'
  },
  {
    date: '2021-01-11', month: 1,
    type: 'movie',
    title: '恋途未卜 / 思い、思われ、ふり、ふられ',
    rating: 3,
    note: '一个mv的时间就能讲完的故事容量，我硬是为了好看的卡司看完了qaq',
    douban_url: 'https://movie.douban.com/subject/33371681/'
  },
  {
    date: '2021-01-19', month: 1,
    type: 'movie',
    title: '我在故宫六百年',
    rating: 5,
    note: '完成度很高，真诚得过分可爱。 在朋友圈里看梁导蹲角楼，在闲聊中听那根松木进京的故事，在107感受摄制组拍完故宫雪景回来的兴奋……很近又很远，我要加油。',
    douban_url: 'https://movie.douban.com/subject/35302088/'
  },
  {
    date: '2021-01-23', month: 1,
    type: 'movie',
    title: '海街日记 / 海街diary',
    rating: 4,
    note: '温柔，收敛了很多棱角的是枝裕和。',
    douban_url: 'https://movie.douban.com/subject/25895901/'
  },
  {
    date: '2021-03-12', month: 3,
    type: 'movie',
    title: '极地特快 / The Polar Express',
    rating: 0,
    douban_url: 'https://movie.douban.com/subject/1306785/'
  },
  {
    date: '2021-03-13', month: 3,
    type: 'movie',
    title: '人潮汹涌',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/34880302/'
  },
  {
    date: '2021-03-22', month: 3,
    type: 'book',
    title: '批评官员的尺度',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/6401128/'
  },
  {
    date: '2021-03-24', month: 3,
    type: 'movie',
    title: '波斯语课 / Persischstunden',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/30466931/'
  },
  {
    date: '2021-03-30', month: 3,
    type: 'movie',
    title: '山河令',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/34923491/'
  },
  {
    date: '2021-04-06', month: 4,
    type: 'movie',
    title: '我的姐姐',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/35158160/'
  },
  {
    date: '2021-04-09', month: 4,
    type: 'movie',
    title: '第十一回',
    rating: 5,
    note: '不是完美的好，但是喜欢，所以要给五星！很有灵气和野劲儿的学院派，惊艳镜头输出密集，剪辑节奏有些依赖配乐和声效，但还是特别招人喜欢。春夏什么时候能不做第一眼惊艳的演员呢？第一次在大银幕见她的观众，应该是赞叹的吧。',
    douban_url: 'https://movie.douban.com/subject/30279836/'
  },
  {
    date: '2021-04-16', month: 4,
    type: 'movie',
    title: '好久不见，武汉',
    rating: 4,
    note: '很可爱。避重就轻但可以理解。',
    douban_url: 'https://movie.douban.com/subject/35121307/'
  },
  {
    date: '2021-05-03', month: 5,
    type: 'movie',
    title: '创造营2021',
    rating: 3,
    note: '糊鹅救星：利路修和二创。',
    douban_url: 'https://movie.douban.com/subject/35165368/'
  },
  {
    date: '2021-05-03', month: 5,
    type: 'movie',
    title: '悬崖之上',
    rating: 4,
    note: '看得到水准但看不到突破，挺舒服的，无功无过吧。 院线如果一年四季画面配乐演员都是这个水准，我睡着都能笑醒。至于剧情，那不重要man。 （大概是因为带着《影》的预期走进的影院，对这个剧情居然提不起吐槽的欲望😨',
    douban_url: 'https://movie.douban.com/subject/32493124/'
  },
  {
    date: '2021-05-28', month: 5,
    type: 'movie',
    title: '克劳斯：圣诞节的秘密 / Klaus',
    rating: 4,
    note: '好牛的美术，好奇妙的解读。有生硬套路之处，但一定会被列入我的"以后要和妹妹一起看的电影"片单',
    douban_url: 'https://movie.douban.com/subject/26858510/'
  },
  {
    date: '2021-05-28', month: 5,
    type: 'movie',
    title: '我要我们在一起',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/25881778/'
  },
  {
    date: '2021-06-18', month: 6,
    type: 'movie',
    title: '北平无战事',
    rating: 5,
    note: '花长好，月长圆，人常在。',
    douban_url: 'https://movie.douban.com/subject/24695611/'
  },
  {
    date: '2021-06-18', month: 6,
    type: 'movie',
    title: '当男人恋爱时 / 當男人戀愛時',
    rating: 4,
    note: '决定配音的人是有什么大病…… 邱泽太好了。剧本不行但细节又是好的，故事是老的但人是可爱的。唉。',
    douban_url: 'https://movie.douban.com/subject/35198827/'
  },
  {
    date: '2021-06-19', month: 6,
    type: 'movie',
    title: '看上去很美',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1469441/'
  },
  {
    date: '2021-06-21', month: 6,
    type: 'movie',
    title: '困在时间里的父亲 / The Father',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/33432655/'
  },
  {
    date: '2021-06-24', month: 6,
    type: 'movie',
    title: '天堂电影院 / Nuovo Cinema Paradiso',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1291828/'
  },
  {
    date: '2021-06-25', month: 6,
    type: 'movie',
    title: '莫里斯 / Maurice',
    rating: 3,
    note: '被休狠狠地帅到了……',
    douban_url: 'https://movie.douban.com/subject/1293456/'
  },
  {
    date: '2021-07-02', month: 7,
    type: 'movie',
    title: '理智与情感 / Sense and Sensibility',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1299193/'
  },
  {
    date: '2021-07-03', month: 7,
    type: 'movie',
    title: '成为简·奥斯汀 / Becoming Jane',
    rating: 2,
    note: '怪我不该连着理智与情感一起看…导演之间是真的有壁哈😀',
    douban_url: 'https://movie.douban.com/subject/1920805/'
  },
  {
    date: '2021-07-04', month: 7,
    type: 'movie',
    title: '爱在黎明破晓前 / Before Sunrise',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1296339/'
  },
  {
    date: '2021-07-07', month: 7,
    type: 'movie',
    title: '新娘',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/30276452/'
  },
  {
    date: '2021-07-07', month: 7,
    type: 'movie',
    title: '手机里的武汉新年',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/35007221/'
  },
  {
    date: '2021-07-10', month: 7,
    type: 'movie',
    title: '大学',
    rating: 5,
    note: '人类应该会永远喜欢烟花。 仰望烟花和星星的人，应该是永远浪漫而可爱的。  18年，和电影里的小严一起入学。雨中的拉练，新生舞会，线上开学……看着曾经历过的滴滴点点被镜头记录下来，产生了一种奇妙而愧疚的情绪。 奇妙在以一种有趣的方式和自己对话，愧疚在大学这几年，总归有些对不起这片园子给予我的资源。就像再也无法回到上学期上得勉勉强强的"天问"课堂，与电影里课堂上都一般可爱的Shude Mao，一起去看宇宙之美。  片尾拉起字幕，惊喜地发现摄影助理一栏有自己小小的名字。校庆时搭上的末班车，最终并没被放进正片里的忙碌一天，却意外地实现了很久以前坐在影院里，自己许下的愿望——"我就觉得要是有一天，在某一个长长的片尾字幕里，有一个我，就足够圆满了"。  也许，也不是全然愧对这片热土的吧。',
    douban_url: 'https://movie.douban.com/subject/35470663/'
  },
  {
    date: '2021-07-10', month: 7,
    type: 'movie',
    title: '中国医生',
    rating: 1,
    note: '刘伟强这种人才应该趁早赶去拍纪录片，从我的电影世界滚出克🚬（没有说纪录片不好的意思',
    douban_url: 'https://movie.douban.com/subject/35087699/'
  },
  {
    date: '2021-07-10', month: 7,
    type: 'tv',
    title: '时光代理人 第一季',
    rating: 5,
    note: 'bug有，老套剧情有，但不妨碍好看🚬',
    douban_url: 'https://movie.douban.com/subject/35263440/'
  },
  {
    date: '2021-07-16', month: 7,
    type: 'movie',
    title: '环太平洋 / Pacific Rim',
    rating: 0,
    douban_url: 'https://movie.douban.com/subject/5323968/'
  },
  {
    date: '2021-07-17', month: 7,
    type: 'movie',
    title: '燃野少年的天空',
    rating: 3,
    note: '只有一半拍得好，所以也只有一半的星。歌舞我太吃了，但剧情也太拉了。',
    douban_url: 'https://movie.douban.com/subject/35256235/'
  },
  {
    date: '2021-07-26', month: 7,
    type: 'movie',
    title: '白蛇2：青蛇劫起',
    rating: 3,
    note: '啊？不是逆反不是故意挑刺啊，剧情就是拉胯拉胯拉胯拉胯啊。啥都想讲结果啥都没讲，立个人设特效镜头一通牛逼完事儿，这边建议是去做游戏呢🚬',
    douban_url: 'https://movie.douban.com/subject/30435124/'
  },
  {
    date: '2021-07-26', month: 7,
    type: 'movie',
    title: '围城随笔',
    rating: 5,
    note: '原来是星球研究所的老师，兜兜转转又回来了。从泥土和山川里生长出来的文字，从天际线飞过的镜头，很喜欢，重庆话很亲切。',
    douban_url: 'https://movie.douban.com/subject/34937764/'
  },
  {
    date: '2021-07-31', month: 7,
    type: 'movie',
    title: '盛夏未来',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/35158124/'
  },
  {
    date: '2021-08-04', month: 8,
    type: 'movie',
    title: '白蛇：缘起',
    rating: 4,
    note: '比第二部好（苦笑）',
    douban_url: 'https://movie.douban.com/subject/30331149/'
  },
  {
    date: '2021-08-09', month: 8,
    type: 'movie',
    title: '海蒂和爷爷 / Heidi',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/25958717/'
  },
  {
    date: '2021-08-13', month: 8,
    type: 'movie',
    title: '太阳照常升起',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1766086/'
  },
  {
    date: '2021-08-22', month: 8,
    type: 'movie',
    title: '怒火·重案 / 怒火',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/30174085/'
  },
  {
    date: '2021-09-10', month: 9,
    type: 'movie',
    title: '浮生一日 / Life in a Day',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/5387041/'
  },
  {
    date: '2021-09-11', month: 9,
    type: 'movie',
    title: '失控玩家 / Free Guy',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/30337388/'
  },
  {
    date: '2021-09-19', month: 9,
    type: 'movie',
    title: '阮玲玉',
    rating: 5,
    note: '出入戏间穿梭，游刃有余。拍电影确实是把自己剖开给观众看的行为，创作者的目光，如同影子，是藏不住的。',
    context: '第11届北影节',
    douban_url: 'https://movie.douban.com/subject/1293414/'
  },
  {
    date: '2021-09-20', month: 9,
    type: 'movie',
    title: '红高粱',
    rating: 5,
    note: '"向世界讲述中国故事。"他确实做到了啊。',
    context: '第11届北影节',
    douban_url: 'https://movie.douban.com/subject/1306505/'
  },
  {
    date: '2021-09-21', month: 9,
    type: 'movie',
    title: '社交网络 / The Social Network',
    rating: 4,
    context: '第11届北影节',
    douban_url: 'https://movie.douban.com/subject/3205624/'
  },
  {
    date: '2021-09-25', month: 9,
    type: 'movie',
    title: '雇员和雇主 / El empleado y el patron',
    rating: 3,
    note: '矛盾的温吞处理，人物的状态，有打到我的点上，甚至有被映射到。面目模糊，在电影里，当然是被允许的。btw纳老师确实有钙化奇效…',
    context: '第11届北影节',
    douban_url: 'https://movie.douban.com/subject/35173681/'
  },
  {
    date: '2021-09-27', month: 9,
    type: 'movie',
    title: '致埃文·汉森 / Dear Evan Hansen',
    rating: 4,
    note: '这部剧带给我的意义，已经超过其本身了。',
    douban_url: 'https://movie.douban.com/subject/30391140/'
  },
  {
    date: '2021-09-27', month: 9,
    type: 'movie',
    title: '燃烧女子的肖像 / Portrait de la jeune fille en feu',
    rating: 4,
    context: '第11届北影节',
    douban_url: 'https://movie.douban.com/subject/30257175/'
  },
  {
    date: '2021-09-29', month: 9,
    type: 'book',
    title: '读李安',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/26907268/'
  },
  {
    date: '2021-09-30', month: 9,
    type: 'movie',
    title: 'Dreamcatcher Mind / 드림캐쳐 마인드',
    rating: 0,
    douban_url: 'https://movie.douban.com/subject/35474423/'
  },
  {
    date: '2021-10-08', month: 10,
    type: 'movie',
    title: '我和我的父辈',
    rating: 4,
    note: '章子怡和徐峥的 喜欢。',
    douban_url: 'https://movie.douban.com/subject/35294995/'
  },
  {
    date: '2021-10-10', month: 10,
    type: 'movie',
    title: '城门几丈高',
    rating: 5,
    note: '中英文名的对照，形成了贯穿全片的隐喻。城门起几丈？the city wall is falling down. 第二集，航拍镜头自古东水门拉远，旧址上面的东水门大桥全貌慢慢显现。在广阔的新面貌中，旧门隐匿不见。城门拆，城门开。送故去，看新来。  第四集，为御轰炸修火巷，混乱中求生的路径，成今日之路基。烈火重生，山城涅槃。',
    douban_url: 'https://movie.douban.com/subject/34813597/'
  },
  {
    date: '2021-10-17', month: 10,
    type: 'movie',
    title: '兰心大剧院',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26954859/'
  },
  {
    date: '2021-10-22', month: 10,
    type: 'book',
    title: 'A致X',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/27116030/'
  },
  {
    date: '2021-10-24', month: 10,
    type: 'movie',
    title: '沙丘 / Dune',
    rating: 5,
    note: '好喜欢好喜欢，剧情不咋地，但视听和体验都是极致的好。能让你像第一次看电影的，一定是好电影。 某种意义上实现了北影节的遗憾——在电影院里看《2001太空漫游》。 二刷补充：珍爱生命，远离3D🐶',
    douban_url: 'https://movie.douban.com/subject/3001114/'
  },
  {
    date: '2021-11-03', month: 11,
    type: 'movie',
    title: '一直游到海水变蓝',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/33440244/'
  },
  {
    date: '2021-11-06', month: 11,
    type: 'movie',
    title: '007：无暇赴死 / No Time to Die',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/20276229/'
  },
  {
    date: '2021-11-06', month: 11,
    type: 'movie',
    title: '007：幽灵党 / Spectre',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/11620560/'
  },
  {
    date: '2021-11-07', month: 11,
    type: 'movie',
    title: '时空恋旅人 / About Time',
    rating: 4,
    note: '"人生若无悔，该有多遗憾。"',
    douban_url: 'https://movie.douban.com/subject/10577869/'
  },
  {
    date: '2021-11-22', month: 11,
    type: 'movie',
    title: '日常对话 / 日常對話',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26884826/'
  },
  {
    date: '2021-11-24', month: 11,
    type: 'tv',
    title: '继承之战 第一季 / Succession Season 1',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/26813224/'
  },
  {
    date: '2021-12-01', month: 12,
    type: 'movie',
    title: '彩虹计划 / Nizi Project',
    rating: 4,
    note: '终于有了一点点纯粹在看选秀的实感。 大猩猩和整个节目组确实是在选真正有天赋和star性的人。只有真正懂得自己的魅力所在、能够自如地表达自我、传递情感的才是大猩猩眼中的璞玉。 "实力"拼不过性格、"灵气"甚至是脸蛋，但又不招观众讨厌，来源于公司足以自信的培养体系、造星能力。不禁感慨有成熟的造星流水线做后盾就是好啊。（此处拉踩内🐟） 当然也有剧本也有偏向，但总体是温和有力的，看完会理解和爱上妹妹们。',
    douban_url: 'https://movie.douban.com/subject/34982700/'
  },
  {
    date: '2021-12-05', month: 12,
    type: 'movie',
    title: '彩虹计划 第二季 / Nizi Project Part 2',
    rating: 4,
    note: '赛制和剪辑还是蛮无聊的，但是其中每个人的状态都很真实。有人在暴风成长，有人在捍卫巅峰，有人在冲破瓶颈，有人在瓶颈边缘，有人在拼尽一切，有人在失去斗志。很好很好的少女成长观察簿。 这才是真励志，实打实告诉你没有好心态和全力付出，天赋也会被磨灭，而不是只会输出加油的口号。 能够看到第一集就相中的rio打磨出光彩，真的是件幸福的事。',
    douban_url: 'https://movie.douban.com/subject/35064554/'
  },
  {
    date: '2021-12-18', month: 12,
    type: 'movie',
    title: '倒数时刻 / Tick, Tick…Boom!',
    rating: 3,
    note: 'DEH剧作+HAM导演讲Rent剧作的故事，阵容就够我升天了😭 比起主角本人的创作，歌确实不惊艳。',
    douban_url: 'https://movie.douban.com/subject/30279170/'
  },
  {
    date: '2022-01-03', month: 1,
    type: 'movie',
    title: '银翼杀手2049 / Blade Runner 2049',
    rating: 5,
    note: '从每个角色到每个镜头，冰冷世界里的呼吸感。',
    douban_url: 'https://movie.douban.com/subject/10512661/'
  },
  {
    date: '2022-01-04', month: 1,
    type: 'movie',
    title: '雄狮少年',
    rating: 5,
    note: '主线剧情无疑是拉的，但是讲得很好，落点并没有进到俗套里，后半部分可谓酣畅淋漓。 有太多好细节和好副线，误把广东作山东的扫地翁、晨光中上工的富士康员工、比燃野可爱了一万倍的咸鱼老板……主创着实是把一份老套平庸的剧本嚼透玩活了，诠释得很精彩，让人不忍苛责。 场景做得漂亮通透，光线做得非常非常细，运镜分镜也格外的灵，能看到审美和功力。第一反应就是"看来那些年我在b站看过的C4D大佬们都毕业工作了"，第二反应是，有建模真是人类的福气，我们拥有了无穷尽的造梦世界。 （不过人物建模的日常动作还是有生硬感，场景牛坏了，结果出来人物像摆的手办……譬如开头骑自行车，我们的男主角从脖子到背脊梁骨居然铁板一块一动不动，导致我一度觉得剧组非常缺钱，结果又被舞狮部分打脸了……） 但，还是要给五星鼓励的嘛！它真的很好！',
    douban_url: 'https://movie.douban.com/subject/35144311/'
  },
  {
    date: '2022-01-06', month: 1,
    type: 'movie',
    title: '爱情神话',
    rating: 5,
    note: '嘿，真的难得有一次是电影在玩弄生活。',
    douban_url: 'https://movie.douban.com/subject/35376457/'
  },
  {
    date: '2022-01-07', month: 1,
    type: 'movie',
    title: '再次出发之纽约遇见你 / Begin Again',
    rating: 4,
    note: '作为一个音乐宣传片很完美。（一些校歌赛开场dna动了…',
    douban_url: 'https://movie.douban.com/subject/6874403/'
  },
  {
    date: '2022-01-13', month: 1,
    type: 'movie',
    title: '不要抬头 / Don&#39;t Look Up',
    rating: 4,
    note: '太当下了。救命。',
    douban_url: 'https://movie.douban.com/subject/34884712/'
  },
  {
    date: '2022-01-16', month: 1,
    type: 'movie',
    title: '制造伍德斯托克音乐节 / Taking Woodstock',
    rating: 3,
    note: 'It takes you a long way to the climax. But you&#39;ll pay for it. 用光调色好舒服啊！从车里出来的那个镜头，够了。',
    douban_url: 'https://movie.douban.com/subject/3562827/'
  },
  {
    date: '2022-02-03', month: 2,
    type: 'tv',
    title: '继承之战 第二季 / Succession Season 2',
    rating: 5,
    note: '每看一集都是在进行信仰充值的制作水平……',
    douban_url: 'https://movie.douban.com/subject/30246685/'
  },
  {
    date: '2022-02-05', month: 2,
    type: 'movie',
    title: '狙击手',
    rating: 4,
    note: '叙事和配乐可以再克制，编剧思路还是局限了（群像思路可以再凌厉一点，还是没逃开拖泥带水的套路煽情）。以及，特效的钱完全可以省掉……',
    douban_url: 'https://movie.douban.com/subject/35215390/'
  },
  {
    date: '2022-02-26', month: 2,
    type: 'movie',
    title: '花束般的恋爱 / 花束みたいな恋をした',
    rating: 5,
    note: '意识到自己也在对生活失去热爱和感知力，所以无可苛责小麦。 能把恋爱也拍出割韭菜的原理，🚬🚬🚬。 以及，终于明白自己为什么一直不喜欢lalaland的结局。',
    douban_url: 'https://movie.douban.com/subject/34874432/'
  },
  {
    date: '2022-02-27', month: 2,
    type: 'tv',
    title: '继承之战 第三季 / Succession Season 3',
    rating: 4,
    note: '更喜欢s2，但依然爽到！',
    douban_url: 'https://movie.douban.com/subject/34960159/'
  },
  {
    date: '2022-03-02', month: 3,
    type: 'movie',
    title: '黑色党徒 / BlacKkKlansman',
    rating: 4,
    note: '理解《一个国家的诞生》',
    douban_url: 'https://movie.douban.com/subject/27133913/'
  },
  {
    date: '2022-03-07', month: 3,
    type: 'movie',
    title: '偷自行车的人 / Ladri di biciclette',
    rating: 5,
    note: '主人公的社会地位很微妙。没有穷到一无所有的程度，离更安稳富余的生活也似乎只有伸手够一够的距离。在社会下行的梅雨里，这家人甚至算得上幸运。 但是，上升的阶梯人潮拥挤，平行的路面处处陷阱。就像打倒安东只需要一只丢失的自行车，击溃今天的中产也只需要一场大病而已。',
    douban_url: 'https://movie.douban.com/subject/1295873/'
  },
  {
    date: '2022-03-07', month: 3,
    type: 'tv',
    title: '但是还有书籍 第二季',
    rating: 5,
    note: '第二季不拘泥于纸页之间，而是真正进入了书中世界。 正处毕设创作期间，在形式和内核上都受益良多。 最感恩的是它带给阅者专注自己手中事的力量。节目时长有限，而流动的时间无限，人生这正是在这其中慢慢发酵，慢慢找到意义。',
    douban_url: 'https://movie.douban.com/subject/35295845/'
  },
  {
    date: '2022-03-07', month: 3,
    type: 'movie',
    title: '大地之歌 / পথের পাঁচালী',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1306019/'
  },
  {
    date: '2022-03-07', month: 3,
    type: 'book',
    title: '从经典到前沿',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/35171178/'
  },
  {
    date: '2022-03-27', month: 3,
    type: 'movie',
    title: '花木兰 / Mulan',
    rating: 4,
    note: '把一堆迪士尼并起来看，就对花木兰里对中国文化的误读也好、浅尝辄止也罢有所释然。全世界寻觅顶级的故事食材，但烹饪方法一定是迪士尼祖传秘方，。 我们看他国公主之不违和，也只是因为不身在其中罢了。',
    douban_url: 'https://movie.douban.com/subject/1294833/'
  },
  {
    date: '2022-03-27', month: 3,
    type: 'movie',
    title: '魔发奇缘 / Tangled',
    rating: 4,
    note: '简单但沉浸的快乐！',
    douban_url: 'https://movie.douban.com/subject/1863766/'
  },
  {
    date: '2022-03-28', month: 3,
    type: 'movie',
    title: '冰雪奇缘2 / Frozen II',
    rating: 3,
    note: '表现欲超过表达欲了……',
    douban_url: 'https://movie.douban.com/subject/25887288/'
  },
  {
    date: '2022-03-28', month: 3,
    type: 'movie',
    title: '海洋奇缘 / Moana',
    rating: 3,
    note: '试图反套路，但都是小打小闹的玩笑，并不是本质上的颠覆，由是感受到一种坐吃山空的敷衍。 纹身可爱，制作精致程度也基本是极致了。',
    douban_url: 'https://movie.douban.com/subject/25793398/'
  },
  {
    date: '2022-04-10', month: 4,
    type: 'movie',
    title: '魔法满屋 / Encanto',
    rating: 3,
    note: '歌一般，叙事能力在迪士尼正常水准以下。',
    douban_url: 'https://movie.douban.com/subject/35134724/'
  },
  {
    date: '2022-04-19', month: 4,
    type: 'movie',
    title: '降临 / Arrival',
    rating: 4,
    note: '无限制想象和个体叙事的空间引人入胜，落到地面的宏观现实世界一地鸡毛。 在说这个电影的成功与失败，也在说这个世界的诱人与阴暗。',
    douban_url: 'https://movie.douban.com/subject/21324900/'
  },
  {
    date: '2022-04-21', month: 4,
    type: 'movie',
    title: '小姐 / 아가씨',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/25977027/'
  },
  {
    date: '2022-04-23', month: 4,
    type: 'movie',
    title: '寄生虫 / 기생충',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/27010768/'
  },
  {
    date: '2022-04-24', month: 4,
    type: 'movie',
    title: '阿丽塔：战斗天使 / Alita: Battle Angel',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1652592/'
  },
  {
    date: '2022-04-25', month: 4,
    type: 'movie',
    title: '奇幻核子战 / Fail-Safe',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1293514/'
  },
  {
    date: '2022-04-25', month: 4,
    type: 'movie',
    title: '冬日之光 / Nattvardsgästerna',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1296792/'
  },
  {
    date: '2022-04-25', month: 4,
    type: 'movie',
    title: '奇爱博士 / Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1322848/'
  },
  {
    date: '2022-05-01', month: 5,
    type: 'movie',
    title: '玩具总动员 / Toy Story',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1291575/'
  },
  {
    date: '2022-05-01', month: 5,
    type: 'movie',
    title: '头号玩家 / Ready Player One',
    rating: 3,
    note: '现实世界的剧情线真的是幼稚老套得脚趾抠地……无法忽略到影响电影观感的程度……影迷游戏迷等等各种亚文化的头号玩家应该会看得非常开心，如果真有这个游戏，必然会是一场版权狂欢……话说这么多，想玩！',
    douban_url: 'https://movie.douban.com/subject/4920389/'
  },
  {
    date: '2022-05-06', month: 5,
    type: 'movie',
    title: '滚滚红尘 / 滾滾紅塵',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1296334/'
  },
  {
    date: '2022-07-08', month: 7,
    type: 'tv',
    title: '动物狂想曲 第一季 / BEASTARS',
    rating: 4,
    note: '喜欢一些天马行空的讲故事方式！',
    douban_url: 'https://movie.douban.com/subject/30458442/'
  },
  {
    date: '2022-07-18', month: 7,
    type: 'tv',
    title: '动物狂想曲 第二季 / BEASTARS 2nd Season',
    rating: 4,
    note: '就要"排列组合"就要"排列组合"',
    douban_url: 'https://movie.douban.com/subject/34937800/'
  },
  {
    date: '2022-07-19', month: 7,
    type: 'book',
    title: '工作、消费主义和新穷人',
    rating: 4,
    douban_url: 'https://book.douban.com/subject/35593780/'
  },
  {
    date: '2022-07-26', month: 7,
    type: 'movie',
    title: '隐入尘烟',
    rating: 5,
    note: '加点感情分和对比分（苦笑）虽然以我的年龄阅历和水平来说都不合适，但还是想说，导演长大了啊！这些诗性、灵性甚至神性的场景和语言都是从土里生长出来的，所以要回到土里才自如而不突兀。探讨问题时的切入点和"说服方式"更人文和电影了，而少了强硬和刺头，象征之前，故事和细节才是我们建立共感，理解彼此的"捷径"啊。',
    douban_url: 'https://movie.douban.com/subject/35131346/'
  },
  {
    date: '2022-08-13', month: 8,
    type: 'tv',
    title: '克拉克森的农场 第一季 / Clarkson&#39;s Farm Season 1',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/34839005/'
  },
  {
    date: '2022-08-16', month: 8,
    type: 'book',
    title: '数字劳动',
    rating: 3,
    douban_url: 'https://book.douban.com/subject/35942245/'
  },
  {
    date: '2022-08-20', month: 8,
    type: 'movie',
    title: '新神榜：杨戬',
    rating: 4,
    note: '杨戬大帅哥🥹🥹🥹建议编剧给整个制作名单磕头……',
    douban_url: 'https://movie.douban.com/subject/35360684/'
  },
  {
    date: '2022-08-21', month: 8,
    type: 'movie',
    title: '排球少年 / ハイキュー!!',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/25732103/'
  },
  {
    date: '2022-09-03', month: 9,
    type: 'tv',
    title: '排球少年 第三季 / ハイキュー!! 烏野高校 VS 白鳥沢学園高校',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/26752075/'
  },
  {
    date: '2022-09-03', month: 9,
    type: 'tv',
    title: '排球少年 第二季 / ハイキュー!! セカンドシーズン',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/26285156/'
  },
  {
    date: '2022-09-06', month: 9,
    type: 'tv',
    title: '排球少年 第四季 Part.2 / ハイキュー!! TO THE TOP 第2クール',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/35131275/'
  },
  {
    date: '2022-09-06', month: 9,
    type: 'tv',
    title: '排球少年 第四季 / ハイキュー!! TO THE TOP',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/30411330/'
  },
  {
    date: '2022-09-09', month: 9,
    type: 'movie',
    title: '小街',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1483878/'
  },
  {
    date: '2022-09-13', month: 9,
    type: 'movie',
    title: '排球少年：列夫参上 / ハイキュー!! リエーフ見参!',
    rating: 0,
    douban_url: 'https://movie.douban.com/subject/26310757/'
  },
  {
    date: '2022-09-21', month: 9,
    type: 'movie',
    title: '排球少年：VS"不及格" / ハイキュー!! VS"赤点"',
    rating: 0,
    douban_url: 'https://movie.douban.com/subject/26759792/'
  },
  {
    date: '2022-09-22', month: 9,
    type: 'movie',
    title: '排球少年：陆 VS 空 / ハイキュー!! 陸 VS 空',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/34800558/'
  },
  {
    date: '2022-09-22', month: 9,
    type: 'movie',
    title: '排球少年：特集！赌在春高上的青春 / ハイキュー!! 特集! 春高バレーに賭けた青春',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/27157676/'
  },
  {
    date: '2022-09-26', month: 9,
    type: 'movie',
    title: '大审判 / The Verdict',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1300725/'
  },
  {
    date: '2022-09-27', month: 9,
    type: 'movie',
    title: '卡萨布兰卡 / Casablanca',
    rating: 4,
    note: 'We\'ll always have Paris.',
    douban_url: 'https://movie.douban.com/subject/1296753/'
  },
  {
    date: '2022-09-30', month: 9,
    type: 'movie',
    title: '西北偏北 / North by Northwest',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1295872/'
  },
  {
    date: '2022-09-30', month: 9,
    type: 'movie',
    title: '芙蓉镇',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1297880/'
  },
  {
    date: '2022-10-06', month: 10,
    type: 'movie',
    title: '青春',
    rating: 0,
    douban_url: 'https://movie.douban.com/subject/1305361/'
  },
  {
    date: '2022-10-08', month: 10,
    type: 'movie',
    title: '夏日重现 / サマータイムレンダ',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/35351365/'
  },
  {
    date: '2022-10-08', month: 10,
    type: 'movie',
    title: '新龙门客栈 / 新龍門客棧',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1292287/'
  },
  {
    date: '2022-10-10', month: 10,
    type: 'tv',
    title: '东京爱情故事特别篇 / 東京ラブストーリー 継続します！愛情のストーリの追憶',
    rating: 5,
    note: '被莉香美晕……',
    douban_url: 'https://movie.douban.com/subject/6518713/'
  },
  {
    date: '2022-10-10', month: 10,
    type: 'movie',
    title: '东京爱情故事 / 東京ラブストーリー',
    rating: 5,
    note: '"你喜欢上一个人的那一刻，是永远都不会消失的"',
    douban_url: 'https://movie.douban.com/subject/1438760/'
  },
  {
    date: '2022-10-11', month: 10,
    type: 'movie',
    title: '惊魂记 / Psycho',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1293181/'
  },
  {
    date: '2022-10-11', month: 10,
    type: 'movie',
    title: '红色娘子军',
    rating: 0,
    douban_url: 'https://movie.douban.com/subject/1424630/'
  },
  {
    date: '2022-10-12', month: 10,
    type: 'movie',
    title: '宾虚 / Ben-Hur',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1293150/'
  },
  {
    date: '2022-10-13', month: 10,
    type: 'movie',
    title: '野火春风斗古城',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1483955/'
  },
  {
    date: '2022-10-13', month: 10,
    type: 'movie',
    title: '早春二月',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1401269/'
  },
  {
    date: '2022-10-18', month: 10,
    type: 'movie',
    title: '觅非播舍之家 / Home of Mephibosheth',
    rating: 0,
    douban_url: 'https://movie.douban.com/subject/34970114/'
  },
  {
    date: '2022-10-18', month: 10,
    type: 'movie',
    title: '周末 / Week End',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1296338/'
  },
  {
    date: '2022-10-19', month: 10,
    type: 'movie',
    title: '红辣椒 / パプリカ',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1865703/'
  },
  {
    date: '2022-10-31', month: 10,
    type: 'movie',
    title: '迷魂记 / Vertigo',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1297294/'
  },
  {
    date: '2022-10-31', month: 10,
    type: 'movie',
    title: '唐人街 / Chinatown',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1293889/'
  },
  {
    date: '2022-11-07', month: 11,
    type: 'movie',
    title: '夜行人',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/2003148/'
  },
  {
    date: '2022-11-07', month: 11,
    type: 'movie',
    title: '沉默与黑暗的世界 / Land des Schweigens und der Dunkelheit',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1401617/'
  },
  {
    date: '2022-11-07', month: 11,
    type: 'movie',
    title: '三峡好人',
    rating: 0,
    douban_url: 'https://movie.douban.com/subject/1872133/'
  },
  {
    date: '2022-11-07', month: 11,
    type: 'movie',
    title: '密阳 / 밀양',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1853770/'
  },
  {
    date: '2022-11-10', month: 11,
    type: 'movie',
    title: '马耳他之鹰 / The Maltese Falcon',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1297874/'
  },
  {
    date: '2022-11-13', month: 11,
    type: 'movie',
    title: '阿黛尔的生活 / La Vie d&#39;Adèle',
    rating: 5,
    note: '像是一种 ……看到未来自己的感觉……把一些自己不愿意面对的事情拉出来了……但还是很想，至少能拥有一段回忆，所以还在努力……真的是悲观的乐观主义者。',
    douban_url: 'https://movie.douban.com/subject/10535568/'
  },
  {
    date: '2022-11-16', month: 11,
    type: 'movie',
    title: '华尔街 / Wall Street',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1292531/'
  },
  {
    date: '2022-11-20', month: 11,
    type: 'tv',
    title: '约翰·威尔逊的十万个怎么做 第一季 / How to with John Wilson Season 1',
    rating: 5,
    note: '最后一集有点封神了……',
    douban_url: 'https://movie.douban.com/subject/35205588/'
  },
  {
    date: '2022-11-21', month: 11,
    type: 'movie',
    title: '樱桃魔法 THE MOVIE～如果30岁还是处男，似乎就会成为魔法师〜 / チェリまほ THE MOVIE〜30歳まで童貞だと魔法使いになれるらしい〜',
    rating: 2,
    note: '你们立本直男……营业别太努力了……没有感情可以投入但是所有粉丝想要的剧情都可以演一遍是吧……有被认真地敷衍到（粉丝评论复制粘贴合集原来也可以叫剧本啊？',
    douban_url: 'https://movie.douban.com/subject/35678825/'
  },
  {
    date: '2022-11-25', month: 11,
    type: 'movie',
    title: '莫扎特传 / Amadeus',
    rating: 4,
    note: '是谁从头到尾脑内放完了法扎……',
    douban_url: 'https://movie.douban.com/subject/1293399/'
  },
  {
    date: '2023-01-01', month: 1,
    type: 'tv',
    title: '约翰·威尔逊的十万个怎么做 第二季 / How to with John Wilson Season 2',
    rating: 4,
    note: '第一季更精彩，但也很不错。喜欢带着相机出门和人聊天。',
    douban_url: 'https://movie.douban.com/subject/35401261/'
  },
  {
    date: '2023-01-03', month: 1,
    type: 'movie',
    title: '跳出我天地 / Billy Elliot',
    rating: 4,
    note: '先看的音乐剧，所以看电影到地方没有音乐起来总是坐立难安，几次打开都没能坚持看完哈哈哈哈😂耐着性子看完倒是发现导演的镜头语言功底很扎实，经典台词不管是唱出来还是说出来都一样动人。',
    douban_url: 'https://movie.douban.com/subject/1301169/'
  },
  {
    date: '2023-01-04', month: 1,
    type: 'movie',
    title: '华尔街之狼 / The Wolf of Wall Street',
    rating: 4,
    note: '玩起来了，蒽，好玩。',
    douban_url: 'https://movie.douban.com/subject/2997076/'
  },
  {
    date: '2023-01-08', month: 1,
    type: 'movie',
    title: '孤独摇滚！ / ぼっち・ざ・ろっく！',
    rating: 4,
    note: '没有很孤独也没有很摇滚……社恐很有共鸣，但过犹不及……',
    douban_url: 'https://movie.douban.com/subject/35366293/'
  },
  {
    date: '2023-01-08', month: 1,
    type: 'movie',
    title: '罗马的房子 / Habitación en Roma',
    rating: 3,
    note: '蒽……ost和运镜做作得很突出',
    douban_url: 'https://movie.douban.com/subject/3431336/'
  },
  {
    date: '2023-03-09', month: 3,
    type: 'movie',
    title: '女导演',
    rating: 3,
    note: '有趣，但故事挺小气的，像主角的人生一样。',
    douban_url: 'https://movie.douban.com/subject/11610564/'
  },
  {
    date: '2023-03-11', month: 3,
    type: 'movie',
    title: '狂飙',
    rating: 4,
    note: '后面几集啥啊！！！！！！',
    douban_url: 'https://movie.douban.com/subject/35465232/'
  },
  {
    date: '2023-03-19', month: 3,
    type: 'movie',
    title: '铃芽之旅 / すずめの戸締まり',
    rating: 4,
    note: '想着是公路片可以勉强和剧情和解……因为个人经历对铃芽和姨妈的剧情线有共鸣，门的意象扩展到千家万户的维度真的很动人。观影体验非常好，在创伤背景下的故事却不会让人在观看中觉得过于沉重和乏味，椅子立大功hhhhhh（导演抱着椅子出现太可爱噜！',
    douban_url: 'https://movie.douban.com/subject/35371261/'
  },
  {
    date: '2023-03-19', month: 3,
    type: 'movie',
    title: '影武者',
    rating: 4,
    note: '以影的视角讲本人，很妙的视角。叙事对我来说有点过分拖沓……',
    douban_url: 'https://movie.douban.com/subject/1303067/'
  },
  {
    date: '2023-03-30', month: 3,
    type: 'movie',
    title: '亲密 / Close',
    rating: 5,
    note: '好喜欢……亲密的遗失，社会的规训，用最平静和细节的叙事来投以注视。没有被概念和说教狰狞地覆盖，而是回归视听和故事的本质魅力，好干净好本真。',
    douban_url: 'https://movie.douban.com/subject/35205617/'
  },
  {
    date: '2023-03-30', month: 3,
    type: 'movie',
    title: '山之音 / 山の音',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1404845/'
  },
  {
    date: '2023-04-01', month: 4,
    type: 'movie',
    title: '宇宙探索编辑部',
    rating: 5,
    note: '好好玩好新鲜好喜欢！老唐骑上驴的时候几乎觉得结束在这里也很妙。平凡的人穿越了无数时空找一个解答，世界回以一个啼笑皆非又意外合理的答案。被上帝开玩笑才是人生常态，即使是追着胡萝卜埋头跑到nowhere，被世人嘲笑疯傻，抵达时不由自主的大笑和满足千金不换。',
    douban_url: 'https://movie.douban.com/subject/34941536/'
  },
  {
    date: '2023-04-19', month: 4,
    type: 'movie',
    title: '早安 / お早よう',
    rating: 4,
    note: '可爱，对生活的解读方式很有启发性。',
    douban_url: 'https://movie.douban.com/subject/1298063/'
  },
  {
    date: '2023-04-23', month: 4,
    type: 'movie',
    title: '灌篮高手 / The First Slam Dunk',
    rating: 4,
    note: '分镜剪辑很好……对手塑造说实话有点单薄（相比一些同类型运动番（但考虑到电影时长可以理解（求生欲很强就不说联想到的了（穿自己的14号球裤去看电影真的很爽！！！',
    douban_url: 'https://movie.douban.com/subject/35315950/'
  },
  {
    date: '2023-05-07', month: 5,
    type: 'movie',
    title: '独自在夜晚的海边 / 밤의 해변에서 혼자',
    rating: 4,
    note: '一声叹息。有时候这类表达看多了，会觉得很多孤傲自持是没必要的。能够懂得的人并不是少数，有爱的资格的人也很多。',
    douban_url: 'https://movie.douban.com/subject/26718282/'
  },
  {
    date: '2023-06-07', month: 6,
    type: 'movie',
    title: '悲情城市',
    rating: 4,
    note: '补标。表演很好，喜欢的镜头距离。',
    douban_url: 'https://movie.douban.com/subject/1294194/'
  },
  {
    date: '2023-06-16', month: 6,
    type: 'movie',
    title: '起舞的皮娜 / Dancing Pina',
    rating: 4,
    note: '海边的春之祭。',
    context: '第25届上影节',
    douban_url: 'https://movie.douban.com/subject/35919548/'
  },
  {
    date: '2023-06-16', month: 6,
    type: 'movie',
    title: '蜘蛛侠：纵横宇宙 / Spider-Man: Across the Spider-Verse',
    rating: 5,
    note: '这是我花几十百来块钱配看的吗？（剧情不大看得懂 但不重要',
    douban_url: 'https://movie.douban.com/subject/30391186/'
  },
  {
    date: '2023-06-18', month: 6,
    type: 'movie',
    title: '超市之女 / スーパーの女',
    rating: 4,
    note: '理想化，简单化，但实在可爱。',
    context: '第25届上影节',
    douban_url: 'https://movie.douban.com/subject/1468491/'
  },
  {
    date: '2023-06-18', month: 6,
    type: 'movie',
    title: '猫王 / Elvis',
    rating: 3,
    note: '以为杜比厅看音乐片会爽死，但好像不如预期……',
    context: '第25届上影节',
    douban_url: 'https://movie.douban.com/subject/26305582/'
  },
  {
    date: '2023-06-20', month: 6,
    type: 'movie',
    title: '坂本龙一：终曲 / Ryuichi Sakamoto: CODA',
    rating: 0,
    context: '第25届上影节',
    douban_url: 'https://movie.douban.com/subject/26984189/'
  },
  {
    date: '2023-07-03', month: 7,
    type: 'movie',
    title: '街娃儿',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/35017419/'
  },
  {
    date: '2023-07-06', month: 7,
    type: 'movie',
    title: '风犬少年的天空',
    rating: 5,
    note: '有一种在看番的电波系即视感。有狗血的一面，但更有可贵和真实的共鸣。想念重庆，再见青春。',
    douban_url: 'https://movie.douban.com/subject/30413128/'
  },
  {
    date: '2023-07-09', month: 7,
    type: 'movie',
    title: '遇见你之前 / Me Before You',
    rating: 4,
    note: 'Lovely',
    douban_url: 'https://movie.douban.com/subject/25929151/'
  },
  {
    date: '2023-07-16', month: 7,
    type: 'movie',
    title: '八角笼中',
    rating: 4,
    note: '前半部分可以再精简，生涩而没有意外之喜的类型片习作，无聊到坐立难安（但又想多看看小演员哈哈哈哈，马虎演电影了！演的马虎！！！），好在并没有止步于此，后半部分真诚和劲儿都出来了，虽然整体还是平庸，但有点意思……',
    douban_url: 'https://movie.douban.com/subject/35765480/'
  },
  {
    date: '2023-07-21', month: 7,
    type: 'movie',
    title: '封神第一部：朝歌风云',
    rating: 4,
    note: '看完之后理解了首页说的椰树风哈哈哈哈哈 难得的主角没什么金手指感。意外的是大制作和特效之下，表演和剧作有细腻之处，却足够克制。（比如哥哥说到回家时有一个黯然的神色在镜头末尾一闪而过，并未浓墨突出，却一笔点睛',
    douban_url: 'https://movie.douban.com/subject/10604086/'
  },
  {
    date: '2023-07-22', month: 7,
    type: 'tv',
    title: '克拉克森的农场 第二季 / Clarkson&#39;s Farm Season 2',
    rating: 5,
    note: '最后一集名副其实的climax 从与自然斗到与人斗，其难无穷，其乐也无穷也。',
    douban_url: 'https://movie.douban.com/subject/35517450/'
  },
  {
    date: '2023-07-22', month: 7,
    type: 'tv',
    title: '时光代理人 番外篇 比武招亲',
    rating: 4,
    note: '补标补标',
    douban_url: 'https://movie.douban.com/subject/35609986/'
  },
  {
    date: '2023-07-23', month: 7,
    type: 'movie',
    title: '芭比 / Barbie',
    rating: 4,
    note: '只能说为了玩梗硬编了一部电影，编剧真的我哭死……抛开概念来看剧本真的很粗糙和随意，随意到笑得正开心的时候会被尴尬到笑容凝固流汗黄豆。为了概念多打一分，为了｛【开头我get了致敬2001但我弟没有】于是体验了一分钟精神男人｝使好笑程度加一个档次再加一分😅',
    douban_url: 'https://movie.douban.com/subject/4058939/'
  },
  {
    date: '2023-07-31', month: 7,
    type: 'movie',
    title: '野蛮人入侵',
    rating: 5,
    note: '喜欢回归身体讨论何为自我（因此同意这不完全是一部女性电影），喜欢恰到好处的迷影，喜欢翠梅老师散发出的强烈的人格魅力（演技可能有缺失但她一出现在荧幕上就有一种很强大的说服力！），喜欢导演在映后谈时娓娓道来的创作想法（映后时间还是多交给导演吧拜托拜托）。当然也有不足之处，但的确是最近看的电影里观感最舒服的一部，导演还是俺有过几面之缘的项目方！觉得遇到这部电影方方面面都很幸运，所以愿意给五颗星！',
    douban_url: 'https://movie.douban.com/subject/35183254/'
  },
  {
    date: '2023-08-05', month: 8,
    type: 'movie',
    title: '僵尸100：在成为僵尸前要做的100件事 / ゾン100～ゾンビになるまでにしたい100のこと～',
    rating: 2,
    note: '啊？',
    douban_url: 'https://movie.douban.com/subject/35795793/'
  },
  {
    date: '2023-08-06', month: 8,
    type: 'movie',
    title: '唐伯虎点秋香 / 唐伯虎點秋香',
    rating: 4,
    note: '补',
    douban_url: 'https://movie.douban.com/subject/1306249/'
  },
  {
    date: '2023-08-08', month: 8,
    type: 'movie',
    title: '猫鼠游戏 / Catch Me If You Can',
    rating: 4,
    note: '动因的挖掘让故事更饱满。',
    douban_url: 'https://movie.douban.com/subject/1305487/'
  },
  {
    date: '2023-08-10', month: 8,
    type: 'movie',
    title: '龙凤配 / Sabrina',
    rating: 3,
    note: '🥺',
    douban_url: 'https://movie.douban.com/subject/1293868/'
  },
  {
    date: '2023-08-10', month: 8,
    type: 'movie',
    title: '钢琴家 / The Pianist',
    rating: 5,
    note: 'I\'m cold.',
    douban_url: 'https://movie.douban.com/subject/1296736/'
  },
  {
    date: '2023-08-26', month: 8,
    type: 'movie',
    title: '友谊之死 / Friendship&#39;s Death',
    rating: 4,
    note: '精巧有趣。结尾还不如留白。',
    douban_url: 'https://movie.douban.com/subject/5047560/'
  },
  {
    date: '2023-08-28', month: 8,
    type: 'movie',
    title: '夏日时光 / Summertime',
    rating: 4,
    note: 'All my life, I&#39;ve stayed at parties too long, because I didn&#39;t know when to go. Now with you, I&#39;ve grown up. I think I do know when to.',
    douban_url: 'https://movie.douban.com/subject/1293491/'
  },
  {
    date: '2023-08-28', month: 8,
    type: 'book',
    title: '夜莺与玫瑰（双语绘图版）',
    rating: 0,
    douban_url: 'https://book.douban.com/subject/35104171/'
  },
  {
    date: '2023-09-02', month: 9,
    type: 'movie',
    title: '爱德华大夫 / Spellbound',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/1293973/'
  },
  {
    date: '2023-09-02', month: 9,
    type: 'movie',
    title: '奥本海默 / Oppenheimer',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/35593344/'
  },
  {
    date: '2023-09-04', month: 9,
    type: 'movie',
    title: '永安镇故事集',
    rating: 4,
    note: 'Don\'t cry for me Argentina前奏一出来真的笑发财了…… 导演编剧都不看球还能打到这个梗真的天才…… 观影的良好体验与情绪延续到了映后，编剧老师红通着脸站在台上认真问答的形象仿佛是刚从荧幕里扣出来的，有趣。',
    douban_url: 'https://movie.douban.com/subject/35231700/'
  },
  {
    date: '2023-09-08', month: 9,
    type: 'movie',
    title: '野马分鬃',
    rating: 3,
    note: '镜头语言很有趣……对比来看，永安镇属于是扬长掩短，化尴尬为玩笑戏谑',
    douban_url: 'https://movie.douban.com/subject/30425827/'
  },
  {
    date: '2023-09-09', month: 9,
    type: 'movie',
    title: '车祸 / Accident',
    rating: 3,
    note: '短评区大部分都看不懂……说点人话可能真的很难吧🙂 泛舟全片最佳。好几处感觉被影射到了，但这种感觉稍纵即逝，抓不住。作为观众，本人显然不是受众群。',
    douban_url: 'https://movie.douban.com/subject/1294975/'
  },
  {
    date: '2023-09-09', month: 9,
    type: 'movie',
    title: '火山挚恋 / Fire of Love',
    rating: 5,
    note: '4.5 Imagines stretched their time with volcanos, and us.',
    douban_url: 'https://movie.douban.com/subject/35694766/'
  },
  {
    date: '2023-09-14', month: 9,
    type: 'movie',
    title: '心火：写给火山夫妇的安魂曲 / The Fire Within: A Requiem for Katia and Maurice Krafft',
    rating: 5,
    note: '和火山挚恋对比看的。两位导演年龄阅历相差极大。年轻人总是发问，年迈者投以凝视。',
    douban_url: 'https://movie.douban.com/subject/35857538/'
  },
  {
    date: '2023-09-16', month: 9,
    type: 'movie',
    title: '画廊外的天赋 / Exit Through the Gift Shop',
    rating: 4,
    note: '整个纪录片本身也是一场街头涂鸦。',
    douban_url: 'https://movie.douban.com/subject/4319017/'
  },
  {
    date: '2023-09-16', month: 9,
    type: 'movie',
    title: '豹 / Il gattopardo',
    rating: 4,
    note: '看阿兰落泪镜头的时候几乎不能呼吸了。不太了解历史，但同样能享受奇观，感知情绪与徐徐的衰老。还好是在影院，得以全神贯注看完。',
    douban_url: 'https://movie.douban.com/subject/1293146/'
  },
  {
    date: '2023-09-17', month: 9,
    type: 'movie',
    title: '同流者 / Il conformista',
    rating: 4,
    note: '用光调度臻于化境。短评说主角很加缪，同意……',
    douban_url: 'https://movie.douban.com/subject/1300955/'
  },
  {
    date: '2023-09-22', month: 9,
    type: 'tv',
    title: '时光代理人 第二季',
    rating: 3,
    note: '不如第一季。。。但是怎么评分更高啊？？？',
    douban_url: 'https://movie.douban.com/subject/35524539/'
  },
  {
    date: '2023-09-23', month: 9,
    type: 'movie',
    title: '红色沙漠 / Il deserto rosso',
    rating: 4,
    note: '焦躁，欲望，困意。',
    douban_url: 'https://movie.douban.com/subject/1299261/'
  },
  {
    date: '2023-09-27', month: 9,
    type: 'movie',
    title: '国家美术馆 / National Gallery',
    rating: 2,
    note: '评论员被采访对达芬奇看法那一段真的不是反讽吗……给我看笑了🙄一直在讲美术馆想要如何触达大众，但是出镜者没有几个在说人话，rough的材料避免了主观的judge但制造了理解门槛……只能说本来就不了解美术馆的人看了也不会更了解多少，导演的priviledge和美术馆的priviledge如出一辙，活该你们永远在美育路上原地踏步。（此段文风向各位学习x',
    douban_url: 'https://movie.douban.com/subject/25884292/'
  },
  {
    date: '2023-09-29', month: 9,
    type: 'movie',
    title: '我的章鱼老师 / My Octopus Teacher',
    rating: 4,
    note: 'A real documentary.',
    douban_url: 'https://movie.douban.com/subject/35185752/'
  },
  {
    date: '2023-09-29', month: 9,
    type: 'movie',
    title: '坚如磐石',
    rating: 4,
    note: '看完第一想法是：导演是张艺谋，可能只是因为他来拍，这个片子上映的几率才更大，看不到很多的导演特色（摄影用光是正常发挥！我说！）。但想了想，删减成这样，还能保证基本的观感和完整度，还得是emo……所以说导演功力从来不（单纯）见于某种风格和辨识度，核心还是讲故事的能力。',
    douban_url: 'https://movie.douban.com/subject/33447633/'
  },
  {
    date: '2023-09-30', month: 9,
    type: 'movie',
    title: '探戈狂恋 / Tango, no me dejes nunca',
    rating: 5,
    note: '看过最「沉溺」的歌舞片。',
    douban_url: 'https://movie.douban.com/subject/1301898/'
  },
  {
    date: '2023-10-03', month: 10,
    type: 'movie',
    title: '末路狂花 / Thelma &amp; Louise',
    rating: 4,
    note: 'It feels like im never heard',
    douban_url: 'https://movie.douban.com/subject/1291992/'
  },
  {
    date: '2023-10-15', month: 10,
    type: 'movie',
    title: '蓝色珍妮 / Blue Jean',
    rating: 3,
    note: '即视感太强了以至于习作感大于新鲜感。（但我还是要惊呼：女主好美………………………………………………………………',
    douban_url: 'https://movie.douban.com/subject/36025281/'
  },
  {
    date: '2023-10-20', month: 10,
    type: 'movie',
    title: '坠落的审判 / Anatomie d&#39;une chute',
    rating: 5,
    note: '英文片名特别特别好，是anatomy而不是trial或者analysize，是fall而不是death。',
    douban_url: 'https://movie.douban.com/subject/35633650/'
  },
  {
    date: '2023-10-22', month: 10,
    type: 'movie',
    title: '天堂可以等待 / Heaven Can Wait',
    rating: 4,
    note: '结束之后想，我居然能笑得很开心，本身就部分说明电影的水平了（避免自己成为立场战士，所以不太想谈时代局限性的话题……不是judge一些陈旧的观念就可以彰显自己的观影品味的，望周知……（但也没有说这个多好的意思……',
    douban_url: 'https://movie.douban.com/subject/1293608/'
  },
  {
    date: '2023-10-29', month: 10,
    type: 'movie',
    title: '卡门 / Carmen',
    rating: 3,
    douban_url: 'https://movie.douban.com/subject/1437343/'
  },
  {
    date: '2023-11-02', month: 11,
    type: 'movie',
    title: '一个和四个',
    rating: 3,
    note: '很不错的类型片处女作。但也只止步于处女作的评价体系了……有时候觉得导演把我当傻子……',
    douban_url: 'https://movie.douban.com/subject/35151513/'
  },
  {
    date: '2023-11-11', month: 11,
    type: 'movie',
    title: '再造淑女 / Selfie',
    rating: 3,
    note: 'Cute haha',
    douban_url: 'https://movie.douban.com/subject/25884510/'
  },
  {
    date: '2023-11-13', month: 11,
    type: 'movie',
    title: '姐姐',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/1998137/'
  },
  {
    date: '2023-11-21', month: 11,
    type: 'book',
    title: '艺术的故事',
    rating: 5,
    douban_url: 'https://book.douban.com/subject/3162991/'
  },
  {
    date: '2023-12-23', month: 12,
    type: 'movie',
    title: '一念关山',
    rating: 3,
    note: '出现人生规划分歧的时候就分手不好吗……啥时候抛弃官配这种洁癖思想……花上糊屎，好看得一阵一阵的。完全的烂也就罢了，偏要让你知道其实可以很不错……恶心死了',
    douban_url: 'https://movie.douban.com/subject/35797771/'
  },
  {
    date: '2023-12-24', month: 12,
    type: 'movie',
    title: '狗神 / DogMan',
    rating: 4,
    note: '回到宗教母题的结尾让我想起一些被影视鉴赏课老师整到ptsd的不妙回忆……我被你们这些个教徒影人支配的一生🙄',
    douban_url: 'https://movie.douban.com/subject/35736202/'
  },
  {
    date: '2024-01-21', month: 1,
    type: 'movie',
    title: '后宫·甄嬛传',
    rating: 5,
    douban_url: 'https://movie.douban.com/subject/4922787/'
  },
  {
    date: '2024-01-28', month: 1,
    type: 'movie',
    title: '卧虎藏龙 / 臥虎藏龍',
    rating: 4,
    note: '回来吃点好的……武侠在侠，在心，不在武，然而武是容器，可窥心。小时候果然完全没有看懂。竹林戏同站一竹，李平静而玉冲动并不打动我，而李起身玉的躁动反还其身，才有趣起来。',
    douban_url: 'https://movie.douban.com/subject/1301168/'
  },
  {
    date: '2024-02-25', month: 2,
    type: 'movie',
    title: '热辣滚烫',
    rating: 3,
    note: '最喜欢的片段应该是一个call back。乐莹说"拳击很有趣，不管场上打得怎么样，结束的时候都可以抱抱"。比赛结束的时候，从头到尾没有给过对手表情的特写，但能看到蓝色手套在乐莹背上轻轻地拍。这是能让人感受到表层下有力量在流动的时刻，比起给对手一个赞许的眼神特写或是增加一段对话，这种交流的方式要来得真实、细腻，更接近一种真正的女性之间的默契。',
    douban_url: 'https://movie.douban.com/subject/36081094/'
  },
  {
    date: '2024-03-10', month: 3,
    type: 'movie',
    title: '沙丘2 / Dune: Part Two',
    rating: 5,
    note: '没办法不喜欢……',
    douban_url: 'https://movie.douban.com/subject/35575567/'
  },
  {
    date: '2024-03-14', month: 3,
    type: 'movie',
    title: '周处除三害 / 周處除三害',
    rating: 4,
    note: '看到最后都还在想怎么没有反转说陈桂林之前是警察……',
    douban_url: 'https://movie.douban.com/subject/36151692/'
  },
  {
    date: '2024-03-17', month: 3,
    type: 'movie',
    title: '燃烧 / 버닝',
    rating: 4,
    note: '看到穷人穷途末路 本应该很爽吧……所以最后的拥抱是不是在说，宗秀终于还是走到了这一步，完成了他设计的凶杀闭环呢？（虽然搭上了自己的命，但觉得是本这种疯子做得出来的……',
    douban_url: 'https://movie.douban.com/subject/26842702/'
  },
  {
    date: '2024-04-03', month: 4,
    type: 'movie',
    title: '草木人间',
    rating: 2,
    note: '传销部分的运镜运得想吐，情节烂得更想吐……一直在期待跳出既有宣传框架的，对普通人陷入传销陷阱原因更新颖、更深刻的洞察，但很可惜没有。"花钱买开心"那段有那个意思，但铺垫不够，让人觉得疯癫大过共情。说实话真挺想溺爱的，但眼巴巴期待到结尾都没有惊喜，实在是说不出什么好话……给人感觉是"麦麦红白配但是白区是桂花糕龙井茶"，但并不是所有茅台瑞幸大家都会买单……',
    douban_url: 'https://movie.douban.com/subject/35240117/'
  },
  {
    date: '2024-04-04', month: 4,
    type: 'movie',
    title: '雪豹',
    rating: 4,
    note: '好遗憾……太遗憾了……',
    douban_url: 'https://movie.douban.com/subject/35811006/'
  },
  {
    date: '2024-04-09', month: 4,
    type: 'movie',
    title: '你想活出怎样的人生 / 君たちはどう生きるか',
    rating: 3,
    note: '？',
    douban_url: 'https://movie.douban.com/subject/26925611/'
  },
  {
    date: '2024-04-09', month: 4,
    type: 'movie',
    title: '一树梨花压海棠 / Lolita',
    rating: 3,
    note: '华丽包装纸下的一颗变质糖果……看得不是滋味……',
    douban_url: 'https://movie.douban.com/subject/1296778/'
  },
  {
    date: '2024-04-11', month: 4,
    type: 'movie',
    title: '塔洛',
    rating: 4,
    note: '《身份》',
    douban_url: 'https://movie.douban.com/subject/26586806/'
  },
  {
    date: '2024-04-11', month: 4,
    type: 'movie',
    title: '迷路',
    rating: 3,
    note: '2021北影补标',
    context: '第11届北影节',
    douban_url: 'https://movie.douban.com/subject/33385812/'
  },
  {
    date: '2024-04-14', month: 4,
    type: 'movie',
    title: '古相思曲',
    rating: 4,
    note: '经费和能力限制下做到的极致……权谋和人物塑造幼稚单薄了些，但故事推动力和呈现极好，演员们的演绎初看一般，后面却渐入佳境。可能剧情真的是最好的医美……玩过世外之后对这种设定没有丝毫抵抗力，代入男主已经想捅自己无数回了，但男主比我更勇敢也更坚定。（ps:爱上陆时就像呼吸一样的简单啊！！！',
    douban_url: 'https://movie.douban.com/subject/36155049/'
  },
  {
    date: '2024-04-27', month: 4,
    type: 'movie',
    title: '年少日记 / 年少日記',
    rating: 5,
    note: '喜欢……',
    douban_url: 'https://movie.douban.com/subject/34940879/'
  },
  {
    date: '2024-05-18', month: 5,
    type: 'movie',
    title: '九龙城寨之围城 / 九龍城寨·圍城',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/24284175/'
  },
  {
    date: '2024-07-06', month: 7,
    type: 'movie',
    title: '头脑特工队2 / Inside Out 2',
    rating: 5,
    note: '好可爱好灵好神金好喜欢……',
    douban_url: 'https://movie.douban.com/subject/36090457/'
  },
  {
    date: '2024-07-29', month: 7,
    type: 'movie',
    title: '解密',
    rating: 3,
    note: '还算是捏着鼻子能看，但导演的EGO真的大得我想报警🚔……那个端碗喝茶的片段，好好的剧本全让添油加醋的环绕运镜给搅黄了……不会吧不会吧你们不会觉得让子弹飞那段转镜头是优秀案例吧🥰像极了我把一些💩文献视若珍宝地写进我的综述里的亚子🥰',
    douban_url: 'https://movie.douban.com/subject/26370387/'
  },
  {
    date: '2024-07-31', month: 7,
    type: 'movie',
    title: '从21世纪安全撤离',
    rating: 4,
    note: '蘑菇片的剧情真没必要太正常，剧本的平庸是最大的败笔，还不如干脆瞎写瞎搞来得抽象有趣，出电影院我说"叙事再差点就好了"……正经说还是可看的，剧本很一般很无聊甚至矫情，但创作的确是大胆有趣的。审美有点过山车，反正笑也把票钱笑回来了，不亏。（抬咖了但是，突然理解了当年喜欢看《周末》的人哈哈哈哈哈哈',
    douban_url: 'https://movie.douban.com/subject/26816104/'
  },
  {
    date: '2024-09-19', month: 9,
    type: 'movie',
    title: '柳舟记',
    rating: 4,
    note: '好奇翻过原著的人都懂这部剧的编剧有多配享太庙……',
    douban_url: 'https://movie.douban.com/subject/35516711/'
  },
  {
    date: '2024-09-28', month: 9,
    type: 'movie',
    title: '出走的决心',
    rating: 4,
    note: '摄影没有前景是不是不能开机😂',
    douban_url: 'https://movie.douban.com/subject/36587974/'
  },
  {
    date: '2024-11-24', month: 11,
    type: 'movie',
    title: '好东西',
    rating: 5,
    note: '小孩猜声音那里太灵了！ 看电影时旁边坐了对情侣。小叶掀小马衣服的时候，旁边男生对女生说"跟我差不多吧"，我笑得要撅过去了……我是真服了男的了……',
    douban_url: 'https://movie.douban.com/subject/36154853/'
  },
  {
    date: '2024-11-27', month: 11,
    type: 'movie',
    title: '永夜星河',
    rating: 3,
    note: '当白噪音放完了……能不能不要莫名其妙燃啊啊啊啊啊你们是白磷吗啊啊啊啊',
    douban_url: 'https://movie.douban.com/subject/35750087/'
  },
  {
    date: '2024-12-09', month: 12,
    type: 'movie',
    title: '惊天魔盗团 / Now You See Me',
    rating: 4,
    note: '飞机上看看，魔术结束刚好落地拉字幕还挺好玩的🥹',
    douban_url: 'https://movie.douban.com/subject/6517421/'
  },
  {
    date: '2024-12-19', month: 12,
    type: 'movie',
    title: '年会不能停！',
    rating: 4,
    douban_url: 'https://movie.douban.com/subject/35725869/'
  },
  {
    date: '2026-04-12', month: 4,
    type: 'movie',
    title: '挽救计划 / Project Hail Mary',
    rating: 5,
    note: '谁会拒绝一个和你从什么是"1"开始理解彼此的朋友呢。 人类中心主义就人类中心主义吧，结局算是谁圈养谁还说不好呢。',
    douban_url: 'https://movie.douban.com/subject/35010610/'
  },

  {
    date: '2026-04-19', month: 4,
    type: 'movie',
    title: 'Space Cadet',
    rating: 5,
    note: '温柔和去繁留真，是最珍贵的一种风味。一边看一边哽咽，像被拥抱着。最近集中摄入了大量探讨人与"非人"（机器，ai，外星生物etc）关系的各路作品，所以在看到片尾献给grandparents的时候完全没转过脑子。但倒回去想，确实很贴啊……想外公外婆了。',
    douban_url: 'https://movie.douban.com/subject/35633079/'
  },
];

// ── 财务数据（每月5号更新，来源：老金记账体系） ──────────────────────────
// 字段说明：
//   month: 'YYYY-MM' 对应月份
//   total: 总资产
//   savings: 储蓄（中行活期+余额宝+招行朝朝宝）
//   funds: 基金（纳指a+黄金a+沪深a+鹏华债基）
//   wealth: 理财（招商理财）
//   income: 当月总收入
//   expense: 当月总支出
//   net: 当月净增（income - expense）
//   income_items: 收入明细 [{name, amount}]
//   expense_items: 支出明细 [{name, amount}]

// ── 豆瓣历史总量（由豆瓣同步脚本定期更新，勿手改） ───────────────────────
// 最后同步时间：2026-04-10
const DOUBAN_STATS = {
  movie: 584,   // 影视（含电影+剧集）
  book: 158,    // 图书
  lastSync: '2026-04-20'
};

const FINANCE_DATA = [
  {
    month: '2025-09',
    total: 108558,
    savings: 67500,
    funds: 7058,
    wealth: 34000,
    income: 15410,
    expense: 6065,
    net: 9345,
    income_items: [
      { name: '工资', amount: 14000 },
      { name: '差补', amount: 410 },
      { name: '公积金', amount: 1000 }
    ],
    expense_items: [
      { name: '花呗', amount: 1765 },
      { name: '中信信用卡', amount: 1000 },
      { name: '房租', amount: 3300 }
    ]
  },
  {
    month: '2025-10',
    total: 124125,
    savings: 72500,
    funds: 17625,
    wealth: 34000,
    income: 15722,
    expense: 7575,
    net: 8148,
    income_items: [
      { name: '工资', amount: 14000 },
      { name: '差补', amount: 722 },
      { name: '公积金', amount: 1000 }
    ],
    expense_items: [
      { name: '花呗', amount: 2275 },
      { name: '中信信用卡', amount: 2000 },
      { name: '房租', amount: 3300 }
    ]
  },
  {
    month: '2025-11',
    total: 158824,
    savings: 77500,
    funds: 27324,
    wealth: 54000,
    income: 18472,
    expense: 6337,
    net: 12135,
    income_items: [
      { name: '工资', amount: 14000 },
      { name: '差补', amount: 1472 },
      { name: '公积金', amount: 2000 },
      { name: '人才补贴', amount: 1000 }
    ],
    expense_items: [
      { name: '花呗', amount: 1100 },
      { name: '中信信用卡', amount: 1937 },
      { name: '房租', amount: 3300 }
    ]
  },
  {
    month: '2025-12',
    total: 160926,
    savings: 74500,
    funds: 32426,
    wealth: 54000,
    income: 14897,
    expense: 10586,
    net: 4311,
    income_items: [
      { name: '工资', amount: 14000 },
      { name: '差补', amount: 897 }
    ],
    expense_items: [
      { name: '花呗', amount: 3540 },
      { name: '中信信用卡', amount: 1858 },
      { name: '房租', amount: 3300 },
      { name: '人情', amount: 1888 }
    ]
  },
  {
    month: '2026-01',
    total: 183880,
    savings: 76500,
    funds: 33380,
    wealth: 74000,
    income: 17471,
    expense: 7709,
    net: 9762,
    income_items: [
      { name: '工资', amount: 14000 },
      { name: '差补', amount: 1471 },
      { name: '公积金', amount: 2000 }
    ],
    expense_items: [
      { name: '花呗', amount: 1209 },
      { name: '中信信用卡', amount: 3200 },
      { name: '房租', amount: 3300 }
    ]
  },
  {
    month: '2026-02',
    total: 320703,
    savings: 104000,
    funds: 42703,
    wealth: 174000,
    income: 150598,
    expense: 10703,
    net: 139896,
    note: '含妈妈赠予¥100,000 + 年终奖¥34,213，非常规月份',
    income_items: [
      { name: '工资', amount: 14000 },
      { name: '年终奖', amount: 34213, oneoff: true },
      { name: '妈妈赠予', amount: 100000, oneoff: true },
      { name: '差补', amount: 385 },
      { name: '公积金', amount: 2000 }
    ],
    expense_items: [
      { name: '花呗', amount: 3403 },
      { name: '中信信用卡', amount: 4000 },
      { name: '房租', amount: 3300 }
    ]
  },
  {
    month: '2026-03',
    total: 339354,
    savings: 79425,
    funds: 55523,
    wealth: 204407,
    income: 20868,
    expense: 6781,
    net: 14087,
    income_items: [
      { name: '工资', amount: 14000 },
      { name: '退税', amount: 1313 },
      { name: '差补', amount: 1555 },
      { name: '公积金', amount: 2000 },
      { name: '人才补贴', amount: 2000 }
    ],
    expense_items: [
      { name: '花呗', amount: 1181 },
      { name: '中信信用卡', amount: 2300 },
      { name: '房租', amount: 3300 }
    ]
  }
];

// ── 定投配置（2026年4月起） ─────────────────────────────────────────────
const INVESTMENT_CONFIG = [
  { name: '纳指a', freq: '日投', amount: 10, monthly: 300 },
  { name: '沪深a', freq: '周投', amount: 200, monthly: 800 },
  { name: '黄金a', freq: '周投', amount: 100, monthly: 400 },
  { name: '鹏华债基', freq: '周投', amount: 93, monthly: 372 },
  { name: '金信债券', freq: '周投', amount: 200, monthly: 800 }
];

// ── 游戏记录 ──────────────────────────────────────────────────────────────
// status: 'wishlist' | 'playing' | 'done'
// platform: 'PS5' | 'PC' | 'Switch' | 'iOS' | 'Android' | 其他
// rating: 1-5，0 = 待评
// startDate: 开始玩的日期（YYYY-MM-DD）
// endDate: 通关/结束日期（YYYY-MM-DD），仅 done 状态填写
// note: 短评
// cover: 封面图 URL（可选）
const GAME_LOG = [
  {
    id: 'death-stranding',
    title: '死亡搁浅',
    titleEn: 'Death Stranding',
    icon: '💀',
    status: 'done',
    platform: 'PS5',
    genre: '步行模拟 / 动作',
    startDate: '2026-03-31',
    endDate: '2026-04-17',
    rating: 5,
    note: '过完了死亡搁浅，耗费时长快60h。最后一段玩得三心二意吧，男性视角叙事的空浮和无聊感压过了视听的震撼，丢失了吸引力。好在依然有动人的段落和体验。给自己鼓掌吧，克服了对战事题材是发自内心的恐惧和抵触，硬着头皮打过了很多不喜欢的玩法，终于也完成了我的这一单。Game is a journey.',
    cover: ''
  },
  {
    id: 'detroit-become-human',
    title: '底特律：变人',
    titleEn: 'Detroit: Become Human',
    icon: '🤖',
    status: 'done',
    platform: 'PS5',
    genre: '互动叙事 / 冒险',
    startDate: '2026-03-14',
    endDate: '2026-03-16',
    rating: 5,
    note: '因为这些作品的存在，游戏才是第九艺术。marcus线种族意味太浓，但不妨碍这整体上是一个发售8年也不过时的游戏。甚至，当下就是最佳赏味期。一路窝囊想走和平线，结果最后没忍住选了核平。但依然是在我眼里最完美的结局，毕竟虽然dirty bomb让底特律数十年不宜人类居住，但也正好，仿生人拥有了自己的领土。凌晨两点放完炸弹，第二天醒来去上班，这种体验也很神奇。',
    cover: ''
  },
  {
    id: 'yangyun-16',
    title: '燕云十六声',
    titleEn: 'Where Winds Meet',
    icon: '🏮',
    status: 'playing',
    platform: 'PC / 手机',
    genre: '开放世界 / 角色扮演',
    startDate: '2026-02-12',
    endDate: '',
    rating: 0,
    note: '剧情进行中，慢慢推，不用赶。',
    cover: ''
  },
  {
    id: 'beyond-the-world',
    title: '世界之外',
    titleEn: 'Beyond the World',
    icon: '🌌',
    status: 'playing',
    platform: '手机',
    genre: '剧情 / 冒险',
    startDate: '2024-02-02',
    endDate: '',
    rating: 0,
    note: '把没看完的剧情补完，别让故事烂尾在收藏夹。',
    cover: ''
  },
  {
    id: 'disco-elysium',
    title: '极乐迪斯科',
    titleEn: 'Disco Elysium',
    icon: '🕵️',
    status: 'wishlist',
    platform: '',
    genre: '角色扮演',
    startDate: '',
    endDate: '',
    rating: 0,
    note: '',
    cover: ''
  },
  {
    id: 'sunken-will',
    title: '沉没意志',
    titleEn: 'Minds Beneath Us',
    icon: '🌊',
    status: 'wishlist',
    platform: 'PC',
    genre: '科幻悬疑 / 冒险',
    startDate: '',
    endDate: '',
    rating: 0,
    note: '',
    cover: ''
  }
];
