<template>
  <div class="catalog-view">
    <h1>Каталог фильмов</h1>
    <SearchBar v-model="searchTerm" />
    <div class="movies-container">
      <CatalogItem v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import movies from '@/data/movies.json'
import CatalogItem from '@/components/CatalogItem.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  components: {
    CatalogItem,
    SearchBar
  },
  setup() {
    const searchTerm = ref('')

    const filteredMovies = computed(() => {
      if (!searchTerm.value) return movies
      const term = searchTerm.value.toLowerCase()
      return movies.filter(movie => 
        movie.title.toLowerCase().includes(term) ||
        movie.genre.toLowerCase().includes(term)
      )
    })

    return {
      searchTerm,
      filteredMovies
    }
  }
}
</script>

<style scoped>
.catalog-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.movies-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
}
</style>