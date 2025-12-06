"use client";

import { budgetItems } from "@/data/budget";
import { BudgetItem, Segment } from "@/data/types";

// Exchange rates (approximate, as of 2025)
const EXCHANGE_RATES = {
  EUR: 1.44, // 1 EUR = 1.44 SGD
  CHF: 1.52, // 1 CHF = 1.52 SGD
  SGD: 1.0,
};

function convertToSGD(amount: number, currency: "EUR" | "SGD" | "CHF"): number {
  return amount * EXCHANGE_RATES[currency];
}

interface CategoryTotal {
  category: string;
  items: BudgetItem[];
  totalSGD: number;
}

interface SegmentSummary {
  segment: string;
  categoryTotals: CategoryTotal[];
  grandTotal: number;
}

export default function BudgetView() {
  // Group by segment
  const segmentGroups: Record<string, BudgetItem[]> = {
    paris: budgetItems.filter((item) => item.segment === "paris"),
    mallorca: budgetItems.filter((item) => item.segment === "mallorca"),
    swiss: budgetItems.filter((item) => item.segment === "swiss"),
    overall: budgetItems.filter((item) => item.segment === "overall"),
  };

  const calculateSegmentSummary = (
    segmentName: string,
    items: BudgetItem[]
  ): SegmentSummary => {
    // Group by category
    const categoryMap: Record<string, BudgetItem[]> = {};
    items.forEach((item) => {
      if (!categoryMap[item.category]) {
        categoryMap[item.category] = [];
      }
      categoryMap[item.category].push(item);
    });

    // Calculate category totals
    const categoryTotals: CategoryTotal[] = Object.entries(categoryMap).map(
      ([category, catItems]) => {
        const totalSGD = catItems.reduce(
          (sum, item) => sum + convertToSGD(item.amount, item.currency),
          0
        );
        return { category, items: catItems, totalSGD };
      }
    );

    // Calculate grand total
    const grandTotal = categoryTotals.reduce(
      (sum, cat) => sum + cat.totalSGD,
      0
    );

    return { segment: segmentName, categoryTotals, grandTotal };
  };

  const summaries = {
    paris: calculateSegmentSummary("法国（巴黎）", segmentGroups.paris),
    mallorca: calculateSegmentSummary(
      "西班牙（马略卡）",
      segmentGroups.mallorca
    ),
    swiss: calculateSegmentSummary("瑞士", segmentGroups.swiss),
    overall: calculateSegmentSummary("全程总计", segmentGroups.overall),
  };

  const totalBudget =
    summaries.paris.grandTotal +
    summaries.mallorca.grandTotal +
    summaries.swiss.grandTotal +
    summaries.overall.grandTotal;

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-gradient-to-br from-accent-soft to-bg-soft rounded-2xl p-6 border border-accent/30">
        <h2 className="text-xl font-bold text-accent mb-2">总预算概览</h2>
        <div className="text-4xl font-bold text-text mb-4">
          S$ {totalBudget.toLocaleString("en-US", { maximumFractionDigits: 0 })}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div>
            <div className="text-muted text-xs mb-1">法国（巴黎）</div>
            <div className="text-text font-semibold">
              S${" "}
              {summaries.paris.grandTotal.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </div>
          </div>
          <div>
            <div className="text-muted text-xs mb-1">西班牙（马略卡）</div>
            <div className="text-text font-semibold">
              S${" "}
              {summaries.mallorca.grandTotal.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </div>
          </div>
          <div>
            <div className="text-muted text-xs mb-1">瑞士</div>
            <div className="text-text font-semibold">
              S${" "}
              {summaries.swiss.grandTotal.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </div>
          </div>
          <div>
            <div className="text-muted text-xs mb-1">其他（机票/保险）</div>
            <div className="text-text font-semibold">
              S${" "}
              {summaries.overall.grandTotal.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(summaries).map(([key, summary]) => (
          <SegmentCard key={key} summary={summary} />
        ))}
      </div>

      {/* Exchange Rate Info */}
      <div className="text-xs text-muted bg-bg-soft rounded-lg p-4 border border-border">
        <div className="font-semibold mb-2">汇率参考（2025年估算）：</div>
        <div className="grid grid-cols-3 gap-2">
          <div>1 EUR = S$ {EXCHANGE_RATES.EUR}</div>
          <div>1 CHF = S$ {EXCHANGE_RATES.CHF}</div>
          <div>实际汇率以出行时为准</div>
        </div>
      </div>
    </div>
  );
}

function SegmentCard({ summary }: { summary: SegmentSummary }) {
  const segmentColors: Record<string, { bg: string; border: string; text: string }> = {
    "法国（巴黎）": {
      bg: "bg-rose-500/5",
      border: "border-rose-500/30",
      text: "text-rose-300",
    },
    "西班牙（马略卡）": {
      bg: "bg-sky-500/5",
      border: "border-sky-400/30",
      text: "text-sky-300",
    },
    瑞士: {
      bg: "bg-green-500/5",
      border: "border-green-500/30",
      text: "text-green-300",
    },
    全程总计: {
      bg: "bg-purple-500/5",
      border: "border-purple-400/30",
      text: "text-purple-300",
    },
  };

  const colors = segmentColors[summary.segment] || {
    bg: "bg-bg-soft",
    border: "border-border",
    text: "text-muted",
  };

  return (
    <div
      className={`${colors.bg} rounded-xl p-4 border ${colors.border} backdrop-blur-sm`}
    >
      <h3 className={`text-lg font-bold ${colors.text} mb-3`}>
        {summary.segment}
      </h3>

      <div className="space-y-3 mb-4">
        {summary.categoryTotals.map((catTotal, idx) => (
          <div key={idx} className="border-b border-border/50 pb-2">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-semibold text-text">
                {catTotal.category}
              </span>
              <span className="text-sm font-bold text-accent">
                S${" "}
                {catTotal.totalSGD.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
            <div className="space-y-1">
              {catTotal.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="flex justify-between items-start text-xs text-muted pl-2"
                >
                  <span className="flex-1">{item.description}</span>
                  <span className="ml-2 whitespace-nowrap">
                    {item.currency} {item.amount.toLocaleString()}
                    <span className="text-[10px] ml-1">
                      (S${" "}
                      {convertToSGD(item.amount, item.currency).toLocaleString(
                        "en-US",
                        { maximumFractionDigits: 0 }
                      )}
                      )
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-2 border-t-2 border-border">
        <span className="font-bold text-text">小计</span>
        <span className="font-bold text-lg text-accent">
          S${" "}
          {summary.grandTotal.toLocaleString("en-US", {
            maximumFractionDigits: 0,
          })}
        </span>
      </div>
    </div>
  );
}
