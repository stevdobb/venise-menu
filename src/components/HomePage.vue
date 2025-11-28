<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="max-w-screen-xl mx-auto space-y-6">
      <!-- Header / Upload & Template -->
      <div class="bg-white p-6 rounded-lg border border-gray-100 shadow-md space-y-6">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-widest font-semibold text-blue-500">Zenchef upload</p>
            <h2 class="text-xl font-bold text-gray-800">Laad reserveringen en kies je menutemplate</h2>
            <p class="text-sm text-gray-600">Vorige reservaties worden vervangen zodra je een nieuw CSV-bestand laadt.</p>
          </div>
          <!-- <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">Templates: 9</span>
            <span class="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">Print ready</span>
            <span class="px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-xs font-semibold">CSV only</span>
          </div> -->
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <!-- Upload CSV -->
          <div class="p-4 bg-slate-50 border border-slate-100 rounded-lg shadow-sm space-y-3">
            <div class="flex items-center gap-2">
              <span class="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 font-semibold">Stap 1</span>
              <p class="text-sm font-semibold text-gray-800">Upload CSV</p>
            </div>
            <p class="text-xs text-gray-600">Enkel .csv. Eerst datum + totaal gasten, daarna reservaties.</p>
            <label
              for="file-upload"
              class="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 cursor-pointer transition-colors text-sm font-medium"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01" />
              </svg>
              Kies CSV bestand
            </label>
            <input id="file-upload" type="file" accept=".csv" @change="handleFileUpload" class="hidden" />
            <div class="text-xs text-gray-700 bg-white border border-dashed border-gray-200 rounded p-2">
              <p class="font-semibold">Bestand:</p>
              <p>{{ selectedFileName || 'Nog geen bestand gekozen' }}</p>
              <p v-if="uploadMessage" :class="uploadStatusClass" class="mt-2">
                {{ uploadMessage }}
              </p>
            </div>
          </div>

          <!-- Template Dropdown -->
          <div class="p-4 bg-slate-50 border border-slate-100 rounded-lg shadow-sm space-y-3">
            <div class="flex items-center gap-2">
              <span class="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-800 font-semibold">Stap 2</span>
              <p class="text-sm font-semibold text-gray-800">Kies template</p>
            </div>
            <label for="template-select" class="block text-xs font-medium text-gray-700">Menukaart</label>
            <select
              id="template-select"
              v-model="selectedTemplate"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option value="menukaart.html">Standaard Menu</option>
              <option value="menukaart-vintage.html">Classic Vintage</option>
              <option value="menukaart-twee-paginas.html">📑 2 pagina's</option>
              <option value="menukaart-boxes.html">🔲 Met een box</option>
              <option value="menukaart-kerst.html">🎄 Kerst</option>
              <option value="menukaart-nieuwjaar.html">🥂 Nieuwjaar</option>
              <option value="menukaart-verjaardag.html">🎈 Verjaardag</option>
              <option value="menukaart-valentijn.html">♥️ Valentijn</option>
              <option value="menukaart-pasen.html">🐣 Pasen</option>
              <option value="menukaart-sans-serif.html">Sans-serif font</option>
            </select>
        
          </div>

          <!-- Print Info -->
          <div class="p-4 bg-slate-50 border border-slate-100 rounded-lg shadow-sm space-y-3">
            <div class="flex items-center gap-2">
              <span class="text-xs px-2 py-1 rounded bg-purple-100 text-purple-800 font-semibold">Stap 3</span>
              <p class="text-sm font-semibold text-gray-800">Controle & print</p>
            </div>
            <div class="text-gray-700 text-sm space-y-1">
              <p class="font-semibold" v-if="date">Datum: {{ date }}</p>
              <p>Reservaties: {{ reservations.length ? reservations.length - 1 : 0 }}</p>
              <p v-if="totalGuests">Totaal gasten: {{ totalGuests }}</p>
            </div>
            <button
              @click="printAll(reservations)"
              class="flex items-center justify-center gap-2 w-full bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linejoin="round" d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"/>
              </svg>
              Print alle menukaarten
            </button>
            <p class="text-xs text-gray-600">Sortering gebeurt automatisch op tafelnummers.</p>
          </div>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="flex gap-2">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Zoek op naam..."
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
        />
        <button
          v-if="searchQuery"
          @click="resetSearch"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow transition-colors"
        >
          Reset
        </button>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto bg-white rounded-lg shadow">
        <div class="flex items-center justify-between px-4 py-3 text-sm text-gray-600 border-b">
          <p>{{ filteredReservations.length }} zichtbare rijen · {{ reservations.length ? reservations.length - 1 : 0 }} totaal</p>
          <p v-if="selectedFileName" class="text-xs text-gray-500 truncate max-w-xs">Bron: {{ selectedFileName }}</p>
        </div>
        <div class="px-4 pt-3 pb-4 text-xs text-gray-700 flex flex-wrap items-center gap-3 border-b border-gray-100">
          <span class="font-semibold text-gray-800">Legenda:</span>
          <div v-for="item in timeColorLegend" :key="item.label" class="flex items-center gap-2">
            <span :class="['w-4 h-4 rounded border border-gray-200 shrink-0', item.class]"></span>
            <span class="text-gray-600">{{ item.label }}</span>
          </div>
        </div>
        <table class="min-w-full table-auto">
          <thead class="bg-gray-100 text-gray-700 text-xs uppercase tracking-wide">
            <tr>
              <th class="px-4 py-2 text-left">Tijd</th>
              <th class="px-4 py-2 text-left">Personen</th>
              <th class="px-4 py-2 text-left">Naam</th>
              <th class="px-4 py-2 text-left">Tafel</th>
              <th class="px-4 py-2 text-left">Notitie</th>
              <th class="px-4 py-2 text-right">Acties</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(entry, index) in filteredReservations"
              :key="index"
              :class="getRowClasses(entry, index)"
            >
              <td class="px-4 py-2 font-semibold text-gray-900">{{ entry.time.replace(/"/g, "") }}</td>
              <td class="px-4 py-2">
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                  {{ entry.people || '-' }}
                </span>
              </td>
              <td class="px-4 py-2 text-gray-900 font-medium">{{ entry.name }}</td>
              <td class="px-4 py-2">
                <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-800">
                  {{ entry.table }}
                </span>
              </td>
              <td class="px-4 py-2 max-w-xs text-gray-700 text-sm" v-html="entry.note || '<span class=&quot;text-gray-400&quot;>—</span>'"></td>
              <td class="px-4 py-2 text-right">
                <div class="flex justify-end gap-2">
                  <button
                    @click="printMenu(entry)"
                    class="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white bg-gray-800 rounded-md shadow hover:bg-gray-900 active:scale-95 transition"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"/>
                    </svg>
                    Print
                  </button>
                  <button
                    @click="deleteReservation(index)"
                    class="px-3 py-1.5 text-xs font-semibold text-white bg-red-500 rounded-md shadow hover:bg-red-600 transition"
                  >
                    Verwijder
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="reservations.length === 0">
              <td colspan="7" class="text-center py-4 text-gray-500">Nog geen reservaties</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Add Reservation Form -->
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 class="text-lg font-semibold mb-4">Manueel nieuwe reservering toevoegen</h3>
        <form @submit.prevent="addReservation" class="space-y-4">
          <div class="flex flex-wrap gap-4">
            <input v-model="newReservation.time" type="text" placeholder="Tijdstip (bv. 18:00)" class="flex-1 px-4 py-2 border rounded-lg" required />
            <input v-model="newReservation.name" type="text" placeholder="Naam" class="flex-1 px-4 py-2 border rounded-lg" required />
            <input v-model="newReservation.people" type="text" placeholder="Aantal Personen" class="flex-1 px-4 py-2 border rounded-lg" />
            <input v-model="newReservation.table" type="text" placeholder="Tafel" class="flex-1 px-4 py-2 border rounded-lg" />
          </div>

          <div>
            <h2 class="text-sm font-bold mb-2">Persoonlijke notitie</h2>
            <div id="editorBlock1" class="editor-small border rounded-lg h-32"></div>
          </div>

          <button type="submit" class="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Voeg toe
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import Papa from "papaparse";
import "quill/dist/quill.snow.css";
import Quill from "quill";

export default {
  data() {
    return {
      reservations: JSON.parse(localStorage.getItem("reservations")) || [],
      newReservation: {
        time: "",
        name: "",
        people: "",
        table: "",
      },
      searchQuery: "",
      selectedTemplate: "menukaart.html", // Standaard template

      date: "", // Opslag voor de datum
      totalGuests: "", // Opslag voor het totaal aantal gasten
      selectedFileName: "",
      uploadMessage: "",
      uploadStatus: "",
    };
  },
  mounted() {
    // Controleer of er gegevens in localStorage zijn
    const savedDate = localStorage.getItem("date");
    const savedTotalGuests = localStorage.getItem("totalGuests");
    const savedReservations = localStorage.getItem("reservations");

    const toolbarOptions = [
    [{ header: [false, 1, 2, 3, 4, 5] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ size: ['small', 'normal', 'large', 'huge'] }],
      ["bold", "italic", "underline", "strike"],
      ["link"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote"],
      ["clean"],
      [{ align: [] }],
      [{ color: [] }],
    ];

    this.editorBlock1 = new Quill("#editorBlock1", {
      theme: "snow",
      placeholder: "",
      modules: {
        toolbar: toolbarOptions,
      },
    });

    // Als er gegevens zijn, laad deze dan
    if (savedDate && savedTotalGuests && savedReservations) {
      this.date = savedDate; // Zet de datum
      this.totalGuests = savedTotalGuests; // Zet het aantal gasten
      this.reservations = JSON.parse(savedReservations); // Zet de reserveringen
    } else {
      this.reservations.push({
        time: "-",
        people: "-",
        name: "beste klant",
        table: "-",
      });
    }
  },
  computed: {
    filteredReservations() {
      // Filter op de naam en converteer naar kleine letters voor case-insensitieve vergelijking
      return this.reservations.filter((entry) =>
        entry.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
      );
    },
    timeColorLegend() {
      return [
        { label: "Voor 12u", class: "bg-gray-50" },
        { label: "12u", class: "bg-emerald-50" },
        { label: "13u", class: "bg-emerald-100" },
        { label: "14u", class: "bg-emerald-200" },
        { label: "15u", class: "bg-emerald-300/60" },
        { label: "16-17u", class: "bg-sky-50" },
        { label: "18u", class: "bg-amber-50" },
        { label: "19u", class: "bg-amber-100" },
        { label: "20u", class: "bg-orange-100" },
        { label: "21u", class: "bg-orange-200" },
        { label: "Later", class: "bg-slate-100" },
      ];
    },
    uploadStatusClass() {
      if (this.uploadStatus === "success") return "text-green-700";
      if (this.uploadStatus === "error") return "text-red-700";
      if (this.uploadStatus === "info") return "text-blue-700";
      return "text-gray-600";
    },
    // filteredReservations() {
    //   // Filter de gegevens en verwijder ongebruikte data
    //   return this.reservations.filter((row) => {
    //     // Alleen rijen met niet-lege naam en tafelwaarde toevoegen
    //     return row.name && row.name !== "" && row.table && row.table !== "";
    //   });
    // },
  },
  methods: {
    async generateHtml(reservation) {
      // Laad het externe HTML-bestand
      const selectedTemplate = this.selectedTemplate;
      const response = await fetch("/venise-menu/" + selectedTemplate);
      const template = await response.text();
      console.log(reservation);

      const formatDate = () => {
        const now = new Date();
        return now.toLocaleString("nl-NL", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      };

      // Default data for block1 and block2
      const defaultBlock3 = `<p>Laat ons beginnen met het belangrijkste: </p><p><strong>We wensen jullie een aangename dag en een smakelijke maaltijd toe!</strong></p><p>Geniet nu van je gezelschap, de omgeving en het eten. </p><p>Jullie zijn natuurlijk niet naar hier gekomen om onze krant te lezen maar vooral om culinair te genieten en daar gaan we met plezier voor zorgen.</p>`;
      const defaultBlock1 = `<h2>Tapas (à 1 à 2 pers)</h2><p>kaasballetjes gefrituurd (10st. €8,90) </p><p>bloemkoolroosjes (€6,20) </p><p>kippeboutjes gefrituurd (6st. €12,90) </p><p>Kaasstengels Oude Kaas (6st. €12,90) </p><p>Camembert WARM (€17,90)</p><p>Crevettes Royal 6 st. (€18,20)</p><p>Garnaalkroketjes mini (8st. €27,80)</p><p>1/2 pot mosselen natuur (€21,90)</p><p>met wijn | met look | v/h huis (€23,90) </p><p>Potje paté 100gr. (€11,90)</p><p>Scampi in pankojasje (4st. €19,40) </p><p>Spaanse ham gedroogd (€20,90)</p><p>Duo van olijven &amp; Tapenade (€11,90) </p><p>Vleeskroketjes 'Royal' mini 10st. (€17,90) </p><p>Witte worst gegrild (€12,90)</p><p>Zalm gerookt 'PREMIUM' (€25,90)</p>`;
      const defaultBlock2 = `<h2>Dagsuggesties - Voorgerechten</h2><p>Vitello Tonnato (€18,90)</p><p>Carpaccio gemarineerd rund (€23,90)</p><p>Ganzeleverpastei (€23,40)</p><p>Jacobsnootjes 3st. duroc-ham butternutzalf (€27,40)</p><p><br></p><h2>Hoofdgerechten</h2><p>Gehaktballetjes in tomatensaus (€17,90)</p><p>Karnemelksmeus &amp; garnalen (€26,90)</p><p><br></p><h2>Pasta's en rijst</h2><p>Pasta Carbonara (€19,80)</p><p><br></p><h2>Salades</h2><p>Slaatje burrata (€19,50)</p><p>Tomaat garnalen (€33,90)</p><p>Garnalensalade (€34,90)</p><p>Slaatje geitenkaas (spekjes) (€23,40)</p><p><br></p><h2>Vlees en wild</h2><p>Rundsbrochette GEGRILD (€32,90)</p><p>Herteragout (€32,90)</p><p>Hazerug met wildsausje (€37,60)</p><p><br></p><h2>Vis en mosselen</h2><p>garnaalkroketten 2st. €25,90 | 3st. €30,90</p><p>Jacobsnootjes 5st., duroc-ham butternutzalf (€34,90)</p><p>Verse tonijn pepersaus licht gebakken (€34,90)</p><p>Zeebaars Mousseline (€31,90)</p><p>Zeetong gebakken (€42,80) baktijd 25 min.</p><p>Zeeuwse mosselen Natuur (€33,90)</p><p>Witte wijn | Look | v/h huis (€36,90)</p>`;

      // Get the stored data
      let block1 = localStorage.getItem("editorContentBlock1");
      let block2 = localStorage.getItem("editorContentBlock2");
      let block3 = localStorage.getItem("editorContentBlock3");

      // Check if block1 is empty and set default data if needed
      if (!block1) {
        block1 = defaultBlock1;
        localStorage.setItem("editorContentBlock1", block1);
      }

      // Check if block2 is empty and set default data if needed
      if (!block2) {
        block2 = defaultBlock2;
        localStorage.setItem("editorContentBlock2", block2);
      }
      if (!block3) {
        block3 = defaultBlock3;
        localStorage.setItem("editorContentBlock3", block3);
      }

      // Vervang de placeholders in de template
      const capitalizeName = (name) => {
    return name
        .toLowerCase() // Maak alles eerst kleine letters
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize de eerste letter van elk woord
};

    const replacements = {
      "{{name}}": capitalizeName(reservation.name),
      "{{date}}": this.date,
      "{{table}}": reservation.table,
      "{{time}}": reservation.time.replace(/\"/g, ""),
      "{{people}}": reservation.people,
      "{{note}}": reservation.note || " ",
      "{{block1}}": block1,
      "{{block2}}": block2,
      "{{block3}}": block3,
      "{{currentDate}}": formatDate(),
    };

    let filledTemplate = template;
    Object.entries(replacements).forEach(([token, value]) => {
      filledTemplate = filledTemplate.replace(new RegExp(token, "g"), value);
    });


      return filledTemplate;
    },

    addReservation() {
      // Voeg een nieuwe record toe aan reservations
      const newRecord = {
        ...this.newReservation,
        note: this.editorBlock1.root.innerHTML,
      }; // Voeg een lege opmerking toe
      this.reservations.push(newRecord);

      // Sla nieuwe data op in localStorage
      localStorage.setItem("reservations", JSON.stringify(this.reservations));
      this.editorBlock1.root.innerHTML = "";
      // Reset formulier
      this.newReservation = {
        time: "",
        name: "",
        people: "",
        table: "",
      };
    },
    resetSearch() {
      this.searchQuery = "";
    },
    getTimeColor(timeStr) {
      if (!timeStr) return "bg-white";
      const cleaned = timeStr.replace(/"/g, "").trim();
      if (!cleaned || cleaned === "-") return "bg-white";
      const match = cleaned.match(/^(\d{1,2})/);
      if (!match) return "bg-white";
      const hour = parseInt(match[1], 10);
      if (Number.isNaN(hour)) return "";

      // Specifieke blokken per uur
      if (hour < 12) return "bg-gray-50";        // voor 12u
      if (hour === 12) return "bg-emerald-50";   // 12u
      if (hour === 13) return "bg-emerald-100";  // 13u
      if (hour === 14) return "bg-emerald-200";  // 14u
      if (hour === 15) return "bg-emerald-300/60"; // 15u
      if (hour < 18) return "bg-sky-50";         // 16-17u
      if (hour === 18) return "bg-amber-50";     // 18u
      if (hour === 19) return "bg-amber-100";    // 19u
      if (hour === 20) return "bg-orange-100";   // 20u (oranje)
      if (hour === 21) return "bg-orange-200";   // 21u (donkerder oranje)
      return "bg-slate-100";                     // later
    },
    getRowClasses(entry, index) {
      const classes = [
        "text-sm",
        "border-b",
        "last:border-0",
        "transition",
        "hover:bg-gray-50",
      ];

      if (entry.name === "beste klant") {
        classes.push("bg-amber-100");
        return classes;
      }

      const timeClass = this.getTimeColor(entry.time);
      if (timeClass) {
        classes.push(timeClass);
      } else {
        classes.push(index % 2 ? "bg-gray-50/50" : "bg-white");
      }
      return classes;
    },
    deleteReservation(index) {
      // Remove the reservation from the array
      this.reservations.splice(index, 1);

      // Update the localStorage with the modified reservations array
      localStorage.setItem("reservations", JSON.stringify(this.reservations));
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (!file.name.toLowerCase().endsWith(".csv")) {
          this.selectedFileName = file.name;
          this.uploadMessage = "Alleen .csv bestanden worden ondersteund.";
          this.uploadStatus = "error";
          return;
        }
        this.selectedFileName = file.name;
        this.uploadMessage = "Bezig met laden...";
        this.uploadStatus = "info";
        // Clear previous data from localStorage before saving new data
        localStorage.removeItem("reservations"); // Verwijder bestaande reserveringen
        localStorage.removeItem("date"); // Verwijder oude datum
        localStorage.removeItem("totalGuests"); // Verwijder oud aantal gasten

        Papa.parse(file, {
          header: false, // Omdat er geen headers in de CSV zijn
          skipEmptyLines: true, // Lege lijnen overslaan
          quoteChar: '""', // Herken dubbele quotes
          delimiter: ",", // CSV gebruikt komma's als scheidingsteken
          complete: (result) => {
            // Haal datum en totaal aantal gasten uit de eerste en tweede regel van de CSV
            const firstRow = result.data[0]; // Eerste regel
            const secondRow = result.data[1]; // Tweede regel

            // Datum (uit de eerste regel)
            this.date = firstRow[1]?.trim(); // Datum uit de eerste kolom (bijv. 07/12/2024)
            // Totaal aantal gasten (uit de tweede regel)
            const totalGuestsText = secondRow[0]?.trim();
            this.totalGuests = totalGuestsText
              ? totalGuestsText.split("-")[1]?.trim()
              : ""; // Haal aantal gasten na het "Totaal aantal gasten - "

            // Verwijder de eerste twee regels (de kopregels)
            const dataWithoutHeader = result.data.slice(3); // Dit haalt de eerste twee regels eruit
            this.parseReservations(dataWithoutHeader);

            // Sla de nieuwe data op in localStorage
            localStorage.setItem("date", this.date); // Sla de datum op
            localStorage.setItem("totalGuests", this.totalGuests); // Sla het aantal gasten op
            localStorage.setItem(
              "reservations",
              JSON.stringify(this.reservations),
            ); // Sla de reserveringen op

            this.uploadMessage = `Succes: ${this.reservations.length - 1} reservaties geladen.`;
            this.uploadStatus = "success";
          },
          error: () => {
            this.uploadMessage = "Fout bij het lezen van het CSV-bestand.";
            this.uploadStatus = "error";
          },
        });
      }
    },

    parseReservations(data) {
      // Itereer door de rijen en map de data naar het gewenste formaat
      this.reservations = data.map((row) => {
        return {
          time: row[0]?.trim(), // Tijd (bv. 18:00)
          people: row[1]?.trim(), // Aantal personen
          name: row[2]?.replace(/"/g, "").trim(), // Verwijder dubbele quotes uit naam
          table: row[3]?.replace(/"/g, "").trim(), // Tafelnummer
        };
      });

      // Voeg een extra regel toe met de naam "Beste klant"
      this.reservations.push({
        time: "-",
        people: "-",
        name: "beste klant",
        table: "-",
      });

      // Sla de data op in localStorage
      localStorage.setItem("reservations", JSON.stringify(this.reservations));
    },
    printMenu(reservation) {
      this.generateHtml(reservation).then((menuHtml) => {
        this.openPrintWindow(menuHtml);
      });
    },
    printAll(reservations) {
  // Sorteer de reserveringen op tafelnummer
  const sortedReservations = [...reservations].sort((a, b) => {
    const tableA = parseInt(a.table, 10) || 0; // Converteer naar getal, gebruik 0 als fallback
    const tableB = parseInt(b.table, 10) || 0;
    return tableA - tableB; // Sorteer oplopend
  });

  // Genereer HTML voor elke reservering en combineer ze
  Promise.all(sortedReservations.map(this.generateHtml)).then((allMenusHtml) => {
    let allMenusCombined = allMenusHtml.join(
      "<hr style='margin: 2rem 0;'>",
    );
    this.openPrintWindow(allMenusCombined);
  });
},


    openPrintWindow(content) {
      const printWindow = window.open("", "_blank");
      printWindow.document.open();
      printWindow.document.write(content);
      setTimeout(() => {
        printWindow.document.close();
        printWindow.print();
      }, "500");
    },
  },
};
</script>
