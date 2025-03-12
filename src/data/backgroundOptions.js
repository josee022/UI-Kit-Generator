export const backgroundOptions = {
  // 🎨 Colores Sólidos
  solidColors: [
    // 🔵 Tonos Fríos
    { name: "Azul", class: "bg-blue-500" },
    { name: "Azul Oscuro", class: "bg-blue-900" },
    { name: "Turquesa", class: "bg-teal-500" },
    { name: "Cian", class: "bg-cyan-500" },

    // 🔴 Tonos Cálidos
    { name: "Rojo", class: "bg-red-500" },
    { name: "Rojo Oscuro", class: "bg-red-900" },
    { name: "Naranja", class: "bg-orange-500" },
    { name: "Amarillo", class: "bg-yellow-500" },

    // 🟢 Tonos Naturales
    { name: "Verde", class: "bg-green-500" },
    { name: "Verde Oscuro", class: "bg-green-900" },
    { name: "Oliva", class: "bg-lime-600" },
    { name: "Menta", class: "bg-emerald-400" },

    // 🟣 Tonos Místicos
    { name: "Morado", class: "bg-purple-500" },
    { name: "Morado Oscuro", class: "bg-purple-900" },
    { name: "Violeta", class: "bg-indigo-500" },
    { name: "Lavanda", class: "bg-indigo-300" },

    // ⚫ Tonos Neutros
    { name: "Negro", class: "bg-black" },
    { name: "Gris Oscuro", class: "bg-gray-800" },
    { name: "Gris Medio", class: "bg-gray-500" },
    { name: "Gris Claro", class: "bg-gray-300" },
    { name: "Blanco", class: "bg-white border border-gray-300 text-black" },

    // ✨ Tonos Especiales
    { name: "Dorado", class: "bg-yellow-400" },
    { name: "Plateado", class: "bg-gray-400" },
    { name: "Bronce", class: "bg-orange-600" },
  ],

  // 🌈 Degradados
  gradients: [
    // 🔵 Degradados Azules
    {
      name: "Gradiente Azul",
      class: "bg-gradient-to-r from-blue-400 to-blue-700",
    },
    {
      name: "Gradiente Azul Oscuro",
      class: "bg-gradient-to-r from-blue-900 to-gray-900",
    },
    {
      name: "Gradiente Turquesa",
      class: "bg-gradient-to-r from-teal-400 to-cyan-600",
    },

    // 🔴 Degradados Rojos y Naranjas
    {
      name: "Gradiente Rojo",
      class: "bg-gradient-to-r from-red-400 to-red-700",
    },
    {
      name: "Gradiente Naranja",
      class: "bg-gradient-to-r from-orange-400 to-orange-700",
    },
    {
      name: "Gradiente Rojo-Negro",
      class: "bg-gradient-to-r from-red-900 to-black",
    },

    // 🟢 Degradados Verdes
    {
      name: "Gradiente Verde",
      class: "bg-gradient-to-r from-green-400 to-green-700",
    },
    {
      name: "Gradiente Verde Lima",
      class: "bg-gradient-to-r from-lime-400 to-green-600",
    },
    {
      name: "Gradiente Verde Oscuro",
      class: "bg-gradient-to-r from-green-900 to-gray-900",
    },

    // 🟣 Degradados Morados y Rosas
    {
      name: "Gradiente Morado",
      class: "bg-gradient-to-r from-purple-400 to-purple-700",
    },
    {
      name: "Gradiente Rosa",
      class: "bg-gradient-to-r from-pink-400 to-pink-700",
    },
    {
      name: "Gradiente Morado-Azul",
      class: "bg-gradient-to-r from-purple-600 to-blue-500",
    },

    // ⚫ Degradados Neutros
    {
      name: "Gradiente Oscuro",
      class: "bg-gradient-to-r from-gray-900 to-black",
    },
    {
      name: "Gradiente Gris",
      class: "bg-gradient-to-r from-gray-400 to-gray-700",
    },
    {
      name: "Gradiente Blanco",
      class: "bg-gradient-to-r from-white to-gray-200",
    },

    // ✨ Degradados Especiales
    {
      name: "Gradiente Arcoíris",
      class: "bg-gradient-to-r from-red-500 via-yellow-500 to-green-500",
    },
    {
      name: "Gradiente Dorado",
      class: "bg-gradient-to-r from-yellow-400 to-yellow-700",
    },
    {
      name: "Gradiente Azul Neón",
      class: "bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-700",
    },
  ],

  specials: [
    // 🌌 Espaciales y Galácticos
    {
      name: "Galaxia",
      class: "bg-gradient-to-r from-indigo-900 via-purple-700 to-black",
    },
    {
      name: "Espacio Profundo",
      class: "bg-gradient-to-br from-black via-gray-900 to-indigo-900",
    },
    {
      name: "Nebulosa Mística",
      class: "bg-gradient-to-r from-purple-900 via-pink-700 to-orange-600",
    },

    // 💡 Efectos Neón y Glitch
    { name: "Neón Azul", class: "bg-blue-500 shadow-lg shadow-blue-400/50" },
    {
      name: "Neón Violeta",
      class: "bg-purple-500 shadow-lg shadow-purple-400/50",
    },
    {
      name: "Neón Cyberpunk",
      class:
        "bg-gradient-to-r from-fuchsia-600 to-blue-500 shadow-lg shadow-pink-500/50",
    },
    {
      name: "Glitch Digital",
      class: "bg-gradient-to-r from-gray-900 to-black animate-pulse",
    },
    {
      name: "Retro Wave",
      class: "bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500",
    },

    // 🌊 Estilos Futuristas y de Vidrio
    {
      name: "Vidrio Espejado",
      class:
        "bg-gray-300/10 backdrop-blur-xl border border-gray-200/20 shadow-md",
    },
    {
      name: "Vidrio Futurista",
      class: "bg-white/10 backdrop-blur-md border border-white/20",
    },
    {
      name: "Vidrio Azul",
      class: "bg-blue-300/10 backdrop-blur-md border border-blue-400/20",
    },

    // 🔥 Estilos de Energía y Fuego
    {
      name: "Llamas Ardientes",
      class: "bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400",
    },
    {
      name: "Lava",
      class: "bg-gradient-to-t from-black via-red-900 to-orange-600",
    },
    {
      name: "Electricidad",
      class: "bg-gradient-to-r from-blue-700 via-cyan-500 to-white",
    },

    // 🎭 Estilos Sombríos y Oscuros
    {
      name: "Oscuridad Mística",
      class: "bg-gradient-to-b from-black via-gray-900 to-indigo-900",
    },
    {
      name: "Cyber Darkness",
      class: "bg-gradient-to-r from-gray-800 via-black to-blue-900",
    },
    {
      name: "Gothic Night",
      class: "bg-gradient-to-r from-gray-900 via-indigo-900 to-black",
    },

    // 🌈 Estilos con Movimiento y Parallax
    {
      name: "Holográfico",
      class:
        "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse",
    },
    {
      name: "Aurora Boreal",
      class: "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600",
    },
    {
      name: "Arcoíris Neón",
      class:
        "bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 ",
    },

    // 🌀 Estilos Abstractos y Creativos
    {
      name: "Hipnótico",
      class:
        "bg-gradient-to-r from-indigo-700 via-pink-600 to-red-500 animate-pulse",
    },
    {
      name: "Matrix Digital",
      class:
        "bg-gradient-to-r from-green-800 to-black shadow-lg shadow-green-500/50",
    },
  ],
};
