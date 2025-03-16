export const modalsTooltipsOptions = {
    modalBackgrounds: [
        { name: "Blanco", class: "bg-white" },
        { name: "Negro", class: "bg-black text-white" },
        { name: "Gris Claro", class: "bg-gray-300" },
        { name: "Gris Oscuro", class: "bg-gray-700 text-white" },
        { name: "Azul", class: "bg-blue-500 text-white" },
        { name: "Verde", class: "bg-green-500 text-white" },
        { name: "Rojo", class: "bg-red-500 text-white" },
        { name: "Amarillo", class: "bg-yellow-500 text-black" }, // Nuevo
        { name: "Naranja", class: "bg-orange-500 text-white" }, // Nuevo
        { name: "Morado", class: "bg-purple-500 text-white" }, // Nuevo
        { name: "Rosa", class: "bg-pink-500 text-white" }, // Nuevo
        { name: "Turquesa", class: "bg-teal-500 text-white" }, // Nuevo
        { name: "Cian", class: "bg-cyan-500 text-white" }, // Nuevo
        { name: "Dorado", class: "bg-yellow-400 text-black border border-yellow-600" }, // Estilo especial
        { name: "Plateado", class: "bg-gray-400 text-black border border-gray-600" }, // Estilo especial
        { name: "Transparente con Borde", class: "bg-transparent border border-gray-500 text-gray-700" }, // Transparente
        { name: "Vidrioso", class: "bg-white/30 backdrop-blur-md text-black border border-white/20" }, // Efecto Glassmorphism
        { name: "Oscuro Semi Transparente", class: "bg-black/50 backdrop-blur-sm text-white" } // Otro Glassmorphism
      ]
      ,
      modalSizes: [
        { name: "Muy Pequeño", class: "w-48 h-32" }, // Nuevo
        { name: "Pequeño", class: "w-64 h-40" },
        { name: "Mediano", class: "w-80 h-52" },
        { name: "Grande", class: "w-96 h-64" },
        { name: "Extra Grande", class: "w-[400px] h-[300px]" },
        { name: "Cuadrado Pequeño", class: "w-40 h-40" }, // Nuevo
        { name: "Cuadrado Mediano", class: "w-56 h-56" }, // Nuevo
        { name: "Cuadrado Grande", class: "w-72 h-72" }, // Nuevo
        { name: "Ultra Ancho", class: "w-[600px] h-56" }, // Nuevo - Tipo banner
        { name: "Super Ancho", class: "w-[800px] h-64" }, // Nuevo - Modal ancho
        { name: "Extra Alto", class: "w-80 h-[500px]" }, // Nuevo - Tipo notificación grande
        { name: "Pantalla Completa", class: "w-screen h-screen" }, // Nuevo - Fullscreen
        { name: "Contenedor Estrecho", class: "w-[350px] h-[550px]" }, // Nuevo - Tipo formulario
        { name: "Modal Enorme", class: "w-[700px] h-[500px]" } // Nuevo - Modal gigante
      ]
      ,
      modalShadows: [
        { name: "Sin sombra", class: "shadow-none" },
        { name: "Sombra Suave", class: "shadow-md" },
        { name: "Sombra Intensa", class: "shadow-lg" },
        { name: "Sombra Neumorfismo", class: "shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]" }, // Nuevo - Efecto Neumorfismo
        { name: "Sombra Invertida", class: "shadow-inner" }, // Nuevo - Sombra interna
        { name: "Sombra XL", class: "shadow-xl" }, // Nuevo - Más fuerte que `lg`
        { name: "Sombra 2XL", class: "shadow-2xl" }, // Nuevo - Más dramática
        { name: "Sombra Extrema", class: "shadow-[0_10px_30px_rgba(0,0,0,0.3)]" }, // Nuevo - Mucha profundidad
        { name: "Glow Azul", class: "shadow-[0_0_15px_#3b82f6]" }, // Nuevo - Resplandor azul
        { name: "Glow Verde", class: "shadow-[0_0_15px_#10b981]" }, // Nuevo - Resplandor verde
        { name: "Glow Rojo", class: "shadow-[0_0_15px_#ef4444]" }, // Nuevo - Resplandor rojo
        { name: "Glow Púrpura", class: "shadow-[0_0_15px_#8b5cf6]" }, // Nuevo - Resplandor púrpura
        { name: "Sombra Retro", class: "shadow-[5px_5px_0px_#000]" }, // Nuevo - Sombra de bloque, efecto old school
        { name: "Sombra Difusa", class: "shadow-[0px_8px_20px_rgba(0,0,0,0.2)]" } // Nuevo - Sombra suave y expandida
      ]
      ,
      borderRadius: [
        { name: "Ninguno (Recto)", class: "rounded-none" },
        { name: "Sutil", class: "rounded-sm" },
        { name: "Leve", class: "rounded-md" },
        { name: "Media", class: "rounded-lg" },
        { name: "Marcada", class: "rounded-xl" },
        { name: "Muy Redondeada", class: "rounded-full" },
        { name: "Esquinas Suaves", class: "rounded-[10px]" }, // Nuevo
        { name: "Esquinas Extra Suaves", class: "rounded-[20px]" }, // Nuevo
        { name: "Ultra Redondeado", class: "rounded-[40px]" }, // Nuevo
        { name: "Casi Circular", class: "rounded-[50%]" }, // Nuevo - Simula un círculo sin ser `full`
        { name: "Solo Arriba Redondeado", class: "rounded-t-lg" }, // Nuevo
        { name: "Solo Abajo Redondeado", class: "rounded-b-lg" }, // Nuevo
        { name: "Solo Izquierda Redondeada", class: "rounded-l-lg" }, // Nuevo
        { name: "Solo Derecha Redondeada", class: "rounded-r-lg" }, // Nuevo
        { name: "Diagonal Suave", class: "rounded-[30%_70%_70%_30%]" }, // Nuevo - Bordes diagonales
        { name: "Diagonal Extrema", class: "rounded-[50%_20%_50%_20%]" }, // Nuevo - Efecto más marcado
        { name: "Borde Irregular", class: "rounded-[40px_10px_30px_10px]" } // Nuevo - Bordes asimétricos
      ]
      ,
      tooltipBackgrounds: [
        { name: "Negro", class: "bg-black" },
        { name: "Gris Oscuro", class: "bg-gray-700" },
        { name: "Azul", class: "bg-blue-500" },
        { name: "Rojo", class: "bg-red-500" },
        { name: "Verde", class: "bg-green-500" },
        { name: "Morado", class: "bg-purple-500" }, // Nuevo
        { name: "Naranja", class: "bg-orange-500" }, // Nuevo
        { name: "Cian", class: "bg-cyan-500 text-black" }, // Nuevo
        { name: "Gradiente Azul", class: "bg-gradient-to-r from-blue-500 to-indigo-600" }, // Nuevo - Gradiente
        { name: "Gradiente Verde", class: "bg-gradient-to-r from-green-400 to-green-600" }, // Nuevo - Gradiente
        { name: "Gradiente Rojo", class: "bg-gradient-to-r from-red-400 to-pink-500" }, // Nuevo - Gradiente
        { name: "Vidrioso", class: "bg-white/20 backdrop-blur-md border border-white/10" }, // Nuevo - Glassmorphism
        { name: "Transparente Oscuro", class: "bg-black/50" }, // Nuevo - Transparente con opacidad
        { name: "Transparente Claro", class: "bg-white/50 text-black" }, // Nuevo - Transparente con opacidad
        { name: "Dorado", class: "bg-yellow-400 text-black border border-yellow-600" }, // Nuevo - Estilo dorado
        { name: "Plateado", class: "bg-gray-400 text-black border border-gray-600" } // Nuevo - Estilo plateado
      ]
      ,
      tooltipTextColors: [
        { name: "Blanco", class: "text-white" }, // Por defecto
        { name: "Negro", class: "text-black" },
        { name: "Gris Claro", class: "text-gray-300" },
        { name: "Gris Oscuro", class: "text-gray-700" },
        { name: "Rojo", class: "text-red-500" },
        { name: "Azul", class: "text-blue-500" },
        { name: "Verde", class: "text-green-500" },
        { name: "Amarillo", class: "text-yellow-500" },
        { name: "Naranja", class: "text-orange-500" },
        { name: "Morado", class: "text-purple-500" },
        { name: "Rosa", class: "text-pink-500" },
        { name: "Cian", class: "text-cyan-500" },
        { name: "Turquesa", class: "text-teal-500" },
        { name: "Dorado", class: "text-yellow-400" }, // Similar a dorado
        { name: "Plateado", class: "text-gray-400" }, // Similar a plateado
        { name: "Transparente Negro", class: "text-black/70" }, // Negro con opacidad
        { name: "Transparente Blanco", class: "text-white/80" } // Blanco con opacidad
      ]


  };
