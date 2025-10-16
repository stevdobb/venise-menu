<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <header class="shadow-sm">
      <nav class="bg-white border-b border-gray-200 px-4 lg:px-6 py-3">
        <div class="flex items-center max-w-screen-xl mx-auto">
          <!-- Logo -->
          <router-link to="/" class="flex items-center">
            <img src="/logo-venise-white.png" class="w-32 mr-5 ml-4" alt="Venise Logo" />
          </router-link>

          <!-- Desktop Menu -->
          <ul class="hidden lg:flex space-x-4 font-medium text-gray-700">
            <li>
              <router-link
                to="/"
                class="px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-600"
                :class="{ 'bg-blue-100 text-blue-600': $route.path === '/' }"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/edit"
                class="px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-600"
                :class="{ 'bg-blue-100 text-blue-600': $route.path === '/edit' }"
              >
                Wijzig menu
              </router-link>
            </li>
            <li>
              <router-link
                to="/reset"
                class="px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-600"
                :class="{ 'bg-blue-100 text-blue-600': $route.path === '/reset' }"
              >
                Reset
              </router-link>
            </li>
            <li>
              <router-link
                to="/schoolvakanties"
                class="px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-600"
                :class="{ 'bg-blue-100 text-blue-600': $route.path === '/schoolvakanties' }"
              >
                Schoolvakanties
              </router-link>
            </li>
          </ul>

          <!-- Mobile Hamburger -->
          <button
            @click="toggleMenu"
            type="button"
            class="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-black"
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

        <!-- Mobile Menu -->
        <transition name="slide-fade">
          <ul
            v-if="mobileMenuOpen"
            class="lg:hidden mt-2 space-y-1 px-4 pb-4 border-t border-gray-200 text-gray-700 font-medium"
          >
            <li>
              <router-link
                @click="toggleMenu"
                to="/"
                class="block py-2 px-3 rounded hover:bg-blue-100 hover:text-blue-600 text-left"
                :class="{ 'bg-blue-100 text-blue-600': $route.path === '/' }"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                @click="toggleMenu"
                to="/edit"
                class="block py-2 px-3 rounded hover:bg-blue-100 hover:text-blue-600 text-left"
                :class="{ 'bg-blue-100 text-blue-600': $route.path === '/edit' }"
              >
                Wijzig menu
              </router-link>
            </li>
            <li>
              <router-link
                @click="toggleMenu"
                to="/reset"
                class="block py-2 px-3 rounded hover:bg-blue-100 hover:text-blue-600 text-left"
                :class="{ 'bg-blue-100 text-blue-600': $route.path === '/reset' }"
              >
                Reset
              </router-link>
            </li>
            <li>
              <router-link
                @click="toggleMenu"
                to="/schoolvakanties"
                class="block py-2 px-3 rounded hover:bg-blue-100 hover:text-blue-600 text-left"
                :class="{ 'bg-blue-100 text-blue-600': $route.path === '/schoolvakanties' }"
              >
                Schoolvakanties
              </router-link>
            </li>
          </ul>
        </transition>
      </nav>
    </header>

    <main class="p-4 max-w-screen-xl mx-auto">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

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
