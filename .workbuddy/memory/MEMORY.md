# MEMORY.md - Long-term Memory

## 用户信息
- **称呼**: 君怡（刘君怡）
- **公司**: 腾讯
- **部门/业务**: 腾讯视频 - 品牌营销/内容营销方向
- **使用偏好**: 不喜欢复杂流程，喜欢直接高效的方式
- **目标**: 用WorkBuddy协助日常办公

## 工作内容画像（基于腾讯文档分析）
- **核心职能**: 品牌活动策划与营销传播
- **主要项目**:
  - 腾讯视频 Offline（线下品牌活动）- 2026年重点项目
  - JUMP（腾讯视频年轻品牌）- 音乐节、嘉年华等线下活动
  - 腾讯视频9号开放日（OpenDay）- 月度品牌活动
  - 金鹅荣誉颁奖晚宴 - 年度大型活动
  - 《双城之战》沉浸式音乐秀 - IP联动活动
  - 综艺IP线下活动梳理
- **日常工作类型**:
  - 活动策划方案撰写（创意策划、执行规划）
  - 传播规划与传播小结
  - 嘉宾/邀请名单管理（Excel表格）
  - 活动台本编写（红毯台本、直播台本）
  - 座位图/工作证/物料管理
  - 品牌价值分析文档
  - 公益活动策划（99公益日等）
- **常用文档类型**: 文档(doc/smartcanvas)、表格(sheet)、PPT(slide)、思维导图(mind)

## 个人背景
- 北京，腾讯视频品牌策划
- P人，记性差，不喜欢硬计划，但希望有主线不被日常淹没
- G社舞蹈卡160次，有效期2027/7/27，每周约上2节课
- 4/26 第一次参加朋友婚礼（安徽）

## Q2 2026 个人主线目标
1. 💃 舞蹈：G社每周2节顺其自然
2. 📖 阅读&写作：找回感觉，不设硬指标
3. 🦷 看牙：和室友约洗牙
4. 👂 看耳朵：右耳耳鸣去医院查
5. 🏠 断舍离：翻家里东西出掉闲置
6. 💰 财务：另一个对话负责
7. 📱 自媒体：把灵感库内容发出来


- 开会以腾讯会议为主
- 会议纪要用途：个人留档 + 让AI知情，以便后续工作讨论
- 偏好直接把原始文字稿/录音丢给AI，不自己做格式整理
- 已配置 Claw + iOS提醒事项 skill，灵感记录工作流已搭建（微信ClawBot随手记）

## 工具配置
- 腾讯文档MCP已配置（2026-04-07），Token手动配置方式
- Netlify 已部署（2026-04-08）：https://melodic-daffodil-e72069.netlify.app
  - 部署命令：cd /Users/shelly0827/WorkBuddy/20260407154953 && /Users/shelly0827/.workbuddy/binaries/node/versions/22.12.0/bin/node /Users/shelly0827/.workbuddy/binaries/node/workspace/node_modules/.bin/netlify deploy --dir=. --prod
  - 账号：shellyliu827@gmail.com
  - 国内需挂VPN访问（公司电脑默认挂，没问题）

## Q2 目标数据驱动维护规则（2026-04-09 改造完成）
- **唯一数据源**：`/Users/shelly0827/WorkBuddy/20260407154953/data.js`
- index.html / q2-2026.html / april-2026.html 三页均动态读取 data.js，改一处全同步
- **操作**：Q2 目标变更只需改 data.js 里的 Q2_GOALS 数组
  - status 字段：`active`(进行中) / `done`(已完成，自动置灰) / `skip`(跳过)
  - type 字段：`progress`(进度条) / `checkin`(文字状态) / `list`(子项清单)
  - 新增目标：在数组末尾加对象；删除：直接删对应对象
  - showInMonthBadge/showInMonthCard 控制是否在月度页显示
- 月度专属卡片（游戏等）放在 APRIL_EXTRA_CARDS 数组里

## 舞蹈记录维护流程（标准操作）
**数据文件**：`/Users/shelly0827/WorkBuddy/20260407154953/dance-log.csv`
**字段**：`date, teacher, genre, song, city, venue`
**展示页**：https://melodic-daffodil-e72069.netlify.app/dance.html（dance.html 和 index.html 均动态读取CSV）

**新增课程记录步骤**：
1. 往 CSV 末尾追加一行，格式：`2026-xx-xx,老师名,舞种,歌名,北京,Gsteps门店名`
2. 舞种枚举：`KPOP/MV` / `HIPHOP` / `JAZZ` / `HOUSE` / `CHOREO` / `URBAN`
3. 歌名没有填空即可（逗号保留）
4. 运行部署命令推送到 Netlify

**注意事项**：
- 老师名字段不能含逗号（会破坏CSV解析），如有特殊情况直接用常用名
- 页面所有统计数字（总节数/舞种/老师排行/月度热力图/年度柱状图）全部自动计算，无需手动改HTML
