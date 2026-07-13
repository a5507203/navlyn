import { assetPath } from "../utils/base";

export const newsItemsFr = [
  {
    slug: "technology-breakthroughs",
    tag: "Technologie",
    title: "Suivre les avancées technologiques",
    description:
      "Un aperçu continu des progrès de Navlyn en matière d’intelligence de vol, de coordination des systèmes et de capacités opérationnelles en basse altitude.",
    date: "2026-01-26",
    location: "Hangzhou, Zhejiang",
    image: assetPath("/media/news-team-1.jpg"),
    imageAlt: "Collaboration technologique au sein de Navlyn",
    body: [
      "Dans les domaines des agents de vol, des systèmes coordonnés et de l’exécution des missions en boucle fermée, Navlyn transforme progressivement ses atouts technologiques en capacités d’ingénierie réutilisables. Le site actuel emploie temporairement des images authentiques de l’équipe issues des archives de la marque ; elles pourront ensuite être remplacées par des articles officiels et des actualités de R&D.",
      "Cette rubrique accueillera à l’avenir les mises à niveau du système, les évolutions des algorithmes, les améliorations matérielles et les jalons d’ingénierie, afin de raconter de manière continue les progrès de Navlyn dans l’intelligence en basse altitude.",
    ],
  },
  {
    slug: "product-launches",
    tag: "Lancement",
    title: "Lancements de produits et présentations de la marque",
    description:
      "Un espace consacré aux lancements de produits, aux démonstrations système et aux événements de la marque, qui enrichira progressivement la chronologie publique de Navlyn.",
    date: "2026-01-26",
    location: "Jiaxing, Zhejiang",
    image: assetPath("/media/news-team-2.jpg"),
    imageAlt: "Présentation des produits et de l’équipe Navlyn",
    body: [
      "Du lancement de la marque et des premières présentations de produits aux démonstrations du système en conditions réelles, cette rubrique a vocation à devenir une vitrine publique essentielle de la gamme Navlyn et du rythme de développement de la marque.",
      "La version actuelle conserve volontairement une structure légère. Lorsque les contenus officiels des lancements, les photographies des événements et les textes des articles seront disponibles, elle pourra évoluer vers un espace d’actualités complet.",
    ],
  },
  {
    slug: "global-collaboration",
    tag: "International",
    title: "Coopération internationale et événements sectoriels",
    description:
      "Des moments marquants de la collaboration franco-chinoise, des échanges internationaux et des salons professionnels qui façonnent la présence mondiale de Navlyn.",
    date: "2026-01-26",
    location: "Chine / France",
    image: assetPath("/media/news-team-3.jpg"),
    imageAlt: "Collaboration de l’équipe internationale de Navlyn",
    body: [
      "Le travail d’équipe transfrontalier, les échanges internationaux et les salons professionnels jouent un rôle central dans la confiance et la notoriété que Navlyn construit à l’échelle mondiale. Cette rubrique pourra ensuite accueillir des synthèses de partenariats, des comptes rendus d’événements et les grandes étapes de projets menés dans plusieurs régions.",
    ],
  },
] as const;
