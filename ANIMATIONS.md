# Mindsake Animations & Color Scheme Documentation

## Color Palette

The Mindsake website uses a carefully crafted color palette that creates a calming, professional, and trustworthy atmosphere.

### Primary Colors - Sage Teal

- **Primary**: `#80B2A9` - Main brand color, used for CTAs, highlights
- **Primary Light**: `#a4d4c9` - Light variant for backgrounds and hover states
- **Primary Dark**: `#5a8c82` - Dark variant for emphasis and contrast

### Secondary Colors - Slate Blue

- **Secondary**: `#637593` - Complementary color for variety
- **Secondary Light**: `#8a9bb8` - Light variant
- **Secondary Dark**: `#4a5a70` - Dark variant

### Accent Color - Warm Peachy-Orange

- **Accent**: `#E8A87C` - Attention-grabbing color for tags and special elements
- **Accent Light**: `#f0c5a3` - Light variant
- **Accent Dark**: `#d98e5f` - Dark variant

### Dark Color - Dark Teal

- **Dark**: `#344B47` - Primary text color in light mode
- **Dark Light**: `#4a6662` - Medium dark shade
- **Dark Dark**: `#1f2e2c` - Deep dark for backgrounds

### Typography

- **Headings**: Playfair Display (serif) - Elegant and professional
- **Body**: Poppins (sans-serif) - Clean and highly readable

## Animations

### 1. Hero Section Animations

#### Pulse Animation (8s ease-in-out infinite)

- Applied to: Background gradient blobs
- Effect: Subtle scale and opacity changes create a breathing effect
- CSS: `animate-pulse`
- Keyframes:
  ```css
  0%, 100%: opacity 0.4, scale 1
  50%: opacity 0.6, scale 1.05
  ```

#### Float Animation (6s ease-in-out infinite)

- Applied to: Circular decorative elements
- Effect: Smooth up-and-down floating motion
- Variants: `animate-float`, `animate-float-delayed-1`, `animate-float-delayed-2`
- Staggered delays: 0s, 2s, 4s
- Keyframes:
  ```css
  0%, 100%: translateY(0px)
  50%: translateY(-20px)
  ```

#### FadeInUp Animation (1s ease forwards)

- Applied to: Hero title, description, CTA button
- Effect: Content fades in and slides up on page load
- CSS: `animate-fadeInUp`
- Keyframes:
  ```css
  0%: opacity 0, translateY(30px)
  100%: opacity 1, translateY(0)
  ```

### 2. Service Cards Animations

#### Icon Bounce (on hover)

- Applied to: Service card icons
- Effect: Icons bounce when hovering over the card
- CSS: `group-hover:animate-bounce`
- Duration: 2s infinite

#### Icon Scale (on hover)

- Applied to: Service card icons
- Effect: Icons scale up smoothly
- CSS: `group-hover:scale-110`
- Transition: 300ms

#### Card Lift (on hover)

- Applied to: Service cards
- Effect: Cards lift up with enhanced shadow
- CSS: `hover:-translate-y-2 hover:shadow-2xl`
- Transition: 300ms

#### Featured Service Glow

- Applied to: Featured service card (Couples Therapy)
- Effect: Gradient background with ring emphasis
- CSS: `service-card-featured` with `ring-2 ring-primary/50 hover:ring-primary`

### 3. Scroll-Triggered Animations

#### Scroll Reveal

- Applied to: Section content as it enters viewport
- Effect: Fade in and slide up when scrolling
- Implementation: Custom hook `useScrollAnimation`
- Trigger: IntersectionObserver at 10% threshold

#### Stats Counter Animation

- Applied to: Stats section (600+ Hours, 2+ Years)
- Effect: Numbers count up from 0 when section enters view
- Implementation: Custom hook `useCountUp`
- Duration: 650ms
- Steps: 50

### 4. Form Input Animations

#### Focus State

- Applied to: All form inputs
- Effect: Subtle scale and shadow enhancement
- CSS: `focus:scale-[1.02] focus:shadow-lg`
- Transition: 200ms

#### Validation States

- Valid: Green border and ring (`border-green-500 ring-1 ring-green-500`)
- Invalid: Red border and ring (`border-red-500 ring-1 ring-red-500`)

### 5. Interactive Elements

#### Button Hover

- Applied to: CTA buttons
- Effect: Scale down slightly, shadow enhancement
- CSS: `active:scale-95 hover:shadow-lg`
- Transition: 300ms

#### Card Hover

- Applied to: Testimonial cards, contact cards
- Effect: Shadow enhancement
- CSS: `hover:shadow-xl` or `hover:shadow-lg`
- Transition: 300ms

## Accessibility

### Reduced Motion Support

All animations respect the `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Users with motion sensitivity will experience:

- No continuous animations (pulse, float, rotate)
- Instant transitions instead of animated ones
- No parallax or scroll-based animations
- Instant scroll behavior instead of smooth scrolling

## CSS Variables

All colors are defined as CSS custom properties in `globals.css`:

```css
:root {
  --color-primary: #80b2a9;
  --color-primary-light: #a4d4c9;
  --color-primary-dark: #5a8c82;
  --color-secondary: #637593;
  --color-accent: #e8a87c;
  --color-dark: #344b47;
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
}
```

Dark mode adjustments are automatically applied via the `.dark` class.

## Tailwind Configuration

Custom animations and colors are configured in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: { DEFAULT: '#80B2A9', light: '#a4d4c9', dark: '#5a8c82' },
      secondary: { DEFAULT: '#637593', light: '#8a9bb8', dark: '#4a5a70' },
      accent: { DEFAULT: '#E8A87C', light: '#f0c5a3', dark: '#d98e5f' },
      dark: { DEFAULT: '#344B47', light: '#4a6662', dark: '#1f2e2c' },
    },
    animation: {
      pulse: 'pulse 8s ease-in-out infinite',
      float: 'float 6s ease-in-out infinite',
      'float-delayed-1': 'float 6s ease-in-out 2s infinite',
      'float-delayed-2': 'float 6s ease-in-out 4s infinite',
      fadeInUp: 'fadeInUp 1s ease forwards',
      bounce: 'bounce 2s ease-in-out infinite',
      rotate: 'rotate 10s linear infinite',
    },
  },
}
```

## Utility Classes

Custom utility classes for common patterns:

- `.cta-btn` - Base button styles
- `.cta-primary` - Primary CTA button
- `.cta-secondary` - Secondary CTA button
- `.section-tag` - Section header tags
- `.service-card` - Service card base styles
- `.service-card-featured` - Featured service card
- `.testimonial-card` - Testimonial card styles
- `.form-input` - Form input styles with focus and validation states
- `.text-gradient` - Gradient text effect
- `.hero-gradient` - Hero section gradient background

## Custom Hooks

### useScrollAnimation

Triggers when element enters viewport:

```typescript
const { ref, isVisible } = useScrollAnimation(threshold?: number)
```

### useCountUp

Animates number counting:

```typescript
const count = useCountUp(end: number, duration?: number, start?: number, enabled?: boolean)
```

### useParallax

Tracks scroll offset for parallax effects:

```typescript
const offset = useParallax()
```

## Framer Motion Variants

Pre-configured animation variants in `lib/animations.ts`:

- `fadeInUpVariants`
- `staggerContainerVariants`
- `scaleOnHoverVariants`
- `tiltOnHoverVariants`
- `parallaxVariants`
- `counterVariants`
- `floatVariants`
- `pulseVariants`
- `rotateVariants`

## Performance Considerations

1. **Hardware Acceleration**: Transform and opacity animations use GPU acceleration
2. **Will-Change**: Not used excessively to avoid memory issues
3. **IntersectionObserver**: Used for scroll-triggered animations to minimize JS execution
4. **CSS Animations**: Preferred over JS animations for simple effects
5. **Lazy Loading**: Components with animations load only when needed
6. **Reduced Motion**: Full respect for accessibility preferences

## Testing Animations

To test animations across browsers:

1. Chrome DevTools: Animation panel
2. Firefox DevTools: Animations inspector
3. Safari Web Inspector: Timelines

To test reduced motion:

1. System Settings > Accessibility > Display > Reduce Motion (macOS)
2. System Settings > Accessibility > Remove animations (Windows)
3. Browser DevTools: Emulate CSS media feature `prefers-reduced-motion`
