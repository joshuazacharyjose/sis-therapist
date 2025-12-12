# Mindsake Therapist Website

A modern, full-featured therapy and wellness services website built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

### Core Framework

- **Next.js 14** - App Router with TypeScript
- **React 18** - UI library
- **TypeScript** - Static type safety

### Styling & UI

- **Tailwind CSS 3** - Utility-first CSS framework
- **@tailwindcss/forms** - Pre-styled form elements
- **@tailwindcss/typography** - Professional typography
- **@tailwindcss/container-queries** - Container query support
- **Framer Motion** - Animations and interactions

### Forms & Validation

- **react-hook-form** - Efficient form handling
- **zod** - TypeScript-first schema validation

### Features

- **next-themes** - Dark mode support with system preference detection
- **@vercel/analytics** - Web analytics and performance monitoring
- **Image optimization** - Next.js Image component with WebP/AVIF support

### Development Tools

- **ESLint** - Code linting with Next.js config
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files
- **Jest** - Unit and integration testing
- **@testing-library/react** - React component testing utilities

## Project Structure

```
/home/engine/project/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Homepage with all sections
│   └── globals.css          # Global styles with Tailwind directives
├── components/              # Reusable React components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and helpers
├── public/                  # Static assets
│   ├── mindsake.png         # Logo
│   ├── about-image.jpg      # About section image
│   ├── hero.jpg             # Hero section image
│   └── floral-divider.png   # Decorative elements
├── styles/                  # Additional style files
├── .husky/                  # Git hooks configuration
├── tsconfig.json            # TypeScript configuration with path aliases
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── jest.config.js           # Jest testing configuration
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── .lintstagedrc.json       # Lint-staged configuration
└── package.json             # Dependencies and scripts
```

## Installation & Setup

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mindsake-therapist-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Husky pre-commit hooks**

   ```bash
   npx husky install
   chmod +x .husky/pre-commit
   ```

4. **Verify setup**
   ```bash
   npm run lint
   npm run build
   ```

## Development

### Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

Hot module replacement (HMR) is enabled by default, so changes are reflected instantly.

### Build for Production

```bash
npm run build
npm run start
```

### Code Quality

#### Linting

```bash
npm run lint
```

Checks for code quality issues using ESLint with Next.js configuration.

#### Formatting

```bash
npm run format          # Format all files
npm run format:check    # Check if formatting is correct
```

#### Testing

```bash
npm test
```

Runs Jest test suite with testing-library for component testing.

## Features

### Core Sections

- **Hero Section** - Eye-catching introduction with CTA
- **Qualifications** - Stats and credentials display
- **About** - Therapist biography with credentials
- **Services** - Individual Therapy, Couples Therapy, Group Support
- **Testimonials** - Client success stories with ratings
- **Process** - 4-step journey to wellness
- **Contact** - Contact information and inquiry form
- **Footer** - Navigation links and social media

### Technical Features

- **Dark Mode** - System-aware dark mode toggle via next-themes
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- **Image Optimization** - Automatic WebP/AVIF conversion and lazy loading
- **Performance** - Vercel Analytics integration for monitoring
- **Accessibility** - Semantic HTML and ARIA labels throughout
- **SEO** - Next.js metadata API for dynamic page titles and descriptions

## Configuration

### TypeScript Path Aliases

Configured in `tsconfig.json`:

```typescript
@/*        → ./
@/components/* → ./components/
@/lib/*    → ./lib/
@/hooks/*  → ./hooks/
@/styles/* → ./styles/
```

### Environment Variables

Create a `.env.local` file for local development (not tracked in git):

```env
# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

### Tailwind CSS Customization

Edit `tailwind.config.ts` to customize:

- Color scheme
- Font families
- Spacing scales
- Responsive breakpoints

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "feat: Bootstrap Next.js stack"
   git push origin feat/bootstrap-nextjs-stack
   ```

2. **Create Vercel Project**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"

3. **Environment Variables**
   - Add any required `.env` variables in Vercel project settings
   - No sensitive data needed for this static site

### Deploy to Other Platforms

**Docker**

```dockerfile
FROM node:18-alpine AS base
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM base AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json .
EXPOSE 3000
CMD ["npm", "start"]
```

**Traditional Server (Node.js)**

```bash
npm install --production
npm run build
npm start
```

## Git Workflow

### Pre-commit Hooks

Husky + lint-staged automatically:

1. Runs ESLint on staged TypeScript/JavaScript files
2. Applies Prettier formatting fixes
3. Runs prettier check on JSON/Markdown files
4. Prevents commits with linting errors

### Commit Message Format

Follow conventional commits for clear history:

```
feat: Add new feature
fix: Fix a bug
docs: Update documentation
style: Format code
refactor: Refactor without behavior change
test: Add tests
chore: Update dependencies
```

## CI/CD

A GitHub Actions workflow (`.github/workflows/nextjs.yml`) is configured to:

1. Run on push to main branch and pull requests
2. Check Node.js version compatibility
3. Install dependencies
4. Run linting (ESLint)
5. Build the application
6. Upload build artifacts for deployment

## Performance Optimization

- **Image Optimization** - Automatic AVIF/WebP conversion
- **Code Splitting** - Automatic route-based code splitting
- **Font Optimization** - Google Fonts via `next/font`
- **CSS Purging** - Tailwind removes unused styles
- **Script Optimization** - Defer non-critical scripts
- **Analytics** - Vercel Analytics for Core Web Vitals monitoring

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Troubleshooting

### Port Already in Use

```bash
npm run dev -- -p 3001  # Use different port
```

### Build Errors

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Type Errors

```bash
npx tsc --noEmit  # Check TypeScript
```

### Linting Issues

```bash
npm run lint -- --fix  # Auto-fix linting issues
```

## Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make changes and commit: `git commit -m "feat: Your feature"`
3. Pre-commit hooks will auto-fix style issues
4. Push and create a pull request
5. CI/CD pipeline validates all checks pass

## License

© 2025 Mindsake. All rights reserved.

## Contact & Support

- **Email**: angelin.jose00@gmail.com
- **Phone**: +91 96455 10183
- **Location**: Bangalore, India
- **Website**: [mindsake.vercel.app](https://mindsake.vercel.app)
