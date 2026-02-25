<template>
  <div class="edit-dw-page space-y-6 py-6">
    <div class="edit-dw-card rounded-xl border p-6 shadow-sm">
      <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div class="space-y-1">
          <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Wijzig menu</p>
          <h1 class="text-3xl font-bold tracking-tight text-white">Bewerk menukaart</h1>
          <p class="text-sm text-sky-100">
            Pas de standaardteksten aan, sla lokaal op en exporteer desgewenst een backup voor Word.
          </p>
        </div>
        <div class="grid gap-2 w-full sm:w-auto">
          <div class="edit-dw-stat rounded-lg border px-4 py-2 text-sm">
            Laatst opgeslagen:
            <span class="font-semibold" v-if="lastSaved">{{ lastSaved }}</span>
            <span class="font-semibold text-sky-200/80" v-else>Nog niet opgeslagen</span>
          </div>
          <div class="edit-dw-stat rounded-lg border px-4 py-2 text-sm">
            Tekstblokken: <span class="font-semibold">3</span>
          </div>
        </div>
      </div>
      <div
        class="mt-4 flex items-center gap-2 rounded-lg border border-amber-200/60 bg-amber-100/90 px-4 py-3 text-sm text-amber-950"
        role="alert"
        v-if="!lastSaved"
      >
        <svg
          class="flex-shrink-0 inline w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
          />
        </svg>
        Dit is een standaard versie. Er zijn nog geen aanpassingen gemaakt hier aan.
      </div>
    </div>

    <div class="edit-dw-card space-y-5 rounded-xl border p-5 shadow-sm">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Tekstblokken</p>
          <h2 class="text-xl font-bold tracking-tight text-white">Werk de menu-inhoud bij</h2>
          <p class="text-sm text-sky-100">Aanpassingen worden lokaal opgeslagen in je browser.</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            @click="saveContent"
            class="edit-dw-btn-primary inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01" />
            </svg>
            Opslaan
          </button>
          <button
            @click="exportToWord"
            class="edit-dw-btn-secondary inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2m-4 9v3m-4 0h8a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2Zm8-13H9v4h6V6Z" />
            </svg>
            Export naar Word
          </button>
          <button
            @click="resetReservations"
            class="edit-dw-btn-danger inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M10 11v6m4-6v6m-6 4h8a2 2 0 0 0 2-2V7H6v12a2 2 0 0 0 2 2Zm1-18h4a1 1 0 0 1 1 1v2H8V4a1 1 0 0 1 1-1Z" />
            </svg>
            Verwijder reservaties
          </button>
        </div>
      </div>

      <div class="space-y-4">
        <div class="edit-dw-editor-panel space-y-2 rounded-lg border p-4 shadow-sm">
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Blok 3</p>
            <h3 class="text-lg font-semibold tracking-tight text-white">Tekst links boven</h3>
            <p class="text-sm text-sky-100">Korte introductie bovenaan de menukaart.</p>
          </div>
          <div id="editorBlock3" class="editor-small"></div>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div class="edit-dw-editor-panel space-y-2 rounded-lg border p-4 shadow-sm">
            <div>
              <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Blok 1</p>
              <h3 class="text-lg font-semibold tracking-tight text-white">Tekst links onder</h3>
              <p class="text-sm text-sky-100">Tapas of bijgerechten die naast het menu staan.</p>
            </div>
            <div id="editorBlock1" class="editor"></div>
          </div>

          <div class="edit-dw-editor-panel space-y-2 rounded-lg border p-4 shadow-sm">
            <div>
              <p class="text-xs font-semibold uppercase tracking-widest text-sky-200">Blok 2</p>
              <h3 class="text-lg font-semibold tracking-tight text-white">Tekst rechts</h3>
              <p class="text-sm text-sky-100">Hoofdgerechten, suggesties en extra info.</p>
            </div>
            <div id="editorBlock2" class="editor"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showNotification"
      class="fixed right-5 top-5 rounded-md border border-emerald-500/30 bg-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-opacity duration-300"
    >
      Inhoud opgeslagen!
    </div>
    <div
      v-if="showResetNotification"
      class="fixed right-5 top-5 rounded-md border border-destructive/20 bg-destructive px-6 py-3 text-sm font-medium text-destructive-foreground shadow-lg transition-opacity duration-300"
    >
      Reservaties verwijderd.
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.snow.css";
import Quill from "quill";

export default {
  data() {
    return {
      editorBlock1: null, // Quill editor voor block-1
      editorBlock2: null, // Quill editor voor block-2
      editorBlock3: null, // Quill editor voor block-2
      showNotification: false,
      lastSaved: null,
      showResetNotification: false,
    };
  },
  mounted() {
    // Initialiseer de Quill-editors
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
      this.editorBlock1.root.innerHTML =
        "<h2>Tapas (à 1 à 2 pers)</h2><p>kaasballetjes gefrituurd (10st. €8,90) </p><p>bloemkoolroosjes (€6,20) </p><p>kippeboutjes gefrituurd (6st. €12,90) </p><p>Kaasstengels Oude Kaas (6st. €12,90) </p><p>Camembert WARM (€17,90)</p><p>Crevettes Royal 6 st. (€18,20)</p><p>Garnaalkroketjes mini (8st. €27,80)</p><p>1/2 pot mosselen natuur (€21,90)</p><p>met wijn | met look | v/h huis (€23,90) </p><p>Potje paté 100gr. (€11,90)</p><p>Scampi in pankojasje (4st. €19,40) </p><p>Spaanse ham gedroogd (€20,90)</p><p>Duo van olijven &amp; Tapenade (€11,90) </p><p>Vleeskroketjes 'Royal' mini 10st. (€17,90) </p><p>Witte worst gegrild (€12,90)</p><p>Zalm gerookt 'PREMIUM' (€25,90)</p>";
    }

    if (savedContentBlock2) {
      this.editorBlock2.root.innerHTML = savedContentBlock2;
    } else {
      this.editorBlock2.root.innerHTML =
        "<h2>Dagsuggesties - Voorgerechten</h2><p>Vitello Tonnato (€18,90)</p><p>Carpaccio gemarineerd rund (€23,90)</p><p>Ganzeleverpastei (€23,40)</p><p>Jacobsnootjes 3st. duroc-ham butternutzalf (€27,40)</p><p><br></p><h2>Hoofdgerechten</h2><p>Gehaktballetjes in tomatensaus (€17,90)</p><p>Karnemelksmeus &amp; garnalen (€26,90)</p><p><br></p><h2>Pasta's en rijst</h2><p>Pasta Carbonara (€19,80)</p><p><br></p><h2>Salades</h2><p>Slaatje burrata (€19,50)</p><p>Tomaat garnalen (€33,90)</p><p>Garnalensalade (€34,90)</p><p>Slaatje geitenkaas (spekjes) (€23,40)</p><p><br></p><h2>Vlees en wild</h2><p>Rundsbrochette GEGRILD (€32,90)</p><p>Herteragout (€32,90)</p><p>Hazerug met wildsausje (€37,60)</p><p><br></p><h2>Vis en mosselen</h2><p>garnaalkroketten 2st. €25,90 | 3st. €30,90</p><p>Jacobsnootjes 5st., duroc-ham butternutzalf (€34,90)</p><p>Verse tonijn pepersaus licht gebakken (€34,90)</p><p>Zeebaars Mousseline (€31,90)</p><p>Zeetong gebakken (€42,80) baktijd 25 min.</p><p>Zeeuwse mosselen Natuur (€33,90)</p><p>Witte wijn | Look | v/h huis (€36,90)</p>";
    }

    if (savedContentBlock3) {
      this.editorBlock3.root.innerHTML = savedContentBlock3;
    } else {
      this.editorBlock3.root.innerHTML =
        "<p>Laat ons beginnen met het belangrijkste: </p><p><strong>We wensen jullie een aangename dag en een smakelijke maaltijd toe!</strong></p><p>Geniet nu van je gezelschap, de omgeving en het eten. </p><p>Jullie zijn natuurlijk niet naar hier gekomen om onze krant te lezen maar vooral om culinair te genieten en daar gaan we met plezier voor zorgen.</p>";
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
    resetReservations() {
      localStorage.removeItem("reservations");
      this.showResetNotification = true;
      setTimeout(() => {
        this.showResetNotification = false;
      }, 3000);
    },
    exportToWord() {
      const block1 = this.editorBlock1.root.innerHTML;
      const block2 = this.editorBlock2.root.innerHTML;
      const block3 = this.editorBlock3.root.innerHTML;
      const now = new Date();
      const timestamp = now.toLocaleString("nl-BE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      const docTitle = "Backup menukaart";
      const htmlContent = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
          <head>
            <meta charset='utf-8'>
            <title>${docTitle}</title>
            <style>
              body { font-family: Arial, sans-serif; color: #111; line-height: 1.5; }
              h1 { font-size: 24px; margin: 0 0 4px; }
              .meta { margin: 0 0 20px; color: #555; font-size: 12px; }
              .section { margin-bottom: 24px; }
              .section h2 { font-size: 16px; margin-bottom: 8px; }
              .content { border: 1px solid #d1d5db; padding: 12px; border-radius: 6px; background: #fafafa; }
            </style>
          </head>
          <body>
            <h1>${docTitle}</h1>
            <p class="meta">
              Geëxporteerd op: ${timestamp}${this.lastSaved ? `<br>Laatst opgeslagen in app: ${this.lastSaved}` : ""}
            </p>
            <div class="section">
              <h2>Tekst links boven</h2>
              <div class="content">${block3}</div>
            </div>
            <div class="section">
              <h2>Tekst links onder</h2>
              <div class="content">${block1}</div>
            </div>
            <div class="section">
              <h2>Tekst rechts</h2>
              <div class="content">${block2}</div>
            </div>
          </body>
        </html>
      `;

      // Create a Word-compatible .doc from the HTML so it opens nicely in Word.
      const blob = new Blob(["\ufeff", htmlContent], {
        type: "application/msword",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `menukaart-backup-${now.toISOString().slice(0, 10)}.doc`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },
  },
};
</script>
<style>
.edit-dw-page {
  background:
    radial-gradient(900px 460px at 0% -10%, rgba(169, 214, 255, 0.18), transparent 62%),
    radial-gradient(800px 420px at 100% 120%, rgba(135, 206, 250, 0.14), transparent 64%);
}

.edit-dw-card {
  background: rgba(20, 84, 164, 0.72);
  border-color: rgba(149, 204, 255, 0.38);
  color: #f1f8ff;
}

.edit-dw-stat {
  background: rgba(8, 52, 111, 0.48);
  border-color: rgba(194, 228, 255, 0.45);
}

.edit-dw-editor-panel {
  background: rgba(9, 56, 118, 0.56);
  border-color: rgba(172, 221, 255, 0.34);
}

.edit-dw-btn-primary {
  background: linear-gradient(180deg, #57a6ff 0%, #3089ef 100%);
  color: #fff;
  border-color: rgba(204, 234, 255, 0.45);
}

.edit-dw-btn-primary:hover {
  background: linear-gradient(180deg, #71b5ff 0%, #4496f3 100%);
}

.edit-dw-btn-secondary {
  background: rgba(8, 44, 97, 0.62);
  color: #eef7ff;
  border-color: rgba(174, 220, 255, 0.35);
}

.edit-dw-btn-secondary:hover {
  background: rgba(12, 56, 118, 0.84);
}

.edit-dw-btn-danger {
  background: linear-gradient(180deg, #ef5b72 0%, #dd3d56 100%);
  color: #fff;
  border-color: rgba(255, 210, 216, 0.35);
}

.edit-dw-btn-danger:hover {
  background: linear-gradient(180deg, #f06d82 0%, #e15268 100%);
}

.editor,
.editor-small {
  width: 100%;
  background: #ffffff;
  color: #111827;
  border: 1px solid hsl(var(--border));
  border-radius: 12px;
  padding: 1rem;
  box-shadow: inset 0 1px 0 rgba(148, 163, 184, 0.08);
}
.editor {
  height: 800px;
}
.editor-small {
  height: 280px;
}

.ql-toolbar.ql-snow,
.ql-container.ql-snow {
  border-color: hsl(var(--border));
  background: #ffffff;
  color: #111827;
}

.ql-toolbar.ql-snow {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: hsl(var(--muted) / 0.45);
}

.ql-container.ql-snow {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.ql-editor {
  background: #ffffff;
  color: #111827;
}

</style>
