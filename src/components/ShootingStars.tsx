// Estrellas fugaces: unas pocas estelas que cruzan el cielo de vez en cuando.
//
// Van fuera del rotor para que su trayectoria no gire con la bóveda, y son sólo
// CSS. Cada una tiene un ciclo largo con una duración distinta (13, 19 y 23 s,
// sin múltiplos comunes cercanos) y la estela ocupa apenas un instante de ese
// ciclo, así que casi nunca coinciden y el ritmo resultante parece aleatorio.

const METEORS = [
  { top: "12%", left: "20%", angle: "28deg", duration: "13s", delay: "3s" },
  { top: "8%", left: "72%", angle: "152deg", duration: "19s", delay: "9s" },
  { top: "34%", left: "44%", angle: "34deg", duration: "23s", delay: "15s" },
];

export function ShootingStars() {
  return METEORS.map(({ top, left, angle, duration, delay }) => (
    <span
      key={`${top}-${left}`}
      className="shooting-star"
      style={
        {
          top,
          left,
          "--meteor-angle": angle,
          "--meteor-duration": duration,
          "--meteor-delay": delay,
        } as React.CSSProperties
      }
    />
  ));
}
