---
name: chen-portfolio
description: 陈永康个人作品集项目开发 Skill — Next.js + Tailwind + TypeScript 单页滚动网站，适用于个人作品集、简历展示类型项目的 AI 辅助开发
license: MIT
compatibility: opencode
metadata:
  author: 陈永康
  stack: nextjs-tailwind-typescript
  workflow: portfolio-development
---

## 项目特征

- 单页滚动（One-page scroll），4个 Section：Hero → About → Projects → Contact
- 静态生成（SSG），无后端无数据库
- 深色/浅色主题切换（next-themes）
- 动画使用 Framer Motion（入场 + 滚动触发）
- 部署到 Vercel

## 5 步开发流程

### 1. 需求研究 (RESEARCH.md)
明确目标用户、竞品调研、核心功能列表。

### 2. 产品需求文档 (PRD.md)
明确做什么/不做什么，功能优先级（MVP / V2）。

**推荐 Prompt**：
```
请帮我把这个需求扩展成完整的 PRD，包含：
产品概述、目标用户、功能列表及优先级、
界面设计要求、技术栈建议、非功能性需求
```

### 3. 技术设计 (TECH_DESIGN.md)
- 技术栈选型
- 目录结构
- 数据模型 (Profile / Project 接口)
- 关键技术点

### 4. AI 代理指令 (AGENTS.md)
包含技术栈、目录结构、代码规范、架构约束、限制条件。

### 5. 实现与迭代 (Build)
逐个 Section 实现，按此顺序：
```
Hero → About → Projects(含Card+Modal) → Contact → Navbar → Footer
```

## 项目文件清单

```
├── AGENTS.md           # AI 代理指令
├── PRD.md              # 产品文档
├── RESEARCH.md         # 需求研究
├── TECH_DESIGN.md      # 技术设计
├── src/
│   ├── app/            # layout, page, providers
│   ├── components/     # 各 Section 组件
│   ├── data/           # profile.ts + projects.ts
│   └── types/          # 类型定义
└── public/images/      # 项目截图
```

## 关键约定

### Tailwind 类名顺序
布局 → 尺寸 → 间距 → 颜色 → 字体 → 动画

### 组件规范
- 函数组件 + export default
- 文件 PascalCase
- 数据文件 camelCase
- 图片用 next/image
- 外部链接加 target="_blank" rel="noopener noreferrer"

### 性能目标
- Lighthouse ≥ 90
- 首屏 < 2s
- 响应式：桌面3列 / 平板2列 / 手机1列

## 使用时机
当需要开发个人作品集 / 简历网站，或任何 Next.js + Tailwind 单页项目时使用此 skill。
