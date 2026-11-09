import React from 'react';

/** Ilustración de Trucha Arcoíris Tradicional de Manantial */
export const TroutRainbowIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full object-contain p-4 ${className}`}
    aria-label="Ilustración de Trucha Arcoíris Tradicional"
  >
    <defs>
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#24431e" />
        <stop offset="40%" stopColor="#3f7530" />
        <stop offset="80%" stopColor="#4f9039" />
        <stop offset="100%" stopColor="#72c0d4" />
      </linearGradient>
      <linearGradient id="stripeGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#c05621" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#e8a07a" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#c05621" stopOpacity="0.7" />
      </linearGradient>
    </defs>

    {/* Water ripples background */}
    <ellipse cx="200" cy="180" rx="160" ry="24" stroke="#c8eaf2" strokeWidth="2" fill="none" opacity="0.6" />
    <ellipse cx="200" cy="190" rx="120" ry="18" stroke="#c8eaf2" strokeWidth="1.5" fill="none" opacity="0.4" />

    {/* Trout Body */}
    <g transform="translate(40, 70)">
      {/* Caudal Fin (Cola) */}
      <path
        d="M30 75 L0 45 C12 65 12 85 0 105 L30 75 Z"
        fill="#325e28"
        stroke="#192e15"
        strokeWidth="1.5"
      />
      {/* Main Torso */}
      <path
        d="M25 75 C60 45 130 35 220 50 C270 58 300 70 315 75 C300 85 260 105 210 110 C120 115 60 105 25 75 Z"
        fill="url(#bodyGrad)"
        stroke="#192e15"
        strokeWidth="2"
      />
      {/* Belly light tint */}
      <path
        d="M50 82 C100 105 180 112 250 95 C200 106 120 105 50 82 Z"
        fill="#fdfcf7"
        opacity="0.85"
      />
      {/* Iridescent Rainbow Lateral Stripe */}
      <path
        d="M55 76 C110 70 190 70 275 75 C190 77 110 77 55 76 Z"
        fill="url(#stripeGrad)"
      />
      {/* Characteristic Rainbow Trout spots */}
      <g fill="#0f1c0d" opacity="0.65">
        <circle cx="90" cy="56" r="1.5" /><circle cx="110" cy="52" r="1.5" /><circle cx="130" cy="50" r="1.5" />
        <circle cx="100" cy="62" r="1.2" /><circle cx="120" cy="59" r="1.3" /><circle cx="140" cy="58" r="1.2" />
        <circle cx="160" cy="54" r="1.5" /><circle cx="180" cy="57" r="1.4" /><circle cx="200" cy="60" r="1.5" />
        <circle cx="150" cy="65" r="1.2" /><circle cx="170" cy="66" r="1.3" /><circle cx="190" cy="67" r="1.2" />
        <circle cx="70" cy="68" r="1.3" /><circle cx="85" cy="70" r="1.2" />
      </g>
      {/* Dorsal Fin */}
      <path
        d="M130 45 C145 20 170 18 180 43 Z"
        fill="#325e28"
        stroke="#192e15"
        strokeWidth="1.5"
      />
      {/* Pectoral Fin */}
      <path
        d="M245 85 C230 105 215 110 210 102 C215 95 230 88 245 85 Z"
        fill="#e8a07a"
        stroke="#192e15"
        strokeWidth="1"
        opacity="0.9"
      />
      {/* Anal Fin */}
      <path
        d="M80 100 C70 115 60 118 55 110 C60 105 70 100 80 100 Z"
        fill="#325e28"
        stroke="#192e15"
        strokeWidth="1"
      />
      {/* Operculum (Agalla) */}
      <path
        d="M260 62 C250 72 250 85 260 92"
        stroke="#192e15"
        strokeWidth="1.75"
        strokeLinecap="round"
        fill="none"
      />
      {/* Eye */}
      <circle cx="295" cy="70" r="4.5" fill="#fdfcf7" stroke="#192e15" strokeWidth="1.5" />
      <circle cx="296" cy="69.5" r="2.5" fill="#0f1c0d" />
      {/* Mouth */}
      <path d="M315 75 L305 78" stroke="#192e15" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Clean tag in corner */}
    <text x="200" y="260" textAnchor="middle" fill="#165c6e" fontSize="11" fontFamily="DM Sans" fontWeight="500" letterSpacing="0.08em">
      TALLA PLATO INDIVIDUAL · 350G A 600G
    </text>
  </svg>
);

/** Ilustración de Trucha Salmonada Corte Gourmet */
export const TroutSalmonIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full object-contain p-4 ${className}`}
    aria-label="Ilustración de Trucha Arcoíris Salmonada Corte Gourmet"
  >
    <defs>
      <linearGradient id="salmonFlesh" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#c05621" />
        <stop offset="50%" stopColor="#e8a07a" />
        <stop offset="100%" stopColor="#8b3a1a" />
      </linearGradient>
      <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#325e28" />
        <stop offset="100%" stopColor="#192e15" />
      </linearGradient>
    </defs>

    {/* Cutting Board / Plate Shadow */}
    <ellipse cx="200" cy="180" rx="150" ry="30" fill="#fbe8db" opacity="0.6" />

    {/* Gourmet Salmon Steak / Filet Cross Section */}
    <g transform="translate(110, 50)">
      {/* Outer Skin Rim */}
      <path
        d="M90 10 C150 10 180 60 175 130 C170 175 130 195 90 195 C50 195 10 175 5 130 C0 60 30 10 90 10 Z"
        fill="url(#skinGrad)"
        stroke="#0f1c0d"
        strokeWidth="2"
      />
      {/* Vivid Salmon Meat */}
      <path
        d="M90 20 C140 20 165 65 162 125 C158 165 125 183 90 183 C55 183 22 165 18 125 C15 65 40 20 90 20 Z"
        fill="url(#salmonFlesh)"
      />
      {/* White Intramuscular Fat Marbling lines */}
      <path d="M40 70 C70 50 110 50 140 70" stroke="#fdfcf7" strokeWidth="2" opacity="0.85" fill="none" />
      <path d="M30 95 C70 75 110 75 150 95" stroke="#fdfcf7" strokeWidth="2" opacity="0.9" fill="none" />
      <path d="M28 120 C70 100 110 100 152 120" stroke="#fdfcf7" strokeWidth="2.2" opacity="0.85" fill="none" />
      <path d="M35 145 C70 128 110 128 145 145" stroke="#fdfcf7" strokeWidth="2" opacity="0.8" fill="none" />
      <path d="M48 165 C75 152 105 152 132 165" stroke="#fdfcf7" strokeWidth="1.8" opacity="0.75" fill="none" />

      {/* Center Spine Cavity */}
      <ellipse cx="90" cy="110" rx="10" ry="18" fill="#fdfcf7" stroke="#c05621" strokeWidth="1.5" />
      <circle cx="90" cy="110" r="4" fill="#ddd8c4" />

      {/* Freshness Herbs sprig */}
      <g stroke="#325e28" strokeWidth="2" fill="#3f7530">
        <path d="M165 110 C185 95 195 80 200 60" fill="none" />
        <ellipse cx="180" cy="98" rx="7" ry="3" transform="rotate(-30 180 98)" />
        <ellipse cx="192" cy="85" rx="7" ry="3" transform="rotate(-40 192 85)" />
        <ellipse cx="198" cy="68" rx="6" ry="2.5" transform="rotate(-50 198 68)" />
      </g>
    </g>

    <text x="200" y="260" textAnchor="middle" fill="#8b3a1a" fontSize="11" fontFamily="DM Sans" fontWeight="600" letterSpacing="0.08em">
      CORTE GOURMET · 500G A 1.5 KG · PIGMENTO NATURAL
    </text>
  </svg>
);

/** Ilustración de Trucha Viva para Siembra y Estanques */
export const TroutLiveIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full object-contain p-4 ${className}`}
    aria-label="Ilustración de Trucha Viva en Estanque"
  >
    {/* Swirling clean mountain water */}
    <circle cx="200" cy="150" r="110" fill="#eef8e8" />
    <path
      d="M100 150 C120 110 180 110 200 150 C220 190 280 190 300 150"
      stroke="#94c97e"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.7"
      fill="none"
    />
    <path
      d="M110 170 C130 135 175 135 195 170 C215 205 260 205 285 170"
      stroke="#72c0d4"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
      fill="none"
    />

    {/* Oxygen Bubbles */}
    <circle cx="130" cy="95" r="5" fill="#fdfcf7" stroke="#208099" strokeWidth="1" />
    <circle cx="145" cy="85" r="3.5" fill="#fdfcf7" stroke="#208099" strokeWidth="0.8" />
    <circle cx="270" cy="115" r="6" fill="#fdfcf7" stroke="#208099" strokeWidth="1" />
    <circle cx="285" cy="105" r="4" fill="#fdfcf7" stroke="#208099" strokeWidth="0.8" />
    <circle cx="160" cy="205" r="4.5" fill="#fdfcf7" stroke="#208099" strokeWidth="1" />

    {/* Active Swimming Trout in Dynamic S-Curve */}
    <g transform="translate(70, 75) rotate(-10)">
      {/* Tail fin */}
      <path d="M25 70 L0 45 C10 65 10 80 0 95 L25 70 Z" fill="#24431e" stroke="#0f1c0d" strokeWidth="1.5" />
      {/* Sinuous Body */}
      <path
        d="M20 70 C60 45 120 40 180 55 C225 65 250 75 260 78 C250 86 215 98 175 98 C120 98 60 92 20 70 Z"
        fill="#325e28"
        stroke="#0f1c0d"
        strokeWidth="2"
      />
      {/* Lateral Stripe */}
      <path d="M45 70 C100 66 160 68 225 74" stroke="#c05621" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      {/* Fins */}
      <polygon points="120,47 135,28 145,47" fill="#24431e" stroke="#0f1c0d" strokeWidth="1" />
      {/* Eye */}
      <circle cx="245" cy="74" r="3.5" fill="#fdfcf7" stroke="#0f1c0d" strokeWidth="1" />
      <circle cx="246" cy="73.5" r="2" fill="#0f1c0d" />
    </g>

    <text x="200" y="260" textAnchor="middle" fill="#24431e" fontSize="11" fontFamily="DM Sans" fontWeight="600" letterSpacing="0.08em">
      SIEMBRA ACUÍCOLA · RESTAURANTES CON ESTANQUE
    </text>
  </svg>
);
