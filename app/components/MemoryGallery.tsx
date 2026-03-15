"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/memories/photo1.jpeg",
  "/memories/photo2.jpeg",
  "/memories/photo3.jpeg",
  "/memories/photo4.jpeg",
];

export default function MemoryGallery() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Memories
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="glass overflow-hidden rounded-2xl shadow-xl break-inside-avoid"
          >
            <Image
              src={img}
              alt="memory"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
