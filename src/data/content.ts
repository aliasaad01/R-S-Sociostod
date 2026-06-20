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
      "Vi gör det lättare att förstå hur samhället fungerar, vilka rättigheter och skyldigheter vi har och vart man kan vända sig för information, stöd och service.", //
    iconName: "Globe",
    highlights: [
      "Dina rättigheter och skyldigheter",
      "Hjälp och service från kommun och stat",
      "Vart du kan vända dig för att få hjälp",
    ],
  },
  {
    id: "myndighetskontakt",
    title: "Myndighetskontakt & delaktighet", //
    description:
      "Vi stärker tryggheten i kontakten med myndigheter genom ökad förståelse för information, beslut och den egna möjligheten att vara delaktig.", //
    iconName: "ShieldCheck",
    highlights: [
      "Att bli bemött på ett bra och rättvist sätt",
      "Att förstå beslut från myndigheter",
      "Hur du kan kontakta myndigheter",
      "Hur du kan vara delaktig och påverka",
    ],
  },
  {
    id: "samhallsformation",
    title: "Samhällsinformation & orientering", //
    description:
      "Vi hjälper människor att hitta rätt i samhället genom kunskap om offentliga verksamheter, samhällsfunktioner och praktiska vägar till information och stöd.", //
    iconName: "FileText",
    highlights: [
      "Viktiga lagar och regler i vardagen",
      "Hur välfärden i Sverige fungerar",
      "Praktisk information för vardagslivet",
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
      "För studieförbund som vill erbjuda praktisk samhällskunskap och skapa större förståelse för rättigheter, skyldigheter och hur samhället fungerar i vardagen.",
    iconName: "BookOpen",
  },
  {
    id: "foreningar",
    title: "Föreningar", //
    description:
      "För föreningar som vill stärka sina medlemmars kunskap om samhället och skapa trygghet i kontakt med myndigheter och olika samhällsfunktioner.",
    iconName: "HeartHandshake",
  },
  {
    id: "folkhogskolor",
    title: "Folkhögskolor", //
    description:
      "Föreläsningar anpassade för folkhögskolor som vill ge deltagarna ökad förståelse för det svenska samhället och stärka deras trygghet i vardagliga samhällskontakter.",
    iconName: "GraduationCap",
  },
  {
    id: "komvux",
    title: "Komvux & Vuxenutbildning", //
    description:
      "Ett komplement till befintlig undervisning som ger deltagarna ökad kunskap om samhället, myndighetskontakt samt rättigheter och skyldigheter.",
    iconName: "Award",
  },
  {
    id: "ideella",
    title: "Ideella organisationer", //
    description:
      "För ideella organisationer som vill stärka kunskap och förståelse hos deltagare, volontärer eller medarbetare genom lättillgänglig samhällsinformation.",
    iconName: "Users",
  },
  {
    id: "verksamheter",
    title: "Offentliga verksamheter", //
    description:
      "För kommunala verksamheter och projekt som vill öka kunskap, delaktighet och trygghet genom pedagogiska utbildningsinsatser.",
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
