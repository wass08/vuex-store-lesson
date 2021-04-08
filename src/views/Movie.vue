<template>
  <div class="movie">
    <div class="movie__background" :style="{backgroundImage: 'url(\'' + movie.image + '\')'}"></div>
    <div class="movie__image" :style="{backgroundImage: 'url(\'' + movie.image + '\')'}"/>
    <router-link :to="{name :'home'}" class="movie__back">← Retour</router-link>
    <h1 class="movie__title">{{movie.title}}</h1>
    <div class="movie__note">
      <span v-for="i in 5" :key="i" :class="{'movie__star': true, 'movie__star--dark' : i > movie.note}" @click="updateNote(i)">⭐</span>
    </div>
    <div v-for="(review, idx) in reviews" :key="idx">
      <review :review="review"/>
    </div>
  </div>
</template>

<script>
import Review from '@/components/Review.vue'
import { SET_NOTE } from '@/store/mutation-types';

export default {
  name: 'Movie',
  props: ['id'],
  components: {
    Review,
  },
  created () {
    // mutation
    // this.$store.commit('setCurrentMovieVersionMutation', this.id);

    // action
    this.$store.dispatch('setCurrentMovie', this.id);
  },
  computed: {
    movie: function() {
      console.log(this.$store.getters.getCurrentMovie)
      return this.$store.getters.getCurrentMovie;
    }
  },
  data: function () {
    return {
      reviews : [{
        author : 'Jean Bon',
        date : 'Avant hier',
        comment : 'Génial comme film',
        note : 3,
      },
      {
        author : 'Lapin du 42',
        date : 'Il y a deux semaines',
        comment : 'Un vrai rafraichissement',
        note : 4,
      },
      {
        author : 'Minette Champlin',
        date : 'Il y a un mois',
        comment : 'Du sucre en conserve',
        note : 12,
      }]
    }
  },
  methods: {
    updateNote: function (newNote) {
      // HARDCODED NAME
      // this.$store.commit('setNote', newNote);

      // CONSTANT MUTATION
      this.$store.commit(SET_NOTE, newNote);
    }
  }
}
</script>

<style scoped>
  .movie {
    min-height: 100vh;
    max-width: 400px;
    margin: 0 auto;
    padding:32px;
  }

  .movie__back {
    color: #ececec;
    font-weight: 300;
    text-decoration: none;
    margin-top: 16px;
    display: inline-block;
  }

  .movie__image {
    max-width: 100%;
    height: 0;
    padding-bottom: 154%;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    border-radius:16px;
  }

  .movie__background {
    padding: 32px;
    background-size: cover;
    background-position: center center;
    filter: blur(8px);
    height: 400px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
  }

  .movie__title {
    font-size: 24px;
    padding: 8px;
    font-weight: normal;
    color:white;
  }

    
  .movie__star {
    text-shadow: 0 0 8px #ffdc188c, 0 0 16px #ffffff54;
  }

  .movie__star:hover {
    cursor:pointer;
  }

  .movie__star--dark {
    opacity:0.5;
    text-shadow: none;
  }

</style>