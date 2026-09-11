// Aves que cruzan el cielo de día: el equivalente diurno de las estrellas
// fugaces.
//
// Cada bandada atraviesa la pantalla durante una parte de su ciclo y espera
// invisible el resto. Los ciclos (31 y 43 s) no coinciden, así que el ritmo
// parece aleatorio, y cada ave aletea con su propio desfase para que la bandada
// no se mueva como un bloque.

const FLOCKS = [
  {
    top: "17%",
    from: "-90px",
    dx: "calc(100vw + 180px)",
    duration: "31s",
    delay: "4s",
    birds: [
      { x: 0, y: 0, size: 22, flap: "0s" },
      { x: 30, y: 12, size: 16, flap: "-0.2s" },
      { x: -24, y: 16, size: 18, flap: "-0.4s" },
    ],
  },
  {
    top: "27%",
    from: "calc(100% + 90px)",
    dx: "calc(-100vw - 180px)",
    duration: "43s",
    delay: "17s",
    birds: [
      { x: 0, y: 0, size: 18, flap: "-0.1s" },
      { x: 26, y: -10, size: 14, flap: "-0.35s" },
    ],
  },
];

export function Birds() {
  return FLOCKS.map(({ top, from, dx, duration, delay, birds }) => (
    <div
      key={top}
      className="bird-flock"
      style={
        {
          top,
          left: from,
          "--flight-dx": dx,
          "--flight-duration": duration,
          "--flight-delay": delay,
        } as React.CSSProperties
      }
    >
      {birds.map(({ x, y, size, flap }) => (
        <svg
          key={`${x}-${y}`}
          className="bird"
          viewBox="0 0 24 12"
          style={{ left: x, top: y, width: size, "--flap-delay": flap } as React.CSSProperties}
        >
          <path className="bird-wing bird-wing--left" d="M12,7 Q7,1 1,4" />
          <path className="bird-wing bird-wing--right" d="M12,7 Q17,1 23,4" />
        </svg>
      ))}
    </div>
  ));
}
