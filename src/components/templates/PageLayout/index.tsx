import React from 'react'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {/* Main content wrapper */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
