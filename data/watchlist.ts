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
    currentPrice: 328.73,
    change1D: 0.006,
    changeFromATH: -0.527, // ~52% below ATH
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
    currentPrice: 188.38,
    change1D: 0.016,
    changeFromATH: -0.661, // ~66% below ATH
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
    currentPrice: 47.99,
    change1D: 0.0088,
    changeFromATH: -0.674, // adjusted for ADR conversion
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
    currentPrice: 208.25,
    change1D: 0.0318,
    changeFromATH: -0.383, // ~36% below ATH
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
