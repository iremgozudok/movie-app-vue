<template>
  <div class="container mx-auto py-5">
    <div class="grid grid-cols-3 gap-16 text-white mx-2">
      <img
        :src="`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`"
        alt="selectedMovie.title"
        class="rounded-md col-span-3 md:col-span-1"
      />
      <div class="col-span-3 md:col-span-2 md:mt-10">
        <div class="flex items-center gap-2 text-3xl font-bold mb-2">
          <p>{{ selectedMovie.title }}</p>
          <div class="flex items-center font-medium text-slate-400 gap-2">
            (
            <StarIcon />
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
        <p class="mb-10">{{ genre }}</p>
        <button
          class="bg-slate-200 w-full md:w-auto hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out"
          @click="toggleFav"
        >
          {{ store.favorites.some((movie) => movie.id === selectedMovie.id) ? 'Remove from Favorites' : 'Add to Favorites' }}
        </button>       
      </div>
    </div>
  </div>
</template>

<script setup>
  import StarIcon from '@/assets/icons/StarIcon.vue'
  import { computed } from 'vue'
  import { useMoviesStore } from '@/stores/movies'
  import { useRoute } from 'vue-router'

  const store = useMoviesStore()
  const route = useRoute()

  const selectedMovie = computed(() => {
    return store.movies.find((movie) => {
      if (movie.id === Number(route.params.id)) {
        window.document.title = movie.title
      }
      return movie.id === Number(route.params.id)
    })
  })

  const genre = computed(() => {
    return store.genres
      .filter((genre) => selectedMovie.value.genre_ids.includes(genre.id))
      .map((genre) => genre.name)
      .join(', ')
  })

  const options = { year: 'numeric', month: 'long', day: 'numeric' }

  const toggleFav = () => {
    store.toggleFavorite(selectedMovie.value)
  }
</script>
