<template>
  <div class="tp-wrapper">
    <section class="tp-card">
      <div class="tp-header">
        <div class="tp-header-copy">
          <h1 class="tp-title">Tafelplan</h1>
        </div>
      </div>

      <div class="tp-toolbar">
        <div class="tp-tabs">
          <button :class="['tp-tab', view === 'binnen' && 'active']" @click="view = 'binnen'">
            🍽 Restaurant
          </button>
          <button :class="['tp-tab', view === 'terras' && 'active']" @click="view = 'terras'">
            ☀️ Terras
          </button>
        </div>
        <div class="tp-toolbar-side">
          <div class="tp-legend">
            <span class="tp-legend-item">
              <span class="tp-legend-swatch"></span>
              Geen info
            </span>
            <span class="tp-legend-item">
              <span class="tp-legend-swatch tp-legend-swatch--active"></span>
              Tafelinfo ingevuld
            </span>
          </div>
          <button class="tp-reset-btn" @click="resetTableInfo">↺ Reset tafelinfo</button>
        </div>
      </div>

      <div class="tp-plan-shell">
        <div class="tp-plan-scroll">
          <div class="tp-plan">
            <div class="tp-plan-zone">{{ currentZoneLabel }}</div>

            <!-- BINNEN -->
            <template v-if="view === 'binnen'">
              <div class="struct room-box" style="left:20%;top:22%;width:55%;height:47%"></div>
              <div class="struct bar-box" style="left:27%;top:71%;width:40%;height:13%">
                <span>bar</span>
              </div>
              <div class="plan-label" style="right:2%;top:0.5%">ingang ↑</div>

              <div
                v-for="t in binnenTafels"
                :key="t.nr"
                class="tafel"
                :class="{ 'tafel--round': t.round, 'tafel--active': hasTableInfo(t.nr) }"
                :style="{ left: t.x + '%', top: t.y + '%' }"
                @click="openModal(t)"
              >
                <span class="t-nr">{{ t.nr }}</span>
                <span
                  v-if="tafelLang[t.nr]"
                  class="t-flag"
                  :title="getLanguageName(tafelLang[t.nr])"
                >
                  {{ langFlags[tafelLang[t.nr]] }}
                </span>
                <span
                  v-if="tafelBill[t.nr]"
                  class="t-badge t-badge--bill"
                  :title="`Rekening ${getBillLabel(tafelBill[t.nr]).toLowerCase()}`"
                >
                  {{ getBillShort(tafelBill[t.nr]) }}
                </span>
                <span
                  v-if="tafelNote[t.nr]"
                  class="t-badge t-badge--note"
                  title="Speciale opmerking"
                >
                  !
                </span>
              </div>
            </template>

            <!-- TERRAS -->
            <template v-else>
              <div class="struct fence-box" style="left:6%;top:7%;width:87%;height:82%"></div>

              <div
                v-for="t in terrasTafels"
                :key="t.nr"
                class="tafel"
                :class="{ 'tafel--active': hasTableInfo(t.nr) }"
                :style="{ left: t.x + '%', top: t.y + '%' }"
                @click="openModal(t)"
              >
                <span class="t-nr">{{ t.nr }}</span>
                <span
                  v-if="tafelLang[t.nr]"
                  class="t-flag"
                  :title="getLanguageName(tafelLang[t.nr])"
                >
                  {{ langFlags[tafelLang[t.nr]] }}
                </span>
                <span
                  v-if="tafelBill[t.nr]"
                  class="t-badge t-badge--bill"
                  :title="`Rekening ${getBillLabel(tafelBill[t.nr]).toLowerCase()}`"
                >
                  {{ getBillShort(tafelBill[t.nr]) }}
                </span>
                <span
                  v-if="tafelNote[t.nr]"
                  class="t-badge t-badge--note"
                  title="Speciale opmerking"
                >
                  !
                </span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="showModal" class="tp-overlay" @click.self="closeModal">
        <div class="tp-modal">
          <div class="tp-modal-head">
            <h3>Tafel <strong>{{ selectedTafel?.nr }}</strong></h3>
            <button class="tp-modal-x" @click="closeModal">✕</button>
          </div>
          <p class="tp-modal-hint">Bewaar hier de taal, rekening en eventuele speciale opmerking.</p>
          <div class="tp-langs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              class="tp-lang-btn"
              :class="{ selected: selectedLang === lang.code }"
              @click="selectedLang = lang.code"
            >
              <span class="lang-flag-big">{{ lang.flag }}</span>
              <span class="lang-name">{{ lang.name }}</span>
            </button>
          </div>
          <div class="tp-section">
            <p class="tp-section-title">Rekening</p>
            <div class="tp-bill-options">
              <button
                v-for="option in billOptions"
                :key="option.code"
                type="button"
                class="tp-bill-btn"
                :class="{ selected: selectedBill === option.code }"
                @click="selectedBill = option.code"
              >
                <span class="tp-bill-short">{{ option.short }}</span>
                <span>{{ option.label }}</span>
              </button>
            </div>
          </div>
          <div class="tp-section">
            <label class="tp-section-title" for="tp-note">Speciale opmerking</label>
            <textarea
              id="tp-note"
              v-model="selectedNote"
              class="tp-note-input"
              rows="3"
              maxlength="140"
              placeholder="Bijvoorbeeld: verjaardag, allergie, vaste klant, apart tempo..."
            ></textarea>
          </div>
          <div class="tp-modal-foot">
            <button
              v-if="selectedTafel && hasTableInfo(selectedTafel.nr)"
              class="tp-btn-clear"
              @click="clearTableInfo"
            >
              Leegmaken
            </button>
            <button class="tp-btn-save" @click="saveTableInfo">Opslaan</button>
            <button class="tp-btn-close" @click="closeModal">Sluiten</button>
          </div>
        </div>
      </div>
    </Teleport>

  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const LANG_STORE_KEY = 'tp-langs'
const NOTE_STORE_KEY = 'tp-notes'
const BILL_STORE_KEY = 'tp-bills'

const view = ref('binnen')
const showModal = ref(false)
const selectedTafel = ref(null)
const selectedLang = ref('')
const selectedNote = ref('')
const selectedBill = ref('')

const tafelLang = reactive(
  (() => { try { return JSON.parse(localStorage.getItem(LANG_STORE_KEY) || '{}') } catch { return {} } })()
)
const tafelNote = reactive(
  (() => { try { return JSON.parse(localStorage.getItem(NOTE_STORE_KEY) || '{}') } catch { return {} } })()
)
const tafelBill = reactive(
  (() => { try { return JSON.parse(localStorage.getItem(BILL_STORE_KEY) || '{}') } catch { return {} } })()
)

const languages = [
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'fr', name: 'Frans',      flag: '🇫🇷' },
  { code: 'en', name: 'Engels',     flag: '🇬🇧' },
  { code: 'de', name: 'Duits',      flag: '🇩🇪' },
  { code: 'es', name: 'Spaans',     flag: '🇪🇸' },
]
const langFlags = { nl: '🇳🇱', fr: '🇫🇷', en: '🇬🇧', de: '🇩🇪', es: '🇪🇸' }
const languageMap = Object.fromEntries(languages.map(lang => [lang.code, lang]))
const billOptions = [
  { code: 'geschreven', label: 'Geschreven', short: 'G' },
  { code: 'getikt', label: 'Getikt', short: 'T' },
]
const billMap = Object.fromEntries(billOptions.map(option => [option.code, option]))

// Indoor layout — entrance at top, tafel 25 at bottom
// x/y = center of table in % of plan container
const binnenTafels = [
  // Entrance row (top)
  { nr: 1,   x: 9,  y: 8 },
  { nr: 2,   x: 18, y: 8 },
  { nr: 3,   x: 27, y: 8 },
  { nr: 4,   x: 36, y: 8 },
  { nr: 6,   x: 50, y: 8 },
  { nr: 7,   x: 59, y: 8 },
  // Same line below entrance
  { nr: 101, x: 9,  y: 17 },
  { nr: 103, x: 27, y: 17 },
  { nr: 104, x: 50, y: 17 },
  { nr: 105, x: 64, y: 17 },
  // Main room — row 1
  { nr: 37,  x: 25, y: 28 },
  { nr: 38,  x: 44, y: 28 },
  { nr: 39,  x: 60, y: 28 },
  // Main room — row 2 (touching row 1)
  { nr: 137, x: 25, y: 36 },
  { nr: 138, x: 44, y: 36 },
  // Main room — row 3
  { nr: 33,  x: 25, y: 49 },
  { nr: 36,  x: 62, y: 43 },
  // Main room — row 4 (bottom of box)
  { nr: 30,  x: 25, y: 60 },
  { nr: 31,  x: 36, y: 60 },
  { nr: 32,  x: 49, y: 60 },
  { nr: 35,  x: 62, y: 54 },
  // Right of main room — touching
  { nr: 128, x: 76, y: 37 },
  { nr: 28,  x: 83, y: 37 },
  // Far right column (lower)
  { nr: 21,  x: 93, y: 46 },
  { nr: 22,  x: 93, y: 60 },
  { nr: 23,  x: 93, y: 74 },
  // Oval/round table
  { nr: 27,  x: 83, y: 64, round: true },
  // Bottom right (near bar exit)
  { nr: 26,  x: 73, y: 88 },
  { nr: 25,  x: 83, y: 88 },
  { nr: 24,  x: 92, y: 88 },
]

// Terrace layout — compact 3x4 grid, tafel 50 at top left
// Columns: x0→x=28%, x1→x=50%, x2→x=72%
// Rows:    5x→y=20%, 6x→y=38%, 7x→y=56%, 8x→y=74%
const terrasTafels = [
  { nr: 50, x: 28, y: 20 }, { nr: 51, x: 50, y: 20 }, { nr: 52, x: 72, y: 20 },
  { nr: 60, x: 28, y: 38 }, { nr: 61, x: 50, y: 38 }, { nr: 62, x: 72, y: 38 },
  { nr: 70, x: 28, y: 56 }, { nr: 71, x: 50, y: 56 }, { nr: 72, x: 72, y: 56 },
  { nr: 80, x: 28, y: 74 }, { nr: 81, x: 50, y: 74 }, { nr: 82, x: 72, y: 74 },
]

const currentZoneLabel = computed(() => (view.value === 'binnen' ? 'Restaurant' : 'Terras'))

function save() {
  localStorage.setItem(LANG_STORE_KEY, JSON.stringify({ ...tafelLang }))
  localStorage.setItem(NOTE_STORE_KEY, JSON.stringify({ ...tafelNote }))
  localStorage.setItem(BILL_STORE_KEY, JSON.stringify({ ...tafelBill }))
}

function getLanguageName(code) {
  return languageMap[code]?.name || code
}

function getBillLabel(code) {
  return billMap[code]?.label || code
}

function getBillShort(code) {
  return billMap[code]?.short || '?'
}

function hasTableInfo(nr) {
  return !!tafelLang[nr] || !!tafelBill[nr] || !!tafelNote[nr]
}

function openModal(t) {
  selectedTafel.value = t
  selectedLang.value = tafelLang[t.nr] || ''
  selectedBill.value = tafelBill[t.nr] || ''
  selectedNote.value = tafelNote[t.nr] || ''
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  selectedTafel.value = null
  selectedLang.value = ''
  selectedBill.value = ''
  selectedNote.value = ''
}

function saveTableInfo() {
  if (!selectedTafel.value) return

  const tafelNr = selectedTafel.value.nr
  const note = selectedNote.value.trim()

  if (selectedLang.value) tafelLang[tafelNr] = selectedLang.value
  else delete tafelLang[tafelNr]

  if (selectedBill.value) tafelBill[tafelNr] = selectedBill.value
  else delete tafelBill[tafelNr]

  if (note) tafelNote[tafelNr] = note
  else delete tafelNote[tafelNr]

  save()
  closeModal()
}

function clearTableInfo() {
  if (!selectedTafel.value) return

  const tafelNr = selectedTafel.value.nr
  delete tafelLang[tafelNr]
  delete tafelBill[tafelNr]
  delete tafelNote[tafelNr]

  save()
  closeModal()
}

function resetTableInfo() {
  Object.keys(tafelLang).forEach(k => delete tafelLang[k])
  Object.keys(tafelBill).forEach(k => delete tafelBill[k])
  Object.keys(tafelNote).forEach(k => delete tafelNote[k])
  save()
}
</script>

<style scoped>
.tp-wrapper {
  margin: 0.9rem 0 1.25rem;
}

.tp-card {
  background: rgba(20, 84, 164, 0.72);
  border: 1px solid rgba(149, 204, 255, 0.38);
  border-radius: 1rem;
  box-shadow: 0 14px 36px rgba(4, 28, 66, 0.24);
  padding: 0.8rem;
}

.tp-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.7rem;
}

.tp-header-copy {
  max-width: 42rem;
}

.tp-eyebrow {
  margin: 0 0 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #bfdbfe;
}

.tp-title {
  margin: 0;
  font-size: clamp(1.55rem, 2.4vw, 2rem);
  font-weight: 800;
  color: #ffffff;
}

.tp-subtitle {
  margin: 0.2rem 0 0;
  max-width: 38rem;
  color: #dbeafe;
  line-height: 1.4;
}

.tp-summary {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.75rem;
}

.tp-stat {
  min-width: 9rem;
  padding: 0.8rem 0.95rem;
  border-radius: 0.9rem;
  border: 1px solid rgba(172, 221, 255, 0.28);
  background: rgba(8, 52, 111, 0.48);
  color: #eff8ff;
}

.tp-stat--accent {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.28), rgba(21, 128, 61, 0.36));
  border-color: rgba(167, 243, 208, 0.32);
}

.tp-stat-label {
  display: block;
  margin-bottom: 0.2rem;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #bfdbfe;
}

.tp-stat strong {
  font-size: 1.1rem;
  color: #ffffff;
}

.tp-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.tp-tabs {
  display: flex;
  gap: 2px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  padding: 3px;
}

.tp-tab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 1.15rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}

.tp-tab.active {
  background: #ffffff;
  color: #0d4a98;
  box-shadow: 0 6px 18px rgba(3, 18, 43, 0.22);
}

.tp-toolbar-side {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
}

.tp-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tp-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(172, 221, 255, 0.24);
  background: rgba(8, 52, 111, 0.44);
  color: #dbeafe;
  font-size: 0.8rem;
}

.tp-legend-swatch {
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 999px;
  background: linear-gradient(180deg, #3560a4, #203867);
  border: 1px solid rgba(191, 219, 254, 0.35);
}

.tp-legend-swatch--active {
  background: linear-gradient(180deg, #1eb980, #166534);
  border-color: rgba(187, 247, 208, 0.4);
}

.tp-reset-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 0.95rem;
  border: 1px solid rgba(248, 113, 113, 0.5);
  border-radius: 0.8rem;
  background: rgba(127, 29, 29, 0.22);
  color: #fecaca;
  font-size: 0.86rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}

.tp-reset-btn:hover {
  background: rgba(153, 27, 27, 0.34);
  color: #fff;
  border-color: rgba(248, 113, 113, 0.8);
}

.tp-plan-shell {
  background: rgba(9, 56, 118, 0.56);
  border: 1px solid rgba(172, 221, 255, 0.34);
  border-radius: 1rem;
}

.tp-plan-shell {
  padding: 0.7rem;
}

.tp-plan-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 0.9rem;
}

.tp-plan {
  position: relative;
  width: 100%;
  min-width: 620px;
  aspect-ratio: 10 / 7.8;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0) 18%),
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.55), transparent 34%),
    repeating-linear-gradient(0deg, rgba(59, 130, 246, 0.05) 0, rgba(59, 130, 246, 0.05) 1px, transparent 1px, transparent 22px),
    repeating-linear-gradient(90deg, rgba(59, 130, 246, 0.045) 0, rgba(59, 130, 246, 0.045) 1px, transparent 1px, transparent 22px),
    linear-gradient(145deg, #f4f9ff 0%, #e2efff 52%, #cfe3ff 100%);
  border-radius: 1rem;
  border: 1px solid rgba(96, 165, 250, 0.32);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.48),
    0 16px 30px rgba(2, 12, 32, 0.18);
  overflow: hidden;
}

.tp-plan-zone {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 3;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(13, 74, 152, 0.88);
  color: #ffffff;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 8px 18px rgba(6, 26, 56, 0.2);
}

.struct {
  position: absolute;
  pointer-events: none;
}

.room-box {
  border: 2px solid rgba(37, 99, 235, 0.5);
  background: linear-gradient(180deg, rgba(191, 219, 254, 0.32), rgba(147, 197, 253, 0.18));
  border-radius: 1rem;
}

.bar-box {
  border: 2px solid rgba(29, 78, 216, 0.55);
  background: linear-gradient(180deg, rgba(147, 197, 253, 0.5), rgba(96, 165, 250, 0.28));
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bar-box > span {
  font-size: clamp(0.6rem, 1.4vw, 0.85rem);
  font-weight: 700;
  color: #1e3a8a;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}
.fence-box {
  border: 3px solid rgba(37, 99, 235, 0.42);
  background: rgba(255, 255, 255, 0.14);
  border-radius: 1rem;
}

.plan-label {
  position: absolute;
  font-size: clamp(0.55rem, 1.1vw, 0.72rem);
  font-weight: 700;
  color: #1d4ed8;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  pointer-events: none;
}

.tafel {
  position: absolute;
  width: 7.4%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  background: linear-gradient(180deg, #355f9f 0%, #233f73 100%);
  border-radius: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgba(191, 219, 254, 0.18);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 8px 16px rgba(15, 23, 42, 0.28);
  transition: transform 0.14s ease, box-shadow 0.14s ease, background 0.14s ease;
  z-index: 2;
}

.tafel:hover {
  transform: translate(-50%, -50%) scale(1.12);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.16),
    0 14px 26px rgba(15, 23, 42, 0.34);
  z-index: 10;
}

.tafel:active {
  transform: translate(-50%, -50%) scale(1.08);
}

.tafel--round {
  border-radius: 50%;
}

.tafel--active {
  background: linear-gradient(180deg, #20b581 0%, #15724e 100%);
  border-color: rgba(209, 250, 229, 0.48);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    0 12px 24px rgba(21, 128, 61, 0.28);
}

.t-nr {
  font-size: clamp(0.52rem, 1.3vw, 0.82rem);
  font-weight: 700;
  color: #fff;
  line-height: 1;
}

.t-flag {
  position: absolute;
  top: -0.7rem;
  right: -0.7rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  padding: 0 0.24rem;
  border-radius: 999px;
  background: #ffffff;
  border: 2px solid rgba(191, 219, 254, 0.95);
  box-shadow:
    0 8px 20px rgba(15, 23, 42, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.65);
  font-size: clamp(0.95rem, 1.7vw, 1.25rem);
  line-height: 1;
  z-index: 3;
}

.t-badge {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.15rem;
  height: 1.15rem;
  padding: 0 0.2rem;
  border-radius: 999px;
  font-size: 0.64rem;
  font-weight: 800;
  line-height: 1;
  color: #0f172a;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.24);
}

.t-badge--bill {
  left: -0.35rem;
  bottom: -0.35rem;
  background: #e0f2fe;
  border: 1px solid #7dd3fc;
}

.t-badge--note {
  right: -0.2rem;
  bottom: -0.45rem;
  background: #fef3c7;
  border: 1px solid #fbbf24;
}

.tp-overlay {
  position: fixed;
  inset: 0;
  background: rgba(2, 12, 32, 0.58);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}
.tp-modal {
  background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
  border-radius: 16px;
  padding: 1.5rem;
  width: min(92vw, 390px);
  box-shadow: 0 16px 56px rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(191, 219, 254, 0.5);
}

.tp-modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}
.tp-modal-head h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #0d4a98;
}

.tp-modal-x {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #6b7280;
  padding: 0.25rem 0.4rem;
  border-radius: 5px;
  line-height: 1;
  transition: color 0.1s, background 0.1s;
}
.tp-modal-x:hover {
  color: #111;
  background: #f3f4f6;
}
.tp-modal-hint {
  margin: 0 0 1rem;
  font-size: 0.83rem;
  color: #6b7280;
}

.tp-langs {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.tp-lang-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 0.65rem 0.2rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.12s;
}

.tp-lang-btn:hover {
  border-color: #3b82f6;
  background: #eff6ff;
  transform: translateY(-1px);
}

.tp-lang-btn.selected {
  border-color: #0d4a98;
  background: #dbeafe;
}

.lang-flag-big {
  font-size: 1.8rem;
  line-height: 1;
}

.lang-name {
  font-size: 0.58rem;
  font-weight: 600;
  color: #374151;
  text-align: center;
}

.tp-section {
  margin-bottom: 1rem;
}

.tp-section-title {
  display: block;
  margin: 0 0 0.45rem;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4b5563;
}

.tp-bill-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.55rem;
}

.tp-bill-btn {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 0.85rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.9rem;
  background: #f9fafb;
  color: #374151;
  cursor: pointer;
  transition: all 0.12s;
}

.tp-bill-btn:hover {
  border-color: #93c5fd;
  background: #eff6ff;
}

.tp-bill-btn.selected {
  border-color: #0d4a98;
  background: #dbeafe;
  color: #0f3f83;
}

.tp-bill-short {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 999px;
  background: rgba(13, 74, 152, 0.1);
  font-weight: 800;
}

.tp-note-input {
  width: 100%;
  resize: vertical;
  min-height: 5.5rem;
  padding: 0.8rem 0.9rem;
  border: 1px solid #d1d5db;
  border-radius: 0.9rem;
  background: #f9fafb;
  color: #111827;
  font: inherit;
  line-height: 1.45;
}

.tp-note-input:focus {
  outline: none;
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.18);
}

.tp-modal-foot {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.tp-btn-clear {
  padding: 0.42rem 1rem;
  border: 1px solid #fca5a5;
  border-radius: 7px;
  background: #fef2f2;
  color: #dc2626;
  cursor: pointer;
  font-size: 0.83rem;
  transition: background 0.12s;
}
.tp-btn-clear:hover {
  background: #fee2e2;
}

.tp-btn-close {
  padding: 0.42rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 7px;
  background: #f3f4f6;
  color: #374151;
  cursor: pointer;
  font-size: 0.83rem;
  transition: background 0.12s;
}
.tp-btn-close:hover {
  background: #e5e7eb;
}

.tp-btn-save {
  padding: 0.42rem 1rem;
  border: 1px solid #0d4a98;
  border-radius: 7px;
  background: #0d4a98;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.83rem;
  font-weight: 700;
  transition: background 0.12s, border-color 0.12s;
}

.tp-btn-save:hover {
  background: #0b3f81;
  border-color: #0b3f81;
}

@media (max-width: 980px) {
  .tp-header {
    flex-direction: column;
  }

  .tp-summary {
    width: 100%;
    justify-content: flex-start;
  }
}

@media (max-width: 720px) {
  .tp-card {
    padding: 0.7rem;
  }

  .tp-plan {
    min-width: 520px;
  }

  .tp-tab,
  .tp-reset-btn {
    width: 100%;
    justify-content: center;
  }

  .tp-tabs,
  .tp-toolbar-side {
    width: 100%;
  }

  .tp-tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .tp-toolbar-side {
    justify-content: stretch;
  }

  .tp-legend {
    width: 100%;
  }

  .tp-language-list {
    gap: 0.5rem;
  }

  .tp-langs {
    grid-template-columns: repeat(3, 1fr);
  }

  .tp-bill-options {
    grid-template-columns: 1fr;
  }
}
</style>
