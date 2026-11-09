import React from 'react';
import { Clock, Calendar, AlertTriangle, MapPin, Package, Truck, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { LOGISTICS_RETAIL, LOGISTICS_WHOLESALE, FARM_INFO } from '../data/farmData';
import { RealDeliveryMap } from './RealDeliveryMap';

export const LogisticsSection: React.FC = () => {
  return (
    <section id="logistica" className="relative bg-cream-50 py-24 sm:py-32 border-t border-cream-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Heading ─────────────────────────────────────── */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-forest-500" />
            <span className="text-xs font-semibold text-forest-700 tracking-widest uppercase">
              Capacidad de Suministro y Despacho
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-950 leading-tight">
            Abasto directo de granja
            <br />
            <span className="text-ink-400">a tu negocio o cocina.</span>
          </h2>
          <p className="text-base text-ink-500 mt-4 leading-relaxed max-w-2xl">
            Nuestra infraestructura está diseñada para garantizar un flujo ininterrumpido por tonelada para bodegas y restaurantes, manteniendo también una ruta semanal programada para consumo familiar en Xalapa.
          </p>
        </div>

        {/* ── Two columns: Mayoreo PRIMERO y DESTACADO ──────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-stretch">

          {/* ── 1. Mayoreo y Restaurantes (PROTAGONISTA - 7 columnas) ── */}
          <div
            id="logistica-mayoreo"
            className="lg:col-span-7 reveal rounded-2xl border-2 border-forest-500 bg-white p-8 sm:p-10 flex flex-col justify-between shadow-md relative overflow-hidden"
          >
            {/* Top Priority Ribbon */}
            <div className="absolute top-0 right-0 bg-forest-700 text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-sm">
              Operación Principal · Alto Volumen
            </div>

            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-forest-100 text-forest-900 mb-3">
                  <Truck className="w-3.5 h-3.5 text-forest-700" />
                  Suministro Mayorista & Distribuidores
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-forest-950 leading-tight">
                  {LOGISTICS_WHOLESALE.title}
                </h3>
              </div>

              <p className="text-sm text-ink-600 leading-relaxed mb-6 font-medium">
                {LOGISTICS_WHOLESALE.subtitle}
              </p>

              {/* Regions with high visibility */}
              <div className="mb-6 bg-cream-50 p-4 rounded-xl border border-cream-200">
                <div className="flex items-center gap-2 text-xs text-forest-800 font-semibold uppercase tracking-wider mb-2.5">
                  <MapPin className="w-3.5 h-3.5 text-forest-600" />
                  Rutas y Destinos de Embarque Habituales:
                </div>
                <div className="flex flex-wrap gap-2">
                  {LOGISTICS_WHOLESALE.regions.map((r) => (
                    <span
                      key={r}
                      className="px-3 py-1.5 rounded-lg border border-forest-200 bg-white text-forest-950 text-xs font-semibold shadow-2xs"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Points */}
              <div className="space-y-3 mb-6">
                {LOGISTICS_WHOLESALE.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <span className="mt-2 w-3.5 h-px bg-forest-500 shrink-0 block" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Packaging & Freight note */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-forest-50/70 border border-forest-200">
                  <ShieldCheck className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                  <p className="text-xs text-forest-950 leading-relaxed">
                    <strong>Embalaje certificado para viaje largo:</strong> Pesaje exacto en rejas plásticas lavables y cajas térmicas selladas con hielo calibrado para mantener cadena de frío ininterrumpida.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-cream-100/70 border border-cream-300">
                  <Truck className="w-4 h-4 text-copper-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                  <p className="text-xs text-ink-700 leading-relaxed">
                    <strong className="text-forest-950">Condición de Arrastre / Flete:</strong> Los precios son base pie de granja en Tatatila, Ver. El costo de arrastre terrestre refrigerado se cotiza por separado según el volumen del pedido y la distancia al andén de descarga.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-cream-200">
              <a
                href={`${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Rancho El Temazcal, me interesa cotizar trucha por mayoreo / por tonelada para mi negocio o restaurante.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-white bg-forest-700 hover:bg-forest-600 transition-all duration-200 shadow-sm active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Cotizar Abasto por Mayoreo por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── 2. Retail / Menudeo Xalapa (COMPLEMENTARIO - 5 columnas) ── */}
          <div
            id="logistica-menudeo"
            className="lg:col-span-5 reveal rounded-2xl border border-cream-300 bg-cream-100/60 p-8 sm:p-10 flex flex-col justify-between"
            style={{ transitionDelay: '100ms' }}
          >
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cream-200 text-ink-700 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-ink-600" />
                  Ruta Local Semanal
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-forest-950 leading-tight">
                  {LOGISTICS_RETAIL.title}
                </h3>
              </div>

              <p className="text-sm text-ink-500 leading-relaxed mb-6">
                {LOGISTICS_RETAIL.subtitle}
              </p>

              {/* Timeline */}
              <div className="space-y-4 mb-6">
                {[
                  {
                    Icon: Clock,
                    color: 'text-copper-700',
                    bg: 'bg-copper-100',
                    label: 'Cierre de pedidos',
                    value: 'Jueves · 6:00 PM',
                    note: 'Corte semanal para entrar a la cosecha',
                  },
                  {
                    Icon: Calendar,
                    color: 'text-forest-700',
                    bg: 'bg-forest-100',
                    label: 'Día de entrega',
                    value: 'Viernes en la mañana',
                    note: 'Punto de encuentro céntrico o a domicilio',
                  },
                  {
                    Icon: Package,
                    color: 'text-spring-700',
                    bg: 'bg-spring-100',
                    label: 'Presentación',
                    value: 'Limpia y eviscerada',
                    note: 'Sellada al alto vacío o bolsa térmica',
                  },
                ].map((step) => (
                  <div key={step.label} className="flex gap-3.5 items-start bg-white p-3.5 rounded-xl border border-cream-200">
                    <div className={`mt-0.5 shrink-0 w-8 h-8 rounded-lg ${step.bg} flex items-center justify-center`}>
                      <step.Icon className={`w-4 h-4 ${step.color}`} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-[11px] text-ink-400 uppercase tracking-wider">{step.label}</div>
                      <div className="font-semibold text-forest-950 text-sm">{step.value}</div>
                      <div className="text-xs text-ink-400 mt-0.5">{step.note}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Aviso bioseguridad */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-copper-50 border border-copper-100 mb-6">
                <AlertTriangle className="w-4 h-4 text-copper-600 shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="text-xs text-copper-900/80 leading-relaxed">
                  <strong>Zona de bioseguridad:</strong> No contamos con venta al público ni visitas recreativas en el rancho de Tatatila. Todo se coordina por entregas programadas.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-cream-200">
              <a
                href={`${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Rancho El Temazcal, me gustaría apartar trucha fresca para la entrega del viernes en Xalapa.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-ink-800 bg-white border border-cream-300 hover:border-forest-500 hover:bg-forest-50 transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-forest-600" />
                <span>Apartar pedido para este viernes</span>
              </a>
            </div>
          </div>

        </div>

        {/* ── Real Geographic Delivery Area Map (Leaflet / Google Maps Style) ── */}
        <div className="mb-12 reveal">
          <RealDeliveryMap />
        </div>

        {/* ── Bottom strip ────────────────────────────────── */}
        <div className="reveal rounded-2xl border border-cream-200 bg-forest-900 px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5 text-white">
          <div>
            <div className="text-xs font-semibold text-forest-300 uppercase tracking-widest mb-1">
              Trato Directo con el Productor
            </div>
            <h4 className="font-display text-xl sm:text-2xl text-white">
              Suministro continuo todo el año. Sin intermediarios de bodega.
            </h4>
          </div>
          <a
            href={`${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Rancho El Temazcal, me interesa solicitar una cotización por mayoreo / por tonelada.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-semibold text-forest-200 hover:text-white border-b border-forest-600 hover:border-forest-200 pb-0.5 transition-colors whitespace-nowrap"
          >
            Cotizaciones: {FARM_INFO.phoneDisplay} →
          </a>
        </div>
      </div>
    </section>
  );
};
