import { useState } from "react";

export default function ColorPickerLive() {
  const [color, setColor] = useState("#ff0000");

  const hexToRGBA = (hex) => {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

  const hexToHSL = (hex) => {
    let r = parseInt(hex.substring(1, 3), 16) / 255;
    let g = parseInt(hex.substring(3, 5), 16) / 255;
    let b = parseInt(hex.substring(5, 7), 16) / 255;

    let max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h *= 60;
    }
    return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(
      l * 100
    )}%)`;
  };

  return (
    <div className="w-full max-w-sm p-6 bg-white/20 backdrop-blur-lg shadow-lg rounded-lg text-white flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">
        🎨 Selector de Color en Vivo
      </h2>
      <p className="text-gray-300 text-center mb-4">
        Haz clic en el color para cambiarlo y obtén su código en HEX, RGBA y HSL.
      </p>

      {/* Color Picker */}
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-40 h-40 rounded-lg cursor-pointer border-4 border-white shadow-md mb-4"
      />

      {/* Códigos de Color (Alineados a la derecha) */}
      <div className="flex flex-col items-start w-full px-6">
        <p className="flex justify-between w-full">
          <strong className="w-20 text-left">HEX:</strong>
          <span className="text-gray-300">{color}</span>
        </p>
        <p className="flex justify-between w-full">
          <strong className="w-20 text-left">RGBA:</strong>
          <span className="text-gray-300">{hexToRGBA(color)}</span>
        </p>
        <p className="flex justify-between w-full">
          <strong className="w-20 text-left">HSL:</strong>
          <span className="text-gray-300">{hexToHSL(color)}</span>
        </p>
      </div>
    </div>
  );
}
