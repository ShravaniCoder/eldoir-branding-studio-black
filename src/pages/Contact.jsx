import { useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Clock3,
} from "lucide-react";

import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { SITE, images, socials } from "../data/siteData";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <SEO
        title="Contact ELDOIR"
        description="Start a branding, identity, packaging or design project with ELDOIR Branding Studio in Mumbai, India."
        path="/contact"
      />

      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <PageHero
        eyebrow="Contact ELDOIR"
        title={
          <>
            Let's Create
            <br />
            Something Great.
          </>
        }
        text="Have an idea, a new business, a brand refresh or a project that needs more clarity? Tell us what you're building."
        image={images.contact}
        actions={false}
      />


      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}
      <section className="section-pad bg-[#080808]">

        <div className="container-luxe">

          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">


            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}
            <Reveal>

              <div
                className="
                  rounded-[2rem]
                  border border-[#F0EBE2]/10
                  bg-[#151210]
                  p-7
                  text-[#F0EBE2]
                  shadow-2xl
                  sm:p-9
                "
              >

                <p className="eyebrow text-[#A88B5E]">
                  Get in Touch
                </p>


                <div className="mt-8 space-y-6">

                  <Info
                    icon={Mail}
                    label="Email"
                    value={SITE.email}
                    href={`mailto:${SITE.email}`}
                  />

                  <Info
                    icon={Phone}
                    label="Phone"
                    value={SITE.phone}
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  />

                  <Info
                    icon={MapPin}
                    label="Location"
                    value={SITE.city}
                  />

                  <Info
                    icon={Clock3}
                    label="Studio Hours"
                    value="Mon – Fri · 10:00 AM – 6:30 PM"
                  />

                </div>


                {/* FOLLOW */}
                <div className="mt-10 border-t border-[#F0EBE2]/10 pt-7">

                  <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#A88B5E]">
                    Follow ELDOIR
                  </p>


                  <div className="mt-4 grid gap-2">

                    {socials.map(([name, url]) => (

                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          border
                          border-[#F0EBE2]/10
                          bg-[#080808]/30
                          px-4
                          py-3
                          text-xs
                          text-[#F0EBE2]/70
                          backdrop-blur-xl
                          transition-all
                          duration-300
                          hover:border-[#A88B5E]/50
                          hover:bg-[#A88B5E]/10
                          hover:text-[#F0EBE2]
                        "
                      >

                        <span>{name}</span>

                        <ArrowUpRight
                          size={14}
                          className="
                            text-[#A88B5E]
                            transition-transform
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                        />

                      </a>

                    ))}

                  </div>

                </div>

              </div>

            </Reveal>


            {/* =================================================
                CONTACT FORM
            ================================================== */}
            <Reveal delay={80}>

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#81776B]/20
                  bg-[#F0EBE2]
                  p-7
                  shadow-[0_30px_100px_rgba(0,0,0,.30)]
                  sm:p-9
                "
              >

                {/* subtle luxury glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-60
                    w-60
                    rounded-full
                    bg-[#A88B5E]/10
                    blur-3xl
                  "
                />


                <div className="relative z-10">

                  <p className="eyebrow text-[#A88B5E]">
                    Start Your Project
                  </p>


                  {sent ? (

                    /* ==========================================
                       SUCCESS STATE
                    =========================================== */

                    <div className="py-20 text-center">

                      <span
                        className="
                          mx-auto
                          grid
                          h-14
                          w-14
                          place-items-center
                          rounded-full
                          bg-[#151210]
                          text-[#A88B5E]
                        "
                      >
                        <ArrowUpRight size={18} />
                      </span>


                      <h2
                        className="
                          serif
                          mt-6
                          text-4xl
                          text-[#151210]
                        "
                      >
                        Thank you.
                      </h2>


                      <p
                        className="
                          mx-auto
                          mt-3
                          max-w-md
                          text-sm
                          leading-6
                          text-[#81776B]
                        "
                      >
                        Your enquiry has been captured in this demo form.
                        Connect the submit handler to your preferred email
                        service or backend.
                      </p>


                      <button
                        type="button"
                        onClick={() => setSent(false)}
                        className="
                          mt-6
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          bg-[#A88B5E]
                          px-6
                          py-3
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[.18em]
                          text-[#080808]
                          transition-all
                          duration-300
                          hover:bg-[#151210]
                          hover:text-[#F0EBE2]
                        "
                      >
                        Send Another
                      </button>

                    </div>

                  ) : (

                    /* ==========================================
                       FORM
                    =========================================== */

                    <form
                      onSubmit={submit}
                      className="mt-7 grid gap-5 sm:grid-cols-2"
                    >

                      <Field
                        label="Your Name"
                        name="name"
                        required
                      />

                      <Field
                        label="Company Name"
                        name="company"
                      />

                      <Field
                        label="Email Address"
                        name="email"
                        type="email"
                        required
                      />

                      <Field
                        label="Phone Number"
                        name="phone"
                      />


                      {/* SERVICE */}

                      <div className="sm:col-span-2">

                        <label
                          htmlFor="service"
                          className="
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[.16em]
                            text-[#A88B5E]
                          "
                        >
                          Service You're Interested In
                        </label>


                        <select
                          id="service"
                          name="service"
                          required
                          defaultValue=""
                          className="
                            mt-2
                            w-full
                            appearance-none
                            rounded-xl
                            border
                            border-[#81776B]/25
                            bg-white/50
                            px-4
                            py-3
                            text-sm
                            text-[#151210]
                            outline-none
                            transition-all
                            duration-300
                            focus:border-[#A88B5E]
                            focus:bg-white/75
                            focus:ring-2
                            focus:ring-[#A88B5E]/15
                          "
                        >

                          <option
                            value=""
                            disabled
                          >
                            Select a service
                          </option>

                          <option value="Brand Identity">
                            Brand Identity
                          </option>

                          <option value="Packaging Design">
                            Packaging Design
                          </option>

                          <option value="Catalogue / Brochure">
                            Catalogue / Brochure
                          </option>

                          <option value="Brand Collateral">
                            Brand Collateral
                          </option>

                          <option value="Marketing Collateral">
                            Marketing Collateral
                          </option>

                          <option value="Complete Brand Project">
                            Complete Brand Project
                          </option>

                        </select>

                      </div>


                      {/* MESSAGE */}

                      <div className="sm:col-span-2">

                        <label
                          htmlFor="message"
                          className="
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[.16em]
                            text-[#A88B5E]
                          "
                        >
                          Tell Us About Your Project
                        </label>


                        <textarea
                          id="message"
                          name="message"
                          required
                          rows="6"
                          placeholder="A little context about your brand, timeline and what you need..."
                          className="
                            mt-2
                            w-full
                            resize-none
                            rounded-xl
                            border
                            border-[#81776B]/25
                            bg-white/50
                            px-4
                            py-3
                            text-sm
                            text-[#080808]
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-[#81776B]
                            focus:border-[#A88B5E]
                            focus:bg-white/75
                            focus:ring-2
                            focus:ring-[#A88B5E]/15
                          "
                        />

                      </div>


                      {/* BUTTON */}

                      <button
                        type="submit"
                        className="
                          group
                          inline-flex
                          w-fit
                          items-center
                          justify-center
                          gap-3
                          rounded-full
                          border
                          border-[#A88B5E]
                          bg-[#A88B5E]
                          px-6
                          py-3
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[.18em]
                          text-[#080808]
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:border-[#151210]
                          hover:bg-[#151210]
                          hover:text-[#F0EBE2]
                          sm:col-span-2
                        "
                      >

                        Send Enquiry

                        <ArrowUpRight
                          size={15}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                        />

                      </button>

                    </form>

                  )}

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden py-24 text-[#F0EBE2]">

        <img
          src={images.studio}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-70
          "
        />

        <div className="absolute inset-0 bg-[#151210]/85" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#151210]/70 to-transparent" />


        <div className="container-luxe relative z-10">

          <Reveal>

            <blockquote
              className="
                serif
                max-w-4xl
                text-5xl
                leading-[.9]
                text-[#F0EBE2]
                sm:text-7xl
              "
            >
              “Great brands start with great conversations.”
            </blockquote>


            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-[#81776B]
              "
            >
              We look forward to creating something meaningful together.
            </p>

          </Reveal>

        </div>

      </section>

    </>
  );
}


/* ============================================================
   CONTACT INFO
============================================================ */

function Info({
  icon: Icon,
  label,
  value,
  href,
}) {

  const content = (
    <>
      <span
        className="
          grid
          h-10
          w-10
          shrink-0
          place-items-center
          rounded-full
          border
          border-[#A88B5E]/20
          bg-[#080808]/40
          text-[#A88B5E]
        "
      >
        <Icon size={16} />
      </span>


      <span>

        <small
          className="
            block
            text-[8px]
            uppercase
            tracking-[.18em]
            text-[#A88B5E]
          "
        >
          {label}
        </small>


        <strong
          className="
            mt-1
            block
            text-sm
            font-normal
            text-[#F0EBE2]
            transition-colors
            duration-300
          "
        >
          {value}
        </strong>

      </span>
    </>
  );


  return href ? (

    <a
      href={href}
      className="
        group
        flex
        items-center
        gap-4
        transition-opacity
        duration-300
        hover:opacity-80
      "
    >
      {content}
    </a>

  ) : (

    <div className="flex items-center gap-4">
      {content}
    </div>

  );
}


/* ============================================================
   FORM FIELD
============================================================ */

function Field({
  label,
  name,
  type = "text",
  required = false,
}) {

  return (

    <div>

      <label
        htmlFor={name}
        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[.16em]
          text-[#A88B5E]
        "
      >
        {label}
      </label>


      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="
          mt-2
          w-full
          rounded-xl
          border
          border-[#81776B]/25
          bg-white/50
          px-4
          py-3
          text-sm
          text-[#080808]
          outline-none
          transition-all
          duration-300
          placeholder:text-[#81776B]
          focus:border-[#A88B5E]
          focus:bg-white/75
          focus:ring-2
          focus:ring-[#A88B5E]/15
        "
      />

    </div>

  );
}