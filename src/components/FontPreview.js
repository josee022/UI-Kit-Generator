export default function FontPreview({
  selectedFont,
  fontSize,
  fontWeight,
  letterSpacing,
  color,
}) {
  return (
    <div className="bg-white/10 p-6 rounded-lg shadow-lg mb-6 text-center w-full max-w-2xl">
      <p
        style={{
          fontFamily: selectedFont,
          fontSize: `${fontSize}px`,
          fontWeight: fontWeight,
          letterSpacing: `${letterSpacing}px`,
          color: color,
        }}
      >
        Vista previa de la tipografía: {selectedFont}
      </p>
    </div>
  );
}
