<template>
  <div @click="goToMovieDetail(movie.id)" class="cursor-pointer text-white">
    <img
      class="rounded-t-md"
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      alt="movie.title"
    />
    <div class="bg-slate-600 w-full p-3 text-sm lg:text-base rounded-b-md">
      <p>
        <StarIcon />
        {{ movie.vote_average.toFixed(1).toString() }}
      </p>
      <h1 class="text-base lg:text-lg lg:font-medium truncate my-2">
        {{ movie.title }}
      </h1>
      <p class="text-xs lg:text-sm text-slate-300">
        {{ new Date(movie.release_date).toLocaleDateString('en-US', options) }}
      </p>
      <div v-if="removeFromFav">
        <button @click.stop="removeFromFav(movie.id)" class="w-full bg-red-800 hover:bg-red-700 py-2 mt-2 rounded-md transition-all duration-300 text-sm">
          Remove from Favorites
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import StarIcon from '@/assets/icons/StarIcon.vue'

  export default {
    props: {
      movie: {
        type: Object,
        required: true
      },
      removeFromFav: {
        type: Function,
        required: false
      }
    }
  }
</script>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const options = { year: 'numeric', month: 'long', day: 'numeric' }

  const goToMovieDetail = (id) => {
    router.push({ name: 'MovieDetail', params: { id } })
  }
</script>
