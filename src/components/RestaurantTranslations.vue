<template>
  <div class="max-w-6xl mx-auto space-y-6">
    <div class="bg-gradient-to-r from-indigo-50 via-white to-emerald-50 border border-indigo-100 rounded-xl p-6 shadow-sm">
      <p class="text-xs uppercase font-semibold tracking-widest text-indigo-600">Taalhulp in de zaal</p>
      <h1 class="text-3xl font-bold text-gray-900">Handige restaurantvertalingen</h1>
      <p class="text-sm text-gray-700">
        Vind snel hoe je veelgebruikte woorden zegt in het Engels, Frans en Duits. Ideaal voor zaal, bar en keuken.
      </p>
      <div class="mt-4 grid gap-3 md:grid-cols-3">
        <div class="p-3 bg-white border border-gray-100 rounded-lg shadow-sm text-sm text-gray-700">
          <span class="font-semibold">Totaal termen:</span> {{ translations.length }}
        </div>
        <div class="p-3 bg-white border border-gray-100 rounded-lg shadow-sm text-sm text-gray-700">
          <span class="font-semibold">Categorieën:</span> {{ categories.length }}
        </div>
        <div class="p-3 bg-white border border-gray-100 rounded-lg shadow-sm text-sm text-gray-700">
          Tip: filter op bv. "glutenvrij", "rekening", "mild".
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-4">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          v-model="search"
          type="text"
          placeholder="Zoek op NL/EN/FR/DE of onderdeel..."
          class="w-full md:w-2/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in ['all', ...categories]"
            :key="cat"
            @click="setCategory(cat)"
            :class="getButtonClasses(cat)"
            class="px-3 py-1.5 rounded-full text-sm font-medium border transition"
          >
            {{ cat === 'all' ? 'Alle categorieën' : cat }}
          </button>
        </div>
      </div>

      <div class="overflow-x-auto rounded-lg border border-gray-100 shadow-sm">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-slate-100 text-slate-700">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Nederlands</th>
              <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Engels</th>
              <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Frans</th>
              <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Duits</th>
              <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Categorie</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-100">
            <tr
              v-for="(row, index) in filteredTranslations"
              :key="index"
              class="hover:bg-indigo-50 transition"
            >
              <td class="px-4 py-3 text-sm text-gray-900 font-semibold">{{ row.nl }}</td>
              <td class="px-4 py-3 text-sm text-gray-800">{{ row.en }}</td>
              <td class="px-4 py-3 text-sm text-gray-800">{{ row.fr }}</td>
              <td class="px-4 py-3 text-sm text-gray-800">{{ row.de }}</td>
              <td class="px-4 py-3 text-xs text-gray-700">
                <span class="inline-block px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                  {{ row.category }}
                </span>
              </td>
            </tr>
            <tr v-if="filteredTranslations.length === 0">
              <td colspan="5" class="px-4 py-4 text-center text-gray-500">Geen resultaten voor deze zoekopdracht.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const translations = [
  { nl: 'Bestek', en: 'Cutlery', fr: 'Couverts', de: 'Besteck', category: 'Service' },
  { nl: 'Servet', en: 'Napkin', fr: 'Serviette', de: 'Serviette', category: 'Service' },
  { nl: 'Schotel (gerecht)', en: 'Dish', fr: 'Plat', de: 'Gericht', category: 'Service' },
  { nl: 'Rekening', en: 'The bill', fr: "L'addition", de: 'Die Rechnung', category: 'Service' },
  { nl: 'Fooi', en: 'Tip', fr: 'Pourboire', de: 'Trinkgeld', category: 'Service' },
  { nl: 'Reservering', en: 'Reservation', fr: 'Réservation', de: 'Reservierung', category: 'Service' },
  { nl: 'Allergenen', en: 'Allergens', fr: 'Allergènes', de: 'Allergene', category: 'Allergenen' },
  { nl: 'Glutenvrij', en: 'Gluten-free', fr: 'Sans gluten', de: 'Glutenfrei', category: 'Allergenen' },
  { nl: 'Lactosevrij', en: 'Lactose-free', fr: 'Sans lactose', de: 'Laktosefrei', category: 'Allergenen' },
  { nl: 'Notenallergie', en: 'Nut allergy', fr: 'Allergie aux noix', de: 'Nussallergie', category: 'Allergenen' },
  { nl: 'Pittig', en: 'Spicy', fr: 'Épicé', de: 'Scharf', category: 'Smaak' },
  { nl: 'Mild', en: 'Mild', fr: 'Doux', de: 'Mild', category: 'Smaak' },
  { nl: 'Smaakloos / neutraal', en: 'Plain', fr: 'Nature', de: 'Natur', category: 'Smaak' },
  { nl: 'Rare (bleu)', en: 'Rare', fr: 'Saignant', de: 'Englisch', category: 'Gaarheid' },
  { nl: 'Medium', en: 'Medium', fr: 'À point', de: 'Medium', category: 'Gaarheid' },
  { nl: 'Doorbakken', en: 'Well done', fr: 'Bien cuit', de: 'Durchgebraten', category: 'Gaarheid' },
  { nl: 'Soep van de dag', en: 'Soup of the day', fr: 'Soupe du jour', de: 'Tagessuppe', category: 'Gerechten' },
  { nl: 'Dagschotel', en: 'Daily special', fr: 'Plat du jour', de: 'Tagesgericht', category: 'Gerechten' },
  { nl: 'Voorgerecht', en: 'Starter', fr: 'Entrée', de: 'Vorspeise', category: 'Gerechten' },
  { nl: 'Hoofdgerecht', en: 'Main course', fr: 'Plat principal', de: 'Hauptgericht', category: 'Gerechten' },
  { nl: 'Nagerecht', en: 'Dessert', fr: 'Dessert', de: 'Nachspeise', category: 'Gerechten' },
  { nl: 'Vegetarisch', en: 'Vegetarian', fr: 'Végétarien', de: 'Vegetarisch', category: 'Gerechten' },
  { nl: 'Vegan', en: 'Vegan', fr: 'Végan', de: 'Vegan', category: 'Gerechten' },
  { nl: 'Vis', en: 'Fish', fr: 'Poisson', de: 'Fisch', category: 'Gerechten' },
  { nl: 'Garnalen', en: 'Shrimps', fr: 'Crevettes', de: 'Garnelen', category: 'Gerechten' },
  { nl: 'Steak', en: 'Steak', fr: 'Steak', de: 'Steak', category: 'Gerechten' },
  { nl: 'Kip', en: 'Chicken', fr: 'Poulet', de: 'Huhn', category: 'Gerechten' },
  { nl: 'Rund', en: 'Beef', fr: 'Boeuf', de: 'Rind', category: 'Gerechten' },
  { nl: 'Water met bruis', en: 'Sparkling water', fr: 'Eau pétillante', de: 'Wasser mit Kohlensäure', category: 'Dranken' },
  { nl: 'Plat water', en: 'Still water', fr: 'Eau plate', de: 'Stilles Wasser', category: 'Dranken' },
  { nl: 'Witte wijn', en: 'White wine', fr: 'Vin blanc', de: 'Weißwein', category: 'Dranken' },
  { nl: 'Rode wijn', en: 'Red wine', fr: 'Vin rouge', de: 'Rotwein', category: 'Dranken' },
  { nl: 'Rosé', en: 'Rosé', fr: 'Rosé', de: 'Rosé', category: 'Dranken' },
  { nl: 'Bier van het vat', en: 'Draft beer', fr: 'Bière pression', de: 'Bier vom Fass', category: 'Dranken' },
  { nl: 'Koffie verkeerd', en: 'Latte', fr: 'Café au lait', de: 'Milchkaffee', category: 'Dranken' },
  { nl: 'Cappuccino', en: 'Cappuccino', fr: 'Cappuccino', de: 'Cappuccino', category: 'Dranken' },
  { nl: 'Thee', en: 'Tea', fr: 'Thé', de: 'Tee', category: 'Dranken' },
  { nl: 'Glutenvrij brood', en: 'Gluten-free bread', fr: 'Pain sans gluten', de: 'Glutenfreies Brot', category: 'Allergenen' },
  { nl: 'Sojasaus apart', en: 'Soy sauce on the side', fr: 'Sauce soja à part', de: 'Sojasoße separat', category: 'Service' },
  { nl: 'Afhalen', en: 'Take away', fr: 'À emporter', de: 'Zum Mitnehmen', category: 'Service' },
  { nl: 'Ter plaatse eten', en: 'Eat in', fr: 'Sur place', de: 'Vor Ort essen', category: 'Service' },
  { nl: 'Halfpension', en: 'Half board', fr: 'Demi-pension', de: 'Halbpension', category: 'Service' },
  { nl: 'Volpension', en: 'Full board', fr: 'Pension complète', de: 'Vollpension', category: 'Service' },
  { nl: 'Tafel vrijmaken', en: 'Clear the table', fr: 'Débarrasser la table', de: 'Den Tisch abräumen', category: 'Service' },
  { nl: 'Met of zonder ijsblokjes', en: 'With or without ice', fr: 'Avec ou sans glaçons', de: 'Mit oder ohne Eis', category: 'Dranken' },
  { nl: 'Met gas / zonder gas', en: 'Sparkling / still', fr: 'Gazeuse / plate', de: 'Mit Kohlensäure / ohne', category: 'Dranken' },
  { nl: 'Huiswijn', en: 'House wine', fr: 'Vin de la maison', de: 'Hauswein', category: 'Dranken' },
  { nl: 'Bubbels', en: 'Sparkling wine', fr: 'Vin pétillant', de: 'Schaumwein', category: 'Dranken' },
  { nl: 'Gin & tonic', en: 'Gin and tonic', fr: 'Gin tonic', de: 'Gin Tonic', category: 'Dranken' },
  { nl: 'Mocktail', en: 'Mocktail', fr: 'Mocktail', de: 'Mocktail', category: 'Dranken' },
  { nl: 'Garnaalkroket', en: 'Shrimp croquette', fr: 'Croquette de crevettes', de: 'Garnelenkrokette', category: 'Gerechten' },
  { nl: 'Kaaskroket', en: 'Cheese croquette', fr: 'Croquette de fromage', de: 'Käsekrokette', category: 'Gerechten' },
  { nl: 'Mosselen', en: 'Mussels', fr: 'Moules', de: 'Miesmuscheln', category: 'Vis' },
  { nl: 'Oesters', en: 'Oysters', fr: 'Huîtres', de: 'Austern', category: 'Vis' },
  { nl: 'Zeetong', en: 'Dover sole', fr: 'Sole', de: 'Seezunge', category: 'Vis' },
  { nl: 'Zalm', en: 'Salmon', fr: 'Saumon', de: 'Lachs', category: 'Vis' },
  { nl: 'Kabeljauw', en: 'Cod', fr: 'Cabillaud', de: 'Kabeljau', category: 'Vis' },
  { nl: 'Tonijn', en: 'Tuna', fr: 'Thon', de: 'Thunfisch', category: 'Vis' },
  { nl: 'Forel', en: 'Trout', fr: 'Truite', de: 'Forelle', category: 'Vis' },
  { nl: 'Tarbot', en: 'Turbot', fr: 'Turbot', de: 'Steinbutt', category: 'Vis' },
  { nl: 'Varkenshaas', en: 'Pork tenderloin', fr: 'Filet de porc', de: 'Schweinefilet', category: 'Vlees' },
  { nl: 'Lamskroon', en: 'Rack of lamb', fr: 'Carré d’agneau', de: 'Lammkarree', category: 'Vlees' },
  { nl: 'Eendenborst', en: 'Duck breast', fr: 'Magret de canard', de: 'Entenbrust', category: 'Vlees' },
  { nl: 'Kalfszwezerik', en: 'Sweetbreads', fr: 'Ris de veau', de: 'Kalbsbries', category: 'Vlees' },
  { nl: 'Gehaktbal', en: 'Meatball', fr: 'Boulettes', de: 'Frikadelle', category: 'Vlees' },
  { nl: 'Charcuterie', en: 'Cold cuts', fr: 'Charcuterie', de: 'Aufschnitt', category: 'Gerechten' },
  { nl: 'Ambachtelijk brood', en: 'Artisanal bread', fr: 'Pain artisanal', de: 'Handwerkliches Brot', category: 'Service' },
  { nl: 'Olijfolie', en: 'Olive oil', fr: 'Huile d’olive', de: 'Olivenöl', category: 'Service' },
  { nl: 'Balsamico', en: 'Balsamic vinegar', fr: 'Vinaigre balsamique', de: 'Balsamico-Essig', category: 'Service' },
  { nl: 'Dessertwijn', en: 'Dessert wine', fr: 'Vin doux', de: 'Dessertwein', category: 'Dranken' },
  { nl: 'Porto', en: 'Port wine', fr: 'Porto', de: 'Portwein', category: 'Dranken' },
  { nl: 'Champagne', en: 'Champagne', fr: 'Champagne', de: 'Champagner', category: 'Dranken' },
  { nl: 'Cava', en: 'Cava', fr: 'Cava', de: 'Cava', category: 'Dranken' },
  { nl: 'Prosecco', en: 'Prosecco', fr: 'Prosecco', de: 'Prosecco', category: 'Dranken' },
  { nl: 'Alcoholvrij bier', en: 'Non-alcoholic beer', fr: 'Bière sans alcool', de: 'Alkoholfreies Bier', category: 'Dranken' },
  { nl: 'Aperitief', en: 'Aperitif', fr: 'Apéritif', de: 'Aperitif', category: 'Dranken' },
  { nl: 'Digestief', en: 'Digestif', fr: 'Digestif', de: 'Digestif', category: 'Dranken' },
  { nl: 'Kraanwater', en: 'Tap water', fr: 'Eau du robinet', de: 'Leitungswasser', category: 'Dranken' },
  { nl: 'Kruidenboter', en: 'Herb butter', fr: 'Beurre aux herbes', de: 'Kräuterbutter', category: 'Gerechten' },
  { nl: 'Extra saus apart', en: 'Sauce on the side', fr: 'Sauce à part', de: 'Soße separat', category: 'Service' },
  { nl: 'Mag het sneller?', en: 'Can it be quicker?', fr: 'Est-ce que ça peut être plus rapide ?', de: 'Kann es schneller?', category: 'Zinnen' },
  { nl: 'Mag het iets later?', en: 'Can it be a bit later?', fr: 'Un peu plus tard ?', de: 'Etwas später?', category: 'Zinnen' },
  { nl: 'Hoe wenst u de cuisson?', en: 'How would you like it cooked?', fr: 'Quelle cuisson souhaitez-vous ?', de: 'Wie hätten Sie die Garstufe?', category: 'Zinnen' },
  { nl: 'Heeft u allergieën?', en: 'Do you have allergies?', fr: 'Avez-vous des allergies ?', de: 'Haben Sie Allergien?', category: 'Zinnen' },
  { nl: 'Wilt u nog iets drinken?', en: 'Would you like another drink?', fr: 'Désirez-vous encore à boire ?', de: 'Möchten Sie noch etwas trinken?', category: 'Zinnen' },
  { nl: 'Was alles in orde?', en: 'Was everything okay?', fr: 'Tout s’est bien passé ?', de: 'War alles in Ordnung?', category: 'Zinnen' },
  { nl: 'Bedankt en tot ziens', en: 'Thank you and see you soon', fr: 'Merci et à bientôt', de: 'Danke und bis bald', category: 'Zinnen' },
  { nl: 'Heeft u gereserveerd?', en: 'Do you have a reservation?', fr: 'Avez-vous réservé ?', de: 'Haben Sie reserviert?', category: 'Service' },
  { nl: 'Op welke naam?', en: 'Under which name?', fr: 'À quel nom ?', de: 'Auf welchen Namen?', category: 'Service' },
  { nl: 'Mag ik u begeleiden?', en: 'May I guide you?', fr: 'Puis-je vous accompagner ?', de: 'Darf ich Sie begleiten?', category: 'Service' },
  { nl: 'Wilt u brood of boter?', en: 'Would you like bread or butter?', fr: 'Souhaitez-vous du pain ou du beurre ?', de: 'Möchten Sie Brot oder Butter?', category: 'Service' },
  { nl: 'Nog wat water?', en: 'Some more water?', fr: 'Encore un peu d’eau ?', de: 'Noch etwas Wasser?', category: 'Zinnen' },
  { nl: 'Met of zonder rietje?', en: 'With or without a straw?', fr: 'Avec ou sans paille ?', de: 'Mit oder ohne Strohhalm?', category: 'Zinnen' },
  { nl: 'Wilt u delen?', en: 'Would you like to share?', fr: 'Voulez-vous partager ?', de: 'Möchten Sie teilen?', category: 'Zinnen' },
  { nl: 'Komt meteen eraan', en: 'Coming right up', fr: 'Ça arrive tout de suite', de: 'Kommt sofort', category: 'Zinnen' },
  { nl: 'Even geduld aub', en: 'One moment please', fr: 'Un instant s’il vous plaît', de: 'Einen Moment bitte', category: 'Zinnen' },
  { nl: 'We hebben dit niet meer op voorraad', en: 'We are out of this item', fr: 'Nous n’en avons plus en stock', de: 'Wir haben diesen Artikel nicht mehr', category: 'Zinnen' },
  { nl: 'Contactloos betalen', en: 'Contactless payment', fr: 'Paiement sans contact', de: 'Kontaktlos zahlen', category: 'Service' },
  { nl: 'Enkel kaart / geen cash', en: 'Card only / no cash', fr: 'Carte uniquement / pas de cash', de: 'Nur Karte / kein Bargeld', category: 'Service' },
  { nl: 'Betaalt u samen of apart?', en: 'Together or separate bills?', fr: 'Vous payez ensemble ou séparément ?', de: 'Zusammen oder getrennt zahlen?', category: 'Service' },
  { nl: 'Is er iets wat u niet lust?', en: 'Is there anything you dislike?', fr: 'Y a-t-il quelque chose que vous n’aimez pas ?', de: 'Gibt es etwas, das Sie nicht mögen?', category: 'Zinnen' },
  { nl: 'Mag ik iets aanbevelen?', en: 'May I recommend something?', fr: 'Puis-je vous recommander quelque chose ?', de: 'Darf ich etwas empfehlen?', category: 'Zinnen' },
  { nl: 'Koud opendoen', en: 'Serve chilled', fr: 'Servir frais', de: 'Kalt servieren', category: 'Dranken' },
  { nl: 'Op kamertemperatuur', en: 'Room temperature', fr: 'Température ambiante', de: 'Zimmertemperatur', category: 'Dranken' },
  { nl: 'Geen ijs bij de wijn', en: 'No ice with the wine', fr: 'Pas de glaçons dans le vin', de: 'Kein Eis im Wein', category: 'Dranken' },
  { nl: 'Extra borden', en: 'Extra plates', fr: 'Assiettes supplémentaires', de: 'Zusätzliche Teller', category: 'Service' },
  { nl: 'Kinderstoel', en: 'High chair', fr: 'Chaise haute', de: 'Kinderstuhl', category: 'Service' },
  { nl: 'Mag de hond binnen?', en: 'Is the dog allowed inside?', fr: 'Le chien est-il autorisé à l’intérieur ?', de: 'Darf der Hund hinein?', category: 'Zinnen' },
  { nl: 'Graag een rustige tafel', en: 'A quiet table please', fr: 'Une table calme s’il vous plaît', de: 'Einen ruhigen Tisch bitte', category: 'Service' },
  { nl: 'Buiten op het terras', en: 'Outside on the terrace', fr: 'En terrasse', de: 'Draußen auf der Terrasse', category: 'Service' }
];

const search = ref('');
const activeCategory = ref('all');

const categories = Array.from(new Set(translations.map((t) => t.category)));

const filteredTranslations = computed(() => {
  const q = search.value.trim().toLowerCase();
  return translations.filter((item) => {
    const matchesCategory = activeCategory.value === 'all' || item.category === activeCategory.value;
    const matchesQuery =
      q === '' ||
      item.nl.toLowerCase().includes(q) ||
      item.en.toLowerCase().includes(q) ||
      item.fr.toLowerCase().includes(q) ||
      item.de.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });
});

const setCategory = (cat) => {
  activeCategory.value = cat === activeCategory.value ? 'all' : cat;
};

const getButtonClasses = (cat) => {
  const isActive = activeCategory.value === cat;
  let base = 'border-gray-200 bg-white text-gray-800 hover:bg-indigo-50';
  if (cat === 'all') base = 'border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100';
  if (isActive) base = 'border-indigo-500 bg-indigo-600 text-white shadow';
  return base;
};
</script>
