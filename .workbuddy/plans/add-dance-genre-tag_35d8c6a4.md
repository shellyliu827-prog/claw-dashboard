---
name: add-dance-genre-tag
overview: 在 3 个 HTML 文件的舞蹈记录歌名前加舞种标签：6条加 [MV]，3/21 Heesi 那条加 [CHOREO]
todos:
  - id: add-mv-tag-january
    content: 修改 january-2026.html，3 条舞蹈记录歌名前加 [MV] 标签
    status: completed
  - id: add-mv-tag-march-april
    content: 修改 march-2026.html（[MV]/[CHOREO]）和 april-2026.html（[MV]）共 4 条记录
    status: completed
    dependencies:
      - add-mv-tag-january
---

## 用户需求

在舞蹈课记录的歌名前加上对应舞种标签，格式为 `💃 [舞种] 歌曲名`。

## 涉及记录

共 7 条，分布在 3 个 HTML 文件中：

| 文件 | 日期 | 改前 | 改后 |
| --- | --- | --- | --- |
| january-2026.html | 1/2 | 💃 Dreams Come True | 💃 [MV] Dreams Come True |
| january-2026.html | 1/11 | 💃 说出愿望吧 | 💃 [MV] 说出愿望吧 |
| january-2026.html | 1/28 | 💃 Love me more | 💃 [MV] Love me more |
| march-2026.html | 3/7 | 💃 Rude | 💃 [MV] Rude |
| march-2026.html | 3/21 | 💃 花 - 藤井风 | 💃 [CHOREO] 花 - 藤井风 |
| april-2026.html | 4/2 | 💃 Over Drive | 💃 [MV] Over Drive |
| april-2026.html | 4/4 | 💃 Delulu | 💃 [MV] Delulu |


## 技术方案

直接对 3 个 HTML 文件做精确文本替换，只改歌名前的文字内容，不动样式和结构。

## 修改明细

**january-2026.html**（3 处）

- 第 62 行：`💃 Dreams Come True` → `💃 [MV] Dreams Come True`
- 第 80 行：`💃 说出愿望吧` → `💃 [MV] 说出愿望吧`
- 第 106 行：`💃 Love me more` → `💃 [MV] Love me more`

**march-2026.html**（2 处）

- 第 71 行：`💃 Rude` → `💃 [MV] Rude`
- 第 92 行：`💃 花 - 藤井风` → `💃 [CHOREO] 花 - 藤井风`

**april-2026.html**（2 处）

- 第 357 行：`💃 Over Drive` → `💃 [MV] Over Drive`
- 第 370 行：`💃 Delulu` → `💃 [MV] Delulu`

## 目录结构

```
/Users/shelly0827/WorkBuddy/20260407154953/
├── january-2026.html   # [MODIFY] 第62、80、106行，加 [MV] 标签
├── march-2026.html     # [MODIFY] 第71行加 [MV]，第92行加 [CHOREO]
└── april-2026.html     # [MODIFY] 第357、370行，加 [MV] 标签
```