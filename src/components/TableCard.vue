<template>
    <div class="table-card">
      <h1>{{ restaurantName }}</h1>
      <p><strong>Tafel:</strong> {{ table }}</p>
      <p><strong>Datum:</strong> {{ date }}</p>
      <p><strong>Tijd:</strong> {{ time }}</p>
      <p><strong>Aantal Personen:</strong> {{ persons }}</p>
      <p><strong>Klant:</strong> {{ customerName }}</p>
      <button @click="printCard">Print Menu</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["data"],
    computed: {
      restaurantName() {
        return this.data.restaurant || "Restaurant Venise";
      },
      table() {
        return this.data.table || "Onbekend";
      },
      date() {
        return this.data.date || "Onbekend";
      },
      time() {
        return this.data.time || "Onbekend";
      },
      persons() {
        return this.data.persons || 0;
      },
      customerName() {
        return this.data.customer || "Onbekend";
      },
    },
    methods: {
      printCard() {
        window.print();
      },
    },
  };
  </script>
  
  <style scoped>
  .table-card {
    width: 210mm; /* A4 */
    height: 297mm; /* A4 */
    padding: 20px;
    border: 1px solid #ccc;
    font-family: Arial, sans-serif;
  }
  </style>
  