import { useState } from "react";
import ColorSwatch from "@/components/ColorSwatch";
import ExportOptions from "@/components/ExportOptions";
import ColorPickerLive from "@/components/ColorPickerLive";
import { Button } from "@/components/ui/button";

export default function PaletteGenerator() {
  const [colors, setColors] = useState(["#ff0000", "#00ff00", "#0000ff", "#ffcc00"]);

  const updateColor = (index, newColor) => {
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    setColors(updatedColors);
  };

  const addColor = () => {
    if (colors.length < 5) {
      setColors([...colors, "#ffffff"]);
    }
  };

  const removeColor = (index) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-6xl flex gap-6">
      {/* Paleta de colores */}
      <div className="w-2/3 bg-white/20 p-8 rounded-lg shadow-xl backdrop-blur-lg text-white flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6">🎨 Personaliza tu Paleta</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {colors.map((color, index) => (
            <ColorSwatch key={index} color={color} onChange={(newColor) => updateColor(index, newColor)} onRemove={() => removeColor(index)} />
          ))}
        </div>

        {/* Botón Añadir Color - Se deshabilita cuando hay 5 colores */}
        <Button
          onClick={addColor}
          disabled={colors.length >= 5}
          className={`px-6 py-3 rounded-md w-1/2 font-semibold shadow-md ${
            colors.length >= 5
              ? "bg-gray-500 text-gray-300 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600 text-white"
          }`}
        >
          {colors.length >= 5 ? "Máximo Alcanzado" : "+ Añadir Color"}
        </Button>

        <ExportOptions colors={colors} />
      </div>

      {/* Selector de Color */}
      <ColorPickerLive />
    </div>
  );
}
