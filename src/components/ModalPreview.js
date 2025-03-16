import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { X } from "lucide-react"; 
import { useState } from "react";

export default function ModalPreview({
  modalBg,
  modalSize,
  modalShadow,
  borderRadius,
  setTooltipActive,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTooltipActive(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setTooltipActive(true);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Botón de abrir modal */}
      <Button
        onClick={openModal}
        disabled={isOpen}
        className={isOpen ? "opacity-50 cursor-not-allowed" : ""}
      >
        Abrir Modal
      </Button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <motion.div
            className={`${modalBg} ${modalSize} ${modalShadow} ${borderRadius}
                        p-4 rounded-lg shadow-lg bg-white
                        max-w-full max-h-full overflow-auto min-h-[150px] min-w-[200px] relative`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Botón de cerrar en la esquina superior derecha */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 p-1 rounded-full"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            <h2 className="text-xl font-bold mb-2">Modal Personalizado</h2>
            <p className="text-gray-700">
              Este es un modal de ejemplo con más contenido. Si el tamaño del
              modal es pequeño, el contenido se ajustará automáticamente con
              desplazamiento.
            </p>

            <ul className="list-disc list-inside my-4 text-gray-600">
              <li>✔ Totalmente personalizable.</li>
              <li>✔ Soporta diferentes estilos y tamaños.</li>
              <li>✔ Compatible con animaciones.</li>
              <li>✔ Se adapta a contenido más grande con scroll.</li>
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
}
