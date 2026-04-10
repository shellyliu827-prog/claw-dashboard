---
name: april-calendar-light-theme
overview: 将4月日历从深色主题改为浅色米白纸质感 + 无衬线字体风格，提升阅读舒适度
design:
  architecture:
    framework: html
  styleKeywords:
    - 纸质感
    - 米白
    - 现代简约
    - 无衬线
    - 轻手账
    - 清爽易读
  fontSystem:
    fontFamily: Inter, Noto Sans SC
    heading:
      size: 80px
      weight: 700
    subheading:
      size: 18px
      weight: 500
    body:
      size: 12px
      weight: 400
  colorSystem:
    primary:
      - "#1a1a1a"
      - "#f4c97a"
      - "#c97af4"
    background:
      - "#f5f3ef"
      - "#ffffff"
      - "#ede9e3"
    text:
      - "#1a1a1a"
      - "#555555"
      - "#999999"
    functional:
      - "#fffbf0"
      - "#f8f0ff"
      - "#f0f7f0"
      - "#fffce8"
todos:
  - id: redesign-calendar-light
    content: 将 april-2026.html 整体改为浅色纸质感风格：替换字体为 Inter + Noto Sans SC，重构全部 CSS 颜色体系（背景/文字/边框/卡片），更新游戏卡片内联样式为浅色版本
    status: completed
---

## 用户需求

对已有的 `april-2026.html` 4月日历页面进行视觉重构：

### 核心问题

- 深色背景阅读费力
- 楷体（Caveat 手写字体）不够清晰易读

### 改版方向

- **背景**：深色 → 浅色纸质感（米白/米灰系）
- **字体**：Caveat 手写字体 → 现代无衬线字体，清爽简洁

### 功能内容保持不变

- 日历结构、所有标注事件（婚礼、生日、假期、今日等）
- 底部 Q2 主线目标卡片（9张）
- 顶部目标徽章栏
- 照片/心情占位区

## 技术方案

### 修改文件

仅修改 `/Users/shelly0827/WorkBuddy/20260407154953/april-2026.html`，全量替换 CSS 样式部分，HTML 结构不做任何改动。

### 字体方案

- 移除 `Caveat`（手写感强、辨识度低）
- 引入 `Inter`（现代感强、无衬线、数字和英文极佳）
- 中文保留 `Noto Sans SC`，加载权重 300/400/500
- 标题大字用 `Inter` 700 weight，清爽有力

### 颜色体系重构

| 元素 | 旧值 | 新值 |
| --- | --- | --- |
| body 背景 | #1a1a1a | #f5f3ef（暖米白） |
| 普通日格背景 | #242424 | #ffffff |
| empty 日格 | #1e1e1e | #ede9e3 |
| today 日格 | #272318 | #fffbf0 |
| wedding 日格 | 深紫渐变 | #f8f0ff |
| holiday 日格 | #222a22 | #f0f7f0 |
| 目标卡片 | #242424 | #ffffff |
| 日期数字 | #fff | #1a1a1a |
| 次要文字 | #666 | #888 |
| 进度条底色 | #333 | #e8e5e0 |
| photo-hint 虚线 | #333 | #d0ccc6 |
| 背景装饰气泡 | opacity 0.04 暖色 | opacity 0.06 低饱和浅色 |
| 游戏卡片（内联style） | 深色背景 | 对应浅色（蓝白/橙白/紫白） |


### 实现原则

- 只改 `<style>` 标签内容 + 三个游戏卡片的 `style=""` 内联属性
- 所有特殊日期（婚礼/生日/假期/今日）的颜色标记继续保留，仅换成浅色系对应版本
- 事件标签背景透明度适当提高，保证在浅背景上可见

## 设计风格

浅色纸质感日历，整体走"轻文具/手账本"的现代简约路线。米白底色模拟纸张质感，配合细描边日格，清爽不杂乱。

### 标题区

月份大字 "April" 用 Inter 700，深灰色（#1a1a1a），年份小字用字距拉宽的 Inter 300，颜色 #999。去掉发光文字阴影，改为干净的深色无装饰呈现。

### 日格设计

- 普通日格：白色背景，1px #e8e4de 细线边框，轻微圆角
- hover 态：背景微变 #faf8f5，边框色略深
- 今日：#fffbf0 暖黄底，#e8c840 细边框
- 婚礼日：#f8f0ff 浅紫底，#c97af4 细边框
- 假期日：#f0f7f0 浅绿底，#7acf7a 细边框
- 柏源生日：#fffce8 鹅黄底，#f4dc64 细边框
- empty 日格：#ede9e3，边框更浅

### 事件标签

在浅色背景上改用更深的色调（透明度提高），确保对比度可读。

### 目标卡片

白色背景，#e8e4de 细边框，描述文字 #888，标题 #333，整体干净轻盈。

### 底部装饰气泡

改为极淡的暖米色和浅紫色，opacity 提高到 0.08 但保持低饱和，作为背景层次感而非突出元素。