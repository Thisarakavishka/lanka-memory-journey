"use client";

import { motion } from "framer-motion";

export default function MemoryVideo() {
  return (
    <section className="py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        A Special Moment
      </motion.h2>

      <div className="glass max-w-md mx-auto p-3">
        <video controls className="rounded-lg w-full">
          <source src="/memories/memory.mp4" />
        </video>
      </div>
    </section>
  );
}
