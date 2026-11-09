import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Truck } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';
import { WaterfallIllustration } from './illustrations/WaterfallIllustration';

export const HeroSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  return (
    <section className="relative min-h-screen bg-cream-50 overflow-hidden flex flex-col">

      {/* ── Decorative top-right blob ──────────────────── */}
      <div
        className="blob absolute -top-20 -right-20 w-[520px] h-[520px] bg-forest-50 opacity-70 pointer-events-none"
        aria-hidden
      />
      <div
        className="blob absolute top-32 right-10 w-[200px] h-[200px] bg-spring-50 opacity-80 pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col lg:flex-row items-center pt-28 pb-16 gap-12 lg:gap-0">

        {/* ── Left: Text ────────────────────────────────── */}
        <div className="flex-1 lg:pr-16">

          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-px bg-forest-500" />
            <span className="text-xs font-semibold text-forest-700 tracking-widest uppercase">
              Centro de Producción de Alto Volumen · Tatatila, Veracruz
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-forest-950 leading-[0.92] tracking-tight mb-8">
            Trucha fresca
            <br />
            <em className="text-spring-700 not-italic">de manantial.</em>
          </h1>

          {/* Supporting copy */}
          <p className="text-base sm:text-lg text-ink-600 leading-relaxed max-w-xl mb-10">
            Suministro constante todo el año para <strong className="text-forest-950 font-semibold">centrales de abasto, distribuidores, marisquerías y restaurantes</strong> en CDMX, Puebla y Veracruz. Crecida en agua limpia de cascada natural, sin sabor a lodo y con trato directo de granja.
          </p>

          {/* CTAs: Mayoreo como protagonista absoluto */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={`${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Rancho El Temazcal, me interesa solicitar una cotización de trucha por mayoreo / por tonelada para mi negocio o restaurante.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold bg-forest-700 hover:bg-forest-600 text-white transition-all duration-200 group shadow-md shadow-forest-900/20 active:scale-[0.99]"
            >
              <Truck className="w-4 h-4 text-forest-200" />
              <span>Cotizar Mayoreo por WhatsApp</span>
            </a>
            <a
              href={`${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Rancho El Temazcal, me gustaría apartar trucha fresca para la entrega del viernes en Xalapa.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-ink-600 border border-cream-300 hover:border-forest-500 hover:bg-forest-50 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-forest-600" />
              <span>Ruta semanal Xalapa (Menudeo)</span>
            </a>
          </div>

          {/* Quick stats: Enfoque mayorista */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: 'Toneladas', label: 'abasto continuo todo el año' },
              { value: '$160 / $180', label: 'precio base granja / kg' },
              { value: 'Directo', label: 'sin intermediarios de bodega' },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-cream-300 pl-4">
                <div className="font-display text-2xl sm:text-3xl text-forest-900">{s.value}</div>
                <div className="text-xs text-ink-400 mt-0.5 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Visual Photo / Illustration ─────────────────── */}
        <div className="flex-1 w-full lg:max-w-lg">
          <div className="relative">

            {/* Main image / illustration container */}
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-forest-100 border border-cream-300 relative shadow-sm">
              {!imgError ? (
                <img
                  src="/images/hero-cascada.jpg"
                  alt="Cascada natural y estanques de Rancho El Temazcal en Tatatila, Veracruz"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <WaterfallIllustration />
              )}
              {/* Warm color overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl border border-cream-200 shadow-lg px-5 py-4 max-w-[210px]">
              <div className="text-xs text-ink-400 mb-1">Capacidad Continua</div>
              <div className="font-display text-sm font-semibold text-forest-900">
                Suministro por Tonelada
              </div>
              <div className="text-xs text-spring-700 mt-0.5">Trato directo con el productor</div>
            </div>

            {/* Aviso operativo flotante */}
            <div className="absolute -top-4 -right-4 bg-forest-900 border border-forest-800 text-white rounded-xl px-4 py-3 shadow-md max-w-[210px]">
              <div className="text-[10px] font-semibold text-forest-300 uppercase tracking-wider mb-0.5">
                Rutas de Abasto
              </div>
              <div className="text-xs text-cream-100 leading-tight">
                La Nueva Viga (CDMX), Puebla, Xalapa y Veracruz
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────── */}
      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#el-agua"
          className="flex flex-col items-center gap-1.5 text-ink-300 hover:text-forest-600 transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Descubrir</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* ── Bottom rule ───────────────────────────────────── */}
      <div className="rule-cream" />
    </section>
  );
};
