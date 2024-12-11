<template>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-2xl font-semibold mb-4">Bewerk menukaart</h1>

    <div class="p-2 px-4 text-sm text-gray-800 rounded-lg bg-gray-100 dark:bg-gray-100 dark:text-black dark:border dark:border-gray-200 dark:text-gray-700 mb-4" role="alert" v-if="lastSaved">
      Laatst opgeslagen op: <span class="font-medium">{{ lastSaved }}</span>
</div>
<div class="flex items-center p-2 px-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-yellow-50 dark:text-yellow-800 dark:border dark:border-yellow-300" role="alert" v-else>
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
      Dit is een standaard versie. Er zijn nog geen aanpassingen gemaakt hier aan.
</div>
    <!-- <p v-if="lastSaved" class="text-gray-500 mb-4">
      Laatst opgeslagen op: {{ lastSaved }}
    </p> -->
    <div class="flex flex-wrap gap-4">
      <div class="block-3 flex-1 min-w-[300px]">
        <h2 class="text-xl font-bold mb-2">Tekst links boven</h2>
        <div id="editorBlock3" class="editor-small"></div>
      </div>
    </div>
    <div class="flex flex-wrap gap-4">
      <div class="block-1 flex-1 min-w-[300px]">
        <h2 class="text-xl font-bold mb-2">Tekst links onder</h2>
        <div id="editorBlock1" class="editor"></div>
      </div>

      <div class="block-2 flex-1 min-w-[300px]">
        <h2 class="text-xl font-bold mb-2">Tekst rechts</h2>
        <div id="editorBlock2" class="editor"></div>
      </div>
    </div>

    

    <button @click="saveContent" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
      Opslaan
    </button>

    <div
      v-if="showNotification"
      class="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-opacity duration-300"
    >
      Inhoud opgeslagen!
    </div>
  </div>
</template>


<script>
import 'quill/dist/quill.snow.css';
import Quill from 'quill';

export default {
  data() {
    return {
      editorBlock1: null,  // Quill editor voor block-1
      editorBlock2: null,  // Quill editor voor block-2
      editorBlock3: null,  // Quill editor voor block-2
       showNotification: false,
       lastSaved: null,
    };
  },
  mounted() {
    // Initialiseer de Quill-editors
    const toolbarOptions = [
    [{ 'header': [2, 3] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['link'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  ['blockquote'],
  ['clean'] ,

  [{ 'align': [] }],
    [{ 'color': [] }],
];

    // Initialiseer de Quill-editors met de nieuwe toolbar
    this.editorBlock1 = new Quill("#editorBlock1", {
      theme: "snow",
      placeholder: "Pas de linkse tekst aan",
      modules: {
        toolbar: toolbarOptions,
      },
    });
    this.editorBlock2 = new Quill("#editorBlock2", {
      theme: "snow",
      placeholder: "Pas de rechtse tekst aan...",
      modules: {
        toolbar: toolbarOptions,
      },
    });
    this.editorBlock3 = new Quill("#editorBlock3", {
      theme: "snow",
      placeholder: "Pas de tekst linksboven aan...",
      modules: {
        toolbar: toolbarOptions,
      },
    });

    // Laad de opgeslagen inhoud uit localStorage (indien aanwezig)
    const savedContentBlock1 = localStorage.getItem("editorContentBlock1");
    const savedContentBlock2 = localStorage.getItem("editorContentBlock2");
    const savedContentBlock3 = localStorage.getItem("editorContentBlock3");

    if (savedContentBlock1) {
      this.editorBlock1.root.innerHTML = savedContentBlock1;
    } else {
this.editorBlock1.root.innerHTML = "<h2>Tapas (à 1 à 2 pers)</h2><p>kaasballetjes gefrituurd (10st. €8,90) </p><p>bloemkoolroosjes (€6,20) </p><p>kippeboutjes gefrituurd (6st. €12,90) </p><p>Kaasstengels Oude Kaas (6st. €12,90) </p><p>Camembert WARM (€17,90)</p><p>Crevettes Royal 6 st. (€18,20)</p><p>Garnaalkroketjes mini (8st. €27,80)</p><p>1/2 pot mosselen natuur (€21,90)</p><p>met wijn | met look | v/h huis (€23,90) </p><p>Potje paté 100gr. (€11,90)</p><p>Scampi in pankojasje (4st. €19,40) </p><p>Spaanse ham gedroogd (€20,90)</p><p>Duo van olijven &amp; Tapenade (€11,90) </p><p>Vleeskroketjes 'Royal' mini 10st. (€17,90) </p><p>Witte worst gegrild (€12,90)</p><p>Zalm gerookt 'PREMIUM' (€25,90)</p>"
    }

    if (savedContentBlock2) {
      this.editorBlock2.root.innerHTML = savedContentBlock2;
    } else {
      this.editorBlock2.root.innerHTML = "<h2>Dagsuggesties - Voorgerechten</h2><p>Vitello Tonnato (€18,90)</p><p>Carpaccio gemarineerd rund (€23,90)</p><p>Ganzeleverpastei (€23,40)</p><p>Jacobsnootjes 3st. duroc-ham butternutzalf (€27,40)</p><p><br></p><h2>Hoofdgerechten</h2><p>Gehaktballetjes in tomatensaus (€17,90)</p><p>Karnemelksmeus &amp; garnalen (€26,90)</p><p><br></p><h2>Pasta's en rijst</h2><p>Pasta Carbonara (€19,80)</p><p><br></p><h2>Salades</h2><p>Slaatje burrata (€19,50)</p><p>Tomaat garnalen (€33,90)</p><p>Garnalensalade (€34,90)</p><p>Slaatje geitenkaas (spekjes) (€23,40)</p><p><br></p><h2>Vlees en wild</h2><p>Rundsbrochette GEGRILD (€32,90)</p><p>Herteragout (€32,90)</p><p>Hazerug met wildsausje (€37,60)</p><p><br></p><h2>Vis en mosselen</h2><p>garnaalkroketten 2st. €25,90 | 3st. €30,90</p><p>Jacobsnootjes 5st., duroc-ham butternutzalf (€34,90)</p><p>Verse tonijn pepersaus licht gebakken (€34,90)</p><p>Zeebaars Mousseline (€31,90)</p><p>Zeetong gebakken (€42,80) baktijd 25 min.</p><p>Zeeuwse mosselen Natuur (€33,90)</p><p>Witte wijn | Look | v/h huis (€36,90)</p>"
    }

    if (savedContentBlock3) {
      this.editorBlock3.root.innerHTML = savedContentBlock3;
    } else {
this.editorBlock3.root.innerHTML = "<p>Laat ons beginnen met het belangrijkste: </p><p><strong>We wensen jullie een aangename dag en een smakelijke maaltijd toe!</strong></p><p>Geniet nu van je gezelschap, de omgeving en het eten. </p><p>Jullie zijn natuurlijk niet naar hier gekomen om onze krant te lezen maar vooral om culinair te genieten en daar gaan we met plezier voor zorgen.</p>"
    }

    const savedTime = localStorage.getItem("lastSavedTime");
    if (savedTime) {
      this.lastSaved = savedTime;
    }

  },
  methods: {
    saveContent() {
      // Verkrijg de inhoud van beide editors
      const contentBlock1 = this.editorBlock1.root.innerHTML;
      const contentBlock2 = this.editorBlock2.root.innerHTML;
      const contentBlock3 = this.editorBlock3.root.innerHTML;

      // Sla de inhoud op in localStorage
      localStorage.setItem("editorContentBlock1", contentBlock1);
      localStorage.setItem("editorContentBlock2", contentBlock2);
      localStorage.setItem("editorContentBlock3", contentBlock3);

      // Stel de huidige datum en tijd in
      const now = new Date();
      const formattedTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      this.lastSaved = formattedTime;

      // Sla de laatste opgeslagen tijd op in localStorage
      localStorage.setItem("lastSavedTime", formattedTime);

      // Show notification
      this.showNotification = true;

      // Hide notification after 3 seconds
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    },
  },
};
</script>
<style>
.editor {
  height: 800px;
  background: #fff;
  color: black;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}
.editor-small {
  height: 300px;
  background: #fff;
  color: black;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
