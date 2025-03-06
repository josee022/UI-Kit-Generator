"use client";
import { useState } from "react";
import { buttonOptions } from "@/data/buttonOptions";
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
import VantaBackground from "@/components/VantaBackground";
import Link from "next/link";
import Image from "next/image";

export default function ButtonsPage() {
  const defaultValues = {
    bgColor: "bg-black",
    textColor: "text-white",
    rounded: "rounded-md",
    padding: "px-4 py-2",
    shadow: "shadow-md",
    animation: "transition",
  };

  const [bgColor, setBgColor] = useState(defaultValues.bgColor);
  const [textColor, setTextColor] = useState(defaultValues.textColor);
  const [rounded, setRounded] = useState(defaultValues.rounded);
  const [padding, setPadding] = useState(defaultValues.padding);
  const [shadow, setShadow] = useState(defaultValues.shadow);
  const [animation, setAnimation] = useState(defaultValues.animation);
  const [resetKey, setResetKey] = useState(0);

  const resetFields = () => {
    setBgColor(defaultValues.bgColor);
    setTextColor(defaultValues.textColor);
    setRounded(defaultValues.rounded);
    setPadding(defaultValues.padding);
    setShadow(defaultValues.shadow);
    setAnimation(defaultValues.animation);
    setResetKey(prevKey => prevKey + 1);
  };


  const buttonClasses = `${bgColor} ${textColor} ${rounded} ${padding} ${shadow} ${animation} font-semibold`;

  const copyToClipboard = () => {
    const cssCode = `class=\"${buttonClasses}\"`;
    navigator.clipboard.writeText(cssCode);
    alert("Código copiado al portapapeles!");
  };

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
            <Button className={`${buttonClasses} hover:${bgColor}`}>
              Botón de Ejemplo
            </Button>

            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                {
                  label: "Fondo",
                  options: buttonOptions.backgrounds,
                  setter: setBgColor,
                },
                {
                  label: "Texto",
                  options: buttonOptions.textColors,
                  setter: setTextColor,
                },
                {
                  label: "Bordes",
                  options: buttonOptions.borders,
                  setter: setRounded,
                },
                {
                  label: "Tamaño",
                  options: buttonOptions.sizes,
                  setter: setPadding,
                },
                {
                  label: "Sombra",
                  options: buttonOptions.shadows,
                  setter: setShadow,
                },
                {
                  label: "Animación",
                  options: buttonOptions.animations,
                  setter: setAnimation,
                },
              ].map(({ label, options, setter }) => (
                <div key={label} className="flex flex-col relative">
                  <span className="text-gray-600 font-medium mb-1">
                    {label}:
                  </span>
                  <Select key={resetKey} onValueChange={(value) => setter(value)}>
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

            <div className="flex space-x-4">
              <Button
                onClick={copyToClipboard}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold"
              >
                Copiar Código
              </Button>
              <Button
                onClick={resetFields}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold"
              >
                Vaciar Inputs
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
