# Vidur Nair - Professional Website

A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Professional resume and portfolio overview
- **Projects Page**: Detailed explanations of quantitative finance and machine learning projects
- **Downloads Page**: Access to professional documents and project documentation

## Getting Started

### Quick Start (Recommended)

**For PowerShell:**
```powershell
.\start.ps1
```

**For Command Prompt (CMD):**
```cmd
start.bat
```

This single command will:
- Fix execution policy if needed
- Install Node.js automatically if missing
- Install all dependencies
- Start the development server

Then open [http://localhost:3000](http://localhost:3000) in your browser!

### Manual Setup

**Prerequisites:**
- Node.js 18+ installed ([Download](https://nodejs.org/))
- npm (comes with Node.js)

**Steps:**

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

Or use the provided scripts:
- `.\run.ps1` (PowerShell) or `run.bat` (CMD) - Start server only
- `.\setup.ps1` (PowerShell) or `setup.bat` (CMD) - Install dependencies only

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
Vidur-Nair-Website/
├── app/
│   ├── page.tsx          # Home page
│   ├── projects/
│   │   └── page.tsx      # Projects page
│   ├── downloads/
│   │   └── page.tsx      # Downloads page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── Navigation.tsx    # Navigation component
├── public/               # Static assets (add PDFs here)
└── package.json
```

## Adding PDF Downloads

The download functionality is already set up! To add your PDF files:

1. Place your PDF files in the `public/downloads/` directory
2. Make sure the filenames match the ones listed in the downloads page (or update the page to match your filenames)
3. The API route at `app/api/downloads/[filename]/route.ts` will automatically serve the files securely

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## License

Private - All rights reserved
