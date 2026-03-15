"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/memories/photo1.jpeg",
  "/memories/photo2.jpeg",
  "/memories/photo3.jpeg",
];

export default function MemoryGallery() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Memories
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {/* First two images */}
        {images.slice(0, 2).map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="glass overflow-hidden"
          >
            <Image
              src={img}
              alt="memory"
              width={600}
              height={600}
              className="w-full h-56 md:h-72 object-cover"
            />
          </motion.div>
        ))}

        {/* Third image (rotated fix) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
          className="glass overflow-hidden col-span-2 flex items-center justify-center"
        >
          <Image
            src={images[2]}
            alt="memory horizontal"
            width={800}
            height={800}
            className="object-contain rotate-90 max-h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
