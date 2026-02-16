import { useEffect, useState } from "react";
import MusicDashboard from "./pages/MusicDashboard";

export default function App() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;

      setPos({
        x: 50 + x,
        y: 50 + y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4')",
        backgroundSize: "110%",
        backgroundPosition: `${pos.x}% ${pos.y}%`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen bg-black/70 backdrop-blur-sm">
        <MusicDashboard />
      </div>
    </div>
  );
}