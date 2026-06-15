import {
  ValueCard,
  ThemeItem,
  ServiceItem,
  AudienceItem,
  TestimonialItem,
} from "../types";

export const BRAND_INFO = {
  name: "R S Sociostöd",
  tagline: "Kunskap som stärker. Trygghet genom förståelse.", // التعديل المطلوب للوغو
  founder: "Rascha Skef",
  role: "Socionom & Grundare", //
  email: "info@rssociostod.se", //
  instagram: "@rs.sociostod", //
  facebook: "R S Sociostöd", //
  phoneWhatsApp: "+46720444486",
  logoAlt: "R S Sociostöd Logo – Din guide vid myndighetskontakt",
};

export const VALUE_CARDS: ValueCard[] = [
  {
    id: "tillganglighet",
    title: "Tillgänglighet",
    description:
      "Samhällsinformation ska vara begriplig, strukturerad och anpassad så att alla individer, oavsett bakgrund, kan tillgodogöra sig den i sin egen takt.",
    iconName: "Accessibility",
  },
  {
    id: "kunskap",
    title: "Kunskap",
    description:
      "Att ha djupgående kännedom om sina rättigheter, skyldigheter och samhällsprocesser ger trygghet, minskar oro och ökar individens handlingsutrymme.",
    iconName: "BookOpen",
  },
  {
    id: "respekt",
    title: "Respekt",
    description:
      "Varje föreläsning, möte och samtal vilar på en orubblig grund av ömsesidig respekt, empati och ett inkluderande bemötande.",
    iconName: "Heart",
  },
];

export const THEME_ITEMS: ThemeItem[] = [
  {
    id: "samhallsforstaelse",
    title: "Samhällsförståelse", //
    description:
      "Kunskap som hjälper deltagare att förstå hur samhället fungerar, vilka rättigheter och skyldigheter vi har samt vart man kan vända sig för information, stöd och service.", //
    iconName: "Globe",
    highlights: [
      "Demokratins grundpelare",
      "Rättigheter och skyldigheter",
      "Kommunal och statlig service",
      "Vägar till rätt instans i samhället",
    ],
  },
  {
    id: "myndighetskontakt",
    title: "Myndighetskontakt & delaktighet", //
    description:
      "Föreläsningar som stärker tryggheten i kontakt med myndigheter och ger ökad förståelse för information, kommunikation och samhällets olika funktioner.", //
    iconName: "ShieldCheck",
    highlights: [
      "Bemötande och rättssäkerhet",
      "Att förstå myndighetsbeslut",
      "Kommunikationsvägar och verktyg",
      "Individens role och delaktighet",
    ],
  },
  {
    id: "samhallsformation",
    title: "Samhällsinformation & orientering", //
    description:
      "Kunskap om samhällets funktioner, service och offentliga information. Vi ger en helhetsbild av hur samhället är uppbyggt och hur olika verksamheter, regler och processer fungerar i praktiken. Fokus ligger på allmän information som stärker förstäelse, delaktighet och möjligheten att orientera sig i samhället.", //
    iconName: "FileText",
    highlights: [
      "Lagar och förordningar i praktiken",
      "Välfärdsstatens uppbyggnad",
      "Svensk arbetsmarknad & skattesystem",
      "Praktisk orientering i vardagen",
    ],
  },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: "forelasningar",
    title: "Föreläsningar", //
    description:
      "Kunskapsbaserade och inspirerande föreläsningar som anpassas noggrant efter just er målgrupp och era unika behov. Vi fokuserar på att förvandla komplex information till tydliga, mänskliga och inspirerande insikter.", //
    iconName: "Presentation",
    features: [
      "Anpassade presentationer efter målgrupp",
      "Interaktiva belysande exempel",
      "Pedagogisk och engagerande struktur",
      "Frågestund och reflektionsmöjligheter",
    ],
    priceInfo: "Pris enligt överenskommelse beroende på omfattning.",
  },
  {
    id: "tematraffar",
    title: "Tematräffar & Workshops", //
    description:
      "Dialogbaserade och verksamhetsnära träffar som uppmuntrar till aktivt deltagande, gemensam reflektion, kunskapsutbyte och utforskande av nya perspektiv genom meningsfulla gruppdiskussioner.", //
    iconName: "Users",
    features: [
      "Verktyg för dialog och delaktighet",
      "Faciliterade gruppdiskussioner",
      "Praktiska case och rollspel",
      "Konkreta handlingsplaner för verksamheten",
    ],
    priceInfo: "Bokas som enstaka tillfällen eller serier.",
  },
  {
    id: "utbildningsmaterial",
    title: "Utbildningsmaterial", //
    description:
      "Skräddarsydda kompendier, deltagarguider, checklistor och stödmaterial som befäster och fördjupar lärandet, anpassade för att läsas och användas både under och efter utbildningstillfället.", //
    iconName: "Files",
    features: [
      "Lättläst, strukturerad information",
      "Steg-för-steg guider vid myndighetskontakt",
      "Checklistor för pedagoger & deltagare",
      "PDF-format redo för tryck eller digital distribution",
    ],
    priceInfo: "Ingår ofta i föreläsningspaket eller kan specialbeställas.",
  },
];

export const AUDIENCE_ITEMS: AudienceItem[] = [
  {
    id: "studieforbund",
    title: "Studieförbund", //
    description:
      "För studiecirklar och bildningsverksamheter som vill erbjuda folkbildande kurser i praktisk samhällskunskap och mänskliga rättigheter.",
    iconName: "BookOpen",
  },
  {
    id: "foreningar",
    title: "Föreningar", //
    description:
      "För lokala och nationella föreningar som vill erbjuda sina medlemmar konkreta verktyg för att navigera det svenska samhället och dess stödsystem.",
    iconName: "HeartHandshake",
  },
  {
    id: "folkhogskolor",
    title: "Folkhögskolor", //
    description:
      "Föreläsningar anpassade för deltagare på allmän kurs eller etableringskurser som behöver stärka sin förståelse för det svenska systemet.",
    iconName: "GraduationCap",
  },
  {
    id: "komvux",
    title: "Komvux & Vuxenutbildning", //
    description:
      "Komplement till SFI och samhällsorientering (SO) för att ge studerande ökad förtrogenhet med myndighetskontakt och medborgerliga rättigheter.",
    iconName: "Award",
  },
  {
    id: "ideella",
    title: "Ideella organisationer", //
    description:
      "Insatser och inspirationsföreläsningar för volontärer samt anställda som möter målgrupper med behov av vägledning i samhällskontakter.",
    iconName: "Users",
  },
  {
    id: "verksamheter",
    title: "Offentliga verksamheter", //
    description:
      "För kommunala enheter, integrationsprojekt eller arbetsmarknadsenheter som vill stärka medborgarnas delaktighet och kunskap.",
    iconName: "Building2",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "Raschas förmåga att förklara komplicerade lagar och myndighetsprocesser på ett enkelt och mänskligt sätt är unik. Våra cirkeldeltagare kände sig lyssnade på och stärkta.",
    author: "Karin Andersson",
    role: "Verksamhetsutvecklare, Studieförbund",
  },
  {
    id: "2",
    quote:
      "Efter tematräffarna märkte vi en märkbar skillnad i tryggheten hos våra medlemmar när de ska ta kontakt med t.ex. Försäkringskassan eller kommunen.",
    author: "Ahmed Al-Mousawi",
    role: "Ordförande, Integrationsförening",
  },
];

// نص إخلاء المسؤولية الصارم المطلوب في التصميم
export const DISCLAIMER_TEXT =
  "Verksamheten erbjuder inte individuell rådgivning eller stöd i enskilda ärenden.";
