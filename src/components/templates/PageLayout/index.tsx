import React from 'react'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function PageLayout({
  children,
  className = '',
  containerClassName = 'container mx-auto px-4 py-8',
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {/* Main content wrapper */}
      <main className={`flex-grow ${containerClassName}`}>{children}</main>
    </div>
  )
}
