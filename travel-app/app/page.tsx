"use client";

import { useState } from "react";
import ItineraryView from "./components/ItineraryView";
import BudgetView from "./components/BudgetView";

type Tab = "itinerary" | "budget";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("itinerary");

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-6 pb-10">
      <header className="flex flex-wrap justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-[26px] font-semibold tracking-wide mb-1.5">
            2026 法西瑞之旅 · 每日行程表
          </h1>
          <p className="text-[13px] text-muted">
            05/31 – 06/15 · 巴黎 / 马略卡 / 瑞士 · 家庭旅行 + 网球主题
          </p>
          <div className="flex flex-wrap gap-2 mt-1.5 text-[11px]">
            <div className="px-2 py-0.5 rounded-full border border-muted/40 text-muted backdrop-blur-xl bg-bg/80">
              支持查看：全部 / 巴黎 / 马略卡 / 瑞士
            </div>
            <div className="px-2 py-0.5 rounded-full border border-muted/40 text-muted backdrop-blur-xl bg-bg/80">
              一键切换：巴黎「法网版本 / 非法网版本」
            </div>
            <div className="px-2 py-0.5 rounded-full border border-muted/40 text-muted backdrop-blur-xl bg-bg/80">
              预算追踪：按国家/地区自动汇总
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 border-b border-border pb-2">
        <button
          onClick={() => setActiveTab("itinerary")}
          className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-all ${
            activeTab === "itinerary"
              ? "bg-accent-soft border border-accent text-accent"
              : "text-muted hover:text-text hover:bg-bg-soft"
          }`}
        >
          行程安排
        </button>
        <button
          onClick={() => setActiveTab("budget")}
          className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-all ${
            activeTab === "budget"
              ? "bg-accent-soft border border-accent text-accent"
              : "text-muted hover:text-text hover:bg-bg-soft"
          }`}
        >
          预算追踪
        </button>
      </div>

      {/* Tab Content */}
      <main className="mt-2">
        {activeTab === "itinerary" && <ItineraryView />}
        {activeTab === "budget" && <BudgetView />}
      </main>

      <div className="mt-[18px] text-[11px] text-muted text-right">
        构建于 Next.js + Tailwind CSS · 部署于{" "}
        <span className="text-accent">Vercel</span>
      </div>
    </div>
  );
}
