import types{ FooterColumnProps } from "../types";

export const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="space-y-4">
    <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link: string) => (
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
