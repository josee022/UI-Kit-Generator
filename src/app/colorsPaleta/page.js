"use client";

import { motion } from "framer-motion";
import VantaBackground from "@/components/VantaBackground";
import PaletteGenerator from "@/components/PaletteGenerator";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ColorsPage() {
  return (
    <VantaBackground className="min-h-screen w-full">
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
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
        <motion.h1
          className="text-5xl font-bold text-white mb-4 flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🎨 Paletas de colores
        </motion.h1>

        <Card className="w-full max-w-2xl p-6 bg-white/20 backdrop-blur-lg shadow-lg rounded-lg mb-8 text-white">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">¿Cómo funciona?</h2>
            <p className="text-gray-300">
              Este generador te permite crear y personalizar paletas de colores
              para usarlas en tus proyectos de diseño y desarrollo directamente
              gracias a su opción de exportación tanto CSS como JSON.
              Tambien contamos con al opción de seleccionar colores en vivo y
              obtener su código en RGBA, HEX o HSL.
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3">
              <li>🔹 Haz clic en un color para cambiarlo.</li>
              <li>🔹 Agrega o elimina colores de tu paleta.</li>
              <li>🔹 Copia el código en CSS o JSON con un solo clic.</li>
              <li>🔹 Usa la paleta en tus proyectos web y diseños.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Generador de Paletas */}
        <PaletteGenerator />

        {/* Botón de Volver al Inicio */}
        <motion.div
          className="absolute top-10 right-10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-md font-semibold shadow-md">
              ⬅ Volver al Inicio
            </Button>
          </Link>
        </motion.div>
      </div>
    </VantaBackground>
  );
}
