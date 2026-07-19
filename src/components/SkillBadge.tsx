"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
      {name}
    </span>
  )
}
