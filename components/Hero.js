"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToFlavours = () => {
    document
      .getElementById("flavours")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="
        min-h-screen flex items-center justify-center px-6
        bg-linear-to-b from-[#fff6ec] via-[#fdf1e5] to-[#fff6ec]
        relative overflow-hidden
      "
    >
      {/* Ambient glow */}
      <div
        className="
          absolute w-125 h-125
          bg-[#f5e6d3]
          rounded-full blur-[120px]
          opacity-60
        "
      />

      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: [0, -6, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          relative z-10
          flex flex-col items-center text-center
          px-6 py-8 sm:px-10 sm:py-10
          bg-white/65 backdrop-blur-md
          shadow-[0_20px_60px_rgba(0,0,0,0.10)]
          max-w-4xl w-full
        "
        // px-12 py-12 rounded-3xl
      >
        {/* Logo */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mb-6 p-4 rounded-2xl
            bg-[#fffaf3]
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
          "
        >
          <img
            src="/crevia-logo.png"
            alt="Crevia Desserts Logo"
            className="w-36 sm:w-44 md:w-56"
            // w-48 md:w-56
          />
        </motion.div>

        {/* Tagline */}
        {/* text-xl md:text-2xl */}
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-10 text-[#3b2f2f]">
          Handcrafted Cheesecake Cups, Made to Melt 🍰
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="https://www.instagram.com/creviadesserts"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-9 py-3 bg-[#3b2f2f] text-white
              rounded-full shadow-lg
            "
          >
            DM us on Instagram
          </motion.a>

          <motion.button
            onClick={scrollToFlavours}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-9 py-3 border border-[#3b2f2f]
              rounded-full
              hover:bg-[#3b2f2f] hover:text-white
              transition
            "
          >
            View Flavours
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}



