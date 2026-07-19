"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { profile } from "@/data/profile"
import { GithubIcon, MailIcon, CopyIcon, CheckIcon } from "./Icons"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.social.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          联系我
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          如果有合作机会或任何问题，欢迎随时联系
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300">
            <MailIcon />
            <span>{profile.social.email}</span>
            <button
              onClick={copyEmail}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
              aria-label="复制邮箱"
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
          </div>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
          >
            <GithubIcon />
            {profile.social.github.replace("https://", "")}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
