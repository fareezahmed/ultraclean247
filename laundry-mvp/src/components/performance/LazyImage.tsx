'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: string
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=='
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px',
      }
    )

    const element = document.querySelector(`[data-src="${src}"]`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [src])

  return (
    <div
      data-src={src}
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      
      {/* Actual Image */}
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          priority={priority}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  )
}
