import { Day } from "@/data/types";

interface DayCardProps {
  day: Day;
  isRGMode: boolean;
}

export default function DayCard({ day, isRGMode }: DayCardProps) {
  const activities =
    day.segment === "paris" && (day.activities_rg || day.activities_no_rg)
      ? isRGMode
        ? day.activities_rg
        : day.activities_no_rg
      : day.activities;

  const hasRGVariants = day.segment === "paris" && (day.activities_rg || day.activities_no_rg);

  const segmentColors = {
    paris: {
      border: "border-rose-500/80",
      text: "text-rose-200",
    },
    mallorca: {
      border: "border-sky-400/80",
      text: "text-sky-100",
    },
    swiss: {
      border: "border-green-500/80",
      text: "text-green-200",
    },
  };

  const colors = segmentColors[day.segment];

  return (
    <div className="bg-bg/90 rounded-[18px] p-3.5 pb-2.5 border border-border/85 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
      {/* Day Pill */}
      <div className="flex items-center gap-1.5 text-[11px] text-muted mb-1">
        <span className="px-1.5 py-0.5 rounded-full border border-muted/30">
          Day {day.id}
        </span>
        <span className="px-1.5 py-0.5 rounded-full border border-muted/30">
          {day.date}
        </span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-start gap-1.5 mb-1.5">
        <div>
          <h2 className="text-[16px] font-semibold leading-tight">
            {day.title}
          </h2>
          <p className="text-[12px] text-muted mt-0.5">{day.city}</p>
        </div>
        <div
          className={`text-[11px] px-2 py-0.5 rounded-full border ${colors.border} ${colors.text} whitespace-nowrap`}
        >
          {day.segment === "paris"
            ? "巴黎"
            : day.segment === "mallorca"
            ? "马略卡"
            : "瑞士"}
        </div>
      </div>

      {/* Body */}
      <div className="mt-1.5 border-t border-dashed border-border/80 pt-1.5 text-[13px]">
        {/* Meta */}
        {day.meta && (
          <div className="text-[11px] text-muted mb-1">{day.meta}</div>
        )}

        {/* Tags */}
        {day.tags && day.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1 mb-1.5 text-[11px]">
            {day.tags.map((tag, i) => (
              <div
                key={i}
                className="px-1.5 py-0.5 rounded-full border border-border/90 text-muted"
              >
                {tag}
              </div>
            ))}
          </div>
        )}

        {/* Section Title */}
        <div className="text-[12px] font-semibold text-muted mt-2 mb-1 flex items-center gap-2">
          行程安排
          {hasRGVariants && (
            <span className="text-[11px] px-1.5 py-0.5 rounded-full border border-emerald-500/50 text-emerald-300">
              {isRGMode ? "当前：法网观赛版本" : "当前：非法网版本"}
            </span>
          )}
        </div>

        {/* Activities List */}
        <ul className="pl-4 space-y-0.5">
          {activities?.map((activity, i) => (
            <li key={i} className="leading-[1.45] text-[13px]">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
