"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "🎨 Generador de Botones",
    description:
      "Crea botones personalizados con colores, bordes, sombras y animaciones.",
    link: "/buttons",
  },
  {
    title: "🌈 Fondos & Degradados",
    description: "Genera fondos CSS con degradados y texturas modernas.",
    link: "/backgrounds",
  },
  {
    title: "🎨 Paletas de Colores",
    description: "Explora y copia combinaciones de colores listas para usar.",
    link: "/colors",
  },
  {
    title: "📝 Tipografías",
    description: "Prueba Google Fonts y ajusta estilos de texto fácilmente.",
    link: "/typography",
  },
  {
    title: "🔮 Sombras y Efectos",
    description:
      "Configura box-shadow, text-shadow y glassmorphism en tiempo real.",
    link: "/effects",
  },
  {
    title: "🚀 Exportación de Código",
    description: "Copia estilos en CSS, JSON o descarga imágenes de fondo.",
    link: "/export",
  },
];

export function FeaturesSection() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 Funcionalidades Principales
      </motion.h2>

      <motion.p
        className="text-gray-300 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Explora todas las herramientas disponibles para diseñadores y
        desarrolladores. Personaliza componentes, copia código fácilmente y
        mejora la apariencia de tus proyectos.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map(({ title, description, link }, index) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={link}>
              <Card className="p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg text-white cursor-pointer">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm">{description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
