<script setup lang="ts">
useHead({ title: 'Reserve a session — Geli-Geli Odyssey' })

const route = useRoute()
const { buildLink } = useWhatsapp()

const steps = ['Experience', 'Duration', 'Location', 'Your details', 'Review']
const current = ref(0)

const pricing: Record<string, Record<string, string>> = {
  Solo: { '60 min': 'RM150', '90 min': 'RM200', '120 min': 'RM300' },
  Couple: { '60 min': 'RM400', '90 min': 'RM500', '120 min': 'RM600' }
}

const form = reactive({
  experience: (route.query.experience as string) || '',
  duration: '',
  locationType: '',
  locationName: '',
  date: '',
  time: '',
  guestName: '',
  phone: '',
  notes: ''
})

const price = computed(() => {
  if (!form.experience || !form.duration) return ''
  return pricing[form.experience]?.[form.duration] ?? ''
})

const canAdvance = computed(() => {
  switch (current.value) {
    case 0: return !!form.experience
    case 1: return !!form.duration
    case 2: return !!form.locationType && form.locationName.trim().length > 1
    case 3: return !!form.date && !!form.time && form.guestName.trim().length > 1
    default: return true
  }
})

function next() {
  if (current.value < steps.length - 1 && canAdvance.value) current.value++
}
function back() {
  if (current.value > 0) current.value--
}
function goTo(i: number) {
  // only allow jumping to a step that's already reachable
  if (i <= current.value) current.value = i
}

const whatsappHref = computed(() =>
  buildLink({
    experience: form.experience,
    duration: form.duration,
    price: price.value,
    locationType: form.locationType,
    locationName: form.locationName,
    date: form.date,
    time: form.time,
    guestName: form.guestName,
    notes: [form.notes, form.phone ? `Callback number: ${form.phone}` : '']
      .filter(Boolean)
      .join(' · ')
  })
)
</script>

<template>
  <section class="booking">
    <div class="shell booking-head">
      <p class="eyebrow">Book a session</p>
      <h1>Five short steps, then WhatsApp.</h1>
      <p class="sub">
        Nothing is booked until a therapist confirms with you directly —
        this just prepares a clear message so nothing gets lost in translation.
      </p>
    </div>

    <div class="shell booking-grid">
      <nav class="stepper" aria-label="Booking steps">
        <button
          v-for="(label, i) in steps"
          :key="label"
          type="button"
          class="step"
          :class="{ active: i === current, done: i < current }"
          :disabled="i > current"
          @click="goTo(i)"
        >
          <span class="num">{{ i + 1 }}</span>
          <span>{{ label }}</span>
        </button>
      </nav>

      <div class="panel">
        <!-- Step 1: Experience -->
        <div v-if="current === 0" class="field-group">
          <h2>Who is this for?</h2>
          <div class="choice-row">
            <button
              type="button"
              class="choice"
              :class="{ selected: form.experience === 'Solo' }"
              @click="form.experience = 'Solo'"
            >
              <span class="choice-title">Solo</span>
              <span class="choice-note">One therapist, one guest</span>
            </button>
            <button
              type="button"
              class="choice"
              :class="{ selected: form.experience === 'Couple' }"
              @click="form.experience = 'Couple'"
            >
              <span class="choice-title">Couple</span>
              <span class="choice-note">Two therapists, side by side</span>
            </button>
          </div>
        </div>

        <!-- Step 2: Duration -->
        <div v-else-if="current === 1" class="field-group">
          <h2>How long?</h2>
          <div class="choice-row three">
            <button
              v-for="d in ['60 min', '90 min', '120 min']"
              :key="d"
              type="button"
              class="choice"
              :class="{ selected: form.duration === d }"
              @click="form.duration = d"
            >
              <span class="choice-title">{{ d }}</span>
              <span class="choice-note">{{ pricing[form.experience]?.[d] }}</span>
            </button>
          </div>
        </div>

        <!-- Step 3: Location -->
        <div v-else-if="current === 2" class="field-group">
          <h2>Where should we come?</h2>
          <div class="choice-row three">
            <button
              v-for="loc in ['Hotel', 'Home / Residence', 'Serviced suite / Office']"
              :key="loc"
              type="button"
              class="choice"
              :class="{ selected: form.locationType === loc }"
              @click="form.locationType = loc"
            >
              <span class="choice-title">{{ loc }}</span>
            </button>
          </div>
          <label class="text-field">
            <span>{{ form.locationType === 'Hotel' ? 'Hotel name & room (if known)' : 'Address' }}</span>
            <input v-model="form.locationName" type="text" placeholder="e.g. The St. Regis, or your street address" />
          </label>
        </div>

        <!-- Step 4: Details -->
        <div v-else-if="current === 3" class="field-group">
          <h2>When, and who should we ask for?</h2>
          <div class="text-row">
            <label class="text-field">
              <span>Date</span>
              <input v-model="form.date" type="date" />
            </label>
            <label class="text-field">
              <span>Time</span>
              <input v-model="form.time" type="time" />
            </label>
          </div>
          <label class="text-field">
            <span>Your name</span>
            <input v-model="form.guestName" type="text" placeholder="Name the therapist should ask for" />
          </label>
          <label class="text-field">
            <span>Phone (optional, for the therapist to reach you)</span>
            <input v-model="form.phone" type="tel" placeholder="+60…" />
          </label>
          <label class="text-field">
            <span>Notes (optional)</span>
            <textarea v-model="form.notes" rows="3" placeholder="Pressure preference, allergies, access instructions…" />
          </label>
        </div>

        <!-- Step 5: Review -->
        <div v-else class="field-group">
          <h2>Review & send</h2>
          <dl class="summary">
            <div><dt>Experience</dt><dd>{{ form.experience }}</dd></div>
            <div><dt>Duration</dt><dd>{{ form.duration }} · {{ price }}</dd></div>
            <div><dt>Location</dt><dd>{{ form.locationType }} — {{ form.locationName }}</dd></div>
            <div><dt>Date & time</dt><dd>{{ form.date }} at {{ form.time }}</dd></div>
            <div><dt>Name</dt><dd>{{ form.guestName }}</dd></div>
            <div v-if="form.phone"><dt>Phone</dt><dd>{{ form.phone }}</dd></div>
            <div v-if="form.notes"><dt>Notes</dt><dd>{{ form.notes }}</dd></div>
          </dl>
          <a :href="whatsappHref" target="_blank" rel="noopener" class="btn btn-primary btn-block">
            Send booking on WhatsApp
          </a>
          <p class="fine-print">
            This opens WhatsApp with your details filled in. Nothing is
            confirmed until we reply — final pricing (incl. transport) is
            confirmed there too.
          </p>
        </div>

        <div class="nav-row" v-if="current < steps.length - 1">
          <button v-if="current > 0" type="button" class="btn btn-ghost" @click="back">Back</button>
          <span v-else />
          <button type="button" class="btn btn-primary" :disabled="!canAdvance" @click="next">
            Continue
          </button>
        </div>
        <div class="nav-row" v-else>
          <button type="button" class="btn btn-ghost" @click="back">Back</button>
          <span />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.booking {
  padding-block: clamp(3rem, 2rem + 4vw, 5.5rem) var(--section-y);
}

.booking-head {
  max-width: 56ch;
  margin-bottom: 3rem;
}
.booking-head h1 {
  font-size: var(--step-1);
  margin-top: 0.6rem;
}
.sub {
  margin-top: 1rem;
  color: var(--ink-muted);
  font-size: var(--step-3);
}

.booking-grid {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 3rem;
  align-items: start;
}

.stepper {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  position: sticky;
  top: 6.5rem;
}

.step {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: none;
  border: none;
  border-left: 2px solid var(--line);
  padding: 0.7rem 0 0.7rem 1rem;
  text-align: left;
  color: var(--ink-faint);
  transition: color 0.2s ease, border-color 0.2s ease;
}
.step:disabled { cursor: not-allowed; }
.step.done { color: var(--ink-muted); border-color: var(--line-strong); }
.step.active { color: var(--ink); border-color: var(--gold); }

.step .num {
  font-family: var(--font-display);
  font-size: 0.9rem;
  color: var(--gold-strong);
  width: 1.2rem;
}

.panel {
  border: 1px solid var(--line);
  padding: clamp(1.6rem, 1.2rem + 1.5vw, 2.8rem);
  min-height: 380px;
  display: flex;
  flex-direction: column;
}

.field-group { flex: 1; }
.field-group h2 {
  font-size: 1.5rem;
  margin-bottom: 1.8rem;
}

.choice-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.choice-row.three {
  grid-template-columns: repeat(3, 1fr);
}

.choice {
  border: 1px solid var(--line-strong);
  background: transparent;
  color: var(--ink);
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: left;
  transition: border-color 0.2s ease, background 0.2s ease;
}
.choice:hover { border-color: var(--gold); }
.choice.selected {
  border-color: var(--gold);
  background: rgba(204, 159, 76, 0.08);
}
.choice-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
}
.choice-note {
  font-size: 0.85rem;
  color: var(--ink-muted);
}

.text-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.4rem;
  font-size: 0.9rem;
  color: var(--ink-muted);
}
.text-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-top: 1.4rem;
}
.text-row .text-field { margin-top: 0; }

input, textarea {
  background: var(--surface);
  border: 1px solid var(--line-strong);
  color: var(--ink);
  padding: 0.8rem 0.9rem;
  font-family: inherit;
  font-size: 0.95rem;
  resize: vertical;
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--gold);
}

.summary {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 2rem;
}
.summary > div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid var(--line);
  padding-bottom: 0.6rem;
}
.summary dt { color: var(--ink-faint); font-size: 0.85rem; }
.summary dd { margin: 0; text-align: right; }

.fine-print {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: var(--ink-faint);
}

.nav-row {
  margin-top: 2.2rem;
  padding-top: 1.6rem;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
}

.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

@media (max-width: 860px) {
  .booking-grid { grid-template-columns: 1fr; }
  .stepper {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  .step {
    border-left: none;
    border-bottom: 2px solid var(--line);
    padding: 0.5rem 0.8rem;
  }
  .step.done { border-color: var(--line-strong); }
  .step.active { border-color: var(--gold); }
  .choice-row.three { grid-template-columns: 1fr 1fr; }
  .text-row { grid-template-columns: 1fr; }
}
</style>
