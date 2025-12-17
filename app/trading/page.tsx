import Link from "next/link";
import Image from "next/image";
import { WATCHLIST_DATA, OPEN_POSITIONS, PAST_TRADES } from "@/data/watchlist";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function DeepDives() {
  const totalTickers = WATCHLIST_DATA.length;

  const topPriority =
    WATCHLIST_DATA.length > 0
      ? WATCHLIST_DATA.reduce(
          (max, item) => (item.interestScore > max.interestScore ? item : max),
          WATCHLIST_DATA[0]
        )
      : null;

  const today = new Date();

  return (
    <div className="flex flex-col gap-8">
      {/* OPEN POSITIONS SECTION */}
      {/* OPEN POSITIONS SECTION */}
      <section className="rounded-2xl border border-gray-200 bg-white/70 shadow-sm backdrop-blur-sm p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-xs font-medium tracking-[0.28em] text-gray-500">
              OPEN POSITIONS
            </h2>
            <p className="text-xl font-light tracking-tight text-gray-900">
              Active trades & remaining hold time
            </p>
            <p className="text-sm text-gray-500">
              Overview of currently open positions, their expected holding
              period, and days remaining until planned exit.
            </p>
          </div>

          <div className="space-y-1 text-sm text-gray-700 text-right">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Positions open
            </p>
            <p className="text-base font-medium tabular-nums">
              {OPEN_POSITIONS.length}
            </p>
          </div>
        </div>

        <div className="mt-6 w-full overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 text-xs text-gray-500">
                <th className="py-3 pr-4 font-normal">Ticker</th>
                <th className="py-3 pr-4 font-normal">Open date</th>
                <th className="py-3 pr-4 font-normal">Expected hold</th>
                <th className="py-3 pr-4 font-normal">Days to close</th>
                <th className="py-3 pr-4 font-normal">Change from ATH</th>
              </tr>
            </thead>

            <tbody className="text-sm font-normal text-gray-900">
              {OPEN_POSITIONS.map((position) => {
                const openDate = new Date(position.openDate);
                const daysHeld = Math.floor(
                  (today.getTime() - openDate.getTime()) / (1000 * 60 * 60 * 24)
                );

                const rawRemaining = position.expectedHoldDays - daysHeld;
                const isOverdue = rawRemaining < 0;
                const daysRemaining = Math.max(rawRemaining, 0);

                const formattedOpenDate = openDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });

                // Match stock info from WATCHLIST
                const stock = WATCHLIST_DATA.find(
                  (item) => item.ticker === position.ticker
                );

                const changeFromATH = stock?.changeFromATH ?? null;
                const changeFromATHPercent =
                  changeFromATH !== null
                    ? (changeFromATH * 100).toFixed(1)
                    : null;

                return (
                  <tr
                    key={`${position.ticker}-${position.openDate}`}
                    className="border-b border-gray-100 last:border-b-0 transition-colors hover:bg-gray-50/60"
                  >
                    {/* LOGO + TICKER WITH LINK */}
                    <td className="py-4 pr-4">
                      <Link
                        href={`/deep-dive/${position.ticker}`}
                        className="flex items-center gap-3 transition-colors hover:text-blue-600"
                      >
                        {stock?.iconURL && (
                          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                            <Image
                              src={stock.iconURL}
                              alt={`${position.ticker} logo`}
                              fill
                              className="object-contain p-1.5"
                            />
                          </div>
                        )}
                        <div className="flex flex-col">
                          <span className="font-medium tabular-nums">
                            {position.ticker}
                          </span>
                          {stock?.name && (
                            <span className="text-xs text-gray-500">
                              {stock.name}
                            </span>
                          )}
                        </div>
                      </Link>
                    </td>

                    {/* OPEN DATE */}
                    <td className="py-4 pr-4 text-sm text-gray-700">
                      {formattedOpenDate}
                    </td>

                    {/* EXPECTED HOLD */}
                    <td className="py-4 pr-4 tabular-nums text-gray-700">
                      {position.expectedHoldDays} days
                    </td>

                    {/* DAYS REMAINING */}
                    <td className="py-4 pr-4">
                      <span
                        className={[
                          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tabular-nums",
                          isOverdue
                            ? "bg-red-50 text-red-700 ring-1 ring-red-100"
                            : "bg-blue-50 text-blue-700 ring-1 ring-blue-100",
                        ].join(" ")}
                      >
                        {isOverdue ? "Overdue" : `${daysRemaining} days left`}
                      </span>
                    </td>

                    {/* CHANGE FROM ATH */}
                    <td className="py-4 pr-4">
                      {changeFromATHPercent !== null &&
                      changeFromATH !== null ? (
                        <span
                          className={[
                            "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tabular-nums",
                            changeFromATH >= 0
                              ? "bg-green-50 text-green-700 ring-1 ring-green-100"
                              : "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
                          ].join(" ")}
                        >
                          {changeFromATH >= 0 ? "▲" : "▼"}{" "}
                          {changeFromATHPercent}%
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* WATCHLIST SECTION */}
      <section className="rounded-2xl border border-gray-200 bg-white/70 shadow-sm backdrop-blur-sm p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-xs font-medium tracking-[0.28em] text-gray-500">
              TRADING & WATCHLIST
            </h1>
            <p className="text-xl font-light tracking-tight text-gray-900">
              Potential opportunities & research list
            </p>
            <p className="text-sm text-gray-500">
              Equities I&apos;m monitoring for entries, adds, or exits. Click a
              ticker to open a deeper breakdown.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-700">
            <div className="space-y-1 text-right">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Symbols tracked
              </p>
              <p className="text-base font-medium tabular-nums">
                {totalTickers}
              </p>
            </div>

            {topPriority && (
              <div className="space-y-1 text-right">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Top priority
                </p>
                <p className="text-base font-medium tabular-nums">
                  {topPriority.ticker}
                </p>
                <p className="text-xs text-gray-500">
                  Interest {topPriority.interestScore.toFixed(1)}/10
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 w-full overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 text-xs text-gray-500">
                <th className="py-3 pr-4 font-normal">Ticker</th>
                <th className="py-3 pr-4 font-normal">Interest score</th>
                <th className="py-3 pr-4 font-normal">Current price</th>
                <th className="py-3 pr-4 font-normal">Change (1D)</th>
                <th className="py-3 pr-4 font-normal">Change from ATH</th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-900">
              {WATCHLIST_DATA.map((item) => {
                const isPositive1D = item.change1D >= 0;
                const formattedPrice = currencyFormatter.format(
                  item.currentPrice
                );
                const formattedChange1D = (item.change1D * 100).toFixed(2);

                const changeFromATH = item.changeFromATH ?? 0;
                const changeFromATHPercent = (changeFromATH * 100).toFixed(1);
                const isAboveOrAtATH = changeFromATH >= 0;

                const interestPercent = (item.interestScore * 10).toFixed(0);

                return (
                  <tr
                    key={item.ticker}
                    className="border-b border-gray-100 last:border-b-0 transition-colors hover:bg-gray-50/60 group"
                  >
                    <td className="py-4 pr-4">
                      <Link
                        href={`/deep-dive/${item.ticker}`}
                        className="flex items-center gap-3 transition-colors group-hover:text-blue-600"
                      >
                        {item.iconURL && (
                          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                            <Image
                              src={item.iconURL}
                              alt={`${item.ticker} logo`}
                              fill
                              className="object-contain p-1.5"
                            />
                          </div>
                        )}
                        <div className="flex flex-col">
                          <span className="font-medium tabular-nums">
                            {item.ticker}
                          </span>
                          {item.name && (
                            <span className="text-xs text-gray-500">
                              {item.name}
                            </span>
                          )}
                        </div>
                      </Link>
                    </td>

                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 text-left text-xs font-medium tabular-nums text-gray-700">
                          {item.interestScore.toFixed(1)}
                        </span>
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                          <div
                            className="h-full rounded-full bg-gray-900 group-hover:bg-blue-600 transition-all"
                            style={{
                              width: `${interestPercent}%`,
                            }}
                          />
                        </div>
                      </div>
                    </td>

                    <td className="py-4 pr-4 tabular-nums">{formattedPrice}</td>

                    <td className="py-4 pr-4">
                      <span
                        className={[
                          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tabular-nums",
                          isPositive1D
                            ? "bg-green-50 text-green-700 ring-1 ring-green-100"
                            : "bg-red-50 text-red-700 ring-1 ring-red-100",
                        ].join(" ")}
                      >
                        {isPositive1D ? "▲" : "▼"}{" "}
                        <span className="ml-1">
                          {isPositive1D ? "+" : ""}
                          {formattedChange1D}%
                        </span>
                      </span>
                    </td>

                    <td className="py-4 pr-4">
                      <span
                        className={[
                          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tabular-nums",
                          isAboveOrAtATH
                            ? "bg-green-50 text-green-700 ring-1 ring-green-100"
                            : "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
                        ].join(" ")}
                      >
                        {isAboveOrAtATH ? "▲" : "▼"}{" "}
                        <span className="ml-1">
                          {isAboveOrAtATH ? "+" : ""}
                          {changeFromATHPercent}%
                        </span>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* PAST TRADES SECTION */}
      <section className="rounded-2xl border border-gray-200 bg-white/70 shadow-sm backdrop-blur-sm p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-xs font-medium tracking-[0.28em] text-gray-500">
              PAST TRADES
            </h2>
            <p className="text-xl font-light tracking-tight text-gray-900">
              Trade history & performance
            </p>
            <p className="text-sm text-gray-500">
              A log of recently closed positions and their realized returns.
            </p>
          </div>

          <div className="space-y-1 text-right text-sm text-gray-700">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Positions closed
            </p>
            <p className="text-base font-medium tabular-nums">
              {PAST_TRADES.length}
            </p>
          </div>
        </div>

        <div className="mt-6 w-full overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 text-xs text-gray-500">
                <th className="py-3 pr-4 font-normal">Ticker</th>
                <th className="py-3 pr-4 font-normal">Entry date</th>
                <th className="py-3 pr-4 font-normal">Exit date</th>
                <th className="py-3 pr-4 font-normal">Days held</th>
                <th className="py-3 pr-4 font-normal">Leverage</th>
                <th className="py-3 pr-4 font-normal">Return</th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-900">
              {PAST_TRADES.map((trade) => {
                const stock = WATCHLIST_DATA.find(
                  (item) => item.ticker === trade.ticker
                );
                const returnPercent = (trade.returnPercent * 100).toFixed(1);
                const isPositive = trade.returnPercent >= 0;

                return (
                  <tr
                    key={`${trade.ticker}-${trade.entryDate}`}
                    className="border-b border-gray-100 last:border-b-0 transition-colors hover:bg-gray-50/60"
                  >
                    {/* TICKER */}
                    <td className="py-4 pr-4">
                      {stock ? (
                        <Link
                          href={`/deep-dive/${trade.ticker}`}
                          className="flex items-center gap-3 transition-colors hover:text-blue-600"
                        >
                          {stock.iconURL && (
                            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                              <Image
                                src={stock.iconURL}
                                alt={`${trade.ticker} logo`}
                                fill
                                className="object-contain p-1.5"
                              />
                            </div>
                          )}
                          <span className="font-medium tabular-nums">
                            {trade.ticker}
                          </span>
                        </Link>
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gray-100" />
                          <span className="font-medium tabular-nums">
                            {trade.ticker}
                          </span>
                        </div>
                      )}
                    </td>

                    {/* ENTRY DATE */}
                    <td className="py-4 pr-4 text-gray-700">
                      {trade.entryDate}
                    </td>

                    {/* EXIT DATE */}
                    <td className="py-4 pr-4 text-gray-700">
                      {trade.exitDate}
                    </td>

                    {/* DAYS HELD */}
                    <td className="py-4 pr-4 tabular-nums text-gray-700">
                      {trade.daysHeld} days
                    </td>

                    {/* LEVERAGE */}
                    <td className="py-4 pr-4 tabular-nums text-gray-700">
                      {trade.leverage}
                    </td>

                    {/* RETURN */}
                    <td className="py-4 pr-4">
                      <span
                        className={[
                          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tabular-nums",
                          isPositive
                            ? "bg-green-50 text-green-700 ring-1 ring-green-100"
                            : "bg-red-50 text-red-700 ring-1 ring-red-100",
                        ].join(" ")}
                      >
                        {isPositive ? "▲" : "▼"}{" "}
                        <span className="ml-1">
                          {isPositive ? "+" : ""}
                          {returnPercent}%
                        </span>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
