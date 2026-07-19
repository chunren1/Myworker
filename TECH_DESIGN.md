# 个人作品集网站 — 技术设计文档

## 技术栈
| 层 | 选型 | 理由 |
|------|------|------|
| 框架 | Next.js 14 (App Router) | Vercel 原生支持，SSG/SSR 灵活 |
| 语言 | TypeScript | 类型安全，AI 生成友好 |
| 样式 | Tailwind CSS | 原子化 CSS，开发快 |
| 动画 | Framer Motion | 轻量、声明式动画 |
| 内容 | JSON / MDX 静态数据 | 无需数据库，Vercel 部署 |

## 项目结构
```
portfolio/
├── public/
│   └── images/          # 项目截图、头像
├── src/
│   ├── app/
│   │   ├── layout.tsx   # 根布局（导航 + 主题 + Footer）
│   │   ├── page.tsx     # 首页（各 Section 组合）
│   │   └── globals.css  # 全局样式 + Tailwind
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Contact.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── SkillBadge.tsx
│   │   └── Navbar.tsx
│   ├── data/
│   │   ├── projects.ts  # 项目数据
│   │   └── profile.ts   # 个人信息
│   └── types/
│       └── index.ts     # 类型定义
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## 数据模型
```typescript
// 项目
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
}

// 个人信息
interface Profile {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  skills: string[];
  social: {
    github: string;
    email: string;
    wechat?: string;
  };
  resumeUrl?: string;
}
```

## 关键技术方案
- **主题切换**：next-themes（集成 Tailwind dark class）
- **动画**：Framer Motion `useInView` 触发滚动入场
- **项目筛选**：前端 filter 按 techStack 匹配
- **部署**：GitHub 推 main 分支 → Vercel 自动部署

## 关键技术点
1. OG 图片用 `@vercel/og` 或 `next/og` 生成
2. 图片用 WebP 格式 + next/image 优化
3. 项目截图用 GitHub README 已有的图片或本地截图
