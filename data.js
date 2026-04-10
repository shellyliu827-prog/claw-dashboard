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

// ── 每日高光日记（diary 提醒事项同步而来） ───────────────────────────────
// 字段：date(YYYY-MM-DD), content(当天高光一句话)
// 录入方式：每晚 10 点提醒 → 在备注里写 → 自动同步
const DIARY = [
  { date: '2026-04-09', content: '沉迷搞各种自动化，以前用notion吃的苦还是太多了' }
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
    date: '2026-04-24',
    month: 4,
    emoji: '🚄',
    title: '出发→砀山南',
    detail: '🚄 G1567 北京南 16:22 → 砀山南 20:45｜检票口 10A/10B',
    type: 'trip',
    calendar: '飞行计划',
    memo: 'G1567 · 北京南16:22发 · 砀山南20:45到 · 历时4h23min'
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
  // ── 四月 · 北影节 ──
  {
    date: '2026-04-18',
    month: 4,
    emoji: '🎬',
    title: '北影节：穿普拉达的女王',
    detail: '🎬 北影节 · 穿普拉达的女王｜18:00 英皇IMAX激光厅（建国门）',
    type: 'note',
    calendar: '',
    memo: '致命赶场第一场，看完直奔学院南路'
  },
  {
    date: '2026-04-18',
    month: 4,
    emoji: '🔥',
    title: '北影节：心火（二刷）',
    detail: '🔥 北影节 · 心火｜21:00 CGS中国巨幕（学院南路）',
    type: 'note',
    calendar: '',
    memo: '二刷！之前看过特别想再看一遍'
  },
  {
    date: '2026-04-19',
    month: 4,
    emoji: '🚀',
    title: '北影节：太空见习生',
    detail: '🚀 北影节 · 太空见习生｜15:00 CINITY巨幕（双井）×2张',
    type: 'note',
    calendar: ''
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
