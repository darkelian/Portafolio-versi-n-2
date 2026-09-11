// Guiño a Linux: Tux dibujado como una constelación.
//
// Las estrellas (los <circle>) están siempre presentes, muy apagadas, así que a
// simple vista sólo se ve un grupo de puntos más. Cada ciclo de la animación las
// líneas se trazan solas parte por parte — cabeza, ojos, pico, cuerpo, aletas,
// pies —, el pingüino se mantiene unos segundos y se desvanece.
//
// Cada <path> lleva pathLength={1}: eso normaliza la longitud del trazo a 1 sea
// cual sea su forma real, así que el dibujado se anima con stroke-dashoffset de
// 1 a 0 sin tener que medir los paths en JavaScript.

type Star = [x: number, y: number, r: number];

// La cabeza es notablemente más pequeña que el cuerpo, y el cuerpo tiene forma
// de pera —estrecho en los hombros y ancho en la base—: es lo que hace que la
// silueta se lea como un pingüino y no como dos círculos apilados.
const HEAD: Star[] = [
  [100, 14, 2.4],
  [120, 19, 1.4],
  [134, 33, 1.8],
  [139, 52, 1.3],
  [133, 71, 1.7],
  [119, 83, 1.3],
  [100, 87, 1.5],
  [81, 83, 1.3],
  [67, 71, 1.8],
  [61, 52, 1.3],
  [66, 33, 1.9],
  [80, 19, 1.4],
];

const EYES: Star[] = [
  [86, 38, 1.2],
  [93, 45, 1.2],
  [86, 53, 1.2],
  [79, 45, 1.2],
  [114, 38, 1.2],
  [121, 45, 1.2],
  [114, 53, 1.2],
  [107, 45, 1.2],
];

const BEAK: Star[] = [
  [100, 57, 1.5],
  [119, 64, 2],
  [114, 77, 1.4],
  [100, 82, 2.2],
  [86, 77, 1.4],
  [81, 64, 2],
];

const BODY: Star[] = [
  [76, 86, 1.4],
  [48, 100, 1.9],
  [33, 132, 1.5],
  [30, 166, 2.2],
  [40, 196, 1.4],
  [62, 214, 1.7],
  [100, 221, 1.6],
  [138, 214, 1.7],
  [160, 196, 1.4],
  [170, 166, 2.2],
  [167, 132, 1.5],
  [152, 100, 1.9],
  [124, 86, 1.4],
];

// Las aletas cuelgan hacia abajo y un poco hacia fuera: salen del hombro y
// vuelven a apoyarse en el costado, reutilizando dos estrellas del cuerpo.
const LEFT_WING: Star[] = [
  [48, 100, 1.9],
  [24, 126, 1.4],
  [10, 158, 1.7],
  [14, 180, 2.1],
  [30, 166, 2.2],
];

const RIGHT_WING: Star[] = [
  [152, 100, 1.9],
  [176, 126, 1.4],
  [190, 158, 1.7],
  [186, 180, 2.1],
  [170, 166, 2.2],
];

const LEFT_FOOT: Star[] = [
  [62, 214, 1.7],
  [40, 220, 2.2],
  [22, 232, 1.6],
  [36, 241, 2.4],
  [66, 238, 1.5],
  [84, 225, 1.8],
];

const RIGHT_FOOT: Star[] = [
  [138, 214, 1.7],
  [160, 220, 2.2],
  [178, 232, 1.6],
  [164, 241, 2.4],
  [134, 238, 1.5],
  [116, 225, 1.8],
];

function toPath(stars: Star[], close = true) {
  const d = stars.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  return close ? `${d} Z` : d;
}

function Constellation({
  stars,
  close = true,
  delay,
  tone,
}: {
  stars: Star[];
  close?: boolean;
  delay: string;
  tone: "cool" | "amber";
}) {
  return (
    <g className={`tux-part tux-part--${tone}`} style={{ "--tux-delay": delay } as React.CSSProperties}>
      <path className="tux-line" d={toPath(stars, close)} pathLength={1} />
      {/* Las estrellas se agrupan para animar la opacidad del <g> una sola vez
          en lugar de una animación por círculo. */}
      <g className="tux-stars">
        {stars.map(([x, y, r]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r} />
        ))}
      </g>
    </g>
  );
}

export function TuxConstellation() {
  return (
    <svg
      className="tux-constellation"
      viewBox="0 0 200 250"
      fill="none"
      aria-hidden="true"
    >
      <Constellation stars={HEAD} delay="0s" tone="cool" />
      <Constellation stars={EYES.slice(0, 4)} delay="0.5s" tone="cool" />
      <Constellation stars={EYES.slice(4)} delay="0.5s" tone="cool" />
      <Constellation stars={BEAK} delay="1s" tone="amber" />
      <Constellation stars={BODY} close={false} delay="1.5s" tone="cool" />
      <Constellation stars={LEFT_WING} close={false} delay="2s" tone="cool" />
      <Constellation stars={RIGHT_WING} close={false} delay="2s" tone="cool" />
      <Constellation stars={LEFT_FOOT} delay="2.5s" tone="amber" />
      <Constellation stars={RIGHT_FOOT} delay="2.5s" tone="amber" />

      {/* Las pupilas no forman parte de ningún trazo: son dos estrellas más
          brillantes que dan la mirada del pingüino. */}
      <g className="tux-part tux-part--cool" style={{ "--tux-delay": "0.5s" } as React.CSSProperties}>
        <g className="tux-stars">
          <circle cx={86} cy={46} r={2.2} />
          <circle cx={114} cy={46} r={2.2} />
        </g>
      </g>
    </svg>
  );
}
