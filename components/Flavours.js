"use client";

import { motion } from "framer-motion";

const flavours = [
    {
        title: "Oreo Melt Cup",
        desc: "Rich chocolate cheesecake layered with crushed Oreo. Deep. Smooth. Addictive.",
        bg: "from-[#1e1e1e] to-[#2a2a2a]",
        text: "text-white",
        glow: "bg-white/10",
    },
    {
        title: "Lotus Luxe Cup",
        desc: "Creamy cheesecake infused with Lotus Biscoff caramel magic.",
        bg: "from-[#c49a5a] to-[#e2c089]",
        text: "text-[#3b2f2f]",
        glow: "bg-white/30",
    },
];

export default function Flavours() {
    return (
        <section id="flavours" className="py-20 sm:py-28 px-6 bg-[#fff6ec]">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl font-serif text-center mb-20"
            >
                Signature Flavours
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                {flavours.map((f, i) => (
                    
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ rotateX: 1.5, rotateY: -1.5 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        style={{ transformStyle: "preserve-3d" }}
                        className={`
    relative rounded-3xl p-8 sm:p-12 md:p-14
    bg-linear-to-br ${f.bg}
    shadow-[0_20px_60px_rgba(0,0,0,0.15)]
    overflow-hidden ${f.text}
  `}
                    >

                        {/* Floating glow (dessert aura) */}
                        <motion.div
                            animate={{ y: [0, -18, 0] }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className={`
                absolute -top-24 -right-24
                w-72 h-72 rounded-full
                blur-[90px]
                ${f.glow}
              `}
                        />

                        {/* Optional image placeholder (future-proof) */}
                        {/*
            <motion.img
              src="/oreo-cup.png"
              alt={f.title}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute right-6 top-6 w-44"
            />
            */}

                        <h3 className="text-3xl font-serif mb-4 relative z-10">
                            {f.title}
                        </h3>

                        <p className="text-base sm:text-lg leading-relaxed max-w-md relative z-10">
                            {f.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
