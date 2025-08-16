import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaishnavi Raj - Futuristic Portfolio 2040',
  description: 'Full-Stack Developer & DevOps Engineer | AI/ML Enthusiast | Cloud Computing Expert',
  keywords: 'Vaishnavi Raj, Full-Stack Developer, DevOps, AI/ML, Cloud Computing, React, Node.js, Kubernetes',
  authors: [{ name: 'Vaishnavi Raj' }],
  creator: 'Vaishnavi Raj',
  openGraph: {
    title: 'Vaishnavi Raj - Futuristic Portfolio 2040',
    description: 'Full-Stack Developer & DevOps Engineer | AI/ML Enthusiast | Cloud Computing Expert',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaishnavi Raj - Futuristic Portfolio 2040',
    description: 'Full-Stack Developer & DevOps Engineer | AI/ML Enthusiast | Cloud Computing Expert',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00f5ff" />
      </head>
      <body className={`${inter.className} bg-cyber-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
