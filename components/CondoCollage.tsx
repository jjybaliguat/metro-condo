"use client"

import Image from "next/image";
import { useState } from "react";

const images = [
  "/condopics/condopic-3.jpg",
  "/condopics/condopic-4.jpg",
  "/condopics/condopic-5.jpg",
  "/condopics/condopic-6.jpg",
  "/condopics/condopic-7.jpg",
  "/condopics/condopic-8.jpg",
  "/condopics/condopic-9.jpg",
  "/condopics/condopic-10.jpg",
  "/condopics/condopic-11.jpg",
  "/condopics/condopic-12.jpg",
  "/condopics/condopic-13.jpg",
  "/condopics/condopic-14.jpg",
  "/condopics/condopic-15.jpg",
  "/condopics/condopic-16.jpg",
  "/condopics/condopic-17.jpg",
  "/condopics/condopic-18.jpg",
  "/condopics/condopic-19.jpg"
];

export default function CondoCollage() {
    const [showAll, setShowAll] = useState(false);

    const visibleImages = showAll ? images : images.slice(0, 3);
    
  return (
    <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {visibleImages.map((src, i) => (
            <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-md aspect-[4/3] group"
            >
                <Image
                src={src}
                alt={`Condo image ${i + 1}`}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            ))}
        </div>
        {images.length > 3 && (
            <div className="mt-6 text-center">
            <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 bg-white text-secondary font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            >
                {showAll ? "View Less" : "View More"}
            </button>
            </div>
        )}
    </div>
  );
}
