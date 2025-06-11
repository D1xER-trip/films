<template>
  <router-link 
    :to="{ name: 'series-detail', params: { id: series.id } }" 
    class="series-item"
  >
    <h3>{{ series.title }}</h3>
    <p>Год: {{ series.year }}</p>
  </router-link>
</template>

<script>
export default {
  props: {
    series: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.series-item {
  display: block;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
}
.series-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>