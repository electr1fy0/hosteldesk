import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import { ProcessCard } from "./ProcessCard";
import { IconPlus, IconClock, IconCircleCheck } from "@tabler/icons-react";

export const HowItWorks = () => {
  return (
    <section className="my-48">
      <div className="text-center mb-20">
        <AnimateOnScroll transition={{ duration: 0.5, delay: 0.2 }}>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Three steps. Zero friction.
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll transition={{ duration: 0.5, delay: 0.3 }}>
          <p className="text-zinc-500 text-lg">
            From complaint to resolution, every step is tracked.
          </p>
        </AnimateOnScroll>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="relative space-y-12">
          <div className="absolute left-5 top-5 h-full w-0.5 bg-zinc-200" />
          <AnimateOnScroll transition={{ duration: 0.5, delay: 0.2 }}>
            <ProcessCard
              number="01"
              title="Student reports"
              description="Snap a photo, describe the issue, hit submit. The system validates identity, checks for duplicates, and assigns priority automatically."
              icon={<IconPlus size={24} />}
              isTimeline
            />
          </AnimateOnScroll>
          <AnimateOnScroll transition={{ duration: 0.5, delay: 0.3 }}>
            <ProcessCard
              number="02"
              title="Team responds"
              description="Technicians see the ticket instantly. They acknowledge, provide ETAs, and update status in real-time. Clock's ticking."
              icon={<IconClock size={24} />}
              isTimeline
            />
          </AnimateOnScroll>
          <AnimateOnScroll transition={{ duration: 0.5, delay: 0.4 }}>
            <ProcessCard
              number="03"
              title="Issue resolves"
              description="Student confirms resolution or escalates if ignored. Either way, the data gets logged. Patterns emerge. Management can't hide from the truth."
              icon={<IconCircleCheck size={24} />}
              isTimeline
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
