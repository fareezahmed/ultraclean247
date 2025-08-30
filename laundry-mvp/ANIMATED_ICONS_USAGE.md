# Animated Icons Usage Guide

## Overview

The animated icons system provides a way to display animated GIF icons throughout the application. The icons are organized by category and can be easily used in React components.

## Available Icons

### Laundry Category
- `washing-machine` - Washing machine animation
- `clothes-packing` - Clothes packing/folding animation
- `ironing` - Ironing and pressing animation
- `detergent` - Detergent bottle animation
- `tshirt-drying` - T-shirt drying animation
- `pile-of-towels` - Pile of towels animation

### Delivery Category
- `truck` - Delivery truck animation

## Usage

### 1. Using Predefined Components

Import the specific icon component you need:

```tsx
import { WashingMachineIcon, IroningIcon, DeliveryTruckIcon } from '@/components/ui/animated-icon'

// Basic usage
<WashingMachineIcon />

// With custom styling
<WashingMachineIcon 
  className="w-16 h-16" 
  width={64} 
  height={64} 
  alt="Washing machine process"
/>
```

### 2. Using the Generic AnimatedIcon Component

For more flexibility, use the generic component:

```tsx
import { AnimatedIcon } from '@/components/ui/animated-icon'

<AnimatedIcon 
  category="laundry" 
  icon="washing-machine"
  className="w-12 h-12"
  width={48}
  height={48}
/>
```

### 3. Using the Utility Functions

For programmatic access to icon paths:

```tsx
import { getAnimatedIconPath, getAnimatedIcons } from '@/lib/utils'

// Get a specific icon path
const iconPath = getAnimatedIconPath('laundry', 'washing-machine')

// Get all animated icons (async)
const allIcons = await getAnimatedIcons()
```

## Component Props

### AnimatedIcon Props
- `category` - The icon category ('laundry' | 'delivery')
- `icon` - The specific icon name
- `className` - CSS classes for styling
- `alt` - Alt text for accessibility (defaults to descriptive text)
- `width` - Icon width in pixels (default: 64)
- `height` - Icon height in pixels (default: 64)

### Predefined Icon Components
All predefined components accept the same props as AnimatedIcon except `category` and `icon` which are fixed.

## Examples

### Service Card with Animated Icon
```tsx
<Card className="p-6">
  <div className="flex items-center mb-4">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
      <WashingMachineIcon width={32} height={32} />
    </div>
    <div>
      <h3 className="text-lg font-semibold">Laundry Service</h3>
      <p className="text-gray-600">Professional washing and care</p>
    </div>
  </div>
</Card>
```

### Process Steps
```tsx
const processSteps = [
  { icon: WashingMachineIcon, title: 'Washing', description: 'Professional cleaning' },
  { icon: IroningIcon, title: 'Ironing', description: 'Expert pressing' },
  { icon: ClothesPackingIcon, title: 'Packing', description: 'Careful folding' },
  { icon: DeliveryTruckIcon, title: 'Delivery', description: 'Safe delivery' }
]

{processSteps.map((step, index) => (
  <div key={index} className="text-center">
    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
      <step.icon width={40} height={40} />
    </div>
    <h4 className="font-medium">{step.title}</h4>
    <p className="text-sm text-gray-600">{step.description}</p>
  </div>
))}
```

## File Structure

```
public/
  animated-icons.json          # Icon configuration
  icons/
    washing-machine-animation.gif
    clothes-packing.gif
    ironing-animation.gif
    detergent-animation.gif
    tshirt-drying-animation.gif
    pile-of-towels-animation.gif
    delivery-truck.gif

src/
  components/ui/
    animated-icon.tsx          # Main component
  lib/
    utils.ts                   # Utility functions
```

## Adding New Icons

1. Add the GIF file to `public/icons/`
2. Update `public/animated-icons.json` with the new icon path
3. Add the icon to the TypeScript interface in `src/lib/utils.ts`
4. Create a predefined component in `src/components/ui/animated-icon.tsx`
5. Export the new component from `src/components/ui/index.ts`

## Best Practices

1. **Performance**: Use `loading="lazy"` for icons below the fold
2. **Accessibility**: Always provide meaningful alt text
3. **Consistency**: Use consistent sizing within sections
4. **Fallbacks**: The system includes fallback paths for reliability
5. **Styling**: Use Tailwind classes for consistent styling

## Troubleshooting

- If an icon doesn't load, check the file path in `animated-icons.json`
- Ensure the GIF file exists in the `public/icons/` directory
- Check the browser console for any fetch errors
- Verify the icon name matches exactly in the JSON configuration
