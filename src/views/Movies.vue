<template>
  <div>
    <input
      type="text"
      v-model="search"
      placeholder="Search movies"
      @keypress.enter="searchMovies"
    />
    <button @click="searchMovies">Search</button>
    <button @click="clearSearch">X</button>

    <h1>Movies</h1>
    <div class="movie-list">
      <div
        class="movie"
        v-for="movie in store.movies"
        :key="movie.id"
        @click="goToMovieDetail(movie.id)"
      >
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.overview }}</p>
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="movie.title" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Movies'
})
</script>

<script setup>
import { onMounted, ref } from 'vue'
import { useMoviesStore } from '@/stores/movies'
import { useRouter } from 'vue-router'

const store = useMoviesStore()
const router = useRouter()

const goToMovieDetail = (id) => {
  router.push({ name: 'MovieDetail', params: { id } })
}

const search = ref('')

const searchMovies = () => {
  store.searchMovies(search, store.movies)
  search.value = ''
}

const clearSearch = () => {
  store.fetchMovies()
}

onMounted(() => {
  store.fetchMovies()
})
</script>

<style scoped>
h1 {
  color: red;
}
.movie-list {
  display: flex;
  flex-wrap: wrap;
}
.movie {
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
}
.movie img {
  width: 100%;
}
</style>
