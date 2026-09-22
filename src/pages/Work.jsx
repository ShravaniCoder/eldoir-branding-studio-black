import { useMemo, useState } from "react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import WorkCard from "../components/WorkCard";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";
import { images, work } from "../data/siteData";

export default function Work() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(work.map((x) => x.category))];
  const visible = useMemo(() => filter === "All" ? work : work.filter((x) => x.category === filter), [filter]);

  return (
    <>
      <SEO title="Our Work" description="Explore selected ELDOIR branding, packaging, corporate identity, catalogue and marketing design projects." path="/work" />
      <PageHero
        eyebrow="Portfolio / Our Work"
        title={<>Designs That<br />Make an Impact.</>}
        text="A curated selection of brand identities, packaging, editorial and communication work created for brands with something to say."
        image={images.studio}
        actions={false}
      />

      <section className="section-pad">
        <div className="container-luxe">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[.14em] transition ${filter === cat ? "bg-espresso text-ivory" : "border border-espresso/10 bg-ivory/55 text-taupe hover:bg-ivory"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, i) => (
              <Reveal key={item.name} delay={i * 45}>
                <WorkCard item={item} large={i % 4 === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-espresso py-24 text-ivory sm:py-32">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow text-champagne">Our Belief</p>
            <h2 className="serif mt-5 max-w-4xl text-5xl leading-[.9] sm:text-7xl">Thoughtful design for meaningful brands.</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-ivory/65">The strongest work is not just memorable in a presentation. It has a job to do in the real world — and it keeps doing it long after launch.</p>
          </Reveal>
        </div>
      </section>

      <CTA title="Have a brand waiting to be shaped?" text="Let's turn the next idea into something people can recognize, trust and remember." />
    </>
  );
}
