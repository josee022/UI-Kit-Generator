import { showToast } from "../components/ToastAlert";

export default function ExportFont({ selectedFont }) {
  const copyFontCSS = () => {
    const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${selectedFont.replace(
      " ",
      "+"
    )}&display=swap');\n\n`;

    const fontFamily = `font-family: '${selectedFont}', sans-serif;`;

    // Código CSS a copiar
    const cssCode = fontImport + fontFamily;
    navigator.clipboard.writeText(cssCode);

    // Mostrar toast de éxito
    showToast("📋 Código CSS de la fuente copiado!", "success");
  };

  return (
    <button
      onClick={copyFontCSS}
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md shadow-md font-semibold mt-4"
    >
      Copiar Código
    </button>
  );
}
