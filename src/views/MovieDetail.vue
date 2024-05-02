<template>
  <div>
    <h1>{{ selectedMovie.title }}</h1>
    <p>{{ selectedMovie.overview }}</p>
    <img
      :src="`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`"
      alt="selectedMovie.title"
    />
    <button @click="addToFav">Add to Favorites</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MovieDetail'
})
</script>

<script setup>
import { computed } from 'vue'
import { useMoviesStore } from '@/stores/movies'
import { useRoute } from 'vue-router'

const store = useMoviesStore()
const route = useRoute()

const selectedMovie = computed(() => {
  return store.movies.find((movie) => movie.id === Number(route.params.id))
})

const addToFav = () => {
  store.addToFavorites(selectedMovie.value)
}
</script>
