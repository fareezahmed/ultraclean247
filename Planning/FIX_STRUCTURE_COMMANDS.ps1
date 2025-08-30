# PowerShell Commands to Fix Laundry Service Website File Structure
# Run these commands from the laundry-mvp directory

# Navigate to laundry-mvp directory
cd laundry-mvp

# Create missing directories
New-Item -ItemType Directory -Path "src/hooks" -Force
New-Item -ItemType Directory -Path "src/types" -Force
New-Item -ItemType Directory -Path "src/components/sections" -Force
New-Item -ItemType Directory -Path "src/components/layout" -Force
New-Item -ItemType Directory -Path "src/lib/services" -Force
New-Item -ItemType Directory -Path "src/lib/validations" -Force
New-Item -ItemType Directory -Path "src/lib/stores" -Force
New-Item -ItemType Directory -Path "__tests__" -Force
New-Item -ItemType Directory -Path "__tests__/components" -Force
New-Item -ItemType Directory -Path "__tests__/pages" -Force

# Create service page directories
New-Item -ItemType Directory -Path "src/app/services/dry-cleaning" -Force
New-Item -ItemType Directory -Path "src/app/services/laundry" -Force
New-Item -ItemType Directory -Path "src/app/services/ironing" -Force
New-Item -ItemType Directory -Path "src/app/about" -Force

# Move existing files to correct locations
if (Test-Path "src/components/common/Header.tsx") {
    Move-Item "src/components/common/Header.tsx" "src/components/layout/Header.tsx" -Force
}
if (Test-Path "src/components/common/Footer.tsx") {
    Move-Item "src/components/common/Footer.tsx" "src/components/layout/Footer.tsx" -Force
}
if (Test-Path "src/components/common/Section.tsx") {
    Move-Item "src/components/common/Section.tsx" "src/components/layout/Section.tsx" -Force
}

# Move marketing components to sections
if (Test-Path "src/components/marketing/Hero.tsx") {
    Move-Item "src/components/marketing/Hero.tsx" "src/components/sections/Hero.tsx" -Force
}
if (Test-Path "src/components/marketing/PricingTable.tsx") {
    Move-Item "src/components/marketing/PricingTable.tsx" "src/components/sections/PricingTable.tsx" -Force
}
if (Test-Path "src/components/marketing/Steps.tsx") {
    Move-Item "src/components/marketing/Steps.tsx" "src/components/sections/Steps.tsx" -Force
}
if (Test-Path "src/components/marketing/TestimonialCarousel.tsx") {
    Move-Item "src/components/marketing/TestimonialCarousel.tsx" "src/components/sections/TestimonialCarousel.tsx" -Force
}

# Install additional dependencies
npm install @hookform/resolvers

# Create .env.local from template
Copy-Item ".env.local.example" ".env.local" -Force

# Show current structure
tree /f src
