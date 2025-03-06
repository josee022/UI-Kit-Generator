"use client";
import VantaBackground from "@/components/VantaBackground";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GuideTailwind } from "@/components/GuideTailwind";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <VantaBackground className="min-h-screen w-full">
      <div className="relative text-white flex flex-col items-center justify-center px-6 min-h-full">
        <motion.div
          className="absolute top-8 left-4 p-3 rounded-full bg-black/40 border-2 border-blue-500 shadow-[0_0_15px_#00f]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/UIKitGenerator.png"
            alt="UIKitGenerator Logo"
            width={160}
            height={160}
            className="rounded-full"
          />
        </motion.div>

        <HeroSection />
        <FeaturesSection />
        <GuideTailwind />
        <Footer />
      </div>
    </VantaBackground>
  );
}
