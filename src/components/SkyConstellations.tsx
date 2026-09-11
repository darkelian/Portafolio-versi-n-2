// Constelaciones de fondo que giran con la bóveda. A diferencia del Tux no se
// animan por sí mismas: son trazos tenues y fijos que dan textura al cielo.
// Además de la figura abstracta original hay dos reales, la Osa Mayor y
// Casiopea, reconocibles a primera vista por su silueta de cazo y de "W".

type Star = [x: number, y: number, r: number];

type Figure = {
  className: string;
  viewBox: string;
  stars: Star[];
  // Cada lista son índices de `stars` unidos en una polilínea independiente.
  lines: number[][];
};

const FIGURES: Figure[] = [
  {
    className: "sky-constellation--abstract",
    viewBox: "0 0 200 200",
    stars: [
      [100, 40, 3],
      [100, 100, 2.5],
      [50, 160, 3.5],
      [150, 140, 2],
    ],
    lines: [
      [0, 1, 2],
      [1, 3],
    ],
  },
  {
    // Osa Mayor: el mango (Alkaid → Megrez) y el cazo, que se cierra en Megrez.
    className: "sky-constellation--dipper",
    viewBox: "0 0 200 100",
    stars: [
      [8, 44, 2.2], // Alkaid
      [42, 30, 2.4], // Mizar
      [74, 34, 2.4], // Alioth
      [104, 44, 1.6], // Megrez
      [110, 74, 2.2], // Phecda
      [158, 80, 2.2], // Merak
      [162, 40, 2.6], // Dubhe
    ],
    lines: [[0, 1, 2, 3, 4, 5, 6, 3]],
  },
  {
    // Casiopea: la "W".
    className: "sky-constellation--cassiopeia",
    viewBox: "0 0 200 100",
    stars: [
      [8, 30, 2.2],
      [52, 72, 2.4],
      [96, 46, 2],
      [142, 78, 2.4],
      [190, 36, 2.6],
    ],
    lines: [[0, 1, 2, 3, 4]],
  },
];

function toPath({ stars, lines }: Figure) {
  return lines
    .map((line) =>
      line.map((i, n) => `${n === 0 ? "M" : "L"}${stars[i][0]},${stars[i][1]}`).join(" "),
    )
    .join(" ");
}

export function SkyConstellations() {
  return FIGURES.map((figure) => (
    <svg
      key={figure.className}
      className={`sky-constellation ${figure.className}`}
      viewBox={figure.viewBox}
      fill="none"
    >
      <path
        d={toPath(figure)}
        stroke="rgba(255,255,255,0.25)"
        strokeWidth={1.5}
        strokeDasharray="3 3"
      />
      {figure.stars.map(([x, y, r]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="white" />
      ))}
    </svg>
  ));
}
