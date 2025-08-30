/** @type {import('next').NextConfig} */
const repo = "famscomtech"; // e.g., laundry-mvp

const nextConfig: any = {
  // Image optimization
  images: { 
    unoptimized: true, // GitHub Pages doesn't run Image Optimization
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Compression
  compress: true,
  
  // Bundle analyzer (optional)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: any) => {
      config.plugins.push(
        new (require('@next/bundle-analyzer')({
          enabled: true,
        }))()
      );
      return config;
    },
  }),
};

// Only apply output export for production builds
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = "export";
  // For GitHub Pages, we don't set basePath or assetPrefix
  // Static assets should be served from root
  
  // Ensure trailing slashes for better static hosting compatibility
  nextConfig.trailingSlash = true;
  
  // Note: We'll handle the _next folder renaming in the build script
}

module.exports = nextConfig;