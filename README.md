# TreJay Website

The official website for TreJay Network - the blockchain network with 3JAY as its native cryptocurrency.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Vercel** - Deployment and hosting

## Features

- **Clean, minimal design** with investor-grade UI
- **Mobile-first responsive** layout
- **SEO optimized** with proper meta tags and sitemap
- **Fast performance** with static generation
- **Accessible** components with focus management

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This website is designed to be deployed on [Vercel](https://vercel.com). Connect your GitHub repository to Vercel for automatic deployments.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/trejay-network/trejay-website)

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage content
│   └── sitemap.ts       # Dynamic sitemap
├── components/          # Reusable components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Section.tsx      # Section wrapper
│   └── ResourceCard.tsx # Resource grid cards
└── lib/
    └── links.ts         # External URL constants
```

## Links

- **Website**: https://trejay.com
- **GitHub**: https://github.com/trejay-network
- **Documentation**: https://github.com/trejay-network/docs
- **Community**: https://t.me/trejaynetwork
