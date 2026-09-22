import {
  ArrowRight,
  ArrowUpRight,
  CircleDot,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import CTA from "../components/CTA";

import {
  approach,
  images,
  homeServices,
  stats,
  values,
  work,
} from "../data/siteData";

export default function Home() {
  return (
    <>
      <SEO
        title="Ideas into Iconic Brands"
        description="ELDOIR Branding Studio creates distinctive brand identities, packaging, catalogues, brochures and marketing collateral for ambitious brands."
      />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="grain relative min-h-screen overflow-hidden bg-obsidian text-ivory">

        <img
          src={images.hero}
          alt="ELDOIR creative studio"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        {/* Luxury dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-espresso/90 to-obsidian/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />
        <div className="glow-orb -right-28 top-40" />
        <div className="glow-orb -left-48 bottom-16 opacity-60" />

        <div className="container-luxe relative z-10 flex min-h-screen items-end pb-16 pt-32 sm:pb-20 lg:pb-24">

          <div className="max-w-5xl">

            <p className="eyebrow text-champagne">
              A REFINED APPROACH TO BRANDING & DESIGN
            </p>

            <h1 className="serif mt-5 max-w-5xl text-6xl leading-[.84] text-ivory sm:text-8xl lg:text-[7rem]">
              Brands With Presence.
              <br />
              <span className="text-champagne">
                Built With Purpose.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-ivory/70 sm:text-base">
              We shape distinctive brand identities and considered design
              systems that give ambitious businesses a clear, memorable and
              sophisticated presence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                to="/contact"
                className="
                  group flex items-center gap-3
                  border border-champagne/60
                  bg-champagne
                  px-6 py-3
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[.16em]
                  text-obsidian
                  transition-all duration-300
                  hover:bg-ivory
                  hover:border-ivory
                "
              >
                Begin Your Brand Journey
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/work"
                className="
                  flex items-center gap-3
                  border border-ivory/20
                  bg-ivory/5
                  px-6 py-3
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[.16em]
                  text-ivory
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-champagne
                  hover:bg-champagne/10
                "
              >
                View Our Work
              </Link>

            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div className="container-luxe absolute bottom-5 left-0 right-0 hidden sm:block">
          <div className="flex items-center justify-between text-[9px] uppercase tracking-[.24em] text-ivory/40">
            <span>Mumbai · India</span>

            <span className="text-champagne/70">
              Crafting brands for a brighter tomorrow
            </span>

            <span>
              Scroll to explore ↓
            </span>
          </div>
        </div>

      </section>


   


      {/* =====================================================
          OUR APPROACH
      ====================================================== */}
      <section className="section-pad bg-espresso text-ivory">

        <div className="container-luxe">

          <Reveal>

            <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">

              <SectionIntro
                eyebrow="Our Approach"
                title={
                  <>
                    Design creates the impression.
                    <br />
                    Branding creates the connection.
                  </>
                }
              />

              <div className="lg:pb-2">

                <p className="max-w-2xl text-sm leading-7 text-taupe">
                  At ELDOIR, our team brings together strategic thinking,
                  creative direction and refined design to create brand
                  identities that feel distinctive, communicate with purpose
                  and leave a lasting impression.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">

                  {["Strategy", "Direction", "Craft"].map((x) => (

                    <div
                      key={x}
                      className="
                        rounded-2xl
                        glass
                        bg-graphite/70
                        p-4
                        backdrop-blur-xl
                        transition-all duration-300
                        hover:border-champagne/40
                        hover:bg-graphite
                      "
                    >

                      <CircleDot
                        size={17}
                        className="text-champagne"
                      />

                      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[.16em] text-ivory">
                        {x}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="section-pad bg-obsidian text-ivory">

        <div className="container-luxe">

          <Reveal>

            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

              <SectionIntro
                eyebrow="What We Create"
                title="Thoughtful Design. Meaningful Brands."
                text="We craft considered identities and design experiences that give brands a clear voice, a refined presence and a lasting impression."
                theme="light"
              />

              <Link
                to="/services"
                className="
                  flex shrink-0 items-center gap-3
                  border border-ivory/15
                  bg-ivory/5
                  px-6 py-3
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[.16em]
                  text-ivory
                  transition-all duration-300
                  hover:border-champagne
                  hover:bg-champagne/10
                "
              >
                View All Services
                <ArrowRight size={15} />
              </Link>

            </div>

          </Reveal>


          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {homeServices.map((item, i) => (

              <Reveal
                key={item.number}
                delay={i * 70}
              >
                <ServiceCard item={item} />
              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SELECTED WORK
      ====================================================== */}
      <section className="section-pad bg-espresso text-ivory">

        <div className="container-luxe">

          <Reveal>

            <SectionIntro
              eyebrow="Selected Work"
              title="Brands We're Proud to Have Shaped."
              text="A glimpse into identity, packaging and communication projects crafted with clarity and character."
            />

          </Reveal>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {work.slice(0, 4).map((item, i) => (

              <Reveal
                key={item.name}
                delay={i * 70}
              >
                <WorkCard item={item} />
              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY ELDOIR
      ====================================================== */}
      <section className="section-pad bg-graphite text-ivory">

        <div className="container-luxe">

          <Reveal>

            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">

              <SectionIntro
                eyebrow="Why ELDOIR?"
                title="Design is more than what people see."
                text="It is what people feel, understand and remember. We bring strategy and craft together so every visual decision has a reason."
                theme="light"
              />


              <div className="grid gap-3 sm:grid-cols-2">

                {values.map(([num, title, text]) => (

                  <div
                    key={num}
                    className="
                      rounded-3xl
                      border border-ivory/10
                      bg-obsidian/60
                      p-6
                      backdrop-blur-xl
                      transition-all duration-300
                      hover:border-champagne/40
                    "
                  >

                    <span className="serif text-2xl text-champagne">
                      {num}
                    </span>

                    <h3 className="serif mt-5 text-2xl text-ivory">
                      {title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-taupe">
                      {text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          HOW WE WORK
      ====================================================== */}
      <section className="section-pad bg-espresso text-ivory">

        <div className="container-luxe">

          <Reveal>

            <SectionIntro
              eyebrow="How We Work"
              title="From Thought to Tangible Brand."
            />

          </Reveal>


          <div className="mt-12 grid gap-3 md:grid-cols-5">

            {approach.map(([num, title, text], i) => (

              <Reveal
                key={num}
                delay={i * 60}
              >

                <div
                  className="
                    h-full
                    rounded-3xl
                    glass-dark
                    bg-graphite/80
                    p-6
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-champagne/40
                    hover:bg-graphite
                  "
                >

                  <span
                    className="
                      grid h-10 w-10
                      place-items-center
                      rounded-full
                      bg-obsidian
                      text-xs
                      text-ivory
                    "
                  >
                    {num}
                  </span>

                  <h3 className="serif mt-6 text-2xl">
                    {title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-taupe">
                    {text}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL IMAGE CTA
      ====================================================== */}
      <section className="relative overflow-hidden py-24 text-ivory sm:py-32">

        <img
          src={images.studio}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-obsidian/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-espresso/70 to-transparent" />

        <div className="container-luxe relative z-10">

          <Reveal>

            <div className="max-w-3xl">

              <p className="eyebrow text-champagne">
                A Studio Built on Ideas, People and Purpose.
              </p>

              <h2 className="serif mt-5 text-5xl leading-[.9] text-ivory sm:text-7xl">
                Let's Create Something
                <br />
                <span className="text-champagne">
                  Worth Remembering.
                </span>
              </h2>

              <Link
                to="/contact"
                className="
                  group mt-8 inline-flex
                  items-center gap-3
                  border border-champagne/60
                  bg-champagne
                  px-6 py-3
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[.16em]
                  text-obsidian
                  transition-all duration-300
                  hover:bg-ivory
                  hover:border-ivory
                "
              >
                Start Your Project

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </Link>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <CTA />

    </>
  );
}