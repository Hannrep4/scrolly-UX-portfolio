'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface AnimatedRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function AnimatedReveal({
  children,
  delay = 0,
  className,
}: AnimatedRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
