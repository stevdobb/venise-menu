<template>
  <div>
    <div class="flex flex-wrap justify-between mx-auto max-w-screen-xl">
      <div class="p-4">
        <div class="flex flex-col md:flex-row justify-between">
          <!-- Upload links -->
          <div class="relative mb-4 md:mb-0">
            <h4 class="text-sm mb-1">Upload CSV bestand van ZenChef</h4>
            <p class="text-xs mb-2">
              Opgelet! Vorige reservaties worden bij upload verwijderd.
            </p>
            <label
              for="file-upload"
              class="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md shadow cursor-pointer hover:bg-blue-600 text-sm cursor-pointer mb-3"
            >
              <svg
                class="w-6 h-6 mr-3 inline text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"
                />
              </svg>
              Upload CSV bestand
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".csv"
              @change="handleFileUpload"
              class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          <!-- Template Dropdown -->
          <div class="mb-4">
            <label
              for="template-select"
              class="block text-sm font-medium text-gray-700"
              >Kies een template:</label
            >
            <select
              id="template-select"
              v-model="selectedTemplate"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="menukaart.html">Standaard Menu</option>
              <option value="menukaart-twee-paginas.html">Op 2 pagina's</option>
              <option value="menukaart-kerst.html">🎄 Kerst</option>
              <option value="menukaart-nieuwjaar.html">🥂 Nieuwjaar</option>
              <option value="menukaart-verjaardag.html">🎈 Verjaardag</option>
              <option value="menukaart-valentijn.html">♥️ Valentijn</option>
              <option value="menukaart-pasen.html">🐣 Pasen</option>
              <option value="menukaart-sans-serif.html">Sans-serif font</option>
              
              <!-- Voeg hier meer opties toe indien nodig -->
            </select>
          </div>

          <!-- Rechter content -->
          <div class="flex flex-col">
            <div v-if="date && totalGuests" class="mb-4">
              <p class="text-md font-semibold">Datum: {{ date }}</p>
              <p class="text-md">
                Aantal reservaties: {{ reservations.length - 1 }}
              </p>
              <p class="text-md">Totaal aantal gasten: {{ totalGuests }}</p>
            </div>
            <button
              @click="printAll(reservations)"
              class="bg-gray-700 text-white px-4 py-1 rounded mt-0 mb-5 flex items-center text-sm"
            >
              <svg
                class="w-6 h-6 inline text-white dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"
                />
              </svg>
              Print alle menukaarten
            </button>
          </div>
        </div>

        <div class="flex items-center gap-2 mb-0">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Zoek op naam..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <button
            v-if="searchQuery"
            @click="resetSearch"
            class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none"
          >
            Reset
          </button>
        </div>

        <table
          class="table-auto w-full border-collapse border border-gray-400 mt-4"
        >
          <thead>
            <tr>
              <th class="border border-gray-300 px-4 py-1 text-left">Tijd</th>
              <th class="border border-gray-300 px-4 py-1 text-left">
                Personen
              </th>
              <th class="border border-gray-300 px-4 py-1 text-left">Naam</th>
              <th class="border border-gray-300 px-4 py-1 text-left">Tafel</th>
              <th class="border border-gray-300 px-4 py-1 text-left">
                Notitie
              </th>
              <th class="border border-gray-300 px-4 py-1 text-left"></th>
              <th class="border border-gray-300 px-4 py-1 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(entry, index) in filteredReservations"
              :key="index"
              class="text-sm"
            >
              <td
                class="border border-gray-300 px-4 py-1"
                :class="{ 'bg-gray-100': entry.name === 'beste klant' }"
              >
                {{ entry.time.replace(/"/g, "") }}
              </td>
              <td
                class="border border-gray-300 px-4 py-1"
                :class="{ 'bg-gray-100': entry.name === 'beste klant' }"
              >
                {{ entry.people }}
              </td>
              <td
                :class="{ 'bg-gray-100': entry.name === 'beste klant' }"
                class="border border-gray-300 px-4 py-1"
              >
                {{ entry.name }}
              </td>
              <td
                class="border border-gray-300 px-4 py-1"
                :class="{ 'bg-gray-100': entry.name === 'beste klant' }"
              >
                {{ entry.table }}
              </td>
              <td
                class="border border-gray-300 px-4 py-1"
                style="max-width: 250px"
                :class="{ 'bg-gray-100': entry.name === 'beste klant' }"
                v-html="entry.note"
              ></td>

              <td
                class="border border-gray-300 px-4 py-1"
                :class="{ 'bg-gray-100': entry.name === 'beste klant' }"
              >
                <div>
                  <button
                    @click="printMenu(entry)"
                    class="px-3 py-2 text-xs font-medium text-center text-white bg-gray-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      class="w-4 h-4 inline mr-1 text-white dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"
                      />
                    </svg>
                    Print Menu
                  </button>
                </div>
              </td>
              <td class="border border-gray-300 px-4 py-1">
                <button
                  @click="deleteReservation(index)"
                  class="bg-red-500 text-white text-sm px-4 py-1 rounded hover:bg-red-600"
                >
                  x
                </button>
              </td>
            </tr>
            <tr v-if="reservations.length == 0">
              <td colspan="5" class="ml-2 text-md bg-gray-50 py-2 px-3">
                Nog geen reservaties
              </td>
            </tr>
          </tbody>
        </table>

        <div class="mt-5 p-4 border border-gray-200 bg-gray-50 rounded">
          <h3 class="text-lg font-semibold mb-2">
            Manueel nieuwe reservering toevoegen
          </h3>
          <form @submit.prevent="addReservation">
            <div class="flex gap-4 mb-4">
              <input
                type="text"
                v-model="newReservation.time"
                placeholder="Tijdstip (bv. 18:00)"
                class="border border-gray-300 px-4 py-1 w-1/4"
                required
              />
              <input
                type="text"
                v-model="newReservation.name"
                placeholder="Naam"
                class="border border-gray-300 px-4 py-1 w-1/4"
                required
              />
              <input
                type="text"
                v-model="newReservation.people"
                placeholder="Aantal Personen"
                class="border border-gray-300 px-4 py-1 w-1/4"
              />
              <input
                type="text"
                v-model="newReservation.table"
                placeholder="Tafel"
                class="border border-gray-300 px-4 py-1 w-1/4"
              />
            </div>

            <div class="flex flex-wrap gap-4">
              <div class="block-1 flex-1 min-w-[300px]">
                <h2 class="text-sm font-bold mb-2">
                  Persoonlijke notitie (komt onder verwelkoming)
                </h2>
                <div id="editorBlock1" class="editor-small"></div>
              </div>
            </div>

            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-1 rounded text-md hover:bg-blue-600"
            >
              <svg
                class="w-4 h-4 inline mr-2 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
              Voeg toe
            </button>
          </form>
        </div>

        <div class="mt-5 py-4">
          <!--<a href="/venise-menu/menu-template.html" target="_blank" class="text-white bg-gray-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"><svg class="w-4 h-4 inline text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
</svg>
Bekijk template</a>-->
        </div>
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
    };
  },
  mounted() {
    // Controleer of er gegevens in localStorage zijn
    const savedDate = localStorage.getItem("date");
    const savedTotalGuests = localStorage.getItem("totalGuests");
    const savedReservations = localStorage.getItem("reservations");

    const toolbarOptions = [
      [{ header: [false, 2, 3] }],
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

    const filledTemplate = template
    .replace("{{name}}", capitalizeName(reservation.name)) // Gebruik capitalizeName hier
    .replace("{{date}}", this.date)
    .replace("{{table}}", reservation.table)
    .replace("{{time}}", reservation.time.replace(/\"/g, "")) // Remove / from time
    .replace("{{people}}", reservation.people)
    .replace("{{note}}", reservation.note || " ")
    .replace("{{block1}}", block1)
    .replace("{{block2}}", block2)
    .replace("{{block3}}", block3)
    .replace("{{currentDate}}", formatDate());


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
    deleteReservation(index) {
      // Remove the reservation from the array
      this.reservations.splice(index, 1);

      // Update the localStorage with the modified reservations array
      localStorage.setItem("reservations", JSON.stringify(this.reservations));
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
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
