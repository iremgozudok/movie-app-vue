<template>
  <h1>Favorites</h1>
  <div v-if="!store.favorites.length">
    <p>Empty Favorites</p>
    <button @click="router.push({ name: 'Movies' })">Back to Home</button>
  </div>
  <div class="movie-items" v-else>
    <div class="movie" v-for="movie in store.favorites" :key="movie.id">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.overview }}</p>
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="movie.title" />
      <button @click="removeFromFav(movie.id)">Remove from Favorites</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Favorites'
})
</script>

<script setup>
import { useMoviesStore } from '@/stores/movies'
import { useRouter } from 'vue-router'

const store = useMoviesStore()
const router = useRouter()

const removeFromFav = (id) => {
  store.removeFromFavorites(id)
}
</script>
