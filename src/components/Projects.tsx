"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { projects } from "@/data/projects"
import { Project } from "@/types"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"

const allTags = Array.from(new Set(projects.flatMap((p) => p.techStack)))

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filtered = activeFilter
    ? projects.filter((p) => p.techStack.includes(activeFilter))
    : projects

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          项目作品
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              activeFilter === null
                ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            全部
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                activeFilter === tag
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">该分类下暂无项目</p>
        )}
      </motion.div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
