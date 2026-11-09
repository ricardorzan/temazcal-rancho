import React from 'react';

/**
 * Ilustración vectorial botánica / artesanal de la cascada de Tatatila
 * Estilo linograbado / tinta fina en tonos verdes y azules de manantial.
 */
export const WaterfallIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 600 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full object-cover ${className}`}
      aria-label="Ilustración artesanal de la cascada de Tatatila y estanques de trucha"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e9f6fa" />
          <stop offset="60%" stopColor="#d6efca" />
          <stop offset="100%" stopColor="#ece8d8" />
        </linearGradient>

        <linearGradient id="waterFlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#72c0d4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#208099" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#165c6e" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="mountainBack" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3f7530" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#192e15" stopOpacity="0.65" />
        </linearGradient>

        <linearGradient id="mountainFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#24431e" />
          <stop offset="100%" stopColor="#0f1c0d" />
        </linearGradient>

        <pattern id="fineGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.75" fill="#325e28" fillOpacity="0.12" />
        </pattern>
      </defs>

      {/* Sky / Mist Background */}
      <rect width="600" height="700" fill="url(#skyGrad)" />
      <rect width="600" height="700" fill="url(#fineGrid)" />

      {/* Sun / Mist Circle behind mountain */}
      <circle cx="420" cy="180" r="110" fill="#fbe8db" fillOpacity="0.6" />

      {/* Distant Mountains (Sierra de Tatatila) */}
      <path
        d="M-50 280 L140 160 L320 250 L480 140 L650 260 L650 700 L-50 700 Z"
        fill="url(#mountainBack)"
      />

      {/* Midground Mountain Ridge */}
      <path
        d="M-20 340 L160 220 L270 290 L410 190 L580 330 L620 700 L-20 700 Z"
        fill="#325e28"
        fillOpacity="0.5"
      />

      {/* Pine Trees Silhouettes on ridge */}
      <g fill="#192e15" opacity="0.6">
        <polygon points="120,210 115,225 125,225" />
        <polygon points="127,205 121,223 133,223" />
        <polygon points="135,212 130,226 140,226" />
        <polygon points="260,270 254,288 266,288" />
        <polygon points="272,265 265,286 279,286" />
        <polygon points="400,180 394,198 406,198" />
        <polygon points="409,175 402,196 416,196" />
      </g>

      {/* Rocky Cliff gorge where waterfall cuts through */}
      <path
        d="M180 280 L250 320 L240 540 L150 620 L-20 620 L-20 400 Z"
        fill="url(#mountainFront)"
      />
      <path
        d="M340 300 L440 340 L620 380 L620 700 L380 700 L320 540 Z"
        fill="url(#mountainFront)"
      />

      {/* Waterfall streams */}
      <path
        d="M260 290 C255 350 245 420 235 500 C230 540 225 580 220 620 L310 620 C305 580 300 530 295 480 C290 410 285 340 280 290 Z"
        fill="url(#waterFlow)"
      />

      {/* White water froth & flow lines */}
      <path
        d="M268 310 C265 370 255 450 248 530 L253 530 C260 450 270 370 273 310 Z"
        fill="#ffffff"
        opacity="0.8"
      />
      <path
        d="M278 305 C275 365 268 440 262 520 L266 520 C272 440 279 365 282 305 Z"
        fill="#ffffff"
        opacity="0.9"
      />
      <path
        d="M285 320 C282 390 276 470 272 550 L275 550 C279 470 285 390 288 320 Z"
        fill="#ffffff"
        opacity="0.7"
      />

      {/* Mist Spray at Base of Waterfall */}
      <ellipse cx="270" cy="530" rx="90" ry="25" fill="#e9f6fa" opacity="0.65" />
      <ellipse cx="270" cy="535" rx="70" ry="18" fill="#ffffff" opacity="0.5" />

      {/* Lower Aquaculture Pond (Estanque de truchas) */}
      <path
        d="M-20 600 C80 580 220 570 360 575 C480 580 560 595 620 610 L620 700 L-20 700 Z"
        fill="#165c6e"
      />

      {/* Ripples on pond water */}
      <ellipse cx="270" cy="610" rx="130" ry="12" stroke="#72c0d4" strokeWidth="1.5" opacity="0.6" fill="none" />
      <ellipse cx="270" cy="625" rx="190" ry="16" stroke="#72c0d4" strokeWidth="1.5" opacity="0.4" fill="none" />
      <ellipse cx="270" cy="645" rx="260" ry="20" stroke="#72c0d4" strokeWidth="1" opacity="0.3" fill="none" />

      {/* Stylized Trout jumping / swimming */}
      <g transform="translate(340, 580) rotate(-18) scale(0.7)">
        {/* Trout Body */}
        <path
          d="M0 20 C25 5 70 8 110 20 C85 32 30 35 0 20 Z"
          fill="#3f7530"
          stroke="#0f1c0d"
          strokeWidth="1.5"
        />
        {/* Rainbow Lateral Stripe */}
        <path
          d="M15 20 C40 17 80 17 105 20"
          stroke="#c05621"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Tail Fin */}
        <polygon points="0,20 -18,10 -12,20 -18,30" fill="#325e28" stroke="#0f1c0d" strokeWidth="1" />
        {/* Dorsal Fin */}
        <polygon points="55,9 65,0 75,8" fill="#325e28" stroke="#0f1c0d" strokeWidth="1" />
        {/* Eye */}
        <circle cx="98" cy="18" r="2" fill="#0f1c0d" />
      </g>

      {/* Foreground Foliage / Ferns of Tatatila */}
      <g stroke="#0f1c0d" strokeWidth="1.5" fill="#24431e">
        {/* Left Fern */}
        <path d="M-10 700 C15 640 40 610 80 580" fill="none" stroke="#192e15" strokeWidth="2.5" />
        <ellipse cx="30" cy="630" rx="12" ry="5" transform="rotate(-30 30 630)" fill="#325e28" />
        <ellipse cx="50" cy="610" rx="12" ry="5" transform="rotate(-20 50 610)" fill="#3f7530" />
        <ellipse cx="70" cy="590" rx="10" ry="4" transform="rotate(-10 70 590)" fill="#4f9039" />

        {/* Right Fern */}
        <path d="M610 700 C580 640 550 610 510 590" fill="none" stroke="#192e15" strokeWidth="2.5" />
        <ellipse cx="570" cy="630" rx="12" ry="5" transform="rotate(30 570 630)" fill="#325e28" />
        <ellipse cx="545" cy="615" rx="12" ry="5" transform="rotate(20 545 615)" fill="#3f7530" />
        <ellipse cx="525" cy="600" rx="10" ry="4" transform="rotate(10 525 600)" fill="#4f9039" />
      </g>

      {/* Subtle border in ink */}
      <rect x="12" y="12" width="576" height="676" rx="12" stroke="#325e28" strokeWidth="1" strokeOpacity="0.25" fill="none" />
    </svg>
  );
};
