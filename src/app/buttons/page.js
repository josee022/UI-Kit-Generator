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

export default function ButtonsPage() {
  const defaultValues = {
    bgColor: "bg-blue-500",
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

  const resetFields = () => {
    setBgColor(defaultValues.bgColor);
    setTextColor(defaultValues.textColor);
    setRounded(defaultValues.rounded);
    setPadding(defaultValues.padding);
    setShadow(defaultValues.shadow);
    setAnimation(defaultValues.animation);
  };

  const buttonClasses = `${bgColor} ${textColor} ${rounded} ${padding} ${shadow} ${animation} font-semibold`;

  const copyToClipboard = () => {
    const cssCode = `class=\"${buttonClasses}\"`;
    navigator.clipboard.writeText(cssCode);
    alert("Código copiado al portapapeles!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 via-blue-500 to-cyan-400 p-10">
      <motion.h1
        className="text-5xl font-bold text-white mb-4 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎨 Generador de Botones PRO
      </motion.h1>

      <p className="text-white text-lg max-w-2xl text-center mb-6">
        Crea botones personalizados con diferentes estilos, colores, sombras y
        animaciones. Elige tus opciones y copia el código listo para usar en tu
        proyecto.
      </p>

      <Card className="w-full max-w-2xl p-8 bg-white/90 shadow-xl rounded-lg">
        <CardContent className="flex flex-col items-center space-y-6">
          <Button className={buttonClasses}>Botón de Ejemplo</Button>

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
                <span className="text-gray-600 font-medium mb-1">{label}:</span>
                <Select onValueChange={(value) => setter(value)}>
                  <SelectTrigger className="border p-2 w-full">
                    <SelectValue placeholder={`Selecciona ${label}`} />
                  </SelectTrigger>
                  <SelectContent className="z-50 bg-white shadow-lg rounded-lg mt-1">
                    {" "}
                    {/* Se asegura que la lista baje */}
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
    </div>
  );
}
