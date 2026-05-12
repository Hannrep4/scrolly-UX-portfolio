import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Hannah | UX/UI Designer",
  description:
    "Portfolio of Hannah — aspiring UX/UI designer, researcher, and digital media hobbyist.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
