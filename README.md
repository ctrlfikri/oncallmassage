# Harmony — On-Call Massage Template (Nuxt 3)

A landing page + structured WhatsApp booking flow for an on-call / outcall
massage service. Dark pine-and-gold "private suite" look, editorial layout
(no card-grid/SaaS chrome), built to be genuinely brandable.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's inside

- `pages/index.vue` — landing page: hero, trust bar, services & pricing,
  why-us, coverage, testimonials, final CTA.
- `pages/booking.vue` — the actual booking flow: a 5-step form
  (Experience → Duration → Location → Details → Review) that ends by
  opening WhatsApp with a **pre-filled, structured message** — no more
  guests typing a freeform paragraph and forgetting the date.
- `composables/useWhatsapp.ts` — the one place that builds the WhatsApp
  message and link. Change the message shape here and it updates
  everywhere.
- `components/` — every landing-page section, plus the header/footer.
- `assets/css/main.css` — design tokens (colors, type, spacing). Change
  the CSS variables here to reskin the whole site.

## Before you launch

1. **WhatsApp number** — set your real number (digits only, country code
   first, no `+` or spaces) in `nuxt.config.ts` under
   `runtimeConfig.public.whatsappNumber`.
2. **Business name / hours / city** — also in `nuxt.config.ts`.
3. **Pricing** — edit the `packages` array in
   `components/ServicesSection.vue` and the `pricing` object in
   `pages/booking.vue` (kept separate on purpose so pricing logic for the
   booking form is easy to audit on its own).
4. **Coverage areas** — `components/CoverageSection.vue`.
5. **Testimonials** — `components/TestimonialsSection.vue` currently has
   placeholder quotes. Replace with real reviews before going live.
6. **Images** — this template ships copy-first/no stock photography so
   you're not stuck with placeholder images that don't match your
   therapists' actual photos. Drop real photography into `public/` and
   reference it from `HeroSection.vue` / `ServicesSection.vue` if you
   want imagery.

## Why a multi-step form instead of one WhatsApp link

The old approach (a single "Book Now" link with a generic pre-filled
text) leaves guests to fill in the date, duration and location
themselves inside WhatsApp — details get missed, and every enquiry looks
different on your end. This flow collects the same information through
tap-friendly steps and always produces a consistently formatted message,
so whoever is confirming bookings on WhatsApp can act on it immediately.

## Extending this later

- Swap the client-side-only booking flow for one that also POSTs to a
  backend (e.g. a Nuxt server route) if you want a record of every
  booking attempt independent of WhatsApp.
- Add a calendar/availability check before step 4 if you reach a volume
  where double-booking becomes a risk.
- Add therapist profile pages if you move from a single-brand roster to
  named therapists guests can choose from.
