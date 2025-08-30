import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const iconVariants = cva(
  "inline-block",
  {
    variants: {
      variant: {
        default: "text-foreground",
        "primary": "text-blue-600",
        "secondary": "text-green-600",
        "muted": "text-muted-foreground",
        "white": "text-white",
        "success": "text-green-500",
        "warning": "text-yellow-500",
        "error": "text-red-500",
        "laundry": "text-blue-500",
        "service": "text-purple-500",
      },
      size: {
        default: "h-4 w-4",
        sm: "h-3 w-3",
        lg: "h-6 w-6",
        xl: "h-8 w-8",
        "2xl": "h-12 w-12",
        "3xl": "h-16 w-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface IconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconVariants> {
  icon: LucideIcon
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, variant, size, icon: IconComponent, ...props }, ref) => {
    const IconComponentTyped: LucideIcon = IconComponent;
    return (
      <div
        ref={ref}
        className={cn(iconVariants({ variant, size, className }))}
        {...props}
      >
        <IconComponentTyped className="h-full w-full" />
      </div>
    )
  }
)
Icon.displayName = "Icon"

export { Icon, iconVariants }
