<template>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-2xl font-semibold mb-4">Bewerk Menu</h1>

    <div class="flex flex-wrap gap-4">
      <div class="block-1 flex-1 min-w-[300px]">
        <h2 class="text-xl font-bold mb-2">Tekst links</h2>
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
       showNotification: false,
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

    // Laad de opgeslagen inhoud uit localStorage (indien aanwezig)
    const savedContentBlock1 = localStorage.getItem("editorContentBlock1");
    const savedContentBlock2 = localStorage.getItem("editorContentBlock2");

    if (savedContentBlock1) {
      this.editorBlock1.root.innerHTML = savedContentBlock1;
    } else {
this.editorBlock1.root.innerHTML = "<h2>Tapas (à 1 à 2 pers)</h2><p>kaasballetjes gefrituurd (10st. €8,90) </p><p>bloemkoolroosjes (€6,20) </p><p>kippeboutjes gefrituurd (6st. €12,90) </p><p>Kaasstengels Oude Kaas </p><p>(6st. €12,90) </p><p>Camembert WARM (€17,90)</p><p>Crevettes Royal 6 st. (€18,20)</p><p>Garnaalkroketjes mini (8st. €27,80)</p><p>1/2 pot mosselen natuur (€21,90)</p><p>met wijn | met look | v/h huis (€23,90) </p><p>Potje paté 100gr. (€11,90)</p><p>Scampi in pankojasje (4st. €19,40) </p><p>Spaanse ham gedroogd (€20,90)</p><p>Duo van olijven &amp; Tapenade (€11,90) </p><p>Vleeskroketjes 'Royal' mini 10st. (€17,90) </p><p>Witte worst gegrild (€12,90)</p><p>Zalm gerookt 'PREMIUM' (€25,90)</p>"
    }

    if (savedContentBlock2) {
      this.editorBlock2.root.innerHTML = savedContentBlock2;
    } else {
      this.editorBlock2.root.innerHTML = "<h2>Dagsuggesties - Voorgerechten</h2><p>Vitello Tonnato (€18,90)</p><p>Carpaccio gemarineerd rund (€23,90)</p><p>Ganzeleverpastei (€23,40)</p><p>Jacobsnootjes 3st. duroc-ham butternutzalf (€27,40)</p><h2>Hoofdgerechten</h2><p>Gehaktballetjes in tomatensaus (€17,90)</p><p>Karnemelksmeus &amp; garnalen (€26,90)</p><h2>Pasta's en rijst</h2><p>Pasta Carbonara (€19,80)</p><h2>Salades</h2><p>Slaatje burrata (€19,50)</p><p>Tomaat garnalen (€33,90)</p><p>Garnalensalade (€34,90)</p><p>Slaatje geitenkaas (spekjes) (€23,40)</p><h2>Vlees en wild</h2><p>Rundsbrochette GEGRILD (€32,90)</p><p>Herteragout (€32,90)</p><p>Hazerug met wildsausje (€37,60)</p><h2>Vis en mosselen</h2><p>garnaalkroketten 2st. €25,90 | 3st. €30,90</p><p>Jacobsnootjes 5st., duroc-ham butternutzalf (€34,90)</p><p>Verse tonijn pepersaus licht gebakken (€34,90)</p><p>Zeebaars Mousseline (€31,90)</p><p>Zeetong gebakken (€42,80) baktijd 25 min.</p><p>Zeeuwse mosselen Natuur (€33,90)</p><p>Witte wijn | Look | v/h huis (€36,90)</p>"
    }
  },
  methods: {
    saveContent() {
      // Verkrijg de inhoud van beide editors
      const contentBlock1 = this.editorBlock1.root.innerHTML;
      const contentBlock2 = this.editorBlock2.root.innerHTML;

      // Sla de inhoud op in localStorage
      localStorage.setItem("editorContentBlock1", contentBlock1);
      localStorage.setItem("editorContentBlock2", contentBlock2);

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
</style>
