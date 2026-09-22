import { ArrowUpRight, Instagram, Linkedin, Dribbble } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems, SITE } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="container-luxe section-pad !pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <span className="eyebrow text-champagne">ELDOIR / Branding Studio</span>
            <h2 className="serif mt-5 max-w-xl text-4xl leading-[.95] sm:text-5xl">
              Crafting brands for a brighter tomorrow.
            </h2>
            <Link to="/contact" className="btn-light mt-7 !border-ivory/20 !bg-ivory/10 !text-ivory hover:!bg-ivory/20">
              Start Your Project <ArrowUpRight size={15} />
            </Link>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-champagne">Explore</p>
            <div className="mt-5 grid gap-3">
              {navItems.map(([to, label]) => (
                <Link key={to} to={to} className="text-sm text-ivory/65 transition hover:text-ivory">{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-champagne">Connect</p>
            <div className="mt-5 space-y-3 text-sm text-ivory/65">
              <a href={`mailto:${SITE.email}`} className="block hover:text-ivory">{SITE.email}</a>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="block hover:text-ivory">{SITE.phone}</a>
              <p>{SITE.city}</p>
            </div>
            <div className="mt-6 flex gap-2">
              {[Instagram, Linkedin, Dribbble].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-full border border-ivory/15 hover:bg-ivory/10">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-ivory/10 pt-5 text-[10px] uppercase tracking-[.14em] text-ivory/45 sm:flex-row">
          <span>© {new Date().getFullYear()} ELDOIR Branding Studio. All Rights Reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
