---
name: q2-dance-progress
overview: 修改 q2-2026.html 舞蹈目标行，将进度条+打卡区域改为「本季已跳 X 节」数字展示
todos:
  - id: fix-q2-dance-progress
    content: 修改 q2-2026.html 舞蹈目标行：删除进度条，改为「本季已跳 4 节」文字展示
    status: completed
---

## 用户需求

Q2 看板（`q2-2026.html`）舞蹈目标行当前显示进度条 + 0% + "暂无记录"，实际 4 月已跳 4 节，需要修正展示。

## 产品概述

将舞蹈目标行的进度条+百分比替换为「本季已跳 X 节」的文字数字展示，不需要打卡列表。

## 核心功能

- 删除舞蹈行的 `progress-wrap` 进度条区域
- 将 `checkin-area` 改为显示「本季已跳 **4** 节」的静态文字（金色数字 + 普通文字）
- 数字 4 硬编码（Q2 内记录：4/2 四火×2节 + 4/4 兔兔子×2节）

## 技术栈

纯 HTML 静态文件，直接修改 `q2-2026.html`，无需引入新依赖。

## 实现方案

对 `q2-2026.html` 中舞蹈 `goal-row` 做最小改动：

1. 删除 `<div class="progress-wrap">…</div>` 整块
2. 将 `<div class="checkin-area">` 内容替换为带金色数字的统计文字，复用页面已有的 `var(--gold)` 和 `var(--text-sub)` 颜色变量，保持视觉一致性

## 实现细节

- 金色数字用 `<span style="color:var(--gold);font-weight:700;font-size:16px;">4</span>` 行内样式实现，避免新增 CSS 类
- 文字结构：`本季已跳 [金色数字4] 节`，放在 `.checkin-area` 容器内，字号与现有 `.checkin-empty`（11px）保持一致或略大（13px）

## 目录结构

```
project-root/
└── q2-2026.html  # [MODIFY] 舞蹈 goal-row：删除 progress-wrap，checkin-area 改为「本季已跳 4 节」文字
```