<template>
  <div class="pmc-root">

    <!-- ── Controls (hidden on print) ────────────────────────────── -->
    <div class="pmc-controls print:hidden">
      <div class="pmc-controls-inner">
        <div>
          <h1 class="pmc-controls-title">Afdrukbare menukaart</h1>
          <p class="pmc-controls-sub">
            A4 · 2 kolommen · dranken eerst, daarna eten op nieuwe pagina's
          </p>
        </div>
        <div class="pmc-controls-actions">
          <span v-if="loading" class="pmc-loading-text">
            <svg class="pmc-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25"/>
              <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" class="opacity-75"/>
            </svg>
            Laden…
          </span>
          <span v-if="fetchError" class="pmc-error-text">{{ fetchError }}</span>
          <button v-if="fetchError" @click="loadMenu" class="pmc-btn-retry">Opnieuw</button>
          <button v-if="!loading && !fetchError" @click="printNow" class="pmc-btn-print">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9V2h12v7"/><rect x="6" y="14" width="12" height="8"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            </svg>
            Afdrukken
          </button>
          <button v-if="!loading && !fetchError" @click="downloadPDF" :disabled="pdfBusy" class="pmc-btn-pdf">
            <svg v-if="!pdfBusy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <svg v-else class="pmc-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25"/>
              <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" class="opacity-75"/>
            </svg>
            {{ pdfBusy ? 'Genereren…' : 'Download PDF' }}
          </button>
        </div>
      </div>
    </div>

    <!-- ── Loading / Error ────────────────────────────────────────── -->
    <div v-if="loading" class="pmc-state print:hidden">
      <div class="pmc-spinner"></div>
      <p>Menu wordt geladen…</p>
    </div>
    <div v-else-if="fetchError" class="pmc-state pmc-state--error print:hidden">
      <p>{{ fetchError }}</p>
    </div>

    <!-- ── Menu ──────────────────────────────────────────────────── -->
    <template v-else-if="drinkGroups.length || foodGroups.length">

      <!-- ════ SCREEN PREVIEW ════════════════════════════════════ -->
      <div class="pmc-screen-wrapper print:hidden">

        <!-- Drinks block -->
        <div class="pmc-preview-label">Dranken</div>
        <div class="pmc-screen-page">
          <div class="pmc-logo-container">
            <img src="/logo-venise-white.png" alt="Bistro Venise" class="pmc-logo">
          </div>
          <div class="pmc-cols">
            <template v-for="group in drinkGroups" :key="'sd-'+group.id">
              <GroupBlock v-bind="groupProps(group)" />
            </template>
          </div>
        </div>

        <!-- Page-break indicator -->
        <div class="pmc-page-break-indicator">
          <span>— nieuwe A4-pagina —</span>
        </div>

        <!-- Food block -->
        <div class="pmc-preview-label">Eten</div>
        <div class="pmc-screen-page">
          <div class="pmc-cols">
            <template v-for="group in foodGroups" :key="'sf-'+group.id">
              <GroupBlock v-bind="groupProps(group)" />
            </template>
          </div>
        </div>

      </div>

      <!-- ════ PRINT-ONLY ════════════════════════════════════════ -->
      <div class="pmc-print-root">

        <!-- Drinks: fills A4 pages until done, then hard page break -->
        <div class="pmc-print-section pmc-print-drinks">
          <div class="pmc-logo-container">
            <img src="/logo-venise-white.png" alt="Bistro Venise" class="pmc-logo">
          </div>
          <template v-for="group in drinkGroups" :key="'pd-'+group.id">
            <GroupBlock v-bind="groupProps(group)" />
          </template>
        </div>

        <!-- Food: always starts on a fresh A4 page -->
        <div class="pmc-print-section pmc-print-food">
          <template v-for="group in foodGroups" :key="'pf-'+group.id">
            <GroupBlock v-bind="groupProps(group)" />
          </template>
        </div>

      </div>

    </template>
  </div>
</template>

<script setup>
import { computed, defineComponent, h, onMounted, ref } from 'vue'
import jsPDF from 'jspdf'

/* ── Shared item renderer ──────────────────────────────────────── */
function renderItem(item, props) {
  const priceStr = props.getPrice(item)
  const descStr  = props.getDesc(item)
  const row = h('div', { class: 'pmc-item-row' }, [
    h('span', { class: 'pmc-item-name' }, props.getName(item)),
    h('span', { class: 'pmc-dots' }),
    h('span', { class: 'pmc-item-price' }, priceStr),
  ])
  return h('div', { class: 'pmc-item' }, descStr
    ? [row, h('p', { class: 'pmc-item-desc' }, descStr)]
    : [row]
  )
}

const GroupBlock = defineComponent({
  name: 'GroupBlock',
  props: { group: Object, getName: Function, getDesc: Function, getPrice: Function, available: Function },
  setup(props) {
    return () => {
      const g = props.group
      const nodes = [h('h2', { class: 'pmc-group-title' }, props.getName(g))]

      if (g.items?.length) {
        for (const item of props.available(g.items)) {
          nodes.push(renderItem(item, props))
        }
      }
      for (const sg of g.subgroups || []) {
        const avail = props.available(sg.items)
        if (!avail.length) continue
        nodes.push(h('p', { class: 'pmc-subgroup-title' }, props.getName(sg)))
        for (const item of avail) nodes.push(renderItem(item, props))
      }

      return h('div', { class: 'pmc-group' }, nodes)
    }
  },
})

/* ── Helpers ───────────────────────────────────────────────────── */
const API_URL = 'https://tmc-prod-api.azurewebsites.net/slug/veniseodk/menus'
const loading    = ref(true)
const fetchError = ref('')
const allGroups  = ref([])

const DRINK_UNIT = { 0:'', 1:'dl', 2:'cl', 3:'l', 4:'glas', 5:'½l', 6:'½fl', 7:'fl', 8:'p.p.' }
const FOOD_UNIT  = { 0:'', 1:'g',  2:'kg', 3:'l', 4:'st',   5:'/100g', 6:'p.p.', 7:'st.', 8:'portie' }

function nl(obj) {
  const arr = obj.names || []
  return arr.find(n => n.languageId === 'nl')?.value || arr.find(n => n.value)?.value || ''
}
function desc(item) {
  return (item.descriptions || []).find(n => n.languageId === 'nl')?.value?.trim() || ''
}
function available(items) {
  return (items || []).filter(i => i.isAvailable !== false)
}
function fmtEuro(n) {
  return n == null ? '' : '€ ' + n.toFixed(2).replace('.', ',')
}
function price(item) {
  const dp  = item.drinkItemPrices || []
  const fp  = item.foodItemPrices  || []
  const mp  = item.menuItemPrices  || []
  const src = dp.length ? dp : fp.length ? fp : mp
  if (!src.length) return ''
  const isDrink = !!dp.length
  return src.map(p => {
    const unit = (isDrink ? DRINK_UNIT : FOOD_UNIT)[isDrink ? p.drinkUnitType : p.foodUnitType] ?? ''
    const amt  = p.amount ? `${p.amount}${unit}` : unit
    return amt ? `${amt} ${fmtEuro(p.price)}` : fmtEuro(p.price)
  }).join(' · ')
}

function groupProps(group) {
  return { group, getName: nl, getDesc: desc, getPrice: price, available }
}

function groupItemType(g) {
  for (const item of g.items || []) {
    if (item.itemType === 1) return 'drink'
    if (item.itemType === 2) return 'food'
  }
  for (const sg of g.subgroups || []) {
    for (const item of sg.items || []) {
      if (item.itemType === 1) return 'drink'
      if (item.itemType === 2) return 'food'
    }
  }
  return null
}
function hasContent(g) {
  return (g.items || []).some(i => i.isAvailable !== false)
    || (g.subgroups || []).some(sg => (sg.items || []).some(i => i.isAvailable !== false))
}

const drinkGroups = computed(() => allGroups.value.filter(g => groupItemType(g) === 'drink' && hasContent(g)))
const foodGroups  = computed(() => allGroups.value.filter(g => groupItemType(g) === 'food'  && hasContent(g)))

async function loadMenu() {
  loading.value    = true
  fetchError.value = ''
  try {
    const res = await fetch(API_URL)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = await res.json()
    allGroups.value = json.data?.groups || []
  } catch (e) {
    fetchError.value = `Menu kon niet geladen worden: ${e.message}`
  } finally {
    loading.value = false
  }
}

function printNow() { window.print() }

/* ── PDF generation ─────────────────────────────────────────────
   Two-column A4 layout built programmatically with jsPDF.
   No html2canvas – layout is calculated directly so fonts,
   columns and page breaks are always correct.
──────────────────────────────────────────────────────────────── */
const pdfBusy = ref(false)

async function downloadPDF() {
  pdfBusy.value = true
  await new Promise(r => setTimeout(r, 20)) // allow UI to update

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

  // ── Page geometry ──────────────────────────────────────────────
  const PW = 210, PH = 297
  const ML = 11, MR = 11, MT = 11, MB = 11
  const GAP = 13                              // between columns
  const COL_W = (PW - ML - MR - GAP) / 2     // ≈ 87.5 mm
  const COL_X = [ML, ML + COL_W + GAP]       // left edge per column
  const MAX_Y = PH - MB

  let col = 0   // 0 = left, 1 = right
  let y   = MT

  // ── Column / page helpers ──────────────────────────────────────
  function x() { return COL_X[col] }

  function nextCol() {
    if (col === 0) { col = 1; y = MT }
    else           { doc.addPage(); col = 0; y = MT }
  }

  function ensureSpace(needed) {
    if (y + needed > MAX_Y) nextCol()
  }

  function forcePage() {
    doc.addPage(); col = 0; y = MT
  }

  // ── Draw helpers ───────────────────────────────────────────────
  const NAVY  = [12,  45, 107]
  const BLACK = [26,  26,  26]
  const GREY  = [100, 100, 100]
  const LGREY = [187, 187, 187]

  function setColor(rgb) { doc.setTextColor(...rgb) }

  function drawGroupTitle(title) {
    // Keep title + at least one item together: reserve ~8 mm
    ensureSpace(8)
    setColor(NAVY)
    doc.setFont('times', 'bold')
    doc.setFontSize(8)
    const t = title.toUpperCase()
    doc.text(t, x(), y)
    // underline
    doc.setDrawColor(...NAVY)
    doc.setLineWidth(0.25)
    doc.line(x(), y + 0.6, x() + COL_W, y + 0.6)
    y += 3.8
  }

  function drawSubgroupTitle(title) {
    ensureSpace(5)
    y += 0.8
    setColor(GREY)
    doc.setFont('times', 'italic')
    doc.setFontSize(7)
    doc.text(title, x(), y)
    y += 3
  }

  function drawItem(name, priceStr, description) {
    const lineH   = 3.4
    const descH   = description ? 2.8 : 0
    ensureSpace(lineH + descH)

    // Name
    doc.setFont('times', 'normal')
    doc.setFontSize(7.5)
    setColor(BLACK)
    const priceW  = doc.getTextWidth(priceStr) + 0.5
    const maxNameW = COL_W - priceW - 3

    let displayName = name
    // Trim name to fit
    while (doc.getTextWidth(displayName) > maxNameW && displayName.length > 1) {
      displayName = displayName.slice(0, -1)
    }
    if (displayName !== name) displayName = displayName.trimEnd() + '…'
    doc.text(displayName, x(), y)

    // Price (right-aligned)
    doc.setFont('times', 'bold')
    doc.setFontSize(7)
    setColor(BLACK)
    doc.text(priceStr, x() + COL_W, y, { align: 'right' })

    // Dot leaders
    const nameEndX  = x() + doc.setFontSize(7.5).getTextWidth(displayName) + 1.5
    const priceStartX = x() + COL_W - priceW
    if (priceStartX > nameEndX + 2) {
      doc.setDrawColor(...LGREY)
      doc.setLineWidth(0.2)
      doc.setLineDashPattern([0.4, 1.2], 0)
      doc.line(nameEndX, y - 0.5, priceStartX - 1, y - 0.5)
      doc.setLineDashPattern([], 0)
    }

    y += lineH

    // Description
    if (description) {
      doc.setFont('times', 'italic')
      doc.setFontSize(6.5)
      setColor(GREY)
      const lines = doc.splitTextToSize(description, COL_W)
      doc.text(lines[0], x(), y) // max 1 description line to keep compact
      y += descH
    }
  }

  function drawSectionRule(label) {
    ensureSpace(6)
    const halfW = (COL_W - doc.getTextWidth(label) - 4) / 2
    doc.setDrawColor(184, 134, 11)
    doc.setLineWidth(0.3)
    doc.line(x(), y - 0.4, x() + halfW, y - 0.4)
    setColor([184, 134, 11])
    doc.setFont('times', 'bold')
    doc.setFontSize(7.5)
    doc.text(label, x() + halfW + 2, y)
    doc.setDrawColor(184, 134, 11)
    doc.line(x() + halfW + doc.getTextWidth(label) + 4, y - 0.4, x() + COL_W, y - 0.4)
    y += 4
  }

  // ── Column divider on each page (drawn after content) ─────────
  // We'll draw it at the end per page using jsPDF events – simpler
  // to just draw after we know which pages exist.
  const drawnDividers = new Set()
  function drawDivider() {
    const p = doc.internal.getCurrentPageInfo().pageNumber
    if (drawnDividers.has(p)) return
    drawnDividers.add(p)
    const cx = ML + COL_W + GAP / 2
    doc.setDrawColor(180, 195, 210)
    doc.setLineWidth(0.25)
    doc.setLineDashPattern([1, 2], 0)
    doc.line(cx, MT, cx, PH - MB)
    doc.setLineDashPattern([], 0)
  }

  // ── Render a group (shared for drinks and food) ────────────────
  function renderGroup(g) {
    drawGroupTitle(nl(g))

    const directItems = available(g.items || [])
    for (const item of directItems) {
      drawItem(nl(item), price(item), desc(item))
    }

    for (const sg of g.subgroups || []) {
      const sgItems = available(sg.items || [])
      if (!sgItems.length) continue
      drawSubgroupTitle(nl(sg))
      for (const item of sgItems) {
        drawItem(nl(item), price(item), desc(item))
      }
    }

    y += 2.5 // spacing after group
  }

  // ── Layout: drinks ─────────────────────────────────────────────
  drawSectionRule('Dranken')
  for (const g of drinkGroups.value) renderGroup(g)

  // ── Page break between drinks and food ─────────────────────────
  forcePage()

  // ── Layout: food ───────────────────────────────────────────────
  drawSectionRule('Eten')
  for (const g of foodGroups.value) renderGroup(g)

  // ── Draw column dividers on all pages ──────────────────────────
  const totalPages = doc.internal.getNumberOfPages()
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p)
    drawDivider()
  }

  doc.save('menukaart-venise.pdf')
  pdfBusy.value = false
}

onMounted(loadMenu)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

/* ── Root ──────────────────────────────────────────────────────── */
.pmc-root { min-height: 100vh; }

/* ── Controls ──────────────────────────────────────────────────── */
.pmc-controls {
  background: rgba(255,255,255,0.08);
  border-bottom: 1px solid rgba(255,255,255,0.15);
  padding: 0.85rem 1.5rem;
}
.pmc-controls-inner {
  max-width: 860px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;
}
.pmc-controls-title { font-size: 1rem; font-weight: 700; color: #fff; margin: 0; }
.pmc-controls-sub   { font-size: 0.7rem; color: rgba(255,255,255,0.5); margin: 0.1rem 0 0; }
.pmc-controls-actions { display: flex; align-items: center; gap: 0.5rem; }
.pmc-loading-text { color: rgba(255,255,255,0.65); font-size: 0.8rem; display: flex; align-items: center; gap: 0.35rem; }
.pmc-error-text   { color: #fca5a5; font-size: 0.8rem; }
.pmc-spin { width: 0.95rem; height: 0.95rem; animation: pmc-spin 0.9s linear infinite; }
@keyframes pmc-spin { to { transform: rotate(360deg); } }
.pmc-btn-print {
  display: inline-flex; align-items: center; gap: 0.3rem;
  background: #fff; color: #0d4a98; font-size: 0.8rem; font-weight: 700;
  padding: 0.38rem 0.9rem; border-radius: 0.35rem; border: none; cursor: pointer;
  transition: background 0.12s;
}
.pmc-btn-print svg { width: 0.85rem; height: 0.85rem; }
.pmc-btn-print:hover { background: #e8f0fe; }
.pmc-btn-pdf {
  display: inline-flex; align-items: center; gap: 0.3rem;
  background: rgba(255,255,255,0.15); color: #fff; font-size: 0.8rem; font-weight: 600;
  padding: 0.38rem 0.9rem; border-radius: 0.35rem;
  border: 1px solid rgba(255,255,255,0.35); cursor: pointer;
  transition: background 0.12s;
}
.pmc-btn-pdf svg { width: 0.85rem; height: 0.85rem; }
.pmc-btn-pdf:hover:not(:disabled) { background: rgba(255,255,255,0.25); }
.pmc-btn-pdf:disabled { opacity: 0.6; cursor: default; }
.pmc-btn-retry {
  background: transparent; border: 1px solid rgba(255,255,255,0.35); color: #fff;
  font-size: 0.78rem; padding: 0.32rem 0.7rem; border-radius: 0.35rem; cursor: pointer;
}
/* ── States ───────────────────────────────────────────────────── */
.pmc-state {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: 40vh; gap: 1rem; color: rgba(255,255,255,0.65);
  font-family: sans-serif; font-size: 0.9rem;
}
.pmc-state--error { color: #fca5a5; }
.pmc-spinner {
  width: 2.25rem; height: 2.25rem;
  border: 3px solid rgba(255,255,255,0.2); border-top-color: #fff;
  border-radius: 50%; animation: pmc-spin 0.8s linear infinite;
}

/* ── Screen wrapper ───────────────────────────────────────────── */
.pmc-screen-wrapper {
  max-width: 210mm;
  margin: 1.5rem auto 3rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.pmc-preview-label {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  padding: 0.5rem 0 0.3rem;
}

.pmc-screen-page {
  background: #fff;
  box-shadow: 0 3px 30px rgba(0,0,0,0.25);
  padding: 10mm;
  box-sizing: border-box;
}

/* Page-break visual indicator on screen */
.pmc-page-break-indicator {
  text-align: center;
  padding: 0.6rem 0;
  font-size: 0.65rem;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-family: sans-serif;
  border-top: 1px dashed rgba(255,255,255,0.15);
  border-bottom: 1px dashed rgba(255,255,255,0.15);
  margin: 0.5rem 0;
}

/* ── Shared column container ──────────────────────────────────── */
.pmc-cols {
  column-count: 2;
  column-gap: 14mm;          /* generous gap → more breathing room */
  column-fill: balance;
  column-rule: 0.5pt dashed #c0c8d8;
}

/* ── Logo ──────────────────────────────────────────────────────── */
.pmc-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10mm;
  padding-bottom: 8mm;
  border-bottom: 1px solid #e0e0e0;
}

.pmc-logo {
  max-width: 60mm;
  height: auto;
  object-fit: contain;
}

/* ── Shared typography ────────────────────────────────────────── */
.pmc-group {
  break-inside: auto;
  margin-bottom: 4mm;
  font-family: 'Lora', Georgia, serif;
}

.pmc-group-title {
  font-family: 'Cormorant Garamond', 'Lora', Georgia, serif;
  font-size: 8.5pt;
  font-weight: 700;
  color: #0c2d6b;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 1.5mm;
  padding-bottom: 1.5px;
  border-bottom: 0.75pt solid rgba(12,45,107,0.25);
  line-height: 1.3;
  break-after: avoid;
}

.pmc-subgroup-title {
  font-size: 7pt;
  font-style: italic;
  font-weight: 600;
  color: #4a5568;
  margin: 2mm 0 0.5mm;
  break-after: avoid;
}

.pmc-item {
  break-inside: avoid;
  margin-bottom: 1mm;
}
.pmc-item-row {
  display: flex;
  align-items: baseline;
  gap: 1mm;
}
.pmc-item-name {
  font-size: 7.5pt;
  color: #1a1a1a;
  flex-shrink: 0;
  max-width: 60%;
  line-height: 1.4;
}
.pmc-dots {
  flex: 1;
  height: 0;
  border-bottom: 0.6pt dotted #bbb;
  min-width: 3mm;
  align-self: flex-end;
  margin-bottom: 2pt;
}
.pmc-item-price {
  font-size: 7pt;
  color: #1a1a1a;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}
.pmc-item-desc {
  font-size: 6.5pt;
  color: #666;
  font-style: italic;
  margin: 0.5px 0 0;
  line-height: 1.3;
}

/* ── Print-only root: hidden on screen ───────────────────────── */
.pmc-print-root { display: none; }

/* ══════════════════════════════════════════════════════════════
   PRINT
   ──────────────────────────────────────────────────────────────
   Twee problemen die opgelost worden:
   1. Blauwe achtergrond: de .app-shell gradient overtreft
      html/body, dus alle ouder-elementen krijgen white.
   2. 3 kolommen: height+overflow:visible liet de overflow als
      een derde kolom renderen. Oplossing: GEEN expliciete height.
      De browser fragmenteert de column-container automatisch over
      meerdere pagina's. break-after:page op de dranken-sectie
      zorgt dat eten altijd op een nieuwe A4 start.
   ══════════════════════════════════════════════════════════════ */
@media print {

  @page {
    size: A4 portrait;
    margin: 10mm;
  }

  /* Kill the app-shell blue gradient and any other backgrounds */
  html, body,
  #app, .app-shell,
  main, .pmc-root {
    background: #fff !important;
    background-image: none !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* Hide everything on screen except the print root */
  .pmc-root > *:not(.pmc-print-root) {
    display: none !important;
  }

  /* Show the print root */
  .pmc-print-root {
    display: block;
    background: #fff !important;
    font-family: 'Lora', Georgia, serif;
  }

  /*
    Each section = its own two-column container.
    NO explicit height → no overflow → no phantom 3rd column.
    The print engine fragments the container naturally across pages.
    break-after:page on drinks forces food to a fresh A4 sheet.
  */
  .pmc-print-section {
    column-count: 2;
    column-gap: 14mm;
    column-rule: 0.4pt dashed #b0b8c4;
    background: #fff !important;
    /* column-fill defaults to balance: left fills first, then right */
  }

  /* Food always begins on a new A4 page */
  .pmc-print-drinks {
    break-after: page;
  }

  /* Typography overrides for print */
  .pmc-group-title {
    break-after: avoid;
    color: #0c2d6b !important;
    border-bottom-color: rgba(12,45,107,0.25) !important;
  }

  .pmc-subgroup-title {
    break-after: avoid;
    color: #4a5568 !important;
  }

  .pmc-item {
    break-inside: avoid;
  }

  .pmc-item-name  { color: #1a1a1a !important; }
  .pmc-item-price { color: #1a1a1a !important; }
  .pmc-item-desc  { color: #666 !important; }
  .pmc-dots       { border-bottom-color: #bbb !important; }

  /* Logo styling for print */
  .pmc-logo-container {
    break-after: avoid;
    break-inside: avoid;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10mm;
    padding-bottom: 8mm;
    border-bottom: 1px solid #d0d0d0;
  }

  .pmc-logo {
    max-width: 60mm;
    height: auto;
    object-fit: contain;
  }
}
</style>
