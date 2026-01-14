import React from "react";
import { IconTicket } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface HeaderProps {
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const Header = ({ handleScroll }: HeaderProps) => {
  return (
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
            asChild
          >
            <Link to="/auth">Sign In</Link>
          </Button>
          <Button
            size="sm"
            className="rounded-full px-5 bg-zinc-900 hover:bg-zinc-800 text-sm font-bold shadow-lg shadow-zinc-300/70 transition-all hover:shadow-xl"
            asChild
          >
            <Link to="/auth">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
