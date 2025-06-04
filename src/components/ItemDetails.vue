<template>
  <div class="details-container" v-if="movie">
    <button @click="$router.back()" class="back-button">← Назад</button>
    <div class="movie-details">
      <div v-if="movie.image" class="detail-image-container">
        <img 
          :src="`/images/${movie.image}`" 
          :alt="`Постер фильма ${movie.title}`"
          class="detail-image"
        >
      </div>
      <div v-else class="detail-image-placeholder">
        {{ movie.title.charAt(0).toUpperCase() }}
      </div>

      <div class="detail-info">
        <h1>{{ movie.title }}</h1>
        <p><strong>Год:</strong> {{ movie.year }}</p>
        <p><strong>Режиссер:</strong> {{ movie.director }}</p>
        <p><strong>Жанр:</strong> {{ movie.genre }}</p>
        <p><strong>В ролях:</strong></p>{{ movie.starring }}
        <p><duration>Продолжительность:</duration></p>{{ movie.duration }}
       <p><plot>Сюжет</plot></p>{{ movie.plot }}
       <p class="full-desc">{{ movie.fullDesc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import movies from '@/data/movies.json'

export default {
  props: ['id'],
  computed: {
    movie() {
      return movies.find(m => m.id === parseInt(this.id))
    }
  }
}
</script>

<style scoped>
.details-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.back-button {
  background: #02530760;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;
  transition: background-color 0.3s;
}

.back-button:hover {
  background: #e85555;
}

.movie-details {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.detail-image-container {
  flex: 0 0 300px;
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgb(0, 0, 0);
}

.detail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.detail-image-container:hover .detail-image {
  transform: scale(1.03);
}

.detail-info {
  flex: 1;
  min-width: 300px;
}

.detail-info h1 {
  margin-top: 0;
  color: #0e0e0e;
}

.detail-info p {
  margin: 8px 0;
  font-size: 16px;
}

.detail-info strong {
  color: #090909;
}

.full-desc {
  line-height: 1.6;
  font-size: 16px;
  margin-top: 20px;
  color: #000000;
}

@media (max-width: 768px) {
  .movie-details {
    flex-direction: column;
  }
  
  .detail-image-container,
  .detail-image-placeholder {
    flex: 1 1 auto;
    width: 100%;
    max-height: 400px;
  }
}
</style>