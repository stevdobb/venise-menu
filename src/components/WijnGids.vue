<template>
  <div class="dw-page mx-auto max-w-screen-xl pt-4 md:py-6 md:px-2">
    <div class="dw-container md:rounded-xl md:shadow-2xl md:p-8 space-y-6">

      <!-- Header -->
      <div class="dw-card rounded-xl p-5 md:p-6">
        <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div class="space-y-1">
            <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Bistro Venise</p>
            <h1 class="text-3xl font-bold text-white">Wijngids</h1>
            <p class="text-sm text-sky-100">
              Ontdek onze volledige wijnselectie met smaakprofielen, druivenrassen en spijsadviezen.
            </p>
          </div>
          <div class="grid gap-2 w-full sm:w-auto">
            <div class="dw-stat px-4 py-2 rounded-lg shadow-sm text-sm">
              Getoond: <span class="font-semibold">{{ filteredWijnen.length }}</span> / {{ wijnen.length }} wijnen
            </div>
            <button @click="print()" class="no-print flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-sky-200/50 bg-white/10 text-sky-100 hover:bg-white/20 transition">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z"/>
              </svg>
              Afdrukken
            </button>
          </div>
        </div>
      </div>

      <!-- Filters + Search -->
      <div class="dw-card rounded-xl p-4 md:p-5 space-y-4 no-print">
        <!-- Type filter tabs -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="tab in filterTabs"
            :key="tab.value"
            class="btn px-4 py-1.5 rounded-full transition-all duration-200 text-sm font-medium"
            :class="activeFilter === tab.value
              ? 'active-type border border-sky-200/60 bg-white/20 text-white shadow'
              : 'border border-sky-200/40 bg-white/10 text-sky-100 hover:bg-white/20'"
            @click="activeFilter = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Search -->
        <div class="relative">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sky-300 pointer-events-none" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Zoek op naam, druif, regio..."
            class="w-full rounded-lg border border-sky-200/40 bg-white/10 py-2.5 pl-9 pr-4 text-sm text-white placeholder-sky-300/70 focus:border-sky-200/70 focus:outline-none focus:ring-1 focus:ring-sky-300/40"
          />
        </div>

        <div class="space-y-2">
          <span class="text-xs font-semibold uppercase tracking-widest text-sky-300">Land</span>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="land in landOptions"
              :key="land"
              type="button"
              class="btn px-4 py-1.5 rounded-full transition-all duration-200 text-sm font-medium"
              :class="activeLand === land
                ? 'active-type border border-sky-200/60 bg-white/20 text-white shadow'
                : 'border border-sky-200/40 bg-white/10 text-sky-100 hover:bg-white/20'"
              @click="activeLand = land"
            >
              {{ land === 'alle' ? 'Alle landen' : land }}
            </button>
          </div>
        </div>

        <div class="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <label class="space-y-1">
            <span class="text-xs font-semibold uppercase tracking-widest text-sky-300">Regio</span>
            <select v-model="activeRegio" class="dw-select w-full rounded-lg px-3 py-2.5 text-sm">
              <option v-for="regio in regioOptions" :key="regio" :value="regio">
                {{ regio === 'alle' ? 'Alle regio’s' : regio }}
              </option>
            </select>
          </label>

          <label class="space-y-1">
            <span class="text-xs font-semibold uppercase tracking-widest text-sky-300">Druif</span>
            <select v-model="activeDruif" class="dw-select w-full rounded-lg px-3 py-2.5 text-sm">
              <option v-for="druif in druifOptions" :key="druif" :value="druif">
                {{ druif === 'alle' ? 'Alle druiven' : druif }}
              </option>
            </select>
          </label>

          <label class="space-y-1">
            <span class="text-xs font-semibold uppercase tracking-widest text-sky-300">Past bij</span>
            <select v-model="activePairing" class="dw-select w-full rounded-lg px-3 py-2.5 text-sm">
              <option v-for="pairing in pairingOptions" :key="pairing" :value="pairing">
                {{ pairing === 'alle' ? 'Alle gerechten' : pairing }}
              </option>
            </select>
          </label>
        </div>

        <div class="space-y-2">
          <span class="text-xs font-semibold uppercase tracking-widest text-sky-300">Wijnprofiel</span>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="profiel in profielOptions"
              :key="profiel"
              type="button"
              class="btn px-4 py-1.5 rounded-full transition-all duration-200 text-sm font-medium"
              :class="activeProfiel === profiel
                ? 'active-type border border-sky-200/60 bg-white/20 text-white shadow'
                : 'border border-sky-200/40 bg-white/10 text-sky-100 hover:bg-white/20'"
              @click="activeProfiel = profiel"
            >
              {{ profiel === 'alle' ? 'Alle profielen' : profiel }}
            </button>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3">
          <p class="text-xs text-sky-200/80">
            Actieve filters: <span class="font-semibold text-white">{{ activeFilterCount }}</span>
          </p>
          <button
            v-if="activeFilterCount > 0"
            class="text-xs font-semibold text-sky-200 underline underline-offset-2 hover:text-white"
            @click="resetFilters"
          >
            Alles wissen
          </button>
        </div>
      </div>

      <!-- Wine Grid -->
      <div v-if="filteredWijnen.length > 0" class="print-area grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="wijn in filteredWijnen"
          :key="wijn.naam"
          class="dw-card rounded-xl overflow-hidden flex flex-col border-t-2"
          :class="getTypeBorderClass(wijn.type)"
        >
          <!-- Card top type label -->
          <div class="px-4 pt-3 pb-0 flex items-center gap-2">
            <span
              class="inline-block px-2 py-0.5 rounded-full text-xs font-semibold"
              :class="getTypeTagClass(wijn.type)"
            >{{ wijn.type }}</span>
          </div>

          <div class="p-4 flex flex-col gap-3 flex-1">
            <!-- Name + origin -->
            <div>
              <h3 class="text-base font-bold text-white leading-tight">{{ wijn.naam }}</h3>
              <p class="text-xs text-sky-200 mt-0.5">{{ wijn.land }} — {{ wijn.regio }}</p>
              <p class="text-xs italic text-sky-100/80 mt-0.5">{{ wijn.druif }}</p>
            </div>

            <!-- Description -->
            <p class="text-sm text-sky-100 leading-relaxed">{{ wijn.beschrijving }}</p>

            <!-- Taste profile bars -->
            <div class="space-y-1.5">
              <p class="text-xs font-semibold uppercase tracking-wider text-sky-300">Smaakprofiel</p>
              <div
                v-for="(profiel, idx) in getSmaakprofiel(wijn)"
                :key="idx"
                class="flex items-center gap-2"
              >
                <span class="text-xs text-sky-200 w-16 shrink-0">{{ profiel.label }}</span>
                <div class="flex gap-0.5">
                  <span
                    v-for="dot in 5"
                    :key="dot"
                    class="wine-dot text-sm leading-none"
                    :class="dot <= profiel.waarde ? ['wine-dot-filled', getFilledDotClass(wijn.type)] : 'wine-dot-empty text-sky-200/20'"
                  >●</span>
                </div>
                <span class="text-xs text-sky-300/60 ml-auto">{{ profiel.labelHoog }}</span>
              </div>
            </div>

            <!-- Food pairing tags -->
            <div class="mt-auto pt-1">
              <p class="text-xs font-semibold uppercase tracking-wider text-sky-300 mb-1.5">Past bij</p>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="(item, idx) in wijn.bijGerechten"
                  :key="idx"
                  class="inline-block px-2 py-0.5 rounded-full text-xs bg-white/10 text-sky-100 border border-sky-200/30"
                >{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="dw-card rounded-xl p-10 text-center">
        <p class="text-sky-200 text-sm">Geen wijnen gevonden voor deze zoekopdracht.</p>
        <button
          class="mt-3 text-xs text-sky-300 underline hover:text-white"
          @click="resetFilters"
        >Filters wissen</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeFilter = ref('alle');
const searchQuery = ref('');
const activeLand = ref('alle');
const activeRegio = ref('alle');
const activeDruif = ref('alle');
const activePairing = ref('alle');
const activeProfiel = ref('alle');

const filterTabs = [
  { value: 'alle', label: 'Alle' },
  { value: 'Rood', label: 'Rood' },
  { value: 'Wit', label: 'Wit' },
  { value: 'Rosé', label: 'Rosé' },
  { value: 'Bubbels', label: 'Bubbels' },
];

const wijnen = [
  // === ROOD ===
  {
    type: 'Rood',
    naam: 'Rode wijn v/h huis',
    land: 'Frankrijk',
    regio: 'Bordeaux',
    druif: 'Merlot',
    beschrijving: 'Toegankelijke huiswijn met rijpe rode vruchten, zachte tannines en een warme finish. Perfect voor elke maaltijd.',
    smaak: { body: 3, fruit: 3, zuur: 2, tannine: 2 },
    bijGerechten: ['pasta', 'vlees', 'kaas'],
  },
  {
    type: 'Rood',
    naam: 'Château La Grâce Dieu',
    land: 'Frankrijk',
    regio: 'Saint-Emilion Grand Cru, Bordeaux',
    druif: 'Merlot, Cabernet Franc',
    beschrijving: 'Elegant en complex met rijpe pruimen, kersen en licht eiken. Fluweelzachte tannines en een lange, warme afdronk.',
    smaak: { body: 4, fruit: 4, zuur: 3, tannine: 3 },
    bijGerechten: ['eendenborst', 'lamsvlees', 'rijpe kazen'],
  },
  {
    type: 'Rood',
    naam: 'Painted Wolf The Den',
    land: 'Zuid-Afrika',
    regio: 'Western Cape',
    druif: 'Pinotage, Shiraz',
    beschrijving: 'Karaktervolle Zuid-Afrikaanse blend met rode bessen, lichte rooknuances en kruiden. Levendig en toegankelijk met een frisse finish.',
    smaak: { body: 3, fruit: 4, zuur: 3, tannine: 2 },
    bijGerechten: ['gegrild vlees', 'burger', 'pasta bolognese'],
  },
  {
    type: 'Rood',
    naam: 'Rube Montepulciano d\'Abruzzo',
    land: 'Italië',
    regio: 'Abruzzo',
    druif: 'Montepulciano',
    beschrijving: 'Frisse, fruitige Italiaanse rode wijn met kersen, aardbeien en zachte, aangenaam gekruide tannines. Soepel en drinkbaar.',
    smaak: { body: 3, fruit: 4, zuur: 3, tannine: 2 },
    bijGerechten: ['pizza', 'pasta', 'antipasti'],
  },
  {
    type: 'Rood',
    naam: 'Château Begadan',
    land: 'Frankrijk',
    regio: 'Médoc Cru Bourgeois, Bordeaux',
    druif: 'Merlot, Cabernet Sauvignon',
    beschrijving: 'Elegante Bordeaux cru bourgeois met rode bessen, kruid en een frisse afdronk. Uitstekende verhouding kwaliteit-prijs.',
    smaak: { body: 3, fruit: 3, zuur: 3, tannine: 2 },
    bijGerechten: ['eend', 'gegrild rund', 'kaasplank'],
  },
  {
    type: 'Rood',
    naam: 'Gigondas "Signature"',
    land: 'Frankrijk',
    regio: 'Gigondas, Rhône',
    druif: 'Mourvèdre, Grenache, Syrah',
    beschrijving: 'Krachtige, intense Rhône-wijn met donker fruit, kruiden, peper en een vleugje garrigue. Volmondige structuur met fijne tannines.',
    smaak: { body: 4, fruit: 4, zuur: 3, tannine: 4 },
    bijGerechten: ['wild', 'lamsvlees', 'pittig voedsel'],
  },
  {
    type: 'Rood',
    naam: 'Sancerre Rouge Alexis',
    land: 'Frankrijk',
    regio: 'Sancerre, Loire',
    druif: 'Pinot Noir',
    beschrijving: 'Elegante Loire Pinot Noir met kersen, aardbeien en fijne kruidigheid. Licht en verfijnd, kan ook gekoeld gedronken worden.',
    smaak: { body: 2, fruit: 4, zuur: 4, tannine: 2 },
    bijGerechten: ['forel', 'gevogelte', 'geitenkaas'],
  },
  {
    type: 'Rood',
    naam: 'Peloton ROOD',
    land: 'Zuid-Afrika',
    regio: 'Paarl',
    druif: 'Blend',
    beschrijving: 'Vriendelijke Zuid-Afrikaanse blend met rood fruit en zachte tannines. Licht en toegankelijk.',
    smaak: { body: 3, fruit: 4, zuur: 3, tannine: 2 },
    bijGerechten: ['gegrild vlees', 'pasta', 'barbecue'],
  },
  {
    type: 'Rood',
    naam: 'Morandé Reserva Merlot',
    land: 'Chili',
    regio: 'Valle Central',
    druif: 'Merlot',
    beschrijving: 'Zachte, soepele Chileense Merlot met pruimen, chocolade en vanille. Rond en vol van smaak.',
    smaak: { body: 3, fruit: 4, zuur: 3, tannine: 2 },
    bijGerechten: ['pasta bolognese', 'gegrild rund', 'rijpe kazen'],
  },
  {
    type: 'Rood',
    naam: 'Morandé Reserva Cabernet Sauvignon',
    land: 'Chili',
    regio: 'Valle Central',
    druif: 'Cabernet Sauvignon',
    beschrijving: 'Volle, structureerde Chileense Cabernet met donker fruit, eiken en peper. Elegante finish.',
    smaak: { body: 4, fruit: 4, zuur: 3, tannine: 3 },
    bijGerechten: ['entrecôte', 'lamsvlees', 'harde kazen'],
  },
  {
    type: 'Rood',
    naam: 'Mariluna Tinto',
    land: 'Spanje',
    regio: 'Valencia',
    druif: 'Monastrell, Tempranillo',
    beschrijving: 'Karaktervolle Spaanse blend met pruimen, kruid en een vleugje bramen. Warm en aanhoudend.',
    smaak: { body: 3, fruit: 4, zuur: 3, tannine: 2 },
    bijGerechten: ['gegrild vlees', 'tapas', 'Spaanse chorizo'],
  },
  {
    type: 'Rood',
    naam: 'Montepulciano Tinto d\'Abruzzo',
    land: 'Italië',
    regio: 'Abruzzo',
    druif: 'Montepulciano d\'Abruzzo',
    beschrijving: 'Volle Italiaanse rode wijn met kersen, aardbeien en kruiden. Kan ook gekoeld gedronken worden. Verfijnd en elegant.',
    smaak: { body: 3, fruit: 4, zuur: 3, tannine: 2 },
    bijGerechten: ['pasta amatriciana', 'braadschotel', 'getijzerinten'],
  },
  {
    type: 'Rood',
    naam: 'Waterkloof Circle of Life',
    land: 'Zuid-Afrika',
    regio: 'Stellenbosch',
    druif: 'Merlot, Cabernet Sauvignon, Petit Verdot, Cabernet Franc',
    beschrijving: 'Biodynamische blend met donker fruit, cederhout en een subtiele kruidigheid. Gestructureerd met elegante tannines.',
    smaak: { body: 4, fruit: 4, zuur: 3, tannine: 3 },
    bijGerechten: ['ribeye', 'wild', 'harde kazen'],
  },
  {
    type: 'Rood',
    naam: 'De Stefani Venezia',
    land: 'Italië',
    regio: 'Venezia DOC',
    druif: 'Merlot, Cabernet Franc',
    beschrijving: 'Lichte, vlotte Venetiaanse rode wijn met kersen, viooltjes en een zachte kruidigheid. Gemakkelijk drinkbaar.',
    smaak: { body: 2, fruit: 3, zuur: 3, tannine: 2 },
    bijGerechten: ['charcuterie', 'lichte pasta', 'gegrilde groenten'],
  },
  {
    type: 'Rood',
    naam: 'Château de Puisseguin Curat',
    land: 'Frankrijk',
    regio: 'Puisseguin Saint-Emilion, Bordeaux',
    druif: 'Merlot, Cabernet Franc',
    beschrijving: 'Rijke Bordeaux-satellite met rode en zwarte bessen, vanille en kruiden. Rond en warm met een aanhoudende afdronk.',
    smaak: { body: 3, fruit: 4, zuur: 3, tannine: 3 },
    bijGerechten: ['entrecôte', 'gevogelte', 'zachte kazen'],
  },
  {
    type: 'Rood',
    naam: 'Château Bertin Lussac Saint-Emilion',
    land: 'Frankrijk',
    regio: 'Lussac Saint-Emilion, Bordeaux',
    druif: 'Merlot, Cabernet Franc',
    beschrijving: 'Sappige, fruitgedreven Bordeaux met pruim, leer en eiken tonen. Goede structuur en balans.',
    smaak: { body: 3, fruit: 4, zuur: 3, tannine: 3 },
    bijGerechten: ['ossenhaas', 'canard', 'lamskroon'],
  },
  {
    type: 'Rood',
    naam: 'Château Haut La Grâce Dieu',
    land: 'Frankrijk',
    regio: 'Saint-Emilion Grand Cru, Bordeaux',
    druif: 'Merlot, Cabernet Franc',
    beschrijving: 'Volmondige Grand Cru met concentratie van zwart fruit, tabak en cederhout. Nobele structuur met een lange afdronk.',
    smaak: { body: 4, fruit: 4, zuur: 3, tannine: 4 },
    bijGerechten: ['wild', 'kalfszwezerik', 'truffelgerechten'],
  },
  {
    type: 'Rood',
    naam: 'Alexis',
    land: 'Frankrijk',
    regio: 'Pays d\'Oc',
    druif: 'Grenache, Syrah',
    beschrijving: 'Vlotte, vriendelijke zuiderling met rood fruit en zachte kruiden. Licht en aangenaam voor elke gelegenheid.',
    smaak: { body: 2, fruit: 4, zuur: 2, tannine: 2 },
    bijGerechten: ['tapas', 'pizza', 'lichte vleesgerechten'],
  },
  {
    type: 'Rood',
    naam: 'Yali Three Lagoons Gran Reserva',
    land: 'Chili',
    regio: 'Colchagua Valley',
    druif: 'Carmenère',
    beschrijving: 'Krachtige Chileense Carmenère met donkere bessen, paprika, chocolade en rokerige ondertonen. Volle body met rijpe tannines.',
    smaak: { body: 4, fruit: 4, zuur: 3, tannine: 3 },
    bijGerechten: ['gegrild rund', 'BBQ', 'kruidige stoofschotels'],
  },
  {
    type: 'Rood',
    naam: 'Morandé Pionero',
    land: 'Chili',
    regio: 'Valle Central',
    druif: 'Carmenère',
    beschrijving: 'Toegankelijke, fruitrijke Carmenère met rode bessen, pruimen en een zachte, kruidige finish. Ideale dagelijkse rode wijn.',
    smaak: { body: 3, fruit: 4, zuur: 3, tannine: 2 },
    bijGerechten: ['pasta', 'gegrild vlees', 'hamburger'],
  },
  {
    type: 'Rood',
    naam: 'Primodo Primitivo',
    land: 'Italië',
    regio: 'Puglia',
    druif: 'Primitivo',
    beschrijving: 'Weelderige, zongerijpte Apulische wijn met jamachtige bramen, vijgen en een vleugje chocolade. Vol en warm.',
    smaak: { body: 4, fruit: 5, zuur: 2, tannine: 3 },
    bijGerechten: ['gegrild varken', 'BBQ', 'pikante gerechten'],
  },
  {
    type: 'Rood',
    naam: 'The Wedge Rood',
    land: 'Zuid-Afrika',
    regio: 'Swartland',
    druif: 'Shiraz, Mourvèdre, Grenache',
    beschrijving: 'Dynamische Rhône-stijl blend uit Zuid-Afrika met zwart fruit, peper en kruiden. Levendig met een frisse, droge afdronk.',
    smaak: { body: 3, fruit: 4, zuur: 3, tannine: 3 },
    bijGerechten: ['lamsvlees', 'gegrilde worstjes', 'kruidenkazen'],
  },
  {
    type: 'Rood',
    naam: 'Côtes du Rhône Légende du Terroir',
    land: 'Frankrijk',
    regio: 'Côtes du Rhône, Rhône',
    druif: 'Grenache, Syrah, Mourvèdre',
    beschrijving: 'Klassieke Rhône blend met rijp rood fruit, garrigue en warme kruiden. Ronde, zachte structuur.',
    smaak: { body: 3, fruit: 4, zuur: 3, tannine: 2 },
    bijGerechten: ['provençaalse gerechten', 'gegrilde kip', 'zachte kazen'],
  },
  {
    type: 'Rood',
    naam: 'Favor del Demòni',
    land: 'Italië',
    regio: 'Sicilië',
    druif: 'Nero d\'Avola, Syrah',
    beschrijving: 'Intense Siciliaanse wijn met donkere kersen, lakrits en kruiden. Krachtig karakter met een lange, warme afdronk.',
    smaak: { body: 4, fruit: 4, zuur: 3, tannine: 3 },
    bijGerechten: ['wild', 'gegrild vlees', 'pikante pasta'],
  },
  {
    type: 'Rood',
    naam: 'Regadas',
    land: 'Portugal',
    regio: 'Alentejo',
    druif: 'Aragonez, Alicante Bouschet',
    beschrijving: 'Rijke Portugese wijn met pruimen, rode bessen en een vleugje vanille. Warm en soepel met mooie structuur.',
    smaak: { body: 3, fruit: 4, zuur: 3, tannine: 3 },
    bijGerechten: ['gegrild vlees', 'kabeljauw', 'zachte kazen'],
  },

  // === WIT ===
  {
    type: 'Wit',
    naam: 'Witte wijn v/h huis',
    land: 'Frankrijk',
    regio: 'Loire / Bordeaux',
    druif: 'Sauvignon Blanc of Chardonnay',
    beschrijving: 'Verfrissende huiswijn naar keuze: Sauvignon (droog met fris citrus) of Chardonnay (zacht en fruitig). Perfect als aperitief.',
    smaak: { body: 2, fruit: 3, zuur: 4, frisheid: 4 },
    bijGerechten: ['tapas', 'zeevruchten', 'vis'],
  },
  {
    type: 'Wit',
    naam: 'Caldora Wit',
    land: 'Italië',
    regio: 'Abruzzo',
    druif: 'Pinot Grigio',
    beschrijving: 'Lichte, frisse Italiaanse wit met groene appel, peer en een zachte bloemigheid. Droog en verfrissend.',
    smaak: { body: 2, fruit: 3, zuur: 3, frisheid: 4 },
    bijGerechten: ['zeevruchten', 'salades', 'lichte pasta'],
  },
  {
    type: 'Wit',
    naam: 'Chablis Premier Cru',
    land: 'Frankrijk',
    regio: 'Chablis, Bourgogne',
    druif: 'Chardonnay',
    beschrijving: 'Strakke, minerale Chablis met groene appel, citrus en een typisch krijtige mineraliteit. Droog en elegant.',
    smaak: { body: 3, fruit: 3, zuur: 4, frisheid: 5 },
    bijGerechten: ['oesters', 'sint-jakobsschelpen', 'zeebaars'],
  },
  {
    type: 'Wit',
    naam: 'The Wedge Wit',
    land: 'Zuid-Afrika',
    regio: 'Swartland',
    druif: 'Chenin Blanc',
    beschrijving: 'Veelzijdige Chenin Blanc met kwee, honing, citrus en een subtiele kruidigheid. Fris en complex.',
    smaak: { body: 3, fruit: 4, zuur: 4, frisheid: 4 },
    bijGerechten: ['varkenshaas', 'Aziatische keuken', 'geitenkaas'],
  },
  {
    type: 'Wit',
    naam: 'Crutzberg Barrique',
    land: 'Duitsland',
    regio: 'Moezel',
    druif: 'Chardonnay',
    beschrijving: 'Rijke, houtgerijpte Chardonnay met botergele appel, vanille en geroosterd brood. Vol en complex.',
    smaak: { body: 4, fruit: 3, zuur: 3, frisheid: 3 },
    bijGerechten: ['gevogelte in roomsaus', 'rijpe kazen', 'paddenstoelen'],
  },
  {
    type: 'Wit',
    naam: 'Crutzberg Chardonnay',
    land: 'Duitsland',
    regio: 'Moezel',
    druif: 'Chardonnay',
    beschrijving: 'Fris en fruitig met appel, peer en zachte citrusnoten. Evenwichtig en toegankelijk.',
    smaak: { body: 3, fruit: 4, zuur: 3, frisheid: 3 },
    bijGerechten: ['gegrilde kip', 'lichte pasta', 'verse kazen'],
  },
  {
    type: 'Wit',
    naam: 'Genoels-Elderen',
    land: 'België',
    regio: 'Haspengouw',
    druif: 'Chardonnay',
    beschrijving: 'Trots Belgisch paradepaardje met appel, hazelnoot en een subtiele mineraaltoets. Elegant en verfijnd.',
    smaak: { body: 3, fruit: 3, zuur: 4, frisheid: 4 },
    bijGerechten: ['asperges', 'zalm', 'gevogelte'],
  },
  {
    type: 'Wit',
    naam: 'Pinot Gris (Prova Regia)',
    land: 'Alsace / Noord-Italië',
    regio: 'Alsace',
    druif: 'Pinot Gris',
    beschrijving: 'Geurig en volmondige wijn met peer, lychee en een vleugje kruiden. Licht zoetig met een rijke textuur.',
    smaak: { body: 3, fruit: 4, zuur: 3, frisheid: 3 },
    bijGerechten: ['foie gras', 'Aziatische keuken', 'zachte kazen'],
  },
  {
    type: 'Wit',
    naam: 'Pouilly-Fumé de Ladoucette',
    land: 'Frankrijk',
    regio: 'Pouilly-Fumé, Loire',
    druif: 'Sauvignon Blanc',
    beschrijving: 'Iconische Loire klassieker met zwarte bes, citrus, vuur en een karakteristieke rooktoets. Droog en elegant.',
    smaak: { body: 3, fruit: 4, zuur: 4, frisheid: 5 },
    bijGerechten: ['geitenkaas', 'zeevruchten', 'asperges'],
  },
  {
    type: 'Wit',
    naam: 'Pouilly Fumé Les Loges',
    land: 'Frankrijk',
    regio: 'Pouilly-Fumé, Loire',
    druif: 'Sauvignon Blanc',
    beschrijving: 'Klassieke Loire Sauvignon met citrus, grapefruit en karakteristieke rookachtige mineraliteit. Droog en elegant.',
    smaak: { body: 2, fruit: 3, zuur: 5, frisheid: 5 },
    bijGerechten: ['geitenkaas', 'oesters', 'asperges'],
  },
  {
    type: 'Wit',
    naam: 'Pouilly Fuissé',
    land: 'Frankrijk',
    regio: 'Mâconnais, Bourgogne',
    druif: 'Chardonnay',
    beschrijving: 'Volle, elegante Bourgondische Chardonnay met rijpe appel, peer, hazelnoot en een subtiele houttoets.',
    smaak: { body: 3, fruit: 4, zuur: 3, frisheid: 3 },
    bijGerechten: ['kabeljauw in botersaus', 'gevogelte', 'rijpe kazen'],
  },
  {
    type: 'Wit',
    naam: 'Sancerre',
    land: 'Frankrijk',
    regio: 'Sancerre, Loire',
    druif: 'Sauvignon Blanc',
    beschrijving: 'Verfijnde Loire-klassieker met grapefruit, kruisbes, stenen en een typische mineraliteit. Droog en levendig.',
    smaak: { body: 2, fruit: 4, zuur: 5, frisheid: 5 },
    bijGerechten: ['geitenkaas', 'asperges', 'zeevruchten'],
  },
  {
    type: 'Wit',
    naam: 'Bourgogne Chitry (Giraudon)',
    land: 'Frankrijk',
    regio: 'Chitry, Bourgogne',
    druif: 'Chardonnay',
    beschrijving: 'Frisse, toegankelijke Bourgondische Chardonnay met appel, citrus en een zachte mineraaltoets.',
    smaak: { body: 2, fruit: 3, zuur: 4, frisheid: 4 },
    bijGerechten: ['mosselen', 'gegrilde vis', 'verse kazen'],
  },
  {
    type: 'Wit',
    naam: 'Lamothe Wit (Elise)',
    land: 'Frankrijk',
    regio: 'Bordeaux',
    druif: 'Sauvignon Blanc, Sémillon',
    beschrijving: 'Fris en fruitig Bordeaux blanc met citrus, wit fruit en kruiden. Droog en levendig.',
    smaak: { body: 2, fruit: 3, zuur: 4, frisheid: 4 },
    bijGerechten: ['zeevruchten', 'salade', 'lichte vis'],
  },
  {
    type: 'Wit',
    naam: 'Morandé Wit (Terrarum)',
    land: 'Chili',
    regio: 'Valle de Casablanca',
    druif: 'Chardonnay',
    beschrijving: 'Frisse Chileense Chardonnay met citrus, groene appel en een subtiele mineraliteit. Elegant en evenwichtig.',
    smaak: { body: 3, fruit: 3, zuur: 4, frisheid: 4 },
    bijGerechten: ['ceviche', 'gegrilde vis', 'groentegerechten'],
  },
  {
    type: 'Wit',
    naam: 'Muscadet',
    land: 'Frankrijk',
    regio: 'Muscadet Sèvre et Maine, Loire',
    druif: 'Melon de Bourgogne',
    beschrijving: 'Droge, zeer frisse Loire-klassieker met citroen, groene appel en een zilte mineraliteit. Sur lie gerijpt.',
    smaak: { body: 2, fruit: 2, zuur: 5, frisheid: 5 },
    bijGerechten: ['oesters', 'mosselen', 'mosselsaus'],
  },
  {
    type: 'Wit',
    naam: 'Painted Wolf Den Wit',
    land: 'Zuid-Afrika',
    regio: 'Western Cape',
    druif: 'Chenin Blanc',
    beschrijving: 'Levendige Chenin Blanc met kwee, citrus en een kruidige ondertoon. Droog en fruitig tegelijk.',
    smaak: { body: 2, fruit: 4, zuur: 4, frisheid: 4 },
    bijGerechten: ['Aziatische keuken', 'geitenkaas', 'gegrilde kip'],
  },
  {
    type: 'Wit',
    naam: 'Waterkloof Wit',
    land: 'Zuid-Afrika',
    regio: 'Stellenbosch',
    druif: 'Sauvignon Blanc, Chenin Blanc',
    beschrijving: 'Verfrissende biodynamische blend met citrusfruit, kruiden en een lange minerale afdronk.',
    smaak: { body: 2, fruit: 3, zuur: 4, frisheid: 5 },
    bijGerechten: ['zeevruchten', 'lichte salades', 'vis'],
  },
  {
    type: 'Wit',
    naam: 'The Wedge Chenin Roussanne',
    land: 'Zuid-Afrika',
    regio: 'Swartland',
    druif: 'Chenin Blanc, Roussanne',
    beschrijving: 'SMAAK: Blend tussen Chenin blanc en Rousanne (gekend uit de Rhône streek). De Chenin zorgt voor de frisse appeltoets en citroenzeste waar de Rousanne aroma\'s van rijpe abrikozen en honing toevoegen. Dit alles geeft een evenwichtige, mondvullende wijn met knapperige zuren, afgerond met een vleugje mineraliteit. FOODPAIRING: Witte vleesbereidingen of visgerechten.',
    smaak: { body: 3, fruit: 4, zuur: 4, frisheid: 4 },
    bijGerechten: ['varkenshaas', 'vis', 'witvis'],
  },

  // === ROSÉ ===
  {
    type: 'Rosé',
    naam: 'Côtes de Provence Château Cavalier',
    land: 'Frankrijk',
    regio: 'Côtes de Provence, Provence',
    druif: 'Grenache, Cinsault',
    beschrijving: 'Klassieke Provençaalse rosé met aardbei, watermeloen, perzik en een droge, verfrissende finish.',
    smaak: { body: 2, fruit: 4, zuur: 3, frisheid: 4 },
    bijGerechten: ['tapas', 'gegrilde vis', 'zomerse gerechten'],
  },
  {
    type: 'Rosé',
    naam: 'Tavel Acantalys',
    land: 'Frankrijk',
    regio: 'Tavel, Rhône',
    druif: 'Grenache, Syrah, Carignan',
    beschrijving: 'Karaktervolle, volle rosé uit de Rhône met rode bessen, kruidigheid en een droge, structureerde afdronk.',
    smaak: { body: 3, fruit: 4, zuur: 3, frisheid: 3 },
    bijGerechten: ['gegrild vlees', 'Provençaalse gerechten', 'kaasplank'],
  },
  {
    type: 'Rosé',
    naam: 'La Garrigue Etincelle',
    land: 'Frankrijk',
    regio: 'Côtes de Provence, Provence',
    druif: 'Grenache, Cinsault, Mourvèdre',
    beschrijving: 'Levendige, droge Provençaalse rosé met tonen van watermeloen, citrus, bloemen en kruiden. Verfijnd en elegant.',
    smaak: { body: 2, fruit: 3, zuur: 4, frisheid: 4 },
    bijGerechten: ['vis', 'zeevruchten', 'lichte salades'],
  },
  {
    type: 'Rosé',
    naam: 'Sancerre Rosé Château Thomas',
    land: 'Frankrijk',
    regio: 'Sancerre, Loire',
    druif: 'Pinot Noir',
    beschrijving: 'Verfijnde Loire rosé met rode bessen, citrus en elegante mineraaltoets. Droog en zeer verfijnd.',
    smaak: { body: 2, fruit: 3, zuur: 4, frisheid: 4 },
    bijGerechten: ['geitenkaas', 'lichte vis', 'zeevruchten'],
  },
  {
    type: 'Rosé',
    naam: 'Château Miraval',
    land: 'Frankrijk',
    regio: 'Côtes de Provence, Provence',
    druif: 'Grenache, Syrah, Cinsault',
    beschrijving: 'Beroemde Provençaalse toprosé (Angelina Jolie & Brad Pitt) met aardbei, bloemen, citrus en elegante mineraaltoets. Verfijnd en drinkbaar.',
    smaak: { body: 2, fruit: 4, zuur: 3, frisheid: 4 },
    bijGerechten: ['oesters', 'gegrilde vis', 'fijne tapas'],
  },
  {
    type: 'Rosé',
    naam: 'Rosé v/h huis',
    land: 'Frankrijk',
    regio: 'Provence',
    druif: 'Grenache, Cinsault',
    beschrijving: 'Droge, delicate Provençaalse rosé met aardbei, watermeloen en een frisse, elegante finish.',
    smaak: { body: 2, fruit: 4, zuur: 3, frisheid: 4 },
    bijGerechten: ['tapas', 'gegrilde vis', 'lichte zomerse gerechten'],
  },
  {
    type: 'Rosé',
    naam: 'Belle Épine Syrah',
    land: 'Frankrijk',
    regio: 'Languedoc',
    druif: 'Syrah',
    beschrijving: 'Karaktervolle rosé met rood fruit, kruiden en een lichte peperige toets. Droog met body.',
    smaak: { body: 3, fruit: 4, zuur: 3, frisheid: 3 },
    bijGerechten: ['gegrild vlees', 'Mediterraanse keuken', 'kaasplank'],
  },

  // === BUBBELS ===
  {
    type: 'Bubbels',
    naam: 'Cava Rosé Pupitre',
    land: 'Spanje',
    regio: 'Penedès',
    druif: 'Macabeo, Xarel·lo, Pinot Noir',
    beschrijving: 'Elegante Spaanse rosébubbels met aardbei, bloemen en fijne bubbels. Droog en festief.',
    smaak: { body: 2, fruit: 3, zuur: 4, frisheid: 4 },
    bijGerechten: ['tapas', 'oesters', 'als aperitief'],
  },
  {
    type: 'Bubbels',
    naam: 'Veuve Clicquot Brut',
    land: 'Frankrijk',
    regio: 'Champagne',
    druif: 'Chardonnay, Pinot Noir, Pinot Meunier',
    beschrijving: 'Iconische, elegante champagne met groene appel, brioche, citrus en zeer fijne, aanhoudende bubbels. Rijk en complex.',
    smaak: { body: 3, fruit: 4, zuur: 4, frisheid: 4 },
    bijGerechten: ['oesters', 'foie gras', 'als aperitief'],
  },
  {
    type: 'Bubbels',
    naam: 'Assailly Grand Cru Blanc de Blancs',
    land: 'Frankrijk',
    regio: 'Champagne',
    druif: 'Chardonnay',
    beschrijving: 'Verfijnde 100% Chardonnay champagne met appel, citrusfruit, brioche en minerale nuances. Elegant en verfijnd.',
    smaak: { body: 3, fruit: 3, zuur: 5, frisheid: 4 },
    bijGerechten: ['zeevruchten', 'witte vleesgerechten', 'als aperitief'],
  },
  {
    type: 'Bubbels',
    naam: 'Moët & Chandon Brut',
    land: 'Frankrijk',
    regio: 'Champagne',
    druif: 'Chardonnay, Pinot Noir, Pinot Meunier',
    beschrijving: 'Iconische champagne met groene appel, brioche, citrus en fijne, aanhoudende bubbels. Fris en feestelijk.',
    smaak: { body: 3, fruit: 4, zuur: 4, frisheid: 4 },
    bijGerechten: ['oesters', 'lichte voorgerechten', 'als aperitief'],
  },
  {
    type: 'Bubbels',
    naam: 'Cava Segura Viudas',
    land: 'Spanje',
    regio: 'Penedès',
    druif: 'Macabeo, Parellada, Xarel·lo',
    beschrijving: 'Frisse Cava met groene appel, citrus en zachte nootachtige tonen. Droog en levendig.',
    smaak: { body: 2, fruit: 3, zuur: 4, frisheid: 4 },
    bijGerechten: ['tapas', 'lichte vis', 'als aperitief'],
  },
  {
    type: 'Bubbels',
    naam: 'Cava Recoda Brut',
    land: 'Spanje',
    regio: 'Penedès',
    druif: 'Macabeo, Xarel·lo, Parellada',
    beschrijving: 'Elegant droge Cava met peer, citrus en een subtiele gistigheid. Fijne bubbels en een frisse afdronk.',
    smaak: { body: 2, fruit: 3, zuur: 4, frisheid: 5 },
    bijGerechten: ['garnalen', 'mosselen', 'als aperitief'],
  },
  {
    type: 'Bubbels',
    naam: 'CAVA Mas Kalida',
    land: 'Spanje',
    regio: 'Penedès',
    druif: 'Xarel·lo, Macabeo',
    beschrijving: 'Karaktervolle Cava met rijpe appel, peer en een vleugje gember. Droog en verfrissend.',
    smaak: { body: 2, fruit: 3, zuur: 4, frisheid: 4 },
    bijGerechten: ['als aperitief', 'tapas', 'lichte voorgerechten'],
  },
  {
    type: 'Bubbels',
    naam: 'Champagne Vollereaux',
    land: 'Frankrijk',
    regio: 'Champagne',
    druif: 'Chardonnay, Pinot Noir',
    beschrijving: 'Fijnzinnige familiekampagne met wit fruit, toost en een elegant mousse. Evenwichtig en romig.',
    smaak: { body: 3, fruit: 3, zuur: 4, frisheid: 4 },
    bijGerechten: ['foie gras', 'oesters', 'als aperitief'],
  },
];

const landOptions = computed(() => [
  'alle',
  ...Array.from(new Set(wijnen.map(w => w.land))).sort((a, b) => a.localeCompare(b, 'nl')),
]);

const regioOptions = computed(() => [
  'alle',
  ...Array.from(new Set(wijnen.map(w => w.regio))).sort((a, b) => a.localeCompare(b, 'nl')),
]);

const druifOptions = computed(() => [
  'alle',
  ...Array.from(
    new Set(
      wijnen.flatMap(w =>
        w.druif
          .split(',')
          .map(d => d.trim())
          .filter(Boolean)
      )
    )
  ).sort((a, b) => a.localeCompare(b, 'nl')),
]);

const pairingOptions = computed(() => [
  'alle',
  ...Array.from(new Set(wijnen.flatMap(w => w.bijGerechten))).sort((a, b) => a.localeCompare(b, 'nl')),
]);

const profielOptions = [
  'alle',
  'Fris & strak',
  'Fruitig & soepel',
  'Vol & krachtig',
  'Elegant & verfijnd',
];

const activeFilterCount = computed(() => {
  return [
    activeFilter.value !== 'alle',
    activeLand.value !== 'alle',
    activeRegio.value !== 'alle',
    activeDruif.value !== 'alle',
    activePairing.value !== 'alle',
    activeProfiel.value !== 'alle',
    Boolean(searchQuery.value.trim()),
  ].filter(Boolean).length;
});

const filteredWijnen = computed(() => {
  let result = wijnen;

  if (activeFilter.value !== 'alle') {
    result = result.filter(w => w.type === activeFilter.value);
  }

  if (activeLand.value !== 'alle') {
    result = result.filter(w => w.land === activeLand.value);
  }

  if (activeRegio.value !== 'alle') {
    result = result.filter(w => w.regio === activeRegio.value);
  }

  if (activeDruif.value !== 'alle') {
    const druif = activeDruif.value.toLowerCase();
    result = result.filter(w => w.druif.toLowerCase().includes(druif));
  }

  if (activePairing.value !== 'alle') {
    const pairing = activePairing.value.toLowerCase();
    result = result.filter(w => w.bijGerechten.some(item => item.toLowerCase() === pairing));
  }

  if (activeProfiel.value !== 'alle') {
    result = result.filter(w => getProfielLabel(w) === activeProfiel.value);
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase();
    result = result.filter(w =>
      w.naam.toLowerCase().includes(q) ||
      w.land.toLowerCase().includes(q) ||
      w.regio.toLowerCase().includes(q) ||
      w.druif.toLowerCase().includes(q) ||
      w.beschrijving.toLowerCase().includes(q)
    );
  }

  return result;
});

function getSmaakprofiel(wijn) {
  const s = wijn.smaak;
  const profielen = [
    { label: 'Body', waarde: s.body, labelHoog: 'Vol' },
    { label: 'Fruit', waarde: s.fruit, labelHoog: 'Veel' },
    { label: 'Zuur', waarde: s.zuur, labelHoog: 'Hoog' },
  ];

  if (s.tannine !== undefined) {
    profielen.push({ label: 'Tannine', waarde: s.tannine, labelHoog: 'Hoog' });
  } else if (s.frisheid !== undefined) {
    profielen.push({ label: 'Frisheid', waarde: s.frisheid, labelHoog: 'Hoog' });
  }

  return profielen;
}

function getProfielLabel(wijn) {
  const { body = 0, fruit = 0, zuur = 0, tannine = 0, frisheid = 0 } = wijn.smaak;

  if (frisheid >= 4 || zuur >= 5) {
    return 'Fris & strak';
  }

  if (body >= 4 || tannine >= 4) {
    return 'Vol & krachtig';
  }

  if (fruit >= 4 && body <= 3) {
    return 'Fruitig & soepel';
  }

  return 'Elegant & verfijnd';
}

function getTypeBorderClass(type) {
  switch (type) {
    case 'Rood': return 'border-t-red-400/60';
    case 'Wit': return 'border-t-yellow-300/60';
    case 'Rosé': return 'border-t-pink-300/60';
    case 'Bubbels': return 'border-t-amber-300/60';
    default: return 'border-t-sky-300/60';
  }
}

function getTypeTagClass(type) {
  switch (type) {
    case 'Rood': return 'bg-red-400/20 text-red-200 border border-red-300/40';
    case 'Wit': return 'bg-yellow-300/20 text-yellow-100 border border-yellow-300/40';
    case 'Rosé': return 'bg-pink-300/20 text-pink-200 border border-pink-300/40';
    case 'Bubbels': return 'bg-amber-300/20 text-amber-200 border border-amber-300/40';
    default: return 'bg-sky-300/20 text-sky-200 border border-sky-300/40';
  }
}

function getFilledDotClass(type) {
  switch (type) {
    case 'Rood': return 'text-red-300';
    case 'Wit': return 'text-yellow-200';
    case 'Rosé': return 'text-pink-300';
    case 'Bubbels': return 'text-amber-200';
    default: return 'text-sky-300';
  }
}

function resetFilters() {
  activeFilter.value = 'alle';
  searchQuery.value = '';
  activeLand.value = 'alle';
  activeRegio.value = 'alle';
  activeDruif.value = 'alle';
  activePairing.value = 'alle';
  activeProfiel.value = 'alle';
}

function print() {
  window.print();
}
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

.dw-select {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(191, 219, 254, 0.35);
  color: #fff;
}

.dw-select:focus {
  outline: none;
  border-color: rgba(191, 219, 254, 0.75);
  box-shadow: 0 0 0 1px rgba(125, 211, 252, 0.25);
}

.dw-select option {
  background: #0f4f9f;
  color: #fff;
}

.btn.active-type {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.34), rgba(191, 219, 254, 0.22));
  color: #fff;
  border-color: rgba(239, 248, 255, 0.9);
  box-shadow:
    0 0 0 2px rgba(191, 219, 254, 0.28),
    0 10px 24px -12px rgba(4, 28, 66, 0.8);
  transform: translateY(-1px);
  font-weight: 700;
}

@media print {
  @page {
    size: A4;
    margin: 10mm;
  }

  /* Hide everything on the page */
  body * {
    visibility: hidden;
  }

  /* Show only the wine grid and its children */
  .print-area,
  .print-area * {
    visibility: visible;
  }

  /* Position the grid to fill the page */
  .print-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 6px !important;
    padding: 0 !important;
  }

  /* Wine cards: white background, readable text */
  .print-area .dw-card {
    background: #fff !important;
    border: 1px solid #bbb !important;
    color: #111 !important;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .print-area h3,
  .print-area p,
  .print-area span {
    color: #111 !important;
  }

  .print-area .wine-dot-filled {
    color: #111 !important;
  }

  .print-area .wine-dot-empty {
    color: #e6e6e6 !important;
  }
}
</style>
