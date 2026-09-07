<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <section class="cta">
    <div class="shell cta-row">
      <div>
        <h2>Ready when you are.</h2>
        <p>{{ config.public.operatingHours }} · {{ config.public.serviceCity }}</p>
      </div>
      <NuxtLink to="/booking" class="btn btn-primary">Book a session</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.cta {
  border-top: 1px solid var(--line);
  background:
    radial-gradient(ellipse 70% 100% at 15% 50%, rgba(204, 159, 76, 0.09), transparent 60%),
    var(--bg-alt);
}

.cta-row {
  padding-block: var(--section-y);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.cta-row h2 {
  font-size: var(--step-2);
}
.cta-row p {
  margin-top: 0.6rem;
  color: var(--ink-muted);
}
</style>
