import { IconTicket } from "@tabler/icons-react";
import { FooterColumn } from "./FooterColumn";

export const Footer = () => {
  return (
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
  );
};
