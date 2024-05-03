<template>
  <div class="bg-slate-900 min-h-screen">
    <div>
      <nav
        class="container mx-auto px-4 py-6 flex items-center justify-between flex-wrap bg-slate-800 rounded-b-md"
      >
        <router-link to="/" class="text-white font-light text-3xl">
          Vue <span class="text-base text-slate-400 font-normal">Movie </span>
        </router-link>

        <div class="flex items-center justify-between gap-5">
          <SearchInput class="hidden md:block" />

          <router-link
            to="/favorites"
            class="flex items-center gap-2 text-white group hover:text-slate-400 transition-colors duration-300 ease-in-out"
          >
            <span>Favorites</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              /></svg
          ></router-link>
        </div>
        <div class="flex md:hidden items-center justify-center mt-5 w-full">
          <SearchInput />
        </div>
      </nav>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'
</script>

<style scoped></style>
