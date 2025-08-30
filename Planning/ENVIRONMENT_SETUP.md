# Environment Variables Setup Guide

## Required Environment Variables for Epic 7

### 1. Create Environment Files

#### For Development
Create a file called `.env.local` in the root of your project (`laundry-mvp/.env.local`):

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL for sitemap
SITE_URL=https://famscomtech.com

# Formspree (for booking forms)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Bundle analyzer (optional)
ANALYZE=false
```

#### For Production
Create a file called `.env.production` in the root of your project:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL for sitemap
SITE_URL=https://famscomtech.com

# Formspree (for booking forms)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Bundle analyzer (disabled in production)
ANALYZE=false
```

### 2. How to Get These Values

#### Google Analytics ID (`NEXT_PUBLIC_GA_ID`)
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use existing one
3. Go to **Admin** > **Property Settings**
4. Copy the **Property ID** (starts with "G-")
5. Replace `G-XXXXXXXXXX` with your actual Property ID

#### Formspree Endpoint (`NEXT_PUBLIC_FORMSPREE_ENDPOINT`)
1. Go to [Formspree](https://formspree.io/)
2. Create a new form
3. Copy the form endpoint URL
4. Replace `YOUR_FORM_ID` with your actual form ID

#### Site URL (`SITE_URL`)
- For development: `http://localhost:3000`
- For production: `https://famscomtech.com` (or your actual domain)

### 3. Environment Variables by Feature

#### SEO Features
```env
# Required for sitemap generation
SITE_URL=https://famscomtech.com

# Optional: Google Search Console verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

#### Analytics Features
```env
# Required for Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Performance Features
```env
# Optional: Bundle analyzer
ANALYZE=false
```

#### Form Features
```env
# Required for booking and contact forms
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### 4. File Structure
```
laundry-mvp/
├── .env.local          # Development environment (not committed to git)
├── .env.production     # Production environment (not committed to git)
├── .env.example        # Template file (committed to git)
└── .gitignore          # Should include .env.local and .env.production
```

### 5. Git Ignore Setup
Make sure your `.gitignore` file includes:

```gitignore
# Environment variables
.env.local
.env.production
.env*.local
```

### 6. Deployment Setup

#### For Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add each variable:
   - `NEXT_PUBLIC_GA_ID`
   - `SITE_URL`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

#### For Netlify
1. Go to your Netlify site dashboard
2. Navigate to **Site settings** > **Environment variables**
3. Add each variable with the same names

#### For GitHub Pages
1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Add repository secrets for each variable

### 7. Testing Environment Variables

#### Check if variables are loaded:
```typescript
// In any component
console.log('GA ID:', process.env.NEXT_PUBLIC_GA_ID)
console.log('Site URL:', process.env.SITE_URL)
```

#### Test Google Analytics:
1. Open browser developer tools
2. Go to Network tab
3. Look for requests to `googletagmanager.com`
4. Check console for GA events

#### Test Formspree:
1. Submit a test booking
2. Check Formspree dashboard for the submission
3. Verify email notifications

### 8. Troubleshooting

#### Variables not loading?
- Make sure file is named exactly `.env.local`
- Restart your development server
- Check for typos in variable names

#### Google Analytics not working?
- Verify the GA ID is correct
- Check browser console for errors
- Ensure `NEXT_PUBLIC_` prefix is used

#### Forms not submitting?
- Verify Formspree endpoint is correct
- Check network tab for failed requests
- Test endpoint directly in browser

### 9. Security Notes

- Never commit `.env.local` or `.env.production` to git
- Only use `NEXT_PUBLIC_` prefix for variables that need to be client-side
- Keep sensitive keys secure and rotate them regularly
- Use different GA properties for development and production

### 10. Next Steps After Setup

1. **Test Google Analytics**: Visit your site and check GA dashboard
2. **Test Forms**: Submit test bookings and contact forms
3. **Generate Sitemap**: Run `npm run build` to generate sitemap
4. **Submit to Search Console**: Add your sitemap to Google Search Console
5. **Monitor Performance**: Check Core Web Vitals in GA

## Quick Setup Checklist

- [ ] Create `.env.local` file
- [ ] Add Google Analytics ID
- [ ] Add Formspree endpoint
- [ ] Set site URL
- [ ] Test analytics tracking
- [ ] Test form submissions
- [ ] Generate and test sitemap
- [ ] Set up production environment variables
