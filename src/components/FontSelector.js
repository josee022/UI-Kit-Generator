import { useEffect, useState } from "react";

export default function FontSelector({ selectedFont, setSelectedFont }) {
  const [fonts, setFonts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY;

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const response = await fetch(
            `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`
          );

        if (!response.ok) {
          throw new Error(`Error en la API: ${response.status}`);
        }

        const data = await response.json();

        if (!data.items) {
          throw new Error("La API no devolvió datos válidos.");
        }

        setFonts(data.items.map((font) => font.family));
      } catch (err) {
        console.error("Error al obtener las fuentes:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFonts();
  }, [apiKey]);

  return (
    <div className="mb-6">
      <label className="text-white font-semibold">Selecciona una fuente:</label>

      {loading && <p className="text-gray-300 mt-2">Cargando fuentes...</p>}
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}

      {!loading && !error && (
        <select
          value={selectedFont}
          onChange={(e) => setSelectedFont(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded-md w-full mt-2"
        >
          {fonts.map((font, index) => (
            <option key={index} value={font}>
              {font}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
