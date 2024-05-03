<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-3 gap-16 mt-5 text-white">
      <img
        :src="`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`"
        alt="selectedMovie.title"
        class="rounded-md col-span-1"
      />
      <div class="col-span-2 mt-10">
        <div class="flex items-center gap-2 text-3xl font-bold mb-2">
          <p>{{ selectedMovie.title }}</p>

          <div class="flex items-center font-medium text-slate-400 gap-2">
            (
            <svg
              class="w-6 h-6 inline-block text-yellow-400"
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
            <p>
              {{ selectedMovie.vote_average.toFixed(1).toString() }}
            </p>
            )
          </div>
        </div>
        <p class="text-sm text-slate-400 mb-10">
          {{ new Date(selectedMovie.release_date).toLocaleDateString('en-US', options) }} |
          <span class="uppercase"> {{ selectedMovie.original_language }}</span>
        </p>
        <p class="text-xl font-bold mb-2">Summary</p>
        <p class="mb-10">{{ selectedMovie.overview }}</p>
        <p class="text-xl font-bold mb-2">Genres</p>

        <button
          class="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out"
          @click="addToFav"
        >
          Add to Favorites
        </button>
      </div>
    </div>
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

const options = { year: 'numeric', month: 'long', day: 'numeric' }

const addToFav = () => {
  store.addToFavorites(selectedMovie.value)
}
</script>
