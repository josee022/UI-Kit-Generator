"use client";

import { useState } from "react";
import { backgroundOptions } from "@/data/backgroundOptions";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import BackgroundPreview from "@/components/backgroundPreview";
import VantaBackground from "@/components/VantaBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BackgroundsPage() {
  const [selectedBackground, setSelectedBackground] = useState("");
  const [selectedType, setSelectedType] = useState(""); 

  const handleSelectChange = (type, value) => {
    if (selectedType !== type) {
      setSelectedBackground(value);
      setSelectedType(type);
    } else {
      setSelectedBackground(value);
    }
  };

  const copyToClipboard = () => {
    const cssCode = `class="${selectedBackground}"`;
    navigator.clipboard.writeText(cssCode);
    alert("Código copiado al portapapeles!");
  };

  const resetFields = () => {
    setSelectedBackground("");
    setSelectedType("");
  };

  return (
    <VantaBackground className="min-h-screen w-full overflow-hidden">
      <div className="min-h-screen flex flex-col items-center justify-center p-10 overflow-hidden">
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
          🎨 Generador de Backgrounds PRO
        </motion.h1>

        <Card className="w-full max-w-3xl p-6 bg-white/20 backdrop-blur-lg shadow-lg rounded-lg mb-8 text-white">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">¿Cómo funciona?</h2>
            <p className="text-gray-300">
              Este generador te permite diseñar fondos personalizados con
              colores sólidos, degradados y efectos especiales en tiempo real.
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3">
              <li>
                🔹 Selecciona un color sólido, un degradado o un fondo especial.
              </li>
              <li>🔹 Observa en vivo los cambios en la vista previa.</li>
              <li>🔹 Copia el código generado y úsalo en tu proyecto.</li>
              <li>
                🔹 Si quieres empezar de nuevo, usa el botón Vaciar Inputs.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="w-full max-w-5xl p-6 bg-white/20 backdrop-blur-lg shadow-lg rounded-lg mb-8">
          <CardContent className="space-y-4">
            <BackgroundPreview
              className={`h-48 w-full rounded-lg ${selectedBackground}`}
            />
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  label: "Colores Sólidos",
                  options: backgroundOptions.solidColors,
                  type: "solid",
                },
                {
                  label: "Degradados",
                  options: backgroundOptions.gradients,
                  type: "gradient",
                },
                {
                  label: "Especiales",
                  options: backgroundOptions.specials,
                  type: "special",
                },
              ].map(({ label, options, type }) => (
                <div key={label}>
                  <span className="text-gray-300 font-medium mb-1 block">
                    {label}:
                  </span>
                  <Select
                    onValueChange={(value) => handleSelectChange(type, value)}
                    value={selectedType === type ? selectedBackground : ""}
                  >
                    <SelectTrigger className="border p-2 w-full">
                      <SelectValue placeholder={`Selecciona ${label}`} />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-white shadow-lg rounded-lg mt-1">
                      {options.map(({ name, class: className }) => (
                        <SelectItem
                          key={name}
                          value={className}
                          className="hover:bg-gray-100 p-2"
                        >
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
            <div className="flex space-x-4 mt-4">
              <Button
                onClick={copyToClipboard}
                className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md font-semibold"
              >
                Copiar Código
              </Button>
              <Button
                onClick={resetFields}
                className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md font-semibold"
              >
                Vaciar Inputs
              </Button>
            </div>
          </CardContent>
        </Card>

        <motion.div
          className="absolute top-12 right-6"
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
