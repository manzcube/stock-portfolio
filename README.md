Portfolio Tracker — Next.js + TypeScript

A minimalist, investor-focused public portfolio website built with Next.js, TypeScript, and TailwindCSS.
It allows you to showcase your equity portfolio, watchlist, investment theses, and performance—cleanly and professionally.

Perfect for sharing your portfolio with friends, clients, or your audience.

Features

🧠 Portfolio Dashboard — allocation visuals, market cap, P/S, price performance.

📈 Watchlist — interest scoring, fundamentals, deep-dive pages.

⏳ Open Positions — holding time, days remaining, overdue flag.

📆 Annual Performance — year-over-year returns.

📝 Deep Dive Pages — description, thesis, bear case, custom banner images.

⚡ Blazing fast (Next.js App Router, optimized images).

🎨 Clean UI (TailwindCSS + minimalist design).

🔧 Fully editable — just update one data file.

Tech Stack

Next.js 14 (App Router)

TypeScript

TailwindCSS

Clearbit Logos for company icons

Local JSON/TS data for full customization

Getting Started

1. Clone the repository
   git clone https://github.com/YOUR_USERNAME/portfolio-tracker.git
   cd portfolio-tracker

2. Install dependencies
   npm install

# or

pnpm install

# or

yarn install

3. Run the development server
   npm run dev

Your site is now running at:

http://localhost:3000

Customize Your Portfolio

All your data lives in:

/src/data/portfolio.ts
/src/data/watchlist.ts

Example entry
{
ticker: "AAPL",
name: "Apple Inc.",
allocationPercentage: 0.20,
currentPrice: 185.92,
change1Y: 0.015,
marketCapUsd: 2900000000000,
priceToSales: 7.2,
iconURL: "https://logo.clearbit.com/apple.com",
coverImageURL: "/ticker.jpeg",
description: "Short overview of the business...",
thesis: ["Your thesis point 1", "Point 2"],
bearCase: ["Your bear point 1", "Point 2"]
}

Add or remove holdings

Simply edit the array:

export const PORTFOLIO_DATA = [ ... ]

Update Watchlist

Same idea:

export const WATCHLIST_DATA = [ ... ]

Deploying

Deploy easily on Vercel (recommended):

Push your repo to GitHub.

Go to https://vercel.com

Import project → Deploy.

Your portfolio becomes public instantly.

Why This Project Exists

Investors often want a clean public page to show:

current holdings

performance

research notes

conviction levels

This project provides a simple, beautiful framework to do exactly that.

License

MIT License — free to use and modify.

If you want, I can also write:

a project banner,

a demo GIF,

a custom badge section,

or a copy-paste GitHub description block.

Just ask.
