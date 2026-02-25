<template>
  <div id="app" class="app-shell min-h-screen text-foreground">
    <header class="sticky top-0 z-50 border-b border-sky-300/40 bg-[#0d4a98]/95 text-white backdrop-blur">
      <nav class="px-4 py-3 lg:px-6">
        <div class="mx-auto flex max-w-screen-xl items-center gap-3">
          <router-link to="/" class="flex items-center rounded-md p-1 transition hover:bg-white/10">
            <img src="/logo-venise-inverted.png" class="w-28" alt="Venise Logo" />
          </router-link>

          <ul class="hidden lg:flex items-center gap-2 text-sm font-medium">
            <li v-for="item in navItems" :key="item.path">
              <router-link
                :to="item.path"
                class="inline-flex items-center rounded-md border px-3 py-2 transition-all"
                :class="
                  isActiveRoute(item.path)
                    ? 'border-sky-200 bg-white/20 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]'
                    : 'border-sky-300/40 bg-white/10 text-sky-100 hover:bg-white/20 hover:text-white'
                "
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>

          <div class="ml-auto flex items-center gap-2">
            <button
              v-if="canInstallPwa || isIos"
              type="button"
              class="hidden sm:inline-flex items-center rounded-md border border-sky-200/50 bg-white/15 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/25"
              @click="installPwa"
            >
              Installeer app
            </button>

            <button
              @click="toggleMenu"
              type="button"
              class="inline-flex items-center justify-center rounded-md border p-2 transition-colors lg:hidden"
              :class="
                mobileMenuOpen
                  ? 'border-sky-100/70 bg-white/30 text-white'
                  : 'border-sky-200/50 bg-white/10 text-white hover:bg-white/20'
              "
              :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                v-if="!mobileMenuOpen"
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                v-else
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>
        </div>

        <transition name="fade">
          <div v-if="mobileMenuOpen" class="fixed inset-0 z-[90] bg-black/50 lg:hidden" @click="closeMenu"></div>
        </transition>
        <transition name="slide-right">
          <aside
            v-if="mobileMenuOpen"
            class="fixed inset-y-0 right-0 z-[100] w-[84vw] max-w-sm border-l border-sky-200/40 bg-[#1a5fb2] text-white shadow-2xl lg:hidden"
            @click.stop
          >
            <div class="flex items-center justify-between border-b border-sky-200/40 bg-[#1658a7] px-4 py-3">
              <p class="text-sm font-semibold">Menu</p>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md border border-sky-200/50 bg-white/10 p-2 text-white hover:bg-white/20"
                @click="closeMenu"
              >
                <span class="sr-only">Sluit menu</span>
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>

            <div class="space-y-3 bg-[#1a5fb2] p-4">
              <button
                v-if="canInstallPwa || isIos"
                type="button"
                class="w-full rounded-lg border border-sky-200/50 bg-white/10 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                @click="installPwa"
              >
                Installeer app
              </button>
              <ul class="overflow-hidden rounded-lg border border-sky-200/40 bg-[#14539f]">
                <li v-for="item in navItems" :key="`mobile-${item.path}`" class="border-b border-sky-200/30 last:border-b-0">
                  <router-link
                    :to="item.path"
                    class="block px-3 py-3 text-base font-medium"
                    :class="
                      isActiveRoute(item.path)
                        ? 'bg-white/20 text-white'
                        : 'bg-[#14539f] text-sky-100 hover:bg-white/15'
                    "
                    @click="closeMenu"
                  >
                    {{ item.label }}
                  </router-link>
                </li>
              </ul>
            </div>
          </aside>
        </transition>
      </nav>
    </header>

    <main class="mx-auto max-w-screen-xl px-2 pb-8">
      <router-view></router-view>
    </main>

    <div
      v-if="showIosInstallHint"
      class="fixed bottom-4 left-1/2 z-[120] w-[92vw] max-w-md -translate-x-1/2 rounded-lg border border-sky-200/50 bg-[#1d67bd] px-4 py-3 text-sm text-white shadow-lg"
    >
      Op iPhone/iPad: tik op Deel en kies Zet op beginscherm.
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const mobileMenuOpen = ref(false);
const canInstallPwa = ref(false);
const deferredPwaPrompt = ref(null);
const showIosInstallHint = ref(false);
const route = useRoute();
const navItems = [
  { path: "/", label: "Home" },
  { path: "/edit", label: "Wijzig menu" },
  { path: "/schoolvakanties", label: "Schoolvakanties" },
  { path: "/vertalingen", label: "Vertalingen" },
];
let pwaPromptHandler = null;
let pwaInstalledHandler = null;
const isIos =
  typeof window !== "undefined" &&
  /iphone|ipad|ipod/i.test(window.navigator.userAgent || "") &&
  !window.matchMedia("(display-mode: standalone)").matches;

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMenu() {
  mobileMenuOpen.value = false;
}

function isActiveRoute(path) {
  if (path === "/") {
    return route.path === "/";
  }
  return route.path === path || route.path.startsWith(`${path}/`);
}

async function installPwa() {
  if (deferredPwaPrompt.value) {
    deferredPwaPrompt.value.prompt();
    const result = await deferredPwaPrompt.value.userChoice;
    if (result.outcome === "accepted") {
      canInstallPwa.value = false;
    }
    deferredPwaPrompt.value = null;
    return;
  }

  if (isIos) {
    showIosInstallHint.value = true;
    setTimeout(() => {
      showIosInstallHint.value = false;
    }, 3500);
    return;
  }
}

watch(mobileMenuOpen, (open) => {
  document.body.classList.toggle("overflow-hidden", open);
});

watch(
  () => route.path,
  () => {
    closeMenu();
  }
);

onMounted(() => {
  canInstallPwa.value = false;

  pwaPromptHandler = (event) => {
    event.preventDefault();
    deferredPwaPrompt.value = event;
    canInstallPwa.value = true;
  };

  pwaInstalledHandler = () => {
    canInstallPwa.value = false;
    deferredPwaPrompt.value = null;
  };

  window.addEventListener("beforeinstallprompt", pwaPromptHandler);
  window.addEventListener("appinstalled", pwaInstalledHandler);
  window.addEventListener("keydown", onKeyDown);
});

function onKeyDown(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
}

onBeforeUnmount(() => {
  document.body.classList.remove("overflow-hidden");
  if (pwaPromptHandler) {
    window.removeEventListener("beforeinstallprompt", pwaPromptHandler);
  }
  if (pwaInstalledHandler) {
    window.removeEventListener("appinstalled", pwaInstalledHandler);
  }
  window.removeEventListener("keydown", onKeyDown);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.22s ease, opacity 0.22s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(24px);
}

.app-shell {
  background:
    radial-gradient(1200px 600px at 20% -20%, rgba(173, 216, 255, 0.25), transparent 60%),
    linear-gradient(180deg, #0b4a9a 0%, #0f5eb6 45%, #0b4a9a 100%);
}
</style>
