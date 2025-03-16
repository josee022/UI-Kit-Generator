"use client";

import { motion } from "framer-motion";
import VantaBackground from "../../components/VantaBackground";
import FontSelector from "../../components/FontSelector";
import FontPreview from "../../components/FontPreview";
import FontControls from "../../components/FontControls";
import ExportFont from "../../components/ExportFont";
import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function TypographyPage() {
  const [selectedFont, setSelectedFont] = useState("Poppins");
  const [fontSize, setFontSize] = useState(24);
  const [fontWeight, setFontWeight] = useState(400);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [color, setColor] = useState("#ffffff");

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
          🔠 Generador de Tipografías
        </motion.h1>

        <Card className="w-full max-w-2xl p-6 bg-white/20 backdrop-blur-lg shadow-lg rounded-lg mb-8 text-white">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">¿Cómo funciona?</h2>
            <p className="text-gray-300">
              Selecciona una fuente, personaliza su tamaño, grosor y color, y
              copia el código CSS para usarla en tu proyecto.
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3">
              <li>
                🔹 Explora una lista de fuentes de Google disponibles para usar.
              </li>
              <li>
                🔹 Selecciona una fuente para ver una vista previa en tiempo real.
              </li>
              <li>
                🔹 Ajusta el tamaño, peso y estilo de la fuente.
              </li>
              <li>
                🔹 Copia el código CSS o el enlace `@import` para utilizarlo.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Selector de fuente */}
        <FontSelector
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
        />

        {/* Vista previa */}
        <FontPreview
          selectedFont={selectedFont}
          fontSize={fontSize}
          fontWeight={fontWeight}
          letterSpacing={letterSpacing}
          color={color}
        />

        {/* Controles de personalización
        <FontControls
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontWeight={fontWeight}
          setFontWeight={setFontWeight}
          letterSpacing={letterSpacing}
          setLetterSpacing={setLetterSpacing}
          color={color}
          setColor={setColor}
        /> */}

        {/* Botón para copiar código */}
        <ExportFont selectedFont={selectedFont} />
        <div className="mt-6">
          <motion.div
            className="absolute top-15 right-10"
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
      </div>
    </VantaBackground>
  );
}
