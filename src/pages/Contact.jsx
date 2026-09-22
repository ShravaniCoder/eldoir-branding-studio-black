import { useState } from "react";
import { ArrowUpRight, Instagram, Linkedin, MapPin, Mail, Phone, Clock3 } from "lucide-react";
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
      <SEO title="Contact ELDOIR" description="Start a branding, identity, packaging or design project with ELDOIR Branding Studio in Mumbai, India." path="/contact" />
      <PageHero
        eyebrow="Contact ELDOIR"
        title={<>Let's Create<br />Something Great.</>}
        text="Have an idea, a new business, a brand refresh or a project that needs more clarity? Tell us what you're building."
        image={images.meeting}
        actions={false}
      />

      <section className="section-pad">
        <div className="container-luxe">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
            <Reveal>
              <div className="rounded-[2rem] bg-espresso p-7 text-ivory sm:p-9">
                <p className="eyebrow text-champagne">Get in Touch</p>
                <div className="mt-8 space-y-6">
                  <Info icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
                  <Info icon={Phone} label="Phone" value={SITE.phone} href={`tel:${SITE.phone.replace(/\s/g, "")}`} />
                  <Info icon={MapPin} label="Location" value={SITE.city} />
                  <Info icon={Clock3} label="Studio Hours" value="Mon – Fri · 10:00 AM – 6:30 PM" />
                </div>

                <div className="mt-10 border-t border-ivory/10 pt-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-champagne">Follow ELDOIR</p>
                  <div className="mt-4 grid gap-2">
                    {socials.map(([name, url]) => (
                      <a key={name} href={url} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-ivory/10 px-4 py-3 text-xs text-ivory/70 transition hover:bg-ivory/10 hover:text-ivory">
                        <span>{name}</span><ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-[2rem] border border-espresso/10 bg-ivory/55 p-7 shadow-soft backdrop-blur-xl sm:p-9">
                <p className="eyebrow">Start Your Project</p>
                {sent ? (
                  <div className="py-20 text-center">
                    <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-espresso text-ivory"><ArrowUpRight size={18} /></span>
                    <h2 className="serif mt-6 text-4xl">Thank you.</h2>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-taupe">Your enquiry has been captured in this demo form. Connect the submit handler to your preferred email service or backend.</p>
                    <button onClick={() => setSent(false)} className="btn-primary mt-6">Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="mt-7 grid gap-4 sm:grid-cols-2">
                    <Field label="Your Name" name="name" required />
                    <Field label="Company Name" name="company" />
                    <Field label="Email Address" name="email" type="email" required />
                    <Field label="Phone Number" name="phone" />
                    <div className="sm:col-span-2">
                      <label className="text-[9px] font-semibold uppercase tracking-[.16em] text-taupe">Service You're Interested In</label>
                      <select className="mt-2 w-full rounded-xl border border-espresso/10 bg-ivory/70 px-4 py-3 text-sm outline-none focus:border-gold" defaultValue="">
                        <option value="" disabled>Select a service</option>
                        <option>Brand Identity</option>
                        <option>Packaging Design</option>
                        <option>Catalogue / Brochure</option>
                        <option>Brand Collateral</option>
                        <option>Marketing Collateral</option>
                        <option>Complete Brand Project</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-[9px] font-semibold uppercase tracking-[.16em] text-taupe">Tell us about your project</label>
                      <textarea rows="6" placeholder="A little context about your brand, timeline and what you need..." className="mt-2 w-full resize-none rounded-xl border border-espresso/10 bg-ivory/70 px-4 py-3 text-sm outline-none placeholder:text-taupe/50 focus:border-gold" />
                    </div>
                    <button className="btn-primary sm:col-span-2 sm:w-fit">Send Enquiry <ArrowUpRight size={15} /></button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-ivory">
        <img src={images.studio} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-espresso/80" />
        <div className="container-luxe relative z-10">
          <Reveal>
            <blockquote className="serif max-w-4xl text-5xl leading-[.9] sm:text-7xl">
              “Great brands start with great conversations.”
            </blockquote>
            <p className="mt-6 max-w-xl text-sm leading-7 text-ivory/60">We look forward to creating something meaningful together.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Info({ icon: Icon, label, value, href }) {
  const content = <><span className="grid h-10 w-10 place-items-center rounded-full bg-ivory/10"><Icon size={16} /></span><span><small className="block text-[8px] uppercase tracking-[.18em] text-champagne">{label}</small><strong className="mt-1 block text-sm font-normal text-ivory/80">{value}</strong></span></>;
  return href ? <a href={href} className="flex items-center gap-4 hover:text-ivory">{content}</a> : <div className="flex items-center gap-4">{content}</div>;
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <div>
      <label className="text-[9px] font-semibold uppercase tracking-[.16em] text-taupe">{label}</label>
      <input name={name} type={type} required={required} className="mt-2 w-full rounded-xl border border-espresso/10 bg-ivory/70 px-4 py-3 text-sm outline-none placeholder:text-taupe/50 focus:border-gold" />
    </div>
  );
}
