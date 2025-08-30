import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const containerVariants = cva(
  "mx-auto px-4",
  {
    variants: {
      variant: {
        default: "",
        "page": "max-w-7xl",
        "section": "max-w-6xl",
        "content": "max-w-4xl",
        "narrow": "max-w-2xl",
        "wide": "max-w-full",
      },
      padding: {
        default: "px-4",
        sm: "px-2",
        lg: "px-6",
        xl: "px-8",
        none: "px-0",
      },
      margin: {
        default: "mx-auto",
        left: "ml-auto",
        right: "mr-auto",
        none: "mx-0",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
      margin: "default",
    },
  }
)

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, padding, margin, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ variant, padding, margin, className }))}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container, containerVariants }
