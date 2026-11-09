import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

const NAV_LINKS = [
  { label: 'El Agua',             href: '#el-agua' },
  { label: 'Abasto & Mayoreo',    href: '#logistica' },
  { label: 'Catálogo & Precios',  href: '#productos' },
  { label: 'Contacto Directo',    href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/97 backdrop-blur-md border-b border-cream-200 py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* ── Brand ──────────────────────────────────────────── */}
        <a href="#" className="flex flex-col leading-none group">
          <span className="font-display text-xl font-semibold text-forest-900 tracking-wide group-hover:text-forest-700 transition-colors">
            Rancho El Temazcal
          </span>
          <span className="text-[11px] text-ink-400 tracking-[0.14em] uppercase mt-0.5">
            Tatatila · Veracruz
          </span>
        </a>

        {/* ── Desktop nav ────────────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-600 hover:text-forest-800 transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* ── CTA ────────────────────────────────────────────── */}
        <a
          href={`${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Rancho El Temazcal, me interesa solicitar una cotización por mayoreo / por tonelada para mi negocio o restaurante.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-forest-700 hover:bg-forest-600 text-white transition-colors duration-200 shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          Cotizar Mayoreo
        </a>

        {/* ── Mobile menu button ─────────────────────────────── */}
        <button
          className="lg:hidden p-2 rounded-lg text-ink-600 hover:text-forest-800 hover:bg-cream-100 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menú"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile menu ────────────────────────────────────────── */}
      {menuOpen && (
        <div className="lg:hidden bg-cream-50 border-t border-cream-200 px-6 py-6 space-y-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-base text-ink-700 font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Rancho El Temazcal, me interesa solicitar una cotización por mayoreo / por tonelada para mi negocio o restaurante.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-forest-700 text-white"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            Cotizar Mayoreo
          </a>
        </div>
      )}
    </header>
  );
};
