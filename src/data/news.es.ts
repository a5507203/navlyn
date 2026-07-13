import { assetPath } from "../utils/base";

export const newsItemsEs = [
  {
    slug: "technology-breakthroughs",
    tag: "Tecnología",
    title: "Seguimiento de los avances tecnológicos",
    description:
      "Una visión continua de los progresos de Navlyn en inteligencia de vuelo, coordinación de sistemas y capacidad operativa de baja altitud.",
    date: "2026-01-26",
    location: "Hangzhou, Zhejiang",
    image: assetPath("/media/news-team-1.jpg"),
    imageAlt: "Colaboración tecnológica en Navlyn",
    body: [
      "En los ámbitos de los agentes de vuelo, los sistemas coordinados y la ejecución de tareas en circuito cerrado, Navlyn está convirtiendo de forma constante sus fortalezas tecnológicas en capacidades de ingeniería reutilizables. El sitio actual utiliza provisionalmente imágenes auténticas del equipo procedentes del archivo de la marca, que más adelante podrán sustituirse por noticias oficiales y novedades de I+D.",
      "Esta sección podrá reunir en el futuro actualizaciones del sistema, evolución de algoritmos, mejoras de hardware e hitos de ingeniería, para relatar de forma continua los avances de Navlyn en inteligencia de baja altitud.",
    ],
  },
  {
    slug: "product-launches",
    tag: "Lanzamiento",
    title: "Lanzamientos de productos y presentaciones de marca",
    description:
      "Un espacio para lanzamientos de productos, demostraciones de sistemas y actividades de marca que ampliará gradualmente la cronología pública de Navlyn.",
    date: "2026-01-26",
    location: "Jiaxing, Zhejiang",
    image: assetPath("/media/news-team-2.jpg"),
    imageAlt: "Presentación de los productos y el equipo de Navlyn",
    body: [
      "Desde el lanzamiento de la marca y las primeras presentaciones de productos hasta las demostraciones del sistema en directo, esta sección está llamada a convertirse en una ventana pública esencial para conocer la gama de Navlyn y la evolución de la marca.",
      "La versión actual mantiene deliberadamente una estructura ligera. Cuando estén disponibles los contenidos oficiales de los lanzamientos, las fotografías de los eventos y los textos de los artículos, podrá convertirse en una sala de prensa completa.",
    ],
  },
  {
    slug: "global-collaboration",
    tag: "Internacional",
    title: "Cooperación internacional y eventos sectoriales",
    description:
      "Momentos destacados de la colaboración franco-china, los intercambios internacionales y las ferias profesionales que dan forma a la presencia mundial de Navlyn.",
    date: "2026-01-26",
    location: "China / Francia",
    image: assetPath("/media/news-team-3.jpg"),
    imageAlt: "Colaboración del equipo internacional de Navlyn",
    body: [
      "El trabajo transfronterizo, los intercambios internacionales y las ferias profesionales son fundamentales para la confianza y el reconocimiento de marca que Navlyn construye en todo el mundo. Esta sección podrá albergar más adelante resúmenes de alianzas, crónicas de eventos e hitos de proyectos desarrollados entre distintas regiones.",
    ],
  },
] as const;
