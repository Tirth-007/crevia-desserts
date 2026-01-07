import { motion } from "framer-motion";

export default function StickyInstagram() {
  return (
    <motion.a
      href="https://www.instagram.com/creviadesserts"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed bottom-5 right-5 z-50
        px-6 py-3 rounded-full
        bg-[#3b2f2f] text-white
        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        md:hidden
      "
    >
      Order on Instagram 🍰
    </motion.a>
  );
}
