import React, { useState } from 'react';
import { Droplets, Wind, ShieldCheck, Check, X } from 'lucide-react';

const PILLARS = [
  {
    Icon: Droplets,
    title: 'Sin sabor a tierra',
    body: 'El agua estancada acumula geosmina, el compuesto que arruina el sabor de la mayoría del pescado de agua dulce. En Tatatila, el flujo continuo de cascada lo elimina de forma natural, siempre.',
  },
  {
    Icon: Wind,
    title: 'Músculo de corriente',
    body: 'Nadar contra la corriente de un caudal vivo desarrolla una carne firme, densa y bien veteada. El resultado es una textura que el pescado de estanque quieto nunca puede igualar.',
  },
  {
    Icon: ShieldCheck,
    title: 'Inocuidad sin química',
    body: 'El aislamiento serrano y el agua virgen de manantial preservan la bioseguridad del criadero de forma pasiva. Sin bactericidas, sin desinfectantes, sin sabores residuales.',
  },
];

export const WaterDifference: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);
  return (
    <section id="el-agua" className="relative bg-cream-50 py-24 sm:py-32 overflow-hidden">

      {/* Background tint band */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-spring-50/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Heading ─────────────────────────────────────── */}
        <div className="max-w-2xl mb-16 reveal">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-spring-500" />
            <span className="text-xs font-semibold text-spring-700 tracking-widest uppercase">
              Por qué el agua importa
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-950 leading-tight">
            El secreto está
            <br />
            <em className="not-italic text-spring-700">en la cascada.</em>
          </h2>
          <p className="mt-5 text-base text-ink-500 max-w-xl leading-relaxed">
            La diferencia entre trucha excepcional y trucha común no está en la especie ni en el alimento. Está en el agua. Aquí tenemos la mejor.
          </p>
        </div>

        {/* ── Two-column layout: pillars + comparison ──── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: 3 Pillars */}
          <div className="lg:col-span-5 space-y-10">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="reveal flex gap-5"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="shrink-0 mt-1 w-10 h-10 rounded-full bg-spring-100 flex items-center justify-center">
                  <p.Icon className="w-4.5 h-4.5 text-spring-700" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-forest-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Comparison card */}
          <div className="lg:col-span-7 reveal">
            <div className="rounded-2xl border border-cream-300 bg-white shadow-sm overflow-hidden">

              {/* Photo or Graphic container */}
              <div className="aspect-[16/9] bg-spring-50 border-b border-cream-200 overflow-hidden relative">
                {!photoError ? (
                  <img
                    src="/images/agua-cascada.jpg"
                    alt="Flujo continuo de cascada natural en Tatatila"
                    onError={() => setPhotoError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-spring-50 to-forest-50 p-6">
                    <div className="text-center space-y-2 opacity-60">
                      <div className="w-10 h-px bg-spring-500 mx-auto" />
                      <span className="text-xs text-spring-800 tracking-widest uppercase font-medium block">
                        Agua de Cascada Natural · Tatatila, Veracruz
                      </span>
                      <span className="text-[11px] text-ink-400 block">
                        Flujo continuo no estancado · Cero geosmina
                      </span>
                      <div className="w-10 h-px bg-spring-500 mx-auto" />
                    </div>
                  </div>
                )}
              </div>

              {/* Comparison table */}
              <div className="p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-cream-200">
                  <h4 className="font-display text-xl text-forest-950 font-bold">
                    Estanque convencional vs. Cascada de Tatatila
                  </h4>
                  <span className="text-[11px] font-semibold text-forest-800 bg-forest-50 border border-forest-200 px-2.5 py-1 rounded-full w-fit">
                    Calidad de Origen
                  </span>
                </div>

                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-cream-200 text-xs uppercase tracking-wider">
                        <th className="py-2.5 px-3 font-semibold text-ink-400 w-[24%]">
                          Aspecto
                        </th>
                        <th className="py-2.5 px-3 font-semibold text-amber-950/80 bg-cream-100/60 rounded-t-lg w-[38%]">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                            Estanque Tradicional
                          </span>
                        </th>
                        <th className="py-2.5 px-3 font-semibold text-forest-950 bg-forest-100/60 rounded-t-lg w-[38%]">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-forest-600 shrink-0" />
                            Cascada de Tatatila
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-cream-100 text-xs sm:text-sm">
                      {[
                        {
                          topic: 'Sabor del agua',
                          bad: 'Acumula geosmina → sabor a lodo',
                          good: 'Flujo continuo → agua siempre fresca',
                        },
                        {
                          topic: 'Oxigenación',
                          bad: 'Baja → carne blanda y sin tono',
                          good: 'Turbulencia natural → máxima oxigenación',
                        },
                        {
                          topic: 'Sanidad',
                          bad: 'Requiere bactericidas y algicidas',
                          good: 'Inocuidad pasiva por entorno virgen',
                        },
                        {
                          topic: 'Textura',
                          bad: 'Músculo inactivo, pez sedentario',
                          good: 'Nado contra corriente continua',
                        },
                      ].map((row) => (
                        <tr key={row.topic} className="hover:bg-cream-50/50 transition-colors">
                          <td className="py-3.5 px-3 font-semibold text-ink-500 text-xs uppercase tracking-wider align-middle">
                            {row.topic}
                          </td>
                          <td className="py-3.5 px-3 text-ink-600 bg-cream-50/40 align-middle">
                            <div className="flex items-center gap-2">
                              <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                                <X className="w-2.5 h-2.5" strokeWidth={3} />
                              </span>
                              <span>{row.bad}</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-3 text-forest-900 font-medium bg-forest-50/40 align-middle">
                            <div className="flex items-center gap-2">
                              <span className="w-4 h-4 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5" strokeWidth={3} />
                              </span>
                              <span>{row.good}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
