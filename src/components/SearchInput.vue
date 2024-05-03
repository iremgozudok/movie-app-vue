<template>
  <div class="relative">
    <input
      type="text"
      v-model="search"
      placeholder="Search movies"
      @keypress.enter="searchMovies"
      class="block w-[270px] px-4 py-2 text-sm text-white placeholder:text-white border rounded-lg focus:ring-slate-400 focus:border-blue-400 bg-gray-700 border-gray-600"
    />
    <button class="absolute end-2 bottom-3 rounded-lg">
      <svg
        class="w-4 h-4 text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </button>
    <!-- <button @click="clearSearch" class="absolute end-2 bottom-3 rounded-lg">
      <svg
        class="w-4 h-4 text-gray-400 hover:text-gray-500 transition-colors duration-300 ease-in-out"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m6 18L18 6M6 6l12 12"
        />
      </svg>
    </button> -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchInput'
})
</script>

<script setup>
import { ref } from 'vue'
import { useMoviesStore } from '@/stores/movies'

const store = useMoviesStore()

const search = ref('')

const searchMovies = () => {
  store.searchMovies(search, store.movies)
  search.value = ''
}

const clearSearch = () => {
  store.fetchMovies()
}
</script>
