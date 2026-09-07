<script setup lang="ts">
const reasons = [
  {
    term: 'No travel',
    detail: 'Skip the traffic and the studio. We come to your hotel, home or office instead.'
  },
  {
    term: 'Real recovery',
    detail: 'Deep tissue and traditional technique aimed at genuine muscle tension, not just relaxation.'
  },
  {
    term: 'Trained therapists',
    detail: 'Every therapist is experienced and briefed on your preferences before arrival.'
  },
  {
    term: 'Confirmed, not automated',
    detail: 'A person reviews and confirms your booking on WhatsApp — you always know who is coming.'
  },
  {
    term: 'Built for circulation',
    detail: 'Techniques are chosen to improve blood flow and ease chronic tension, not just for feel.'
  },
  {
    term: 'Privacy first',
    detail: 'Sessions happen entirely in your own space — no shared waiting areas, no other guests.'
  }
]
</script>

<template>
  <section id="why" class="section why">
    <div class="shell why-grid">
      <div class="section-head">
        <p class="eyebrow">Why guests choose us</p>
        <h2>The convenience is the treatment.</h2>
      </div>

      <dl class="reasons">
        <div v-for="r in reasons" :key="r.term" class="reason">
          <dt>{{ r.term }}</dt>
          <dd>{{ r.detail }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.why {
  background: var(--bg-alt);
  border-block: 1px solid var(--line);
}

.why-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.4fr;
  gap: 3rem;
}

.reasons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.2rem 3rem;
}

.reason dt {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-style: italic;
  color: var(--gold-strong);
  margin-bottom: 0.5rem;
}
.reason dd {
  margin: 0;
  color: var(--ink-muted);
  font-size: 0.95rem;
  max-width: 34ch;
}

@media (max-width: 900px) {
  .why-grid { grid-template-columns: 1fr; }
  .reasons { grid-template-columns: 1fr; }
}
</style>
