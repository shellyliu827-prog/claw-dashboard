---
name: q2-goals-cinema
overview: 在 q2-2026.html 新增"看电影"季度目标，包含《挽救计划》《我许可》两部待看影片，并修正 header 目标计数。
todos:
  - id: add-movie-goal
    content: 在 q2-2026.html 末尾新增"看电影"goal-row（含《挽救计划》《我许可》待看标签），并将 header 更新为 9 条主线目标
    status: completed
  - id: deploy
    content: 执行 Netlify 部署命令，将改动推送到线上
    status: completed
    dependencies:
      - add-movie-goal
---

## 用户需求

在 `q2-2026.html` 的"主线进度"区块末尾新增一条"看电影"季度目标，同时修正 header 中的目标数量计数。

## 产品概述

年度看板网站 Q2 季度页面，记录季度目标进度。新增"看电影"目标条目，列出本季想看的两部电影并标注待看状态。

## 核心功能

- 在"补录历史舞蹈记录"goal-row 之后新增"看电影"goal-row，图标 🎬，hint 为"Q2 想看清单"
- 内容区列出《挽救计划》《我许可》两部电影，各带"待看"状态标签
- 将 header 中"7 条主线目标"更正为"9 条主线目标"（当前实际已有 8 条 + 新增 1 条 = 9 条）
- 改完后部署到 Netlify

## 技术栈

纯 HTML 文件修改，沿用现有 `q2-2026.html` 的 CSS 变量和 class 结构，无需引入新依赖。

## 实现方案

直接在 `q2-2026.html` 做两处定点修改：

1. **新增 goal-row**：在第 436 行 `</div>` 与第 438 行 `</div>（关闭 goals-section）` 之间插入新目标块，复用现有 `.goal-row` / `.goal-top` / `.checkin-area` 结构；电影列表用两行 `<div>` 各含电影名和"待看"小标签，小标签样式与现有 `color:var(--text-muted)` 风格保持一致，加一个浅色圆角标签区分"待看"状态。

2. **修正计数**：将第 320 行 `7 条主线目标` 改为 `9 条主线目标`。

3. **部署**：改完后执行 Netlify 部署命令推送线上。

## 实现注意事项

- 严格复用现有 CSS class，不新增 style 标签，仅在行内 style 做微调
- 不改动其他任何目标条目，blast radius 最小
- 部署命令路径使用 memory 中记录的完整路径

## 目录结构

```
/Users/shelly0827/WorkBuddy/20260407154953/
└── q2-2026.html   # [MODIFY] 新增"看电影"goal-row，修正 header 目标数量为 9 条
```