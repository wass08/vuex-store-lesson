<template>
  <h1>Ghibli Movies</h1>
  <rou class="movies">
    <router-link :to="{name: 'movie', params : { id : movie.id}}" class="movie" v-for="(movie, idx) in movies" :key="idx">
      <div class="movie__image" :style="{backgroundImage: 'url(\'' + movie.image + '\')'}"/>
      <h2 class="movie__title">{{movie.title}}</h2>
      <div class="movie__note">
        <span v-for="i in 5" :key="i" :class="{'movie__star': true, 'movie__star--dark' : i > movie.note}">⭐</span>
      </div>
    </router-link>
  </rou>
</template>
<script>


export default {
  name: 'Movies',
  computed:  {
    movies() {

      // Direct access
      // return this.$store.state.movies;

      // Getters
      return this.$store.getters.getMovies;
    }
  }
}
</script>
<style scoped>
.movies {
  display:grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap:32px;
  padding:32px;
  max-width: 600px;
  margin: 0 auto;
}

.movie {
  flex:1;
  text-decoration: none;
  opacity:0.82;
  transition: opacity .2s;
}

.movie:hover {
  opacity: 1;
}

.movie__image {
  max-width: 100%;
  height:0;
  padding-bottom: 155%;
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
}

.movie__title {
  font-size: 16px;
  font-weight: 200;
  padding: 8px;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color:white;
}

.movie__star {
  text-shadow: 0 0 8px #ffdc188c, 0 0 16px #ffffff54;
}

.movie__star--dark {
  opacity:0.5;
  text-shadow: none;
}
</style>