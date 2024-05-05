<template>
  <div class="bg-slate-900 min-h-screen">
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue'

  import { onMounted } from 'vue'
  import { useMoviesStore } from '@/stores/movies'

  const store = useMoviesStore()

  onMounted(() => {
    store.fetchMovies()
    store.getFavorites()
    store.fetchGenres()
  })
</script>
