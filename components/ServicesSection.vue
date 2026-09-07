<script setup lang="ts">
const packages = [
  {
    name: 'Solo',
    description: 'One therapist, one guest. Our most-booked format.',
    rows: [
      { duration: '60 min', price: 'RM150', note: '+ transport' },
      { duration: '90 min', price: 'RM200', note: '+ transport' },
      { duration: '120 min', price: 'RM300', note: 'transport included, KL centre' }
    ]
  },
  {
    name: 'Couple',
    description: 'Two therapists, two beds, side by side.',
    rows: [
      { duration: '60 min', price: 'RM400', note: 'transport included, KL centre' },
      { duration: '90 min', price: 'RM500', note: 'transport included, KL centre' },
      { duration: '120 min', price: 'RM600', note: 'transport included, KL centre' }
    ]
  }
]

const techniques = [
  'Traditional', 'Aromatherapy', 'Balinese', 'Deep tissue', 'Swedish',
  'Shiatsu', 'Full leg', 'Foot reflexology', 'Prenatal wellness',
  'Postnatal recovery', 'Stroke recovery'
]
</script>

<template>
  <section id="services" class="section services">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">Treatments & pricing</p>
        <h2>Two formats, every technique you'd find in a spa.</h2>
        <p>
          Transport fees vary by location and are confirmed on WhatsApp
          before your session is locked in — no surprises at the door.
        </p>
      </div>

      <div class="packages">
        <article v-for="pkg in packages" :key="pkg.name" class="package">
          <header class="package-head">
            <h3>{{ pkg.name }}</h3>
            <p>{{ pkg.description }}</p>
          </header>

          <table>
            <tbody>
              <tr v-for="row in pkg.rows" :key="row.duration">
                <td class="duration">{{ row.duration }}</td>
                <td class="price">{{ row.price }}</td>
                <td class="note">{{ row.note }}</td>
              </tr>
            </tbody>
          </table>

          <NuxtLink
            :to="{ path: '/booking', query: { experience: pkg.name } }"
            class="btn btn-ghost btn-block"
          >
            Reserve — {{ pkg.name.toLowerCase() }}
          </NuxtLink>
        </article>
      </div>

      <div class="techniques">
        <p class="footnote-label">Techniques included at every duration</p>
        <p class="technique-list">
          <span v-for="(t, i) in techniques" :key="t">{{ t }}<span v-if="i < techniques.length - 1"> · </span></span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.packages {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}

.package {
  background: var(--bg);
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  border-top: 2px solid var(--gold-dim);
}

.package-head h3 {
  font-size: 1.6rem;
}
.package-head p {
  margin-top: 0.5rem;
  color: var(--ink-muted);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-block: 1.8rem;
  flex: 1;
}
td {
  padding-block: 0.85rem;
  border-top: 1px solid var(--line);
  font-size: 0.95rem;
}
.duration { color: var(--ink); width: 30%; }
.price {
  font-family: var(--font-display);
  width: 25%;
  background: linear-gradient(120deg, var(--gold-strong), var(--gold));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.note { color: var(--ink-faint); font-size: 0.82rem; }

.techniques {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--line);
}
.footnote-label {
  color: var(--ink-faint);
  font-size: 0.85rem;
  margin-bottom: 0.7rem;
}
.technique-list {
  color: var(--ink-muted);
  line-height: 1.9;
}

@media (max-width: 780px) {
  .packages { grid-template-columns: 1fr; }
}
</style>
