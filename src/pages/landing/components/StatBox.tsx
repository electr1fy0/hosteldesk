import { StatBoxProps } from "../types";

export const StatBox = ({ label, value, trend }: StatBoxProps) => (
  <div className="space-y-1 bg-zinc-50/70 p-4 rounded-2xl border border-zinc-100/70">
    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
      {label}
    </p>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold tracking-tighter">{value}</span>
      <span
        className={`text-[10px] font-bold ${
          trend.includes("+")
            ? "text-green-500"
            : trend === "Stable"
            ? "text-blue-500"
            : "text-zinc-400"
        }`}
      >
        {trend}
      </span>
    </div>
  </div>
);
