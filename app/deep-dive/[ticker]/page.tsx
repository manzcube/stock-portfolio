import { PORTFOLIO_DATA } from "@/data/portfolio";
import { WATCHLIST_DATA } from "@/data/watchlist";

interface PageProps {
  params: {
    ticker: string;
  };
}

export default function DeepDivePage({ params }: PageProps) {
  const tickerParam = params.ticker;
  const stock =
    PORTFOLIO_DATA.find(
      (t) => t.ticker.toLowerCase() === tickerParam.toLowerCase()
    ) ||
    WATCHLIST_DATA.find(
      (t) => t.ticker.toLowerCase() === tickerParam.toLowerCase()
    );

  if (!stock) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-normal text-gray-600">Ticker Not Found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto pb-20">
      {/* <div className="relative w-[24vw] h-[50vh] mb-8 bg-gray-100 overflow-hidden rounded-lg">
        <Image
          src={`/${stock.ticker.toLowerCase()}.png`}
          alt={`${stock.name} cover`}
          fill
          className="object-cover"
          priority
        />
      </div> */}

      {/* Header and Info */}
      <div className="mb-8 px-4 sm:px-0">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
          {stock.ticker}
        </h1>
        <h2 className="text-sm font-light text-gray-500">{stock.name}</h2>
      </div>

      {/* Company Briefing */}
      <section className="mb-12 px-4 sm:px-0">
        <h3 className="text-md font-semibold text-gray-900 mb-4">
          Company Briefing
        </h3>
        <p className="text-sm font-light leading-relaxed text-gray-700">
          {stock.description}
        </p>
      </section>

      {/* The Thesis */}
      <section className="py-8 border-t border-gray-100 px-4 sm:px-0">
        <h3 className="text-md font-semibold text-gray-900 mb-6">
          The Thesis (Why I Like It) 🚀
        </h3>
        <ul className="space-y-4 text-sm font-light text-gray-700">
          <li>
            • Strong market position with significant competitive moat in the
            industry.
          </li>
          <li>
            • Consistent revenue growth over the last 5 years exceeding 15% YoY.
          </li>
          <li>
            • Innovative product pipeline that addresses emerging market needs.
          </li>
          <li>
            • Solid balance sheet with healthy cash flow and low debt levels.
          </li>
          <li>
            • Experienced management team with a proven track record of
            execution.
          </li>
        </ul>
      </section>

      {/* The Bear Case */}
      <section className="py-8 border-t border-gray-100 px-4 sm:px-0">
        <h3 className="text-md font-semibold text-gray-900 mb-6">
          The Bear Case (What I Don&apos;t Like) 🛑
        </h3>
        <ul className="space-y-4 text-sm font-light text-gray-700">
          <li>• Potential regulatory headwinds in key operating regions.</li>
          <li>
            • Increasing competition from both established players and new
            entrants.
          </li>
          <li>
            • Valuation multiples are currently at the higher end of historical
            averages.
          </li>
          <li>
            • Supply chain dependencies that could pose risks during global
            disruptions.
          </li>
          <li>
            • Macroeconomic sensitivity that could impact consumer spending
            patterns.
          </li>
        </ul>
      </section>
    </div>
  );
}
