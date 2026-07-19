"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { profile } from "@/data/profile"
import { DownloadIcon } from "./Icons"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          关于我
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {profile.bio}
        </motion.p>
        <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          技能标签
        </motion.h3>
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {skill}
            </span>
          ))}
        </motion.div>
        <motion.div variants={itemVariants}>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <DownloadIcon />
            下载简历
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
