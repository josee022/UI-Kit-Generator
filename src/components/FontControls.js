export default function FontControls({
  fontSize,
  setFontSize,
  fontWeight,
  setFontWeight,
  letterSpacing,
  setLetterSpacing,
  color,
  setColor,
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-6">
      <div>
        <label className="text-white font-semibold">Tamaño:</label>
        <input
          type="range"
          min="10"
          max="100"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="w-32"
        />
      </div>
      <div>
        <label className="text-white font-semibold">Peso:</label>
        <input
          type="range"
          min="100"
          max="900"
          step="100"
          value={fontWeight}
          onChange={(e) => setFontWeight(e.target.value)}
          className="w-32"
        />
      </div>
      <div>
        <label className="text-white font-semibold">Espaciado:</label>
        <input
          type="range"
          min="-5"
          max="10"
          value={letterSpacing}
          onChange={(e) => setLetterSpacing(e.target.value)}
          className="w-32"
        />
      </div>
      <div>
        <label className="text-white font-semibold">Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 rounded-lg border"
        />
      </div>
    </div>
  );
}
