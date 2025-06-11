<template>
  <div class="series-filter">
    <input 
      v-model="searchQuery" 
      placeholder="Поиск сериалов..." 
      @input="updateFilter"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    updateFilter() {
      this.$emit('filter', { search: this.searchQuery })
    }
  }
}
</script>

<style scoped>
.series-filter {
  padding: 20px;
  background: #f5f5f5;
}
.series-filter input {
  padding: 8px 12px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>