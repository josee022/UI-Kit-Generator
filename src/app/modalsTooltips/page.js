"use client";

import { useState } from "react";
import { modalsTooltipsOptions } from "../../data/modalsTooltipsOptions";
import ModalPreview from "../../components/ModalPreview";
import TooltipPreview from "../../components/TooltipPreview";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Copy } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import Image from "next/image";
import VantaBackground from "../../components/VantaBackground";
import { motion } from "framer-motion";
import Link from "next/link";
import { showToast } from "../../components/ToastAlert";

export default function ModalsTooltipsPage() {
  const defaultValues = {
    modalBg: "bg-white",
    modalSize: "w-80 h-52",
    modalShadow: "shadow-md",
    borderRadius: "rounded-md",
    tooltipBg: "bg-black text-white",
    tooltipTextColors: "text-white",
  };

  const [modalBg, setModalBg] = useState(defaultValues.modalBg);
  const [modalSize, setModalSize] = useState(defaultValues.modalSize);
  const [modalShadow, setModalShadow] = useState(defaultValues.modalShadow);
  const [borderRadius, setBorderRadius] = useState(defaultValues.borderRadius);
  const [tooltipBg, setTooltipBg] = useState(defaultValues.tooltipBg);
  const [tooltipTextColors, setTooltipTextColors] = useState(
    defaultValues.tooltipTextColors
  );
  const [resetKey, setResetKey] = useState(0); // 🔹 Clave para resetear los selectores
  const [tooltipActive, setTooltipActive] = useState(true);

  const modalCode = `<div class='${modalBg} ${modalSize} ${modalShadow} ${borderRadius} p-6 rounded-lg'>\n  <p>Este es un modal personalizado.</p>\n  <button class='mt-4 px-4 py-2 bg-blue-500 text-white rounded'>Cerrar</button>\n</div>`;

  const resetFields = () => {
    setModalBg(defaultValues.modalBg);
    setModalSize(defaultValues.modalSize);
    setModalShadow(defaultValues.modalShadow);
    setBorderRadius(defaultValues.borderRadius);
    setTooltipBg(defaultValues.tooltipBg);
    setTooltipTextColors(defaultValues.tooltipTextColors);
    setResetKey((prev) => prev + 1); // 🔹 Esto forzará la re-renderización de los selectores
    showToast("Valores restablecidos", "success");
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
          🚀 Generador de Modales y Tooltips
        </motion.h1>

        <Card className="w-full max-w-2xl p-6 bg-white/20 backdrop-blur-lg shadow-lg rounded-lg mb-8 text-white">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">¿Cómo funciona?</h2>
            <p className="text-gray-300">
              Este generador te permite crear tanto modales como tooltips
              personalizados. Puedes modificar varias características como el
              fondo, tamaño, posición...
              <br />
              todo en tiempo real.
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3">
              <li>
                🔹 Selecciona las características que deseas para tus modelas o
                tooltips.
              </li>
              <li>
                🔹 Pasa el cursor sobre el tooltip de ejemplo para ver los
                cambios.
              </li>
              <li>
                🔹 Pulsa el botón de abrir modal para ver su vista previa.
              </li>
              <li>
                🔹 Una vez que te guste el diseño, copia el código generado.
              </li>
              <li>
                🔹 Usa ese código en tu proyecto para aplicar componentes
                fácilmente personalizados.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="w-full max-w-6xl p-6 bg-white/90 shadow-xl rounded-lg">
          <CardContent className="grid grid-cols-2 gap-4 items-start">
            {/* Sección de Modales */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Configuración del Modal
              </h2>

              {[
                {
                  label: "Fondo",
                  options: modalsTooltipsOptions.modalBackgrounds,
                  setter: setModalBg,
                },
                {
                  label: "Tamaño",
                  options: modalsTooltipsOptions.modalSizes,
                  setter: setModalSize,
                },
                {
                  label: "Sombra",
                  options: modalsTooltipsOptions.modalShadows,
                  setter: setModalShadow,
                },
                {
                  label: "Bordes",
                  options: modalsTooltipsOptions.borderRadius,
                  setter: setBorderRadius,
                },
              ].map(({ label, options, setter }) => (
                <div key={label} className="flex items-center space-x-2">
                  <span className="text-gray-600 font-medium w-24">{`${label}:`}</span>
                  <Select
                    key={resetKey}
                    onValueChange={(value) => setter(value)}
                  >
                    <SelectTrigger className="border p-1 w-full rounded-md bg-white">
                      <SelectValue placeholder={`Selecciona`} />
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

              {/* Botón para Abrir Modal y Copiar Código */}
              <div className="flex space-x-2">
                <ModalPreview
                  modalBg={modalBg}
                  modalSize={modalSize}
                  modalShadow={modalShadow}
                  borderRadius={borderRadius}
                  setTooltipActive={setTooltipActive}
                />

                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(modalCode);
                    showToast("Código del Modal copiado!", "success");
                  }}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold flex items-center"
                >
                  <Copy size={16} className="mr-2" />
                  Copiar Código
                </Button>
              </div>
            </div>

            {/* Sección de Tooltips */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Configuración del Tooltip
              </h2>

              {[
                {
                  label: "Fondo",
                  options: modalsTooltipsOptions.tooltipBackgrounds,
                  setter: setTooltipBg,
                },
                {
                  label: "Color texto",
                  options: modalsTooltipsOptions.tooltipTextColors,
                  setter: setTooltipTextColors,
                },
              ].map(({ label, options, setter }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-gray-600 font-medium mb-1">{`${label}:`}</span>
                  <Select
                    key={resetKey}
                    onValueChange={(value) => setter(value)}
                  >
                    <SelectTrigger className="border p-2 w-full rounded-md bg-white">
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

              {/* Botón para Hover Tooltip y Copiar Código */}
              <div className="flex space-x-2">
                {tooltipActive && (
                  <TooltipPreview
                    tooltipBg={tooltipBg}
                    tooltipTextColors={tooltipTextColors}
                  />
                )}

                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `Tooltip: ${tooltipBg} ${tooltipTextColors}`
                    );
                    showToast("Código del Tooltip copiado!", "success");
                  }}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold flex items-center"
                >
                  <Copy size={16} className="mr-2" />
                  Copiar Código
                </Button>
              </div>
            </div>
          </CardContent>

          {/* Botón Reset */}
          <div className="flex justify-center">
            <Button
              onClick={resetFields}
              className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold"
            >
              Resetear
            </Button>
          </div>
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
