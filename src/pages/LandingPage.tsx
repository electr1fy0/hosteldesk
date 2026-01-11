import React from "react";
import {
  IconTicket,
  IconArrowRight,
  IconBolt,
  IconFingerprint,
  IconDeviceMobile,
  IconSearch,
  IconCircleCheck,
  IconAlertCircle,
  IconDots,
  IconPlus,
  IconLayoutDashboard,
  IconChartBar,
  IconShieldCheck,
  IconActivity,
  IconClock,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import { motion } from "motion/react";

const HostelDesk = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const top = targetElement.offsetTop - 80; // Adjusted for sticky header
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans antialiased">
      {/* The "Linear" Background Layering */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_50%)] pointer-events-none" />
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/30 bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3 font-bold tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white shadow-lg shadow-zinc-200">
              <IconTicket size={20} stroke={2} />
            </div>
            <span className="text-lg">HostelDesk</span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {[
              { label: "Product", href: "#product" },
              { label: "Features", href: "#features" },
              { label: "Performance", href: "#performance" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 px-3 py-2 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-lg text-sm font-medium hover:text-zinc-900"
            >
              Sign in
            </Button>
            <Button
              size="sm"
              className="rounded-full px-5 bg-zinc-900 hover:bg-zinc-800 text-sm font-bold shadow-lg shadow-zinc-300/70 transition-all hover:shadow-xl"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-6 pt-24 pb-40">
        {/* Hero Section */}
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

        {/* Product Preview - Complex UI Display */}
        <AnimateOnScroll>
          <div id="product" className="group relative my-48">
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-2xl">
              {/* Window Controls */}
              <div className="border-b border-zinc-100 bg-zinc-50/50 px-6 py-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-zinc-200" />
                  <div className="h-3 w-3 rounded-full bg-zinc-200" />
                  <div className="h-3 w-3 rounded-full bg-zinc-200" />
                </div>
                <div className="flex items-center gap-4">
                  <Tabs defaultValue="active" className="w-[240px]">
                    <TabsList className="h-8 bg-zinc-200/50">
                      <TabsTrigger
                        value="active"
                        className="text-[10px] uppercase font-bold tracking-widest"
                      >
                        Active Issues
                      </TabsTrigger>
                      <TabsTrigger
                        value="resolved"
                        className="text-[10px] uppercase font-bold tracking-widest"
                      >
                        Resolved
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <div className="flex items-center gap-3">
                  <IconSearch size={16} className="text-zinc-400" />
                  <IconDots size={16} className="text-zinc-400" />
                </div>
              </div>

              {/* Content Area */}
              <div className="flex h-[600px]">
                {/* Sidebar */}
                <div className="w-64 border-r border-zinc-100 p-6 hidden lg:block">
                  <div className="space-y-6">
                    <div>
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4 block">
                        Filters
                      </label>
                      <div className="space-y-2">
                        <SidebarItem
                          icon={<IconAlertCircle size={16} />}
                          label="Critical"
                          count="4"
                          active
                        />
                        <SidebarItem
                          icon={<IconClock size={16} />}
                          label="Pending"
                          count="12"
                        />
                        <SidebarItem
                          icon={<IconCircleCheck size={16} />}
                          label="Completed"
                          count="148"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4 block">
                        Teams
                      </label>
                      <div className="space-y-2 text-sm font-medium text-zinc-600">
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-zinc-50 cursor-pointer">
                          <div className="h-2 w-2 rounded-full bg-orange-400" />{" "}
                          Electrical
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-zinc-50 cursor-pointer">
                          <div className="h-2 w-2 rounded-full bg-blue-400" />{" "}
                          Plumbing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ticket Grid */}
                <div className="flex-1 overflow-y-auto p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TicketCard
                      id="T-4092"
                      title="Elevator B Failure"
                      block="Block Q"
                      severity="High"
                      time="12m"
                      status="escalated"
                    />
                    <TicketCard
                      id="T-4091"
                      title="Water Leakage R-402"
                      block="Block L"
                      severity="Medium"
                      time="45m"
                      status="pending"
                    />
                    <TicketCard
                      id="T-4088"
                      title="Wi-Fi AP Offline"
                      block="Block N"
                      severity="High"
                      time="1h"
                      status="in-progress"
                    />
                    <TicketCard
                      id="T-4085"
                      title="AC Gas Refill"
                      block="Block Q"
                      severity="Low"
                      time="3h"
                      status="pending"
                    />
                    <TicketCard
                      id="T-4082"
                      title="Switchboard Spark"
                      block="Block M"
                      severity="High"
                      time="5h"
                      status="escalated"
                    />
                    <TicketCard
                      id="T-4080"
                      title="Geyser Repair"
                      block="Block L"
                      severity="Medium"
                      time="6h"
                      status="in-progress"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Feature Bento Grid */}
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

        {/* How It Works */}
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

        {/* The System Stats - Data Heavy */}
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
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/60 bg-white py-24 relative z-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="col-span-2 max-w-sm">
              <div className="flex items-center gap-2 font-bold text-zinc-900 mb-6">
                <div className="h-7 w-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
                  <IconTicket size={16} />
                </div>
                HostelDesk
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Rebuilding campus infrastructure software from the ground up.
                Focused on speed, precision, and student experience.
              </p>
            </div>
            <FooterColumn
              title="Product"
              links={["Analytics", "Escalation", "Pricing"]}
            />
            <FooterColumn
              title="Company"
              links={["Changelog", "Security", "Privacy", "About"]}
            />
          </div>
          <div className="mt-20 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-400 font-medium">
              © 2026 HostelDesk Systems Inc.
            </p>
            <div className="flex gap-2 items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-zinc-500">
                All Systems Operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- Subcomponents for Precision --- */

const SidebarItem = ({ icon, label, count, active = false }: any) => (
  <div
    className={`flex items-center justify-between p-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${active ? "bg-zinc-100 text-zinc-900" : "text-zinc-500 hover:bg-zinc-50/70"}`}
  >
    <div className="flex items-center gap-3">
      {icon}
      {label}
    </div>
    <span
      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${active ? "bg-zinc-200/70" : "bg-zinc-100"}`}
    >
      {count}
    </span>
  </div>
);

const TicketCard = ({ id, title, block, severity, time, status }: any) => (
  <div className="p-5 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-100/70 hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-100 transition-all group">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
        {id}
      </span>
      <Badge
        variant="outline"
        className={`text-[10px] font-bold bg-white uppercase ${status === "escalated" ? "text-red-500 border-red-100" : "text-zinc-500"}`}
      >
        {status}
      </Badge>
    </div>
    <h4 className="text-sm font-bold text-zinc-900 mb-1 group-hover:text-blue-600 transition-colors">
      {title}
    </h4>
    <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-400 uppercase tracking-tight">
      <span>{block}</span>
      <span className="h-1 w-1 rounded-full bg-zinc-300" />
      <span>{severity}</span>
      <span className="h-1 w-1 rounded-full bg-zinc-300" />
      <span>{time} ago</span>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, desc, bg }: any) => (
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

const StatBox = ({ label, value, trend }: any) => (
  <div className="space-y-1 bg-zinc-50/70 p-4 rounded-2xl border border-zinc-100/70">
    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
      {label}
    </p>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold tracking-tighter">{value}</span>
      <span
        className={`text-[10px] font-bold ${trend.includes("+") ? "text-green-500" : trend === "Stable" ? "text-blue-500" : "text-zinc-400"}`}
      >
        {trend}
      </span>
    </div>
  </div>
);

const FooterColumn = ({ title, links }: any) => (
  <div className="space-y-4">
    <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ProcessCard = ({
  number,
  title,
  description,
  icon,
  isTimeline = false,
}: any) =>
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

export default HostelDesk;
