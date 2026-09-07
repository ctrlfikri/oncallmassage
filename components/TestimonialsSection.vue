<script setup lang="ts">
// Sample content — swap in real reviews before launch.
const quotes = [
  {
    text: 'Booked from my hotel room after a long flight and someone arrived within the hour. Easiest part of the whole trip.',
    meta: 'Business traveller, Bukit Bintang'
  },
  {
    text: 'The WhatsApp confirmation made it feel properly organised, not like messaging a random number and hoping.',
    meta: 'Local guest, Bangsar'
  },
  {
    text: 'We booked the couple session for our anniversary. Two therapists, right on time, no fuss.',
    meta: 'Couple, Mont Kiara'
  }
]
</script>

<template>
  <section class="section testimonials">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">In guests' words</p>
        <h2>Sample content — replace with your own reviews.</h2>
      </div>

      <div class="quote-grid">
        <figure v-for="q in quotes" :key="q.meta">
          <span class="mark" aria-hidden="true">"</span>
          <blockquote>{{ q.text }}</blockquote>
          <figcaption>{{ q.meta }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quote-grid {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

figure {
  margin: 0;
  padding-top: 1.4rem;
  border-top: 1px solid var(--gold-dim);
}

.mark {
  display: block;
  font-family: var(--font-display);
  font-size: 2.6rem;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.4rem;
}

blockquote {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.15rem;
  line-height: 1.5;
  color: var(--ink);
}

figcaption {
  margin-top: 1.2rem;
  font-size: 0.85rem;
  color: var(--ink-faint);
}

@media (max-width: 900px) {
  .quote-grid { grid-template-columns: 1fr; }
}
</style>
