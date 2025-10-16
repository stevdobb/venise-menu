<template>
    <div class="mx-auto max-w-screen-xl p-4 sm:p-6 lg:p-8">
        <div class="container bg-white rounded-xl shadow-2xl p-6 md:p-8">
            <h1 class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-500 pb-2">
                Europese Schoolvakanties (2025-2027) 🌎
            </h1>

            <p class="text-sm text-gray-500 mb-4">
                Je filtert nu data voor **Frankrijk, Duitsland, Luxemburg, Nederland, Vlaanderen en Wallonië**.
            </p>

            <h2 class="text-xl font-semibold text-gray-700 mt-6 mb-3">Filter op Jaar</h2>
            <div class="flex flex-wrap gap-3 mb-6 p-4 bg-indigo-50 rounded-lg shadow-sm">
                <button
                    data-filter-type="jaar"
                    data-value="all"
                    :class="getButtonClasses('jaar', 'all', 'active-jaar')"
                    @click="setFilter('jaar', 'all')"
                >
                    Toon Alle Jaren
                </button>
                <button
                    v-for="jaar in jaren"
                    :key="jaar"
                    data-filter-type="jaar"
                    :data-value="jaar"
                    :class="getButtonClasses('jaar', jaar, 'active-jaar')"
                    @click="setFilter('jaar', jaar)"
                >
                    {{ jaar }}
                </button>
            </div>

            <h2 class="text-xl font-semibold text-gray-700 mt-6 mb-3">Filter op Regio 🗺️</h2>
            <div class="flex flex-wrap gap-3 mb-6 p-4 bg-blue-50 rounded-lg shadow-sm">
                <button
                    data-filter-type="regio"
                    data-value="all"
                    :class="getButtonClasses('regio', 'all', 'active-regio')"
                    @click="setFilter('regio', 'all')"
                >
                    Toon Alle Regio's
                </button>
                <button
                    v-for="regio in regios"
                    :key="regio.name"
                    data-filter-type="regio"
                    :data-value="regio.name"
                    :class="getButtonClasses('regio', regio.name, 'active-regio')"
                    @click="setFilter('regio', regio.name)"
                >
                    {{ regio.name }} {{ regio.flag }}
                </button>
            </div>

            <h2 class="text-xl font-semibold text-gray-700 mb-3">Filter op Type Vakantie</h2>
            <div class="flex flex-wrap gap-3 mb-8">
                <button
                    data-filter-type="vakantie"
                    data-value="all"
                    :class="getButtonClasses('vakantie', 'all', 'active-vakantie')"
                    @click="setFilter('vakantie', 'all')"
                >
                    Toon Alle Types
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

            <div class="overflow-x-auto shadow-lg rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-indigo-600 text-white">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Land/Regio</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Vakantie</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Startdatum</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Einddatum</th>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Jaar</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr
                            v-for="(item, index) in filteredVakanties"
                            :key="index"
                            class="hover:bg-indigo-50 transition duration-150"
                            :class="getRowClasses(item.regio)"
                        >
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item.regio }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item.type }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item.start }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item.end }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item.jaar }}</td>
                        </tr>
                        <tr v-if="filteredVakanties.length === 0">
                            <td colspan="5" class="px-6 py-4 text-center text-gray-500 bg-gray-50">
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

// Alle vakantiedata voor 2025, 2026 en 2027
const vakantieData = [
    // 2025 (Starts 2024 - Kerst)
    { regio: 'Vlaanderen', type: 'Kerstvakantie', start: '22 dec', end: '4 jan', jaar: 2025 },
    { regio: 'Wallonië', type: 'Kerstvakantie', start: '22 dec', end: '4 jan', jaar: 2025 },

    // 2025
    { regio: 'Nederland', type: 'Voorjaarsvakantie', start: '15 feb', end: '23 feb', jaar: 2025 },
    { regio: 'Frankrijk', type: 'Voorjaarsvakantie', start: '8 feb', end: '10 mrt', jaar: 2025 },
    { regio: 'Duitsland', type: 'Voorjaarsvakantie', start: '1 feb', end: '14 feb', jaar: 2025 },
    { regio: 'Wallonië', type: 'Voorjaarsvakantie', start: '22 feb', end: '9 mrt', jaar: 2025 },
    { regio: 'Luxemburg', type: 'Voorjaarsvakantie', start: '10 feb', end: '14 feb', jaar: 2025 },

    { regio: 'Vlaanderen', type: 'Paasvakantie', start: '7 apr', end: '20 apr', jaar: 2025 },
    { regio: 'Duitsland', type: 'Paasvakantie', start: '14 apr', end: '25 apr', jaar: 2025 },
    { regio: 'Wallonië', type: 'Paasvakantie', start: '28 apr', end: '11 mei', jaar: 2025 },
    { regio: 'Nederland', type: 'Meivakantie', start: '26 apr', end: '4 mei', jaar: 2025 },
    { regio: 'Frankrijk', type: 'Paasvakantie', start: '5 apr', end: '5 mei', jaar: 2025 },
    { regio: 'Luxemburg', type: 'Paasvakantie', start: '14 apr', end: '25 apr', jaar: 2025 },

    { regio: 'Nederland', type: 'Zomervakantie', start: '5 jul', end: '31 aug', jaar: 2025 },
    { regio: 'Vlaanderen', type: 'Zomervakantie', start: '1 jul', end: '31 aug', jaar: 2025 },
    { regio: 'Wallonië', type: 'Zomervakantie', start: '1 jul', end: '31 aug', jaar: 2025 },
    { regio: 'Frankrijk', type: 'Zomervakantie', start: '5 jul', end: '1 sep', jaar: 2025 },
    { regio: 'Duitsland', type: 'Zomervakantie', start: '23 jun', end: '5 sep', jaar: 2025 },
    { regio: 'Luxemburg', type: 'Zomervakantie', start: '15 jul', end: '15 sep', jaar: 2025 },

    { regio: 'Nederland', type: 'Herfstvakantie', start: '11 okt', end: '26 okt', jaar: 2025 },
    { regio: 'Vlaanderen', type: 'Herfstvakantie', start: '27 okt', end: '2 nov', jaar: 2025 },
    { regio: 'Wallonië', type: 'Herfstvakantie', start: '27 okt', end: '2 nov', jaar: 2025 },
    { regio: 'Duitsland', type: 'Herfstvakantie', start: '23 okt', end: '31 okt', jaar: 2025 },
    { regio: 'Frankrijk', type: 'Herfstvakantie', start: '18 okt', end: '3 nov', jaar: 2025 },
    { regio: 'Luxemburg', type: 'Herfstvakantie', start: '1 nov', end: '9 nov', jaar: 2025 },

    // 2026 (Starts 2025 - Kerst)
    { regio: 'Nederland', type: 'Kerstvakantie', start: '20 dec', end: '4 jan', jaar: 2026 },
    { regio: 'Vlaanderen', type: 'Kerstvakantie', start: '22 dec', end: '4 jan', jaar: 2026 },
    { regio: 'Wallonië', type: 'Kerstvakantie', start: '22 dec', end: '4 jan', jaar: 2026 },
    { regio: 'Duitsland', type: 'Kerstvakantie', start: '22 dec', end: '5 jan', jaar: 2026 },
    { regio: 'Frankrijk', type: 'Kerstvakantie', start: '21 dec', end: '5 jan', jaar: 2026 },
    { regio: 'Luxemburg', type: 'Kerstvakantie', start: '20 dec', end: '4 jan', jaar: 2026 },

    // 2026
    { regio: 'Nederland', type: 'Voorjaarsvakantie', start: '14 feb', end: '1 mrt', jaar: 2026 },
    { regio: 'Vlaanderen', type: 'Voorjaarsvakantie', start: '16 feb', end: '22 feb', jaar: 2026 },
    { regio: 'Wallonië', type: 'Voorjaarsvakantie', start: '16 feb', end: '22 feb', jaar: 2026 },
    { regio: 'Frankrijk', type: 'Voorjaarsvakantie', start: '7 feb', end: '7 mrt', jaar: 2026 },
    { regio: 'Duitsland', type: 'Voorjaarsvakantie', start: '16 feb', end: '4 mrt', jaar: 2026 },
    { regio: 'Luxemburg', type: 'Voorjaarsvakantie', start: '14 feb', end: '22 feb', jaar: 2026 },

    { regio: 'Vlaanderen', type: 'Paasvakantie', start: '6 apr', end: '19 apr', jaar: 2026 },
    { regio: 'Wallonië', type: 'Paasvakantie', start: '6 apr', end: '19 apr', jaar: 2026 },
    { regio: 'Duitsland', type: 'Paasvakantie', start: '30 mrt', end: '10 apr', jaar: 2026 },
    { regio: 'Nederland', type: 'Meivakantie', start: '25 apr', end: '3 mei', jaar: 2026 },
    { regio: 'Frankrijk', type: 'Paasvakantie', start: '4 apr', end: '4 mei', jaar: 2026 },
    { regio: 'Luxemburg', type: 'Paasvakantie', start: '28 mrt', end: '12 apr', jaar: 2026 },

    { regio: 'Luxemburg', type: 'Pinkstervakantie', start: '23 mei', end: '31 mei', jaar: 2026 },

    { regio: 'Nederland', type: 'Zomervakantie', start: '4 jul', end: '30 aug', jaar: 2026 },
    { regio: 'Vlaanderen', type: 'Zomervakantie', start: '1 jul', end: '31 aug', jaar: 2026 },
    { regio: 'Wallonië', type: 'Zomervakantie', start: '1 jul', end: '31 aug', jaar: 2026 },
    { regio: 'Frankrijk', type: 'Zomervakantie', start: '5 jul', end: '1 sep', jaar: 2026 },
    { regio: 'Duitsland', type: 'Zomervakantie', start: '20 jun', end: '2 sep', jaar: 2026 },
    { regio: 'Luxemburg', type: 'Zomervakantie', start: '16 jul', end: '14 sep', jaar: 2026 },

    { regio: 'Nederland', type: 'Herfstvakantie', start: '10 okt', end: '25 okt', jaar: 2026 },
    { regio: 'Vlaanderen', type: 'Herfstvakantie', start: '2 nov', end: '8 nov', jaar: 2026 },
    { regio: 'Wallonië', type: 'Herfstvakantie', start: '2 nov', end: '8 nov', jaar: 2026 },
    { regio: 'Duitsland', type: 'Herfstvakantie', start: '4 okt', end: '30 okt', jaar: 2026 },
    { regio: 'Frankrijk', type: 'Herfstvakantie', start: '17 okt', end: '2 nov', jaar: 2026 },
    { regio: 'Luxemburg', type: 'Herfstvakantie', start: '31 okt', end: '8 nov', jaar: 2026 },

    // 2027 (Starts 2026 - Kerst)
    { regio: 'Nederland', type: 'Kerstvakantie', start: '19 dec', end: '3 jan', jaar: 2027 },
    { regio: 'Vlaanderen', type: 'Kerstvakantie', start: '21 dec', end: '3 jan', jaar: 2027 },
    { regio: 'Wallonië', type: 'Kerstvakantie', start: '21 dec', end: '3 jan', jaar: 2027 },

    // 2027
    { regio: 'Luxemburg', type: 'Voorjaarsvakantie', start: '6 feb', end: '14 feb', jaar: 2027 },
    { regio: 'Vlaanderen', type: 'Voorjaarsvakantie', start: '8 feb', end: '14 feb', jaar: 2027 },
    { regio: 'Wallonië', type: 'Voorjaarsvakantie', start: '8 feb', end: '14 feb', jaar: 2027 },
    { regio: 'Nederland', type: 'Voorjaarsvakantie', start: '13 feb', end: '28 feb', jaar: 2027 },

    { regio: 'Luxemburg', type: 'Paasvakantie', start: '27 mrt', end: '11 apr', jaar: 2027 },
    { regio: 'Vlaanderen', type: 'Paasvakantie', start: '29 mrt', end: '11 apr', jaar: 2027 },
    { regio: 'Wallonië', type: 'Paasvakantie', start: '29 mrt', end: '11 apr', jaar: 2027 },
    { regio: 'Nederland', type: 'Meivakantie', start: '24 apr', end: '2 mei', jaar: 2027 },

    { regio: 'Luxemburg', type: 'Pinkstervakantie', start: '29 mei', end: '6 jun', jaar: 2027 },

    { regio: 'Vlaanderen', type: 'Zomervakantie', start: '1 jul', end: '31 aug', jaar: 2027 },
    { regio: 'Wallonië', type: 'Zomervakantie', start: '1 jul', end: '31 aug', jaar: 2027 },
    { regio: 'Nederland', type: 'Zomervakantie', start: '10 jul', end: '5 sep', jaar: 2027 },
    { regio: 'Luxemburg', type: 'Zomervakantie', start: '16 jul', end: '14 sep', jaar: 2027 },

    { regio: 'Nederland', type: 'Herfstvakantie', start: '16 okt', end: '31 okt', jaar: 2027 },
    { regio: 'Luxemburg', type: 'Herfstvakantie', start: '30 okt', end: '7 nov', jaar: 2027 },
    { regio: 'Vlaanderen', type: 'Herfstvakantie', start: '1 nov', end: '7 nov', jaar: 2027 },
    { regio: 'Wallonië', type: 'Herfstvakantie', start: '1 nov', end: '7 nov', jaar: 2027 },

    // 2028 (Starts 2027 - Kerst)
    { regio: 'Nederland', type: 'Kerstvakantie', start: '25 dec', end: '9 jan', jaar: 2028 },
];

// Lijsten voor V-FOR in de template
const jaren = ['2025', '2026', '2027'];
const regios = [
    { name: 'Vlaanderen', flag: '🇧🇪' },
    { name: 'Wallonië', flag: '🇧🇪' },
    { name: 'Nederland', flag: '🇳🇱' },
    { name: 'Duitsland', flag: '🇩🇪' },
    { name: 'Frankrijk', flag: '🇫🇷' },
    { name: 'Luxemburg', flag: '🇱🇺' },
];
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

const activeJaarFilter = ref('all');
const activeRegioFilter = ref('all');
const activeVakantieFilter = ref('all');


// --- METHODS / COMPUTED PROPERTIES ---

/**
 * Normaliseert vakantietypen voor consistente filtering.
 */
function normalizeType(type) {
    const t = type.toLowerCase();
    if (t.includes('voorjaarsvakantie') || t.includes('krokus') || t.includes('carnaval') || t.includes('wintervakantie')) {
        return 'Voorjaarsvakantie';
    } else if (t.includes('paasvakantie')) {
        return 'Paasvakantie';
    } else if (t.includes('meivakantie')) {
        return 'Meivakantie';
    } else if (t.includes('pinkstervakantie') || t.includes('pinksteren')) {
        return 'Pinkstervakantie';
    } else if (t.includes('zomervakantie')) {
        return 'Zomervakantie';
    } else if (t.includes('herfstvakantie')) {
        return 'Herfstvakantie';
    } else if (t.includes('kerstvakantie')) {
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
        jaar: activeJaarFilter,
        regio: activeRegioFilter,
        vakantie: activeVakantieFilter
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

    if (filterType === 'jaar') {
        isActive = activeJaarFilter.value === value;
    } else if (filterType === 'regio') {
        isActive = activeRegioFilter.value === value;
    } else if (filterType === 'vakantie') {
        isActive = activeVakantieFilter.value === value;
    }

    // Basiskassen
    let classes = 'btn px-4 py-2 rounded-full transition-all duration-200 text-sm';

    // Actieve klasse logica
    if (isActive) {
        classes += ` ${activeClass}`; // Active Class komt uit de <style>
    } else {
        classes += ' bg-white text-gray-700 border border-gray-300 hover:bg-gray-100';

        // Kleur afhankelijk van filterType voor niet-actieve state
        if (filterType === 'jaar') {
             classes = classes.replace('border-gray-300', 'border-blue-300').replace('text-gray-700', 'text-blue-700').replace('hover:bg-gray-100', 'hover:bg-blue-100');
        } else if (filterType === 'regio') {
            classes = classes.replace('border-gray-300', 'border-blue-300').replace('text-gray-700', 'text-blue-700').replace('hover:bg-gray-100', 'hover:bg-blue-100');
        }
    }
    return classes;
};


/**
 * Geeft de Tailwind klassen terug voor de tabelrijen (achtergrondkleur).
 */
const getRowClasses = (regio) => {
    let regioColor = 'bg-white';
    if (regio.includes('Vlaanderen')) regioColor = 'bg-blue-100';
    else if (regio.includes('Wallonië')) regioColor = 'bg-blue-50';
    else if (regio.includes('Nederland')) regioColor = 'bg-red-50';
    else if (regio.includes('Duitsland')) regioColor = 'bg-yellow-50';
    else if (regio.includes('Frankrijk')) regioColor = 'bg-green-50';
    else if (regio.includes('Luxemburg')) regioColor = 'bg-blue-50';

    return `row.className = 'hover:bg-indigo-50 transition duration-150 ${regioColor}'`;
}


/**
 * Computed property die de data filtert op basis van de actieve filters.
 */
const filteredVakanties = computed(() => {
    return vakantieData.filter(item => {
        let jaarMatch = true;
        let regioMatch = true;
        let vakantieMatch = true;

        // Jaar filter
        if (activeJaarFilter.value !== 'all') {
            jaarMatch = item.jaar.toString() === activeJaarFilter.value;
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

        return jaarMatch && regioMatch && vakantieMatch;
    });
});
</script>

<style scoped>
/* Scoped styles voor de actieve knoppen, afgeleid van de eerdere HTML/CSS */

/* Stijl voor de actieve knoppen - Jaar */
.btn.active-jaar {
    background-color: #1d4ed8; /* blue-700 */
    color: white;
    border-color: #1d4ed8;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
/* Stijl voor de actieve knoppen - Regio */
.btn.active-regio {
    background-color: #1d4ed8; /* purple-700 */
    color: white;
    border-color: #1d4ed8;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
/* Stijl voor de actieve knoppen - Vakantie Type */
.btn.active-vakantie {
    background-color: #4b5563; /* gray-700 */
    color: white;
    border-color: #4b5563;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
</style>
