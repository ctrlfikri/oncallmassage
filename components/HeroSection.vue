<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <section class="hero">
    <div class="hero-media">
      <img
        src="/images/hero-spa.jpg"
        alt="A prepared massage tray with oils, rolled towels and candlelight, set beside the treatment bed"
        class="hero-img"
        fetchpriority="high"
      />
      <div class="hero-scrim" />
    </div>

    <div class="shell hero-content">
      <p class="eyebrow">{{ config.public.serviceCity }}, by appointment</p>
      <h1>
        A ten-star escape,<br />
        delivered to your door.
      </h1>
      <p class="lede">
        {{ config.public.businessName }} brings flagship-hotel-grade massage
        to your room — private therapists, considered ritual, nothing
        rushed. Reserve in minutes, confirmed by a person on WhatsApp.
      </p>
      <div class="hero-actions">
        <NuxtLink to="/booking" class="btn btn-primary">Reserve a session</NuxtLink>
        <a href="#services" class="btn btn-ghost">View treatments</a>
      </div>
    </div>

    <aside class="hero-panel">
      <p class="panel-label">Currently reserving</p>
      <dl>
        <div>
          <dt>Hours</dt>
          <dd>{{ config.public.operatingHours }}</dd>
        </div>
        <div>
          <dt>Arrival</dt>
          <dd>Typically within the hour</dd>
        </div>
      </dl>
    </aside>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: min(92vh, 900px);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-bottom: 1px solid var(--line);
}

.hero-media {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 68% 30%;
}
.hero-scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(5, 8, 19, 0.55) 0%, rgba(5, 8, 19, 0.25) 32%, rgba(5, 8, 19, 0.65) 68%, var(--bg) 96%),
    linear-gradient(100deg, rgba(5, 8, 19, 0.92) 8%, rgba(5, 8, 19, 0.55) 42%, rgba(5, 8, 19, 0.1) 68%);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding-block: clamp(6rem, 5rem + 6vw, 9rem) clamp(4rem, 3rem + 4vw, 6rem);
  max-width: 780px;
}

.hero-content .eyebrow {
  color: var(--gold-strong);
}

.hero-content h1 {
  font-size: var(--step-1);
  color: var(--ink);
  text-shadow: 0 2px 30px rgba(0, 0, 0, 0.35);
}

.lede {
  margin-top: 1.5rem;
  max-width: 46ch;
  font-size: var(--step-3);
  color: var(--ink-muted);
}

.hero-actions {
  margin-top: 2.4rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-panel {
  position: absolute;
  z-index: 1;
  right: var(--gutter);
  bottom: clamp(2rem, 1.5rem + 2vw, 3.5rem);
  width: min(280px, 40vw);
  background: rgba(14, 21, 38, 0.72);
  backdrop-filter: blur(14px);
  border: 1px solid var(--line-strong);
  padding: 1.5rem 1.6rem;
}

.panel-label {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 0.95rem;
  color: var(--gold-strong);
  margin-bottom: 1.1rem;
}

.hero-panel dl {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.hero-panel dl > div {
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  border-bottom: 1px solid var(--line);
  padding-bottom: 0.7rem;
}
.hero-panel dl > div:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.hero-panel dt {
  color: var(--ink-faint);
  font-size: 0.8rem;
}
.hero-panel dd {
  margin: 0;
  text-align: right;
  font-size: 0.85rem;
}

@media (max-width: 900px) {
  .hero {
    min-height: auto;
    padding-top: 60vw;
    flex-direction: column;
    align-items: stretch;
  }
  .hero-img {
    object-position: 62% 22%;
  }
  .hero-panel {
    position: static;
    width: auto;
    margin: 0 var(--gutter) 2rem;
  }
  .hero-content {
    padding-block: 2.5rem 0;
  }
}

@media (max-width: 560px) {
  .hero {
    padding-top: 78vw;
  }
}
</style>
