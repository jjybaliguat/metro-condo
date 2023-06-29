import { Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Metro Condo Living',
  description: 'Stunning condo unit in the metro.',
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        </body>
    </html>
  )
}
