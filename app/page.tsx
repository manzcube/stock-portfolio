"use client";

import { useState, useMemo } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { currencyFormatter, formatMarketCapUsd } from "@/lib/utils";

const annualReturns = [
  { label: "Year 1", period: "23 Nov 2023 → 23 Nov 2024", returnPct: 45.1 },
  { label: "Year 2", period: "23 Nov 2024 → 23 Nov 2025", returnPct: 42.1 },
];

type SortKey =
  | "ticker"
  | "marketCapUsd"
  | "priceToSales"
  | "allocationPercentage"
  | "currentPrice"
  | "change1Y";

export default function Home() {
  const [sortKey, setSortKey] = useState<SortKey>("marketCapUsd");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const holdingsCount = PORTFOLIO_DATA.length;

  const sortedData = useMemo(() => {
    return [...PORTFOLIO_DATA].sort((a, b) => {
      const valueA = a[sortKey];
      const valueB = b[sortKey];

      if (typeof valueA === "number" && typeof valueB === "number") {
        return sortDir === "asc" ? valueA - valueB : valueB - valueA;
      }

      return sortDir === "asc"
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA));
    });
  }, [sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const sortArrow = (key: SortKey) =>
    sortKey === key ? (sortDir === "asc" ? "▲" : "▼") : "";

  const topHolding = PORTFOLIO_DATA.reduce(
    (max, item) =>
      item.allocationPercentage > max.allocationPercentage ? item : max,
    PORTFOLIO_DATA[0]
  );

  return (
    <div className="flex flex-col gap-8">
      <section className="rounded-2xl border border-gray-200 bg-white/70 shadow-sm backdrop-blur-sm p-6">
        {/* HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-xs font-medium tracking-[0.28em] text-gray-500">
              PORTFOLIO
            </h1>
            <p className="text-xl font-light tracking-tight text-gray-900">
              Equity allocation overview
            </p>
            <p className="text-sm text-gray-500">
              A snapshot of the stocks currently in the portfolio. Click a
              ticker to open a deep dive.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-700">
            <div className="space-y-1 text-right">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Holdings
              </p>
              <p className="text-base font-medium tabular-nums">
                {holdingsCount}
              </p>
            </div>

            {topHolding && (
              <div className="space-y-1 text-right">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Top holding
                </p>
                <p className="text-base font-medium tabular-nums">
                  {topHolding.ticker}
                </p>
                <p className="text-xs text-gray-500">
                  {Math.round(topHolding.allocationPercentage * 100)}%
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ANNUAL RETURNS */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {annualReturns.map((year) => (
            <div
              key={year.label}
              className="rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                  {year.label} performance
                </p>
                <p className="text-xs text-gray-500">{year.period}</p>
              </div>
              <p className="text-lg font-semibold tabular-nums text-emerald-600">
                {year.returnPct.toFixed(1)}%
              </p>
            </div>
          ))}
        </div>

        {/* TABLE */}
        <div className="mt-6 w-full overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 text-xs text-gray-500">
                <th
                  className="py-3 pr-4 font-normal cursor-pointer select-none"
                  onClick={() => toggleSort("ticker")}
                >
                  Ticker {sortArrow("ticker")}
                </th>

                <th
                  className="py-3 pr-4 font-normal cursor-pointer select-none"
                  onClick={() => toggleSort("marketCapUsd")}
                >
                  Market Cap {sortArrow("marketCapUsd")}
                </th>

                <th
                  className="py-3 pr-4 font-normal cursor-pointer select-none"
                  onClick={() => toggleSort("priceToSales")}
                >
                  P/S {sortArrow("priceToSales")}
                </th>

                <th
                  className="py-3 pr-4 font-normal cursor-pointer select-none"
                  onClick={() => toggleSort("allocationPercentage")}
                >
                  Allocation {sortArrow("allocationPercentage")}
                </th>

                {/* <th
                  className="py-3 pr-4 font-normal cursor-pointer select-none"
                  onClick={() => toggleSort("currentPrice")}
                >
                  Price {sortArrow("currentPrice")}
                </th> */}

                <th
                  className="py-3 pr-4 font-normal cursor-pointer select-none"
                  onClick={() => toggleSort("change1Y")}
                >
                  Change (1Y) {sortArrow("change1Y")}
                </th>
              </tr>
            </thead>

            <tbody className="text-sm font-normal text-gray-900">
              {sortedData.map((item) => {
                const formattedPrice = currencyFormatter.format(
                  item.currentPrice
                );
                const formattedMarketCap = formatMarketCapUsd(
                  item.marketCapUsd
                );

                const formattedItemChange = (item.change1Y * 100).toFixed(2);
                const isPositive = item.change1Y >= 0;

                const allocationPercent = Math.round(
                  item.allocationPercentage * 100
                );

                return (
                  <tr
                    key={item.ticker}
                    className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/60 transition-colors group"
                  >
                    {/* Ticker */}
                    <td className="py-4 pr-4">
                      <Link
                        href={`/deep-dive/${item.ticker}`}
                        className="flex items-center gap-3 group-hover:text-blue-600"
                      >
                        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                          <Image
                            src={item.iconURL}
                            alt={item.ticker}
                            fill
                            className="object-contain p-1.5"
                          />
                        </div>
                        <div>
                          <p className="font-medium tabular-nums">
                            {item.ticker}
                          </p>
                          <p className="text-xs text-gray-500">{item.name}</p>
                        </div>
                      </Link>
                    </td>

                    {/* Market Cap */}
                    <td className="py-4 pr-4 tabular-nums">
                      {formattedMarketCap}
                    </td>

                    {/* P/S */}
                    <td className="py-4 pr-4 tabular-nums">
                      {item.priceToSales.toFixed(2)}
                    </td>

                    {/* Allocation */}
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <span className="w-10 text-left text-xs font-medium tabular-nums text-gray-700">
                          {allocationPercent}%
                        </span>
                        <div className="h-1.5 flex-1 rounded-full bg-gray-100 overflow-hidden">
                          <div
                            className="h-full bg-gray-900 rounded-full group-hover:bg-blue-600 transition-all"
                            style={{ width: `${allocationPercent}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Price */}
                    {/* <td className="py-4 pr-4 tabular-nums">{formattedPrice}</td> */}

                    {/* Change 1Y */}
                    <td className="py-4 pr-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tabular-nums ${
                          isPositive
                            ? "bg-green-50 text-green-700 ring-1 ring-green-100"
                            : "bg-red-50 text-red-700 ring-1 ring-red-100"
                        }`}
                      >
                        {isPositive ? "▲" : "▼"}{" "}
                        <span className="ml-1">
                          {isPositive ? "+" : ""}
                          {formattedItemChange}%
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
