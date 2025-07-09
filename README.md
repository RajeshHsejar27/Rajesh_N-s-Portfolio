# Rajesh N - Portfolio Website

A modern, responsive portfolio website built with Next.js 13, TypeScript, and Tailwind CSS. This project showcases professional work, personal projects, and creative endeavors with a focus on performance, accessibility, and user experience.

## 🚀 Live Demo

- **Production**: [https://rajesh-portfolio.vercel.app](https://rajesh-portfolio.vercel.app)
- **GitHub**: [https://github.com/RajeshHsejar27](https://github.com/RajeshHsejar27)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Components](#pages--components)
- [State Management](#state-management)
- [Styling & Design](#styling--design)
- [Testing](#testing)
- [Performance & SEO](#performance--seo)
- [Security](#security)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

### Core Features
- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Dark/Light Theme**: System preference detection with manual toggle
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Contact Form**: Validated form with spam protection (honeypot)
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and structured data
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels
- **Performance**: Optimized images, lazy loading, and code splitting

### Unique Sections
- **Professional Portfolio**: Projects with live demos and source code
- **Unofficial Section**: Personal hobbies, passions, creative works, and life stories
- **Interactive Elements**: Cursor effects, hover animations, and smooth scrolling
- **Progressive Enhancement**: Works without JavaScript for core functionality

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 13.5.1 (App Router)
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion 11.0.0
- **Theme**: next-themes 0.4.6

### Development Tools
- **Linting**: ESLint + TypeScript ESLint
- **Formatting**: Prettier with Tailwind plugin
- **Testing**: Jest + React Testing Library
- **Type Checking**: TypeScript strict mode
- **Git Hooks**: Pre-commit hooks for code quality

### Build & Deployment
- **Build Tool**: Next.js built-in bundler
- **Deployment**: Vercel (optimized for Next.js)
- **CI/CD**: GitHub Actions
- **Performance Monitoring**: Web Vitals

## 📁 Project Structure

```
├── app/                          # Next.js 13 App Router
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── projects/                 # Projects showcase
│   ├── unofficial/               # Personal sections
│   │   ├── creations/           # Creative works
│   │   ├── hobbies/             # Personal hobbies
│   │   ├── passion/             # Life passions
│   │   └── stories/             # Life timeline
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Homepage
├── components/                   # Reusable components
│   ├── contact/                 # Contact form components
│   ├── home/                    # Homepage sections
│   ├── layout/                  # Layout components
│   ├── providers/               # Context providers
│   └── ui/                      # shadcn/ui components
├── lib/                         # Utility functions
│   ├── constants.ts             # App constants & config
│   ├── utils.ts                 # Helper functions
│   └── validations.ts           # Zod schemas
├── __tests__/                   # Test files
├── public/                      # Static assets
└── Configuration files
```

## 📄 Pages & Components

### Pages

#### 1. Homepage (`app/page.tsx`)
- **Hero Section**: Introduction with animated text and social links
- **Featured Projects**: Showcase of selected work
- **State**: No local state, uses static data from constants

#### 2. About Page (`app/about/page.tsx`)
- **Personal Story**: Background and experience
- **Skills Section**: Technical skills with progress bars
- **Education**: Academic and professional timeline
- **State**: No local state, uses SKILLS constant

#### 3. Projects Page (`app/projects/page.tsx`)
- **Filter System**: Category-based project filtering
- **Project Cards**: Interactive cards with hover effects
- **State Management**:
  ```typescript
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);
  ```

#### 4. Contact Page (`app/contact/page.tsx`)
- **Contact Form**: Validated form with error handling
- **Contact Information**: Social links and contact details
- **State**: Form state managed by react-hook-form

#### 5. Unofficial Section (`app/unofficial/`)
Personal sections showcasing creativity and personality:

##### Hobbies (`app/unofficial/hobbies/page.tsx`)
- **Horizontal Scroll**: Smooth scrolling card layout
- **Interactive Cards**: Hover effects with image scaling
- **State**: No local state, uses static hobby data

##### Passion (`app/unofficial/passion/page.tsx`)
- **Expandable Cards**: Click to expand detailed descriptions
- **State Management**:
  ```typescript
  const [expandedPassion, setExpandedPassion] = useState<string | null>(null);
  const toggleExpansion = (passionId: string) => {
    setExpandedPassion(expandedPassion === passionId ? null : passionId);
  };
  ```

##### Creations (`app/unofficial/creations/page.tsx`)
- **Multi-Category Display**: Music, videos, and books
- **Interactive Elements**: Play buttons and view links
- **State**: No local state, uses static creation data

##### Stories (`app/unofficial/stories/page.tsx`)
- **Timeline Navigation**: Year-based story selection
- **Dynamic Content**: Animated content switching
- **State Management**:
  ```typescript
  const [selectedYear, setSelectedYear] = useState('2023');
  const selectedStory = timelineData.find(item => item.year === selectedYear);
  ```

### Core Components

#### Layout Components

##### Header (`components/layout/header.tsx`)
- **Responsive Navigation**: Desktop and mobile menus
- **Scroll Detection**: Background opacity changes on scroll
- **State Management**:
  ```typescript
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  ```

##### Footer (`components/layout/footer.tsx`)
- **Static Component**: No state management
- **Social Links**: Consistent with header
- **Grid Layout**: Responsive footer sections

##### Layout (`components/layout/layout.tsx`)
- **Wrapper Component**: Combines header, main, and footer
- **Cursor Effects**: Custom cursor animations
- **No State**: Pure layout component

#### UI Components

##### Contact Form (`components/contact/contact-form.tsx`)
- **Form Validation**: Zod schema validation with react-hook-form
- **Spam Protection**: Honeypot field for bot detection
- **State Management**:
  ```typescript
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });
  ```

##### Theme Toggle (`components/ui/theme-toggle.tsx`)
- **Theme Switching**: Light/dark mode toggle
- **System Preference**: Respects user's system theme
- **Persistent**: Saves preference to localStorage

##### Cursor Effects (`components/ui/cursor-effects.tsx`)
- **Custom Cursor**: Interactive cursor with hover effects
- **Performance Optimized**: Uses requestAnimationFrame
- **State Management**:
  ```typescript
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  ```

## 🔄 State Management

### Local State Patterns

#### 1. Simple Toggle State
```typescript
// Used in: Header mobile menu, Passion expandable cards
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
```

#### 2. Selection State
```typescript
// Used in: Projects filter, Stories timeline
const [selected, setSelected] = useState('default');
const handleSelect = (value: string) => setSelected(value);
```

#### 3. Form State (react-hook-form)
```typescript
// Used in: Contact form
const { register, handleSubmit, formState: { errors }, reset } = useForm({
  resolver: zodResolver(schema)
});
```

#### 4. Async State
```typescript
// Used in: Contact form submission
const [isLoading, setIsLoading] = useState(false);
const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
```

### Global State (Context/Providers)

#### Theme Provider (`components/providers/theme-provider.tsx`)
- **Purpose**: Manages dark/light theme across the app
- **Implementation**: Wraps next-themes provider
- **Usage**: Available in all components via useTheme hook

### State Dependencies

#### Component State Dependencies
```typescript
// Projects page - filter affects displayed projects
const filteredProjects = useMemo(() => 
  filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter),
  [filter]
);

// Stories page - selectedYear determines displayed content
const selectedStory = useMemo(() => 
  timelineData.find(item => item.year === selectedYear),
  [selectedYear]
);
```

#### Effect Dependencies
```typescript
// Header scroll effect
useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []); // No dependencies - runs once

// Cursor effects
useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  document.addEventListener('mousemove', handleMouseMove);
  return () => document.removeEventListener('mousemove', handleMouseMove);
}, []); // No dependencies - runs once
```

## 🎨 Styling & Design

### Design System

#### Color Palette
- **Primary**: Blue gradient (blue-600 to purple-600)
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Category-specific gradients for sections
- **Status**: Green (success), Red (error), Yellow (warning)

#### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 4xl to 6xl with bold weight
- **Body**: Base size with 1.5 line height
- **Code**: Monospace for technical content

#### Spacing System
- **Base Unit**: 4px (Tailwind's default)
- **Common Spacing**: 4, 8, 12, 16, 20, 24px
- **Layout Spacing**: 48, 64, 80px for sections

#### Responsive Breakpoints
```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Animation System

#### Framer Motion Variants
```typescript
// Page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Stagger animations for lists
const containerVariants = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};
```

#### CSS Animations
- **Pulse**: Background elements
- **Bounce**: Scroll indicator
- **Spin**: Loading states
- **Scale**: Hover effects

## 🧪 Testing

### Test Structure
```
__tests__/
├── components/
│   └── contact-form.test.tsx    # Contact form validation & submission
└── lib/
    └── utils.test.ts            # Utility functions
```

### Testing Patterns

#### Component Testing
```typescript
// Contact form tests
describe('ContactForm', () => {
  it('renders contact form with all fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });
  
  it('shows validation errors for empty required fields', async () => {
    // Test form validation
  });
});
```

#### Utility Testing
```typescript
// Utils tests
describe('sanitizeHtml', () => {
  it('sanitizes HTML characters', () => {
    const input = '<script>alert("xss")</script>';
    expect(sanitizeHtml(input)).toBe('&lt;script&gt;alert("xss")&lt;/script&gt;');
  });
});
```

### Test Configuration
- **Framework**: Jest with jsdom environment
- **Testing Library**: React Testing Library
- **Coverage**: Configured for components and lib directories
- **Mocks**: Next.js router and framer-motion mocked

## ⚡ Performance & SEO

### Performance Optimizations

#### Image Optimization
```typescript
// Next.js Image component with optimization
<Image
  src={project.image}
  alt={project.title}
  width={800}
  height={600}
  className="object-cover"
  loading="lazy"
/>
```

#### Code Splitting
- **Automatic**: Next.js automatically splits pages
- **Dynamic Imports**: Used for heavy components
- **Bundle Analysis**: Webpack bundle analyzer integration

#### Caching Strategy
- **Static Assets**: Long-term caching with versioning
- **API Routes**: Appropriate cache headers
- **Build Cache**: Next.js incremental builds

### SEO Implementation

#### Meta Tags (`app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: ['software engineer', 'web developer', 'react'],
  openGraph: {
    type: 'website',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [{ url: SITE_CONFIG.ogImage }]
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description
  }
};
```

#### Structured Data
- **JSON-LD**: Person schema for professional information
- **Breadcrumbs**: Navigation structure
- **Article**: Blog posts and project descriptions

## 🔒 Security

### Security Headers (`middleware.ts`)
```typescript
response.headers.set('X-XSS-Protection', '1; mode=block');
response.headers.set('X-Frame-Options', 'DENY');
response.headers.set('X-Content-Type-Options', 'nosniff');
response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
```

### Input Sanitization
```typescript
// HTML sanitization utility
export function sanitizeHtml(html: string): string {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
```

### Form Security
- **Honeypot Field**: Bot detection in contact form
- **CSRF Protection**: Built into Next.js
- **Input Validation**: Zod schema validation
- **Rate Limiting**: Planned for production

## 🚀 Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Git for version control

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/RajeshHsejar27/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment setup**
   ```bash
   # Create environment file (if needed)
   cp .env.example .env.local
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # TypeScript type checking
npm run format       # Format with Prettier
npm run format:check # Check formatting

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

### Development Workflow

1. **Feature Development**
   - Create feature branch from main
   - Implement feature with tests
   - Run linting and type checking
   - Submit pull request

2. **Code Standards**
   - TypeScript strict mode
   - ESLint configuration
   - Prettier formatting
   - Conventional commits

3. **Testing Strategy**
   - Unit tests for utilities
   - Component tests for UI
   - Integration tests for forms
   - E2E tests for critical paths

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository**
   - Import project to Vercel
   - Connect GitHub repository
   - Configure build settings

2. **Environment Variables**
   ```bash
   # Add to Vercel dashboard
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

3. **Build Configuration**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "installCommand": "npm install"
   }
   ```

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### CI/CD Pipeline (`.github/workflows/ci.yml`)

- **Triggers**: Push to main, pull requests
- **Jobs**: Lint, type-check, test, build
- **Node Versions**: 18.x, 20.x
- **Coverage**: Codecov integration

## 🤝 Contributing

### Contribution Guidelines

1. **Fork the repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make changes with tests**
4. **Commit with conventional format**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open pull request**

### Code Style

- **TypeScript**: Strict mode enabled
- **React**: Functional components with hooks
- **Styling**: Tailwind CSS classes
- **Testing**: Jest + React Testing Library
- **Commits**: Conventional commit format

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: nrh27magnum@gmail.com
- **LinkedIn**: [Rajesh N](https://www.linkedin.com/in/rajesh-n-b37238237/)
- **GitHub**: [RajeshHsejar27](https://github.com/RajeshHsejar27)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**