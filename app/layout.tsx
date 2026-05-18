import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaxTrack — Quarterly Tax Estimator for Freelancers',
  description: 'Automatically estimate your quarterly taxes from freelance invoices. Connects to QuickBooks, FreshBooks, and Wave.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c7546d4a-0c59-4050-977d-9f8e69d78ac4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
