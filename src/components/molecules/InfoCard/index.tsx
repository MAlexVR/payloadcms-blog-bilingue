import React from 'react'
import { cn } from '@/lib/utils'

interface InfoCardProps {
  icon: React.ReactNode
  iconBgColor: string
  title: string
  description: string
}

export function InfoCard({ icon, iconBgColor, title, description }: InfoCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-slate-100">
      <div
        className={cn(
          'mb-6 flex h-16 w-16 items-center justify-center rounded-xl transition-transform group-hover:scale-110',
          iconBgColor,
        )}
      >
        {icon}
      </div>
      <h3 className="mb-4 text-2xl font-bold font-sans text-slate-900">{title}</h3>
      <p className="text-slate-600 font-secondary leading-relaxed">{description}</p>
    </div>
  )
}
