import { FeatureCardProps } from "../types";

export const FeatureCard = ({ icon, title, desc, bg }: FeatureCardProps) => (
  <div
    className={`${bg} p-8 rounded-[2rem] border transition-all group flex flex-col h-full relative z-10`}
  >
    <div className="h-12 w-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center mb-6 shadow-sm transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
    <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
  </div>
);
