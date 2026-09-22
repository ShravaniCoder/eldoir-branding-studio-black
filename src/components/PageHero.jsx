import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../data/siteData";

export default function PageHero({ eyebrow, title, text, image = images.hero, actions = true }) {
  return (
    <section className="grain relative min-h-[82vh] overflow-hidden bg-obsidian pt-28 text-ivory">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-[2s] hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-espresso/85 to-obsidian/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />
      <div className="glow-orb -right-24 top-28" />

      <div className="container-luxe relative z-10 flex min-h-[82vh] items-end pb-14 sm:pb-20 lg:pb-24">
        <div className="page-transition max-w-5xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="serif mt-5 max-w-5xl text-5xl leading-[.84] sm:text-7xl lg:text-[6.5rem]">{title}</h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-ivory/65 sm:text-base">{text}</p>

          {actions && (
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Start Your Project <ArrowUpRight size={14} />
              </Link>
              <Link to="/work" className="btn-light">
                Explore Our Work <ArrowDown size={14} />
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="container-luxe absolute bottom-5 left-0 right-0 hidden sm:block">
        <div className="flex items-center justify-between text-[8px] uppercase tracking-[.24em] text-taupe">
          <span>ELDOIR / {eyebrow?.split("/")[0]?.trim()}</span>
          <span className="flex items-center gap-3"><i className="h-px w-10 bg-champagne/50" /> Explore</span>
        </div>
      </div>
    </section>
  );
}
