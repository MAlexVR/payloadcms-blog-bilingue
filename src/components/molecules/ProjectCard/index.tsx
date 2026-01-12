import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/atoms/badge'

interface ProjectCardProps {
  title: string
  code: string
  year: string
  description: string
  imageUrl?: string
  href: string
}

export function ProjectCard({ title, code, year, description, imageUrl, href }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card shadow-md transition-all hover:shadow-xl">
      <div className="relative h-48 overflow-hidden bg-slate-200">
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-xl font-bold font-sans">{title}</h3>
        <p className="mb-2 text-sm font-semibold text-muted-foreground">{code}</p>
        <div className="mb-4">
          <Badge>{year}</Badge>
        </div>
        <p className="text-pretty mb-4 text-sm text-muted-foreground font-secondary">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold text-[#39A900] hover:text-[#007832] font-sans"
        >
          Conocer más
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
