// Guiño del modo claro, equivalente al Tux de la noche: una cometa de papel que
// se mece con el viento sobre las dunas.
//
// El balanceo gira la cometa alrededor del punto donde se ata el hilo, así que
// el hilo nunca se despega. La cola ondea sin animar su trazado (Safari no
// soporta animar `d`): la cola entera se mece y cada lazo gira con un retraso
// creciente, y la suma de ambos movimientos se lee como una onda.

// Altura de cada lazo de la cola, en el viewBox de 100×260 de la cometa.
const BOWS = [152, 180, 208, 236];

export function PaperKite() {
  return (
    <div
      className="paper-kite parallax-layer"
      style={{ "--depth": 0.9 } as React.CSSProperties}
    >
      <svg className="kite-string" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
        <path d="M100,0 Q70,72 0,100" />
      </svg>

      <svg className="kite-body" viewBox="0 0 100 260" fill="none">
        <g className="kite-tail">
          <path className="kite-tail-line" d="M50,128 L50,252" />
          {BOWS.map((y, i) => (
            <g key={y} transform={`translate(50 ${y})`}>
              <path
                className="kite-bow"
                d="M-8,-5 L0,0 L-8,5 Z M8,-5 L0,0 L8,5 Z"
                style={{ "--bow-delay": `${-i * 0.2}s` } as React.CSSProperties}
              />
            </g>
          ))}
        </g>

        <path d="M50,4 L8,46 L50,46 Z" fill="#c25a24" />
        <path d="M50,4 L92,46 L50,46 Z" fill="#e9a75f" />
        <path d="M8,46 L50,128 L50,46 Z" fill="#e9a75f" />
        <path d="M92,46 L50,128 L50,46 Z" fill="#c25a24" />
        <path className="kite-frame" d="M50,4 L92,46 L50,128 L8,46 Z M50,4 L50,128 M8,46 L92,46" />
      </svg>
    </div>
  );
}
