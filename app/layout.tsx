import { Footer, Navbar } from '@/components'
import './globals.css'
import { ReduxProvider } from '@/redux/provider'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import {headers} from 'next/headers'

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

  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get('x-url') || "";
  console.log(header_url)

  return (
    <html lang="en">
      <body className="relative">
        <ReduxProvider>
          <Navbar />
          {children}
          <Link
          href="/contact"
            className='flex items-center gap-1 origin-bottom-right fixed bottom-1 right-0 rounded-[14px]
            bg-[darkred] text-white p-2 md:p-3 z-50 hover:scale-[110%] drop-shadow-md hover:drop-shadow-2xl md:text-[20px]'
          >
            <h1>Get Quote</h1>
            <PencilSquareIcon className="h-6 w-6 text-white" />
          </Link>
          <Footer />
        </ReduxProvider>
        </body>
    </html>
  )
}
