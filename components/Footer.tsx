import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 p-8 max-w-screen-xl mx-auto">
        {/* Company Info */}
        <div className="flex flex-col gap-4 md:w-[40%]">
          <h1 className="text-2xl md:text-3xl font-bold">METRO CONDO LIVING</h1>
          <p className="text-sm leading-relaxed">
            Libertad Heights, Domingo M. Guevarra, Highway Hills,<br />
            Mandaluyong City, Metro Manila, Philippines, 1550
          </p>
          <p className="text-sm">📞 +63 915 982 8384</p>
          <p className="text-sm">
            <a href="mailto:builders@metrocondoliving.com" className="underline hover:text-gray-300 transition">builders@metrocondoliving.com</a><br />
            <a href="mailto:metrocondolifestyle@gmail.com" className="underline hover:text-gray-300 transition">metrocondolifestyle@gmail.com</a>
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Useful Links</h2>
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/team', label: 'Our Team' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link href={href} key={label} className="flex items-center gap-2 hover:translate-x-1 transition text-sm">
              <span>&gt;</span> {label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Social Networks</h2>
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/share/1EDCUJrsAz/?mibextid=wwXIfr" target="_blank">
              <Image
                src="/fblogo.png"
                alt="Facebook"
                width={40}
                height={40}
                className="rounded-full hover:scale-110 transition"
              />
            </Link>
            <Link href="https://www.youtube.com/@markyjayromualdez4219" target="_blank" className='relative rounded-full h-[40px] w-[40px]'>
              <Image
                src="/ytlogo.png"
                alt="YouTube"
                fill
                style={{
                    objectFit: "cover",
                    objectPosition: "center"
                }}
                className="h-full w-full rounded-full hover:scale-110 transition"
              />
            </Link>
            <Link href="https://www.instagram.com/metro_condo_living?igsh=bmVqeDJlMjdlc2xv&utm_source=qr" target="_blank">
              <Image
                src="/insta.jpg"
                alt="Instagram"
                width={40}
                height={40}
                className="rounded-full hover:scale-110 transition"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/70 px-6 md:px-12 py-4 text-xs md:text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-center md:text-left">© 2023 Metro Condo Living. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms-of-use" className="hover:text-gray-300 transition">TERMS OF USE</Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:text-gray-300 transition">PRIVACY POLICY</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
