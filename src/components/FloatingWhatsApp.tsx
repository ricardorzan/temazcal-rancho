import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

const QUICK_OPTIONS = [
  {
    label: 'Cotizar mayoreo o toneladas (Restaurantes)',
    text: 'Hola Rancho El Temazcal, me interesa solicitar cotización de trucha por mayoreo / por tonelada para mi negocio.',
  },
  {
    label: 'Trucha viva para estanques / siembra',
    text: 'Hola Rancho El Temazcal, me interesa consultar disponibilidad y cotización de trucha viva.',
  },
  {
    label: 'Consumo familiar (Ruta Xalapa)',
    text: 'Hola Rancho El Temazcal, quiero apartar mi pedido de trucha para la ruta del viernes en Xalapa.',
  },
];

export const FloatingWhatsApp: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Quick options panel */}
      {open && (
        <div className="w-72 rounded-2xl border border-cream-200 bg-white shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-cream-100">
            <div>
              <span className="text-sm font-semibold text-forest-900 block font-display">
                Rancho El Temazcal
              </span>
              <span className="text-xs text-forest-600 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-500 inline-block" />
                Responde por WhatsApp
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg text-ink-400 hover:text-ink-700 hover:bg-cream-100 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-3 space-y-1">
            {QUICK_OPTIONS.map((opt) => (
              <a
                key={opt.label}
                href={`${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent(opt.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 w-full text-left px-3 py-2.5 rounded-xl text-sm text-ink-600 hover:text-forest-900 hover:bg-cream-50 transition-colors group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cream-300 group-hover:bg-forest-500 shrink-0 transition-colors" />
                {opt.label}
              </a>
            ))}
          </div>

          <div className="px-4 pb-3 pt-1 text-xs text-ink-300">
            {FARM_INFO.phoneDisplay}
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contactar por WhatsApp"
        className={`wa-pulse relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
          open
            ? 'bg-ink-600 scale-95'
            : 'bg-forest-700 hover:bg-forest-600 hover:scale-105'
        }`}
      >
        {open
          ? <X className="w-5 h-5 text-white" />
          : (
            <>
              <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.75} />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-copper-500 border-2 border-white" />
            </>
          )
        }
      </button>
    </div>
  );
};
