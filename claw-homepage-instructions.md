# 主页维护指令 · 给 Claw

> 把这份文档发给 Claw（ClawBot），之后直接在微信聊天框说一句话就能更新主页。

---

## 你是谁 / 背景

我有一个个人年度看板网站，部署在 Netlify：
**https://melodic-daffodil-e72069.netlify.app**

本地文件在：`/Users/shelly0827/WorkBuddy/20260407154953/`

主要文件：
- `index.html` — 年度主页（季度目标 / 统计数字 / 灵感库 / 时间轴）
- `dance-log.csv` — 舞蹈记录数据库（今年跳舞次数自动从这里算）
- `q2-2026.html` — Q2 详情页
- `dance.html` — 舞蹈看板（自动读 CSV）

部署命令（每次改完必须跑）：
```bash
cd /Users/shelly0827/WorkBuddy/20260407154953 && /Users/shelly0827/.workbuddy/binaries/node/workspace/node_modules/.bin/netlify deploy --dir=. --prod
```

---

## 我可能会对你说什么 → 你应该做什么

### 1. 新增舞蹈课记录
**触发词**：「今天跳了」/ 「刚上完课」/ 「记一节课」/ 「加一条舞蹈」

**你要做**：
1. 往 `dance-log.csv` 末尾追加一行：
   ```
   2026-xx-xx,老师名,舞种,歌名,北京,Gsteps门店名
   ```
   - 舞种枚举：`KPOP/MV` / `HIPHOP` / `JAZZ` / `HOUSE` / `CHOREO` / `URBAN`
   - 歌名不知道就空着（逗号保留）
   - 门店名不知道就写 `Gsteps`
2. 跑部署命令推到 Netlify
3. 回复我：「✅ 已记录：2026-xx-xx [老师] [舞种] [歌名]，今年共 N 节」

---

### 2. 更新自媒体发帖数
**触发词**：「发了一条」/ 「发布了」/ 「自媒体 +1」/ 「统计数字更新」

**你要做**：
1. 找 `index.html` 里：
   ```html
   <div class="stat-num blue">17</div>
   <div class="stat-label">📱 自媒体发帖数</div>
   ```
   把 `17` 改成新数字
2. 跑部署命令
3. 回复我：「✅ 自媒体发帖数已更新为 N」

---

### 3. 更新灵感库（新增一条想法）
**触发词**：「新灵感」/ 「记一个选题」/ 「加个想法」

**你要做**：
1. 在 `index.html` 里找「自媒体灵感库」那个 section，在待做列表中插入一条新卡片，格式参考现有卡片：
   ```html
   <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 12px;background:var(--bg);border-radius:8px;border:1px solid var(--border-light);">
     <span style="font-size:16px;line-height:1.4;">🎬</span>
     <div style="flex:1;">
       <div style="font-size:13px;font-weight:500;color:var(--text);">【灵感标题】</div>
       <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">【简短描述】· 2026-xx-xx</div>
     </div>
     <span style="font-size:11px;padding:2px 8px;border-radius:8px;background:rgba(255,200,50,0.12);color:#b89010;font-weight:500;white-space:nowrap;">待做</span>
   </div>
   ```
2. 同步更新顶部的「共 N 条待选题」数字
3. 同步追加到 `/Users/shelly0827/WorkBuddy/Claw/.workbuddy/ideas.md`（格式：`- [ ] 标题 — 描述 (日期)`）
4. 跑部署命令
5. 回复我确认

---

### 4. 把一条灵感标记为「已发」
**触发词**：「发出去了」/ 「[某条灵感]已发」/ 「划掉某条」

**你要做**：
1. 在 `index.html` 找到对应的灵感卡片，把状态 badge 从「待做」改为「已发」，加上 `opacity:0.6` + 标题加删除线
2. 更新顶部「待做 N」数字
3. 同步在 `ideas.md` 把对应条目 `- [ ]` 改为 `- [x]`
4. 跑部署命令

---

### 5. 添加时间轴事件
**触发词**：「时间轴加一个」/ 「X月有个XXX」/ 「加个日程」

**你要做**：
1. 在 `index.html` 找到对应月份的 `tl-events` div，插入：
   ```html
   <div class="tl-event">📅 x/x 事件名</div>
   ```
   婚礼用 `wedding` class，生日用 `birthday` class，其他普通就不加 class
2. 同时把该月的 `tl-dot` 加上 `has-event` class（让点变金色）
3. 跑部署命令

---

### 6. 更新 Q2 已完成目标 / 进行中数字
**触发词**：「已完成目标 +1」/ 「完成了某个主线」/ 「Q2 进行中改成 N」

**你要做**：
1. 找 `index.html` 里对应的 stat-card，改数字
2. 跑部署命令

---

## 注意事项

- **每次改完必须跑部署命令**，否则线上不更新
- 老师名字不能含逗号（会破坏 CSV 解析）
- 跳舞次数不用手动改，`index.html` 会自动读 CSV 计算
- 如果我说的信息不完整，直接问我补充，别自己猜关键数据

---

*文件位置：/Users/shelly0827/WorkBuddy/20260407154953/claw-homepage-instructions.md*
