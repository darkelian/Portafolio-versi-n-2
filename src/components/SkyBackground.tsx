import { ShootingStars } from "@/components/ShootingStars";
import { SkyConstellations } from "@/components/SkyConstellations";
import { SkyParallax } from "@/components/SkyParallax";
import { TuxConstellation } from "@/components/TuxConstellation";

export function SkyBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-day-bg dark:bg-night-bg transition-colors duration-700"
      aria-hidden="true"
    >
      {/* Cielo día: sol, nubes, dunas */}
      <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-700">
        <div
          className="absolute rounded-full bg-[#FFF3E0]"
          style={{
            top: "12%",
            right: "12%",
            width: 140,
            height: 140,
            boxShadow:
              "0 0 0 40px rgba(255,243,224,0.2), 0 0 0 80px rgba(255,243,224,0.1)",
          }}
        />
        <div
          className="absolute rounded-full bg-white/60"
          style={{ width: 150, height: 40, top: "24%", left: "18%" }}
        />
        <div
          className="absolute rounded-full bg-white/60"
          style={{ width: 200, height: 50, top: "34%", right: "26%" }}
        />
        <svg
          className="absolute bottom-0 w-full h-auto text-[#D4855A]"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C672,320,576,320,480,320C384,320,288,320,192,320C96,320,48,320,0,320Z" />
        </svg>
      </div>

      {/* Cielo noche: estrellas, constelaciones, estrellas fugaces, luna */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700">
        <SkyParallax>
          {/* La bóveda gira despacio en bloque, así que las estrellas y las
              constelaciones se mueven solidariamente, como el cielo real. */}
          <div className="sky-rotor">
            <div className="star-layer star-layer--far" />
            <div className="star-layer star-layer--mid" />
            <div className="star-layer star-layer--near" />

            <SkyConstellations />
          </div>

          {/* El Tux también queda fuera del rotor: orbitando el centro pasaría
              buena parte del ciclo detrás del texto de la portada. Fijo en el
              hueco libre de la derecha, bajo la luna, siempre está a la vista. */}
          <TuxConstellation />
          <ShootingStars />

          {/* La luna queda fuera del rotor: orbitando el centro de la pantalla
              se vería antinatural. */}
          <div
            className="absolute rounded-full"
            style={{
              top: "20%",
              right: "10%",
              width: 100,
              height: 100,
              boxShadow: "-22px 13px 0 0 #F3F4F6",
              transform: "rotate(-20deg)",
            }}
          />
        </SkyParallax>
      </div>
    </div>
  );
}
