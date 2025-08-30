"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export function AnimatedIcon({ 
  src,
  alt,
  className,
  width = 64,
  height = 64,
  style
}: AnimatedIconProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-contain", className)}
      style={style}
      loading="lazy"
    />
  );
}

// Predefined icon components for common use cases
export function WashingMachineIcon({ className, ...props }: Omit<AnimatedIconProps, 'src' | 'alt'>) {
  return <AnimatedIcon src="/icons/washing-machine-animation.gif" alt="Washing machine animation" className={className} {...props} />;
}

export function ClothesPackingIcon({ className, ...props }: Omit<AnimatedIconProps, 'src' | 'alt'>) {
  return <AnimatedIcon src="/icons/clothes-packing.gif" alt="Clothes packing animation" className={className} {...props} />;
}

export function IroningIcon({ className, ...props }: Omit<AnimatedIconProps, 'src' | 'alt'>) {
  return <AnimatedIcon src="/icons/ironing-animation.gif" alt="Ironing animation" className={className} {...props} />;
}

export function DetergentIcon({ className, ...props }: Omit<AnimatedIconProps, 'src' | 'alt'>) {
  return <AnimatedIcon src="/icons/detergent-animation.gif" alt="Detergent animation" className={className} {...props} />;
}

export function TshirtDryingIcon({ className, ...props }: Omit<AnimatedIconProps, 'src' | 'alt'>) {
  return <AnimatedIcon src="/icons/tshirt-drying-animation.gif" alt="T-shirt drying animation" className={className} {...props} />;
}

export function PileOfTowelsIcon({ className, ...props }: Omit<AnimatedIconProps, 'src' | 'alt'>) {
  return <AnimatedIcon src="/icons/pile-of-towels-animation.gif" alt="Pile of towels animation" className={className} {...props} />;
}

export function DeliveryTruckIcon({ className, ...props }: Omit<AnimatedIconProps, 'src' | 'alt'>) {
  return <AnimatedIcon src="/icons/delivery-truck.gif" alt="Delivery truck animation" className={className} {...props} />;
}
