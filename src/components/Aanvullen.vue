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

      <button @click="startNewSession" class="w-full flex items-center justify-center gap-3 text-lg py-5 px-6 rounded-2xl font-bold btn-primary shadow-lg hover:shadow-xl transition-shadow">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        Nieuwe aanvulling
      </button>

      <div class="hidden md:flex gap-3 md:gap-4 flex-col sm:flex-row">
        <button @click="startPrintList" class="flex-1 flex items-center justify-center gap-3 text-lg py-5 px-6 rounded-2xl font-bold btn-secondary shadow-lg hover:shadow-xl transition-shadow">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z"/>
          </svg>
          Printlijst
        </button>
        <button @click="exportToExcel" class="flex-1 flex items-center justify-center gap-3 text-lg py-5 px-6 rounded-2xl font-bold btn-secondary shadow-lg hover:shadow-xl transition-shadow">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
          Excel Export
        </button>
      </div>

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

      <div class="flex justify-center">
        <button @click="view = 'overview'" class="btn-secondary px-8 py-4 rounded-2xl text-base font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          ← Terug naar overzicht
        </button>
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

      <div class="fridge-tabs flex gap-2 overflow-x-auto pb-2 md:overflow-visible md:justify-center md:flex-wrap">
        <button
          v-for="(fridge, index) in fridges"
          :key="fridge.id"
          @click="goToFridge(index)"
          class="fridge-tab shrink-1 rounded-lg px-3 py-3 text-sm font-bold transition shadow-md hover:shadow-lg whitespace-nowrap"
          :class="index === currentFridgeIndex ? 'fridge-tab-active' : 'fridge-tab-idle'"
        >
          <span>{{ getFridgeButtonLabel(fridge.name) }}</span>
          <span class="ml-1.5 rounded-full px-1.5 py-0.5 text-xs font-bold leading-none bg-black/25">
            {{ fridgeBottleCount(fridge, currentSession) }}
          </span>
        </button>
        <button
          type="button"
          class="fridge-tab shrink-1 rounded-lg px-3 py-3 text-sm font-bold transition shadow-md hover:shadow-lg fridge-tab-overview whitespace-nowrap"
          @click="showSummary"
        >
          📋 Overzicht
        </button>
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
                class="font-bold text-sm px-2.5 py-0.5 rounded-full qty-badge"
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

      <div class="flex gap-3 flex-col sm:flex-row sm:justify-center">
        <button
          v-if="currentFridgeIndex > 0"
          @click="prevFridge"
          class="btn-secondary px-8 py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          ← Vorige
        </button>
        <button
          v-if="currentFridgeIndex < fridges.length - 1"
          @click="nextFridge"
          class="btn-primary px-8 py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          Volgende →
        </button>
        <button
          v-else
          @click="showSummary"
          class="btn-success px-8 py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          ✓ Klaar
        </button>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════
         SUMMARY
    ═══════════════════════════════════════════════════════════ -->
    <div v-else-if="view === 'summary'" class="dw-container md:rounded-xl md:shadow-2xl md:p-8 space-y-5">
      <div class="dw-card rounded-xl p-4">
        <div class="flex items-center gap-3 mb-3">
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
        <div class="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div
            class="h-full bg-sky-400 rounded-full transition-all duration-500"
            :style="`width: 100%`"
          ></div>
        </div>
      </div>

      <div class="fridge-tabs flex gap-2 overflow-x-auto pb-2 md:overflow-visible md:justify-center md:flex-wrap">
        <button
          v-for="(fridge, index) in fridges"
          :key="`summary-${fridge.id}`"
          @click="goToSummaryFridge(fridge.id)"
          class="fridge-tab shrink-1 rounded-lg px-3 py-3 text-sm font-bold transition shadow-md hover:shadow-lg whitespace-nowrap"
          :class="index === currentFridgeIndex ? 'fridge-tab-active' : 'fridge-tab-idle'"
        >
          <span>{{ getFridgeButtonLabel(fridge.name) }}</span>
          <span class="ml-1.5 rounded-full px-1.5 py-0.5 text-xs font-bold leading-none bg-black/25">
            {{ fridgeBottleCount(fridge, currentSession) }}
          </span>
        </button>
        <button
          type="button"
          class="fridge-tab shrink-1 rounded-lg px-3 py-3 text-sm font-bold transition shadow-md hover:shadow-lg fridge-tab-overview whitespace-nowrap"
          @click="scrollToSummaryTop"
        >
          📋 Overzicht
        </button>
      </div>

      <div v-if="totalItems(currentSession) === 0" class="dw-mini-card rounded-lg p-6 text-center text-sky-200 text-sm">
        Geen flesjes ingegeven. Ga terug om aantallen in te voeren.
      </div>

      <div v-else class="grid gap-3 sm:grid-cols-3">
        <button
          type="button"
          class="btn-success flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold shadow-lg transition-all hover:shadow-xl hover:scale-[1.01]"
          @click="shareCurrentSessionViaWhatsApp"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.17 6.42 2.17 11.86c0 1.74.45 3.43 1.31 4.93L2 22l5.38-1.41a9.8 9.8 0 0 0 4.64 1.18h.01c5.43 0 9.86-4.43 9.86-9.87a9.8 9.8 0 0 0-2.84-6.99Zm-7.02 15.2h-.01a8.13 8.13 0 0 1-4.14-1.14l-.3-.18-3.19.84.85-3.11-.2-.32a8.14 8.14 0 0 1-1.25-4.33c0-4.5 3.66-8.17 8.18-8.17 2.18 0 4.22.85 5.76 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.51-3.67 8.18-8.17 8.18Zm4.48-6.12c-.25-.13-1.47-.72-1.7-.81-.23-.08-.4-.12-.57.13-.16.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.39-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.57-1.36-.78-1.86-.21-.5-.42-.43-.57-.44h-.49c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.02s.87 2.34.99 2.5c.13.17 1.71 2.61 4.15 3.65.58.25 1.03.4 1.38.51.58.18 1.11.15 1.53.09.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z"
            />
          </svg>
          WhatsApp
        </button>
        <button
          v-if="canUseNativeShare"
          type="button"
          class="btn-secondary flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold shadow-lg transition-all hover:shadow-xl hover:scale-[1.01]"
          @click="shareCurrentSession"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C9.886 12.733 11.174 12.4 12.5 12.4c1.326 0 2.614.333 3.816.942M10 6l2-2 2 2M12 4v10" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 20h14" />
          </svg>
          Delen
        </button>
        <button
          type="button"
          class="btn-secondary flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold shadow-lg transition-all hover:shadow-xl hover:scale-[1.01]"
          @click="copyCurrentSessionSummary"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V5a2 2 0 012-2h7a2 2 0 012 2v9a2 2 0 01-2 2h-2" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h7a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9a2 2 0 012-2Z" />
          </svg>
          Kopieer lijst
        </button>
      </div>

      <p v-if="shareFeedback" class="px-1 text-sm text-sky-100">
        {{ shareFeedback }}
      </p>

      <div
        v-for="fridge in fridgesWithItems(currentSession)"
        :key="fridge.id"
        :id="`summary-${fridge.id}`"
        class="space-y-1.5"
      >
        <p class="text-xs font-semibold uppercase tracking-widest text-sky-300 px-1">{{ fridge.name }}</p>
        <div class="dw-mini-card rounded-lg overflow-hidden">
          <div
            v-for="item in fridge.items"
            :key="item.id"
            class="flex items-center gap-3 px-4 py-2.5 border-b border-white/10 last:border-b-0"
          >
            <button
              type="button"
              class="check-toggle flex h-5 w-5 shrink-0 items-center justify-center rounded border transition"
              :class="isItemChecked(item.id) ? 'check-toggle-active' : 'check-toggle-idle'"
              @click="toggleSummaryItem(item.id)"
            >
              <svg
                v-if="isItemChecked(item.id)"
                class="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button
              type="button"
              class="flex-1 text-left text-sm transition"
              :class="isItemChecked(item.id) ? 'text-sky-100/55 line-through' : 'text-white hover:text-sky-100'"
              @click="toggleSummaryItem(item.id)"
            >
              {{ item.name }}
            </button>
            <span class="font-bold" :class="isItemChecked(item.id) ? 'text-sky-200/55' : 'text-sky-200'">{{ item.qty }}×</span>
          </div>
        </div>
      </div>

      <button @click="saveAndFinish" class="w-full btn-primary py-4 rounded-xl text-base font-bold">
        Opslaan & Afsluiten
      </button>
    </div>

    <!-- ═══════════════════════════════════════════════════════════
         PRINT LIST
    ═══════════════════════════════════════════════════════════ -->
    <div v-else-if="view === 'printlist'" class="printlist-container max-w-4xl mx-auto py-4">
      <div class="printlist-header px-4 md:px-8 py-4 mb-6">
        <div class="flex items-center justify-between mb-4 no-print">
          <div class="flex-1">
            <h2 class="text-2xl font-bold text-gray-900">Dranken Aanvullijst</h2>
            <p class="text-sm text-gray-600 mt-1">{{ new Date().toLocaleDateString('nl-BE', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
          </div>
          <div class="flex gap-3 flex-col sm:flex-row sm:justify-center">
            <button @click="printNow" class="btn-primary flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all no-print">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z"/>
              </svg>
              Afdrukken
            </button>
            <button @click="view = 'overview'" class="btn-secondary flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all no-print">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
              Terug
            </button>
          </div>
        </div>
      </div>

      <div class="printlist-content px-4 md:px-8">
        <div v-for="fridge in fridges" :key="fridge.id" class="mb-8 page-break-inside-avoid">
          <h3 class="text-lg font-bold text-gray-900 mb-3 pb-2 border-b-2 border-gray-300">{{ fridge.name }}</h3>
          
          <div class="space-y-0">
            <template v-for="drink in fridge.drinks" :key="drink.id">
              <!-- Shelf divider -->
              <div v-if="drink.shelf" class="mt-3 mb-2 pt-2">
                <p class="text-xs font-semibold uppercase tracking-wider text-gray-600">{{ drink.label }}</p>
              </div>
              <!-- Drink row -->
              <div v-else class="flex items-center gap-3 py-1.5 border-b border-gray-200">
                <div class="flex-1 text-sm text-gray-900 font-medium">{{ drink.name }}</div>
                <div class="flex items-center gap-2">
                  <div class="print-box"></div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
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

      <div class="flex gap-3 flex-col sm:flex-row sm:justify-center">
        <button @click="view = 'overview'" class="btn-secondary px-8 py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          ← Terug naar overzicht
        </button>
        <button @click="resetToDefault" class="btn-danger px-8 py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          ⚠️ Herstel standaard
        </button>
      </div>

      <div v-for="(fridge, fi) in fridges" :key="fridge.id" class="space-y-1.5">
        <div class="flex items-center justify-between px-1">
          <p class="text-xs font-bold text-sky-200 uppercase tracking-wider">{{ fridge.name }}</p>
          <button
            @click="openAddDrink(fi)"
            class="flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-white transition px-3 py-2 rounded-lg hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-400/50 shadow-sm hover:shadow-md"
          >
            <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
            Toevoegen
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
                class="flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-white transition px-3 py-2 rounded-lg hover:bg-red-500/20 border border-red-500/30 hover:border-red-400/50 shadow-sm hover:shadow-md"
              >
                <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
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

          <!-- Quick buttons 1–15 -->
          <div class="grid grid-cols-5 gap-2">
            <button
              v-for="n in 15"
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
    name: 'Frisdranken',
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
      { id: 'royal-bliss-agrumes', name: 'Royal Bliss Agrumes' },
      { shelf: true, id: 's-fris-3', label: 'Schap 3 — Frisdranken' },
      { id: 'royal-bliss-tonic', name: 'Royal Bliss Tonic' },
      { id: 'sprite', name: 'Sprite' },
      { id: 'fanta', name: 'Fanta' },
      { id: 'fuze-mango', name: 'Fuze Tea Mango' },
      { id: 'fuze-fruit', name: 'Fuze Tea Peach' },
    ],
  },
  {
    id: 'frigo-speciaalbieren',
    name: 'Bieren',
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
      { id: 'ypra-alcoholfree', name: 'Ypra Alcoholvrij' },
      { id: 'omer', name: 'Omer Traditional Blond' },
      { id: 'kwaremont', name: 'Kwaremont' },
      { shelf: true, id: 's-spec-3', label: 'Schap 3' },
      { id: 'leffe-bruin', name: 'Leffe Bruin' },
      { id: 'leffe-blond', name: 'Leffe Blond' },
      { id: 'orval', name: 'Orval' },
      { id: 'westmalle', name: 'Westmalle Trappiste Tripel' },
      { id: 'tripel-karmeliet', name: 'Tripel Karmeliet' },
      { id: 'tripel-lefort', name: 'Tripel Lefort' },
      { id: 'cornet-strong', name: 'Cornet Strong' },
      { id: 'cornet-blond', name: 'Cornet Alcoholfree' },
    ],
  },
  {
    id: 'frigo-water',
    name: 'Frigo Water',
    drinks: [
      { id: 'chaudfontaine-bruis', name: 'Chaudfontaine 50cl Bruis' },
      { id: 'chaudfontaine-medium', name: 'Chaudfontaine 50cl Medium' },
      { id: 'chaudfontaine-plat', name: 'Chaudfontaine 50cl Plat' },
    ],
  },
  {
    id: 'frigo-glas',
    name: 'Wijnen',
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
    name: 'Schuimwijnen',
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
    name: 'Soft drinks',
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
      { id: 'vruchtendrank', name: 'Tönisteiner Vruchtenkorf' },
      { shelf: true, id: 's-tonic-3', label: 'Schap 3 — Overige' },
      { id: 'rodino', name: 'Crodino' },
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
const shareFeedback = ref('')

// ──────────────────────────────────────────────
// Computed / helpers
// ──────────────────────────────────────────────
const currentFridge = computed(() => fridges.value[currentFridgeIndex.value])
const canUseNativeShare = computed(() => typeof navigator !== 'undefined' && typeof navigator.share === 'function')

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

function fridgeBottleCount(fridge, session = currentSession.value) {
  if (!fridge || !session) return 0
  return fridge.drinks.reduce((sum, drink) => {
    if (drink.shelf) return sum
    return sum + (Number(session.items?.[drink.id]) || 0)
  }, 0)
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('nl-BE', {
    weekday: 'short', day: 'numeric', month: 'long',
    hour: '2-digit', minute: '2-digit',
  })
}

let shareFeedbackTimeout = null

function setShareFeedback(message) {
  shareFeedback.value = message
  if (shareFeedbackTimeout) {
    window.clearTimeout(shareFeedbackTimeout)
  }
  shareFeedbackTimeout = window.setTimeout(() => {
    shareFeedback.value = ''
    shareFeedbackTimeout = null
  }, 3000)
}

function buildSessionSummary(session = currentSession.value) {
  if (!session || totalItems(session) === 0) return ''

  const lines = [
    `Aanvullijst dranken (${formatDate(session.date)})`,
    '',
  ]

  fridgesWithItems(session).forEach(fridge => {
    lines.push(`${fridge.name}:`)
    fridge.items.forEach(item => {
      lines.push(`- ${item.name}: ${item.qty}x`)
    })
    lines.push('')
  })

  return lines.join('\n').trim()
}

// ──────────────────────────────────────────────
// Session actions
// ──────────────────────────────────────────────
function startNewSession() {
  currentFridgeIndex.value = 0
  currentSession.value = { id: Date.now(), date: new Date().toISOString(), items: {}, checkedItems: {} }
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

function goToFridge(index) {
  currentFridgeIndex.value = index
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
  confirmQty()
}

function clearAndConfirm() {
  modalQty.value = 0
  if (currentSession.value && modalDrink.value) {
    delete currentSession.value.items[modalDrink.value.id]
    delete currentSession.value.checkedItems?.[modalDrink.value.id]
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
      delete currentSession.value.checkedItems?.[modalDrink.value.id]
    }
  }
  closeModal()
}

function isItemChecked(itemId) {
  return Boolean(currentSession.value?.checkedItems?.[itemId])
}

function toggleSummaryItem(itemId) {
  if (!currentSession.value) return

  if (!currentSession.value.checkedItems) {
    currentSession.value.checkedItems = {}
  }

  if (currentSession.value.checkedItems[itemId]) {
    delete currentSession.value.checkedItems[itemId]
    return
  }

  currentSession.value.checkedItems[itemId] = true
}

function scrollToSummaryFridge(fridgeId) {
  const target = document.getElementById(`summary-${fridgeId}`)
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function goToSummaryFridge(fridgeId) {
  const index = fridges.value.findIndex(fridge => fridge.id === fridgeId)
  if (index === -1) return
  currentFridgeIndex.value = index
  view.value = 'session'
}

function scrollToSummaryTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

async function copyCurrentSessionSummary() {
  const summary = buildSessionSummary()
  if (!summary) return

  try {
    await navigator.clipboard.writeText(summary)
    setShareFeedback('Lijst gekopieerd. Je kan die nu plakken in WhatsApp, mail of sms.')
  } catch {
    setShareFeedback('Kopieren lukte niet op dit toestel.')
  }
}

async function shareCurrentSession() {
  const summary = buildSessionSummary()
  if (!summary || !canUseNativeShare.value) return

  try {
    await navigator.share({
      title: 'Aanvullijst dranken',
      text: summary,
    })
  } catch (error) {
    if (error?.name !== 'AbortError') {
      setShareFeedback('Delen lukte niet. Gebruik eventueel de kopieerknop.')
    }
  }
}

function shareCurrentSessionViaWhatsApp() {
  const summary = buildSessionSummary()
  if (!summary) return

  const url = `https://wa.me/?text=${encodeURIComponent(summary)}`
  window.open(url, '_blank', 'noopener')
  setShareFeedback('WhatsApp geopend met de aanvullijst als bericht.')
}

// ──────────────────────────────────────────────
// Print List
// ──────────────────────────────────────────────
function startPrintList() {
  view.value = 'printlist'
}

function printNow() {
  window.print()
}

function exportToExcel() {
  // Build CSV content
  let csvContent = "Frigo,Drankje\n"
  
  fridges.value.forEach(fridge => {
    fridge.drinks.forEach(drink => {
      if (!drink.shelf) {
        // Escape quotes and wrap in quotes if needed
        const drinkName = drink.name.replace(/"/g, '""')
        csvContent += `"${fridge.name}","${drinkName}"\n`
      }
    })
  })

  // Create blob and download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `drankenlijst_${new Date().toISOString().split('T')[0]}.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

function getFridgeButtonLabel(name) {
  return name.replace(/^Frigo\s+/i, '')
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
.qty-badge {
  background: #0f5eb6;
  color: #fff;
  border: 1.5px solid rgba(147, 197, 253, 0.7);
  min-width: 2rem;
  text-align: center;
  font-size: 0.9rem;
}
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
.fridge-tabs::-webkit-scrollbar {
  height: 6px;
}
.fridge-tabs::-webkit-scrollbar-thumb {
  background: rgba(147, 197, 253, 0.35);
  border-radius: 999px;
}
.fridge-tab-idle {
  background: rgba(30, 80, 150, 0.42);
  border: 1px solid rgba(147, 197, 253, 0.3);
  color: #bfdbfe;
}
.fridge-tab-active {
  background: rgba(37, 99, 235, 0.82);
  border: 1px solid rgba(191, 219, 254, 0.6);
  color: #fff;
  box-shadow: 0 8px 20px -10px rgba(8, 47, 116, 0.75);
}
.fridge-tab-overview {
  background: rgba(22, 163, 74, 0.82);
  border: 1px solid rgba(134, 239, 172, 0.45);
  color: #fff;
}
.check-toggle-idle {
  background: rgba(5, 38, 89, 0.45);
  border-color: rgba(147, 197, 253, 0.35);
  color: transparent;
}
.check-toggle-active {
  background: rgba(22, 163, 74, 0.9);
  border-color: rgba(134, 239, 172, 0.6);
  color: #fff;
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
.btn-danger {
  background: rgba(185, 28, 28, 0.78);
  color: #fff;
  border: 1px solid rgba(252, 165, 165, 0.35);
  transition: background 0.15s;
}
.btn-danger:hover {
  background: rgba(220, 38, 38, 0.88);
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

/* Print List Styles */
.printlist-container {
  background: white;
  color: #000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.printlist-header {
  background: #f8fafc;
  border-bottom: 2px solid #e2e8f0;
}

.printlist-content {
  background: white;
}

.print-box {
  width: 3rem;
  height: 1.5rem;
  border: 2px solid #333;
  border-radius: 2px;
}

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }

  .printlist-container {
    max-width: 100% !important;
    background: white !important;
    color: black !important;
  }

  * {
    margin: 0 !important;
    padding: 0 !important;
  }

  html, body {
    width: 210mm;
    height: 297mm;
    margin: 0;
    padding: 0.3cm;
  }

  .printlist-header {
    page-break-after: avoid;
    margin-bottom: 0.15cm !important;
    padding: 0 0 0.1cm 0 !important;
  }

  .printlist-header h2 {
    margin: 0 !important;
    font-size: 14px !important;
    font-weight: bold;
  }

  .printlist-header p {
    margin: 0 !important;
    font-size: 9px !important;
  }

  .printlist-content {
    columns: 3;
    column-gap: 0.4cm;
    font-size: 9px;
    line-height: 1;
  }

  .printlist-content > div {
    margin-bottom: 0.08cm !important;
    padding: 0 !important;
  }

  .printlist-content h3 {
    font-size: 9px !important;
    margin: 0 !important;
    padding: 0.05cm 0 !important;
    border-bottom: 0.5px solid #666 !important;
    font-weight: bold;
  }

  .printlist-content .space-y-0 {
    padding: 0 !important;
    margin: 0 !important;
  }

  .printlist-content .flex {
    display: flex !important;
    padding: 0.05cm 0 !important;
    gap: 0.15cm !important;
    border-bottom: 0.5px solid #ddd !important;
    align-items: flex-start;
  }

  .print-box {
    width: 1.2rem !important;
    height: 0.6rem !important;
    min-width: 1.2rem !important;
    flex-shrink: 0;
    border: 1px solid #000 !important;
  }

  .flex-1 {
    font-size: 9px;
    padding: 0 !important;
    word-break: break-word;
  }
}

@media (max-width: 767px) {
  .printlist-content {
    columns: 1;
  }
}
</style>
