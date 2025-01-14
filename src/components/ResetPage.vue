<template>
    <div class="flex flex-wrap justify-between mx-auto max-w-screen-xl">
        <div class="p-4">
            <p class="mb-4">Verwijder de opgeslagen reservaties uit het geheugen. Nadien kun je terug een CSV uploaden met nieuwe reservaties.

            </p>


            <div
      v-if="showNotification"
      class="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-opacity duration-300"
    >
      Opgeslagen reservaties zijn verwijdert
    </div>

    
      <button
        @click="clearReservations"
        class="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
      >
        Verwijder reservaties
      </button>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showNotification = ref(false);
  
  function clearReservations() {
    // Verwijder de 'reservations' key uit de localStorage
    localStorage.removeItem('reservations');
  
    // Toon de notificatie
    showNotification.value = true;
  
    // Verberg de notificatie na 3 seconden
    setTimeout(() => {
      showNotification.value = false;
    }, 3000);
  }
  </script>
  
  <style scoped>
  .notification {
    @apply fixed top-4 right-4 bg-green-500 text-white font-medium py-2 px-4 rounded shadow-md;
    transition: opacity 0.3s ease-in-out;
  }
  </style>
  