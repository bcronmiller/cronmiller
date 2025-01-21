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
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full`}>
        <main className="min-h-screen relative bg-gradient-to-br from-blue-400 via-white to-blue-500">
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          <div className="relative">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}