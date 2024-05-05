<template>
  <nav
    class="container mx-auto px-4 py-6 flex items-center justify-between flex-wrap bg-slate-800 rounded-b-md"
  >
    <router-link to="/" class="text-white font-light text-3xl">
      Vue <span class="text-base text-slate-400 font-normal">Movie </span>
    </router-link>
    <div class="flex items-center justify-between gap-5">
      <SearchInput v-if="showSearchInput" class="hidden md:block" />
      <router-link
        to="/favorites"
        class="flex items-center gap-2 text-white group hover:text-slate-400 transition-colors duration-300 ease-in-out"
      >
        <span>Favorites</span>
        <HeartIcon />
      </router-link>
    </div>
    <div class="flex md:hidden items-center justify-center mt-5 w-full">
      <SearchInput v-if="showSearchInput" />
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import SearchInput from '@/components/SearchInput.vue'
import HeartIcon from '@/assets/icons/HeartIcon.vue'

const router = useRouter()

const showSearchInput = computed(() => router.currentRoute.value.path === '/')
</script>
