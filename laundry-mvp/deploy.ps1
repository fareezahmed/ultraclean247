# Deployment script for UltraClean247
# Usage: .\deploy.ps1

# Load environment variables from .env files if they exist
$envFiles = @(".env.local", ".env")
foreach ($envFile in $envFiles) {
    if (Test-Path $envFile) {
        Write-Host "Loading environment variables from $envFile..." -ForegroundColor Blue
        Get-Content $envFile | ForEach-Object {
            if ($_ -match "^([^#][^=]+)=(.*)$") {
                $name = $matches[1].Trim()
                $value = $matches[2].Trim()
                Set-Item -Path "env:$name" -Value $value
            }
        }
        break  # Use the first file found
    }
}

# Check if GITHUB_TOKEN is set
if (-not $env:GITHUB_TOKEN) {
    Write-Host "GITHUB_TOKEN environment variable is not set!" -ForegroundColor Red
    Write-Host "Please either:" -ForegroundColor Yellow
    Write-Host "1. Set it with: `$env:GITHUB_TOKEN='your_token_here'" -ForegroundColor Yellow
    Write-Host "2. Create a .env.local file with: GITHUB_TOKEN=your_token_here" -ForegroundColor Yellow
    exit 1
}

Write-Host "Starting deployment..." -ForegroundColor Green

# Build the project
Write-Host "Building project..." -ForegroundColor Blue
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Build successful!" -ForegroundColor Green

# Verify that all expected pages were generated
Write-Host "Verifying static pages..." -ForegroundColor Blue
$expectedPages = @(
    @{Name="index.html"; Path="out\index.html"},
    @{Name="about"; Path="out\about\index.html"}, 
    @{Name="admin"; Path="out\admin\index.html"},
    @{Name="areas"; Path="out\areas\index.html"},
    @{Name="book"; Path="out\book\index.html"},
    @{Name="complaints"; Path="out\complaints\index.html"},
    @{Name="contact"; Path="out\contact\index.html"},
    @{Name="design-system"; Path="out\design-system\index.html"},
    @{Name="faq"; Path="out\faq\index.html"},
    @{Name="help"; Path="out\help\index.html"},
    @{Name="marketing"; Path="out\marketing\index.html"},
    @{Name="pricing"; Path="out\pricing\index.html"},
    @{Name="services"; Path="out\services\index.html"},
    @{Name="sustainability"; Path="out\sustainability\index.html"},
    @{Name="404.html"; Path="out\404.html"}
)

foreach ($page in $expectedPages) {
    if (Test-Path $page.Path) {
        Write-Host "✓ $($page.Name)" -ForegroundColor Green
    } else {
        Write-Host "✗ $($page.Name) (missing)" -ForegroundColor Red
    }
}

# Fix for GitHub Pages: Rename _next folder to static
# GitHub Pages ignores folders starting with underscore
Write-Host "Fixing _next folder for GitHub Pages..." -ForegroundColor Blue
if (Test-Path "out\_next") {
    # Use Move-Item instead of Rename-Item for better handling of directories with subdirectories
    Move-Item "out\_next" "out\static" -Force
    Write-Host "Renamed _next to static" -ForegroundColor Green
    
    # Update all files to reference 'static' instead of '_next'
    Write-Host "Updating files to reference 'static' folder..." -ForegroundColor Blue
    Get-ChildItem "out" -Recurse -Include "*.html", "*.txt", "*.js", "*.css" | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        $updatedContent = $content -replace '/_next/', '/static/'
        Set-Content $_.FullName $updatedContent -NoNewline
    }
    Write-Host "Updated files" -ForegroundColor Green
} else {
    Write-Host "Warning: _next folder not found" -ForegroundColor Yellow
}

# Deploy to GitHub Pages
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Blue
npx gh-pages -d out --repo https://$env:GITHUB_TOKEN@github.com/fareezahmed/ultraclean247.git

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deployment successful!" -ForegroundColor Green
    Write-Host "Your site should be available at: https://ultraclean247.au/" -ForegroundColor Cyan
} else {
    Write-Host "Deployment failed!" -ForegroundColor Red
    exit 1
}
