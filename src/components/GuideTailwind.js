"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../components/ui/tooltip";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { useState } from "react";

const tailwindCommands = [
  {
    label: "Paso 1: Instalar TailwindCSS y dependencias",
    description:
      "Ejecuta este comando en la terminal dentro de tu proyecto para instalar TailwindCSS y sus dependencias.",
    command: "npm install -D tailwindcss postcss autoprefixer",
  },
  {
    label: "Paso 2: Inicializar TailwindCSS",
    description:
      "Este comando generará el archivo de configuración `tailwind.config.js`, necesario para personalizar TailwindCSS.",
    command: "npx tailwindcss init -p",
  },
  {
    label: "Paso 3: Configurar tailwind.config.js",
    description:
      "Edita el archivo `tailwind.config.js` generado y asegúrate de incluir las rutas de los archivos de tu proyecto para que Tailwind pueda detectar las clases utilizadas.",
    command:
      "module.exports = {\n  content: ['./app/**/*.{js,ts,jsx,tsx}'],\n  theme: { extend: {} },\n  plugins: [],\n};",
  },
  {
    label: "Paso 4: Añadir Tailwind a tu hoja de estilos",
    description:
      "Dentro del archivo `globals.css` o `index.css` de tu proyecto, agrega las siguientes líneas para importar los estilos base de Tailwind.",
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

      <p className="text-gray-300 mb-6">
        TailwindCSS es un framework de CSS altamente optimizado que funciona en
        múltiples entornos. Puedes integrarlo en los siguientes proyectos:
      </p>

      {tailwindCommands.map(({ label, description, command }, index) => (
        <div
          key={index}
          className="bg-gray-900 p-4 rounded-lg text-left overflow-auto mb-4 relative"
        >
          <h3 className="text-lg font-semibold text-white mb-2">{label}</h3>
          <p className="text-gray-400 text-sm mb-2">{description}</p>
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
      <br />

      <div className="mb-6 text-left">
        <h3 className="text-white text-xl font-semibold mb-2">
          🛠️ Frameworks compatibles con TailwindCSS
        </h3>
        <ul className="text-gray-300 text-lg list-disc list-inside space-y-2">
          <li>
            ✅ <strong>Next.js</strong> – Perfecto para aplicaciones modernas
            con SSR/SSG.
          </li>
          <li>
            ✅ <strong>React.js</strong> – Funciona con Create React App y Vite.
          </li>
          <li>
            ✅ <strong>Vue.js</strong> – Compatible con Vite y Nuxt.js.
          </li>
          <li>
            ✅ <strong>Angular</strong> – Se puede integrar con PostCSS.
          </li>
          <li>
            ✅ <strong>Svelte</strong> – Compatible con SvelteKit.
          </li>
          <li>
            ✅ <strong>Laravel</strong> – Integración con Blade y Vite.
          </li>
          <li>
            ✅ <strong>Django</strong> – Puede usarse en templates de Jinja.
          </li>
          <li>
            ✅ <strong>Astro</strong> – Excelente para proyectos estáticos y
            dinámicos.
          </li>
        </ul>
      </div>

      <div className="mt-6">
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
