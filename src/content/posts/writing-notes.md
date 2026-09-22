---
title: A Guide to Writing on This Blog
published: 2026-09-22
description: A simple workflow for creating posts, adding images, and publishing to GitHub Pages.
tags: [Blogging, Markdown]
category: Notes
draft: true
---

## Create a Post

Run this command from the blog project directory:

```powershell
pnpm new-post my-first-note
```

Open the generated Markdown file in `src/content/posts/` and edit its title, date, description, and body. Use lowercase English words separated by hyphens for the filename. The title can use any language.

## Images and Drafts

Place images in `public/images/` and reference them in the post using Markdown image syntax, such as `![Image description](/images/photo.jpg)`.

Set `draft: true` in the frontmatter to keep a post as a draft. Change it to `draft: false` when it is ready to publish. Drafts appear in development mode but are excluded from production builds.

## Preview and Publish

```powershell
pnpm dev
```

Before publishing, run `pnpm build` to check the production build, then use `pnpm preview` to preview it locally.

```powershell
git add .
git commit -m "Update blog posts"
git push
```

Once GitHub Actions deployment is enabled for GitHub Pages, each push to `main` automatically rebuilds and updates the website.
