"use client";

import { useState } from "react";
import { cardOptions } from "@/data/cardOptions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { showToast } from "@/components/ToastAlert";
import VantaBackground from "@/components/VantaBackground";
import Link from "next/link";
import Image from "next/image";

export default function CardsPage() {
  const defaultValues = {
    width: "w-64",
    height: "h-40",
    bgColor: "bg-white",
    textColor: "text-black",
    borderRadius: "rounded-md",
    hoverEffect: "",
  };

  const [width, setWidth] = useState(defaultValues.width);
  const [height, setHeight] = useState(defaultValues.height);
  const [bgColor, setBgColor] = useState(defaultValues.bgColor);
  const [textColor, setTextColor] = useState(defaultValues.textColor);
  const [borderRadius, setBorderRadius] = useState(defaultValues.borderRadius);
  const [hoverEffect, setHoverEffect] = useState(defaultValues.hoverEffect);
  const [resetKey, setResetKey] = useState(0); // 🔹 Clave para resetear los selectores

  const resetFields = () => {
    setWidth(defaultValues.width);
    setHeight(defaultValues.height);
    setBgColor(defaultValues.bgColor);
    setTextColor(defaultValues.textColor);
    setBorderRadius(defaultValues.borderRadius);
    setHoverEffect(defaultValues.hoverEffect);
    setResetKey((prev) => prev + 1); // 🔹 Esto forzará la re-renderización de los selectores
    showToast("Tarjeta reiniciada!", "success");
  };

  const cardClasses = `${width} ${height} ${bgColor} ${textColor} ${borderRadius} ${hoverEffect} flex items-center justify-center transition-all duration-300`;

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
              🎨 Generador de Botones PRO
            </motion.h1>

            <Card className="w-full max-w-2xl p-6 bg-white/20 backdrop-blur-lg shadow-lg rounded-lg mb-8 text-white">
              <CardContent>
                <h2 className="text-2xl font-semibold mb-2">¿Cómo funciona?</h2>
                <p className="text-gray-300">
                  Este generador te permite crear botones personalizados con
                  diferentes estilos. Puedes modificar su color, bordes, tamaño,
                  sombras y animaciones en tiempo real.
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-3">
                  <li>
                    🔹 Selecciona las características que deseas para tu botón.
                  </li>
                  <li>
                    🔹 Pasa el cursor sobre el botón de ejemplo para ver los
                    cambios.
                  </li>
                  <li>
                    🔹 Una vez que te guste el diseño, copia el código CSS generado.
                  </li>
                  <li>
                    🔹 Usa ese código en tu proyecto para aplicar el estilo al
                    botón.
                  </li>
                </ul>
              </CardContent>
            </Card>

        <Card className="w-full max-w-2xl p-8 bg-white/90 shadow-xl rounded-lg">
          <CardContent className="flex flex-col items-center space-y-6">
            {/* Vista Previa */}
            <div className={cardClasses}>
              <span className="text-xl font-bold">Tarjeta</span>
            </div>

            {/* Controles Dinámicos */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                {
                  label: "Ancho",
                  options: cardOptions.widths,
                  setter: setWidth,
                },
                {
                  label: "Alto",
                  options: cardOptions.heights,
                  setter: setHeight,
                },
                {
                  label: "Color Fondo",
                  options: cardOptions.bgColors,
                  setter: setBgColor,
                },
                {
                  label: "Color Texto",
                  options: cardOptions.textColors,
                  setter: setTextColor,
                },
                {
                  label: "Bordes",
                  options: cardOptions.borderRadius,
                  setter: setBorderRadius,
                },
                {
                  label: "Hover Effect",
                  options: cardOptions.hoverEffects,
                  setter: setHoverEffect,
                },
              ].map(({ label, options, setter }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-gray-600 font-medium mb-1">
                    {label}:
                  </span>
                  <Select
                    key={resetKey}
                    onValueChange={(value) => setter(value)}
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

            {/* Botones */}
            <div className="flex space-x-4">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(`class="${cardClasses}"`);
                  showToast("Código copiado!", "success");
                }}
                className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold"
              >
                Copiar Código
              </Button>
              <Button
                onClick={resetFields}
                className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold"
              >
                Resetear
              </Button>
            </div>
          </CardContent>
        </Card>
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
