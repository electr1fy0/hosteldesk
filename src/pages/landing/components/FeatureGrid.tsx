import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import {
  IconBolt,
  IconFingerprint,
  IconDeviceMobile,
  IconChartBar,
} from "@tabler/icons-react";
import { FeatureCard } from "./FeatureCard";

export const FeatureGrid = () => {
  return (
    <section id="features" className="my-48">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="max-w-xl">
          <AnimateOnScroll transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Built to eliminate the bullshit.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll transition={{ duration: 0.5, delay: 0.3 }}>
            <p className="text-zinc-500">
              No "we'll look into it" responses. No tickets vanishing into
              the void. Every action is logged, timed, and accountable.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <AnimateOnScroll
          className="md:col-span-8"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FeatureCard
            icon={<IconBolt className="text-zinc-900" />}
            title="Auto-escalation that actually works"
            desc="Critical issue ignored for 2 hours? It climbs the ladder automatically. No meetings, no approvals, no bureaucracy. The system enforces what managers won't."
            bg="bg-white border-zinc-200"
          />
        </AnimateOnScroll>
        <AnimateOnScroll
          className="md:col-span-4"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FeatureCard
            icon={<IconFingerprint className="text-zinc-900" />}
            title="Real complaints only"
            desc="Every ticket requires verified student ID. Spam filters, duplicate detection, and phantom complaint blockers built in."
            bg="bg-white border-zinc-200"
          />
        </AnimateOnScroll>
        <AnimateOnScroll
          className="md:col-span-4"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FeatureCard
            icon={<IconDeviceMobile className="text-zinc-900" />}
            title="Works anywhere"
            desc="Install once, works offline. Progressive web app that syncs the second you're back online. No app store approval needed."
            bg="bg-white border-zinc-200"
          />
        </AnimateOnScroll>
        <AnimateOnScroll
          className="md:col-span-8"
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <FeatureCard
            icon={<IconChartBar className="text-zinc-900" />}
            title="Data that tells the truth"
            desc="When Block Q logs 50 electrical failures in a month, the system flags it for a full infrastructure audit. Patterns emerge. Root causes surface."
            bg="bg-white border-zinc-200"
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
};
