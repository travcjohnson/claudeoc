import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Claude Code OC | Claude Code Meetups in Orange County',
  description: "Join Orange County's growing Claude AI community. Attend meetups, learn from peers, and build amazing things with Claude Code.",
  keywords: ['Claude Code', 'meetups', 'Orange County', 'OC', 'AI coding', 'Irvine', 'Anaheim', 'Newport Beach'],
  openGraph: {
    title: 'Claude Code OC | Orange County\'s Claude Code Community',
    description: "Southern California's Claude Code Community. Meetups, workshops, and a network of builders.",
    url: 'https://claudeoc.com',
    siteName: 'Claude Code OC',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
