export default function ColorSwatch({ color, onChange, onRemove }) {
  return (
    <div className="flex flex-col items-center">
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-24 h-24 rounded-lg border-2 border-white shadow-md cursor-pointer"
      />
      <span className="text-white font-semibold mt-2">{color}</span>
      <button onClick={onRemove} className="text-red-400 hover:text-red-600 text-sm mt-1 font-semibold">
        ❌ Eliminar
      </button>
    </div>
  );
}
