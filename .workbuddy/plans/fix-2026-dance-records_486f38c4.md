---
name: fix-2026-dance-records
overview: 修正 dance.html 中2026年舞蹈记录数据，将连堂课补充为2条，并同步更新 index.html 主页数字
todos:
  - id: fix-dance-data
    content: 修正 dance.html 中 records2026 数组（补全连堂课为13条）、total、yearData、monthData 四处数据
    status: completed
  - id: fix-index-number
    content: 修正 index.html 主页💃卡片数字从 7 改回 13
    status: completed
    dependencies:
      - fix-dance-data
---

## 用户需求

修正 `dance.html` 中 2026 年舞蹈记录的数据错误：连堂课（两节课）被错误地只记录了 1 条，实际每节课应单独记录一条。

## 问题说明

- 2026 年共有 6 个连堂场次（每场 2 节课）+ 1 个独立课，共 **13 节**
- 当前 `dance.html` 的 `records2026` 数组只有 7 条，少了 6 条
- 相关汇总数字也需同步修正：总节数（411→417）、年度数据、月度数据
- `index.html` 主页💃卡片数字从 7 改回正确的 **13**

## 正确的 2026 年完整记录（13 条）

| 日期 | 老师 | 歌曲 | 节数 |
| --- | --- | --- | --- |
| 2026-01-02 | 小钰 | Dreams Come True | 2节 |
| 2026-01-11 | 九九 | 说出愿望吧 | 2节 |
| 2026-01-28 | 糖糖 | Love me more | 2节 |
| 2026-03-07 | 诗宇 | Rude | 1节 |
| 2026-03-21 | Heesi | 花-藤井风 | 2节 |
| 2026-04-02 | 四火 | Over Drive | 2节 |
| 2026-04-04 | 兔兔子 | Delulu | 2节 |


## 修改范围

仅涉及两个 HTML 文件的数据层修正，无新增功能，无结构变更。

## 需修改的具体数据

### dance.html 中需更新的 4 处数据

**1. `records2026` 数组**（629-637行）：从 7 条扩展为 13 条，连堂课补写第 2 条记录

**2. `total` 常量**（639行）：`411` → `417`

**3. `yearData`**（612行）：`'2026': 7` → `'2026': 13`

**4. `monthData`**（620行）：

- `'2026-01': 3` → `'2026-01': 6`（小钰+2、九九+2、糖糖+2，共+3）
- `'2026-03': 2` → `'2026-03': 3`（Heesi+1）
- `'2026-04': 2` → `'2026-04': 4`（四火+1、兔兔子+1）

### index.html 中需更新的 1 处

**💃卡片数字**（344行）：`7` → `13`

## 目录结构

```
project-root/
├── dance.html   # [MODIFY] 修正 records2026（7条→13条）、total（411→417）、yearData['2026']（7→13）、monthData 月度数字
└── index.html   # [MODIFY] 主页💃卡片数字 7 → 13
```