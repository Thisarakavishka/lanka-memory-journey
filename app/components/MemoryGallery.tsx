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
    <section className="py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Memories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.5 }}
            className="glass p-2 shadow-lg"
          >
            <Image
              src={img}
              alt="memory"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
