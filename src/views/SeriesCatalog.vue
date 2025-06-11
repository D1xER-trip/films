<template>
  <div class="series-catalog">
    <SeriesFilter @filter="applyFilter" />
    <SeriesList :series="filteredSeries" />
  </div>
</template>

<script>
import SeriesList from '@/components/SeriesList'
import SeriesFilter from '@/components/SeriesFilter'
import { fetchSeries } from '@/api/series'

export default {
  components: { SeriesList, SeriesFilter },
  data() {
    return {
      series: [],
      filters: {
        search: '',
        year: null,
        rating: null
      }
    }
  },
  computed: {
    filteredSeries() {
      return this.series.filter(series => {
        
        const matchesSearch = series.title.toLowerCase().includes(this.filters.search.toLowerCase())
        
        
        return matchesSearch
      })
    }
  },
  async created() {
    this.series = await fetchSeries()
  },
  methods: {
    applyFilter(filters) {
      this.filters = { ...this.filters, ...filters }
    }
  }
}
</script>