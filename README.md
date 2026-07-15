# Elementum — Figma to React

A pixel-accurate **React + Tailwind CSS** conversion of a Figma design — a playful creative studio landing page featuring custom SVG illustrations, scroll-triggered animations, and a fully responsive layout across mobile, tablet, and desktop.

## Live Demo
- **Live Demo:** [https://elementum-react-gamma.vercel.app/]

---

# Overview

This project was built as part of a technical assignment to evaluate the ability to convert a Figma design into a functional, responsive React application with clean, reusable code and strong UI/UX attention to detail.

---

# Features

- Pixel-accurate implementation of the provided Figma design.
- Fully responsive layout across mobile, tablet, and desktop.
- Custom hand-drawn SVG decorations (marker underlines, blobs, squiggles, curved arrows) built from scratch.
- Scroll-triggered animations using the native **IntersectionObserver API** (no animation library).
- Smooth micro-interactions including hover effects, floating avatar animation, and blob pulse.
- Reusable component architecture with shared UI components.

---

# Tech Stack

| Layer | Technology |
|--------|------------|
| Framework | React (Vite) |
| Styling | Tailwind CSS v4 |
| Fonts | Baloo 2 (Google Fonts) |
| Animations | CSS Keyframes + IntersectionObserver |
| Deployment | Vercel |

---

# Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TomorrowSection.jsx
│   ├── OffersSection.jsx
│   ├── Footer.jsx
│   └── ui/
│       ├── AvatarCluster.jsx
│       ├── Highlight.jsx
│       ├── MarkerUnderline.jsx
│       ├── Blob.jsx
│       └── Squiggle.jsx
├── hooks/
│   └── useScrollReveal.js
├── App.jsx
├── main.jsx
└── index.css
```

---

# Setup Instructions

## Prerequisites

- Node.js (v18 or later)

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/elementum-figma-to-react.git

cd elementum-figma-to-react
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Start Development Server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

## 4. Build for Production

```bash
npm run build
```

---

# Design Decisions

### Component-first Architecture

Repeated UI elements such as highlighted text, marker underlines, avatar clusters, and decorative blobs were extracted into reusable components instead of duplicating code.

### Lightweight Animations

Animations are implemented using CSS keyframes and the browser's native **IntersectionObserver API**, avoiding third-party animation libraries to keep the bundle lightweight.

### Tailwind CSS v4

Design tokens including colors, fonts, and animation keyframes are configured directly in `index.css` using Tailwind CSS v4's `@theme` directive.

### Placeholder Images

Since the original images from Figma were unavailable, free placeholder images from **pravatar.cc** and **picsum.photos** were used for demonstration purposes.

### Responsive Design

The layout has been optimized for desktop, tablet, and mobile devices while maintaining spacing, typography, and visual consistency with the original Figma design.

---
