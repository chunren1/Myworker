# AGENTS.md — AI 代理指令

## 项目概述
个人作品集网站，全栈工程师求职展示用。单页滚动、Next.js + Tailwind + TypeScript。

## 技术栈
- 框架：Next.js 14 (App Router)
- 语言：TypeScript（严格模式）
- 样式：Tailwind CSS（仅原子类，禁止其他 CSS 方案）
- 动画：Framer Motion
- 主题：next-themes
- 部署：Vercel

## 项目结构
```
src/
├── app/           # App Router 页面
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/    # UI 组件，每个独立文件
├── data/          # 静态数据（projects.ts, profile.ts）
└── types/         # 类型定义 (index.ts)
```

## 代码规范
- 使用函数组件，禁止类组件
- 组件文件使用 PascalCase（如 `ProjectCard.tsx`）
- 工具/数据文件使用 camelCase（如 `projects.ts`）
- Tailwind 类名按此顺序分组：布局 → 尺寸 → 间距 → 颜色 → 字体 → 动画
- 所有组件用 `export default`
- 图片用 `next/image` 组件
- 链接用 `next/link`，外部链接加 `target="_blank" rel="noopener noreferrer"`

## 架构约束
- 数据流：所有数据从 `src/data/` 读取 → 组件消费 → 无状态管理
- 项目筛选使用前端 filter，纯客户端操作
- 主题切换使用 next-themes `ThemeProvider`
- 动画使用 Framer Motion `motion.div` + `useInView`
- 页面滚动使用原生 `id` 锚点 + `scroll-behavior: smooth`

## 页面 Section 顺序
1. Hero（全屏、大标题、CTA）
2. About（简介 + 技能标签 + 简历下载）
3. Projects（筛选栏 + 卡片网格 + 点击弹窗详情）
4. Contact（链接 + 邮箱）

## 限制条件
- 不引入任何 UI 组件库（Antd / Shadcn / 等）
- 不使用数据库或后端 API
- 不添加路由页面（纯单页）
- 不在客户端发送网络请求
- 不修改 `next.config.ts` 默认配置（除了 images domains）

## 验收标准
- Lighthouse Performance ≥ 90
- 所有页面无 TypeScript 错误
- 所有链接正常工作
- 响应式：桌面(3列) / 平板(2列) / 手机(1列)
