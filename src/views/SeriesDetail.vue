<template>
  <div v-if="series" class="series-detail">
    <h1>{{ series.title }}</h1>
    <p>Год: {{ series.year }}</p>
    <p>Рейтинг: {{ series.rating }}</p>
  </div>
  <div v-else>
    Сериал не найден
  </div>
</template>

<script>
import { fetchSeriesById } from '@/api/series'

export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      series: null
    }
  },
  async created() {
    this.series = await fetchSeriesById(this.id)
  }
}
</script>

<style scoped>
.series-detail {
  padding: 20px;
}
</style>