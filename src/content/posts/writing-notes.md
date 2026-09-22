---
title: 小站写作手册
published: 2026-09-22
description: 新建文章、插入图片，以及发布到 GitHub Pages 的简单流程。
tags: [博客, Markdown]
category: 笔记
draft: false
---

## 新建文章

在博客项目目录运行：

```powershell
pnpm new-post my-first-note
```

打开 src/content/posts/ 中生成的 Markdown 文件，修改标题、日期、简介与正文。文件名建议使用英文和短横线，标题可以使用中文。

## 图片与草稿

图片可以放在 public/images/ 中，在正文里使用 Markdown 图片语法引用 /images/文件名。

文章顶部的 draft: true 表示草稿；准备发布时改为 draft: false。开发模式会显示草稿，正式构建会隐藏它们。

## 预览与发布

```powershell
pnpm dev
```

正式发布前执行 pnpm build 检查构建，再用 pnpm preview 预览正式版本。

```powershell
git add .
git commit -m "更新博客文章"
git push
```

仓库开启 GitHub Pages 的 GitHub Actions 部署后，每次推送到 main 都会自动更新网站。
