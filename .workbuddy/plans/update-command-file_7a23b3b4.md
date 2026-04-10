---
name: update-command-file
overview: 把桌面的「我的主页.command」从本地打开 HTML 改为直接用浏览器打开 Netlify 线上地址。
todos:
  - id: update-command-file
    content: 将桌面 `我的主页.command` 的打开目标从本地路径改为 Netlify 线上地址
    status: completed
---

## 用户需求

更新桌面的 `我的主页.command` 快捷方式文件，使其改为直接在浏览器中打开 Netlify 线上地址，而不是打开本地 HTML 文件（本地打开会因 CORS 策略导致 CSV 加载失败，页面数据无法显示）。

## 核心功能

- 双击 `.command` 文件后，自动在默认浏览器中打开 `https://melodic-daffodil-e72069.netlify.app/index.html`
- 不再尝试打开本地 HTML 文件

## 技术方案

直接将 `.command` 文件中的 `open` 命令目标从本地文件路径替换为 Netlify URL。macOS 的 `open` 命令支持直接打开 URL，会调用系统默认浏览器。

## 修改目标

**文件**：`/Users/shelly0827/Desktop/我的主页.command`

**当前内容**：

```
#!/bin/bash
open "/Users/shelly0827/WorkBuddy/20260407154953/index.html"
```

**修改后**：

```
#!/bin/bash
open "https://melodic-daffodil-e72069.netlify.app/index.html"
```

改动极小，一行替换，无副作用。