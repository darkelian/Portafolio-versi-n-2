export function SkyBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden bg-day-bg dark:bg-night-bg transition-colors duration-700"
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

      {/* Cielo noche: estrellas, constelación, luna */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700">
        <div className="stars absolute inset-0" />
        <svg
          className="absolute"
          style={{ top: "15%", right: "20%", width: 180, height: 180 }}
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M100 40 L100 100 L50 160 M100 100 L150 140"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={1.5}
            strokeDasharray="3 3"
          />
          <circle cx={100} cy={40} r={3} fill="white" />
          <circle cx={100} cy={100} r={2.5} fill="white" />
          <circle cx={50} cy={160} r={3.5} fill="white" />
          <circle cx={150} cy={140} r={2} fill="white" />
        </svg>
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
        {/* Easter egg: Tux (pingüino de Linux) dibujado como constelación muy sutil */}
        <svg
          className="absolute opacity-30"
          style={{
            top: "45%",
            left: "10%",
            width: 180,
            height: 180,
            transform: "scale(0.6) rotate(-15deg)",
          }}
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M100 20 L70 50 L30 110 L60 180 L100 170 L140 180 L170 110 L130 50 Z M70 50 L100 80 L130 50"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth={1}
            strokeDasharray="2 4"
          />
          <circle cx={100} cy={20} r={2} fill="white" />
          <circle cx={70} cy={50} r={1.5} fill="white" />
          <circle cx={130} cy={50} r={1.5} fill="white" />
          <circle cx={30} cy={110} r={2} fill="white" />
          <circle cx={170} cy={110} r={2} fill="white" />
          <circle cx={60} cy={180} r={2} fill="white" />
          <circle cx={140} cy={180} r={2} fill="white" />
          <circle cx={100} cy={170} r={1.5} fill="white" />
          <circle cx={100} cy={80} r={1.5} fill="white" />
        </svg>
      </div>
    </div>
  );
}
