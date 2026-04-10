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
    checkinText: '本季已跳 4 节',
    checkinStyle: 'font-size:1.05rem;color:#f0c040;font-weight:600;',
    showInMonthBadge: true,
    showInMonthCard: true,
    cardDesc: 'G社每周2节 · 顺其自然<br>160次 → 2027/7/27'
  },
  {
    id: 'reading',
    icon: '📖',
    name: '阅读 &amp; 写作',
    nameRaw: '阅读 & 写作',
    hint: '找回感觉，不设硬指标',
    status: 'active',
    type: 'progress',
    progress: 0,
    checkinEmpty: '暂无记录，快去打卡～',
    showInMonthBadge: true,
    showInMonthCard: true,
    cardDesc: '找回感觉 · 不设硬指标<br>重新锻炼起来就好'
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
  {
    id: 'movie',
    icon: '🎬',
    name: '看电影',
    hint: 'Q2 想看清单',
    status: 'active',
    type: 'list',
    items: [
      { title: '挽救计划', status: 'pending' },
      { title: '我许可',   status: 'pending' }
    ],
    showInMonthBadge: true,
    showInMonthCard: true
  }
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
  { date: '2026-04-04', month: 4, teacher: '兔兔子', genre: 'KPOP/MV', song: 'Delulu', count: 2 }
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

// ── 自媒体灵感库 ────────────────────────────────────────────────────────
// status: 'todo'(待做) | 'done'(已发) | 'paused'(搁置)
// 来源：ideas.md，两边需同步维护

const IDEAS = [
  { icon: '\uD83C\uDF38', title: '外景 like a flower', desc: '舞蹈外景拍摄 · 花为主题', date: '2026-03-25', status: 'todo' },
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

var POST_COUNT = 17;

const POST_LOG = [
  // ── 四月 ──
  { date: '2026-04-09', month: 4, platform: '小红书', title: '地球online-上班路', icon: '📱' },
  { date: '2026-04-04', month: 4, platform: '小红书+视频号', title: 'Delulu 课堂视频', icon: '📱' }
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
    date: '2026-04-25',
    month: 4,
    emoji: '🚄',
    title: '出发→安徽',
    detail: '🚄 出发→安徽',
    type: 'trip',
    calendar: '飞行计划'
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
    deco: '💜'
  },
  {
    date: '2026-04-30',
    month: 4,
    emoji: '✦',
    title: '月末 · 回顾',
    detail: '✦ 月末 · 回顾｜贴上本月最爱照片',
    type: 'note',
    calendar: ''
  }
];
