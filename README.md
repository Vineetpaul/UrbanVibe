UrbanVibe

UrbanVibe is a modern fashion e-commerce storefront built with React. The current home page includes a responsive navigation bar and a promotional winter-sale banner with product highlights, delivery information, payment details, and animated content reveals.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- AOS for scroll animations
- React Icons
- React Slick and Slick Carousel for product sliders

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run lint checks

```bash
npm run lint
```

## Project Structure

```text
src/
├── assets/             Images used throughout the storefront
├── Components/
│   ├── Banner/         Promotional sale banner
│   ├── Footer/         Site footer
│   ├── Hero/           Hero section
│   ├── Navbar/         Main navigation
│   ├── Popup/           Order popup UI
│   ├── Products/        Product content
│   ├── Subscribe/      Newsletter subscription section
│   ├── Testimonials/   Customer testimonials
│   └── TopProducts/    Featured products
├── App.jsx             Application composition and AOS setup
├── App.css             App-level styles
├── index.css           Tailwind entry styles
└── main.jsx            React application entry point
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
