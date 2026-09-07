<script setup lang="ts">
const config = useRuntimeConfig()
const open = ref(false)
</script>

<template>
  <header class="header">
    <div class="shell header-row">
      <NuxtLink to="/" class="mark" @click="open = false">
        {{ config.public.businessName }}
      </NuxtLink>

      <nav class="nav" :class="{ 'is-open': open }">
        <a href="/#services" @click="open = false">Services</a>
        <a href="/#why" @click="open = false">Why us</a>
        <a href="/#coverage" @click="open = false">Coverage</a>
        <NuxtLink to="/booking" class="btn btn-primary nav-cta" @click="open = false">
          Book now
        </NuxtLink>
      </nav>

      <button class="toggle" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <span />
        <span />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(10px);
  background: rgba(5, 8, 19, 0.78);
  border-bottom: 1px solid var(--line);
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.1rem;
}

.mark {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-style: italic;
  letter-spacing: 0.01em;
  background: linear-gradient(120deg, var(--gold-strong), var(--gold));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2.2rem;
}

.nav a:not(.nav-cta) {
  font-size: 0.95rem;
  color: var(--ink-muted);
  transition: color 0.2s ease;
}
.nav a:not(.nav-cta):hover {
  color: var(--ink);
}

.nav-cta {
  padding: 0.65rem 1.3rem;
  font-size: 0.9rem;
}

.toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 0.4rem;
}
.toggle span {
  width: 22px;
  height: 1px;
  background: var(--ink);
}

@media (max-width: 780px) {
  .toggle { display: flex; }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-alt);
    border-bottom: 1px solid var(--line);
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding: 0 var(--gutter);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s ease;
  }
  .nav.is-open {
    max-height: 260px;
  }
  .nav a:not(.nav-cta) {
    padding: 1rem 0;
    width: 100%;
    border-bottom: 1px solid var(--line);
  }
  .nav-cta {
    margin: 1rem 0;
  }
}
</style>
