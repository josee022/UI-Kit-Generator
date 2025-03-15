import { showToast } from "../components/ToastAlert";

export default function ExportOptions({ colors }) {
  const copyCSS = () => {
    const cssVariables = colors
      .map((color, i) => `--color-${i + 1}: ${color};`)
      .join("\n");
    navigator.clipboard.writeText(`:root {\n${cssVariables}\n}`);

    // Usamos Toast en lugar de alert
    showToast("🎨 Código CSS copiado con éxito!", "success");
  };

  const copyJSON = () => {
    const json = JSON.stringify(colors, null, 2);
    navigator.clipboard.writeText(json);

    // Usamos Toast en lugar de alert
    showToast("📋 Código JSON copiado con éxito!", "success");
  };

  return (
    <div className="mt-4 flex space-x-4">
      <button
        onClick={copyCSS}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md font-semibold"
      >
        Copiar CSS
      </button>
      <button
        onClick={copyJSON}
        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md shadow-md font-semibold"
      >
        Copiar JSON
      </button>
    </div>
  );
}
