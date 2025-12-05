export interface TickerData {
  ticker: string;
  name: string;
  allocationPercentage: number;
  currentPrice: number;
  change1Y: number; // decimal, e.g. 0.451 = +45.1%
  marketCapUsd: number; // full USD value, e.g. 23_000_000_000
  priceToSales: number;
  iconURL: string;
  description: string;
  thesis: string[];
  bearCase: string[];
  coverImageURL: string;
}

export const PORTFOLIO_DATA: TickerData[] = [
  {
    ticker: "NIO",
    name: "NIO Inc.",
    allocationPercentage: 0.23,
    currentPrice: 5.01,
    change1Y: 0.1158, // ~ -19.5%
    marketCapUsd: 9_830_000_000, // 11.5B
    priceToSales: 1.17,
    iconURL: "https://logo.clearbit.com/nio.com",
    coverImageURL: "/ticker.jpeg",
    description:
      "NIO is a Chinese premium electric vehicle manufacturer focusing on SUVs and sedans, with a strong emphasis on user experience, battery-swapping, and subscription services.",
    thesis: [
      "Leverages China’s EV adoption tailwind with a premium, tech-focused brand.",
      "Battery-swap network and energy services create ecosystem lock-in and potential recurring revenue.",
      "Upside from international expansion into Europe and other markets.",
      "Software and subscription features (ADAS, connectivity) can improve unit economics over time.",
    ],
    bearCase: [
      "Brutal competition from domestic Chinese EV makers and global OEMs compressing margins.",
      "Ongoing cash burn and dependence on capital markets for funding.",
      "Regulatory, geopolitical, and delisting risks tied to China–US relations.",
      "Macro slowdown in China could hit discretionary auto purchases hard.",
    ],
  },
  {
    ticker: "AMD",
    name: "Advanced Micro Devices, Inc.",
    allocationPercentage: 0.16,
    currentPrice: 215.98,
    change1Y: 0.566, // ~ +68.2%
    marketCapUsd: 351_600_000_000, // 262.8B
    priceToSales: 11.15,
    iconURL: "https://logo.clearbit.com/amd.com",
    coverImageURL: "/ticker.jpeg",
    description:
      "Advanced Micro Devices designs high-performance CPUs, GPUs, and data-center accelerators used in PCs, gaming, cloud infrastructure, and AI workloads. The company has rapidly gained market share from Intel in CPUs and is now competing directly with NVIDIA in AI and data-center compute.",
    thesis: [
      "Strong multi-year share gains in CPU market against Intel, driven by superior architecture and efficiency.",
      "MI300 and future AI accelerators position AMD as the only credible alternative to NVIDIA for hyperscaler AI demand.",
      "Data-center segment is growing faster than consumer segments and carries significantly higher margins.",
      "Diversified business across gaming, CPUs, GPUs, embedded, and semi-custom reduces single-segment dependency.",
      "Leadership under Lisa Su has consistently delivered execution, roadmap clarity, and long-term shareholder value.",
    ],
    bearCase: [
      "AI GPU race is brutally competitive; AMD risks permanently trailing NVIDIA’s CUDA ecosystem and software moat.",
      "Data-center success relies heavily on hyperscaler adoption—any slowdown hits revenue disproportionately.",
      "PC and gaming markets are cyclical and may remain weak post-pandemic normalization.",
      "Margins could suffer if AMD must aggressively price its AI accelerators to win market share.",
      "Semiconductor supply-chain constraints or geopolitical tensions (especially in Taiwan) introduce systemic risk.",
    ],
  },
  {
    ticker: "RKLB",
    name: "Rocket Lab USA, Inc.",
    allocationPercentage: 0.25,
    currentPrice: 49.37,
    change1Y: 0.7648, // ~ +10.1%
    marketCapUsd: 26_370_000_000, // 2.5B
    priceToSales: 42.64,
    iconURL: "https://logo.clearbit.com/rocketlabusa.com",
    coverImageURL: "/ticker.jpeg",
    description:
      "Rocket Lab is a launch and space systems company focused on small and medium payloads, operating the Electron rocket and developing the larger Neutron launch vehicle.",
    thesis: [
      "One of the few proven orbital launch providers outside SpaceX with a strong track record in smallsat launches.",
      "Neutron could open a much larger addressable market if execution is successful.",
      "Vertical integration into spacecraft, components, and space systems diversifies revenue.",
      "Growing demand for constellation launches and space infrastructure plays into Rocket Lab’s strengths.",
    ],
    bearCase: [
      "SpaceX’s cost and cadence dominance could squeeze Rocket Lab’s pricing power.",
      "High capex and long payback periods create financing and dilution risk.",
      "Technical setbacks or launch failures could severely damage reputation and contracts.",
      "Government and defense budgets are cyclical and politically sensitive.",
    ],
  },
  {
    ticker: "TSLA",
    name: "Tesla, Inc.",
    allocationPercentage: 0.12,
    currentPrice: 454.5,
    change1Y: 0.29, // ~ -10.6%
    marketCapUsd: 1_510_000_000_000, // 570.0B
    priceToSales: 16.47,
    iconURL: "https://logo.clearbit.com/tesla.com",
    coverImageURL: "/ticker.jpeg",
    description:
      "Tesla is an electric vehicle and clean energy company producing EVs, battery storage solutions, and solar products, with a strong software and autonomy roadmap.",
    thesis: [
      "Scale advantage in EV manufacturing and vertically integrated supply chain.",
      "High-margin software opportunities (FSD, connectivity, insurance) on top of hardware base.",
      "Energy storage and grid solutions (Megapack, Powerwall) could become a major growth pillar.",
      "Brand strength and charging network provide a durable competitive edge in many markets.",
    ],
    bearCase: [
      "Global EV competition is intensifying, pressuring pricing and margins.",
      "Execution risk around autonomy; FSD may never reach the originally hyped potential.",
      "Key-man risk around Elon Musk’s decisions and distractions.",
      "Valuation historically embeds aggressive growth and profitability assumptions.",
    ],
  },
  {
    ticker: "INTC",
    name: "Intel Corporation",
    allocationPercentage: 0.05,
    currentPrice: 40.5,
    change1Y: 0.63, // ~ -22.1%
    marketCapUsd: 193_190_000_000, // 137.0B
    priceToSales: 3.71,
    iconURL: "https://logo.clearbit.com/intel.com",
    coverImageURL: "/ticker.jpeg",
    description:
      "Intel is a semiconductor company best known for x86 CPUs for PCs and servers, now investing heavily to regain process leadership and build a global foundry business.",
    thesis: [
      "Turnaround story: if process roadmap execution improves, Intel can regain competitiveness versus AMD and ARM.",
      "CHIPS Act subsidies and government support reduce net capex burden for fabs.",
      "Foundry services (IFS) could turn Intel into a strategic Western alternative to TSMC.",
      "PC and data center demand cycles could provide upside from depressed sentiment.",
    ],
    bearCase: [
      "Execution risk is enormous; repeated delays in process nodes have damaged credibility.",
      "Strong competition from AMD, Apple’s in-house silicon, and ARM server chips.",
      "Foundry business requires massive capital with uncertain returns.",
      "If AI workloads favor GPUs and accelerators, Intel’s traditional CPU dominance matters less.",
    ],
  },
  {
    ticker: "BABA",
    name: "Alibaba Group",
    allocationPercentage: 0.05,
    currentPrice: 157.4,
    change1Y: 0.81, // ~ -5.8%
    marketCapUsd: 378_590_000_000, // 195.0B
    priceToSales: 2.7,
    iconURL: "https://logo.clearbit.com/alibaba.com",
    coverImageURL: "/ticker.jpeg",
    description:
      "Alibaba is a Chinese technology conglomerate operating leading e-commerce marketplaces, cloud computing, logistics, and digital finance platforms.",
    thesis: [
      "Dominant position in Chinese e-commerce with Taobao and Tmall.",
      "Alibaba Cloud remains a key asset with room for margin expansion and growth.",
      "Valuation is depressed relative to historical multiples and global peers.",
      "Restructuring and spin-offs could unlock hidden value across the conglomerate.",
    ],
    bearCase: [
      "Regulatory and political risk in China is structurally high and hard to handicap.",
      "Competition from Pinduoduo, JD.com, and other platforms erodes market share.",
      "Macro weakness in China could cap consumer and business spending.",
      "VIE structure and listing risk for foreign investors remain a permanent overhang.",
    ],
  },
  {
    ticker: "PL",
    name: "Planet Labs PBC",
    allocationPercentage: 0.03,
    currentPrice: 12.94,
    change1Y: 2.081, // ~ -30.2%
    marketCapUsd: 4_000_000_000, // 0.9B
    priceToSales: 13.92,
    iconURL: "https://logo.clearbit.com/planet.com",
    coverImageURL: "/ticker.jpeg",
    description:
      "Planet Labs operates a large fleet of Earth-observation satellites, providing high-frequency imagery and geospatial data to commercial and government customers.",
    thesis: [
      "Unique daily imaging capability across the globe creates a differentiated data asset.",
      "Shift from selling raw imagery to higher-value analytics and SaaS-like subscriptions.",
      "Rising demand from climate monitoring, agriculture, defense, and intelligence use cases.",
      "High operating leverage potential if revenue scales faster than satellite costs.",
    ],
    bearCase: [
      "Still a small-cap, unproven path to sustained profitability.",
      "Competition from other Earth-observation providers and new entrants.",
      "Customer budgets (especially government/defense) can be lumpy and politically driven.",
      "If analytics stack underperforms, Planet risks remaining a lower-margin data seller.",
    ],
  },
  {
    ticker: "VRT",
    name: "Vertiv Holdings",
    allocationPercentage: 0.01,
    currentPrice: 182.54,
    change1Y: 0.415, // ~ +125.0%
    marketCapUsd: 69_790_000_000, // 30.0B
    priceToSales: 7.21,
    iconURL: "https://logo.clearbit.com/vertiv.com",
    coverImageURL: "/ticker.jpeg",
    description:
      "Vertiv provides critical digital infrastructure and services, including power, cooling, and IT management solutions for data centers and communication networks.",
    thesis: [
      "Direct beneficiary of AI and cloud data center capex boom (power + cooling needs).",
      "Mission-critical products with high switching costs and strong service revenue.",
      "Operational improvements and pricing power can expand margins over time.",
      "Secular growth in data usage and compute intensity supports long runway.",
    ],
    bearCase: [
      "Highly cyclical exposure to data center and telecom capex cycles.",
      "Execution risk on scaling manufacturing and supply chains in a tight environment.",
      "Competition from established industrial players could pressure pricing.",
      "If AI/data center investment slows, multiple compression could be brutal.",
    ],
  },
  {
    ticker: "FSLR",
    name: "First Solar, Inc.",
    allocationPercentage: 0.05,
    currentPrice: 257.28, // update whenever needed
    change1Y: 0.259, // ~ +142% over the past year
    marketCapUsd: 27_610_000_000, // ≈ $27.8B market cap
    priceToSales: 5.45,
    iconURL: "https://logo.clearbit.com/firstsolar.com",
    coverImageURL: "/ticker.jpeg",

    description:
      "First Solar is a leading U.S.-based solar technology company specializing in thin-film photovoltaic modules. Unlike traditional silicon-based competitors, FSLR uses cadmium telluride (CdTe) technology, enabling lower carbon footprint, competitive efficiency in hot climates, and strong cost advantages for utility-scale solar deployments.",

    thesis: [
      "Massive long-term demand for utility-scale solar driven by decarbonization, electrification, and global renewable mandates.",
      "Cadmium telluride (CdTe) thin-film technology offers cost, efficiency, and durability advantages in high-temperature and desert environments.",
      "Inflation Reduction Act (IRA) provides multi-year tax credits, manufacturing incentives, and financing tailwinds uniquely favorable to U.S. solar manufacturers.",
      "Record backlog and multi-year contracted revenue visibility reduce earnings volatility.",
      "Strong balance sheet, no China-related supply chain exposure, and expanding U.S. manufacturing capacity support premium valuation.",
    ],

    bearCase: [
      "High reliance on government incentives (e.g., IRA) introduces political and regulatory risk.",
      "Module efficiency still trails leading silicon competitors, requiring continuous R&D investment.",
      "Industry is highly cyclical and sensitive to interest rates and utility-scale project financing.",
      "Intensifying competition from low-cost Chinese manufacturers may pressure margins over time.",
      "Execution risk around scaling new factories and maintaining cost advantages.",
    ],
  },
  {
    ticker: "SMCI",
    name: "Super Micro Computer, Inc.",
    allocationPercentage: 0.02,
    currentPrice: 34.23,
    change1Y: -0.094, // ~ +285.5%
    marketCapUsd: 20_430_000_000, // 52.0B
    priceToSales: 1.06,
    iconURL: "https://logo.clearbit.com/supermicro.com",
    coverImageURL: "/ticker.jpeg",
    description:
      "Supermicro designs and manufactures high-performance servers and storage solutions, with a strong focus on AI, GPU-accelerated, and cloud data center workloads.",
    thesis: [
      "Front-line beneficiary of AI compute build-out with deep integration into NVIDIA and other accelerators.",
      "Modular, configurable systems allow rapid time-to-market and customization for hyperscalers and enterprises.",
      "Operating leverage from massive revenue growth can drive outsized earnings expansion.",
      "If AI infrastructure remains supply constrained, pricing and margins can stay elevated longer than expected.",
    ],
    bearCase: [
      "Extreme cyclicality if AI server demand normalizes or pauses.",
      "Customer and supplier concentration risk, especially dependence on NVIDIA.",
      "Competition from Dell, HPE, and OEM designs could intensify.",
      "Execution risk around scaling operations and maintaining quality at high volume.",
    ],
  },
  {
    ticker: "PYPL",
    name: "PayPal Holdings, Inc.",
    allocationPercentage: 0.03,
    currentPrice: 61.73,
    change1Y: -0.2868, // ~ -11.0%
    marketCapUsd: 57_760_000_000, // 62.5B
    priceToSales: 1.79,
    iconURL: "https://logo.clearbit.com/paypal.com",
    coverImageURL: "/ticker.jpeg",
    description:
      "PayPal is a digital payments company operating a global two-sided network, including PayPal, Braintree, Venmo, and other checkout and wallet solutions.",
    thesis: [
      "Large, established user base and merchant network create strong network effects.",
      "Braintree powers checkout for many large online platforms, providing high-volume processing.",
      "Monetization opportunities in Venmo, merchant services, and value-added financial products.",
      "Valuation has de-rated significantly, offering potential mean reversion if growth stabilizes.",
    ],
    bearCase: [
      "Intense competition from Apple Pay, Stripe, Adyen, and local payment methods.",
      "Take-rate compression as merchants push for lower fees and alternative rails.",
      "User growth and engagement have slowed versus pandemic highs.",
      "Regulatory and compliance risk in global payments and digital wallets.",
    ],
  },
];
