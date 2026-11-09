import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Criadero de alto volumen',
    body: 'Estanques en desnivel alimentados por la cascada de Tatatila con flujo perpetuo. Agua gélida y oxigenada que permite mantener abasto constante todo el año.',
    tag: 'Cascada natural · Tatatila',
  },
  {
    num: '02',
    title: 'Cosecha y pesaje calibrado',
    body: 'Cosechamos sobre pedido directo. Pesado exacto en rejas plásticas de grado alimenticio para compradores mayoristas y cajas térmicas selladas.',
    tag: 'Pesaje exacto · Sin mermas',
  },
  {
    num: '03',
    title: 'Procesado higiénico primario',
    body: 'Ejemplares limpios, eviscerados y empacados en sellado térmico o alto vacío. Conservación óptima de frescura sin conservadores ni químicos.',
    tag: 'Inocuidad garantizada',
  },
  {
    num: '04',
    title: 'Despacho mayorista y regional',
    body: 'Rutas activas hacia La Nueva Viga (CDMX), Puebla y Veracruz, complementadas con ruta programada de entregas los viernes en Xalapa.',
    tag: 'Cadena de frío continua',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="bg-cream-50 py-24 sm:py-32 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="max-w-2xl mb-16 reveal">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-spring-500" />
            <span className="text-xs font-semibold text-spring-700 tracking-widest uppercase">
              Del agua a tu mesa
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-950 leading-tight">
            Cuatro pasos.
            <br />
            <span className="text-ink-400">Cero compromiso.</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Number */}
              <div className="w-12 h-12 rounded-full border border-cream-300 flex items-center justify-center text-xs font-semibold text-ink-400 mb-6">
                {s.num}
              </div>

              {/* Connector line (only on desktop, between items) */}
              <div className="relative mb-6">
                <div className="h-px bg-cream-300 w-full" />
              </div>

              <h3 className="font-display text-xl text-forest-900 mb-2">{s.title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed mb-4">{s.body}</p>
              <span className="inline-block text-xs font-medium text-spring-700 bg-spring-50 border border-spring-200 px-2.5 py-1 rounded-full">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
