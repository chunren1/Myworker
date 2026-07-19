"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { profile } from "@/data/profile"

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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            下载简历
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
