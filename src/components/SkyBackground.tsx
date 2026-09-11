import { Birds } from "@/components/Birds";
import { DriftingClouds } from "@/components/DriftingClouds";
import { PaperKite } from "@/components/PaperKite";
import { ShootingStars } from "@/components/ShootingStars";
import { SkyConstellations } from "@/components/SkyConstellations";
import { SkyParallax } from "@/components/SkyParallax";
import { TuxConstellation } from "@/components/TuxConstellation";

// Las dunas son el único elemento común a los dos cielos: no se funden al
// cambiar de tema, sólo cambian de color (de arena a silueta). Mantener el
// horizonte siempre en pantalla es lo que hace que el amanecer y el atardecer
// se lean como un cambio de luz y no como un cambio de decorado.
//
// Cada capa tiene su profundidad para el parallax: la lejana apenas se mueve
// con el cursor y la cercana es la que más.
const DUNES = [
  {
    d: "M0,176 C180,120 360,104 560,140 C760,176 900,196 1080,150 C1240,110 1360,96 1440,104 L1440,320 L0,320 Z",
    className: "dune--far",
    depth: 0.3,
  },
  {
    d: "M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C672,320,576,320,480,320C384,320,288,320,192,320C96,320,48,320,0,320Z",
    className: "dune--mid",
    depth: 0.7,
  },
  {
    d: "M0,280 C160,252 320,244 500,268 C700,294 860,300 1060,276 C1240,254 1360,262 1440,276 L1440,320 L0,320 Z",
    className: "dune--near",
    depth: 1.4,
  },
];

export function SkyBackground() {
  return (
    <div
      className="sky fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-day-bg dark:bg-night-bg transition-colors duration-700"
      aria-hidden="true"
    >
      {/* Un único SkyParallax para todo el cielo: publica la posición del
          cursor y cada capa decide cuánto se desplaza. */}
      <SkyParallax>
        {/* Luz del crepúsculo: sólo se ve durante el amanecer y el atardecer,
            por detrás de todo, tiñendo el fondo que cambia de color. */}
        <div className="sky-glow" />

        {/* Cielo día: sol, nubes, aves y cometa */}
        <div className="day-sky absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-700">
          <div className="sun">
            <div className="sun-rays" />
            <div className="sun-halo" />
            <div className="sun-halo" />
            <div className="sun-disc" />
          </div>

          <DriftingClouds />
          <Birds />
          <PaperKite />
        </div>

        {/* Cielo noche: estrellas, constelaciones, estrellas fugaces, luna */}
        <div className="night-sky absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700">
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
            className="moon absolute rounded-full"
            style={{
              top: "20%",
              right: "10%",
              width: 100,
              height: 100,
              boxShadow: "-22px 13px 0 0 #F3F4F6",
              transform: "rotate(-20deg)",
            }}
          />
        </div>

        {/* El horizonte va por delante de ambos cielos: así el sol se pone
            detrás de las dunas, el hilo de la cometa se pierde tras ellas y las
            estrellas nunca aparecen por debajo de la línea del suelo. */}
        <div className="landscape absolute inset-0">
          {DUNES.map(({ d, className, depth }) => (
            <svg
              key={className}
              className={`dune ${className} parallax-layer`}
              viewBox="0 0 1440 320"
              style={{ "--depth": depth } as React.CSSProperties}
            >
              <path d={d} />
            </svg>
          ))}
        </div>
      </SkyParallax>
    </div>
  );
}
