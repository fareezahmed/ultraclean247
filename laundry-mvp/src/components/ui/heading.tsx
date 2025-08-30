import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva(
  "font-bold tracking-tight",
  {
    variants: {
      variant: {
        default: "text-foreground",
        "primary": "text-blue-600",
        "secondary": "text-green-600",
        "muted": "text-muted-foreground",
        "white": "text-white",
        "hero": "text-gray-900",
        "section": "text-gray-800",
        "card": "text-gray-700",
      },
      size: {
        "xs": "text-xs",
        "sm": "text-sm",
        "base": "text-base",
        "lg": "text-lg",
        "xl": "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
        black: "font-black",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "2xl",
      weight: "bold",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, size, weight, as: Component = "h2", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ variant, size, weight, className }))}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
