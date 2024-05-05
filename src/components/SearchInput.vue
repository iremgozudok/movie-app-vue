<template>
  <div class="relative">
    <input
      v-model="search"
      @input="searchMovies(search)"
      type="text"
      placeholder="Search Movies"
      class="block w-[270px] px-4 py-2 text-sm text-white placeholder:text-white border rounded-lg focus:ring-slate-400 focus:border-blue-400 bg-gray-700 border-gray-600"
    />
    <button v-if="!search.length" class="absolute end-2 bottom-3 rounded-lg">
      <SearchIcon />
    </button>
    <button v-else @click="clearSearch" class="absolute end-2 bottom-3 rounded-lg">
      <CloseIcon />
    </button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useMoviesStore } from '@/stores/movies'

  import SearchIcon from '@/assets/icons/SearchIcon.vue'
  import CloseIcon from '@/assets/icons/CloseIcon.vue'

  const store = useMoviesStore()
  const search = ref('')

  const searchMovies = (text) => {
    store.searchMovies(text, store.movies)
  }

  const clearSearch = () => {
    store.fetchMovies()
    search.value = ''
  }
</script>
