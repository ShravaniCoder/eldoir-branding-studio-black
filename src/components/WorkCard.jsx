import { ArrowUpRight } from "lucide-react";

export default function WorkCard({ item, large = false }) {
  return (
    <article className={`image-frame group relative overflow-hidden rounded-[1.5rem] bg-graphite ${large ? "min-h-[480px]" : "min-h-[360px]"} transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury`}>
      <img src={item.image} alt={`${item.name} ${item.category}`} className="img-cover absolute inset-0 opacity-75 group-hover:opacity-100" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/15 to-transparent" />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-ivory sm:inset-x-7 sm:bottom-7">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-champagne">{item.category}</p>
          <h3 className="serif mt-1 text-3xl leading-none sm:text-4xl">{item.name}</h3>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-champagne/40 bg-obsidian/45 text-champagne backdrop-blur-md transition-all duration-300 group-hover:bg-champagne group-hover:text-obsidian">
          <ArrowUpRight size={15} />
        </span>
      </div>
    </article>
  );
}
