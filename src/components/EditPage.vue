<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-semibold mb-4">Bewerk Reserveringen</h1>
    <textarea id="editor" v-model="editorContent" class="w-full h-64 border rounded"></textarea>
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
      editor: null,
      editorContent: "", // Inhoud van de editor
    };
  },
  mounted() {
    this.editor = new Quill("#editor", {
      theme: "snow", // Kies een thema
    });

    // Inhoud laden (bijvoorbeeld uit localStorage)
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      this.editor.root.innerHTML = savedContent;
    }
  },
  methods: {
    saveContent() {
      const content = this.editor.root.innerHTML;
      localStorage.setItem("editorContent", content); // Opslaan in localStorage of API
      alert("Inhoud opgeslagen!");
    },
  },
};
</script>

<style>
/* Stijl voor de editor */
#editor {
  height: 300px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
