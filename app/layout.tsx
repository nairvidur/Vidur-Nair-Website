import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Vidur Nair - Financial Engineer & Derivatives Trader',
  description: 'Derivatives trader and financial engineer with a track record of delivering double-digit portfolio returns',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

