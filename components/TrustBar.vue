<script setup lang="ts">
const stats = [
  { value: '500+', label: 'sessions completed in KL & PJ' },
  { value: '12pm – 1am', label: 'booking window, every day' },
  { value: '30–60 min', label: 'typical arrival after confirmation' },
  { value: '100%', label: 'confirmed by a person, not a bot' }
]
</script>

<template>
  <div class="trust">
    <div class="shell trust-row">
      <div v-for="s in stats" :key="s.label" class="trust-item">
        <p class="value">{{ s.value }}</p>
        <p class="label">{{ s.label }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trust {
  border-block: 1px solid var(--line);
  background: var(--bg-alt);
}

.trust-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.trust-item {
  padding-block: 1.6rem;
  padding-right: 1.5rem;
  border-right: 1px solid var(--line);
}
.trust-item:last-child {
  border-right: none;
}

.value {
  font-family: var(--font-display);
  font-size: 1.6rem;
  background: linear-gradient(120deg, var(--gold-strong), var(--gold-dim));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.label {
  margin-top: 0.35rem;
  font-size: 0.85rem;
  color: var(--ink-muted);
}

@media (max-width: 780px) {
  .trust-row {
    grid-template-columns: repeat(2, 1fr);
  }
  .trust-item {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
  .trust-item:nth-child(2n) { padding-right: 0; }
}
</style>
