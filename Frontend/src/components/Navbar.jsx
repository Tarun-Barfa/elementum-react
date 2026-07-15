import { useState } from "react";

const links = ["Home", "Studio", "Services", "Contact", "FAQs"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-12 py-6">
      <span className="font-display font-semibold text-xl md:text-2xl">
        Elementum
      </span>

      <div className="hidden md:flex items-center gap-8 text-sm">
        {links.map((link) => (
          <a key={link} href="#" className="hover:text-coral transition-colors">
            {link}
          </a>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 w-7 md:hidden"
        aria-label="Toggle menu"
      >
        <span className="h-0.5 bg-black rounded-full" />
        <span className="h-0.5 bg-black rounded-full" />
      </button>

      <button className="hidden md:flex flex-col gap-1.5 w-7" aria-label="Menu">
        <span className="h-0.5 bg-black rounded-full" />
        <span className="h-0.5 bg-black rounded-full" />
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-6 md:hidden shadow-md z-50">
          {links.map((link) => (
            <a key={link} href="#" className="text-sm">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}