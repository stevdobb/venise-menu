<template>
  <div class="dw-page mx-auto max-w-screen-xl pt-4 md:py-4 md:px-2">

    <!-- ═══════════════════════════════════════════════════════════
         OVERVIEW
    ═══════════════════════════════════════════════════════════ -->
    <div v-if="view === 'overview'" class="dw-container md:rounded-xl md:shadow-2xl md:p-8 space-y-6">
      <div class="dw-card rounded-xl p-5">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Bar Tool</p>
            <h1 class="text-2xl font-bold text-white">Aanvullen</h1>
            <p class="text-sm text-sky-100 mt-1">Oplijsting van benodigde flesjes per frigo.</p>
          </div>
          <button @click="startManage" class="btn-secondary shrink-0 text-sm px-3 py-2 rounded-lg">
            Beheer dranken
          </button>
        </div>
      </div>

      <button @click="startNewSession" class="w-full text-base py-4 rounded-xl font-bold btn-primary">
        + Nieuwe aanvulling
      </button>

      <div class="space-y-3">
        <p class="text-xs font-semibold uppercase tracking-widest text-sky-200 px-1">Vorige aanvullingen</p>
        <div v-if="sessions.length === 0" class="dw-mini-card rounded-lg p-5 text-sky-200 text-sm text-center">
          Nog geen aanvullingen opgeslagen.
        </div>
        <div
          v-for="session in sessions"
          :key="session.id"
          class="dw-mini-card rounded-lg p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-white/10 transition"
          @click="viewSession(session)"
        >
          <div>
            <p class="text-white font-semibold text-sm">{{ formatDate(session.date) }}</p>
            <p class="text-sky-200 text-xs mt-0.5">{{ totalItems(session) }} flesjes in totaal</p>
          </div>
          <svg class="h-5 w-5 text-sky-300 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════
         SESSION DETAIL (vorige bekijken)
    ═══════════════════════════════════════════════════════════ -->
    <div v-else-if="view === 'sessionDetail'" class="dw-container md:rounded-xl md:shadow-2xl md:p-8 space-y-5">
      <div class="dw-card rounded-xl p-4 flex items-center gap-3">
        <button @click="view = 'overview'" class="p-2 text-sky-200 hover:text-white transition">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <div class="flex-1">
          <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Aanvulling</p>
          <h2 class="text-lg font-bold text-white">{{ formatDate(selectedSession?.date) }}</h2>
        </div>
        <div class="dw-stat px-3 py-1 rounded-lg text-sm font-bold shrink-0">
          {{ totalItems(selectedSession) }} flesjes
        </div>
      </div>

      <div v-if="totalItems(selectedSession) === 0" class="dw-mini-card rounded-lg p-5 text-center text-sky-200 text-sm">
        Geen flesjes ingegeven in deze sessie.
      </div>

      <div v-for="fridge in fridgesWithItems(selectedSession)" :key="fridge.id" class="space-y-1.5">
        <p class="text-xs font-semibold uppercase tracking-widest text-sky-300 px-1">{{ fridge.name }}</p>
        <div class="dw-mini-card rounded-lg overflow-hidden">
          <div
            v-for="item in fridge.items"
            :key="item.id"
            class="flex items-center justify-between px-4 py-2.5 border-b border-white/10 last:border-b-0"
          >
            <span class="text-white text-sm">{{ item.name }}</span>
            <span class="text-sky-200 font-bold text-sm">{{ item.qty }}×</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════
         ACTIVE SESSION (per frigo)
    ═══════════════════════════════════════════════════════════ -->
    <div v-else-if="view === 'session'" class="dw-container md:rounded-xl md:shadow-2xl md:p-8 space-y-5">
      <div class="dw-card rounded-xl p-4">
        <div class="flex items-center gap-3 mb-3">
          <button @click="confirmAbort" class="p-2 text-sky-200 hover:text-white transition">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Aanvulling stap {{ currentFridgeIndex + 1 }}/{{ fridges.length }}</p>
            <h2 class="text-xl font-bold text-white truncate">{{ currentFridge?.name }}</h2>
          </div>
          <div class="dw-stat px-3 py-1 rounded-lg text-xs font-bold shrink-0">
            {{ fridgeItemCount(currentFridge) }} ingegeven
          </div>
        </div>
        <div class="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div
            class="h-full bg-sky-400 rounded-full transition-all duration-500"
            :style="`width: ${(currentFridgeIndex / fridges.length) * 100}%`"
          ></div>
        </div>
      </div>

      <div class="dw-mini-card rounded-lg overflow-hidden">
        <template v-for="drink in currentFridge?.drinks" :key="drink.id">
          <!-- Shelf divider -->
          <div v-if="drink.shelf" class="shelf-divider flex items-center gap-2 px-4 py-1.5">
            <span class="text-xs font-semibold uppercase tracking-wider text-sky-400/80">{{ drink.label }}</span>
            <div class="flex-1 h-px bg-sky-400/30"></div>
          </div>
          <!-- Drink row -->
          <div
            v-else
            class="flex items-center justify-between px-4 py-3 border-b border-white/10 last:border-b-0 cursor-pointer hover:bg-white/10 active:bg-white/15 transition"
            @click="openModal(drink)"
          >
            <span class="text-white text-sm">{{ drink.name }}</span>
            <div class="flex items-center gap-2">
              <span
                v-if="currentSession?.items[drink.id]"
                class="text-sky-200 font-bold text-sm bg-sky-800/60 px-2.5 py-0.5 rounded-full"
              >
                {{ currentSession.items[drink.id] }}×
              </span>
              <svg class="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </template>
      </div>

      <div class="flex gap-3">
        <button
          v-if="currentFridgeIndex > 0"
          @click="prevFridge"
          class="btn-secondary flex-1 py-3 rounded-xl font-semibold"
        >
          ← Vorige
        </button>
        <button
          v-if="currentFridgeIndex < fridges.length - 1"
          @click="nextFridge"
          class="btn-primary flex-1 py-3 rounded-xl font-semibold"
        >
          Volgende frigo →
        </button>
        <button
          v-else
          @click="showSummary"
          class="btn-success flex-1 py-3 rounded-xl font-bold"
        >
          Klaar → Overzicht
        </button>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════
         SUMMARY
    ═══════════════════════════════════════════════════════════ -->
    <div v-else-if="view === 'summary'" class="dw-container md:rounded-xl md:shadow-2xl md:p-8 space-y-5">
      <div class="dw-card rounded-xl p-4 flex items-center gap-3">
        <button @click="view = 'session'; currentFridgeIndex = fridges.length - 1" class="p-2 text-sky-200 hover:text-white transition">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <div class="flex-1">
          <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Aanvullijst</p>
          <h2 class="text-xl font-bold text-white">Overzicht</h2>
        </div>
        <div class="dw-stat px-3 py-1 rounded-lg text-sm font-bold shrink-0">
          {{ totalItems(currentSession) }} flesjes
        </div>
      </div>

      <div v-if="totalItems(currentSession) === 0" class="dw-mini-card rounded-lg p-6 text-center text-sky-200 text-sm">
        Geen flesjes ingegeven. Ga terug om aantallen in te voeren.
      </div>

      <div v-for="fridge in fridgesWithItems(currentSession)" :key="fridge.id" class="space-y-1.5">
        <p class="text-xs font-semibold uppercase tracking-widest text-sky-300 px-1">{{ fridge.name }}</p>
        <div class="dw-mini-card rounded-lg overflow-hidden">
          <div
            v-for="item in fridge.items"
            :key="item.id"
            class="flex items-center justify-between px-4 py-2.5 border-b border-white/10 last:border-b-0"
          >
            <span class="text-white text-sm">{{ item.name }}</span>
            <span class="text-sky-200 font-bold">{{ item.qty }}×</span>
          </div>
        </div>
      </div>

      <button @click="saveAndFinish" class="w-full btn-primary py-4 rounded-xl text-base font-bold">
        Opslaan & Afsluiten
      </button>
    </div>

    <!-- ═══════════════════════════════════════════════════════════
         MANAGE
    ═══════════════════════════════════════════════════════════ -->
    <div v-else-if="view === 'manage'" class="dw-container md:rounded-xl md:shadow-2xl md:p-8 space-y-5">
      <div class="dw-card rounded-xl p-4 flex items-center gap-3">
        <button @click="view = 'overview'" class="p-2 text-sky-200 hover:text-white transition">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Beheer</p>
          <h2 class="text-xl font-bold text-white">Dranken beheren</h2>
        </div>
      </div>

      <div v-for="(fridge, fi) in fridges" :key="fridge.id" class="space-y-1.5">
        <div class="flex items-center justify-between px-1">
          <p class="text-xs font-bold text-sky-200 uppercase tracking-wider">{{ fridge.name }}</p>
          <button
            @click="openAddDrink(fi)"
            class="text-xs text-sky-300 hover:text-white transition px-2 py-1 rounded hover:bg-white/10"
          >
            + Toevoegen
          </button>
        </div>
        <div class="dw-mini-card rounded-lg overflow-hidden">
          <template v-for="(drink, di) in fridge.drinks" :key="drink.id">
            <div v-if="drink.shelf" class="shelf-divider flex items-center gap-2 px-4 py-1.5">
              <span class="text-xs font-semibold uppercase tracking-wider text-sky-400/80">{{ drink.label }}</span>
              <div class="flex-1 h-px bg-sky-400/30"></div>
            </div>
            <div
              v-else
              class="flex items-center justify-between px-4 py-2.5 border-b border-white/10 last:border-b-0"
            >
              <span class="text-white text-sm">{{ drink.name }}</span>
              <button
                @click="removeDrink(fi, di)"
                class="text-red-400 hover:text-red-300 text-xs px-2 py-1 rounded hover:bg-red-900/30 transition"
              >
                Verwijder
              </button>
            </div>
          </template>
        </div>
      </div>

      <div class="dw-card rounded-xl p-4 space-y-2">
        <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Frigo / sectie toevoegen</p>
        <div class="flex gap-2">
          <input
            v-model="newFridgeName"
            type="text"
            placeholder="Naam van frigo of sectie"
            class="qty-input flex-1 rounded-lg px-3 py-2 text-sm"
            @keydown.enter="addFridge"
          />
          <button @click="addFridge" class="btn-primary px-4 py-2 rounded-lg text-sm font-semibold">Toevoegen</button>
        </div>
      </div>

      <button
        @click="resetToDefault"
        class="w-full text-xs text-red-400 hover:text-red-300 py-2 transition text-center"
      >
        Herstel naar standaard drankenlijst
      </button>
    </div>

    <!-- ═══════════════════════════════════════════════════════════
         MODAL: Quantity picker
    ═══════════════════════════════════════════════════════════ -->
    <teleport to="body">
      <div v-if="showModal" class="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4">
        <div class="fixed inset-0 bg-black/60" @click="closeModal"></div>
        <div class="modal-panel relative z-10 w-full max-w-sm rounded-2xl p-6 space-y-5 shadow-2xl">
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="text-xs font-semibold uppercase tracking-widest text-sky-300">Hoeveel flesjes?</p>
              <h3 class="text-lg font-bold text-white mt-0.5">{{ modalDrink?.name }}</h3>
            </div>
            <button @click="closeModal" class="text-sky-300 hover:text-white p-1 transition">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6"/>
              </svg>
            </button>
          </div>

          <!-- Quick buttons 1–10 -->
          <div class="grid grid-cols-5 gap-2">
            <button
              v-for="n in 10"
              :key="n"
              @click="setQty(n)"
              class="qty-btn rounded-lg py-3 text-sm font-bold transition"
              :class="modalQty === n ? 'qty-btn-active' : ''"
            >
              {{ n }}
            </button>
          </div>

          <!-- Manual +/- -->
          <div class="flex items-center justify-center gap-3">
            <button @click="modalQty = Math.max(0, (modalQty || 0) - 1)" class="btn-counter">−</button>
            <input
              v-model.number="modalQty"
              type="number"
              min="0"
              class="qty-input w-20 text-center text-xl font-bold rounded-lg py-2"
            />
            <button @click="modalQty = (modalQty || 0) + 1" class="btn-counter">+</button>
          </div>

          <div class="flex gap-3">
            <button @click="clearAndConfirm" class="btn-secondary flex-1 py-2.5 rounded-xl">Wis</button>
            <button @click="confirmQty" class="btn-primary flex-1 py-2.5 rounded-xl font-bold">Bevestigen</button>
          </div>
        </div>
      </div>

      <!-- Modal: Add drink -->
      <div v-if="showAddDrinkModal" class="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <div class="fixed inset-0 bg-black/60" @click="showAddDrinkModal = false"></div>
        <div class="modal-panel relative z-10 w-full max-w-sm rounded-2xl p-6 space-y-4 shadow-2xl">
          <h3 class="text-lg font-bold text-white">Drankje toevoegen</h3>
          <p class="text-sm text-sky-200">{{ fridges[addingDrinkFridgeIndex]?.name }}</p>
          <input
            v-model="newDrinkName"
            type="text"
            placeholder="Naam van het drankje"
            class="qty-input w-full rounded-lg px-3 py-2.5 text-sm"
            @keydown.enter="confirmAddDrink"
            ref="addDrinkInput"
          />
          <div class="flex gap-3">
            <button @click="showAddDrinkModal = false" class="btn-secondary flex-1 py-2.5 rounded-xl">Annuleer</button>
            <button @click="confirmAddDrink" class="btn-primary flex-1 py-2.5 rounded-xl font-bold">Toevoegen</button>
          </div>
        </div>
      </div>
    </teleport>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

// ──────────────────────────────────────────────
// Default fridge data (from photos)
// ──────────────────────────────────────────────
const DEFAULT_FRIDGES = [
  {
    id: 'frigo-frisdranken',
    name: 'Frigo 0% & Frisdranken',
    drinks: [
      { shelf: true, id: 's-fris-1', label: 'Schap 1 — 0% bieren' },
      { id: 'carlsberg-0', name: 'Carlsberg 0%' },
      { id: 'sport-zot', name: 'Sport Zot' },
      { id: 'jupiler-0', name: 'Jupiler 0%' },
      { id: 'leffe-0', name: 'Leffe 0%' },
      { id: 'rodenbach', name: 'Rodenbach Classic' },
      { id: 'hoegaarden', name: 'Hoegaarden' },
      { id: 'kriek-0', name: 'Kriek 0% (Liefmans)' },
      { id: 'kriek', name: 'Kriek (Liefmans On the Rocks)' },
      { shelf: true, id: 's-fris-2', label: 'Schap 2 — Cola & Ice Tea' },
      { id: 'cola-zero', name: 'Cola Zero' },
      { id: 'cola-light', name: 'Cola Light' },
      { id: 'ice-tea', name: 'Ice Tea (Lipton)' },
      { id: 'ice-tea-peach', name: 'Ice Tea Peach (Lipton)' },
      { shelf: true, id: 's-fris-3', label: 'Schap 3 — Frisdranken' },
      { id: 'sprite', name: 'Sprite' },
      { id: 'fanta', name: 'Fanta' },
      { id: 'fuze-mango', name: 'Fuze Tea Mango' },
      { id: 'fuze-fruit', name: 'Fuze Tea Fruit' },
    ],
  },
  {
    id: 'frigo-speciaalbieren',
    name: 'Frigo Speciaalbieren',
    drinks: [
      { shelf: true, id: 's-spec-1', label: 'Schap 1' },
      { id: 'chimay', name: 'Chimay' },
      { id: 'duvel', name: 'Duvel' },
      { id: 'duvel-tripple-hop', name: 'Duvel Tripple Hop Citra' },
      { id: 'vedett', name: 'Vedett Extra Pilsner' },
      { shelf: true, id: 's-spec-2', label: 'Schap 2' },
      { id: 'carlsberg', name: 'Carlsberg' },
      { id: 'brugse-zot-blond', name: 'Brugse Zot Blond' },
      { id: 'brugse-zot-bruin', name: 'Brugse Zot Bruin' },
      { id: 'ypra', name: 'Ypra' },
      { id: 'omer', name: 'Omer Traditional Blond' },
      { id: 'kwaremont', name: 'Kwaremont' },
      { shelf: true, id: 's-spec-3', label: 'Schap 3' },
      { id: 'leffe-bruin', name: 'Leffe Bruin' },
      { id: 'orval', name: 'Orval' },
      { id: 'westmalle', name: 'Westmalle Trappiste Tripel' },
      { id: 'tripel-karmeliet', name: 'Tripel Karmeliet' },
      { id: 'tripel-lefort', name: 'Tripel Lefort' },
      { id: 'cornet-strong', name: 'Cornet Strong' },
      { id: 'cornet-blond', name: 'Cornet Blond' },
    ],
  },
  {
    id: 'frigo-glas',
    name: 'Frigo Wijn / Glas',
    drinks: [
      { shelf: true, id: 's-glas-1', label: 'Schap 1 — Wijn per glas' },
      { id: 'rube-glas', name: 'Rube (wijn/glas)' },
      { id: 'bourgogne-chitry', name: 'Bourgogne Chitry' },
      { id: 'lamothe-wit', name: 'Lamothe Wit (Elise)' },
      { id: 'morande-wit', name: 'Morandé Wit' },
      { id: 'muscadet', name: 'Muscadet' },
      { id: 'painted-wolf-wit', name: 'Painted Wolf Den Wit' },
      { id: 'waterkloof-wit', name: 'Waterkloof Wit' },
      { shelf: true, id: 's-glas-2', label: 'Schap 2 — Cava & Champagne' },
      { id: 'mas-kalida', name: 'CAVA Mas Kalida' },
      { id: 'champagne-vollereaux', name: 'Champagne Vollereaux' },
      { id: 'rose-huis', name: "Rosé v/h huis" },
      { id: 'belle-epine', name: 'Belle Epine Syrah' },
    ],
  },
  {
    id: 'frigo-wit',
    name: 'Frigo Witte Wijnen',
    drinks: [
      { shelf: true, id: 's-wit-1', label: 'Schap 1' },
      { id: 'caldora-wit', name: 'Caldora Wit' },
      { id: 'chablis-premier-cru', name: 'Chablis Premier Cru' },
      { id: 'the-wedge-wit', name: 'The Wedge Wit (Chenin Blanc)' },
      { id: 'crutzberg-barrique', name: 'Crutzberg Barrique' },
      { id: 'crutzberg-chardonnay', name: 'Crutzberg Chardonnay' },
      { id: 'genoels-elderen', name: 'Genoels-Elderen' },
      { shelf: true, id: 's-wit-2', label: 'Schap 2' },
      { id: 'pinot-gris', name: 'Pinot Gris (Prova Regia)' },
      { id: 'pouilly-fume', name: 'Pouilly-Fumé de Ladoucette' },
      { id: 'pouilly-les-loges', name: 'Pouilly Les Loges' },
      { id: 'pouilly-fuisse', name: 'Pouilly Fuissé' },
      { id: 'sancerre', name: 'Sancerre' },
    ],
  },
  {
    id: 'frigo-cava',
    name: 'Frigo Cava & Champagne',
    drinks: [
      { shelf: true, id: 's-cava-1', label: 'Schap 1' },
      { id: 'cava-0', name: 'Cava 0% (Laurent Truffer)' },
      { id: 'pink-gt-0', name: 'Pink G&T 0%' },
      { id: 'cava-segura-viudas', name: 'Cava Segura Viudas' },
      { id: 'baby-moet', name: 'Baby Moët' },
      { id: 'cava-recoda', name: 'Cava Recoda Brut' },
      { id: 'lillet-blanc', name: 'Lillet Blanc' },
    ],
  },
  {
    id: 'frigo-tonic',
    name: 'Frigo Tonic & Soft Drinks',
    drinks: [
      { shelf: true, id: 's-tonic-1', label: 'Schap 1 — Tonics' },
      { id: 'fevertree-med', name: 'Fever-Tree Mediterranean' },
      { id: 'fevertree-clem', name: 'Fever-Tree Clementine' },
      { id: 'fevertree-ginger', name: 'Fever-Tree Ginger Beer' },
      { id: 'fevertree-lav', name: 'Fever-Tree Lavendel & Orange' },
      { id: 'fevertree-tonic', name: 'Fever-Tree Tonic Premium' },
      { id: 'rose-lemonade', name: 'Rose Lemonade' },
      { shelf: true, id: 's-tonic-2', label: 'Schap 2 — Sappen' },
      { id: 'minute-maid-tomaat', name: 'Minute Maid Tomaat' },
      { id: 'minute-maid-appel', name: 'Minute Maid Appel' },
      { id: 'minute-maid-ace', name: 'Minute Maid ACE' },
      { id: 'minute-maid-sinaas', name: 'Minute Maid Sinaas' },
      { id: 'appletiser', name: 'Appletiser' },
      { id: 'tonnis-citroen', name: 'Tönisteiner Citroen' },
      { id: 'tonnis-orange', name: 'Tönisteiner Orange' },
      { id: 'vruchtendrank', name: 'Vruchtendrank' },
      { shelf: true, id: 's-tonic-3', label: 'Schap 3 — Overige' },
      { id: 'rodino', name: 'Rodino' },
      { id: 'canada-dry', name: 'Canada Dry' },
      { id: 'gini', name: 'Gini' },
      { id: 'martini-bellini', name: 'Martini Bellini' },
      { id: 'red-bull', name: 'Red Bull' },
      { id: 'finley-citroen', name: 'Finley Citroen' },
      { id: 'finley-mojito', name: 'Finley Mojito' },
      { id: 'finley-grapefruit', name: 'Finley Grapefruit' },
    ],
  },
  {
    id: 'rode-wijnen',
    name: 'Rode Wijnen',
    drinks: [
      { shelf: true, id: 's-rood-1', label: 'Rek 1' },
      { id: 'chateau-grace-dieu', name: "Château La Grâce Dieu" },
      { id: 'painted-wolf', name: 'Painted Wolf The Den' },
      { id: 'rube', name: "Rube Montepulciano d'Abruzzo" },
      { id: 'waterkloof-circle', name: 'Waterkloof Circle of Life' },
      { shelf: true, id: 's-rood-2', label: 'Rek 2' },
      { id: 'de-stefani', name: 'De Stefani Venezia' },
      { id: 'puisseguin-curat', name: 'Château de Puisseguin Curat' },
      { id: 'chateau-bertin', name: 'Château Bertin Lussac Saint-Emilion' },
      { id: 'haut-grace-dieu', name: 'Château Haut La Grâce Dieu' },
      { id: 'alexis', name: 'Alexis' },
      { id: 'yali-three-lagoons', name: 'Yali Three Lagoons Gran Reserva' },
      { id: 'morande-pionero', name: 'Morandé Pionero' },
      { id: 'primodo-primitivo', name: 'Primodo Primitivo' },
      { shelf: true, id: 's-rood-3', label: 'Rek 3' },
      { id: 'the-wedge-rood', name: 'The Wedge Rood' },
      { id: 'cotes-rhone', name: 'Côtes du Rhône (Ribona)' },
      { id: 'favor-demoni', name: 'Favor del Demòni' },
      { id: 'regadas', name: 'Regadas' },
    ],
  },
]

// ──────────────────────────────────────────────
// State
// ──────────────────────────────────────────────
const view = ref('overview')
const sessions = ref([])
const fridges = ref([])
const currentFridgeIndex = ref(0)
const currentSession = ref(null)
const selectedSession = ref(null)

const showModal = ref(false)
const modalDrink = ref(null)
const modalQty = ref(0)

const showAddDrinkModal = ref(false)
const addingDrinkFridgeIndex = ref(0)
const newDrinkName = ref('')
const addDrinkInput = ref(null)

const newFridgeName = ref('')

// ──────────────────────────────────────────────
// Computed / helpers
// ──────────────────────────────────────────────
const currentFridge = computed(() => fridges.value[currentFridgeIndex.value])

function fridgesWithItems(session) {
  if (!session) return []
  return fridges.value
    .map(f => ({
      ...f,
      items: f.drinks
        .filter(d => !d.shelf && session.items[d.id] > 0)
        .map(d => ({ ...d, qty: session.items[d.id] })),
    }))
    .filter(f => f.items.length > 0)
}

function totalItems(session) {
  if (!session) return 0
  return Object.values(session.items).reduce((sum, v) => sum + (v || 0), 0)
}

function fridgeItemCount(fridge) {
  if (!fridge || !currentSession.value) return 0
  return fridge.drinks.filter(d => !d.shelf && currentSession.value.items[d.id] > 0).length
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('nl-BE', {
    weekday: 'short', day: 'numeric', month: 'long',
    hour: '2-digit', minute: '2-digit',
  })
}

// ──────────────────────────────────────────────
// Session actions
// ──────────────────────────────────────────────
function startNewSession() {
  currentFridgeIndex.value = 0
  currentSession.value = { id: Date.now(), date: new Date().toISOString(), items: {} }
  view.value = 'session'
}

function viewSession(session) {
  selectedSession.value = session
  view.value = 'sessionDetail'
}

function confirmAbort() {
  if (confirm('Aanvulling afbreken? Niet-opgeslagen gegevens gaan verloren.')) {
    view.value = 'overview'
    currentSession.value = null
  }
}

function prevFridge() {
  if (currentFridgeIndex.value > 0) currentFridgeIndex.value--
}

function nextFridge() {
  if (currentFridgeIndex.value < fridges.value.length - 1) currentFridgeIndex.value++
}

function showSummary() {
  view.value = 'summary'
}

function saveAndFinish() {
  const updated = [currentSession.value, ...sessions.value].slice(0, 3)
  sessions.value = updated
  localStorage.setItem('venise_aanvul_sessions', JSON.stringify(updated))
  currentSession.value = null
  view.value = 'overview'
}

// ──────────────────────────────────────────────
// Modal
// ──────────────────────────────────────────────
function openModal(drink) {
  modalDrink.value = drink
  modalQty.value = currentSession.value?.items[drink.id] || 0
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  modalDrink.value = null
}

function setQty(n) {
  modalQty.value = n
}

function clearAndConfirm() {
  modalQty.value = 0
  if (currentSession.value && modalDrink.value) {
    delete currentSession.value.items[modalDrink.value.id]
  }
  closeModal()
}

function confirmQty() {
  if (currentSession.value && modalDrink.value) {
    const qty = Number(modalQty.value) || 0
    if (qty > 0) {
      currentSession.value.items[modalDrink.value.id] = qty
    } else {
      delete currentSession.value.items[modalDrink.value.id]
    }
  }
  closeModal()
}

// ──────────────────────────────────────────────
// Manage
// ──────────────────────────────────────────────
function startManage() {
  view.value = 'manage'
}

function openAddDrink(fridgeIndex) {
  addingDrinkFridgeIndex.value = fridgeIndex
  newDrinkName.value = ''
  showAddDrinkModal.value = true
  nextTick(() => addDrinkInput.value?.focus())
}

function confirmAddDrink() {
  const name = newDrinkName.value.trim()
  if (!name) return
  const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now()
  fridges.value[addingDrinkFridgeIndex.value].drinks.push({ id, name })
  saveFridges()
  showAddDrinkModal.value = false
  newDrinkName.value = ''
}

function removeDrink(fi, di) {
  fridges.value[fi].drinks.splice(di, 1)
  saveFridges()
}

function addFridge() {
  const name = newFridgeName.value.trim()
  if (!name) return
  const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now()
  fridges.value.push({ id, name, drinks: [] })
  saveFridges()
  newFridgeName.value = ''
}

function resetToDefault() {
  if (confirm('Alle aanpassingen wissen en terugzetten naar de standaard drankenlijst?')) {
    fridges.value = JSON.parse(JSON.stringify(DEFAULT_FRIDGES))
    localStorage.removeItem('venise_aanvul_fridges')
  }
}

function saveFridges() {
  localStorage.setItem('venise_aanvul_fridges', JSON.stringify(fridges.value))
}

// ──────────────────────────────────────────────
// Init
// ──────────────────────────────────────────────
onMounted(() => {
  const savedFridges = localStorage.getItem('venise_aanvul_fridges')
  fridges.value = savedFridges
    ? JSON.parse(savedFridges)
    : JSON.parse(JSON.stringify(DEFAULT_FRIDGES))

  const savedSessions = localStorage.getItem('venise_aanvul_sessions')
  sessions.value = savedSessions ? JSON.parse(savedSessions) : []
})
</script>

<style scoped>
.shelf-divider {
  background: rgba(5, 38, 90, 0.5);
  border-bottom: 1px solid rgba(147, 197, 253, 0.2);
}
.dw-container {
  /* no background/border on mobile */
}
@media (min-width: 768px) {
  .dw-container {
    background: rgba(20, 84, 164, 0.72);
    border: 1px solid rgba(149, 204, 255, 0.38);
  }
}
.dw-card {
  background: rgba(12, 67, 141, 0.64);
  border: 1px solid rgba(149, 204, 255, 0.34);
}
.dw-mini-card {
  background: rgba(9, 56, 118, 0.56);
  border: 1px solid rgba(172, 221, 255, 0.34);
}
.dw-stat {
  background: rgba(8, 52, 111, 0.48);
  border: 1px solid rgba(194, 228, 255, 0.45);
  color: #eff8ff;
}
.modal-panel {
  background: rgba(10, 55, 120, 0.97);
  border: 1px solid rgba(149, 204, 255, 0.4);
}
.btn-primary {
  background: rgba(37, 99, 235, 0.85);
  color: #fff;
  border: 1px solid rgba(147, 197, 253, 0.5);
  transition: background 0.15s;
}
.btn-primary:hover {
  background: rgba(59, 130, 246, 0.9);
}
.btn-secondary {
  background: rgba(30, 80, 150, 0.6);
  color: #bfdbfe;
  border: 1px solid rgba(147, 197, 253, 0.35);
  transition: background 0.15s;
}
.btn-secondary:hover {
  background: rgba(40, 100, 180, 0.8);
  color: #fff;
}
.btn-success {
  background: rgba(22, 163, 74, 0.8);
  color: #fff;
  border: 1px solid rgba(134, 239, 172, 0.4);
  transition: background 0.15s;
}
.btn-success:hover {
  background: rgba(34, 197, 94, 0.9);
}
.qty-btn {
  background: rgba(9, 56, 118, 0.7);
  color: #bfdbfe;
  border: 1px solid rgba(147, 197, 253, 0.3);
}
.qty-btn:hover {
  background: rgba(37, 99, 235, 0.6);
  color: #fff;
}
.qty-btn-active {
  background: rgba(37, 99, 235, 0.9) !important;
  color: #fff !important;
  border-color: rgba(147, 197, 253, 0.7) !important;
}
.btn-counter {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  background: rgba(9, 56, 118, 0.7);
  color: #bfdbfe;
  border: 1px solid rgba(147, 197, 253, 0.3);
  transition: background 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-counter:hover {
  background: rgba(37, 99, 235, 0.6);
  color: #fff;
}
.qty-input {
  background: rgba(5, 38, 89, 0.7);
  color: #e0f2fe;
  border: 1px solid rgba(147, 197, 253, 0.35);
  outline: none;
}
.qty-input:focus {
  border-color: rgba(147, 197, 253, 0.7);
}
/* hide number arrows */
.qty-input::-webkit-outer-spin-button,
.qty-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.qty-input[type=number] {
  -moz-appearance: textfield;
}
</style>
