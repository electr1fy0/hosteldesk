import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import {
  IconLayoutDashboard,
  IconShieldCheck,
  IconActivity,
  IconArrowRight,
} from "@tabler/icons-react";
import { StatBox } from "./StatBox";

export const Performance = () => {
  return (
    <section
      id="performance"
      className="my-48 rounded-[2.5rem] border border-zinc-200 bg-white p-12 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <IconLayoutDashboard size={400} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <AnimateOnScroll transition={{ duration: 0.5, delay: 0.2 }}>
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Numbers don't lie.
            </h2>
            <p className="text-zinc-500 mb-10 leading-relaxed">
              We track every metric that matters: resolution times,
              recurring failures, team response rates, student satisfaction.
              When something's broken, you'll know exactly where and why.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <StatBox
                label="Mean Time to Resolve"
                value="4.2h"
                trend="-12%"
              />
              <StatBox label="System Uptime" value="99.9%" trend="Stable" />
              <StatBox label="Tickets / Month" value="2.4k" trend="+5%" />
              <StatBox
                label="User Satisfaction"
                value="4.8/5"
                trend="High"
              />
            </div>
          </div>
        </AnimateOnScroll>
        <div className="flex flex-col justify-center gap-4">
          <AnimateOnScroll transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-between group hover:border-zinc-300 transition-all">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center">
                  <IconShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">
                    Security Audit Passed
                  </h4>
                  <p className="text-xs text-zinc-500">
                    End-to-end encrypted data storage.
                  </p>
                </div>
              </div>
              <IconArrowRight
                className="text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all"
                size={20}
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll transition={{ duration: 0.5, delay: 0.4 }}>
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-between group hover:border-zinc-300 transition-all">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center">
                  <IconActivity size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Active Monitoring</h4>
                  <p className="text-xs text-zinc-500">
                    Real-time resolution heartbeats.
                  </p>
                </div>
              </div>
              <IconArrowRight
                className="text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all"
                size={20}
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
