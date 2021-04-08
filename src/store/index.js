import { createStore } from 'vuex'

import { SET_NOTE } from '@/store/mutation-types';

// Create a new store instance.
const store = createStore({
  state: {
    currentMovie: {},
    movies: [{
      id: 1,
      title: "Arrietty : Le Petit Monde des Chapardeurs",
      image: require('@/assets/movies/arrietty.jpg'),
      note: 3,
    },
    {
      id: 2,
      title: "Le Château Ambulant",
      image: require('@/assets/movies/chateau_ambulant.jpg'),
      note: 5,
    },
    {
      id: 3,
      title: "Le Voyage de Chihiro",
      image: require('@/assets/movies/chihiro.jpg'),
      note: 5,
    },
    {
      id: 4,
      title: "Kiki la Petite Sorcière",
      image: require('@/assets/movies/kiki.jpg'),
      note: 4,
    },{
      id: 5,
      title: "Le Vent se lève",
      image: require('@/assets/movies/le_vent_se_leve.jpg'),
      note: 5,
    },
    {
      id: 6,
      title: "Porco Rosso",
      image: require('@/assets/movies/porco_rosso.jpg'),
      note: 4,
    },
    {
      id: 7,
      title: "Princesse Mononoké",
      image: require('@/assets/movies/princesse_mononoke.jpg'),
      note: 5,
    },
    {
      id: 8,
      title: "Mon voisin Totoro",
      image: require('@/assets/movies/totoro.jpg'),
      note: 4,
    }]
  },
  getters: {
    getMovies(state) {
      return state.movies;
    },
    getCurrentMovie(state) {
      return state.currentMovie;
    }
  },
  mutations: {
    setCurrentMovie (state, movie) {
      state.currentMovie = movie;
    },
    setCurrentMovieVersionMutation (state, movieId) {
      let movieFound = {};
      state.movies.forEach((movie) => {
        if (movieId == movie.id) {
          movieFound = movie;
        }
      });
      state.currentMovie = movieFound;
    },
    [SET_NOTE] (state, note) {
      state.currentMovie.note = note;
    }
  },
  actions: {
    setCurrentMovie ({commit, state}, movieId) {
      let movieFound = {};
      state.movies.forEach((movie) => {
        if (movieId == movie.id) {
          movieFound = movie;
        }
      })
      commit('setCurrentMovie', movieFound);
    }
  }
})

export default store;