import { Footer, Navbar } from '@/components'
import './globals.css'
import { ReduxProvider } from '@/redux/provider'

export const metadata = {
  title: 'Residential | Metro Condo Living | Mandaluyong',
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
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
        </body>
    </html>
  )
}
