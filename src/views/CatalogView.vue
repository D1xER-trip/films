<template>
  <div class="home-view">
    <h1 class="welcome-title">Здравствуйте, Добро пожаловать, Приятного просмотра</h1>
    <p class="welcome-subtitle">Ваша кинотека лучших фильмов и сериалов</p>
    <div class="buttons-container">
      <router-link to="/movies" class="catalog-button">Заглянуть в каталог Фильмов</router-link>
      <router-link to="/series" class="catalog-button series-button">Заглянуть в каталог Сериалов</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 20px;
}

.welcome-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  animation: fadeInDown 1s ease;
}

.welcome-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
  animation: fadeIn 1.5s ease;
}

.buttons-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.catalog-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: background-color 0.3s, transform 0.2s;
  animation: pulse 2s infinite;
}

.series-button {
  background-color: #647eff;
  animation-delay: 0.5s;
}

.series-button:hover {
  background-color: #4d63d1;
}

.catalog-button:hover {
  background-color: #359c6d;
  transform: scale(1.05);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>