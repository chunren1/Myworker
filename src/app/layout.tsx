import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "./providers"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "陈永康 | 全栈工程师",
  description: "全栈工程师个人作品集，展示项目经验与技术能力。Java / TypeScript / Python 全栈开发。",
  openGraph: {
    title: "陈永康 | 全栈工程师",
    description: "全栈工程师个人作品集，展示项目经验与技术能力。",
    type: "website",
    locale: "zh_CN",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "陈永康",
              jobTitle: "全栈工程师",
              url: `https://github.com/chunren1`,
              knowsAbout: ["Java", "TypeScript", "Python", "React", "Next.js", "Spring Boot"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
