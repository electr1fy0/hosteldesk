import { ProcessCardProps } from "../types";

export const ProcessCard = ({
  number,
  title,
  description,
  icon,
  isTimeline = false,
}: ProcessCardProps) =>
  isTimeline ? (
    <div className="relative pl-16">
      <div className="absolute left-0 top-1 h-12 w-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-lg shadow-xl ring-8 ring-white">
        {number}
      </div>
      <div className="p-8 rounded-[2rem] border border-zinc-200 bg-white hover:border-zinc-300/70 hover:shadow-2xl hover:shadow-zinc-100 transition-all group hover:-translate-y-1">
        <div className="h-14 w-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
      </div>
    </div>
  ) : (
    <div className="relative p-8 rounded-[2rem] border border-zinc-200 bg-white hover:border-zinc-300 transition-all group">
      <div className="absolute -top-4 -left-4 h-12 w-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center font-bold text-lg shadow-xl">
        {number}
      </div>
      <div className="h-14 w-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
    </div>
  );
