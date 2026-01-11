import React from "react";
import {
  IconPackage,
  IconPlus,
  IconSearch,
  IconBolt,
  IconMapPin,
  IconClock,
  IconChevronRight,
  IconShieldCheck,
  IconMessage,
  IconHeart,
} from "@tabler/icons-react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center antialiased">
      {/* 1. Header */}
      <div className="w-full max-w-[1320px] px-6 pt-8 flex flex-col items-center">
        <header className="w-full max-w-[900px] bg-white/45 backdrop-blur-2xl border border-white/30 rounded-full py-3 px-7 mb-24 md:mb-[120px]">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3 font-semibold text-lg tracking-tight text-[#1a1a1a]">
              <IconPackage size={28} stroke={2} />
              <span>lostnfound</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium opacity-70">
              <a href="#how" className="hover:opacity-100 transition-opacity">
                How it works
              </a>
              <a href="#feed" className="hover:opacity-100 transition-opacity">
                Recent items
              </a>
            </div>
            <button className="bg-[#1f1f1f] text-white px-6 h-10 rounded-full text-sm font-medium hover:bg-black hover:-translate-y-0.5 hover:shadow-xl transition-all cursor-pointer">
              signup
            </button>
          </nav>
        </header>

        {/* 2. Hero Section */}
        <main className="w-full flex flex-col items-center">
          <section className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 mb-32">
            <h1 className="font-serif text-6xl md:text-[120px] leading-[0.85] font-normal mb-14 tracking-tighter text-[#1a1a1a] drop-shadow-[0_2px_20px_rgba(238,185,6,0.2)]">
              Where <span className="italic">lost</span> items <br />
              <span className="italic">find</span> their way back
            </h1>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button className="h-[64px] px-10 min-w-[220px] rounded-full bg-[#1f1f1f] text-white font-semibold text-lg hover:-translate-y-1 hover:bg-[#2f2f2f] hover:shadow-2xl transition-all cursor-pointer">
                I found something
              </button>
              <button className="h-[64px] px-10 min-w-[220px] rounded-full bg-white/35 border border-white/40 backdrop-blur-sm text-[#1a1a1a] font-semibold text-lg hover:-translate-y-1 hover:bg-white/60 hover:shadow-lg transition-all cursor-pointer">
                I lost something
              </button>
            </div>
          </section>

          {/* 3. Recent Activity "Live Feed" Preview */}
          <section id="feed" className="w-full max-w-[1100px] mb-32 reveal">
            <div className="flex justify-between items-end mb-8 px-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Recently found
                </h2>
                <p className="opacity-70 font-medium">
                  Items waiting to be claimed
                </p>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold bg-white/40 px-4 py-2 rounded-full hover:bg-white/60 transition-colors">
                View all <IconChevronRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ItemCard
                name="AirPods Pro"
                location="Main Library, 2nd Floor"
                time="20 mins ago"
                tag="Electronics"
              />
              <ItemCard
                name="Blue Hydro Flask"
                location="Student Center Gym"
                time="2 hours ago"
                tag="Personal"
              />
              <ItemCard
                name="Physics Textbook"
                location="Room 402, Science Block"
                time="5 hours ago"
                tag="Books"
              />
            </div>
          </section>

          {/* 4. The Bento Content Area */}
          <section
            id="how"
            className="w-full bg-white/20 border border-white/30 rounded-t-[64px] p-12 md:p-20 flex flex-col items-center reveal"
          >
            <div className="max-w-[1024px] w-full flex flex-col md:flex-row gap-12 justify-between items-start mb-24">
              <h2 className="flex-1 text-5xl md:text-[72px] font-semibold leading-[0.9] tracking-tight">
                Campus safety <br /> in your pocket
              </h2>
              <div className="flex-1">
                <p className="text-xl font-medium opacity-80 mb-6 leading-relaxed">
                  We've automated the awkward "did anyone find my..." WhatsApp
                  messages. A centralized hub for every lost item on campus.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/10">
                  <div>
                    <span className="block text-4xl font-bold italic font-serif">
                      85%
                    </span>
                    <span className="text-sm opacity-60 font-bold uppercase tracking-wider">
                      Return Rate
                    </span>
                  </div>
                  <div>
                    <span className="block text-4xl font-bold italic font-serif">
                      12m
                    </span>
                    <span className="text-sm opacity-60 font-bold uppercase tracking-wider">
                      Avg. Return Time
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Features Bento */}
            <div className="max-w-[1024px] w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
              <FeatureCard
                icon={<IconPlus size={24} />}
                title="Post in seconds"
                description="Snap a photo, add a location tag, and hit post. It's that simple."
              />
              <FeatureCard
                icon={<IconSearch size={24} />}
                title="Smart Filtering"
                description="Narrow down results by building, floor, or item category."
              />
              <FeatureCard
                icon={<IconShieldCheck size={24} />}
                title="Verified Claims"
                description="Security questions ensure items go back to their rightful owners."
              />
            </div>

            {/* Quote / Trust Section */}
            <div className="max-w-[800px] text-center mb-20 reveal">
              <IconHeart
                size={48}
                className="mx-auto mb-8 opacity-20"
                fill="currentColor"
              />
              <blockquote className="font-serif text-3xl md:text-4xl italic leading-snug mb-8">
                "I found my keys in under 10 minutes. This app is a lifesaver
                for anyone as forgetful as I am."
              </blockquote>
              <div className="font-bold text-sm tracking-widest uppercase opacity-60">
                — Alex, Senior CS Student
              </div>
            </div>
          </section>
        </main>

        {/* 5. Footer */}
        <footer className="w-full max-w-[1024px] py-20 px-6 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-bold text-xl">
            <IconPackage size={24} />
            <span>lostnfound</span>
          </div>
          <div className="flex gap-10 text-sm font-bold opacity-60">
            <a
              href="#"
              className="hover:opacity-100 transition-opacity underline decoration-2 underline-offset-4"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:opacity-100 transition-opacity underline decoration-2 underline-offset-4"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:opacity-100 transition-opacity underline decoration-2 underline-offset-4"
            >
              Support
            </a>
          </div>
          <p className="text-sm font-medium opacity-40">
            © 2026 Campus Network. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

/* Sub-component: Recent Item Card */
const ItemCard = ({
  name,
  location,
  time,
  tag,
}: {
  name: string;
  location: string;
  time: string;
  tag: string;
}) => (
  <div className="bg-white/40 border border-white/50 p-6 rounded-[28px] hover:bg-white/60 transition-all group">
    <div className="mb-4 inline-block px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest">
      {tag}
    </div>
    <h3 className="text-xl font-bold mb-4">{name}</h3>
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm opacity-70">
        <IconMapPin size={16} /> {location}
      </div>
      <div className="flex items-center gap-2 text-sm opacity-70">
        <IconClock size={16} /> {time}
      </div>
    </div>
    <button className="mt-6 w-full py-3 bg-white border border-black/5 rounded-2xl font-bold text-sm group-hover:bg-black group-hover:text-white transition-all">
      Is this yours?
    </button>
  </div>
);

/* Sub-component: Feature Bento Card */
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="group p-10 rounded-[40px] bg-white/45 backdrop-blur-2xl border border-white/30 text-left flex flex-col gap-6 hover:bg-white transition-all duration-500">
    <div className="w-14 h-14 rounded-2xl bg-[#eeb906] flex items-center justify-center text-[#1a1a1a] group-hover:rotate-12 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className="text-base font-medium opacity-70 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default HomePage;
