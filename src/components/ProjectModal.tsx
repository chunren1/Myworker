"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { Project } from "@/types"
import SkillBadge from "./SkillBadge"
import { CloseIcon, ImagePlaceholder, GithubIcon } from "./Icons"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (project) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-gray-900 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto border border-gray-200 dark:border-gray-800"
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="关闭"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-400 overflow-hidden">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <ImagePlaceholder />
              )}
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {project.longDescription}
            </p>

            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">技术亮点</h3>
              <ul className="space-y-1.5">
                {project.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.map((tech) => (
                <SkillBadge key={tech} name={tech} />
              ))}
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <GithubIcon />
              GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
