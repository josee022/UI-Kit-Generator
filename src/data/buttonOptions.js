export const buttonOptions = {
    backgrounds: [
        // 🎨 Colores Sólidos
        { name: "Azul", class: "bg-blue-500" },
        { name: "Rojo", class: "bg-red-500" },
        { name: "Verde", class: "bg-green-500" },
        { name: "Amarillo", class: "bg-yellow-500" },
        { name: "Naranja", class: "bg-orange-500" },
        { name: "Morado", class: "bg-purple-500" },
        { name: "Rosa", class: "bg-pink-500" },
        { name: "Gris", class: "bg-gray-500" },
        { name: "Negro", class: "bg-black" },
        { name: "Blanco", class: "bg-white border border-gray-300 text-black" },

        // 🌈 Degradados
        { name: "Gradiente Azul", class: "bg-gradient-to-r from-blue-400 to-blue-700" },
        { name: "Gradiente Rojo", class: "bg-gradient-to-r from-red-400 to-red-700" },
        { name: "Gradiente Verde", class: "bg-gradient-to-r from-green-400 to-green-700" },
        { name: "Gradiente Amarillo", class: "bg-gradient-to-r from-yellow-400 to-yellow-700" },
        { name: "Gradiente Morado", class: "bg-gradient-to-r from-purple-400 to-purple-700" },
        { name: "Gradiente Naranja", class: "bg-gradient-to-r from-orange-400 to-orange-700" },
        { name: "Gradiente Rosa", class: "bg-gradient-to-r from-pink-400 to-pink-700" },
        { name: "Gradiente Gris", class: "bg-gradient-to-r from-gray-400 to-gray-700" },
        { name: "Gradiente Oscuro", class: "bg-gradient-to-r from-black to-gray-800" },

        // ✨ Neón / Glow
        { name: "Neón Azul", class: "bg-blue-500 shadow-lg shadow-blue-300" },
        { name: "Neón Verde", class: "bg-green-500 shadow-lg shadow-green-300" },
        { name: "Neón Rojo", class: "bg-red-500 shadow-lg shadow-red-300" },
        { name: "Neón Amarillo", class: "bg-yellow-500 shadow-lg shadow-yellow-300" },
        { name: "Neón Morado", class: "bg-purple-500 shadow-lg shadow-purple-300" },
        { name: "Neón Rosa", class: "bg-pink-500 shadow-lg shadow-pink-300" },

        // 🔮 Efecto Vidrio / Transparencia
        { name: "Vidrio", class: "bg-white bg-opacity-30 backdrop-blur-md border border-white" },
        { name: "Vidrio Azul", class: "bg-blue-300 bg-opacity-30 backdrop-blur-md border border-blue-400" },
        { name: "Vidrio Rojo", class: "bg-red-300 bg-opacity-30 backdrop-blur-md border border-red-400" },
        { name: "Vidrio Verde", class: "bg-green-300 bg-opacity-30 backdrop-blur-md border border-green-400" },
        { name: "Vidrio Oscuro", class: "bg-gray-900 bg-opacity-30 backdrop-blur-md border border-gray-700" }
      ],

  textColors: [
    // 🎨 Colores Sólidos Básicos
    { name: "Blanco", class: "text-white" },
    { name: "Negro", class: "text-black" },
    { name: "Gris Claro", class: "text-gray-300" },
    { name: "Gris Oscuro", class: "text-gray-700" },

    // 🌈 Colores Vivos
    { name: "Rojo", class: "text-red-500" },
    { name: "Azul", class: "text-blue-500" },
    { name: "Verde", class: "text-green-500" },
    { name: "Amarillo", class: "text-yellow-500" },
    { name: "Naranja", class: "text-orange-500" },
    { name: "Morado", class: "text-purple-500" },
    { name: "Rosa", class: "text-pink-500" },
    { name: "Turquesa", class: "text-teal-500" },
    { name: "Cian", class: "text-cyan-500" },

    // ✨ Tonos Suaves
    { name: "Rojo Claro", class: "text-red-300" },
    { name: "Azul Claro", class: "text-blue-300" },
    { name: "Verde Claro", class: "text-green-300" },
    { name: "Amarillo Claro", class: "text-yellow-300" },
    { name: "Morado Claro", class: "text-purple-300" },
    { name: "Rosa Claro", class: "text-pink-300" },
    { name: "Turquesa Claro", class: "text-teal-300" },
    { name: "Cian Claro", class: "text-cyan-300" },

    // 🏆 Tonos Metálicos y Especiales
    { name: "Dorado", class: "text-yellow-400" },
    { name: "Plateado", class: "text-gray-400" },
    { name: "Bronce", class: "text-orange-400" },

    // ⚡ Neón / Glow
    { name: "Neón Azul", class: "text-blue-400 shadow-blue-300" },
    { name: "Neón Verde", class: "text-green-400 shadow-green-300" },
    { name: "Neón Rojo", class: "text-red-400 shadow-red-300" },
    { name: "Neón Amarillo", class: "text-yellow-400 shadow-yellow-300" },
    { name: "Neón Morado", class: "text-purple-400 shadow-purple-300" },
    { name: "Neón Rosa", class: "text-pink-400 shadow-pink-300" },

    // 🔮 Vidrio / Transparencia
    { name: "Vidrio Blanco", class: "text-white text-opacity-80" },
    { name: "Vidrio Negro", class: "text-black text-opacity-80" },
    { name: "Vidrio Azul", class: "text-blue-400 text-opacity-80" },
    { name: "Vidrio Rojo", class: "text-red-400 text-opacity-80" },
    { name: "Vidrio Verde", class: "text-green-400 text-opacity-80" },
  ],

  borders: [
    // 🚫 Sin Bordes
    { name: "Sin Bordes", class: "rounded-none border-0" },

    // 🔵 Bordes Redondeados
    { name: "Leve", class: "rounded-sm" },
    { name: "Medio", class: "rounded-md" },
    { name: "Grande", class: "rounded-lg" },
    { name: "Muy Redondeado", class: "rounded-xl" },
    { name: "Totalmente Circular", class: "rounded-full" },

    // 📏 Bordes Clásicos
    { name: "Borde Fino", class: "border border-gray-300" },
    { name: "Borde Medio", class: "border-2 border-gray-400" },
    { name: "Borde Grueso", class: "border-4 border-gray-500" },

    // 🎨 Bordes de Colores
    { name: "Borde Azul", class: "border-2 border-blue-500" },
    { name: "Borde Rojo", class: "border-2 border-red-500" },
    { name: "Borde Verde", class: "border-2 border-green-500" },
    { name: "Borde Amarillo", class: "border-2 border-yellow-500" },
    { name: "Borde Morado", class: "border-2 border-purple-500" },
    { name: "Borde Rosa", class: "border-2 border-pink-500" },

    // 🏆 Bordes Estilizados
    { name: "Borde Doble", class: "border-4 border-double border-gray-300" },
    { name: "Borde Punteado", class: "border-4 border-dotted border-gray-400" },
    { name: "Borde Rayado", class: "border-4 border-dashed border-gray-500" },
    { name: "Borde 3D", class: "border-4 border-gray-600 shadow-lg" },

    // ⚡ Bordes Neón / Glow
    { name: "Neón Azul", class: "border-2 border-blue-500 shadow-lg shadow-blue-300" },
    { name: "Neón Verde", class: "border-2 border-green-500 shadow-lg shadow-green-300" },
    { name: "Neón Rojo", class: "border-2 border-red-500 shadow-lg shadow-red-300" },
    { name: "Neón Amarillo", class: "border-2 border-yellow-500 shadow-lg shadow-yellow-300" },
    { name: "Neón Morado", class: "border-2 border-purple-500 shadow-lg shadow-purple-300" },

    // 🔮 Efectos Vidrio / Transparencia
    { name: "Vidrio Blanco", class: "border border-white border-opacity-50 backdrop-blur-md" },
    { name: "Vidrio Azul", class: "border border-blue-300 border-opacity-50 backdrop-blur-md" },
    { name: "Vidrio Rojo", class: "border border-red-300 border-opacity-50 backdrop-blur-md" },
    { name: "Vidrio Verde", class: "border border-green-300 border-opacity-50 backdrop-blur-md" },
    { name: "Vidrio Oscuro", class: "border border-gray-800 border-opacity-50 backdrop-blur-md" },
  ],

  sizes: [
    // 🔹 Tamaños Extra Pequeños
    { name: "XS", class: "px-1 py-0.5 text-xs" },
    { name: "Pequeño", class: "px-2 py-1 text-sm" },

    // 🔹 Tamaños Estándar
    { name: "Normal", class: "px-4 py-2 text-base" },
    { name: "Grande", class: "px-6 py-3 text-lg" },
    { name: "Extra Grande", class: "px-8 py-4 text-xl" },

    // 🔹 Tamaños Enormes
    { name: "XXL", class: "px-10 py-5 text-2xl" },
    { name: "Gigante", class: "px-12 py-6 text-3xl" },
    { name: "Colosal", class: "px-16 py-8 text-4xl" },

    // 🔹 Botones Anchos
    { name: "Ancho Pequeño", class: "w-32 py-2 text-base" },
    { name: "Ancho Normal", class: "w-40 py-3 text-lg" },
    { name: "Ancho Grande", class: "w-48 py-4 text-xl" },
    { name: "Ancho Completo", class: "w-full py-4 text-xl" },

    // 🔹 Botones Cuadrados
    { name: "Cuadrado Pequeño", class: "w-10 h-10 text-base" },
    { name: "Cuadrado Normal", class: "w-12 h-12 text-lg" },
    { name: "Cuadrado Grande", class: "w-16 h-16 text-xl" },
    { name: "Cuadrado Gigante", class: "w-20 h-20 text-2xl" },

    // 🔹 Padding Extra
    { name: "Padding Extra", class: "px-10 py-6 text-lg" },
    { name: "Padding Máximo", class: "px-12 py-8 text-xl" },
  ],

  shadows: [
    // ❌ Sin Sombra
    { name: "Sin Sombra", class: "shadow-none" },

    // ☁️ Sombras Básicas
    { name: "Sombra Pequeña", class: "shadow-sm" },
    { name: "Sombra Media", class: "shadow-md" },
    { name: "Sombra Grande", class: "shadow-lg" },
    { name: "Sombra XL", class: "shadow-xl" },
    { name: "Sombra 2XL", class: "shadow-2xl" },

    // 🔥 Glow / Neón
    { name: "Glow Azul", class: "shadow-lg shadow-blue-400" },
    { name: "Glow Rojo", class: "shadow-lg shadow-red-400" },
    { name: "Glow Verde", class: "shadow-lg shadow-green-400" },
    { name: "Glow Amarillo", class: "shadow-lg shadow-yellow-400" },
    { name: "Glow Morado", class: "shadow-lg shadow-purple-400" },
    { name: "Glow Rosa", class: "shadow-lg shadow-pink-400" },
    { name: "Glow Cian", class: "shadow-lg shadow-cyan-400" },

    // 🏆 Efectos Especiales
    { name: "Sombra Interna", class: "shadow-inner" },
    { name: "Sombra 3D", class: "shadow-lg shadow-gray-700" },
    { name: "Sombra Flotante", class: "shadow-2xl hover:shadow-xl transition duration-300" },
    { name: "Sombra Profunda", class: "shadow-2xl shadow-gray-800" },

    // ✨ Brillo Especial
    { name: "Brillo Azul", class: "shadow-md shadow-blue-500/50" },
    { name: "Brillo Rojo", class: "shadow-md shadow-red-500/50" },
    { name: "Brillo Verde", class: "shadow-md shadow-green-500/50" },
    { name: "Brillo Amarillo", class: "shadow-md shadow-yellow-500/50" },

    // 🔮 Efectos Vidrio / Transparencia
    { name: "Sombra Vidrio", class: "shadow-lg backdrop-blur-md bg-opacity-30" },
  ],

  animations: [
    // ❌ Sin Animación
    { name: "Sin Animación", class: "transition-none" },

    // 🔄 Transiciones Básicas
    { name: "Normal", class: "transition" },
    { name: "Suave", class: "transition duration-200 ease-in-out" },
    { name: "Rápida", class: "transition duration-100 ease-in" },
    { name: "Lenta", class: "transition duration-500 ease-out" },

    // 🔍 Escala y Zoom
    { name: "Zoom Hover", class: "hover:scale-110 transition-transform duration-200" },
    { name: "Zoom In", class: "hover:scale-125 transition-transform duration-300" },
    { name: "Zoom Out", class: "hover:scale-95 transition-transform duration-200" },
    { name: "Rebote", class: "hover:scale-110 hover:-translate-y-1 transition-transform duration-300" },

    // 💡 Sombras y Brillo
    { name: "Brillo Hover", class: "hover:shadow-xl hover:ring-2 hover:ring-white" },
    { name: "Glow Azul", class: "hover:shadow-blue-500 hover:ring-2 hover:ring-blue-400" },
    { name: "Glow Rojo", class: "hover:shadow-red-500 hover:ring-2 hover:ring-red-400" },
    { name: "Glow Verde", class: "hover:shadow-green-500 hover:ring-2 hover:ring-green-400" },

    // 🎭 Rotación y Giros
    { name: "Girar", class: "hover:rotate-12 transition-transform duration-300" },
    { name: "Rotar Completo", class: "hover:rotate-180 transition-transform duration-500" },
    { name: "Giro Suave", class: "hover:rotate-6 transition-transform duration-200" },

    // 🎢 Vibración y Rebote
    { name: "Vibración", class: "hover:animate-pulse" },
    { name: "Rebote Infinito", class: "hover:animate-bounce" },
    { name: "Latido", class: "hover:animate-ping" },

    // 🚀 Movimiento y Desplazamiento
    { name: "Deslizar Arriba", class: "hover:-translate-y-1 transition-transform duration-300" },
    { name: "Deslizar Abajo", class: "hover:translate-y-1 transition-transform duration-300" },
    { name: "Deslizar Izquierda", class: "hover:-translate-x-1 transition-transform duration-300" },
    { name: "Deslizar Derecha", class: "hover:translate-x-1 transition-transform duration-300" },

    // 🎇 Efectos Especiales
    { name: "Explosión Hover", class: "hover:scale-110 hover:rotate-12 hover:shadow-2xl transition-transform duration-300" },
    { name: "Efecto Flotante", class: "hover:animate-floating" },
  ],

};
