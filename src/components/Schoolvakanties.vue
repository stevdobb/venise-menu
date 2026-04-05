<template>
  <div class="dw-page mx-auto max-w-screen-xl pt-4 md:py-6 md:px-2">
    <div class="dw-container md:rounded-xl md:shadow-2xl md:p-8 space-y-6">
      <div class="dw-card rounded-xl p-5 md:p-6">
        <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div class="space-y-1">
            <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Schooljaar 2025-2026</p>
            <h1 class="text-3xl font-bold text-white">
              Schoolvakanties België, Nederland, Duitsland, Frankrijk & Luxemburg
            </h1>
            <p class="text-sm text-sky-100">
              Alle regio's en onderwijszones in één overzicht. Klik op een filter om snel de juiste periode te vinden.
            </p>
          </div>
          <div class="grid gap-2 w-full sm:w-auto">
            <div class="dw-stat px-4 py-2 rounded-lg shadow-sm text-sm">
              Regio's / zones: <span class="font-semibold">{{ regios.length }}</span>
            </div>
            <div class="dw-stat px-4 py-2 rounded-lg shadow-sm text-sm">
              In dit overzicht: <span class="font-semibold">{{ filteredVakanties.length }}</span> / {{ vakantieData.length }} regels
            </div>
            <!-- <div class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg shadow-sm text-xs text-gray-600">
              Bron: officiële kalenders 2025-2026. Controleer lokaal bij updates.
            </div> -->
          </div>
        </div>
      </div>

      <div class="dw-card rounded-xl p-4 md:p-5 shadow-sm space-y-3">
        <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-xs uppercase tracking-widest font-semibold text-sky-200">Vandaag</p>
            <p class="text-lg font-semibold text-white">{{ todayDisplay }}</p>
            <p class="text-sm text-sky-100">
              {{ currentVakantieRegios.length > 0 ? 'Deze regio’s hebben nu vakantie:' : 'Geen actieve schoolvakanties vandaag.' }}
            </p>
          </div>
          <div class="dw-stat px-4 py-2 rounded-lg text-sm font-semibold shadow">
            Actief: {{ currentVakantieRegios.length }}
          </div>
        </div>
        <div v-if="currentVakantieRegios.length" class="grid gap-2 md:grid-cols-2">
          <div
            v-for="(item, idx) in currentVakantieRegios"
            :key="idx"
            class="dw-mini-card rounded-lg p-3 shadow-sm flex flex-col gap-1"
          >
            <p class="text-sm font-semibold text-white">{{ item.land }} — {{ item.regio }}</p>
            <p class="text-sm text-sky-100">{{ normalizeType(item.type) }} · {{ item.start }} – {{ item.end }}</p>
          </div>
        </div>
      </div>

      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div class="dw-mini-card p-4 rounded-lg border shadow-sm space-y-2">
          <h2 class="text-base font-semibold text-white">Filter op schooljaar</h2>
          <div class="flex flex-wrap gap-2">
            <button
              data-filter-type="schooljaar"
              data-value="all"
              :class="getButtonClasses('schooljaar', 'all', 'active-jaar')"
              @click="setFilter('schooljaar', 'all')"
            >
              Alle jaren
            </button>
            <button
              v-for="jaar in schooljaren"
              :key="jaar"
              data-filter-type="schooljaar"
              :data-value="jaar"
              :class="getButtonClasses('schooljaar', jaar, 'active-jaar')"
              @click="setFilter('schooljaar', jaar)"
            >
              {{ jaar }}
            </button>
          </div>
        </div>

        <div class="dw-mini-card p-4 rounded-lg border shadow-sm space-y-2">
          <h2 class="text-base font-semibold text-white">Filter op land</h2>
          <div class="flex flex-wrap gap-2">
            <button
              data-filter-type="land"
              data-value="all"
              :class="getButtonClasses('land', 'all', 'active-regio')"
              @click="setFilter('land', 'all')"
            >
              Alle landen
            </button>
            <button
              v-for="land in landen"
              :key="land.name"
              data-filter-type="land"
              :data-value="land.name"
              :class="getButtonClasses('land', land.name, 'active-regio')"
              @click="setFilter('land', land.name)"
            >
              {{ land.flag }} {{ land.name }}
            </button>
          </div>
        </div>

        <div class="dw-mini-card p-4 rounded-lg border shadow-sm space-y-2">
          <h2 class="text-base font-semibold text-white">Filter op regio / zone</h2>
          <div class="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1">
            <button
              data-filter-type="regio"
              data-value="all"
              :class="getButtonClasses('regio', 'all', 'active-regio')"
              @click="setFilter('regio', 'all')"
            >
              Alle regio's
            </button>
            <button
              v-for="regio in regios"
              :key="regio"
              data-filter-type="regio"
              :data-value="regio"
              :class="getButtonClasses('regio', regio, 'active-regio')"
              @click="setFilter('regio', regio)"
            >
              {{ regio }}
            </button>
          </div>
        </div>

        <div class="dw-mini-card p-4 rounded-lg border shadow-sm space-y-2">
          <h2 class="text-base font-semibold text-white">Filter op vakantietype</h2>
          <div class="flex flex-wrap gap-2">
            <button
              data-filter-type="vakantie"
              data-value="all"
              :class="getButtonClasses('vakantie', 'all', 'active-vakantie')"
              @click="setFilter('vakantie', 'all')"
            >
              Alle types
            </button>
            <button
              v-for="type in types"
              :key="type.name"
              data-filter-type="vakantie"
              :data-value="type.name"
              :class="getButtonClasses('vakantie', type.name, 'active-vakantie')"
              @click="setFilter('vakantie', type.name)"
            >
              {{ type.label }}
            </button>
          </div>
        </div>
      </div>

      <div class="dw-table-shell overflow-x-auto shadow-lg rounded-lg border">
        <table class="min-w-full divide-y divide-sky-200/30">
          <thead class="dw-thead">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Land</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Regio / Zone</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Vakantie</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Periode</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Schooljaar</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-sky-200/30">
            <tr
              v-for="(item, index) in filteredVakanties"
              :key="index"
              class="hover:bg-white/80 transition duration-150"
              :class="getRowClasses(item.land)"
            >
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item.land }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item.regio }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item.type }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ item.start }} – {{ item.end }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item.schooljaar }}</td>
            </tr>
            <tr v-if="filteredVakanties.length === 0">
              <td colspan="5" class="px-6 py-4 text-center text-sky-100 bg-[#0f5aad]">
                Geen vakanties gevonden voor deze selectie.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// --- DATA ---
// Schooljaar 2025-2026 met alle regio's/zones per land
const vakantieData = [
  // België
  { land: 'België', regio: 'Vlaamse Gemeenschap', type: 'Herfstvakantie', start: '28 okt 2025', end: '3 nov 2025', schooljaar: '2025-2026' },
  { land: 'België', regio: 'Vlaamse Gemeenschap', type: 'Kerstvakantie', start: '23 dec 2025', end: '5 jan 2026', schooljaar: '2025-2026' },
  { land: 'België', regio: 'Vlaamse Gemeenschap', type: 'Voorjaarsvakantie', start: '3 mrt 2026', end: '9 mrt 2026', schooljaar: '2025-2026' },
  { land: 'België', regio: 'Vlaamse Gemeenschap', type: 'Paasvakantie', start: '7 apr 2026', end: '21 apr 2026', schooljaar: '2025-2026' },
  { land: 'België', regio: 'Vlaamse Gemeenschap', type: 'Zomervakantie', start: '1 jul 2026', end: '31 aug 2026', schooljaar: '2025-2026' },

  { land: 'België', regio: 'Fédération Wallonie-Bruxelles', type: 'Herfstvakantie', start: '21 okt 2025', end: '3 nov 2025', schooljaar: '2025-2026' },
  { land: 'België', regio: 'Fédération Wallonie-Bruxelles', type: 'Kerstvakantie', start: '23 dec 2025', end: '5 jan 2026', schooljaar: '2025-2026' },
  { land: 'België', regio: 'Fédération Wallonie-Bruxelles', type: 'Voorjaarsvakantie', start: '24 feb 2026', end: '9 mrt 2026', schooljaar: '2025-2026' },
  { land: 'België', regio: 'Fédération Wallonie-Bruxelles', type: 'Paasvakantie', start: '5 mei 2026', end: '18 mei 2026', schooljaar: '2025-2026' },
  { land: 'België', regio: 'Fédération Wallonie-Bruxelles', type: 'Zomervakantie', start: '7 jul 2026', end: '25 aug 2026', schooljaar: '2025-2026' },

  { land: 'België', regio: 'Duitstalige Gemeenschap', type: 'Herfstvakantie', start: '28 okt 2025', end: '3 nov 2025', schooljaar: '2025-2026' },
  { land: 'België', regio: 'Duitstalige Gemeenschap', type: 'Kerstvakantie', start: '23 dec 2025', end: '5 jan 2026', schooljaar: '2025-2026' },
  { land: 'België', regio: 'Duitstalige Gemeenschap', type: 'Voorjaarsvakantie', start: '3 mrt 2026', end: '9 mrt 2026', schooljaar: '2025-2026' },
  { land: 'België', regio: 'Duitstalige Gemeenschap', type: 'Paasvakantie', start: '7 apr 2026', end: '21 apr 2026', schooljaar: '2025-2026' },
  { land: 'België', regio: 'Duitstalige Gemeenschap', type: 'Zomervakantie', start: '1 jul 2026', end: '31 aug 2026', schooljaar: '2025-2026' },

  // Nederland
  { land: 'Nederland', regio: 'Regio Noord', type: 'Herfstvakantie', start: '26 okt 2025', end: '3 nov 2025', schooljaar: '2025-2026' },
  { land: 'Nederland', regio: 'Regio Midden', type: 'Herfstvakantie', start: '26 okt 2025', end: '3 nov 2025', schooljaar: '2025-2026' },
  { land: 'Nederland', regio: 'Regio Zuid', type: 'Herfstvakantie', start: '12 okt 2025', end: '20 okt 2025', schooljaar: '2025-2026' },

  { land: 'Nederland', regio: 'Alle regio\'s', type: 'Kerstvakantie', start: '21 dec 2025', end: '5 jan 2026', schooljaar: '2025-2026' },

  { land: 'Nederland', regio: 'Regio Noord', type: 'Voorjaarsvakantie', start: '15 feb 2026', end: '23 feb 2026', schooljaar: '2025-2026' },
  { land: 'Nederland', regio: 'Regio Midden', type: 'Voorjaarsvakantie', start: '22 feb 2026', end: '2 mrt 2026', schooljaar: '2025-2026' },
  { land: 'Nederland', regio: 'Regio Zuid', type: 'Voorjaarsvakantie', start: '1 mrt 2026', end: '9 mrt 2026', schooljaar: '2025-2026' },

  { land: 'Nederland', regio: 'Alle regio\'s', type: 'Meivakantie', start: '26 apr 2026', end: '4 mei 2026', schooljaar: '2025-2026' },

  { land: 'Nederland', regio: 'Regio Noord', type: 'Zomervakantie', start: '12 jul 2026', end: '24 aug 2026', schooljaar: '2025-2026' },
  { land: 'Nederland', regio: 'Regio Midden', type: 'Zomervakantie', start: '19 jul 2026', end: '31 aug 2026', schooljaar: '2025-2026' },
  { land: 'Nederland', regio: 'Regio Zuid', type: 'Zomervakantie', start: '5 jul 2026', end: '17 aug 2026', schooljaar: '2025-2026' },

  // Duitsland - 16 deelstaten
  { land: 'Duitsland', regio: 'Baden-Württemberg', type: 'Herbstferien', start: '28 okt 2025', end: '2 nov 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Baden-Württemberg', type: 'Weihnachtsferien', start: '23 dec 2025', end: '4 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Baden-Württemberg', type: 'Winterferien', start: '3 mrt 2026', end: '8 mrt 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Baden-Württemberg', type: 'Osterferien', start: '14 apr 2026', end: '26 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Baden-Württemberg', type: 'Pfingstferien', start: '10 jun 2026', end: '21 jun 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Baden-Württemberg', type: 'Sommerferien', start: '31 jul 2026', end: '13 sep 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Bayern', type: 'Herbstferien', start: '28 okt 2025', end: '1 nov 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Bayern', type: 'Weihnachtsferien', start: '23 dec 2025', end: '4 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Bayern', type: 'Winterferien', start: '3 feb 2026', end: '7 feb 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Bayern', type: 'Osterferien', start: '14 apr 2026', end: '26 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Bayern', type: 'Pfingstferien', start: '10 jun 2026', end: '21 jun 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Bayern', type: 'Sommerferien', start: '4 aug 2026', end: '15 sep 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Berlin', type: 'Herbstferien', start: '21 okt 2025', end: '2 nov 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Berlin', type: 'Weihnachtsferien', start: '23 dec 2025', end: '4 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Berlin', type: 'Winterferien', start: '3 feb 2026', end: '8 feb 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Berlin', type: 'Osterferien', start: '14 apr 2026', end: '26 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Berlin', type: 'Pfingstferien', start: '30 mei 2026', end: '10 jun 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Berlin', type: 'Sommerferien', start: '24 jul 2026', end: '6 sep 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Brandenburg', type: 'Herbstferien', start: '21 okt 2025', end: '2 nov 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Brandenburg', type: 'Weihnachtsferien', start: '23 dec 2025', end: '4 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Brandenburg', type: 'Winterferien', start: '3 feb 2026', end: '8 feb 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Brandenburg', type: 'Osterferien', start: '14 apr 2026', end: '26 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Brandenburg', type: 'Pfingstferien', start: '30 mei 2026', end: '10 jun 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Brandenburg', type: 'Sommerferien', start: '24 jul 2026', end: '6 sep 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Bremen', type: 'Herbstferien', start: '4 okt 2025', end: '18 okt 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Bremen', type: 'Weihnachtsferien', start: '23 dec 2025', end: '6 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Bremen', type: 'Winterferien', start: '3 feb 2026', end: '4 feb 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Bremen', type: 'Osterferien', start: '7 apr 2026', end: '22 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Bremen', type: 'Pfingstferien', start: '30 mei 2026', end: '31 mei 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Bremen', type: 'Sommerferien', start: '3 jul 2026', end: '13 aug 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Hamburg', type: 'Herbstferien', start: '4 okt 2025', end: '18 okt 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Hamburg', type: 'Weihnachtsferien', start: '23 dec 2025', end: '6 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Hamburg', type: 'Winterferien', start: '31 jan 2026', end: '31 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Hamburg', type: 'Osterferien', start: '7 apr 2026', end: '18 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Hamburg', type: 'Pfingstferien', start: '30 mei 2026', end: '10 jun 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Hamburg', type: 'Sommerferien', start: '3 jul 2026', end: '13 aug 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Hessen', type: 'Herbstferien', start: '14 okt 2025', end: '26 okt 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Hessen', type: 'Weihnachtsferien', start: '23 dec 2025', end: '11 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Hessen', type: 'Winterferien', start: '3 feb 2026', end: '8 feb 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Hessen', type: 'Osterferien', start: '7 apr 2026', end: '19 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Hessen', type: 'Pfingstferien', start: '30 mei 2026', end: '1 jun 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Hessen', type: 'Sommerferien', start: '7 jul 2026', end: '15 aug 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Mecklenburg-Vorpommern', type: 'Herbstferien', start: '4 okt 2025', end: '19 okt 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Mecklenburg-Vorpommern', type: 'Weihnachtsferien', start: '23 dec 2025', end: '4 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Mecklenburg-Vorpommern', type: 'Winterferien', start: '3 feb 2026', end: '8 feb 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Mecklenburg-Vorpommern', type: 'Osterferien', start: '14 apr 2026', end: '23 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Mecklenburg-Vorpommern', type: 'Pfingstferien', start: '30 mei 2026', end: '3 jun 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Mecklenburg-Vorpommern', type: 'Sommerferien', start: '21 jul 2026', end: '30 aug 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Niedersachsen', type: 'Herbstferien', start: '4 okt 2025', end: '18 okt 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Niedersachsen', type: 'Weihnachtsferien', start: '23 dec 2025', end: '6 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Niedersachsen', type: 'Winterferien', start: '31 jan 2026', end: '31 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Niedersachsen', type: 'Osterferien', start: '7 apr 2026', end: '22 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Niedersachsen', type: 'Pfingstferien', start: '30 mei 2026', end: '31 mei 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Niedersachsen', type: 'Sommerferien', start: '3 jul 2026', end: '13 aug 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Noordrijn-Westfalen', type: 'Herbstferien', start: '14 okt 2025', end: '26 okt 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Noordrijn-Westfalen', type: 'Weihnachtsferien', start: '23 dec 2025', end: '6 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Noordrijn-Westfalen', type: 'Winterferien', start: '31 jan 2026', end: '31 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Noordrijn-Westfalen', type: 'Osterferien', start: '14 apr 2026', end: '26 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Noordrijn-Westfalen', type: 'Pfingstferien', start: '10 jun 2026', end: '10 jun 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Noordrijn-Westfalen', type: 'Sommerferien', start: '14 jul 2026', end: '26 aug 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Rheinland-Pfalz', type: 'Herbstferien', start: '14 okt 2025', end: '25 okt 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Rheinland-Pfalz', type: 'Weihnachtsferien', start: '23 dec 2025', end: '7 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Rheinland-Pfalz', type: 'Winterferien', start: '17 feb 2026', end: '21 feb 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Rheinland-Pfalz', type: 'Osterferien', start: '14 apr 2026', end: '25 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Rheinland-Pfalz', type: 'Pfingstferien', start: '2 jun 2026', end: '10 jun 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Rheinland-Pfalz', type: 'Sommerferien', start: '7 jul 2026', end: '15 aug 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Saarland', type: 'Herbstferien', start: '14 okt 2025', end: '25 okt 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Saarland', type: 'Weihnachtsferien', start: '23 dec 2025', end: '4 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Saarland', type: 'Winterferien', start: '17 feb 2026', end: '21 feb 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Saarland', type: 'Osterferien', start: '14 apr 2026', end: '23 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Saarland', type: 'Pfingstferien', start: '2 jun 2026', end: '10 jun 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Saarland', type: 'Sommerferien', start: '7 jul 2026', end: '15 aug 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Sachsen', type: 'Herbstferien', start: '7 okt 2025', end: '19 okt 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Sachsen', type: 'Weihnachtsferien', start: '23 dec 2025', end: '3 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Sachsen', type: 'Winterferien', start: '10 feb 2026', end: '22 feb 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Sachsen', type: 'Osterferien', start: '14 apr 2026', end: '26 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Sachsen', type: 'Pfingstferien', start: '30 mei 2026', end: '10 jun 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Sachsen', type: 'Sommerferien', start: '7 jul 2026', end: '16 aug 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Sachsen-Anhalt', type: 'Herbstferien', start: '30 sep 2025', end: '12 okt 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Sachsen-Anhalt', type: 'Weihnachtsferien', start: '23 dec 2025', end: '4 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Sachsen-Anhalt', type: 'Winterferien', start: '3 feb 2026', end: '8 feb 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Sachsen-Anhalt', type: 'Osterferien', start: '14 apr 2026', end: '17 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Sachsen-Anhalt', type: 'Pfingstferien', start: '30 mei 2026', end: '30 mei 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Sachsen-Anhalt', type: 'Sommerferien', start: '7 jul 2026', end: '20 aug 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Schleswig-Holstein', type: 'Herbstferien', start: '4 okt 2025', end: '18 okt 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Schleswig-Holstein', type: 'Weihnachtsferien', start: '23 dec 2025', end: '6 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Schleswig-Holstein', type: 'Osterferien', start: '7 apr 2026', end: '22 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Schleswig-Holstein', type: 'Pfingstferien', start: '30 mei 2026', end: '30 mei 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Schleswig-Holstein', type: 'Sommerferien', start: '14 jul 2026', end: '23 aug 2026', schooljaar: '2025-2026' },

  { land: 'Duitsland', regio: 'Thüringen', type: 'Herbstferien', start: '7 okt 2025', end: '19 okt 2025', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Thüringen', type: 'Weihnachtsferien', start: '23 dec 2025', end: '4 jan 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Thüringen', type: 'Winterferien', start: '3 feb 2026', end: '8 feb 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Thüringen', type: 'Osterferien', start: '14 apr 2026', end: '26 apr 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Thüringen', type: 'Pfingstferien', start: '10 jun 2026', end: '10 jun 2026', schooljaar: '2025-2026' },
  { land: 'Duitsland', regio: 'Thüringen', type: 'Sommerferien', start: '7 jul 2026', end: '16 aug 2026', schooljaar: '2025-2026' },

  // Frankrijk - zones A, B, C
  { land: 'Frankrijk', regio: 'Zone A', type: 'Herfstvakantie', start: '19 okt 2025', end: '3 nov 2025', schooljaar: '2025-2026' },
  { land: 'Frankrijk', regio: 'Zone B', type: 'Herfstvakantie', start: '19 okt 2025', end: '3 nov 2025', schooljaar: '2025-2026' },
  { land: 'Frankrijk', regio: 'Zone C', type: 'Herfstvakantie', start: '19 okt 2025', end: '3 nov 2025', schooljaar: '2025-2026' },

  { land: 'Frankrijk', regio: 'Zone A', type: 'Kerstvakantie', start: '21 dec 2025', end: '5 jan 2026', schooljaar: '2025-2026' },
  { land: 'Frankrijk', regio: 'Zone B', type: 'Kerstvakantie', start: '21 dec 2025', end: '5 jan 2026', schooljaar: '2025-2026' },
  { land: 'Frankrijk', regio: 'Zone C', type: 'Kerstvakantie', start: '21 dec 2025', end: '5 jan 2026', schooljaar: '2025-2026' },

  { land: 'Frankrijk', regio: 'Zone A', type: 'Hiver / Voorjaarsvakantie', start: '8 feb 2026', end: '23 feb 2026', schooljaar: '2025-2026' },
  { land: 'Frankrijk', regio: 'Zone B', type: 'Hiver / Voorjaarsvakantie', start: '15 feb 2026', end: '3 mrt 2026', schooljaar: '2025-2026' },
  { land: 'Frankrijk', regio: 'Zone C', type: 'Hiver / Voorjaarsvakantie', start: '22 feb 2026', end: '9 mrt 2026', schooljaar: '2025-2026' },

  { land: 'Frankrijk', regio: 'Zone A', type: 'Printemps / Paasvakantie', start: '12 apr 2026', end: '27 apr 2026', schooljaar: '2025-2026' },
  { land: 'Frankrijk', regio: 'Zone B', type: 'Printemps / Paasvakantie', start: '5 apr 2026', end: '21 apr 2026', schooljaar: '2025-2026' },
  { land: 'Frankrijk', regio: 'Zone C', type: 'Printemps / Paasvakantie', start: '19 apr 2026', end: '5 mei 2026', schooljaar: '2025-2026' },

  { land: 'Frankrijk', regio: 'Zone A', type: 'Zomervakantie', start: '5 jul 2026', end: '1 sep 2026', schooljaar: '2025-2026' },
  { land: 'Frankrijk', regio: 'Zone B', type: 'Zomervakantie', start: '5 jul 2026', end: '1 sep 2026', schooljaar: '2025-2026' },
  { land: 'Frankrijk', regio: 'Zone C', type: 'Zomervakantie', start: '5 jul 2026', end: '1 sep 2026', schooljaar: '2025-2026' },

  // Luxemburg
  { land: 'Luxemburg', regio: 'Nationaal', type: 'Herfstvakantie', start: '26 okt 2025', end: '3 nov 2025', schooljaar: '2025-2026' },
  { land: 'Luxemburg', regio: 'Nationaal', type: 'Kerstvakantie', start: '21 dec 2025', end: '5 jan 2026', schooljaar: '2025-2026' },
  { land: 'Luxemburg', regio: 'Nationaal', type: 'Voorjaarsvakantie', start: '15 feb 2026', end: '23 feb 2026', schooljaar: '2025-2026' },
  { land: 'Luxemburg', regio: 'Nationaal', type: 'Paasvakantie', start: '5 apr 2026', end: '20 apr 2026', schooljaar: '2025-2026' },
  { land: 'Luxemburg', regio: 'Nationaal', type: 'Pinkstervakantie', start: '30 mei 2026', end: '8 jun 2026', schooljaar: '2025-2026' },
  { land: 'Luxemburg', regio: 'Nationaal', type: 'Zomervakantie', start: '16 jul 2026', end: '15 sep 2026', schooljaar: '2025-2026' },

  // ===== 2026-2027 =====

  // België 2026-2027
  { land: 'België', regio: 'Vlaamse Gemeenschap', type: 'Herfstvakantie', start: '26 okt 2026', end: '1 nov 2026', schooljaar: '2026-2027' },
  { land: 'België', regio: 'Vlaamse Gemeenschap', type: 'Kerstvakantie', start: '22 dec 2026', end: '4 jan 2027', schooljaar: '2026-2027' },
  { land: 'België', regio: 'Vlaamse Gemeenschap', type: 'Voorjaarsvakantie', start: '22 feb 2027', end: '28 feb 2027', schooljaar: '2026-2027' },
  { land: 'België', regio: 'Vlaamse Gemeenschap', type: 'Paasvakantie', start: '30 mrt 2027', end: '13 apr 2027', schooljaar: '2026-2027' },
  { land: 'België', regio: 'Vlaamse Gemeenschap', type: 'Zomervakantie', start: '1 jul 2027', end: '31 aug 2027', schooljaar: '2026-2027' },

  { land: 'België', regio: 'Fédération Wallonie-Bruxelles', type: 'Herfstvakantie', start: '26 okt 2026', end: '1 nov 2026', schooljaar: '2026-2027' },
  { land: 'België', regio: 'Fédération Wallonie-Bruxelles', type: 'Kerstvakantie', start: '22 dec 2026', end: '4 jan 2027', schooljaar: '2026-2027' },
  { land: 'België', regio: 'Fédération Wallonie-Bruxelles', type: 'Voorjaarsvakantie', start: '15 feb 2027', end: '28 feb 2027', schooljaar: '2026-2027' },
  { land: 'België', regio: 'Fédération Wallonie-Bruxelles', type: 'Paasvakantie', start: '6 apr 2027', end: '19 apr 2027', schooljaar: '2026-2027' },
  { land: 'België', regio: 'Fédération Wallonie-Bruxelles', type: 'Zomervakantie', start: '1 jul 2027', end: '24 aug 2027', schooljaar: '2026-2027' },

  { land: 'België', regio: 'Duitstalige Gemeenschap', type: 'Herfstvakantie', start: '26 okt 2026', end: '1 nov 2026', schooljaar: '2026-2027' },
  { land: 'België', regio: 'Duitstalige Gemeenschap', type: 'Kerstvakantie', start: '22 dec 2026', end: '4 jan 2027', schooljaar: '2026-2027' },
  { land: 'België', regio: 'Duitstalige Gemeenschap', type: 'Voorjaarsvakantie', start: '22 feb 2027', end: '28 feb 2027', schooljaar: '2026-2027' },
  { land: 'België', regio: 'Duitstalige Gemeenschap', type: 'Paasvakantie', start: '30 mrt 2027', end: '13 apr 2027', schooljaar: '2026-2027' },
  { land: 'België', regio: 'Duitstalige Gemeenschap', type: 'Zomervakantie', start: '1 jul 2027', end: '31 aug 2027', schooljaar: '2026-2027' },

  // Nederland 2026-2027
  { land: 'Nederland', regio: 'Regio Noord', type: 'Herfstvakantie', start: '18 okt 2026', end: '26 okt 2026', schooljaar: '2026-2027' },
  { land: 'Nederland', regio: 'Regio Midden', type: 'Herfstvakantie', start: '25 okt 2026', end: '2 nov 2026', schooljaar: '2026-2027' },
  { land: 'Nederland', regio: 'Regio Zuid', type: 'Herfstvakantie', start: '11 okt 2026', end: '19 okt 2026', schooljaar: '2026-2027' },

  { land: 'Nederland', regio: 'Alle regio\'s', type: 'Kerstvakantie', start: '20 dec 2026', end: '4 jan 2027', schooljaar: '2026-2027' },

  { land: 'Nederland', regio: 'Regio Noord', type: 'Voorjaarsvakantie', start: '21 feb 2027', end: '1 mrt 2027', schooljaar: '2026-2027' },
  { land: 'Nederland', regio: 'Regio Midden', type: 'Voorjaarsvakantie', start: '28 feb 2027', end: '8 mrt 2027', schooljaar: '2026-2027' },
  { land: 'Nederland', regio: 'Regio Zuid', type: 'Voorjaarsvakantie', start: '7 mrt 2027', end: '15 mrt 2027', schooljaar: '2026-2027' },

  { land: 'Nederland', regio: 'Alle regio\'s', type: 'Meivakantie', start: '25 apr 2027', end: '3 mei 2027', schooljaar: '2026-2027' },

  { land: 'Nederland', regio: 'Regio Noord', type: 'Zomervakantie', start: '18 jul 2027', end: '30 aug 2027', schooljaar: '2026-2027' },
  { land: 'Nederland', regio: 'Regio Midden', type: 'Zomervakantie', start: '25 jul 2027', end: '6 sep 2027', schooljaar: '2026-2027' },
  { land: 'Nederland', regio: 'Regio Zuid', type: 'Zomervakantie', start: '11 jul 2027', end: '23 aug 2027', schooljaar: '2026-2027' },

  // Duitsland 2026-2027
  { land: 'Duitsland', regio: 'Baden-Württemberg', type: 'Herbstferien', start: '26 okt 2026', end: '31 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Baden-Württemberg', type: 'Weihnachtsferien', start: '22 dec 2026', end: '8 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Baden-Württemberg', type: 'Osterferien', start: '25 mrt 2027', end: '9 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Baden-Württemberg', type: 'Pfingstferien', start: '25 mei 2027', end: '5 jun 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Baden-Württemberg', type: 'Sommerferien', start: '29 jul 2027', end: '11 sep 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Bayern', type: 'Herbstferien', start: '26 okt 2026', end: '30 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Bayern', type: 'Weihnachtsferien', start: '22 dec 2026', end: '8 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Bayern', type: 'Winterferien', start: '8 feb 2027', end: '12 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Bayern', type: 'Osterferien', start: '1 apr 2027', end: '14 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Bayern', type: 'Pfingstferien', start: '25 mei 2027', end: '5 jun 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Bayern', type: 'Sommerferien', start: '5 aug 2027', end: '14 sep 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Berlin', type: 'Herbstferien', start: '26 okt 2026', end: '7 nov 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Berlin', type: 'Weihnachtsferien', start: '22 dec 2026', end: '5 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Berlin', type: 'Winterferien', start: '1 feb 2027', end: '6 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Berlin', type: 'Osterferien', start: '25 mrt 2027', end: '7 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Berlin', type: 'Pfingstferien', start: '23 mei 2027', end: '1 jun 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Berlin', type: 'Sommerferien', start: '22 jul 2027', end: '4 sep 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Brandenburg', type: 'Herbstferien', start: '26 okt 2026', end: '7 nov 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Brandenburg', type: 'Weihnachtsferien', start: '22 dec 2026', end: '5 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Brandenburg', type: 'Winterferien', start: '1 feb 2027', end: '6 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Brandenburg', type: 'Osterferien', start: '25 mrt 2027', end: '7 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Brandenburg', type: 'Pfingstferien', start: '23 mei 2027', end: '1 jun 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Brandenburg', type: 'Sommerferien', start: '22 jul 2027', end: '4 sep 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Bremen', type: 'Herbstferien', start: '12 okt 2026', end: '24 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Bremen', type: 'Weihnachtsferien', start: '22 dec 2026', end: '6 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Bremen', type: 'Winterferien', start: '1 feb 2027', end: '2 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Bremen', type: 'Osterferien', start: '25 mrt 2027', end: '9 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Bremen', type: 'Pfingstferien', start: '23 mei 2027', end: '24 mei 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Bremen', type: 'Sommerferien', start: '8 jul 2027', end: '18 aug 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Hamburg', type: 'Herbstferien', start: '12 okt 2026', end: '24 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Hamburg', type: 'Weihnachtsferien', start: '22 dec 2026', end: '6 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Hamburg', type: 'Winterferien', start: '1 feb 2027', end: '2 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Hamburg', type: 'Osterferien', start: '25 mrt 2027', end: '9 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Hamburg', type: 'Pfingstferien', start: '23 mei 2027', end: '2 jun 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Hamburg', type: 'Sommerferien', start: '8 jul 2027', end: '18 aug 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Hessen', type: 'Herbstferien', start: '19 okt 2026', end: '31 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Hessen', type: 'Weihnachtsferien', start: '22 dec 2026', end: '8 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Hessen', type: 'Winterferien', start: '1 feb 2027', end: '6 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Hessen', type: 'Osterferien', start: '25 mrt 2027', end: '6 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Hessen', type: 'Pfingstferien', start: '23 mei 2027', end: '25 mei 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Hessen', type: 'Sommerferien', start: '8 jul 2027', end: '16 aug 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Mecklenburg-Vorpommern', type: 'Herbstferien', start: '5 okt 2026', end: '17 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Mecklenburg-Vorpommern', type: 'Weihnachtsferien', start: '22 dec 2026', end: '5 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Mecklenburg-Vorpommern', type: 'Winterferien', start: '1 feb 2027', end: '6 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Mecklenburg-Vorpommern', type: 'Osterferien', start: '25 mrt 2027', end: '7 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Mecklenburg-Vorpommern', type: 'Pfingstferien', start: '23 mei 2027', end: '27 mei 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Mecklenburg-Vorpommern', type: 'Sommerferien', start: '24 jul 2027', end: '1 sep 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Niedersachsen', type: 'Herbstferien', start: '12 okt 2026', end: '24 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Niedersachsen', type: 'Weihnachtsferien', start: '22 dec 2026', end: '6 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Niedersachsen', type: 'Winterferien', start: '1 feb 2027', end: '2 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Niedersachsen', type: 'Osterferien', start: '25 mrt 2027', end: '9 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Niedersachsen', type: 'Pfingstferien', start: '23 mei 2027', end: '24 mei 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Niedersachsen', type: 'Sommerferien', start: '8 jul 2027', end: '18 aug 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Noordrijn-Westfalen', type: 'Herbstferien', start: '19 okt 2026', end: '31 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Noordrijn-Westfalen', type: 'Weihnachtsferien', start: '22 dec 2026', end: '8 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Noordrijn-Westfalen', type: 'Winterferien', start: '1 feb 2027', end: '1 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Noordrijn-Westfalen', type: 'Osterferien', start: '25 mrt 2027', end: '10 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Noordrijn-Westfalen', type: 'Pfingstferien', start: '24 mei 2027', end: '24 mei 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Noordrijn-Westfalen', type: 'Sommerferien', start: '15 jul 2027', end: '26 aug 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Rheinland-Pfalz', type: 'Herbstferien', start: '19 okt 2026', end: '30 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Rheinland-Pfalz', type: 'Weihnachtsferien', start: '22 dec 2026', end: '7 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Rheinland-Pfalz', type: 'Winterferien', start: '15 feb 2027', end: '19 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Rheinland-Pfalz', type: 'Osterferien', start: '25 mrt 2027', end: '7 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Rheinland-Pfalz', type: 'Pfingstferien', start: '27 mei 2027', end: '4 jun 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Rheinland-Pfalz', type: 'Sommerferien', start: '8 jul 2027', end: '16 aug 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Saarland', type: 'Herbstferien', start: '19 okt 2026', end: '30 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Saarland', type: 'Weihnachtsferien', start: '22 dec 2026', end: '6 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Saarland', type: 'Winterferien', start: '15 feb 2027', end: '19 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Saarland', type: 'Osterferien', start: '25 mrt 2027', end: '7 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Saarland', type: 'Pfingstferien', start: '27 mei 2027', end: '4 jun 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Saarland', type: 'Sommerferien', start: '8 jul 2027', end: '16 aug 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Sachsen', type: 'Herbstferien', start: '12 okt 2026', end: '24 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Sachsen', type: 'Weihnachtsferien', start: '22 dec 2026', end: '3 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Sachsen', type: 'Winterferien', start: '8 feb 2027', end: '20 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Sachsen', type: 'Osterferien', start: '25 mrt 2027', end: '7 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Sachsen', type: 'Pfingstferien', start: '23 mei 2027', end: '1 jun 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Sachsen', type: 'Sommerferien', start: '8 jul 2027', end: '17 aug 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Sachsen-Anhalt', type: 'Herbstferien', start: '5 okt 2026', end: '17 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Sachsen-Anhalt', type: 'Weihnachtsferien', start: '22 dec 2026', end: '5 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Sachsen-Anhalt', type: 'Winterferien', start: '1 feb 2027', end: '6 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Sachsen-Anhalt', type: 'Osterferien', start: '25 mrt 2027', end: '28 mrt 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Sachsen-Anhalt', type: 'Pfingstferien', start: '23 mei 2027', end: '23 mei 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Sachsen-Anhalt', type: 'Sommerferien', start: '8 jul 2027', end: '21 aug 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Schleswig-Holstein', type: 'Herbstferien', start: '12 okt 2026', end: '24 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Schleswig-Holstein', type: 'Weihnachtsferien', start: '22 dec 2026', end: '6 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Schleswig-Holstein', type: 'Osterferien', start: '25 mrt 2027', end: '9 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Schleswig-Holstein', type: 'Pfingstferien', start: '23 mei 2027', end: '23 mei 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Schleswig-Holstein', type: 'Sommerferien', start: '15 jul 2027', end: '24 aug 2027', schooljaar: '2026-2027' },

  { land: 'Duitsland', regio: 'Thüringen', type: 'Herbstferien', start: '12 okt 2026', end: '24 okt 2026', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Thüringen', type: 'Weihnachtsferien', start: '22 dec 2026', end: '5 jan 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Thüringen', type: 'Winterferien', start: '1 feb 2027', end: '6 feb 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Thüringen', type: 'Osterferien', start: '25 mrt 2027', end: '7 apr 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Thüringen', type: 'Pfingstferien', start: '25 mei 2027', end: '25 mei 2027', schooljaar: '2026-2027' },
  { land: 'Duitsland', regio: 'Thüringen', type: 'Sommerferien', start: '8 jul 2027', end: '17 aug 2027', schooljaar: '2026-2027' },

  // Frankrijk 2026-2027
  { land: 'Frankrijk', regio: 'Zone A', type: 'Herfstvakantie', start: '17 okt 2026', end: '2 nov 2026', schooljaar: '2026-2027' },
  { land: 'Frankrijk', regio: 'Zone B', type: 'Herfstvakantie', start: '17 okt 2026', end: '2 nov 2026', schooljaar: '2026-2027' },
  { land: 'Frankrijk', regio: 'Zone C', type: 'Herfstvakantie', start: '17 okt 2026', end: '2 nov 2026', schooljaar: '2026-2027' },

  { land: 'Frankrijk', regio: 'Zone A', type: 'Kerstvakantie', start: '19 dec 2026', end: '4 jan 2027', schooljaar: '2026-2027' },
  { land: 'Frankrijk', regio: 'Zone B', type: 'Kerstvakantie', start: '19 dec 2026', end: '4 jan 2027', schooljaar: '2026-2027' },
  { land: 'Frankrijk', regio: 'Zone C', type: 'Kerstvakantie', start: '19 dec 2026', end: '4 jan 2027', schooljaar: '2026-2027' },

  { land: 'Frankrijk', regio: 'Zone A', type: 'Hiver / Voorjaarsvakantie', start: '13 feb 2027', end: '1 mrt 2027', schooljaar: '2026-2027' },
  { land: 'Frankrijk', regio: 'Zone B', type: 'Hiver / Voorjaarsvakantie', start: '6 feb 2027', end: '22 feb 2027', schooljaar: '2026-2027' },
  { land: 'Frankrijk', regio: 'Zone C', type: 'Hiver / Voorjaarsvakantie', start: '20 feb 2027', end: '8 mrt 2027', schooljaar: '2026-2027' },

  { land: 'Frankrijk', regio: 'Zone A', type: 'Printemps / Paasvakantie', start: '11 apr 2027', end: '27 apr 2027', schooljaar: '2026-2027' },
  { land: 'Frankrijk', regio: 'Zone B', type: 'Printemps / Paasvakantie', start: '4 apr 2027', end: '20 apr 2027', schooljaar: '2026-2027' },
  { land: 'Frankrijk', regio: 'Zone C', type: 'Printemps / Paasvakantie', start: '18 apr 2027', end: '4 mei 2027', schooljaar: '2026-2027' },

  { land: 'Frankrijk', regio: 'Zone A', type: 'Zomervakantie', start: '4 jul 2027', end: '1 sep 2027', schooljaar: '2026-2027' },
  { land: 'Frankrijk', regio: 'Zone B', type: 'Zomervakantie', start: '4 jul 2027', end: '1 sep 2027', schooljaar: '2026-2027' },
  { land: 'Frankrijk', regio: 'Zone C', type: 'Zomervakantie', start: '4 jul 2027', end: '1 sep 2027', schooljaar: '2026-2027' },

  // Luxemburg 2026-2027
  { land: 'Luxemburg', regio: 'Nationaal', type: 'Herfstvakantie', start: '25 okt 2026', end: '2 nov 2026', schooljaar: '2026-2027' },
  { land: 'Luxemburg', regio: 'Nationaal', type: 'Kerstvakantie', start: '22 dec 2026', end: '4 jan 2027', schooljaar: '2026-2027' },
  { land: 'Luxemburg', regio: 'Nationaal', type: 'Voorjaarsvakantie', start: '22 feb 2027', end: '1 mrt 2027', schooljaar: '2026-2027' },
  { land: 'Luxemburg', regio: 'Nationaal', type: 'Paasvakantie', start: '5 apr 2027', end: '19 apr 2027', schooljaar: '2026-2027' },
  { land: 'Luxemburg', regio: 'Nationaal', type: 'Pinkstervakantie', start: '29 mei 2027', end: '7 jun 2027', schooljaar: '2026-2027' },
  { land: 'Luxemburg', regio: 'Nationaal', type: 'Zomervakantie', start: '15 jul 2027', end: '14 sep 2027', schooljaar: '2026-2027' },
];

// Lijsten voor V-FOR in de template
const schooljaren = Array.from(new Set(vakantieData.map((item) => item.schooljaar)));
const landen = [
  { name: 'België', flag: '🇧🇪' },
  { name: 'Nederland', flag: '🇳🇱' },
  { name: 'Duitsland', flag: '🇩🇪' },
  { name: 'Frankrijk', flag: '🇫🇷' },
  { name: 'Luxemburg', flag: '🇱🇺' },
];
const regios = Array.from(new Set(vakantieData.map((item) => item.regio)));
const types = [
  { name: 'Voorjaarsvakantie', label: 'Voorjaar / Krokus 🌷' },
  { name: 'Paasvakantie', label: 'Pasen 🐰' },
  { name: 'Meivakantie', label: 'Mei 🌳' },
  { name: 'Pinkstervakantie', label: 'Pinksteren 🕊️' },
  { name: 'Zomervakantie', label: 'Zomer ☀️' },
  { name: 'Herfstvakantie', label: 'Herfst 🍁' },
  { name: 'Kerstvakantie', label: 'Kerst 🎄' },
];


// --- REACTIVE STATE (FILTERS) ---

const activeSchooljaarFilter = ref('all');
const activeLandFilter = ref('all');
const activeRegioFilter = ref('all');
const activeVakantieFilter = ref('all');
const today = new Date();
today.setHours(0, 0, 0, 0);


// --- METHODS / COMPUTED PROPERTIES ---

/**
 * Normaliseert vakantietypen voor consistente filtering.
 */
function normalizeType(type) {
  const t = type.toLowerCase();
  if (t.includes('voorjaarsvakantie') || t.includes('krokus') || t.includes('carnaval') || t.includes('wintervakantie') || t.includes('winterferien') || t.includes('hiver')) {
    return 'Voorjaarsvakantie';
  } else if (t.includes('paasvakantie') || t.includes('osterferien') || t.includes('printemps')) {
    return 'Paasvakantie';
  } else if (t.includes('meivakantie')) {
    return 'Meivakantie';
  } else if (t.includes('pinkstervakantie') || t.includes('pinksteren') || t.includes('pfingstferien')) {
    return 'Pinkstervakantie';
  } else if (t.includes('zomervakantie') || t.includes('sommerferien')) {
    return 'Zomervakantie';
  } else if (t.includes('herfstvakantie') || t.includes('herbstferien') || t.includes('toussaint')) {
    return 'Herfstvakantie';
  } else if (t.includes('kerstvakantie') || t.includes('weihnachtsferien') || t.includes('noël')) {
    return 'Kerstvakantie';
  }
  return t;
}

/**
 * Past de actieve filter aan (met toggle-functionaliteit).
 */
const setFilter = (filterType, value) => {
  // Haal de juiste 'ref' op basis van het type
  const filterRef = {
    schooljaar: activeSchooljaarFilter,
    land: activeLandFilter,
    regio: activeRegioFilter,
    vakantie: activeVakantieFilter,
  }[filterType];

  if (filterRef.value === value) {
    // Toggle: Zet terug naar 'all' als de knop opnieuw wordt geklikt
    filterRef.value = 'all';
  } else {
    // Zet de nieuwe waarde
    filterRef.value = value;
  }
};

/**
 * Geeft de Tailwind klassen terug voor de knoppen.
 */
const getButtonClasses = (filterType, value, activeClass) => {
  let isActive = false;

  if (filterType === 'schooljaar') {
    isActive = activeSchooljaarFilter.value === value;
  } else if (filterType === 'land') {
    isActive = activeLandFilter.value === value;
  } else if (filterType === 'regio') {
    isActive = activeRegioFilter.value === value;
  } else if (filterType === 'vakantie') {
    isActive = activeVakantieFilter.value === value;
  }

  // Basisklassen
  let classes = 'btn px-3 py-1.5 rounded-full transition-all duration-200 text-sm';

  // Actieve klasse logica
  if (isActive) {
    classes += ` ${activeClass}`; // Active Class komt uit de <style>
  } else {
    classes += ' border border-sky-200/40 bg-white/10 text-sky-100 hover:bg-white/20';
  }
  return classes;
};


/**
 * Geeft de Tailwind klassen terug voor de tabelrijen (achtergrondkleur).
 */
const getRowClasses = (land) => {
  if (land === 'België') return 'bg-sky-100/90';
  if (land === 'Nederland') return 'bg-cyan-100/90';
  if (land === 'Duitsland') return 'bg-blue-100/90';
  if (land === 'Frankrijk') return 'bg-indigo-100/90';
  if (land === 'Luxemburg') return 'bg-violet-100/90';
  return 'bg-white';
};


/**
 * Computed property die de data filtert op basis van de actieve filters.
 */
const filteredVakanties = computed(() => {
  return vakantieData.filter((item) => {
    let schooljaarMatch = true;
    let landMatch = true;
    let regioMatch = true;
    let vakantieMatch = true;

    // Schooljaar filter
    if (activeSchooljaarFilter.value !== 'all') {
      schooljaarMatch = item.schooljaar === activeSchooljaarFilter.value;
    }

    // Land filter
    if (activeLandFilter.value !== 'all') {
      landMatch = item.land === activeLandFilter.value;
    }

    // Regio filter
    if (activeRegioFilter.value !== 'all') {
      regioMatch = item.regio === activeRegioFilter.value;
    }

    // Vakantie Type filter
    if (activeVakantieFilter.value !== 'all') {
      // Gebruik de normalisatie functie om ook subtiele verschillen op te vangen
      vakantieMatch = normalizeType(item.type) === activeVakantieFilter.value;
    }

    return schooljaarMatch && landMatch && regioMatch && vakantieMatch;
  });
});

// --- HUIDIGE VAKANTIE ---
const monthMap = {
  jan: 0,
  feb: 1,
  mrt: 2,
  mar: 2,
  apr: 3,
  mei: 4,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  okt: 9,
  oct: 9,
  nov: 10,
  dec: 11,
};

const parseDate = (input) => {
  if (!input) return null;
  const parts = input.split(' ');
  if (parts.length !== 3) return null;
  const [dayStr, monthStrRaw, yearStr] = parts;
  const day = parseInt(dayStr, 10);
  const monthKey = monthStrRaw.toLowerCase().replace('.', '');
  const month = monthMap[monthKey];
  const year = parseInt(yearStr, 10);
  if (Number.isNaN(day) || month === undefined || Number.isNaN(year)) return null;
  const d = new Date(year, month, day);
  d.setHours(0, 0, 0, 0);
  return d;
};

const isTodayBetween = (start, end) => {
  if (!start || !end) return false;
  return start.getTime() <= today.getTime() && today.getTime() <= end.getTime();
};

const currentVakantieRegios = computed(() =>
  vakantieData
    .filter((item) => {
      const start = parseDate(item.start);
      const end = parseDate(item.end);
      return isTodayBetween(start, end);
    })
    .sort((a, b) => (a.land + a.regio).localeCompare(b.land + b.regio)),
);

const todayDisplay = new Intl.DateTimeFormat('nl-NL', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
}).format(today);
</script>

<style scoped>
.dw-page {
  background:
    radial-gradient(1000px 520px at 0% -15%, rgba(169, 214, 255, 0.22), transparent 62%),
    radial-gradient(900px 500px at 100% 110%, rgba(135, 206, 250, 0.16), transparent 64%);
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
  border-color: rgba(172, 221, 255, 0.34);
}

.dw-stat {
  background: rgba(8, 52, 111, 0.48);
  border: 1px solid rgba(194, 228, 255, 0.45);
  color: #eff8ff;
}

.dw-table-shell {
  background: rgba(18, 80, 158, 0.78);
  border-color: rgba(172, 221, 255, 0.38);
}

.dw-thead {
  background: rgba(5, 40, 88, 0.8);
  color: #deefff;
}

.btn.active-jaar {
    background-color: rgba(227, 243, 255, 0.2);
    color: #fff;
    border-color: rgba(214, 236, 255, 0.45);
    box-shadow: 0 4px 10px -2px rgba(4, 28, 66, 0.35);
}
.btn.active-regio {
    background-color: rgba(227, 243, 255, 0.2);
    color: #fff;
    border-color: rgba(214, 236, 255, 0.45);
    box-shadow: 0 4px 10px -2px rgba(4, 28, 66, 0.35);
}
.btn.active-vakantie {
    background-color: rgba(227, 243, 255, 0.2);
    color: #fff;
    border-color: rgba(214, 236, 255, 0.45);
    box-shadow: 0 4px 10px -2px rgba(4, 28, 66, 0.35);
}
</style>
