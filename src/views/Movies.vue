<template>
  <div class="container mx-auto px-3 md:px-0">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 py-5">
      <div
        class="p-4 text-white cursor-pointer ease-in-out hover:scale-105 duration-300 w-full transition-transform rounded-md"
        v-for="movie in store.movies"
        :key="movie.id"
        @click="goToMovieDetail(movie.id)"
      >
        <img
          class="rounded-t-md"
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          alt="movie.title"
        />
        <div class="bg-slate-600 w-full p-3 text-sm lg:text-base rounded-b-md">
          <p>
            <svg
              class="w-4 h-4 inline-block text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0l2.45 6.29h6.29l-5.08 4.12 1.91 6.09L10 12.47 5.46 16.5l1.91-6.09-5.08-4.12h6.29L10 0z"
              />
            </svg>
            {{ movie.vote_average.toFixed(1).toString() }}
          </p>

          <h1 class="text-base lg:text-lg lg:font-medium truncate my-2">
            {{ movie.title }}
          </h1>
          <p class="text-xs lg:text-sm text-slate-300">
            {{ new Date(movie.release_date).toLocaleDateString('en-US', options) }}
          </p>
        </div>
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

const options = { year: 'numeric', month: 'long', day: 'numeric' }

const goToMovieDetail = (id) => {
  router.push({ name: 'MovieDetail', params: { id } })
}

onMounted(() => {
  store.fetchMovies()
})
</script>
