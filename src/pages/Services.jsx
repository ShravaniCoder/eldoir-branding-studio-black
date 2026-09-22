import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import Reveal from "../components/Reveal";
import CTA from "../components/CTA";
import { images, services } from "../data/siteData";

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Brand identity, packaging, catalogue, brochure, collateral and marketing design services by ELDOIR Branding Studio."
        path="/services"
      />

      {/* =====================================================
          PAGE HERO
      ====================================================== */}

      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Design Solutions
            <br />
            for Every Brand Journey.
          </>
        }
        text="Whether you're building a brand from scratch or refining an established one, we create purposeful design across the moments that matter."
        image={images.service}
      />


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="section-pad bg-[#080808]">

        <div className="container-luxe">

          {/* INTRO */}

          <Reveal>

            <SectionIntro
              eyebrow="What We Do"
              title="Six Core Services. One Considered Design Language."
              text="Our services can stand alone or come together as a complete brand system, depending on where your business is today."
            />

          </Reveal>


          {/* SERVICE LIST */}

          <div className="mt-12 space-y-5">

            {services.map((item, i) => (

              <Reveal
                key={item.number}
                delay={i * 60}
              >

                <article
                  className="
                    group
                    grid
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-[#F0EBE2]/10
                    bg-[#202020]/80
                    shadow-[0_25px_80px_rgba(0,0,0,.25)]
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#A88B5E]/40
                    hover:shadow-[0_30px_90px_rgba(0,0,0,.4)]
                    lg:grid-cols-[.75fr_1.25fr]
                  "
                >

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div className="relative min-h-[300px] overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        opacity-75
                        transition-all
                        duration-700
                        group-hover:scale-105
                        group-hover:opacity-90
                      "
                      loading="lazy"
                    />


                    {/* Image overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#080808]
                        via-[#151210]/35
                        to-transparent
                      "
                    />


                    {/* Number */}

                    <span
                      className="
                        absolute
                        left-6
                        top-6
                        grid
                        h-11
                        w-11
                        place-items-center
                        rounded-full
                        border
                        border-[#A88B5E]/50
                        bg-[#080808]/60
                        text-[10px]
                        font-semibold
                        text-[#A88B5E]
                        backdrop-blur-xl
                      "
                    >
                      {item.number}
                    </span>


                    {/* Image title */}

                    <div className="absolute bottom-6 left-6 right-6">

                      <p className="mb-2 text-[8px] font-semibold uppercase tracking-[.2em] text-[#A88B5E]">
                        ELDOIR / Service {item.number}
                      </p>

                      <h3
                        className="
                          serif
                          max-w-xl
                          text-4xl
                          leading-[.9]
                          text-[#F0EBE2]
                          sm:text-5xl
                        "
                      >
                        {item.title}
                      </h3>

                    </div>

                  </div>


                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className="
                      flex
                      flex-col
                      justify-between
                      bg-gradient-to-br
                      from-[#202020]
                      to-[#151210]
                      p-7
                      sm:p-9
                      lg:p-10
                    "
                  >

                    <div>

                      {/* Small heading */}

                      <div className="flex items-center justify-between">

                        <span className="text-[8px] font-semibold uppercase tracking-[.2em] text-[#A88B5E]">
                          What We Create
                        </span>

                        <span
                          className="
                            grid
                            h-9
                            w-9
                            place-items-center
                            rounded-full
                            border
                            border-[#F0EBE2]/10
                            bg-[#080808]/30
                            text-[#A88B5E]
                            transition-all
                            duration-300
                            group-hover:border-[#A88B5E]/50
                            group-hover:bg-[#A88B5E]
                            group-hover:text-[#080808]
                          "
                        >
                          <ArrowUpRight size={14} />
                        </span>

                      </div>


                      {/* Description */}

                      <p
                        className="
                          mt-7
                          max-w-2xl
                          text-sm
                          leading-7
                          text-[#F0EBE2]/70
                        "
                      >
                        {item.short}
                      </p>


                      {/* Service features */}

                      <div className="mt-8 grid gap-2 sm:grid-cols-2">

                        {item.bullets.map((bullet, index) => (

                          <div
                            key={bullet}
                            className="
                              group/item
                              flex
                              items-center
                              gap-3
                              rounded-xl
                              border
                              border-[#F0EBE2]/10
                              bg-[#080808]/30
                              px-4
                              py-3
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[.1em]
                              text-[#F0EBE2]/75
                              backdrop-blur-xl
                              transition-all
                              duration-300
                              hover:border-[#A88B5E]/40
                              hover:bg-[#A88B5E]/10
                              hover:text-[#F0EBE2]
                            "
                          >

                            <span
                              className="
                                grid
                                h-5
                                w-5
                                shrink-0
                                place-items-center
                                rounded-full
                                border
                                border-[#A88B5E]/40
                                text-[7px]
                                text-[#A88B5E]
                              "
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            {bullet}

                          </div>

                        ))}

                      </div>

                    </div>


                    {/* Bottom service indicator */}

                    <div className="mt-10 flex items-center gap-3 border-t border-[#F0EBE2]/10 pt-5">

                      <span className="h-px w-12 bg-[#A88B5E]" />

                      <span className="text-[8px] uppercase tracking-[.2em] text-[#81776B]">
                        Thoughtful design · Meaningful brands
                      </span>

                    </div>

                  </div>

                </article>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <CTA
        title="Have a project in mind?"
        text="Tell us what you're building, where you're going and what you need to make the next step feel right."
      />

    </>
  );
}