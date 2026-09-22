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
      <SEO
        title="About ELDOIR"
        description="Meet ELDOIR, a branding and design studio focused on strategy-led identities and thoughtful visual communication."
        path="/about"
      />

      {/* =====================================================
          PAGE HERO
      ====================================================== */}

      <PageHero
        eyebrow="About ELDOIR"
        title={
          <>
            Where Strategy
            <br />
            Meets Creativity.
          </>
        }
        text="We are a branding and design studio creating clear, distinctive visual identities for businesses ready to grow with intention."
        image={images.workspace}
      />


      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section className="section-pad bg-[#080808]">

        <div className="container-luxe">

          <Reveal>

            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">

              {/* LEFT */}

              <div>

                <SectionIntro
                  eyebrow="Our Story"
                  title="Every Brand Begins with an Idea."
                />

              </div>


              {/* RIGHT */}

              <div className="space-y-6">

                <p
                  className="
                    max-w-2xl
                    text-sm
                    leading-7
                    text-[#F0EBE2]/70
                    sm:text-base
                  "
                >
                  We believe the best brands are not built from decoration.
                  They are built from understanding — of the business, the
                  people it serves and the feeling it wants to leave behind.
                </p>


                <p
                  className="
                    max-w-2xl
                    text-sm
                    leading-7
                    text-[#81776B]
                    sm:text-base
                  "
                >
                  ELDOIR brings together strategic thinking, visual
                  storytelling and meticulous execution to create identities
                  that are both beautiful and useful.
                </p>


                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    border-b
                    border-[#A88B5E]/40
                    pb-1
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[.15em]
                    text-[#F0EBE2]
                    transition-all
                    duration-300
                    hover:border-[#A88B5E]
                    hover:text-[#A88B5E]
                  "
                >
                  Meet the studio

                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </Link>

              </div>

            </div>

          </Reveal>


          {/* =================================================
              OUR VISION
          ================================================== */}

          <Reveal delay={100}>

            <div
              className="
                mt-20
                overflow-hidden
                rounded-[2rem]
                border
                border-[#F0EBE2]/10
                bg-[#151210]
                text-[#F0EBE2]
                shadow-[0_30px_100px_rgba(0,0,0,.35)]
              "
            >

              <div className="grid lg:grid-cols-[1.1fr_.9fr]">


                {/* VISION STATEMENT */}

                <div
                  className="
                    relative
                    overflow-hidden
                    p-8
                    sm:p-12
                    lg:p-16
                  "
                >

                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -left-20
                      -top-20
                      h-72
                      w-72
                      rounded-full
                      bg-[#A88B5E]/10
                      blur-3xl
                    "
                  />

                  <div
                    className="
                      absolute
                      -bottom-32
                      -right-20
                      h-72
                      w-72
                      rounded-full
                      bg-[#81776B]/10
                      blur-3xl
                    "
                  />


                  <div className="relative z-10">

                    <p className="eyebrow text-[#A88B5E]">
                      Our Vision
                    </p>


                    <h2
                      className="
                        serif
                        mt-6
                        max-w-3xl
                        text-5xl
                        leading-[.9]
                        text-[#F0EBE2]
                        sm:text-6xl
                        lg:text-7xl
                      "
                    >
                      To create brands that remain meaningful long after the
                      first impression.
                    </h2>


                    <p
                      className="
                        mt-7
                        max-w-2xl
                        text-sm
                        leading-7
                        text-[#81776B]
                        sm:text-base
                      "
                    >
                      Our vision is to build meaningful brand identities that
                      are not only visually distinctive, but also strategically
                      strong and built for lasting relevance.
                    </p>

                  </div>

                </div>


                {/* VISION PRINCIPLES */}

                <div
                  className="
                    border-t
                    border-[#F0EBE2]/10
                    bg-[#202020]/60
                    p-8
                    sm:p-12
                    lg:border-l
                    lg:border-t-0
                    lg:p-16
                  "
                >

                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[.24em]
                      text-[#A88B5E]
                    "
                  >
                    What We Aspire To
                  </p>


                  <div className="mt-8 space-y-7">


                    <VisionItem
                      number="01"
                      title="Build with Purpose"
                      text="Every creative decision should have a reason, connecting aesthetics with meaningful business goals."
                    />


                    <VisionItem
                      number="02"
                      title="Create Lasting Value"
                      text="We create brand systems designed to evolve, remain relevant and grow alongside the businesses they represent."
                    />


                    <VisionItem
                      number="03"
                      title="Make Every Detail Matter"
                      text="From the smallest typographic detail to the complete brand experience, thoughtful craft shapes everything we do."
                      last
                    />

                  </div>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          EDITORIAL QUOTE
      ====================================================== */}

      <section
        className="
          bg-[#151210]
          py-20
          text-[#F0EBE2]
          sm:py-24
        "
      >

        <div className="container-luxe">

          <Reveal>

            <blockquote
              className="
                serif
                mx-auto
                max-w-5xl
                text-center
                text-4xl
                italic
                leading-[1]
                text-[#F0EBE2]
                sm:text-6xl
              "
            >
              “Design should look beautiful. But it should also mean
              something.”
            </blockquote>


            <p
              className="
                mt-6
                text-center
                text-[9px]
                uppercase
                tracking-[.28em]
                text-[#A88B5E]
              "
            >
              ELDOIR Creative Direction
            </p>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          OUR VALUES
      ====================================================== */}

      <section className="section-pad bg-[#080808]">

        <div className="container-luxe">

          <Reveal>

            <SectionIntro
              eyebrow="Our Values"
              title="The Principles Behind Every Project."
            />

          </Reveal>


          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {values.map(([num, title, text], i) => (

              <Reveal
                key={num}
                delay={i * 70}
              >

                <div
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#F0EBE2]/10
                    bg-[#202020]/75
                    p-6
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#A88B5E]/45
                    hover:bg-[#202020]
                  "
                >

                  {/* Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-[#A88B5E]/0
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-[#A88B5E]/10
                    "
                  />


                  <div className="relative z-10">

                    <span
                      className="
                        serif
                        text-3xl
                        text-[#A88B5E]
                      "
                    >
                      {num}
                    </span>


                    <h3
                      className="
                        serif
                        mt-7
                        text-2xl
                        leading-tight
                        text-[#F0EBE2]
                      "
                    >
                      {title}
                    </h3>


                    <p
                      className="
                        mt-4
                        text-xs
                        leading-6
                        text-[#81776B]
                      "
                    >
                      {text}
                    </p>

                  </div>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR APPROACH
      ====================================================== */}

      <section className="section-pad bg-[#151210]">

        <div className="container-luxe">

          <Reveal>

            <SectionIntro
              eyebrow="Our Approach"
              title="A Studio Built on Clarity, Craft and Collaboration."
              text="We keep the process focused, transparent and human — so the work can be ambitious without ever feeling complicated."
            />

          </Reveal>


          <div className="mt-12 grid gap-3 md:grid-cols-5">

            {approach.map(([num, title, text], i) => (

              <Reveal
                key={num}
                delay={i * 50}
              >

                <div
                  className="
                    group
                    h-full
                    rounded-3xl
                    border
                    border-[#F0EBE2]/10
                    bg-[#202020]/65
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#A88B5E]/40
                    hover:bg-[#202020]
                  "
                >

                  <div
                    className="
                      grid
                      h-10
                      w-10
                      place-items-center
                      rounded-full
                      border
                      border-[#A88B5E]/40
                      bg-[#080808]
                      text-[10px]
                      text-[#A88B5E]
                      transition-all
                      duration-300
                      group-hover:bg-[#A88B5E]
                      group-hover:text-[#080808]
                    "
                  >
                    {num}
                  </div>


                  <h3
                    className="
                      serif
                      mt-5
                      text-2xl
                      text-[#F0EBE2]
                    "
                  >
                    {title}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-xs
                      leading-6
                      text-[#81776B]
                    "
                  >
                    {text}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL STUDIO SECTION
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          py-24
          text-[#F0EBE2]
          sm:py-32
        "
      >

        <img
          src={images.meeting}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-[1200ms]
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-[#080808]/80
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#080808]/95
            via-[#151210]/75
            to-[#151210]/30
          "
        />


        <div className="container-luxe relative z-10">

          <Reveal>

            <p className="eyebrow text-[#A88B5E]">
              A Small Studio. A Considered Approach.
            </p>


            <h2
              className="
                serif
                mt-5
                max-w-3xl
                text-5xl
                leading-[.9]
                text-[#F0EBE2]
                sm:text-7xl
              "
            >
              We care about the thinking behind the thing.
            </h2>


            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-[#F0EBE2]/65
              "
            >
              From a first conversation to final delivery, we stay close to
              the details that make a brand feel personal, purposeful and
              ready for the real world.
            </p>


            <Link
              to="/contact"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#F0EBE2]/20
                bg-[#F0EBE2]/10
                px-6
                py-3
                text-[9px]
                font-semibold
                uppercase
                tracking-[.16em]
                text-[#F0EBE2]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#A88B5E]
                hover:bg-[#A88B5E]
                hover:text-[#080808]
              "
            >
              Let's Talk

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />

            </Link>

          </Reveal>

        </div>

      </section>


      <CTA />

    </>
  );
}


/* ============================================================
   VISION ITEM
============================================================ */

function VisionItem({
  number,
  title,
  text,
  last = false,
}) {

  return (

    <div
      className={`
        group
        pb-7
        ${
          !last
            ? "border-b border-[#F0EBE2]/10"
            : ""
        }
      `}
    >

      <span
        className="
          serif
          text-2xl
          text-[#A88B5E]
          transition-colors
          duration-300
          group-hover:text-[#F0EBE2]
        "
      >
        {number}
      </span>


      <h3
        className="
          serif
          mt-3
          text-2xl
          text-[#F0EBE2]
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-2
          text-xs
          leading-6
          text-[#81776B]
        "
      >
        {text}
      </p>

    </div>

  );
}