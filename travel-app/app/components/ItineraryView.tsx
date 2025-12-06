"use client";

import { useState } from "react";
import { days } from "@/data/itinerary";
import { Segment } from "@/data/types";
import DayCard from "./DayCard";

type Filter = "all" | Segment;

export default function ItineraryView() {
  const [filter, setFilter] = useState<Filter>("all");
  const [isRGMode, setIsRGMode] = useState(true);

  const filteredDays = days.filter(
    (day) => filter === "all" || day.segment === filter
  );

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap gap-3 items-center justify-end mb-6">
        {/* City Filter */}
        <div className="flex flex-col gap-1 text-[12px] text-muted">
          <span>查看城市</span>
          <div className="relative inline-flex items-center">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as Filter)}
              className="bg-bg-soft text-text rounded-full border border-border px-2.5 py-1.5 pr-7 text-[13px] outline-none appearance-none cursor-pointer"
            >
              <option value="all">全部行程</option>
              <option value="paris">只看巴黎</option>
              <option value="mallorca">只看马略卡</option>
              <option value="swiss">只看瑞士</option>
            </select>
            <span className="absolute right-2.5 text-[10px] text-muted pointer-events-none">
              ▾
            </span>
          </div>
        </div>

        {/* RG Toggle */}
        <div className="flex flex-col gap-1 text-[12px] text-muted">
          <span>巴黎模式</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsRGMode(!isRGMode)}
              className={`w-11 h-[22px] rounded-full border p-0.5 flex items-center transition-all ${
                isRGMode
                  ? "bg-accent-soft border-accent"
                  : "bg-bg-soft border-border"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full transition-all ${
                  isRGMode
                    ? "translate-x-5 bg-green-200"
                    : "translate-x-0 bg-gray-200"
                }`}
              />
            </button>
            <span
              className={`text-[12px] ${
                isRGMode ? "text-accent font-semibold" : "text-muted"
              }`}
            >
              {isRGMode ? "法网观赛版本" : "非法网版本"}
            </span>
          </div>
        </div>
      </div>

      {/* Day Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredDays.map((day) => (
          <DayCard key={day.id} day={day} isRGMode={isRGMode} />
        ))}
      </div>
    </div>
  );
}
