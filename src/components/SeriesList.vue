<template>
  <div class="series-list">
    <SeriesItem 
      v-for="item in series" 
      :key="item.id" 
      :series="item" 
    />
  </div>
</template>

<script>
import SeriesItem from './SeriesItem'

export default {
  components: { SeriesItem },
  props: {
    series: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.series-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>