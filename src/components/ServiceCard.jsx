import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ item, compact = false }) {
  return (
    <article className="image-frame glass-dark group overflow-hidden rounded-[1.55rem] transition-all duration-500 hover:-translate-y-2 hover:border-champagne/35 hover:shadow-luxury">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={item.image} alt={item.title} className="img-cover opacity-75 group-hover:opacity-95" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-champagne/35 bg-obsidian/60 px-3 py-1 text-[9px] font-semibold tracking-[.18em] text-champagne backdrop-blur-md">
          {item.number}
        </span>
        <span className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-ivory/15 bg-obsidian/45 text-ivory backdrop-blur-md transition-all duration-300 group-hover:border-champagne group-hover:bg-champagne group-hover:text-obsidian">
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:rotate-[-20deg]" />
        </span>
        <div className="absolute bottom-5 left-5 right-5 text-ivory">
          <h3 className="serif text-3xl leading-none sm:text-[2rem]">{item.title}</h3>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-sm leading-6 text-taupe">{item.short}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.bullets.slice(0, 5).map((b) => (
            <span
              key={b}
              className="rounded-full border border-ivory/10 bg-ivory/5 px-3 py-1 text-[8px] font-semibold uppercase tracking-[.12em] text-taupe transition hover:border-champagne/35 hover:text-ivory"
            >
              {b}
            </span>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.16em] text-ivory transition hover:text-champagne"
        >
          Explore <ArrowRight size={14} className="transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
