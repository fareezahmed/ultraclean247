import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Animated icons utility
export interface AnimatedIcons {
  laundry: {
    "washing-machine": string;
    "clothes-packing": string;
    "ironing": string;
    "detergent": string;
    "tshirt-drying": string;
    "pile-of-towels": string;
  };
  delivery: {
    "truck": string;
  };
}

export async function getAnimatedIcons(): Promise<AnimatedIcons> {
  try {
    const response = await fetch('/animated-icons.json');
    if (!response.ok) {
      throw new Error('Failed to load animated icons');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading animated icons:', error);
    // Return fallback structure
    return {
      laundry: {
        "washing-machine": "/icons/washing-machine-animation.gif",
        "clothes-packing": "/icons/clothes-packing.gif",
        "ironing": "/icons/ironing-animation.gif",
        "detergent": "/icons/detergent-animation.gif",
        "tshirt-drying": "/icons/tshirt-drying-animation.gif",
        "pile-of-towels": "/icons/pile-of-towels-animation.gif"
      },
      delivery: {
        "truck": "/icons/delivery-truck.gif"
      }
    };
  }
}

export function getAnimatedIconPath(category: keyof AnimatedIcons, icon: string): string {
  const iconMap: AnimatedIcons = {
    laundry: {
      "washing-machine": "/icons/washing-machine-animation.gif",
      "clothes-packing": "/icons/clothes-packing.gif",
      "ironing": "/icons/ironing-animation.gif",
      "detergent": "/icons/detergent-animation.gif",
      "tshirt-drying": "/icons/tshirt-drying-animation.gif",
      "pile-of-towels": "/icons/pile-of-towels-animation.gif"
    },
    delivery: {
      "truck": "/icons/delivery-truck.gif"
    }
  };
  
  return iconMap[category]?.[icon as keyof typeof iconMap[typeof category]] || '';
}




