import { useEffect } from "react";
import { SITE } from "../data/siteData";

export default function SEO({ title, description, keywords = "branding studio, brand identity design, packaging design, catalogue design, brochure design, Mumbai India", path = "/" }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline}`;
    document.title = fullTitle;

    const canonical = `${SITE.siteUrl}${path === "/" ? "/" : path}`;

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", "index, follow, max-image-preview:large");
    setMeta("viewport", "width=device-width, initial-scale=1.0");
    setProperty("og:title", fullTitle);
    setProperty("og:description", description);
    setProperty("og:type", "website");
    setProperty("og:url", canonical);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    const ld = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: SITE.name,
      description,
      url: SITE.siteUrl,
      email: SITE.email,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    };

    let script = document.getElementById("eldoir-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "eldoir-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  }, [title, description, keywords, path]);

  return null;
}
