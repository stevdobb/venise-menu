<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <header class="shadow-sm bg-white/90 backdrop-blur">
      <nav class="border-b border-gray-200 px-4 lg:px-6 py-3">
        <div class="flex items-center max-w-screen-xl mx-auto gap-4">
          <!-- Logo -->
          <router-link to="/" class="flex items-center">
            <img src="/logo-venise-white.png" class="w-28 mr-4" alt="Venise Logo" />
          </router-link>

          <!-- Desktop Menu -->
          <ul class="hidden lg:flex space-x-2 font-medium text-gray-700">
            <li v-for="item in navItems" :key="item.path">
              <router-link
                :to="item.path"
                class="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition flex items-center gap-1"
                :class="{ 'bg-blue-100 text-blue-700 shadow-sm': $route.path === item.path }"
              >
                <span>{{ item.label }}</span>
              </router-link>
            </li>
          </ul>

          <div class="ml-auto flex items-center gap-2">
            <!-- <span class="hidden md:inline-block text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold">Venise tools</span> -->
            <!-- Mobile Hamburger -->
            <button
              @click="toggleMenu"
              type="button"
              class="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-black"
            >
              <span class="sr-only">Open main menu</span>
              <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 5h14M3 10h14M3 15h14" clip-rule="evenodd" />
              </svg>
              <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293l11.414 11.414M4.293 15.707L15.707 4.293" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <transition name="slide-fade">
          <ul
            v-if="mobileMenuOpen"
            class="lg:hidden mt-2 space-y-1 px-4 pb-4 border-t border-gray-200 text-gray-700 font-medium"
          >
            <li v-for="item in navItems" :key="item.path">
              <router-link
                @click="toggleMenu"
                :to="item.path"
                class="block py-2 px-3 rounded hover:bg-blue-100 hover:text-blue-600 text-left"
                :class="{ 'bg-blue-100 text-blue-600': $route.path === item.path }"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </transition>
      </nav>
    </header>

    <main class="px-2 max-w-screen-xl mx-auto">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const navItems = [
  { path: '/', label: 'Home' },
  { path: '/edit', label: 'Wijzig menu' },
  { path: '/reset', label: 'Reset' },
  { path: '/schoolvakanties', label: 'Schoolvakanties' },
  { path: '/vertalingen', label: 'Vertalingen' },
]

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
}

/* Animatie voor mobiele menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
