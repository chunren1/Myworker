import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "vibe-music",
    title: "vibeMusic",
    description: "全栈音乐应用，自有 VIP 账号获取高品质音乐",
    longDescription:
      "一款不依赖第三方破解、完全使用自有 VIP 账号获取高品质音乐的全栈学习项目。旨在模拟并超越主流音乐 App 的核心听歌体验，从 Java 后端到 Vue 前端再到 Android 客户端，完整实践了现代 Web 全栈开发流程。",
    techStack: ["Java", "Spring Boot", "Vue", "Android", "MySQL"],
    image: "/images/vibe-architecture.png",
    githubUrl: "https://github.com/chunren1/vibeMusic",
    highlights: [
      "Java Spring Boot 后端 API 设计与实现",
      "Vue 3 前端响应式界面",
      "Android 原生客户端开发",
      "自有 VIP 账号鉴权与音乐流获取",
    ],
  },
  {
    id: "job-rader",
    title: "JobRader",
    description: "求职辅助工具，帮助追踪和分析招聘信息",
    longDescription:
      "一款面向求职者的招聘信息雷达工具，帮助用户追踪、筛选和分析招聘信息。基于 TypeScript 全栈开发，提供高效的数据处理和可视化展示。",
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    image: "/images/vibe-homepage.png",
    githubUrl: "https://github.com/chunren1/JobRader",
    highlights: [
      "TypeScript 全栈开发",
      "招聘信息聚合与分析",
      "数据可视化展示",
      "高效的搜索与筛选机制",
    ],
  },
  {
    id: "myrag",
    title: "Myrag",
    description: "基于 RAG 架构的智能问答系统",
    longDescription:
      "基于检索增强生成（RAG）架构的智能问答系统，结合 Python 生态的 NLP 工具与向量数据库，实现文档知识的智能检索与精准问答。",
    techStack: ["Python", "FastAPI", "LangChain", "Vector DB"],
    image: "/images/vibe-playlist.png",
    githubUrl: "https://github.com/chunren1/Myrag",
    highlights: [
      "RAG 架构设计与实现",
      "LangChain 框架应用",
      "向量数据库集成",
      "文档智能检索与问答",
    ],
  },
  {
    id: "java-info-hub",
    title: "JavaInfoHub",
    description: "Java 技术资讯与资源聚合平台",
    longDescription:
      "一个 Java 技术资讯和资源聚合平台，整合 Java 生态的最新技术动态、开源项目和学习资源，为 Java 开发者提供一站式的信息获取入口。",
    techStack: ["Java", "Spring Boot", "Thymeleaf", "Bootstrap"],
    image: "/images/vibe-player.png",
    githubUrl: "https://github.com/chunren1/JavaInfoHub",
    highlights: [
      "Java 技术资讯聚合",
      "Spring Boot 后端开发",
      "Thymeleaf 服务端渲染",
      "RESTful API 设计",
    ],
  },
]
