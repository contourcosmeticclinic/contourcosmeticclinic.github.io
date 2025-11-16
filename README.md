## Project Structure

src/
├─ app/
│ ├─ (site)/
│ │ ├─ layout.tsx
│ │ ├─ page.tsx // Home Page
│ │ ├─ about/
│ │ │ └─ page.tsx
│ │ ├─ treatments/
│ │ │ ├─ page.tsx // All treatments
│ │ │ ├─ hair-transplant/
│ │ │ │ └─ page.tsx
│ │ │ ├─ skin-care/
│ │ │ │ └─ page.tsx
│ │ │ └─ laser-treatment/
│ │ │ └─ page.tsx
│ │ ├─ gallery/
│ │ │ └─ page.tsx
│ │ ├─ contact/
│ │ │ └─ page.tsx
│ │ ├─ book-appointment/
│ │ │ └─ page.tsx
│ │ └─ faq/
│ │ └─ page.tsx
│ │
│ ├─ api/
│ │ ├─ appointment/
│ │ │ └─ route.ts // POST appointment booking
│ │ └─ contact/
│ │ └─ route.ts // POST contact form
│ │
│ ├─ sitemap.xml/route.ts // SEO
│ └─ robots.txt/route.ts // SEO
│
├─ components/
│ ├─ layout/
│ │ ├─ Navbar.tsx
│ │ ├─ Footer.tsx
│ │ └─ MobileMenu.tsx
│ │
│ ├─ ui/ // Headless UI + Custom Components
│ │ ├─ button.tsx
│ │ ├─ input.tsx
│ │ ├─ dropdown.tsx
│ │ ├─ modal.tsx
│ │ ├─ accordion.tsx
│ │ ├─ dialog.tsx
│ │ ├─ tabs.tsx
│ │ └─ card.tsx
│ │
│ ├─ home/
│ │ ├─ Hero.tsx
│ │ ├─ ServicesSection.tsx
│ │ ├─ WhyChooseUs.tsx
│ │ ├─ Testimonials.tsx
│ │ ├─ ClinicHighlights.tsx
│ │ ├─ BeforeAfterSlider.tsx
│ │ └─ CTASection.tsx
│ │
│ ├─ common/
│ │ ├─ SectionTitle.tsx
│ │ ├─ Logo.tsx
│ │ └─ SocialIcons.tsx
│
├─ lib/
│ ├─ utils.ts
│ ├─ seo.ts
│ ├─ constants.ts
│ ├─ validations/
│ │ ├─ appointmentSchema.ts
│ │ ├─ contactSchema.ts
│ │ └─ newsletterSchema.ts
│ └─ hooks/
│ ├─ useScroll.ts
│ ├─ useMobileMenu.ts
│ └─ useLockBodyScroll.ts
│
├─ styles/
│ ├─ globals.css
│ └─ animations.css
│
├─ types/
│ ├─ appointment.ts
│ ├─ treatments.ts
│ ├─ gallery.ts
│ └─ common.ts
│
├─ data/
│ ├─ treatments.ts
│ ├─ faq.ts
│ └─ reviews.ts
│
├─ public/
│ ├─ images/
│ │ ├─ hero/
│ │ ├─ treatments/
│ │ ├─ before-after/
│ │ ├─ doctors/
│ │ ├─ clinic/
│ │ └─ icons/
│ └─ videos/
│
└─ middleware.ts

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
