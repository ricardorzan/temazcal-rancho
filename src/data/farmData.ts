export interface Product {
  id: string;
  name: string;
  tagline: string;
  pricePerKg: number;
  weightRange: string;
  badge?: string;
  image?: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  idealFor: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  icon: string;
  techDetail: string;
}

export const FARM_INFO = {
  name: "Rancho El Temazcal",
  tagline: "Centro de Producción Acuícola de Montaña",
  location: "Zona montañosa de Tatatila, Veracruz",
  phoneDisplay: "+52 56 6636 2342",
  phoneRaw: "525666362342",
  whatsappBaseUrl: "https://wa.me/525666362342",
  waterSource: "Cascada natural y manantial de flujo continuo sin estancamiento",
  logisticsNotice: "Operación 100% enfocada en producción y entrega. No contamos con instalaciones turísticas abiertas al público.",
};

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: "Cero Sabor a Lodo o Tierra",
    description:
      "A diferencia de peces criados en aguas estancadas que acumulan geosmina, nuestras truchas crecen en agua corriente cristalina que elimina cualquier sabor residual a fango.",
    icon: "Droplets",
    techDetail: "Agua de vertiente fría y no recirculada que preserva la pureza gustativa."
  },
  {
    title: "Alta Oxigenación de Cascada",
    description:
      "El desnivel natural de la cascada genera una oxigenación constante y vigorosa. Esto produce una textura muscular firme, magra y limpia.",
    icon: "Activity",
    techDetail: "Flujo permanente que estimula el nado continuo de los ejemplares."
  },
  {
    title: "Sanidad e Inocuidad Garantizada",
    description:
      "El aislamiento geográfico de alta montaña en Tatatila y el agua de nacimiento virgen protegen la bioseguridad del cultivo sin necesidad de químicos nocivos.",
    icon: "ShieldCheck",
    techDetail: "Entrega limpia, eviscerada y lista para cadena de frío o congelación."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "arcoiris-tradicional",
    name: "Trucha Arcoíris de Manantial",
    tagline: "Talla ideal para plato individual y servicio a la carta",
    pricePerKg: 160,
    weightRange: "350g a 600g por ejemplar",
    badge: "Más Solicitada",
    image: "/images/trucha-arcoiris.jpg",
    description:
      "Ejemplar clásico de carne blanca y rosada clara, textura suave pero elástica y un sabor fresco inconfundible. Es la porción perfecta para empapelar, asar a la leña o preparar al ajillo.",
    highlights: [
      "Peso por pieza: 350g – 600g",
      "Precio base en granja: $160 MXN / kg",
      "Limpia y eviscerada al día de entrega",
      "Empaque sellado para refrigeración inmediata"
    ],
    specs: [
      { label: "Peso por pieza", value: "350g – 600g" },
      { label: "Precio granja", value: "$160 MXN / kg" },
      { label: "Presentación", value: "Eviscerada / Alto Vacío o Térmica" },
      { label: "Preparación ideal", value: "Asada, al vapor, al ajillo, frita" }
    ],
    idealFor: "Familias en Xalapa, restaurantes de mariscos y menús individuales."
  },
  {
    id: "arcoiris-salmonada",
    name: "Trucha Arcoíris Salmonada (Corte Premium)",
    tagline: "La alternativa mexicana fresca al salmón importado congelado",
    pricePerKg: 180,
    weightRange: "500g a 1.5 kg por ejemplar",
    badge: "Corte Gourmet",
    image: "/images/trucha-salmonada.jpg",
    description:
      "Ejemplares de gran calibre sometidos a una nutrición especializada rica en carotenoides naturales. Logra una pigmentación naranja intensa, grasa saludable intramuscular y un lomo grueso ideal para filetear en fresco.",
    highlights: [
      "Peso por pieza: 500g – 1.5 kg (Gran calibre)",
      "Precio base en granja: $180 MXN / kg",
      "Carne naranja vibrante con textura firme tipo sashimi",
      "Frescura del día (vs semanas de congelación en importaciones)"
    ],
    specs: [
      { label: "Peso por pieza", value: "500g – 1,500g" },
      { label: "Precio granja", value: "$180 MXN / kg" },
      { label: "Color de carne", value: "Naranja salmón intenso (Natural)" },
      { label: "Uso culinario", value: "Filete a la plancha, sashimi, ahumado" }
    ],
    idealFor: "Restaurantes gourmet, comedores de autor, distribuidores y familias exigentes."
  },
  {
    id: "trucha-viva",
    name: "Trucha Viva para Siembra y Estanques",
    tagline: "Venta de ejemplares vivos para productores y restaurantes temáticos",
    pricePerKg: 0, // A cotizar
    weightRange: "Calibres variables según etapa",
    badge: "Para Granjas y Estanques",
    image: "/images/trucha-viva.jpg",
    description:
      "Abastecimiento de trucha viva adaptada a agua fría con alta viabilidad biológica. Disponibilidad para restaurantes campestres con estanque de pesca o productores que buscan ejemplares robustos.",
    highlights: [
      "Ejemplares aclimatados y sanos",
      "Carga especializada con oxigenación para traslado",
      "Cotización personalizada según volumen y destino",
      "Asesoría básica de recepción y aclimatación"
    ],
    specs: [
      { label: "Calibre", value: "A convenir según ciclo" },
      { label: "Precio", value: "Cotización por lote" },
      { label: "Logística", value: "Tanque con oxígeno activo" },
      { label: "Destino", value: "Granjas acuícolas y restaurantes con estanque" }
    ],
    idealFor: "Unidades de producción acuícola y establecimientos turísticos/gastronómicos."
  }
];

export const PACKAGING_INFO = {
  title: "Presentación y Empaque Higiénico",
  description:
    "Para garantizar que el producto llegue a su cocina con la misma frescura que en el manantial de Tatatila, cuidamos cada etapa del procesado primario:",
  features: [
    {
      title: "100% Eviscerada y Desangrada",
      detail: "Se entrega limpia por dentro, sin vísceras ni restos que aceleren la descomposición."
    },
    {
      title: "Empaque al Alto Vacío o Bolsa Térmica",
      detail: "Sellado que previene quemaduras por congelación o contaminación cruzada en el refrigerador."
    },
    {
      title: "Cadena de Frío Controlada",
      detail: "Transportada con cama de hielo calibrada hasta el punto de entrega en Xalapa o destino nacional."
    }
  ]
};

export const LOGISTICS_RETAIL = {
  title: "Venta Local al Menudeo (Xalapa y Alrededores)",
  subtitle: "Ruta semanal fresca directamente del manantial a tu mesa",
  scheduleCutoff: "Jueves 6:00 PM",
  deliveryDay: "Viernes durante el día",
  points: [
    "Recepción de pedidos: Lunes a jueves hasta las 6:00 PM",
    "Cosecha y preparación: Madrugada del viernes en Tatatila",
    "Puntos de entrega: Puntos de encuentro céntricos o entrega directa a domicilio en Xalapa",
    "Pedido mínimo: Sin compra mínima forzosa (a partir de 1 kilo)",
    "Aviso importante: No hay venta al público en el rancho por ser zona de bioseguridad"
  ]
};

export const LOGISTICS_WHOLESALE = {
  title: "Venta por Mayoreo (Medio Mayoreo y Toneladas)",
  subtitle: "Suministro constante todo el año para restaurantes, distribuidores y centrales de abasto",
  regions: ["Xalapa", "Puebla", "CDMX (La Nueva Viga)", "Veracruz Puerto", "Tlaxcala"],
  points: [
    "Capacidad garantizada: Disponibilidad continua durante las 52 semanas del año",
    "Pesaje exacto en rejas plásticas de grado alimenticio",
    "Cajas térmicas selladas con hielo para transporte regional de mediano y largo recorrido",
    "Trato directo con el productor: sin intermediarios ni márgenes inflados",
    "Facturación y atención comercial personalizada para bodegas y distribuidores"
  ]
};
