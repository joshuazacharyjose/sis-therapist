'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
}

export function ScrollReveal({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation(threshold)

  return (
    <div
      ref={ref as any}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
