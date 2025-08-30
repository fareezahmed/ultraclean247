"use client";

import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export function AnimatedSection({
  children,
  className,
  animationType = 'fade-in',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px',
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  const animationClasses = {
    'fade-in': 'section-fade-in',
    'slide-in-left': 'section-slide-in-left',
    'slide-in-right': 'section-slide-in-right',
    'scale-in': 'section-scale-in',
  };

  const baseClass = animationClasses[animationType];
  const visibleClass = isIntersecting ? 'visible' : '';

  return (
    <div
      ref={ref}
      className={cn(baseClass, visibleClass, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
