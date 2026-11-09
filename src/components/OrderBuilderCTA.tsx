import React, { useState } from 'react';
import { Field, Input as HeadlessInput, Select as HeadlessSelect, Label, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MessageCircle, ShoppingBag, Truck, HelpCircle, ChevronDown, ChevronUp, Send, Calculator } from 'lucide-react';
import { FARM_INFO, PRODUCTS } from '../data/farmData';

const DIRECT_ACTIONS = [
  {
    id: 'mayoreo',
    badge: 'Prioridad · Mayoristas & Restaurantes',
    title: 'Cotizar por Mayoreo o Toneladas',
    detail: 'Suministro constante todo el año para restaurantes, pescaderías y distribuidores en CDMX (Nueva Viga), Puebla y Veracruz.',
    buttonText: 'Cotizar mayoreo por WhatsApp',
    color: 'border-2 border-forest-500 bg-white ring-2 ring-forest-200/50 shadow-md',
    btnBg: 'bg-forest-700 hover:bg-forest-600 text-white font-bold',
    icon: Truck,
    iconColor: 'text-forest-700 bg-forest-100',
    message: 'Hola Rancho El Temazcal, me interesa solicitar una cotización de trucha por mayoreo / por tonelada para mi negocio o restaurante.',
    isPrimary: true,
  },
  {
    id: 'viva',
    badge: 'Productores & Restaurantes con Estanque',
    title: 'Trucha Viva para Siembra',
    detail: 'Abastecimiento de ejemplares vivos aclimatados a agua fría para otros acuicultores o restaurantes con estanque propio.',
    buttonText: 'Consultar trucha viva',
    color: 'border border-spring-300 bg-spring-50/50 hover:bg-spring-50 hover:border-spring-500',
    btnBg: 'bg-spring-700 hover:bg-spring-600 text-white',
    icon: HelpCircle,
    iconColor: 'text-spring-700 bg-spring-100',
    message: 'Hola Rancho El Temazcal, me interesa consultar disponibilidad y cotización de trucha viva.',
    isPrimary: false,
  },
  {
    id: 'casa',
    badge: 'Ruta Semanal Local',
    title: 'Consumo Familiar (Xalapa)',
    detail: 'Ruta de entrega los viernes en Xalapa (a domicilio o punto de encuentro). Pedidos con corte los jueves a las 6:00 PM.',
    buttonText: 'Pedir para este viernes',
    color: 'border border-cream-300 bg-cream-50/70 hover:bg-cream-100',
    btnBg: 'bg-ink-800 hover:bg-ink-700 text-white',
    icon: ShoppingBag,
    iconColor: 'text-ink-600 bg-cream-200',
    message: 'Hola Rancho El Temazcal, me gustaría apartar trucha fresca para la entrega de este viernes en Xalapa.',
    isPrimary: false,
  },
];

export const OrderBuilderCTA: React.FC = () => {
  const [productId, setProductId] = useState('arcoiris-tradicional');
  const [kg, setKg] = useState(3);
  const [name, setName] = useState('');
  const [deliveryType, setDeliveryType] = useState<'domicilio' | 'centro'>('domicilio');

  const selectedProduct = PRODUCTS.find((p) => p.id === productId) ?? PRODUCTS[0];
  const estimate = selectedProduct.pricePerKg > 0 ? selectedProduct.pricePerKg * kg : 0;

  const buildCustomMessage = () => {
    const lines = [
      `Hola Rancho El Temazcal, quiero solicitar una cotización:`,
      ``,
      `• Producto: ${selectedProduct.name}`,
      `• Cantidad estimada: ~${kg} kg`,
      estimate > 0 ? `• Subtotal producto (pie de granja): $${estimate.toLocaleString('es-MX')} MXN` : '',
      `• Entrega: ${deliveryType === 'domicilio' ? 'A domicilio en Xalapa' : 'Punto céntrico en Xalapa'}`,
      `• Solicito confirmar costo de arrastre / flete para mi entrega.`,
      name.trim() ? `• A nombre de: ${name.trim()}` : '',
    ].filter(Boolean);
    return lines.join('\n');
  };

  const customWhatsAppUrl = `${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent(buildCustomMessage())}`;

  return (
    <section id="contacto" className="relative bg-cream-100 py-24 sm:py-32 border-t border-cream-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* ── Section Title ─────────────────────────────── */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-forest-400" />
            <span className="text-xs font-semibold text-forest-700 tracking-widest uppercase">
              Atención Comercial y Mayoreo Directo
            </span>
            <div className="w-8 h-px bg-forest-400" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-forest-950 leading-tight">
            Escríbenos en un solo clic por WhatsApp
          </h2>
          <p className="text-base text-ink-500 mt-4 leading-relaxed max-w-xl mx-auto">
            Atención prioritaria para restaurantes, marisquerías y distribuidores de volumen. Elige lo que necesitas y te respondemos de inmediato.
          </p>
        </div>

        {/* ── 3 Direct 1-Click Cards ────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {DIRECT_ACTIONS.map((action, idx) => {
            const Icon = action.icon;
            const targetUrl = `${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent(action.message)}`;

            return (
              <div
                key={action.id}
                className={`reveal rounded-2xl border ${action.color} p-7 flex flex-col justify-between transition-all duration-300 shadow-sm`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl ${action.iconColor} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-semibold text-ink-400 uppercase tracking-wider">
                      {action.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-forest-950 mb-2 leading-tight">
                    {action.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed mb-6">
                    {action.detail}
                  </p>
                </div>

                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm active:scale-[0.99] ${action.btnBg}`}
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>{action.buttonText}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* ── Optional Calculator with @headlessui/react Disclosure ── */}
        <div className="reveal rounded-2xl border border-cream-300 bg-white overflow-hidden shadow-sm">
          <Disclosure as="div">
            {({ open }) => (
              <>
                <DisclosureButton className="w-full flex items-center justify-between p-6 sm:p-7 text-left hover:bg-cream-50/50 transition-colors focus:outline-none cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-display text-xl text-forest-950 block">
                        ¿Ya sabes cuántos kilos quieres? (Opcional)
                      </span>
                      <span className="text-xs text-ink-400 block mt-0.5">
                        Calcula el costo estimado de tu pedido antes de enviar
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-forest-700">
                    <span className="hidden sm:inline">
                      {open ? 'Ocultar calculadora' : 'Abrir calculadora'}
                    </span>
                    {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </DisclosureButton>

                <DisclosurePanel
                  transition
                  className="p-6 sm:p-8 border-t border-cream-200 bg-cream-50/40 space-y-6 origin-top transition duration-200 ease-out data-[closed]:-translate-y-2 data-[closed]:opacity-0"
                >
                  {/* Product and kg row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field>
                      <Label className="block text-xs font-semibold text-ink-500 uppercase tracking-wider mb-2">
                        Tipo de Trucha:
                      </Label>
                      <HeadlessSelect
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        className="w-full bg-white border border-cream-300 text-ink-800 text-sm rounded-xl px-4 py-3 outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 cursor-pointer"
                      >
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} {p.pricePerKg > 0 ? `· $${p.pricePerKg}/kg` : ''}
                          </option>
                        ))}
                      </HeadlessSelect>
                    </Field>

                    <Field>
                      <Label className="block text-xs font-semibold text-ink-500 uppercase tracking-wider mb-2">
                        Kilos aproximados:
                      </Label>
                      <div className="flex items-center gap-3">
                        <HeadlessInput
                          type="number"
                          min={1}
                          max={50}
                          value={kg}
                          onChange={(e) => setKg(Math.max(1, Number(e.target.value)))}
                          className="w-full bg-white border border-cream-300 text-ink-800 text-sm rounded-xl px-4 py-3 outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 font-bold"
                        />
                        <span className="text-sm font-semibold text-ink-500">kg</span>
                      </div>
                    </Field>
                  </div>

                  {/* Delivery preference and customer name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <span className="block text-xs font-semibold text-ink-500 uppercase tracking-wider mb-2">
                        Forma de entrega en Xalapa:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setDeliveryType('domicilio')}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            deliveryType === 'domicilio'
                              ? 'border-forest-500 bg-forest-100/70 text-forest-900 font-bold'
                              : 'border-cream-300 bg-white text-ink-600'
                          }`}
                        >
                          A domicilio
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryType('centro')}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            deliveryType === 'centro'
                              ? 'border-forest-500 bg-forest-100/70 text-forest-900 font-bold'
                              : 'border-cream-300 bg-white text-ink-600'
                          }`}
                        >
                          Punto céntrico
                        </button>
                      </div>
                    </div>

                    <Field>
                      <Label className="block text-xs font-semibold text-ink-500 uppercase tracking-wider mb-2">
                        Tu nombre (opcional):
                      </Label>
                      <HeadlessInput
                        type="text"
                        placeholder="Ej. Familia Morales / Mariscos Don Pepe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-cream-300 text-ink-800 text-sm rounded-xl px-4 py-3 outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 placeholder:text-ink-400"
                      />
                    </Field>
                  </div>

                  {/* Estimate summary banner */}
                  {estimate > 0 && (
                    <div className="p-4 rounded-xl bg-forest-100/60 border border-forest-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-forest-900 font-medium">
                          Subtotal producto ({kg} kg de {selectedProduct.name}):
                        </span>
                        <span className="font-display text-2xl text-forest-950 font-bold">
                          ≈ ${estimate.toLocaleString('es-MX')} MXN
                        </span>
                      </div>
                      <p className="text-[11px] text-forest-800/80">
                        * Precio base pie de granja. El costo de arrastre / flete de entrega se confirma vía WhatsApp según la dirección de destino.
                      </p>
                    </div>
                  )}

                  {/* Send button with calculated message */}
                  <a
                    href={customWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-forest-700 hover:bg-forest-600 transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar este pedido por WhatsApp</span>
                  </a>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>

        {/* ── Official Phone Footer Note ────────────────── */}
        <div className="mt-8 text-center text-xs text-ink-400">
          Línea directa oficial de Rancho El Temazcal:{' '}
          <a
            href={`${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola, me gustaría información.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-700 font-semibold underline underline-offset-2 hover:text-forest-900"
          >
            {FARM_INFO.phoneDisplay}
          </a>{' '}
          · Atención personal de lunes a viernes.
        </div>

      </div>
    </section>
  );
};
