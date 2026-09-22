import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import SectionIntro from "../components/SectionIntro";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";
import { images, services } from "../data/siteData";

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Brand identity, packaging, catalogue, brochure, collateral and marketing design services by ELDOIR Branding Studio." path="/services" />
      <PageHero
        eyebrow="Our Services"
        title={<>Design Solutions<br />for Every Brand Journey.</>}
        text="Whether you're building a brand from scratch or refining an established one, we create purposeful design across the moments that matter."
        image={images.paper}
      />

      <section className="section-pad">
        <div className="container-luxe">
          <Reveal>
            <SectionIntro theme="light" eyebrow="What We Do" title="Six Core Services. One Considered Design Language." text="Our services can stand alone or come together as a complete brand system, depending on where your business is today." />
          </Reveal>
          <div className="mt-12 space-y-5">
            {services.map((item, i) => (
              <Reveal key={item.number} delay={i * 60}>
                <div className="grid overflow-hidden rounded-[1.75rem] border border-espresso/10 bg-ivory/55 shadow-soft backdrop-blur-xl lg:grid-cols-[.75fr_1.25fr]">
                  <div className="relative min-h-[260px] overflow-hidden">
                    <img src={item.image} alt={item.title} className="img-cover absolute inset-0" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 to-transparent" />
                    <span className="absolute left-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-ivory/90 text-xs font-semibold text-espresso">{item.number}</span>
                    <h3 className="serif absolute bottom-6 left-6 right-6 text-4xl leading-[.9] text-ivory">{item.title}</h3>
                  </div>
                  <div className="p-7 sm:p-9">
                    <p className="max-w-2xl text-sm leading-7 text-taupe">{item.short}</p>
                    <div className="mt-7 grid gap-2 sm:grid-cols-2">
                      {item.bullets.map((b) => (
                        <div key={b} className="rounded-xl border border-espresso/10 bg-ivory/70 px-4 py-3 text-xs font-semibold uppercase tracking-[.1em] text-espresso">{b}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Have a project in mind?" text="Tell us what you're building, where you're going and what you need to make the next step feel right." />
    </>
  );
}
