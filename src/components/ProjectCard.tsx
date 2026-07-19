"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Project } from "@/types"
import SkillBadge from "./SkillBadge"
import { ImagePlaceholder } from "./Icons"

interface ProjectCardProps {
  project: Project
  index: number
  onSelect: (project: Project) => void
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onSelect(project)}
      className="group cursor-pointer bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300"
    >
      <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-600 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <SkillBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
