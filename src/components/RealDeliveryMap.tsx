import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Truck, Clock, ShieldCheck, RotateCcw } from 'lucide-react';
import { FARM_INFO } from '../data/farmData';

// Configuración de Carto Basemaps
// Carto Basemaps API key de https://carto.com/basemaps/apikey/ usa el parámetro "?key="
const CARTO_API_KEY = import.meta.env.VITE_CARTO_API_KEY?.trim() || '';
const CARTO_TILE_URL = CARTO_API_KEY
  ? `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=${CARTO_API_KEY}`
  : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png';

// Coordenadas geográficas reales
const TATATILA_COORDS: [number, number] = [19.6967, -97.1147];
const CDMX_COORDS: [number, number] = [19.3739, -99.1026];
const PUEBLA_COORDS: [number, number] = [19.0414, -98.2063];
const XALAPA_COORDS: [number, number] = [19.5438, -96.9102];
const VERACRUZ_COORDS: [number, number] = [19.1738, -96.1342];

// Componente para re-centrar el mapa suavemente
const MapRecenter: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  React.useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.2 });
  }, [center, zoom, map]);
  return null;
};

// Pines estilizados con DivIcon (evita problemas de assets rotos de Leaflet)
const createCustomPin = (color: string, label: string) =>
  L.divIcon({
    className: 'custom-map-pin',
    html: `
      <div style="display:flex; flex-direction:column; align-items:center; transform: translate(-50%, -100%);">
        <div style="background-color:${color}; color:white; padding:3px 8px; border-radius:12px; font-size:11px; font-weight:bold; white-space:nowrap; box-shadow:0 4px 10px rgba(0,0,0,0.25); border:1.5px solid white;">
          ${label}
        </div>
        <div style="width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-top:8px solid ${color};"></div>
      </div>
    `,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });

const pinTatatila = createCustomPin('#0f1c0d', '📍 Rancho El Temazcal (Origen)');
const pinCDMX = createCustomPin('#c05621', 'CDMX · La Nueva Viga');
const pinPuebla = createCustomPin('#165c6e', 'Puebla Capital');
const pinXalapa = createCustomPin('#325e28', 'Xalapa');
const pinVeracruz = createCustomPin('#165c6e', 'Veracruz Puerto');

interface DeliveryZone {
  id: string;
  name: string;
  scope: string;
  time: string;
  radiusKm: number;
  type: 'Local' | 'Mayoreo Regional' | 'Gran Mayoreo Nacional';
  targetCenter: [number, number];
  targetZoom: number;
  badgeBg: string;
  badgeText: string;
  colorBorder: string;
  colorFill: string;
  description: string;
}

const ZONES: DeliveryZone[] = [
  {
    id: 'nacional',
    name: 'Gran Mayoreo: CDMX y La Nueva Viga',
    scope: 'La Nueva Viga (Iztapalapa), Central de Abasto y Cadenas CDMX/EdoMex',
    time: '3.5 a 4.5 horas',
    radiusKm: 240,
    type: 'Gran Mayoreo Nacional',
    targetCenter: [19.45, -98.1],
    targetZoom: 8,
    badgeBg: 'bg-copper-100 border-copper-300',
    badgeText: 'text-copper-900',
    colorBorder: '#c05621',
    colorFill: '#fbe8db',
    description: 'Envíos de alto volumen por tonelada en cajas térmicas selladas con hielo. Cosecha nocturna en Tatatila para arribo de madrugada directo a andén de descarga.',
  },
  {
    id: 'regional',
    name: 'Corredor Regional de Mayoreo',
    scope: 'Puebla, Tlaxcala, Veracruz Puerto (Boca del Río) y Córdoba-Orizaba',
    time: '1.5 a 3 horas',
    radiusKm: 140,
    type: 'Mayoreo Regional',
    targetCenter: [19.3, -97.3],
    targetZoom: 8,
    badgeBg: 'bg-spring-100 border-spring-300',
    badgeText: 'text-spring-900',
    colorBorder: '#165c6e',
    colorFill: '#c8eaf2',
    description: 'Abasto regular a restaurantes de mariscos, comedores y distribuidores locales. Pesaje exacto en rejas plásticas calibradas.',
  },
  {
    id: 'local',
    name: 'Ruta Semanal Local',
    scope: 'Xalapa, Coatepec, Banderilla y zona conurbada',
    time: '1 hora',
    radiusKm: 45,
    type: 'Local',
    targetCenter: [19.6, -97.0],
    targetZoom: 10,
    badgeBg: 'bg-forest-100 border-forest-300',
    badgeText: 'text-forest-900',
    colorBorder: '#325e28',
    colorFill: '#d6efca',
    description: 'Ruta semanal fija los viernes para familias locales. Pedidos con corte los jueves a las 6:00 PM para entrega a domicilio o punto céntrico.',
  },
];

export const RealDeliveryMap: React.FC = () => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('nacional');
  const [mapCenter, setMapCenter] = useState<[number, number]>([19.45, -97.5]);
  const [mapZoom, setMapZoom] = useState<number>(8);

  const handleSelectZone = (zone: DeliveryZone) => {
    setSelectedZoneId(zone.id);
    setMapCenter(zone.targetCenter);
    setMapZoom(zone.targetZoom);
  };

  const handleResetView = () => {
    setMapCenter([19.45, -97.5]);
    setMapZoom(8);
  };

  return (
    <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-10 shadow-sm overflow-hidden">
      
      {/* ── Encabezado ────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-8 border-b border-cream-200">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-forest-100 text-forest-800 mb-3 border border-forest-200">
            <MapPin className="w-3.5 h-3.5 text-forest-600" />
            Mapa Interactivo de Rutas y Cobertura
          </div>
          <h3 className="font-display text-3xl sm:text-4xl text-forest-950 leading-tight">
            Áreas de Entrega con Epicentro en Tatatila
          </h3>
          <p className="text-sm text-ink-500 mt-2 leading-relaxed">
            Explora las ciudades y carreteras reales conectadas con nuestra granja de manantial. Haz zoom, arrastra el mapa o toca las zonas para consultar tiempos y logística de abasto.
          </p>
        </div>

        {/* Resumen de conectividad */}
        <div className="bg-cream-50 p-4 rounded-2xl border border-cream-200 shrink-0 text-xs text-ink-600 space-y-1">
          <div><strong className="text-forest-950">Origen de Cosecha:</strong> Tatatila, Veracruz</div>
          <div><strong className="text-forest-950">Tiempo a CDMX (Nueva Viga):</strong> ~3.5 horas</div>
          <div><strong className="text-forest-950">Tiempo a Puebla:</strong> ~2.0 horas</div>
          <div><strong className="text-forest-950">Tiempo a Xalapa:</strong> ~1.0 hora</div>
        </div>
      </div>

      {/* ── Cuadrícula: Mapa Interactivo a la izquierda, Controles a la derecha ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Mapa con Leaflet (7 columnas) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative rounded-2xl border border-cream-300 overflow-hidden shadow-inner h-[460px] w-full">
            
            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              scrollWheelZoom={false}
              className="w-full h-full"
            >
              <MapRecenter center={mapCenter} zoom={mapZoom} />

              {/* Capa de Cartografía Clara estilo Google Maps (CartoDB Voyager) */}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url={CARTO_TILE_URL}
                subdomains="abcd"
                maxZoom={20}
              />

              {/* ── CÍRCULOS DE ENTREGA CON LOS COLORES DEL BLOB (CENTRADOS EN TATATILA) ── */}
              
              {/* Círculo 3: CDMX y La Nueva Viga (~240 km) - Terracota / Salmón */}
              <Circle
                center={TATATILA_COORDS}
                radius={240000}
                pathOptions={{
                  color: '#c05621',
                  fillColor: '#fbe8db',
                  fillOpacity: selectedZoneId === 'nacional' ? 0.45 : 0.2,
                  weight: selectedZoneId === 'nacional' ? 3 : 1.5,
                  dashArray: '6 6',
                }}
              />

              {/* Círculo 2: Corredor Puebla - Veracruz (~140 km) - Azul Manantial */}
              <Circle
                center={TATATILA_COORDS}
                radius={140000}
                pathOptions={{
                  color: '#165c6e',
                  fillColor: '#c8eaf2',
                  fillOpacity: selectedZoneId === 'regional' ? 0.5 : 0.25,
                  weight: selectedZoneId === 'regional' ? 3 : 1.5,
                }}
              />

              {/* Círculo 1: Xalapa y zona conurbada (~45 km) - Verde Bosque */}
              <Circle
                center={TATATILA_COORDS}
                radius={45000}
                pathOptions={{
                  color: '#325e28',
                  fillColor: '#d6efca',
                  fillOpacity: selectedZoneId === 'local' ? 0.6 : 0.35,
                  weight: selectedZoneId === 'local' ? 3 : 2,
                }}
              />

              {/* ── MARCADORES CLAVE CON POPUPS ── */}
              
              {/* Epicentro: Tatatila, Veracruz */}
              <Marker position={TATATILA_COORDS} icon={pinTatatila}>
                <Popup>
                  <div className="space-y-1">
                    <strong className="font-display text-base text-forest-950 block">Rancho El Temazcal</strong>
                    <p className="text-xs text-ink-600">Cascada natural de montaña y estanques de cultivo en Tatatila, Veracruz (~1,800 msnm).</p>
                    <span className="inline-block text-[10px] font-semibold text-forest-700 bg-forest-100 px-2 py-0.5 rounded">
                      Punto de Cosecha y Embarque
                    </span>
                  </div>
                </Popup>
              </Marker>

              {/* CDMX - La Nueva Viga */}
              <Marker position={CDMX_COORDS} icon={pinCDMX}>
                <Popup>
                  <div className="space-y-1">
                    <strong className="font-display text-base text-copper-950 block">La Nueva Viga · CDMX</strong>
                    <p className="text-xs text-ink-600">Principal destino mayorista. Envíos por tonelada en cajas térmicas selladas (~3.5 hrs).</p>
                  </div>
                </Popup>
              </Marker>

              {/* Puebla Capital */}
              <Marker position={PUEBLA_COORDS} icon={pinPuebla}>
                <Popup>
                  <div className="space-y-1">
                    <strong className="font-display text-base text-spring-950 block">Puebla de Zaragoza</strong>
                    <p className="text-xs text-ink-600">Abasto para marisquerías, restaurantes y distribuidores locales (~2 hrs).</p>
                  </div>
                </Popup>
              </Marker>

              {/* Xalapa Enríquez */}
              <Marker position={XALAPA_COORDS} icon={pinXalapa}>
                <Popup>
                  <div className="space-y-1">
                    <strong className="font-display text-base text-forest-950 block">Xalapa Enríquez</strong>
                    <p className="text-xs text-ink-600">Ruta semanal los viernes para familias y restaurantes locales (~1 hr).</p>
                  </div>
                </Popup>
              </Marker>

              {/* Puerto de Veracruz */}
              <Marker position={VERACRUZ_COORDS} icon={pinVeracruz}>
                <Popup>
                  <div className="space-y-1">
                    <strong className="font-display text-base text-spring-950 block">Puerto de Veracruz</strong>
                    <p className="text-xs text-ink-600">Envíos directos a la costa y zona de Boca del Río (~2 hrs).</p>
                  </div>
                </Popup>
              </Marker>

            </MapContainer>

            {/* Botón flotante para resetear vista */}
            <button
              type="button"
              onClick={handleResetView}
              className="absolute top-4 right-4 z-[400] bg-white/95 backdrop-blur-sm border border-cream-300 text-ink-700 hover:text-forest-900 hover:bg-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ver todo el corredor</span>
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-ink-400 px-1">
            <span>💡 Usa los botones +/- o arrastra el mapa para explorar carreteras y municipios.</span>
            <span className="font-medium text-forest-700">Tatatila: 19°41'N 97°07'O</span>
          </div>
        </div>

        {/* ── Controles / Tarjetas explicativas de las zonas (5 columnas) ── */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-1">
            Círculos de entrega (Toca para enfocar en el mapa):
          </div>

          {ZONES.map((zone) => {
            const isSelected = selectedZoneId === zone.id;

            return (
              <div
                key={zone.id}
                onClick={() => handleSelectZone(zone)}
                className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'border-forest-600 bg-white ring-2 ring-forest-200/80 shadow-md'
                    : 'border-cream-300 bg-cream-50/50 hover:bg-white hover:border-cream-400'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${zone.badgeBg} ${zone.badgeText}`}>
                    {zone.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-ink-600 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-forest-600" />
                    <span>{zone.time}</span>
                  </div>
                </div>

                <h4 className="font-display text-xl text-forest-950 font-bold mb-1">
                  {zone.name}
                </h4>
                <div className="text-xs text-forest-800 font-medium mb-2">
                  <strong>Destinos:</strong> {zone.scope}
                </div>
                <p className="text-xs text-ink-600 leading-relaxed">
                  {zone.description}
                </p>

                {isSelected && (
                  <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-between">
                    <span className="text-[11px] text-forest-700 font-semibold">
                      Radio aprox: ~{zone.radiusKm} km desde Tatatila
                    </span>
                    <a
                      href={`${FARM_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`Hola Rancho El Temazcal, me interesa cotizar un envío para la zona de: ${zone.scope}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-800 hover:text-forest-950 underline underline-offset-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Cotizar por WhatsApp</span>
                      <Truck className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}

          {/* Garantía de cadena de frío y costo de arrastre */}
          <div className="space-y-2.5">
            <div className="p-4 rounded-xl bg-forest-50 border border-forest-200 text-xs text-forest-950 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
              <span>
                <strong>Embarques en cajas térmicas calibradas:</strong> La proximidad a la autopista Perote-Puebla permite que el pescado viaje a temperatura controlada directa a andenes de La Nueva Viga y Puebla sin mermas.
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-ink-700 flex items-start gap-2.5">
              <Truck className="w-4 h-4 text-copper-700 shrink-0 mt-0.5" />
              <span>
                <strong className="text-forest-950">Precio de arrastre:</strong> Precios base pie de granja en Tatatila. El flete/arrastre terrestre se calcula y confirma según el tonelaje y distancia al destino final.
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
