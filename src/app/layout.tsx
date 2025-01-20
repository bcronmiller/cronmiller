import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Cronmiller Name',
  description: 'History and origins of the Cronmiller family name',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          {children}
        </main>
      </body>
    </html>
  )
}