<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-semibold mb-4">Bewerk Menu</h1>

    <div class="block-1">
      <h2 class="text-xl font-bold mb-2">Tekst links</h2>
      <div id="editorBlock1" class="editor"></div>
    </div>

    <div class="block-2 mt-6">
      <h2 class="text-xl font-bold mb-2">Tekst rechts</h2>
      <div id="editorBlock2" class="editor"></div>
    </div>

    <button @click="saveContent" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
      Opslaan
    </button>
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
    };
  },
  mounted() {
    // Initialiseer de Quill-editors
    this.editorBlock1 = new Quill("#editorBlock1", {
      theme: "snow",
      placeholder: "Pas de Tapas sectie aan...",
    });
    this.editorBlock2 = new Quill("#editorBlock2", {
      theme: "snow",
      placeholder: "Pas de Dagsuggesties sectie aan...",
    });

    // Laad de opgeslagen inhoud uit localStorage (indien aanwezig)
    const savedContentBlock1 = localStorage.getItem("editorContentBlock1");
    const savedContentBlock2 = localStorage.getItem("editorContentBlock2");

    if (savedContentBlock1) {
      this.editorBlock1.root.innerHTML = savedContentBlock1;
    }

    if (savedContentBlock2) {
      this.editorBlock2.root.innerHTML = savedContentBlock2;
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

      alert("Inhoud opgeslagen!");
    },
  },
};
</script>
<style>
.editor {
  height: 300px;
  background: #fff;
  color: black;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
