export const SITE = {
  name: "ELDOIR",
  tagline: "Branding Studio",
  city: "Mumbai, India",
  email: "hello@eldoirbrandingstudio.com",
  phone: "+91 91656 43210",
  whatsapp: "https://wa.me/919165643210",
  siteUrl: "https://your-domain.com",
};

export const navItems = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/work", "Work"],
  ["/process", "Process"],
  ["/contact", "Contact"],
];

const img = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;

export const images = {
  hero: "/images/hero.png",
  studio: "/images/Banner.png",
  desk: "/images/Process.png",
  paper: "/images/CatlogH.png",
  packaging: "/images/Packaging.png",
  bottle: "/images/Collector.png",
  workspace: "/images/Collector.png",
  meeting: "/images/AboutF.png",
  contact: "/images/Contact.png",
  stationery: "/images/LogoH.png",
  books: "/images/BrochureH.png",
  texture: "/images/Marketing.png",
  architecture: "/images/ProcessF.png",
  service: "/images/ServiceH.png"
};

export const stats = [
  ["200+", "Projects Created"],
  ["100+", "Brands Supported"],
  ["6", "Core Services"],
];

export const services = [
  {
    number: "01",
    title: "Logo & Brand Identity",
    short: "We develop distinctive logos and cohesive identity systems that give your brand a recognisable and refined presence across every touchpoint.",
    image: images.stationery,
    bullets: ["Logo Design", "Colour Palette", "Typography", "Brand Guidelines"],
  },
  {
    number: "02",
    title: "Product Catalogue",
    short: "At ELDOIR, we create refined catalogue designs that organise your products beautifully and make every detail easy to explore.",
    image: images.paper,
    bullets: ["Catalogue Design", "Product Layouts", "Pricing Pages", "Digital & Print"],
  },
  {
    number: "03",
    title: "Brochure & Company Profile",
    short: "At ELDOIR, we create refined corporate profiles and brochures, with our team shaping every page for clarity, consistency and a professional brand presence.",
    image: images.books,
    bullets: ["Company Profile", "Brochure", "Presentation", "Print-Ready Files"],
  },
  {
    number: "04",
    title: "Packaging Design",
    short: "At ELDOIR, we create refined packaging that captures attention, communicates value and feels considered from the first glance to the final touch.",
    image: images.packaging,
    bullets: ["Box Design", "Pouch Design", "Labels", "Stickers", "Print Specs"],
  },
  {
    number: "05",
    title: "Brand Collateral",
    short: "At ELDOIR, we design refined brand collateral that keeps your identity consistent, distinctive and polished across every everyday touchpoint.",
    image: images.bottle,
    bullets: ["Business Cards", "Letterheads", "Envelopes", "Social Templates"],
  },
  {
    number: "06",
    title: "Marketing Collateral",
    short: "At ELDOIR, we create considered campaign and marketing assets, while our team ensures every piece feels distinctive, purposeful and aligned with your brand.",
    image: images.texture,
    bullets: ["Social Media Creatives", "Flyers", "Posters", "Digital Ads"],
  },
];

export const homeServices = [
  {
    number: "01",
    title: "Logo & Brand Identity",
    short:
      "Building a visual identity with purpose and character.",
    image: images.stationery,
    bullets: ["Logo Design", "Colour Palette", "Typography", "Brand Guidelines"],
  },

  {
    number: "02",
    title: "Product Catalogue",
    short:
      "Present your products with clarity and distinction.",
    image: images.paper,
    bullets: ["Catalogue Design", "Product Layouts", "Pricing Pages", "Digital & Print"],
  },

  {
    number: "03",
    title: "Brochure & Company Profile",
    short:
      "We turn your business story into polished communication.",
    image: images.books,
    bullets: ["Company Profile", "Brochure", "Presentation", "Print-Ready Files"],
  },

  {
    number: "04",
    title: "Packaging Design",
    short:
      "We turn packaging into a powerful expression of your brand.",
    image: images.packaging,  
    bullets: ["Box Design", "Pouch Design", "Labels", "Stickers", "Print Specs"], 
  },

  {
    number: "05",
    title: "Brand Collateral",
    short:
      "We turn brand identity into every detail that represents you.",
    image: images.bottle,
    bullets: ["Business Cards", "Letterheads", "Envelopes", "Social Templates"],
  },

  {
    number: "06",
    title: "Marketing Collateral",
    short:
      "We turn ideas into visual communication that commands attention.",
    image: images.texture,
     bullets: ["Social Media Creatives", "Flyers", "Posters", "Digital Ads"],
  },
];

export const values = [
  ["01", "Creativity with Purpose", "At Eldoir, we use creative thinking to solve business problems, not simply decorate them."],
  ["02", "Client-Centric Thinking", "Our team begins every project by understanding your audience, ambition and commercial context."],
  ["03", "Quality in Every Detail", "We give the same level of care to typography, spacing, materials and finishing."],
  ["04", "Long-Term Thinking", "Our team builds systems that stay useful as your brand grows, changes and expands."],
];

export const approach = [
  ["01", "Listen", "At ELDOIR, we understand your business, audience and ambition."],

  ["02", "Think", "Our team shapes a focused strategy and creative direction."],

  ["03", "Create", "We translate your ideas into a distinctive visual system."],

  ["04", "Refine", "We polish every detail until it feels unmistakably yours."],

  ["05", "Deliver", "At ELDOIR, we deliver practical, production-ready brand assets."],
];

export const work = [
  { name: "Aurelia", category: "Brand Identity", image: images.stationery },
  { name: "Lume", category: "Packaging Design", image: images.packaging },
  { name: "Velora", category: "Corporate Identity", image: images.books },
  { name: "Nexa", category: "Marketing Collateral", image: images.paper },
  { name: "Arte", category: "Product Catalogue", image: images.bottle },
  { name: "Bloom", category: "Packaging & Collateral", image: images.texture },
  { name: "Maison", category: "Brand Identity", image: images.studio },
  { name: "Orra", category: "Editorial Design", image: images.desk },
];

export const process = [
  ["01", "Discover", "Understand before we create.", "At Eldoir, we create the right questions, review your needs and define the project scope."],
  ["02", "Strategy", "Build the creative foundation.", "Our team clarifies positioning, audience, message and the visual territory the brand should own."],
  ["03", "Design", "Bring the idea to life.", "We turn concepts into a refined identity, layout system, packaging language or campaign."],
  ["04", "Refine", "Perfect every detail.", "We focus feedback into purposeful refinements so the final work feels clear and confident."],
  ["05", "Deliver", "Ready to make an impact.", "Our team provides organized, production-ready assets prepared for real-world use."],
];

export const socials = [
  ["Instagram", "https://instagram.com/"],
  ["LinkedIn", "https://linkedin.com/"],
  ["Behance", "https://behance.net/"],
  ["Pinterest", "https://pinterest.com/"],
];

export const testimonials = [
  {
    quote: "Good design gets attention. Great branding gets remembered.",
    author: "ELDOIR Studio",
  },
  {
    quote: "Thoughtful design for meaningful brands.",
    author: "Creative Direction",
  },
];
