import React, { useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS, FARM_INFO, Product } from '../data/farmData';
import {
  TroutRainbowIllustration,
  TroutSalmonIllustration,
  TroutLiveIllustration,
} from './illustrations/ProductIllustrations';

const PRODUCT_STYLE = {
  'arcoiris-tradicional': {
    bg: 'bg-spring-50',
    border: 'border-spring-200',
    badgeBg: 'bg-spring-100 text-spring-800 border-spring-200',
    cta: 'bg-forest-700 hover:bg-forest-600 text-white',
    photoTint: 'bg-spring-100',
  },
  'arcoiris-salmonada': {
    bg: 'bg-copper-50',
    border: 'border-copper-200',
    badgeBg: 'bg-copper-100 text-copper-800 border-copper-200',
    cta: 'bg-copper-600 hover:bg-copper-500 text-white',
    photoTint: 'bg-copper-100',
  },
  'trucha-viva': {
    bg: 'bg-forest-50',
    border: 'border-forest-200',
    badgeBg: 'bg-forest-100 text-forest-800 border-forest-200',
    cta: 'bg-forest-800 hover:bg-forest-700 text-white',
    photoTint: 'bg-forest-100',
  },
} as const;

type ProductId = keyof typeof PRODUCT_STYLE;

const ProductCardImage: React.FC<{ product: Product; style: (typeof PRODUCT_STYLE)[ProductId] }> = ({
  product,
  style,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`${style.photoTint} aspect-[4/3] relative border-b ${style.border} overflow-hidden`}>
      {product.image && !imgError ? (
        <img
          src={product.image}
          alt={product.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          {product.id === 'arcoiris-tradicional' && <TroutRainbowIllustration />}
          {product.id === 'arcoiris-salmonada' && <TroutSalmonIllustration />}
          {product.id === 'trucha-viva' && <TroutLiveIllustration />}
        </>
      )}

      {/* Badge */}
      {product.badge && (
        <div
          className={`absolute top-4 left-4 px-2.5 py-1 rounded-full border text-[10px] font-semibold tracking-wider uppercase shadow-sm ${style.badgeBg}`}
        >
          {product.badge}
        </div>
      )}
    </div>
  );
};

export const ProductCatalog: React.FC = () => {
  return (
    <section id="productos" className="relative bg-cream-100 py-24 sm:py-32 border-t border-cream-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section heading ────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-copper-500" />
              <span className="text-xs font-semibold text-copper-700 tracking-widest uppercase">
                Catálogo & Precios de Granja
              </span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-950 leading-tight">
              Tres productos.
              <br />
              <span className="text-ink-400">Un solo origen.</span>
            </h2>
          </div>
          <p className="text-sm text-ink-500 max-w-sm leading-relaxed md:text-right">
            Precios base pie de granja en Tatatila. El arrastre / flete refrigerado se cotiza por separado según volumen y destino.
          </p>
        </div>

        {/* ── Product cards ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-14">
          {PRODUCTS.map((product, idx) => {
            const style = PRODUCT_STYLE[product.id as ProductId] ?? PRODUCT_STYLE['arcoiris-tradicional'];

            return (
              <article
                key={product.id}
                className={`reveal card-lift flex flex-col rounded-2xl border ${style.border} ${style.bg} overflow-hidden`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Product Image / Illustration Fallback */}
                <ProductCardImage product={product} style={style} />

                {/* Content */}
                <div className="flex flex-col flex-1 p-7 gap-5">

                  {/* Name & weight */}
                  <div>
                    <h3 className="font-display text-2xl text-forest-950 leading-tight mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-ink-400 tracking-wide">{product.weightRange}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-ink-600 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* Price row */}
                  <div className="pt-4 border-t border-black/8 space-y-1">
                    <div className="flex items-baseline justify-between">
                      {product.pricePerKg > 0 ? (
                        <>
                          <div className="flex items-baseline gap-1">
                            <span className="font-display text-4xl text-forest-900">
                              ${product.pricePerKg}
                            </span>
                            <span className="text-xs text-ink-400">MXN / kg</span>
                          </div>
                          <span className="text-[11px] font-semibold text-forest-800 bg-forest-100/70 border border-forest-200 px-2 py-0.5 rounded">
                            Pie de granja
                          </span>
                        </>
                      ) : (
                        <div className="text-sm font-semibold text-spring-700">
                          Cotización por lote →
                        </div>
                      )}
                    </div>
                    {product.pricePerKg > 0 && (
                      <p className="text-[11px] text-ink-500 leading-tight">
                        + Costo de arrastre / flete refrigerado según destino
                      </p>
                    )}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {product.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-ink-500">
                        <span className="mt-2 w-3 h-px bg-ink-300 shrink-0 block" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA 1 clic a WhatsApp */}
                  <a
                    href={`${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`Hola Rancho El Temazcal, me interesa consultar sobre: ${product.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-between px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 group active:scale-[0.99] ${style.cta}`}
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      Pedir por WhatsApp
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Packaging note ─────────────────────────────── */}
        <div className="reveal rounded-2xl border border-cream-300 bg-white p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-7">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl text-forest-900 mb-2">
              Lista para refrigerar o cocinar.
            </h3>
            <p className="text-sm text-ink-500 leading-relaxed">
              Toda la trucha se entrega eviscerada, lavada y sellada al alto vacío o en bolsa térmica con cadena de frío garantizada.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            {['Eviscerada', 'Alto vacío', 'Cadena de frío', 'Sin conservadores'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-cream-100 text-ink-600 border border-cream-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
