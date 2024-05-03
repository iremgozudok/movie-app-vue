import { defineStore } from 'pinia'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM1NjA2OGUyODFmNTM2NmMxM2E0ZjRmOGFjN2E1NiIsInN1YiI6IjY2MzM1NWJiYTFjNTlkMDEyNmU2Y2YyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qkyGCgSK9HIWB_74atvst-k3y5h5kWYINjuRQXTJIIo'
  }
}

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    search: '',
    movies: [],
    favorites: [],
    genres: []
  }),
  actions: {
    fetchMovies() {
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then((response) => response.json())
        .then((data) => (this.movies = data.results))
        .catch((err) => console.error(err))
    },
    fetchGenres() {
      fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then((response) => response.json())
        .then((response) => (this.genres = response.genres))
        .catch((err) => console.error(err))
    },
    addToFavorites(movie) {
      this.favorites.push(movie)
    },
    removeFromFavorites(id) {
      this.favorites = this.favorites.filter((fav) => fav.id !== id)
    },
    searchMovies(search, movies) {
      this.movies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.value.toLowerCase())
      )
    }
  }
})
