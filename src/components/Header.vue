<template>
    <header class="app-header" :class="{ 'hidden': !visible }">
      <div class="header-content">
        <router-link to="/catalog" class="logo-link">
          <h1 class="logo">Films.py</h1>
        </router-link>
        
        <a 
        >
        </a>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        visible: true,
        lastScrollPosition: 0
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          return
        }
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
          return
        }
        this.visible = currentScrollPosition < this.lastScrollPosition || currentScrollPosition < 100
        this.lastScrollPosition = currentScrollPosition
      }
    }
  }
  </script>
  
  <style scoped>
  .app-header {
    background-color: rgb(53, 8, 234);
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
  }
  
  .app-header.hidden {
    transform: translateY(-100%);
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .logo-link {
    text-decoration: none;
    color: inherit;
  }
  
  .logo {
    margin: 0;
    color: #42b983;
    font-size: 2rem;
    transition: color 0.3s;
  }
  
  .logo:hover {
    color: #e62281;
  }
  
  .github-link {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s;
  }
  
  .github-link:hover {
    color: #42b983;
  }
  
  .fab {
    font-size: 1.5rem;
  }
  </style>