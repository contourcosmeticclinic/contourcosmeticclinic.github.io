## Getting Started

First, run the development server:

```bash
npm install
```

then,

```bash
npm run dev
```

##Colors and Font
# Design System: Colors & Fonts

This document outlines the primary **colors** and **fonts** used across the project to ensure a consistent visual identity.

---

## 🎨 Colors

### **Primary Brand Colors**
| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-primary` | `#4b2e2e` | Main brand color |
| `--color-secondary` | `#7b4f4f` | Bold headings, highlights |

### **Text Colors**
| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-body-text` | `#1e1e1e` | Paragraphs, labels, general body text |
| `--color-white` | `#ffffff` | White text or backgrounds |

### **Background Colors**
| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-bg-light` | `#f7f2eb` | Light beige background |
| `--color-bg-dark` | `#c9b8a4` | Deep beige for sections/cards |

> 💡 These colors are defined as CSS variables for easy theming and consistent usage across components.

---

## 🖋 Fonts

### **Inter**
```javascript
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
```
