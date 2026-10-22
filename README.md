# ELDOIR Branding Studio

A responsive React + Tailwind CSS branding studio website inspired by the supplied visual reference.

## Included pages

- Home
- About
- Services
- Work / Portfolio
- Process
- Contact

## Tech

- React + Vite
- Tailwind CSS
- React Router
- Lucide React
- Native IntersectionObserver reveal animations
- Responsive glass / editorial UI
- SEO component with title, meta, canonical, Open Graph and JSON-LD
- Apache `.htaccess`
- `robots.txt`
- `sitemap.xml`

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Upload the generated `dist/` contents to Hostinger / Apache hosting. The included `public/.htaccess` is copied into `dist/`.

## Important customization

Edit:

`src/data/siteData.js`

This is the main content and asset file. Update:

- Studio name
- Email / phone
- WhatsApp
- Domain
- Navigation
- Services
- Portfolio
- Process
- Social links
- Image URLs

Also replace `https://eldoirbrandingstudio.com` in:

- `src/data/siteData.js`
- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

## Form

The contact form currently demonstrates the UI and success state. Connect the `submit()` handler in `src/pages/Contact.jsx` to Formspree, Web3Forms, EmailJS, your SMTP/API backend, or another secure form endpoint.

## Design notes

The layout intentionally uses:

- Warm ivory / espresso / champagne palette
- Cormorant Garamond editorial typography
- Glassmorphism cards
- Large photography
- Rounded editorial panels
- Subtle entrance animations
- Mobile navigation
- Responsive grids
- Reusable components and centralized content

## Reference color palette

The UI has been tuned to the supplied ELDOIR reference image:

- Deep Espresso: `#130D08`
- Dark Brown: `#271C13`
- Warm Brown: `#3F2F21`
- Taupe Brown: `#5A4635`
- Ivory: `#F8F2E9`
- Warm Mist: `#F1E8DD`
- Sand: `#EADFD0`
- Champagne: `#D7C4B0`
- Muted Gold: `#B69A6F`

The palette is centralized in `tailwind.config.js`, while global glass, background and button treatments are in `src/index.css`.


## Updated luxury UI
The reference build has been refined around the six-color ELDOIR palette with glassmorphism, animated route transitions, reveal motion, hover lift, image zoom, mobile navigation transitions, ambient champagne glow and restrained grain texture.
