// Para agregar contenido nuevo en el futuro:
// - Un enlace suelto (como MIA/NextFlight/InCruises): añade un objeto al arreglo BRAND_LINKS.
// - Un enlace dentro del bloque "Mujer es Evolución" (podcast, redes, etc.): añádelo a ME_GROUP.links.
// icon acepta: "youtube", "instagram", "ship", "plane", "sparkle", "link"

const ME_GROUP = {
  name: "Mujer es Evolución",
  description: "Comunidad y podcast para mujeres en constante evolución personal y profesional.",
  logo: "mujer-es-evolucion-logo.jpg",
  color: "#9b4fd9",
  links: [
    {
      title: "Podcast en YouTube",
      subtitle: "Escucha todos los episodios",
      url: "https://www.youtube.com/playlist?list=PLOGKuVlWbV45r7SEMC_x7sarDKKaK1Z4O",
      icon: "youtube",
    },
    {
      title: "Instagram",
      subtitle: "@mujer.es.evolucion",
      url: "https://www.instagram.com/mujer.es.evolucion",
      icon: "instagram",
    },
  ],
};

const BRAND_LINKS = [
  {
    title: "MIA · Mujer Inmobiliaria en Acción",
    subtitle: "mia.mujeresevolucion.com",
    description: "Formación y certificación SEP-CONOCER para iniciar tu carrera como asesora inmobiliaria, 100% online.",
    url: "https://mia.mujeresevolucion.com",
    logo: "mujer-es-evolucion-logo.jpg",
    color: "#9b4fd9",
  },
  {
    title: "NextFlight Academy",
    subtitle: "nextflight.mujeresevolucion.com",
    description: "Academia para generar ingresos digitales, marca personal y ventas, compatible con la maternidad.",
    url: "https://nextflight.mujeresevolucion.com",
    logo: "nextflight-logo.png",
    color: "#c98858",
  },
  {
    title: "InCruises · Crucero Bahamas",
    subtitle: "bahamas.mujeresevolucion.com",
    description: "Crucero grupal de 4 días por el Caribe (Miami · Nassau · Ocean Cay), 15–19 de marzo 2027.",
    url: "https://bahamas.mujeresevolucion.com",
    logo: "incruises-logo.webp",
    color: "#f5a623",
  },
];
