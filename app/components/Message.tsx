"use client";

import { motion } from "framer-motion";

export default function Message() {
  return (
    <section className="py-24 px-6 text-center max-w-xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-lg leading-8"
      >
        Even though you are going back to your country, these memories will
        always stay. In this short journey, you became not just a friend, but a
        sister. May your future be filled with success, happiness, and beautiful
        adventures. Sri Lanka will always remember you.
      </motion.p>
    </section>
  );
}
