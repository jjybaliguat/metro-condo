"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import RevealAnimate from "@/helpers/reveal-animate";
import { motion, useAnimation, useInView } from "framer-motion";
import CondoCollage from "./CondoCollage";

const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section id="discover" className="w-full bg-secondary px-5 py-12 pb-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="section-title text-white">
          DISCOVER RESIDENTIAL PROPERTIES FOR RENT/SALE
        </h1>

        <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Video Embed */}
            <motion.div
                ref={ref}
                className="w-full md:w-1/2 aspect-video bg-black rounded-2xl overflow-hidden shadow-lg"
                variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                duration: 1,
                delay: 0.25,
                }}
            >
                <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/S2r6AZFWZYc"
                title="Empire East Highland City 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
            </motion.div>

            {/* Side Image Pair */}
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                {["/condopics/condopic1.jpg", "/condopics/condopic2.jpg"].map((src, i) => (
                <RevealAnimate key={i} direction={i === 0 ? -100 : 100}>
                    <div className="relative group overflow-hidden rounded-2xl shadow-md">
                    <Image
                        src={src}
                        alt={`condopic${i + 1}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    </div>
                </RevealAnimate>
                ))}
            </div>
            </div>

            {/* Grid Collage */}
            <CondoCollage />
        </div>
      </div>
    </section>
  );
};

export default Section3;
