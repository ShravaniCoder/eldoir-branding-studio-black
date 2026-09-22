import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA({
  title = "Let's create something worth remembering.",
  text = "Have an idea worth bringing to life? Let's shape it into a brand with clarity, character and lasting value."
}) {
  return (
    <section className="relative overflow-hidden bg-obsidian py-16 text-ivory sm:py-24">
      <div className="glow-orb -left-40 top-0" />
      <div className="container-luxe relative z-10">
        <div className="glass-dark shimmer rounded-[2rem] p-8 sm:p-12 lg:p-16">
          <p className="eyebrow">Ready to Begin?</p>
          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h2 className="serif text-5xl leading-[.9] text-ivory sm:text-6xl">{title}</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-taupe">{text}</p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Start Your Project <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
