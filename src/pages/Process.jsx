import { Search, Lightbulb, PenTool, Sparkles, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";
import CTA from "../components/CTA";
import { images, process } from "../data/siteData";

const icons = [Search, Lightbulb, PenTool, Sparkles, PackageCheck];

export default function Process() {
  return (
    <>
      <SEO title="Our Process" description="Discover the ELDOIR branding process from discovery and strategy through design, refinement and final delivery." path="/process" />
      <PageHero
        eyebrow="Our Process"
        title={<>A Clear Path<br />from Ideas to Impact.</>}
        text="We believe a structured process creates room for better ideas. Every stage has a purpose, and every decision moves the brand forward."
        image={images.desk}
      />

      <section className="section-pad">
        <div className="container-luxe">
          <Reveal>
            <SectionIntro eyebrow="The Journey" title="A Process Designed Around Progress." text="At Eldoir, we believe clear communication, thoughtful collaboration and a strong attention to detail keep our work moving without losing the creative spark." />
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute bottom-0 left-[1.25rem] top-0 hidden w-px bg-espresso/10 md:block" />
            <div className="space-y-4">
              {process.map(([num, title, lead, text], i) => {
                const Icon = icons[i];
                return (
                  <Reveal key={num} delay={i * 70}>
                    <div className="glass-dark relative grid gap-5 rounded-[1.75rem] bg-graphite/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-champagne/40 md:grid-cols-[64px_1fr_1.25fr] md:items-center md:p-7">
                      <div className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-ivory text-champagne md:h-12 md:w-12">
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="text-[9px] font-semibold uppercase tracking-[.22em] text-champagne">{num}</span>
                        <h3 className="serif mt-1 text-3xl">{title}</h3>
                      </div>
                      <div>
                        <p className="font-serif text-xl text-ivory">{lead}</p>
                        <p className="mt-2 text-xs leading-6 text-taupe">{text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EADFD0] section-pad">
        <div className="container-luxe">
          <Reveal>
            <SectionIntro theme="dark" eyebrow="Working With Us" title="The Details That Make Collaboration Better." />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Clear Communication", "We keep conversations direct, useful and easy to follow."],
              ["Thoughtful Collaboration", "At Eldoir, you are part of the process, with clear moments for feedback and direction."],
              ["Attention to Detail", "From a tiny spacing decision to final print files, our team ensures details are never an afterthought."],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="rounded-3xl bg-ivory/60 p-7 backdrop-blur-xl">
                  <span className="text-2xl text-champagne">0{i + 1}</span>
                  <h3 className="serif mt-6 text-3xl text-obsidian">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-taupe">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-ivory">
        <img src={images.architecture} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-espresso/80" />
        <div className="container-luxe relative z-10">
          <Reveal>
            <blockquote className="serif max-w-4xl text-5xl italic leading-[.9] sm:text-7xl">
              “Great design is a process of curiosity, collaboration and care.”
            </blockquote>
            <Link to="/contact" className="btn-light mt-8 !border-ivory/20 !bg-ivory/10 !text-ivory hover:!bg-ivory/20">Start Your Project</Link>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
