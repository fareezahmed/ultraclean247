import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const separatorVariants = cva(
  "shrink-0 bg-border",
  {
    variants: {
      orientation: {
        horizontal: "h-[1px] w-full",
        vertical: "h-full w-[1px]",
      },
      variant: {
        default: "bg-border",
        "section": "bg-gray-200",
        "card": "bg-gray-100",
        "laundry": "bg-blue-200",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      variant: "default",
    },
  }
)

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
    VariantProps<typeof separatorVariants>
>(({ className, orientation, variant, decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(separatorVariants({ orientation, variant, className }))}
    {...props}
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator, separatorVariants }
