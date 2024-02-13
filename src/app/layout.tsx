import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header/Header'
import TanstackProvider from '@/providers/TanstackProvider'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Film World: Something',
  description: 'A movie gallery',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 dark:bg-white`}>
        <TanstackProvider>
          <Header />
          {children}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  )
}
