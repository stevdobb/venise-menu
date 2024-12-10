<template>
  <div>



    <div class="flex flex-wrap justify-between mx-auto max-w-screen-xl">
    <div class="p-4">
      <div class="flex flex-col md:flex-row md:items-center justify-between">
  <!-- Upload links -->
  <input type="file" @change="handleFileUpload" class="mb-4 md:mb-0" />

  <!-- Rechter content -->
  <div class="flex flex-col">
    <div v-if="date && totalGuests" class="mb-4">
      <p class="text-md font-semibold">Datum: {{ date }}</p>
      <p class="text-md">Aantal reservaties: {{ reservations.length - 1 }}</p>
      <p class="text-md">Totaal aantal gasten: {{ totalGuests }} </p>
    </div>
    <button @click="printAll(reservations)" class="bg-gray-700 text-white px-4 py-1 rounded mt-0 mb-5 flex items-center">
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



      <table class="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th class="border border-gray-300 px-4 py-1 text-left">Tijd</th>
            <th class="border border-gray-300 px-4 py-1 text-left">Personen</th>
            <th class="border border-gray-300 px-4 py-1 text-left">Naam</th>
            <th class="border border-gray-300 px-4 py-1 text-left">Tafel</th>
            <th class="border border-gray-300 px-4 py-1 text-left">Acties</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in reservations" :key="index">

            <td class="border border-gray-300 px-4 py-1" :class="{'bg-gray-100': entry.name === 'beste klant'}" >{{ entry.time.replace(/"/g, '') }}</td>
            <td class="border border-gray-300 px-4 py-1" :class="{'bg-gray-100': entry.name === 'beste klant'}" >{{ entry.people }}</td>
            <td 
  :class="{'bg-gray-100': entry.name === 'beste klant'}" 
  class="border border-gray-300 px-4 py-1"
>
  {{ entry.name }}
</td>
            <td class="border border-gray-300 px-4 py-1" :class="{'bg-gray-100': entry.name === 'beste klant'}" >{{ entry.table }}</td>
           
            <td class="border border-gray-300 px-4 py-1" :class="{'bg-gray-100': entry.name === 'beste klant'}" >
            <div>
      <button @click="printMenu(entry)" class="bg-gray-700 text-white text-sm px-4 py-1 rounded"><svg class="w-6 h-6 inline text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"/>
  </svg>
   Print Menu</button>
    </div>
            </td>
          </tr>
        </tbody>
      </table>


      <div class="mt-5 p-4 border border-gray-400 rounded">
        <h3 class="text-lg font-semibold mb-2">Nieuwe reservering toevoegen</h3>
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
          <button type="submit" class="bg-blue-500 text-white px-4 py-1 rounded">
            Voeg toe
          </button>
        </form>
      </div>


    </div>
    </div>
  </div>
</template>

<script>
import Papa from 'papaparse';
export default {
data() {
return {
  reservations: [],
  newReservation: {
        time: "",
        name: "",
        people: "",
        table: "",
      },
  date: "",         // Opslag voor de datum
  totalGuests: "",  // Opslag voor het totaal aantal gasten
};
},
  mounted() {
  // Controleer of er gegevens in localStorage zijn
  const savedDate = localStorage.getItem('date');
  const savedTotalGuests = localStorage.getItem('totalGuests');
  const savedReservations = localStorage.getItem('reservations');

  // Als er gegevens zijn, laad deze dan
  if (savedDate && savedTotalGuests && savedReservations) {
    this.date = savedDate;  // Zet de datum
    this.totalGuests = savedTotalGuests;  // Zet het aantal gasten
    this.reservations = JSON.parse(savedReservations);  // Zet de reserveringen
  }
}
,
  computed: {
    filteredReservations() {
      // Filter de gegevens en verwijder ongebruikte data
      return this.reservations.filter((row) => {
        // Alleen rijen met niet-lege naam en tafelwaarde toevoegen
        return row.name && row.name !== "" && row.table && row.table !== "";
      });
    },
  },
  methods: {
  async generateHtml(reservation) {
    // Laad het externe HTML-bestand
    const response = await fetch('/venise-menu/menu-template.html');
    const template = await response.text();
    console.log(reservation)

    const formatDate = () => {
  const now = new Date();
  return now.toLocaleString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
};


    // Vervang de placeholders in de template
    const filledTemplate = template
  .replace('{{name}}', reservation.name)
  .replace('{{table}}', reservation.table)
  .replace('{{time}}', reservation.time.replace(/\"/g, '')) // Remove / from time
  .replace('{{people}}', reservation.people)
  .replace('{{note}}', reservation.note)
  .replace('{{currentDate}}', formatDate());


    return filledTemplate;
  },

  addReservation() {
     // Voeg een nieuwe record toe aan reservations
     const newRecord = { ...this.newReservation, note: "" }; // Voeg een lege opmerking toe
     this.reservations.push(newRecord);

     // Sla nieuwe data op in localStorage
     localStorage.setItem("reservations", JSON.stringify(this.reservations));

     // Reset formulier
     this.newReservation = {
       time: "",
       name: "",
       people: "",
       table: "",
     };
   },


  handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    // Clear previous data from localStorage before saving new data
    localStorage.removeItem('reservations');  // Verwijder bestaande reserveringen
    localStorage.removeItem('date');  // Verwijder oude datum
    localStorage.removeItem('totalGuests');  // Verwijder oud aantal gasten

    Papa.parse(file, {
      header: false, // Omdat er geen headers in de CSV zijn
      skipEmptyLines: true, // Lege lijnen overslaan
      quoteChar: '""', // Herken dubbele quotes
      delimiter: ",", // CSV gebruikt komma's als scheidingsteken
      complete: (result) => {
        // Haal datum en totaal aantal gasten uit de eerste en tweede regel van de CSV
        const firstRow = result.data[0];  // Eerste regel
        const secondRow = result.data[1]; // Tweede regel

        // Datum (uit de eerste regel)
        this.date = firstRow[1]?.trim();  // Datum uit de eerste kolom (bijv. 07/12/2024)
        // Totaal aantal gasten (uit de tweede regel)
        const totalGuestsText = secondRow[0]?.trim();
        this.totalGuests = totalGuestsText ? totalGuestsText.split('-')[1]?.trim() : ""; // Haal aantal gasten na het "Totaal aantal gasten - "

        // Verwijder de eerste twee regels (de kopregels)
        const dataWithoutHeader = result.data.slice(3);  // Dit haalt de eerste twee regels eruit
        this.parseReservations(dataWithoutHeader);

        // Sla de nieuwe data op in localStorage
        localStorage.setItem('date', this.date);  // Sla de datum op
        localStorage.setItem('totalGuests', this.totalGuests);  // Sla het aantal gasten op
        localStorage.setItem('reservations', JSON.stringify(this.reservations));  // Sla de reserveringen op
      },
    });
  }
}



,
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
localStorage.setItem('reservations', JSON.stringify(this.reservations));
}
,


    printMenu(reservation) {
    this.generateHtml(reservation).then((menuHtml) => {

     this.openPrintWindow(menuHtml);

   });
    },
    printAll(reservations) {
    Promise.all(reservations.map(this.generateHtml)).then((allMenusHtml) => {
    let allMenusCombined = allMenusHtml.join("<hr style='margin: 2rem 0;'>");
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
}
</script>
