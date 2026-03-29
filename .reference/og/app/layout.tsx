import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&family=Fraunces:opsz,wght,SOFT,WONK@9..144,100..900,0..100,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
