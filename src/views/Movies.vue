<template>
  <div class="container mx-auto px-2">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-5 py-5">
      <div
        class="ease-in-out hover:scale-105 duration-300 w-full transition-transform rounded-md"
        v-for="movie in store.filteredMovies"
        :key="movie.id"
      >
        <MovieCart :movie="movie" />
      </div>
    </div>
    <div v-if="store.filteredMovies.length === 0" class="text-white text-center mt-10">
      Cannot find any movies
    </div>
  </div>
</template>

<script setup>
  import StarIcon from '@/assets/icons/StarIcon.vue'
  import MovieCart from '@/components/MovieCart.vue'
  import { ref, onUnmounted } from 'vue'
  import { useMoviesStore } from '@/stores/movies'
  import { useRouter } from 'vue-router'

  const store = useMoviesStore()
  const router = useRouter()

  const goToMovieDetail = (id) => {
    router.push({ name: 'MovieDetail', params: { id } })
  }

  window.document.title = 'Vue Movie'

  onUnmounted(() => {
    store.filteredMovies = store.movies
  })
</script>
