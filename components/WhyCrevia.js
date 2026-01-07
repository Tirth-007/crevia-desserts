"use client";

import { motion } from "framer-motion";

const points = [
  "Premium Cream Cheese",
  "Handcrafted Cups",
  "No Artificial Taste",
  "Pure Indulgence",
];

export default function WhyCrevia() {
  return (
    <section className="py-20 bg-white px-6">
      <h2 className="text-4xl font-serif text-center mb-12">
        Why Crevia?
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-2xl bg-[#fff6ec]"
          >
            <p className="font-medium">{p}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
