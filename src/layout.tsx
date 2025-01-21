import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100">
          {/* Removed the undefined bg-grid-pattern div */}
          <div className="relative container mx-auto px-4">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}