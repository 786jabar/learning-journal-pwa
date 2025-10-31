# Learning Journal PWA - Design Guidelines

## Design Approach

**Selected Approach:** Modern Educational Portfolio System
Drawing inspiration from Notion's clarity, Linear's typography, and educational platforms like Coursera and Khan Academy, combined with portfolio aesthetics from Behance and Dribbble.

**Core Principles:**
- Clean, distraction-free reading experience
- Clear visual hierarchy emphasizing content over decoration
- Professional yet approachable aesthetic suitable for academic context
- Scannable layouts that highlight key information

## Typography

**Font Families:**
- Primary: Inter or DM Sans (headers, navigation, UI elements)
- Secondary: Source Sans Pro or Open Sans (body text, descriptions)
- Accent: JetBrains Mono or Fira Code (code snippets, technical content if needed)

**Type Scale:**
- Hero/Page Titles: text-4xl md:text-5xl lg:text-6xl, font-bold
- Section Headers: text-2xl md:text-3xl, font-semibold
- Subsection Headers: text-xl md:text-2xl, font-medium
- Card Titles: text-lg md:text-xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Small Text/Metadata: text-sm, font-normal
- Navigation Links: text-base md:text-lg, font-medium

## Layout System

**Spacing Primitives:**
Use Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Tight spacing (components): p-2, p-4, gap-2, gap-4
- Medium spacing (sections): p-6, p-8, py-12, py-16
- Generous spacing (page sections): py-16 md:py-20 lg:py-24
- Container padding: px-4 md:px-8 lg:px-12

**Grid Structure:**
- Max container width: max-w-7xl mx-auto
- Content width: max-w-4xl for reading content
- Two-column layouts: grid md:grid-cols-2 gap-8
- Three-column layouts: grid md:grid-cols-2 lg:grid-cols-3 gap-6

**Responsive Breakpoints:**
- Mobile: Base styles (< 768px)
- Tablet: md: (768px - 1024px)
- Desktop: lg: (1024px+)

## Component Library

### Navigation Header
**Desktop:** Horizontal navigation bar with logo/name left, menu items center/right, fixed position optional
- Height: h-16 md:h-20
- Links with hover underline effect
- Active page indicator (underline or subtle background)

**Mobile:** Hamburger menu transforming to full-screen overlay or slide-in drawer
- Icon: Heroicons menu/close icons
- Vertical stacked links with generous tap targets (min-h-12)

### Hero Section (Home Page Only)
Full-width section with professional student portrait or abstract educational imagery
- Height: min-h-[60vh] md:min-h-[70vh]
- Overlay gradient for text readability
- Centered content with name, student ID, and brief tagline
- Primary CTA button with backdrop blur (backdrop-blur-md bg-white/20)

### Content Cards
**Journal Entry Cards:**
- Rounded corners: rounded-lg md:rounded-xl
- Subtle elevation: shadow-sm hover:shadow-md transition
- Structure: Date badge (top), title (text-xl font-semibold), preview text (line-clamp-3), "Read More" link
- Spacing: p-6 md:p-8

**Project Cards:**
- Image thumbnail at top (aspect-ratio-video or aspect-ratio-square)
- Title, description, technologies used (badge pills)
- Links to GitHub/live demo
- Grid layout: grid md:grid-cols-2 gap-6 lg:gap-8

### Forms & Interactive Elements
- Input fields: rounded-lg border with focus ring, p-3 md:p-4
- Buttons: rounded-full or rounded-lg, px-6 py-3, font-medium
- Primary buttons: Solid background with hover lift effect
- Secondary buttons: Border outline with hover background

### Footer
Multi-column layout on desktop, stacked on mobile
- Copyright notice, social links (GitHub, LinkedIn), contact info
- Quick navigation links
- Padding: py-12 md:py-16

### About Page Layout
Two-column split on desktop:
- Left: Profile photo (rounded-full or rounded-2xl, w-48 md:w-64)
- Right: Bio, skills, interests
- Skills displayed as badge grid
- Timeline of academic/project milestones

### Journal Page Layout
List view with filters/categories
- Date-based organization (chronological reverse order)
- Week labels as sticky section headers
- Reflection cards with expandable content
- Tag system for topics/concepts

### Projects Page Layout
Gallery grid with featured project highlight
- Featured project: Larger card at top, full width
- Regular projects: Grid below (2-3 columns on desktop)
- Filter buttons for project categories

## Images

**Hero Image (Home Page):**
- Professional student photo or abstract educational/technology themed imagery
- Placement: Full-width background with overlay gradient
- Dimensions: Minimum 1920x1080, optimized for web
- Treatment: Subtle blur or gradient overlay ensuring text readability

**Profile Photo (About Page):**
- Circular or rounded square professional headshot
- Placement: Left side or top of about section
- Dimensions: 400x400px minimum

**Project Thumbnails:**
- Screenshots or mockups of projects
- Placement: Top of each project card
- Dimensions: 16:9 aspect ratio, minimum 800x450px
- Treatment: Rounded corners matching card style

**Optional Decorative Elements:**
- Abstract geometric patterns for section backgrounds (SVG)
- Icon illustrations for empty states
- Small accent graphics for section dividers

**Icons:**
Use Heroicons throughout for consistency:
- Navigation: menu, x-mark, home, document-text, folder, user
- Social: GitHub, LinkedIn (via simple-icons if needed)
- Actions: arrow-right, external-link, calendar, tag

No background images for sections other than hero - maintain clean, focused aesthetic.