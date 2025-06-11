<template>
  <div class="movies-catalog">
    <h2>Каталог фильмов</h2>
    
    <div class="movies-list">
      <div v-for="movie in movies" :key="movie.id" class="movie-item">
        <img :src="getImageUrl(movie.poster)" :alt="movie.title" class="movie-poster">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.year }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MoviesCatalog',
  data() {
    return {
      movies: [
        {
          id: 1,
          title: 'Пираты карибского моря: Проклятье черной жемчужины',
          year: 2003,
          poster: 'pirates of the caribbean.png'
        },
        {
          id: 2,
          title: 'Пираты Карибского моря: Сундук мертвеца',
          year: 2006,
          poster: 'pirates of the caribbean2.png'
        },
        {
          id: 3,
          title: 'Пираты Карибского моря: На краю света',
          year: 2007,
          poster: 'pirates of the caribbean3.png'
        },
        {
          id: 4,
          title: 'Пираты Карибского моря: На странных берегах',
          year: 2011,
          poster: 'pirates of the caribbean4.png'
        },
        {
          id: 5,
          title: 'Пираты Карибского моря: Мертвецы не рассказывают сказки',
          year: 2017,
          poster: 'pitates of the caribbean 5.png'
        }
      ]
    };
  },
  methods: {
    getImageUrl(imageName) {
      return `/images/${imageName}`;
    }
  }
};

</script>

<style scoped>
.movies-catalog {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.movies-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.movie-item {
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.movie-item:hover {
  transform: scale(1.05);
}

.movie-poster {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.movie-item h3 {
  padding: 10px;
  margin: 0;
  font-size: 1rem;
}

.movie-item p {
  padding: 0 10px 10px;
  margin: 0;
  color: #666;
}
</style>