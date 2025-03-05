"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const tailwindCommands = [
  {
    label: "Instalar TailwindCSS",
    command: "npm install -D tailwindcss postcss autoprefixer",
  },
  {
    label: "Inicializar TailwindCSS",
    command: "npx tailwindcss init -p",
  },
  {
    label: "Configurar tailwind.config.js",
    command:
      "module.exports = {\n  content: ['./app/**/*.{js,ts,jsx,tsx}'],\n  theme: { extend: {} },\n  plugins: [],\n};",
  },
  {
    label: "Añadir Tailwind a globals.css",
    command: "@tailwind base;\n@tailwind components;\n@tailwind utilities;",
  },
];

export function GuideTailwind() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (command, index) => {
    navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div
      id="tailwind-guide"
      className="py-10 px-4 max-w-3xl mx-auto text-center"
    >
      <motion.h2
        className="text-3xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 Cómo Instalar TailwindCSS
      </motion.h2>

      <p className="text-gray-300 mb-4">
        Sigue estos pasos para configurar Tailwind en tu proyecto Next.js de
        forma rápida y sencilla.
      </p>

      {tailwindCommands.map(({ label, command }, index) => (
        <div
          key={index}
          className="bg-gray-900 p-3 rounded-lg text-left overflow-auto mb-3 relative"
        >
          <pre className="text-green-400 text-sm whitespace-pre-wrap">
            <code>{command}</code>
          </pre>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md"
                onClick={() => handleCopy(command, index)}
              >
                📋
              </button>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className="bg-gray-800 text-white"
              forceMount
            >
              {copiedIndex === index ? "¡Código copiado!" : "Copiar código"}
            </TooltipContent>
          </Tooltip>
        </div>
      ))}

      <div className="mt-4">
        <Link
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-xl shadow-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            📖 Ver Documentación Oficial
          </Button>
        </Link>
      </div>
    </div>
  );
}
