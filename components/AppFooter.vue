<script setup lang="ts">
const config = useRuntimeConfig()
const { buildQuickLink } = useWhatsapp()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="shell footer-top">
      <div class="footer-col footer-brand">
        <p class="mark">{{ config.public.businessName }}</p>
        <p class="muted">Private on-call massage across {{ config.public.serviceCity }}.</p>
      </div>

      <div class="footer-col">
        <p class="footer-label">Hours</p>
        <p>{{ config.public.operatingHours }}</p>
        <p class="muted">Advance booking recommended.</p>
      </div>

      <div class="footer-col">
        <p class="footer-label">Contact</p>
        <a :href="buildQuickLink()" target="_blank" rel="noopener">WhatsApp</a>
        <a href="#" target="_blank" rel="noopener">Instagram</a>
      </div>

      <div class="footer-col">
        <p class="footer-label">Book</p>
        <NuxtLink to="/booking">Start a booking →</NuxtLink>
      </div>
    </div>

    <hr class="rule shell" />

    <div class="shell footer-bottom">
      <p class="muted">© {{ year }} {{ config.public.businessName }}. All rights reserved.</p>
      <p class="muted">Professional massage only. No inappropriate service.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding-top: var(--section-y);
  background: var(--bg-alt);
}

.footer-top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 2rem;
  padding-bottom: 2.5rem;
}

.footer-brand .mark {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
  background: linear-gradient(120deg, var(--gold-strong), var(--gold));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.footer-label {
  color: var(--gold-strong);
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
}

.muted { color: var(--ink-muted); }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 1.5rem;
  font-size: 0.85rem;
  flex-wrap: wrap;
}

@media (max-width: 780px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
