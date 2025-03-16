import { motion } from "framer-motion";

export default function TooltipPreview({ tooltipBg, tooltipTextColors }) {
  return (
    <div className="relative flex flex-col items-center space-y-4">
      <div className="relative inline-block group">
        <span className="bg-black text-white px-2 py-2 rounded-md flex items-center">
          Hover aquí
        </span>

        {/* Tooltip con color de texto corregido */}
        <motion.div
          className={`absolute top-[-40px] left-1/2 -translate-x-1/2
                      ${tooltipBg.replace(/text-\S+/g, "")} ${tooltipTextColors}
                      px-2 py-1 rounded shadow-md opacity-0
                      group-hover:opacity-100 transition-opacity duration-200`}
        >
          Tooltip Personalizado
        </motion.div>
      </div>
    </div>
  );
}
