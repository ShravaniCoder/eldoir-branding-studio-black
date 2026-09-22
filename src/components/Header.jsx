import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navItems, SITE } from "../data/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container-luxe">
        <div className={`glass mx-auto flex items-center justify-between rounded-full px-4 py-3 sm:px-5 ${scrolled ? "bg-obsidian/80" : "bg-obsidian/55"}`}>
          <Link to="/" className="group leading-none" onClick={() => setOpen(false)}>
            <span className="serif block text-xl font-semibold tracking-[0.16em] text-ivory transition group-hover:text-champagne sm:text-2xl">
              {SITE.name}
            </span>
            <span className="mt-1 block text-[7px] font-semibold uppercase tracking-[0.32em] text-taupe">
              {SITE.tagline}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative text-[9px] font-semibold uppercase tracking-[.17em] transition ${
                    isActive ? "text-champagne" : "text-ivory/60 hover:text-ivory"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="btn-primary hidden sm:inline-flex">
            Let's Create <ArrowUpRight size={13} />
          </Link>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ivory/10 bg-graphite text-ivory transition hover:border-champagne hover:text-champagne lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          className={`fixed inset-0 -z-10 bg-obsidian/80 backdrop-blur-md transition-opacity duration-500 lg:hidden ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`glass-dark absolute left-5 right-5 top-[calc(100%+6px)] origin-top rounded-[1.7rem] p-4 transition-all duration-500 sm:left-8 sm:right-8 lg:hidden ${
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-3 scale-[.98] opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-between border-b border-ivory/10 px-3 pb-4">
            <span className="eyebrow">ELDOIR / Menu</span>
            <span className="text-[8px] uppercase tracking-[.18em] text-taupe">Mumbai · India</span>
          </div>

          <nav className="grid gap-1">
            {navItems.map(([to, label], index) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-300 ${
                    isActive
                      ? "bg-champagne text-obsidian"
                      : "text-ivory hover:bg-ivory/5"
                  }`
                }
              >
                <span className="serif text-2xl">{label}</span>
                <span className="text-[8px] tracking-[.16em] text-champagne group-[.active]:text-obsidian">
                  0{index + 1}
                </span>
              </NavLink>
            ))}
          </nav>

          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 flex items-center justify-between rounded-2xl border border-ivory/10 bg-ivory/5 px-4 py-3 text-[9px] uppercase tracking-[.13em] text-taupe"
          >
            {SITE.email}
            <ArrowUpRight size={14} className="text-champagne" />
          </a>
        </div>
      </div>
    </header>
  );
}
