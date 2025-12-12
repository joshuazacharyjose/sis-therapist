'use client'

import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation'

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation(0.3)
  const hours = useCountUp(600, 650, 0, isVisible)
  const years = useCountUp(2, 650, 0, isVisible)

  return (
    <section ref={ref as any} className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <p className="section-tag text-center mb-12">Qualifications</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary dark:text-primary-light mb-2">
              {hours}+
            </div>
            <div className="text-slate-600 dark:text-slate-300">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary dark:text-primary-light mb-2">
              {years}+
            </div>
            <div className="text-slate-600 dark:text-slate-300">Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary dark:text-primary-light mb-2">
              M.Sc.
            </div>
            <div className="text-slate-600 dark:text-slate-300">
              Counselling Psychology
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
