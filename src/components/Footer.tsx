import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { FARM_INFO, PRODUCTS } from '../data/farmData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 text-cream-100">

      {/* Top rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-forest-700 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14 pb-14 border-b border-forest-800">

          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <span className="font-display text-2xl text-cream-50 block">
                {FARM_INFO.name}
              </span>
              <span className="text-xs text-forest-400 tracking-widest uppercase mt-0.5 block">
                {FARM_INFO.tagline}
              </span>
            </div>

            <p className="text-sm text-forest-300 leading-relaxed max-w-sm">
              Centro acuícola de alto volumen en la sierra de Tatatila. Trucha arcoíris criada en agua gélida de cascada natural, disponible todo el año.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-sm text-forest-300">
                <MapPin className="w-4 h-4 text-forest-500 shrink-0" strokeWidth={1.75} />
                <span>Zona montañosa de Tatatila, Veracruz, México</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageCircle className="w-4 h-4 text-forest-500 shrink-0" strokeWidth={1.75} />
                <a
                  href={`${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola, me gustaría información sobre Rancho El Temazcal.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-200 hover:text-cream-50 transition-colors"
                >
                  {FARM_INFO.phoneDisplay} · WhatsApp oficial
                </a>
              </div>
            </div>
          </div>

          {/* Price list */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-forest-500 uppercase tracking-wider">
              Precios Pie de Granja
            </h4>
            <ul className="space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.id} className="flex items-center justify-between text-sm border-b border-forest-900 pb-2.5 last:border-0">
                  <span className="text-forest-300 leading-tight">{p.name.split('(')[0].trim()}</span>
                  <span className="font-semibold text-cream-100 shrink-0 ml-3">
                    {p.pricePerKg > 0 ? `$${p.pricePerKg}/kg` : 'Cotizar'}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-forest-400 leading-tight">
              * Precios base en Tatatila. Arrastre / flete refrigerado a cotizar según destino.
            </p>
          </div>

          {/* Operational notice */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-forest-500 uppercase tracking-wider">
              Aviso Operativo
            </h4>
            <div className="rounded-xl bg-forest-900 border border-forest-800 p-5 text-sm text-forest-300 leading-relaxed space-y-3">
              <p>
                Rancho El Temazcal opera exclusivamente por <strong className="text-forest-100">entregas programadas y abasto mayorista</strong>.
              </p>
              <p>
                Por protocolos de bioseguridad, el predio no cuenta con acceso turístico ni venta directa en rancho.
              </p>
              <p className="text-forest-500 text-xs">
                Cierre de pedidos menudeo:{' '}
                <strong className="text-forest-300">Jueves 6:00 PM</strong>
                {' '}· Entrega Xalapa:{' '}
                <strong className="text-forest-300">Viernes</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-forest-600">
          <span>© {new Date().getFullYear()} {FARM_INFO.name} · Tatatila, Veracruz, México</span>
          <span>Trucha de manantial · Alta montaña</span>
        </div>

      </div>
    </footer>
  );
};
