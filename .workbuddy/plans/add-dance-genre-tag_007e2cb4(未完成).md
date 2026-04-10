---
name: add-dance-genre-tag
overview: 在 january-2026.html、march-2026.html、april-2026.html 三个文件的舞蹈记录中，在歌名前加上 [MV] 舞种标签
todos:
  - id: add-mv-tag-january
    content: 在 january-2026.html 的 3 条舞蹈记录歌名前加上 [MV] 标签
    status: pending
  - id: add-mv-tag-march-april
    content: 在 march-2026.html 和 april-2026.html 的共 4 条舞蹈记录歌名前加上 [MV] 标签
    status: pending
    dependencies:
      - add-mv-tag-january
---

## 用户需求

在现有舞蹈课记录的歌名前统一添加舞种标签 `[MV]`，格式为：

```
💃 [MV] 歌曲名
```

## 涉及记录

共 7 条舞蹈记录，分布在 3 个 HTML 文件中：

| 文件 | 日期 | 原文本 | 修改后 |
| --- | --- | --- | --- |
| january-2026.html | 1/2 | 💃 Dreams Come True | 💃 [MV] Dreams Come True |
| january-2026.html | 1/11 | 💃 说出愿望吧 | 💃 [MV] 说出愿望吧 |
| january-2026.html | 1/28 | 💃 Love me more | 💃 [MV] Love me more |
| march-2026.html | 3/7 | 💃 Rude | 💃 [MV] Rude |
| march-2026.html | 3/21 | 💃 花 - 藤井风 | 💃 [MV] 花 - 藤井风 |
| april-2026.html | 4/2 | 💃 Over Drive | 💃 [MV] Over Drive |
| april-2026.html | 4/4 | 💃 Delulu | 💃 [MV] Delulu |


## 技术方案

直接对 3 个 HTML 文件进行文本替换，在每条舞蹈事件的 emoji 之后、歌曲名之前插入 `[MV] ` 标签文字。

### 修改点

**january-2026.html**（3 处）

- 第 62 行：`💃 Dreams Come True` → `💃 [MV] Dreams Come True`
- 第 80 行：`💃 说出愿望吧` → `💃 [MV] 说出愿望吧`
- 第 106 行：`💃 Love me more` → `💃 [MV] Love me more`

**march-2026.html**（2 处）

- 第 71 行：`💃 Rude` → `💃 [MV] Rude`
- 第 92 行：`💃 花 - 藤井风` → `💃 [MV] 花 - 藤井风`

**april-2026.html**（2 处）

- 第 357 行：`💃 Over Drive` → `💃 [MV] Over Drive`
- 第 370 行：`💃 Delulu` → `💃 [MV] Delulu`

### 目录结构

```
/Users/shelly0827/WorkBuddy/20260407154953/
├── january-2026.html   # [MODIFY] 第62、80、106行，歌名前加 [MV]
├── march-2026.html     # [MODIFY] 第71、92行，歌名前加 [MV]
└── april-2026.html     # [MODIFY] 第357、370行，歌名前加 [MV]
```