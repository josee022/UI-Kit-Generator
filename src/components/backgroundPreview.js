import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/src/vanta.net";
import WAVES from "vanta/src/vanta.waves";
import FOG from "vanta/src/vanta.fog";

export default function BackgroundPreview({ className }) {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null); 

  useEffect(() => {
    if (className.includes("net")) {
      const effect = NET({
        el: vantaRef.current,
        THREE,
        color: "#9333ea",
        backgroundColor: "#111827",
      });
      setVantaEffect(effect);
      vantaEffectRef.current = effect;
    } else if (className.includes("waves")) {
      const effect = WAVES({
        el: vantaRef.current,
        THREE,
        color: "#1e3a8a",
        shininess: 50,
      });
      setVantaEffect(effect);
      vantaEffectRef.current = effect;
    } else if (className.includes("fog")) {
      const effect = FOG({
        el: vantaRef.current,
        THREE,
        highlightColor: "#3b82f6",
        baseColor: "#1e293b",
      });
      setVantaEffect(effect);
      vantaEffectRef.current = effect;
    } else {
      if (vantaEffectRef.current) vantaEffectRef.current.destroy();
      setVantaEffect(null);
      vantaEffectRef.current = null;
    }

    return () => {
      if (vantaEffectRef.current) vantaEffectRef.current.destroy();
    };
  }, [className]);

  return (
    <div
      ref={vantaRef}
      className={`w-full h-60 rounded-lg shadow-lg transition-all duration-500 ${className}`}
    ></div>
  );
}
