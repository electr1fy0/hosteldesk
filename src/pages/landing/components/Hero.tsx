import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";

export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center text-center mb-48">
      <AnimateOnScroll>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-[11px] font-bold text-zinc-500 mb-8 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          Now in Public Beta
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll transition={{ duration: 0.5, delay: 0.2 }}>
        <h1 className="max-w-8xl text-6xl font-bold tracking-[-0.05em] leading-[0.95] md:text-9xl mb-8">
          Stop letting issues <br />
          <span className="text-zinc-300">slip through the cracks.</span>
        </h1>
      </AnimateOnScroll>
      <AnimateOnScroll transition={{ duration: 0.5, delay: 0.3 }}>
        <p className="max-w-2xl text-base md:text-lg leading-relaxed mb-10">
          Campus infrastructure breaks. Students complain. Nothing gets
          fixed. HostelDesk makes the entire chain visible, trackable, and
          impossible to ignore.
        </p>
      </AnimateOnScroll>
      <AnimateOnScroll transition={{ duration: 0.5, delay: 0.4 }}>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="h-14 rounded-2xl px-10 bg-zinc-900 text-base font-bold shadow-2xl shadow-zinc-400/70 transition-transform hover:shadow-2xl"
          >
            Start Reporting
            <IconArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </AnimateOnScroll>
    </div>
  );
};
