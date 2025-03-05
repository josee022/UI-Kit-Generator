"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

export default function VantaBackground({ children }) {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          highlightColor: 0xa855f7,
          midtoneColor: 0x6366f1,
          lowlightColor: 0x2563eb,
          baseColor: 0x4c348f,
          blurFactor: 0.6,
          zoom: 0.6,
          speed: 1,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="min-h-screen w-full">
      {children}
    </div>
  );
}
