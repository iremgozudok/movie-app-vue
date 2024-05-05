<template>
  <div class="container mx-auto px-2">
    <h1 class="text-slate-200 text-3xl text-center my-5 font-semibold">Favorites</h1>
    <div v-if="!store.favorites.length" class="text-white text-center">
      <p>Your favorite list is empty...</p>
      <p>
        You can add the movies you want to watch later to your favorites list by clicking on the
        'Add to Favorites' button.
      </p>
    </div>
    <div class="movie-items" v-else>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mx-3 lg:mx-0 py-5">
        <div v-for="movie in store.favorites" :key="movie.id">
          <MovieCart :movie="movie" :removeFromFav="removeFromFav" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import MovieCart from '@/components/MovieCart.vue'
  import { useMoviesStore } from '@/stores/movies'
  import { useRouter } from 'vue-router'
  import { onMounted } from 'vue'

  const store = useMoviesStore()
  const router = useRouter()

  window.document.title = 'Favorites'

  const removeFromFav = (id) => {
    store.removeFromFavorites(id)
  }
</script>
