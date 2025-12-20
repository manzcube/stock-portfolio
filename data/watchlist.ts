export interface WatchlistData {
  ticker: string;
  name: string;
  interestScore: number; // 1–10
  currentPrice: number; // USD
  change1D: number; // decimal, e.g. -0.01 = -1%
  changeFromATH: number; // decimal, e.g. -0.25 = 25% below ATH
  iconURL: string;
  description: string;
  thesis: string[];
  bearCase: string[];
}

export const WATCHLIST_DATA: WatchlistData[] = [
  {
    ticker: "ADBE",
    name: "Adobe Inc.",
    interestScore: 10,
    currentPrice: 347.34, // latest close price ~Dec 16, 2025 :contentReference[oaicite:0]{index=0}
    change1D: -0.009, // small down move vs previous close (approx) :contentReference[oaicite:1]{index=1}
    changeFromATH: -0.256, // ~26% below 52-week high (range ~465) :contentReference[oaicite:2]{index=2}
    iconURL: "https://logo.clearbit.com/adobe.com",
    description:
      "Adobe is a global leader in creative software, offering products such as Photoshop, Illustrator, Premiere Pro, and the Creative Cloud subscription suite. The company also provides digital marketing and analytics tools through Adobe Experience Cloud.",
    thesis: [
      "Dominant monopoly in creative tools with extremely high switching costs.",
      "Long-term recurring revenue growth from Creative Cloud subscriptions.",
      "Strong margins and pricing power due to brand strength and non-discretionary workflow importance.",
      "Expansion into AI-assisted creative tools can increase ARPU and reduce churn.",
    ],
    bearCase: [
      "AI tools may disrupt traditional creative workflows and reduce reliance on Adobe products.",
      "Regulatory pressure and antitrust scrutiny on subscription bundling.",
      "Competition from cheaper or open-source alternatives could grow.",
      "Revenue growth slowing compared to hyper-growth SaaS companies.",
    ],
  },
  {
    ticker: "DUOL",
    name: "Duolingo, Inc.",
    interestScore: 7,
    currentPrice: 185.97, // approximate recent close (Dec 15, 2025) :contentReference[oaicite:3]{index=3}
    change1D: -0.052, // ~-5.25% 1-day change from latest data :contentReference[oaicite:4]{index=4}
    changeFromATH: -0.659, // ~66% below peak (~544) :contentReference[oaicite:5]{index=5}
    iconURL: "https://logo.clearbit.com/duolingo.com",
    description:
      "Duolingo is a digital language-learning platform offering gamified lessons in over 40 languages. It monetizes through subscriptions, ads, and English proficiency testing.",
    thesis: [
      "Extremely strong brand and user engagement driven by gamification.",
      "Massive global TAM as digital language learning accelerates.",
      "High-margin subscription business with growing ARPU.",
      "Duolingo’s AI-driven learning models improve retention and expand new verticals (math, music).",
    ],
    bearCase: [
      "Growth highly dependent on continued viral adoption and daily engagement.",
      "Competition from free alternatives or regionally dominant apps.",
      "Valuation often prices in perfection, leaving little room for error.",
      "Monetization outside language learning is still unproven.",
    ],
  },
  {
    ticker: "NVO",
    name: "Novo Nordisk A/S",
    interestScore: 10,
    currentPrice: 48.97, // approximate recent close (~Dec 16, 2025) :contentReference[oaicite:6]{index=6}
    change1D: -0.028, // ~-2.8% on most recent session (approx) :contentReference[oaicite:7]{index=7}
    changeFromATH: -0.551, // ~55% below 52-week high (~109) :contentReference[oaicite:8]{index=8}
    iconURL: "https://logo.clearbit.com/novonordisk.com",
    description:
      "Novo Nordisk is a global pharmaceutical leader specializing in diabetes care, obesity treatments, and rare endocrine disorders. Its blockbuster drugs Ozempic and Wegovy dominate the GLP-1 obesity treatment market.",
    thesis: [
      "Near-monopoly in GLP-1 obesity and diabetes drugs with decades of IP protection.",
      "Obesity market expected to exceed $100B by 2030.",
      "Strong manufacturing moat and supply chain scale unmatched by competitors.",
      "Diversified drug pipeline beyond diabetes strengthens long-term growth.",
    ],
    bearCase: [
      "Competition from Eli Lilly’s Mounjaro and future GLP-1 entrants.",
      "Political pressure on drug pricing, especially in the U.S.",
      "Supply constraints could limit revenue despite demand.",
      "High expectations already baked into valuation.",
    ],
  },
  {
    ticker: "ORCL",
    name: "Oracle Corporation",
    interestScore: 8,
    currentPrice: 188.68, // most recent close price ~Dec 16, 2025 :contentReference[oaicite:9]{index=9}
    change1D: 0.022, // Oracle moved modestly positive (~+2%) on Dec 16 news :contentReference[oaicite:10]{index=10}
    changeFromATH: -0.455, // ~46% below 52-week high (~345) :contentReference[oaicite:11]{index=11}
    iconURL: "https://logo.clearbit.com/oracle.com",
    description:
      "Oracle provides enterprise database solutions, cloud infrastructure, and business applications. Its strength lies in mission-critical workloads and long-term enterprise contracts.",
    thesis: [
      "Strong enterprise relationships and extremely sticky legacy database revenue.",
      "Oracle Cloud Infrastructure (OCI) is growing faster than major competitors.",
      "Large-scale AI partnerships (NVIDIA, Cohere) could accelerate cloud adoption.",
      "High-margin licensing revenue provides cash flow stability.",
    ],
    bearCase: [
      "Oracle lags AWS, Azure, and GCP in overall cloud market share.",
      "Customer migration away from on-premise databases may pressure revenues.",
      "Aggressive competition in AI compute and cloud pricing.",
      "Brand perception weaker among modern developers.",
    ],
  },
];

type OpenPosition = {
  ticker: string;
  openDate: string; // ISO string: "2025-01-10"
  expectedHoldDays: number;
};

export const OPEN_POSITIONS: OpenPosition[] = [
  // {
  //   ticker: "ORCL",
  //   openDate: "12/10/2025",
  //   expectedHoldDays: 14,
  // },
];

type PastTrade = {
  ticker: string;
  entryDate: string;
  exitDate: string;
  daysHeld: number;
  leverage: string; // e.g., "1x", "2x"
  returnPercent: number; // e.g., 0.15 = 15%
};

export const PAST_TRADES: PastTrade[] = [
  {
    ticker: "ORCL",
    entryDate: "12/17/2025",
    exitDate: "12/19/2025",
    daysHeld: 1,
    leverage: "5x",
    returnPercent: 0.078,
  },
  {
    ticker: "ORCL",
    entryDate: "12/11/2025",
    exitDate: "12/19/2025",
    daysHeld: 1,
    leverage: "5x",
    returnPercent: -0.0068,
  },
  {
    ticker: "ADBE",
    entryDate: "2/12/2025",
    exitDate: "5/04/2025",
    daysHeld: 3,
    leverage: "5x",
    returnPercent: 0.066,
  },
  {
    ticker: "DUOL",
    entryDate: "25/11/2025",
    exitDate: "26/11/2025",
    daysHeld: 1,
    leverage: "5x",
    returnPercent: 0.104,
  },
  {
    ticker: "DUOL",
    entryDate: "6/11/2025",
    exitDate: "26/11/2025",
    daysHeld: 20,
    leverage: "5x",
    returnPercent: 0.006,
  },
  {
    ticker: "NVO",
    entryDate: "17/11/2025",
    exitDate: "24/11/2025",
    daysHeld: 20,
    leverage: "4x",
    returnPercent: -0.128,
  },
  {
    ticker: "NVO",
    entryDate: "10/11/2025",
    exitDate: "24/11/2025",
    daysHeld: 20,
    leverage: "4x",
    returnPercent: -0.079,
  },
];
