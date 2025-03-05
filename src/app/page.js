import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>UI Kit Generator</h1>
      <div className="grid">
        <Link href="/buttons">
          <div className="card">
            <h2>🎨 Botones</h2>
            <p>Genera y personaliza botones fácilmente.</p>
          </div>
        </Link>
        <Link href="/backgrounds">
          <div className="card">
            <h2>🌈 Fondos & Degradados</h2>
            <p>Crea y copia fondos y degradados CSS.</p>
          </div>
        </Link>
        <Link href="/colors">
          <div className="card">
            <h2>🎨 Paleta de Colores</h2>
            <p>Explora y copia combinaciones de colores.</p>
          </div>
        </Link>
        <Link href="/typography">
          <div className="card">
            <h2>📝 Tipografía</h2>
            <p>Prueba fuentes y estilos de texto.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
