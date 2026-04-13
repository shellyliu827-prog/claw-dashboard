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
      { title: '🎬 我许可',   status: 'pending' }
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
    checkinText: '本季已发 1 条',
    checkinStyle: 'font-size:1.05rem;color:#f0c040;font-weight:600;',
    checkinSub: 'Delulu 课堂视频',
    showInMonthBadge: true,
    showInMonthCard: true,
    cardDesc: '把灵感库里的内容发出来<br>创造力要有出口'
  },
  {
    id: 'game',
    icon: '🎮',
    name: '游戏',
    hint: '死亡搁浅一周目 · 燕云剧情 · 世界之外补完',
    status: 'active',
    type: 'progress',
    progress: 0,
    progressColor: 'linear-gradient(90deg,#5a9fd4,#7ab4f4)',
    checkinEmpty: '暂无记录，快去打卡～',
    showInMonthBadge: true,
    showInMonthCard: true
  },
  {
    id: 'film-fest',
    icon: '🎞️',
    name: '电影节记录补录',
    hint: '把参加过的电影节观影记录补进 MEDIA_LOG（上影节等）',
    status: 'active',
    type: 'progress',
    progress: 1,   // 已补录上影节2025（8条）
    progressColor: 'linear-gradient(90deg,#e87a5a,#f4b47a)',
    checkinEmpty: '还没有电影节记录',
    showInMonthBadge: true,
    showInMonthCard: true,
    cardDesc: '补录历年电影节观影记录<br>书影音页未来可开电影节专区'
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
  { date: '2026-04-11', month: 4, teacher: '四火', genre: 'KPOP/MV', song: 'Like A Flower（裴珠泫）', count: 2 }
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
  { date: '2026-04-09', content: '沉迷搞各种自动化，以前用notion吃的苦还是太多了' },
  { date: '2026-04-10', content: '游戏号的第一篇帖子数据很好！今天又是倒赚公司token的一天！' },
  { date: '2026-04-11', content: '去舞室学舞遇到了各路的好朋友，有好朋友，有几面之缘的舞友，有同事，来来回回打招呼感觉很奇妙！去吃了之前发现的菲律宾菜小店。好羡慕准备离职的💊老师！希望大家都能去往想过的人生！' },
  { date: '2026-04-12', content: '去龙潭公园拍完了想拍的视频，花、风和柳絮都刚刚好，树给我当了支架。晚上看了挽救计划，电波对上好幸福☺️' }
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
  { icon: '\u2705',  title: 'Delulu 课堂视频', desc: '已发布', date: '2026-04-04', status: 'done' }
];

// ── 发帖记录（自媒体更新日志） ──────────────────────────────────────
// 日历页面第三遍遍历读取此数组，显示发帖标记
// 字段：date(YYYY-MM-DD), month(月份数字), platform(平台), title(标题/选题), icon(emoji)
// 来源：实际发布记录，与 IDEAS 中 status='done' 的条目对应
//
// ⚠️ 注意：POST_COUNT 是累计总数（给 index.html 用），POST_LOG 是逐条明细（给日历用）

var POST_COUNT = 19;

const POST_LOG = [
  // ── 四月 ──
  { date: '2026-04-04', month: 4, platform: '小红书+视频号', title: 'Delulu 课堂视频', icon: '📱' },
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
    relatedBigEvent: '朋友婚礼'
  },
  {
    date: '2026-04-26',
    month: 4,
    emoji: '💒',
    title: '朋友婚礼',
    detail: '💒 朋友婚礼！｜人生第一次参加朋友婚礼 🎊',
    type: 'wedding',
    calendar: '朋友啊朋友',
    memo: '人生第一次参加朋友婚礼 🎊',
    deco: '💜',
    // 月小结邮件：以此事件为主，出发那条作为附注
    travelNote: '4/24 G1567 北京南→砀山南 16:22 出发'
  },
  // ── 四月 · 北影节（活动框架，具体影片见 MEDIA_LOG） ──
  // ⚠️ 不再在这里列片名，片名统一走 MEDIA_LOG + context:'北影节'
  {
    date: '2026-04-18',
    month: 4,
    emoji: '🎬',
    title: '北影节 2026',
    detail: '🎬 北影节 2026｜4/18-4/19 赶场3部',
    type: 'note',
    calendar: '',
    group: '北影节2026',
    groupTitle: '北影节 2026',
    groupEmoji: '🎬',
    dateEnd: '2026-04-19'  // 活动跨越的结束日期，日历格子用
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
  }
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
  movie: 582,   // 影视（含电影+剧集）
  book: 158,    // 图书
  lastSync: '2026-04-10'
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
