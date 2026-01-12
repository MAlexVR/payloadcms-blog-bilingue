import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/atoms/badge'

interface ServiceCardProps {
  logo?: string // Optional for now as we might not have the SVGs
  title: string
  acronym: string
  description: string
  imageUrl?: string // Optional
  href: string
}

export function ServiceCard({
  title,
  acronym,
  description,
  imageUrl,
  href,
  logo,
}: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg border border-slate-100">
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          {logo ? (
            <div className="relative h-12 w-32">
              <Image
                src={logo}
                alt={`${acronym} Logo`}
                fill
                className="object-contain object-left-bottom"
              />
            </div>
          ) : (
            <Badge>{acronym}</Badge>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-bold font-sans text-slate-900 leading-tight">
          <Link href={href} className="hover:text-[#39A900] transition-colors">
            {title}
          </Link>
        </h3>
        <div className="mb-3">
          <Badge>{acronym}</Badge>
        </div>
        <p className="mb-6 flex-1 text-sm text-slate-600 font-secondary line-clamp-3">
          {description}
        </p>
        <Link
          href={href}
          className="group/link inline-flex items-center text-sm font-semibold text-[#39A900] transition-colors hover:text-[#007832]"
        >
          Leer más{' '}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
