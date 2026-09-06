# Myworker · 全栈工程师个人作品集

线上演示：**https://myworker-three.vercel.app**

面向求职展示的个人作品集网站：突出技术能力、项目经验与个人品牌，一页呈现给 HR / 技术面试官。

## 功能

- **首页 Hero**：头像 ＋ 姓名 ＋ 一句话介绍，CTA（查看项目 / 联系我）
- **关于我**：个人简介 ＋ 技能标签云（Java / TypeScript / Python / Vue / React / Android）＋ 简历下载
- **项目展示**：卡片网格（截图 / 名称 / 一句话描述 / 技术栈标签），点击展开详情（完整描述、技术亮点、GitHub 链接），按技术栈筛选
- **联系方式**：GitHub、邮箱、微信
- **体验**：响应式（桌面 3 列 / 平板 2 列 / 移动 1 列 ＋ 底部导航），深色 / 浅色主题切换，Framer Motion 动效

## 技术栈

| 层 | 选型 |
|---|---|
| 框架 | Next.js 14（App Router，Vercel 原生支持） |
| 语言 | TypeScript |
| 样式 | Tailwind CSS |
| 动画 | Framer Motion |
| 内容 | JSON 静态数据（无需数据库） |

## 本地运行

```bash
npm install
npm run dev    # http://localhost:3000
```

## 相关文档

- `PRD.md` — 产品需求（功能清单与验收口径）
- `TECH_DESIGN.md` — 技术设计（架构、目录、组件划分）
