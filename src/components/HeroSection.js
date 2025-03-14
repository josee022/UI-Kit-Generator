"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [bgPosition, setBgPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgPosition((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[40vh] flex flex-col items-center justify-center text-center px-6">
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "200% 200%",
          backgroundPosition: `${bgPosition}% 50%`,
          transition: "background-position 0.5s ease-in-out",
        }}
      />

      <motion.h1
        className="text-7xl font-extrabold text-white relative z-10 drop-shadow-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎨 UI Kit Generator
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 max-w-3xl mt-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Diseña componentes modernos en tiempo real, personaliza estilos y copia
        código con un clic. ¡Optimiza tu desarrollo con TailwindCSS y UI Kit
        Generator!
      </motion.p>

      <motion.div
        className="flex space-x-6 mt-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link href="#funcionalidades">
          <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-xl shadow-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            🚀 Explorar UI Kit
          </Button>
        </Link>
        <Link href="#tailwind-guide">
          <Button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-8 py-4 rounded-xl shadow-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            📖 Guía Tailwind
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
