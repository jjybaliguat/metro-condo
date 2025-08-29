import { Footer, Navbar } from '@/components'
import './globals.css'
import { ReduxProvider } from '@/redux/provider'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import {headers} from 'next/headers'
import Script from "next/script";

export const metadata = {
  title: 'Condo for sale or rent in Pasig, San Juan and Mandaluyong.',
  // title: 'Residential | Metro Condo Living | Mandaluyong',
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
          <script defer src="https://app.fastbots.ai/embed.js" data-bot-id="cmewa2zgn03wapg1llwknmg7i"></script>
          {/* <Link
          href="/contact"
            className='flex items-center gap-1 origin-bottom-right fixed bottom-1 right-0 rounded-[14px]
            bg-[darkred] text-white p-2 md:p-3 z-50 hover:scale-[110%] drop-shadow-md hover:drop-shadow-2xl md:text-[20px]'
          >
            <h1>Get Quote</h1>
            <PencilSquareIcon className="h-6 w-6 text-white" />
          </Link> */}
          <Footer />
        </ReduxProvider>
        {/* <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/66f65a074cbc4814f7dfbc33/1i8p4vbiu';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script--> */}
        </body>
    </html>
  )
}
