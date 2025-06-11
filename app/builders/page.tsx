"use client"
import { PageWrapper } from '@/helpers/page-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    id: 'air-residence-makati',
    name: 'Air Residence - Makati',
    location: 'Makati City',
    description: 'Description her....',
    images: 
    [
      '/builders-projects/air-residence/img-1.JPG', 
      '/builders-projects/air-residence/img-2.JPG', 
      '/builders-projects/air-residence/img-3.JPG',
      '/builders-projects/air-residence/img-4.JPG',
    ]
  },
  {
    id: 'park-triangle-bgc',
    name: 'Park Triangle - BGC',
    location: 'BGC',
    description: 'Description here...',
    images: [
      '/builders-projects/park-triangle/img-1.JPG',
      '/builders-projects/park-triangle/img-2.JPG',
      '/builders-projects/park-triangle/img-3.JPG',
      '/builders-projects/park-triangle/img-4.JPG',
      '/builders-projects/park-triangle/img-5.JPG',
      '/builders-projects/park-triangle/img-6.JPG',
      '/builders-projects/park-triangle/img-7.JPG',
    ]
  },
  {
    id: 'solstice-makati-circuit',
    name: 'Solstice - Makati Circuit',
    location: 'Makati City',
    description: 'Description here...',
    images: [
      '/builders-projects/solstice/img-1.JPG',
      '/builders-projects/solstice/img-2.JPG',
      '/builders-projects/solstice/img-3.JPG',
      '/builders-projects/solstice/img-4.JPG',
      '/builders-projects/solstice/img-5.JPG',
      '/builders-projects/solstice/img-6.JPG',
      '/builders-projects/solstice/img-7.JPG',
    ]
  },
  {
    id: 'studio-7',
    name: 'Studio 7 - QC',
    location: 'Quezon City',
    description: 'Description here...',
    images: [
      '/builders-projects/studio-7/img-1.JPG',
      '/builders-projects/studio-7/img-2.JPG',
      '/builders-projects/studio-7/img-3.JPG',
      '/builders-projects/studio-7/img-4.JPG',
      '/builders-projects/studio-7/img-5.JPG',
      '/builders-projects/studio-7/img-6.JPG',
    ]
  },
];

function ProjectCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-56 w-full overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt="Project image"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        className="transition duration-500 ease-in-out"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
}

export default function BuildersPage() {
  return (
    <PageWrapper>
      <main>
        {/* Hero Section */}
        <section
          className="pt-4 md:pt-0 relative h-fit md:h-[60vh] pb-6 bg-cover bg-center"
          style={{ backgroundImage: "url('/builders-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl lg:text-6xl font-serif font-semibold">
              Building Exceptional Spaces
            </h1>
            <p className="mt-4 text-lg max-w-2xl">
              Discover our mission, legacy, and the signature Metro Condo Living projects we've brought to life.
            </p>
            <a
              href="#projects"
              className="mt-6 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md transition"
            >
              Explore Projects
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              At Metrocondo Living Builders, we fuse craftsmanship with innovation. Over the years, we've delivered premium condominium developments focused on sustainability, community, and timeless design.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div className="group block bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl">
                  <ProjectCarousel images={p.images} />
                  <Link key={p.id} href={`/projects/${p.id}`}>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
                      <p className="text-sm text-gray-500">
                        {p.location}
                      </p>
                      <p className="mt-3 text-gray-700 text-sm">{p.description}</p>
                    </div>
                  </Link>
                </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-yellow-100">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl font-semibold mb-4">Ready to Partner?</h2>
            <p className="mb-6 text-gray-700">
              Whether you’re looking to develop your next project or explore partnership opportunities, Metro Condo Living Builders is here to craft excellence.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
