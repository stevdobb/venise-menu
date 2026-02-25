<template>
  <div class="dw-page pt-6 pb-16 min-h-screen">
    <div class="dw-content max-w-screen-xl mx-auto space-y-6">
      <!-- Header / Upload & Template -->
      <div class="dw-card p-6 rounded-xl border space-y-6">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-widest font-semibold text-sky-200">Zenchef upload</p>
            <h2 class="text-xl font-bold text-white">Laad reserveringen en kies je menutemplate</h2>
            <p class="text-sm text-sky-100/90">Vorige reservaties worden vervangen zodra je een nieuw CSV-bestand laadt.</p>
          </div>
          <!-- <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">Templates: 9</span>
            <span class="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">Print ready</span>
            <span class="px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-xs font-semibold">CSV only</span>
          </div> -->
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <!-- Upload CSV -->
          <div class="dw-mini-card p-4 rounded-xl border space-y-3">
            <div class="flex items-center gap-2">
              <span class="dw-chip text-xs px-2 py-1 rounded-md font-semibold">Stap 1</span>
              <p class="text-sm font-semibold text-white">Toevoegen reservaties</p>
            </div>
            <div class="space-y-3">
              <button
                type="button"
                @click="triggerCsvUpload"
                class="dw-btn-primary flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg shadow transition-colors text-sm font-medium"
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
                CSV inladen
              </button>
              <input
                ref="fileUpload"
                id="file-upload"
                type="file"
                accept=".csv"
                @change="handleFileUpload"
                class="hidden"
              />
              <div class="dw-info-box text-xs rounded p-2">
                <p class="font-semibold">Bestand:</p>
                <p>{{ selectedFileName || 'Nog geen bestand gekozen' }}</p>
                <p v-if="uploadMessage" :class="uploadStatusClass" class="mt-2">
                  {{ uploadMessage }}
                </p>
              </div>
              <button
                type="button"
                @click="openAddModal"
                class="dw-btn-secondary flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg shadow transition text-sm font-semibold"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Nieuwe reservatie
              </button>
            </div>
          </div>

          <!-- Template Dropdown -->
          <div class="dw-mini-card p-4 rounded-xl border space-y-3">
            <div class="flex items-center gap-2">
              <span class="dw-chip text-xs px-2 py-1 rounded font-semibold">Stap 2</span>
              <p class="text-sm font-semibold text-white">Kies template</p>
            </div>
            <!-- <label for="template-select" class="block text-xs font-medium text-gray-700">Menukaart</label> -->
            <select
              id="template-select"
              v-model="selectedTemplate"
              class="dw-select w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 text-sm"
            >
              <option value="menukaart.html">Standaard Menu</option>
              <option value="menukaart-boxes.html">Standaard menu met box</option>
              <option value="menukaart-vintage.html">Classic Vintage</option>
              <option value="menukaart-vintage-boxes.html">Classic Vintage (box)</option>
              <option value="menukaart-twee-paginas.html">📑 2 pagina's</option>
              <option value="menukaart-twee-paginas-boxes.html">📑 2 pagina's (box)</option>
              <option value="menukaart-kerst.html">🎄 Kerst</option>
              <option value="menukaart-kerst-boxes.html">🎄 Kerst (box)</option>
              <option value="menukaart-nieuwjaar.html">🥂 Nieuwjaar</option>
              <option value="menukaart-nieuwjaar-boxes.html">🥂 Nieuwjaar (box)</option>
              <option value="menukaart-verjaardag.html">🎈 Verjaardag</option>
              <option value="menukaart-verjaardag-boxes.html">🎈 Verjaardag (box)</option>
              <option value="menukaart-valentijn.html">♥️ Valentijn</option>
              <option value="menukaart-valentijn-boxes.html">♥️ Valentijn (box)</option>
              <option value="menukaart-pasen.html">🐣 Pasen</option>
              <option value="menukaart-pasen-boxes.html">🐣 Pasen (box)</option>
              <option value="menukaart-sans-serif.html">Sans-serif font</option>
              <option value="menukaart-sans-serif-boxes.html">Sans-serif font (box)</option>
            </select>
            <button
              @click="openTemplatePreview"
              class="dw-btn-secondary w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md shadow transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4.5M9 18l2.25 2.25L18 9" />
              </svg>
              Bekijk voorbeeld
            </button>
          </div>

          <!-- Print Info -->
          <div class="dw-mini-card p-4 rounded-xl border space-y-3">
            <div class="flex items-center gap-2">
              <span class="dw-chip text-xs px-2 py-1 rounded font-semibold">Stap 3</span>
              <p class="text-sm font-semibold text-white">Import info</p>
            </div>
            <div class="text-sky-50 text-sm space-y-1">
              <p class="font-semibold" v-if="date">Datum: {{ date }}</p>
              <p>Reservaties: {{ reservations.length ? reservations.length - 1 : 0 }}</p>
              <p v-if="totalGuests">Totaal gasten: {{ totalGuests }}</p>
            </div>
            <button
              @click="printAll(reservations)"
              class="dw-btn-primary flex items-center justify-center gap-2 w-full px-4 py-2 rounded-md shadow transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linejoin="round" d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"/>
              </svg>
              Print alle menukaarten
            </button>
            <button
              @click="openClearModal"
              class="dw-btn-danger flex items-center justify-center gap-2 w-full px-4 py-2 rounded-md shadow transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M10 11v6m4-6v6m-6 4h8a2 2 0 0 0 2-2V7H6v12a2 2 0 0 0 2 2Zm1-18h4a1 1 0 0 1 1 1v2H8V4a1 1 0 0 1 1-1Z" />
              </svg>
              Wis reservaties
            </button>
            <!-- <p class="text-xs text-gray-600">Sortering gebeurt automatisch op tafelnummers.</p> -->
          </div>
        </div>
      </div>

      <!-- Tabel + Zoek -->
      <div class="dw-table-shell overflow-x-auto rounded-xl border shadow-lg">
        <div class="dw-table-toolbar flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-4 py-3 text-sm border-b">
          <div class="flex items-center gap-3 flex-wrap">
            <span class="dw-count-badge inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
              {{ filteredReservations.length }} zichtbare rijen
            </span>
            <span class="text-sky-100 text-xs">
              {{ reservations.length ? reservations.length - 1 : 0 }} totaal
            </span>
            <p v-if="selectedFileName" class="text-xs text-sky-200/80 truncate max-w-xs">Bron: {{ selectedFileName }}</p>
          </div>
          <div class="flex items-center gap-2 w-full md:w-auto">
            <div class="relative w-full md:w-64">
              <span class="absolute inset-y-0 left-3 flex items-center text-sky-100/70">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </span>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Zoek op naam..."
                class="dw-search-input w-full pl-9 pr-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:outline-none text-sm"
              />
            </div>
            <button
              v-if="searchQuery"
              @click="resetSearch"
              class="dw-btn-secondary px-3 py-2 text-xs font-semibold rounded-lg shadow transition"
            >
              Reset
            </button>
          </div>
        </div>
        <div class="dw-legend px-4 pt-3 pb-4 text-xs flex flex-wrap items-center gap-3 border-b">
          <span class="font-semibold text-white">Legenda:</span>
          <div v-for="item in timeColorLegend" :key="item.label" class="flex items-center gap-2">
            <span :class="['w-4 h-4 rounded border border-white/30 shrink-0', item.class]"></span>
            <span class="text-sky-100">{{ item.label }}</span>
          </div>
        </div>
        <table class="dw-table min-w-full table-auto">
          <thead class="dw-thead text-xs uppercase tracking-wide">
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
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-blue-700 text-white">
                  {{ entry.people || '-' }}
                </span>
              </td>
              <td class="px-4 py-2 text-gray-900 font-medium">{{ entry.name }}</td>
              <td class="px-4 py-2">
                <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold bg-blue-700 text-white">
                  {{ entry.table }}
                </span>
              </td>
              <td class="px-4 py-2 max-w-xs text-gray-700 text-sm" v-html="entry.note || '<span class=&quot;text-gray-400&quot;>—</span>'"></td>
              <td class="px-4 py-2 text-right">
                <div class="flex justify-end gap-2">
                  <button
                    @click="printMenu(entry)"
                    class="dw-btn-secondary flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md shadow active:scale-95 transition"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"/>
                    </svg>
                    Print
                  </button>
                  <button
                    @click="deleteReservation(index)"
                    aria-label="Verwijder reservering"
                    class="dw-btn-danger px-3 py-1.5 text-xs font-semibold rounded-md shadow transition"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m6 6 12 12M6 18 18 6" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="reservations.length === 0">
              <td colspan="7" class="text-center py-4 text-sky-100">Nog geen reservaties</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      v-if="showClearModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
    >
      <div class="dw-modal-panel rounded-xl shadow-xl max-w-md w-full p-6 space-y-4">
        <h3 class="text-lg font-semibold text-white">Reservaties wissen</h3>
        <p class="text-sm text-sky-100">
          Weet je zeker dat je alle opgeslagen reservaties wilt verwijderen? Dit kan niet ongedaan worden gemaakt.
        </p>
        <div class="flex justify-end gap-2">
          <button
            @click="closeClearModal"
            class="dw-btn-ghost px-4 py-2 rounded border"
          >
            Annuleer
          </button>
          <button
            @click="confirmClearReservations"
            class="dw-btn-danger px-4 py-2 rounded"
          >
            Verwijder
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="showTemplatePreview"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
    >
      <div class="dw-modal-panel rounded-xl shadow-2xl max-w-5xl w-full p-5 md:p-6 space-y-4 relative">
        <div class="flex items-start justify-between gap-3">
          <div class="space-y-1">
            <h3 class="text-lg font-semibold text-white">Voorbeeld met "Beste klant"</h3>
            <p class="text-sm text-sky-100">Template: {{ selectedTemplate }}</p>
          </div>
          <button
            @click="closeTemplatePreview"
            class="p-2 rounded-full bg-white/10 text-sky-100 hover:bg-white/20 hover:text-white transition"
            aria-label="Sluit voorbeeld"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="m6 6 12 12M6 18 18 6" />
            </svg>
          </button>
        </div>
        <div class="dw-preview-shell border rounded-lg overflow-hidden">
          <div v-if="previewLoading" class="p-6 text-center text-sky-100">Voorbeeld laden...</div>
          <iframe
            v-else
            class="w-full h-[70vh] bg-white"
            :srcdoc="templatePreviewHtml"
            title="Template voorbeeld"
          ></iframe>
        </div>
      </div>
    </div>
    <div
      v-if="showAddModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
    >
      <div class="dw-modal-panel rounded-xl shadow-xl max-w-2xl w-full p-6 space-y-4">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-lg font-semibold text-white">Manueel nieuwe reservering toevoegen</h3>
            <p class="text-sm text-sky-100">Vul de gegevens in en sla op.</p>
          </div>
          <button
            @click="closeAddModal"
            class="p-2 rounded-full bg-white/10 text-sky-100 hover:bg-white/20 hover:text-white transition"
            aria-label="Sluit toevoegen"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="m6 6 12 12M6 18 18 6" />
            </svg>
          </button>
        </div>
        <form @submit.prevent="addReservation" class="space-y-4">
          <div class="flex flex-wrap gap-4">
            <input v-model="newReservation.time" type="text" placeholder="Tijdstip (bv. 18:00)" class="dw-modal-input flex-1 px-4 py-2 border rounded-lg" required />
            <input v-model="newReservation.name" type="text" placeholder="Naam" class="dw-modal-input flex-1 px-4 py-2 border rounded-lg" required />
            <input v-model="newReservation.people" type="text" placeholder="Aantal Personen" class="dw-modal-input flex-1 px-4 py-2 border rounded-lg" />
            <input v-model="newReservation.table" type="text" placeholder="Tafel" class="dw-modal-input flex-1 px-4 py-2 border rounded-lg" />
          </div>

          <div>
            <h2 class="text-sm font-bold mb-2 text-white">Persoonlijke notitie</h2>
            <div id="editorBlock1" class="dw-editor editor-small border rounded-lg h-32"></div>
          </div>

          <div class="flex justify-end gap-2">
            <button type="button" @click="closeAddModal" class="dw-btn-ghost px-4 py-2 rounded border">
              Annuleer
            </button>
            <button type="submit" class="dw-btn-primary flex items-center gap-2 px-4 py-2 rounded-lg transition-colors">
              Voeg toe
            </button>
          </div>
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
      showClearModal: false,
      showTemplatePreview: false,
      templatePreviewHtml: "",
      previewLoading: false,
      showAddModal: false,
      editorBlock1: null,
    };
  },
  mounted() {
    // Controleer of er gegevens in localStorage zijn
    const savedDate = localStorage.getItem("date");
    const savedTotalGuests = localStorage.getItem("totalGuests");
    const savedReservations = localStorage.getItem("reservations");

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
        { label: "Voor 12u", class: "bg-sky-100/90" },
        { label: "12u", class: "bg-sky-200/90" },
        { label: "13u", class: "bg-cyan-100/90" },
        { label: "14u", class: "bg-cyan-200/90" },
        { label: "15u", class: "bg-teal-100/90" },
        { label: "16-17u", class: "bg-blue-100/90" },
        { label: "18u", class: "bg-indigo-100/90" },
        { label: "19u", class: "bg-indigo-200/90" },
        { label: "20u", class: "bg-violet-100/90" },
        { label: "21u", class: "bg-violet-200/90" },
        { label: "Later", class: "bg-slate-200/90" },
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
    triggerCsvUpload() {
      const uploadEl = this.$refs.fileUpload;
      if (uploadEl) {
        uploadEl.click();
      }
    },
    openAddModal() {
      this.showAddModal = true;
      this.$nextTick(() => {
        this.initEditor();
        if (this.editorBlock1) {
          this.editorBlock1.focus();
        }
      });
    },
    closeAddModal() {
      this.showAddModal = false;
      this.editorBlock1 = null;
      this.newReservation = {
        time: "",
        name: "",
        people: "",
        table: "",
      };
    },
    initEditor() {
      if (this.editorBlock1) return;

      const editorEl = document.getElementById("editorBlock1");
      if (!editorEl) return;

      const toolbarOptions = [
        [{ header: [false, 1, 2, 3, 4, 5] }],
        [{ color: [] }, { background: [] }],
        [{ size: ["small", "normal", "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        ["link"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote"],
        ["clean"],
        [{ align: [] }],
        [{ color: [] }],
      ];

      this.editorBlock1 = new Quill(editorEl, {
        theme: "snow",
        placeholder: "",
        modules: {
          toolbar: toolbarOptions,
        },
      });
    },
    getBesteKlantReservation() {
      const match = this.reservations.find(
        (entry) => entry.name && entry.name.toLowerCase().includes("beste klant"),
      );
      return (
        match || {
          time: "19:00",
          people: "2",
          name: "Beste klant",
          table: "1",
          note: "Voorbeeldnotitie voor deze template-preview.",
        }
      );
    },
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
      const defaultHighlight = "";

      // Get the stored data
      let block1 = localStorage.getItem("editorContentBlock1");
      let block2 = localStorage.getItem("editorContentBlock2");
      let block3 = localStorage.getItem("editorContentBlock3");
      let highlight = localStorage.getItem("editorContentHighlight");

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
      if (!highlight) {
        highlight = defaultHighlight;
      }

      // Vervang de placeholders in de template
      const capitalizeName = (name) => {
        return name
          .toLowerCase() // Maak alles eerst kleine letters
          .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize de eerste letter van elk woord
      };

      const isRichTextEmpty = (html) => {
        if (!html) return true;
        const stripped = html
          .replace(/<[^>]*>/g, "")
          .replace(/&nbsp;/g, "")
          .trim();
        return stripped.length === 0;
      };

      const highlightMarkup = isRichTextEmpty(highlight)
        ? ""
        : `<div class="highlight mt-3 bg-gray-50 border border-gray-200 p-3 rounded-md">${highlight}</div>`;

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
        "{{highlight}}": highlightMarkup,
        "{{currentDate}}": formatDate(),
      };

      let filledTemplate = template;
      Object.entries(replacements).forEach(([token, value]) => {
        filledTemplate = filledTemplate.replace(new RegExp(token, "g"), value);
      });

      return filledTemplate;
    },
    openTemplatePreview() {
      const reservation = this.getBesteKlantReservation();
      this.previewLoading = true;
      this.showTemplatePreview = true;
      this.generateHtml(reservation)
        .then((html) => {
          this.templatePreviewHtml = html;
        })
        .catch(() => {
          this.templatePreviewHtml =
            "<div style='padding:16px;font-family:Arial,sans-serif;color:#b91c1c;'>Voorbeeld kon niet worden geladen.</div>";
        })
        .finally(() => {
          this.previewLoading = false;
        });
    },
    closeTemplatePreview() {
      this.showTemplatePreview = false;
      this.templatePreviewHtml = "";
    },

    addReservation() {
      // Voeg een nieuwe record toe aan reservations
      const newRecord = {
        ...this.newReservation,
        note: this.editorBlock1 ? this.editorBlock1.root.innerHTML : "",
      }; // Voeg een lege opmerking toe
      this.reservations.push(newRecord);

      // Sla nieuwe data op in localStorage
      localStorage.setItem("reservations", JSON.stringify(this.reservations));
      if (this.editorBlock1) {
        this.editorBlock1.root.innerHTML = "";
      }
      // Reset formulier
      this.newReservation = {
        time: "",
        name: "",
        people: "",
        table: "",
      };
      this.showAddModal = false;
      this.editorBlock1 = null;
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
      if (hour < 12) return "bg-sky-100/90";      // voor 12u
      if (hour === 12) return "bg-sky-200/90";    // 12u
      if (hour === 13) return "bg-cyan-100/90";   // 13u
      if (hour === 14) return "bg-cyan-200/90";   // 14u
      if (hour === 15) return "bg-teal-100/90";   // 15u
      if (hour < 18) return "bg-blue-100/90";     // 16-17u
      if (hour === 18) return "bg-indigo-100/90"; // 18u
      if (hour === 19) return "bg-indigo-200/90"; // 19u
      if (hour === 20) return "bg-violet-100/90"; // 20u
      if (hour === 21) return "bg-violet-200/90"; // 21u
      return "bg-slate-200/90";                   // later
    },
    getRowClasses(entry, index) {
      const classes = [
        "text-sm",
        "border-b",
        "border-sky-200/30",
        "last:border-0",
        "transition",
        "hover:bg-white/70",
      ];

      if (entry.name === "beste klant") {
        classes.push("bg-cyan-200/90");
        return classes;
      }

      const timeClass = this.getTimeColor(entry.time);
      if (timeClass) {
        classes.push(timeClass);
      } else {
        classes.push(index % 2 ? "bg-sky-100/80" : "bg-sky-50/90");
      }
      return classes;
    },
    deleteReservation(index) {
      // Remove the reservation from the array
      this.reservations.splice(index, 1);

      // Update the localStorage with the modified reservations array
      localStorage.setItem("reservations", JSON.stringify(this.reservations));
    },
    openClearModal() {
      this.showClearModal = true;
    },
    closeClearModal() {
      this.showClearModal = false;
    },
    confirmClearReservations() {
      localStorage.removeItem("reservations");
      localStorage.removeItem("date");
      localStorage.removeItem("totalGuests");
      this.reservations = [];
      this.date = "";
      this.totalGuests = "";
      this.selectedFileName = "";
      this.showClearModal = false;
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

<style scoped>
.dw-page {
  background:
    radial-gradient(1000px 520px at 0% -15%, rgba(169, 214, 255, 0.22), transparent 62%),
    radial-gradient(900px 500px at 100% 110%, rgba(135, 206, 250, 0.16), transparent 64%);
}

.dw-card {
  background: rgba(20, 84, 164, 0.72);
  border-color: rgba(149, 204, 255, 0.38);
  box-shadow: 0 14px 36px rgba(4, 28, 66, 0.24);
}

.dw-mini-card {
  background: rgba(12, 67, 141, 0.64);
  border-color: rgba(149, 204, 255, 0.34);
}

.dw-chip {
  background: rgba(194, 228, 255, 0.2);
  color: #def2ff;
  border: 1px solid rgba(214, 236, 255, 0.34);
}

.dw-info-box {
  background: rgba(8, 52, 111, 0.48);
  border: 1px dashed rgba(194, 228, 255, 0.45);
  color: #eff8ff;
}

.dw-select {
  border-color: rgba(172, 221, 255, 0.5);
  background: rgba(7, 49, 106, 0.54);
  color: #f6fbff;
}

.dw-select:focus {
  border-color: rgba(218, 238, 255, 0.85);
  --tw-ring-color: rgba(207, 233, 255, 0.45);
}

.dw-select option {
  background: #0d4e9e;
  color: #eff8ff;
}

.dw-btn-primary {
  background: linear-gradient(180deg, #57a6ff 0%, #3089ef 100%);
  color: #ffffff;
}

.dw-btn-primary:hover {
  background: linear-gradient(180deg, #71b5ff 0%, #4496f3 100%);
}

.dw-btn-secondary {
  background: rgba(8, 44, 97, 0.62);
  color: #eef7ff;
  border: 1px solid rgba(174, 220, 255, 0.35);
}

.dw-btn-secondary:hover {
  background: rgba(12, 56, 118, 0.84);
}

.dw-btn-danger {
  background: linear-gradient(180deg, #ef5b72 0%, #dd3d56 100%);
  color: #ffffff;
}

.dw-btn-danger:hover {
  background: linear-gradient(180deg, #f06d82 0%, #e15268 100%);
}

.dw-btn-ghost {
  border-color: rgba(172, 221, 255, 0.48);
  color: #f2f9ff;
  background: rgba(6, 45, 96, 0.46);
}

.dw-btn-ghost:hover {
  background: rgba(9, 59, 126, 0.62);
}

.dw-table-shell {
  background: rgba(18, 80, 158, 0.78);
  border-color: rgba(172, 221, 255, 0.38);
}

.dw-table-toolbar {
  background: rgba(7, 51, 112, 0.6);
  border-color: rgba(172, 221, 255, 0.28);
  color: #dff1ff;
}

.dw-count-badge {
  background: rgba(184, 224, 255, 0.22);
  color: #eff8ff;
  border: 1px solid rgba(214, 236, 255, 0.35);
}

.dw-search-input {
  border-color: rgba(172, 221, 255, 0.45);
  background: rgba(5, 44, 97, 0.5);
  color: #f6fbff;
}

.dw-search-input::placeholder {
  color: rgba(223, 241, 255, 0.62);
}

.dw-search-input:focus {
  border-color: rgba(214, 236, 255, 0.85);
  --tw-ring-color: rgba(210, 234, 255, 0.35);
}

.dw-legend {
  background: rgba(6, 45, 96, 0.46);
  border-color: rgba(172, 221, 255, 0.26);
}

.dw-thead {
  background: rgba(5, 40, 88, 0.64);
  color: #deefff;
}

.dw-table td {
  color: #072447;
}

.dw-modal-panel {
  background: #0d4c99;
  border: 1px solid rgba(172, 221, 255, 0.34);
}

.dw-preview-shell {
  border-color: rgba(172, 221, 255, 0.42);
  background: rgba(6, 45, 96, 0.46);
}

.dw-modal-input {
  border-color: rgba(172, 221, 255, 0.45);
  background: rgba(6, 44, 96, 0.5);
  color: #f8fcff;
}

.dw-modal-input::placeholder {
  color: rgba(223, 241, 255, 0.62);
}

.dw-modal-input:focus {
  outline: none;
  border-color: rgba(216, 237, 255, 0.88);
  box-shadow: 0 0 0 2px rgba(190, 226, 255, 0.24);
}

.dw-editor {
  border-color: rgba(172, 221, 255, 0.45);
  background: rgba(6, 44, 96, 0.52);
}
</style>
