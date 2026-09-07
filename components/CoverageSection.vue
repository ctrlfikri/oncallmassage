<script setup lang="ts">
const areas = [
  'KLCC', 'Bukit Bintang', 'Pavilion KL', 'KL Sentral', 'Bangsar',
  'Bangsar South', 'Mont Kiara', 'Sri Hartamas', 'Bukit Damansara',
  'Ampang', 'Cheras', 'Bukit Jalil', 'Bandar Utama', 'Damansara Utama',
  'Kota Damansara', 'Sunway'
]
</script>

<template>
  <section id="coverage" class="section coverage">
    <div class="shell coverage-grid">
      <div class="section-head">
        <p class="eyebrow">Coverage</p>
        <h2>Kuala Lumpur & Petaling Jaya, door to door.</h2>
        <p>
          Therapists travel from across the Klang Valley. If your address
          isn't listed, ask on WhatsApp — most locations can still be
          arranged.
        </p>
      </div>

      <ul class="tags">
        <li v-for="a in areas" :key="a">{{ a }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.coverage-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.3fr;
  gap: 3rem;
  align-items: start;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}
.tags li {
  border: 1px solid var(--line-strong);
  padding: 0.55rem 1rem;
  font-size: 0.88rem;
  color: var(--ink-muted);
  transition: border-color 0.2s ease, color 0.2s ease;
}
.tags li:hover {
  border-color: var(--gold);
  color: var(--gold-strong);
}

@media (max-width: 900px) {
  .coverage-grid { grid-template-columns: 1fr; }
}
</style>
