import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";
import { approach, images, values } from "../data/siteData";

export default function About() {
  return (
    <>
      <SEO title="About ELDOIR" description="Meet ELDOIR, a branding and design studio focused on strategy-led identities and thoughtful visual communication." path="/about" />
      <PageHero
        eyebrow="About ELDOIR"
        title={<>Where Strategy<br />Meets Creativity.</>}
        text="We are a branding and design studio creating clear, distinctive visual identities for businesses ready to grow with intention."
        image={images.workspace}
      />

     <section className="section-pad">
  <div className="container-luxe">

    {/* =========================
        OUR STORY
    ========================== */}
    <Reveal>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionIntro
          eyebrow="Our Story"
          title="Every Brand Begins with an Idea."
        />

        <div className="space-y-5 text-sm leading-7 text-taupe">
          <p>
            We believe the best brands are not built from decoration.
            They are built from understanding — of the business, the people
            it serves and the feeling it wants to leave behind.
          </p>

          <p>
            ELDOIR brings together strategic thinking, visual storytelling
            and meticulous execution to create identities that are both
            beautiful and useful.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.15em] text-ivory hover:text-champagne transition-colors"
          >
            Meet the studio
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </Reveal>


    {/* =========================
        OUR VISION
    ========================== */}
    <Reveal delay={100}>
      <div className="mt-20 overflow-hidden rounded-[2rem] bg-espresso text-ivory shadow-luxury">

        <div className="grid lg:grid-cols-[1.1fr_.9fr]">

          {/* Vision Statement */}
          <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16">

            {/* Decorative glow */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative z-10">
              <p className="eyebrow text-champagne">
                Our Vision
              </p>

              <h2 className="serif mt-6 max-w-3xl text-5xl leading-[.9] sm:text-6xl lg:text-7xl">
                To create brands that remain meaningful long after the first impression.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-ivory/65 sm:text-base">
               Our vision is to build meaningful brand identities that are not only visually distinctive, but also strategically strong and built for lasting relevance.
              </p>
            </div>
          </div>


          {/* Vision Principles */}
          <div className="border-t border-ivory/10 bg-ivory/[0.04] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">

            <p className="text-[9px] font-semibold uppercase tracking-[.24em] text-champagne">
              What We Aspire To
            </p>

            <div className="mt-8 space-y-7">

              <div className="border-b border-ivory/10 pb-7">
                <span className="serif text-2xl text-champagne">
                  01
                </span>

                <h3 className="serif mt-3 text-2xl">
                  Build with Purpose
                </h3>

                <p className="mt-2 text-xs leading-6 text-ivory/55">
                  Every creative decision should have a reason,
                  connecting aesthetics with meaningful business goals.
                </p>
              </div>


              <div className="border-b border-ivory/10 pb-7">
                <span className="serif text-2xl text-champagne">
                  02
                </span>

                <h3 className="serif mt-3 text-2xl">
                  Create Lasting Value
                </h3>

                <p className="mt-2 text-xs leading-6 text-ivory/55">
                  We create brand systems designed to evolve,
                  remain relevant and grow alongside the businesses
                  they represent.
                </p>
              </div>


              <div>
                <span className="serif text-2xl text-champagne">
                  03
                </span>

                <h3 className="serif mt-3 text-2xl">
                  Make Every Detail Matter
                </h3>

                <p className="mt-2 text-xs leading-6 text-ivory/55">
                  From the smallest typographic detail to the complete
                  brand experience, thoughtful craft shapes everything we do.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Reveal>

  </div>
</section>
      <section className="bg-espresso py-16 text-ivory sm:py-20">
        <div className="container-luxe">
          <Reveal>
            <blockquote className="serif mx-auto max-w-5xl text-center text-4xl italic leading-[1] sm:text-6xl">
              “Design should look beautiful. But it should also mean something.”
            </blockquote>
            <p className="mt-6 text-center text-[9px] uppercase tracking-[.28em] text-champagne">ELDOIR Creative Direction</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-luxe">
          <Reveal>
            <SectionIntro theme="light" eyebrow="Our Values" title="The Principles Behind Every Project." />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map(([num, title, text], i) => (
              <Reveal key={num} delay={i * 70}>
                <div className="glass-dark h-full rounded-3xl bg-graphite/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-champagne/40">
                  <span className="serif text-3xl text-champagne">{num}</span>
                  <h3 className="serif mt-7 text-2xl text-ivory">{title}</h3>
                  <p className="mt-4 text-xs leading-6 text-taupe">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EADFD0] section-pad">
        <div className="container-luxe">
          <Reveal>
            <SectionIntro theme="dark" eyebrow="Our Approach" title="A Studio Built on Clarity, Craft and Collaboration." text="We keep the process focused, transparent and human — so the work can be ambitious without ever feeling complicated." />
          </Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-5">
            {approach.map(([num, title, text], i) => (
              <Reveal key={num} delay={i * 50}>
                <div className="rounded-3xl bg-ivory/55 p-6 backdrop-blur-xl">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-espresso text-[10px] text-ivory">{num}</div>
                  <h3 className="serif mt-5 text-2xl">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-taupe">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-ivory">
        <img src={images.meeting} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-espresso/75" />
        <div className="container-luxe relative z-10">
          <Reveal>
            <p className="eyebrow text-champagne">A Small Studio. A Considered Approach.</p>
            <h2 className="serif mt-5 max-w-3xl text-5xl leading-[.9] sm:text-7xl">We care about the thinking behind the thing.</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-ivory/70">From a first conversation to final delivery, we stay close to the details that make a brand feel personal, purposeful and ready for the real world.</p>
            <Link to="/contact" className="btn-light mt-8 !border-ivory/20 !bg-ivory/10 !text-ivory hover:!bg-ivory/20">Let's Talk <ArrowUpRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
