import axios from "axios"
import _uniqBy from 'lodash/uniqBy'

export default {
  namespaced: true,
  state: () => ({
    movies: [],
    message: '',
    loading: false
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
      state.message = ''
      state.loading = false
    }
  },
  actions: {
    async searchMovies({ state, commit }, payload) {
      try{
        const res = await _fetchMovie({
          ...payload,
          page: 1
        })
        const { Search, totalResults } = res.data
        console.log(res)
        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID')
        })
  
        const total = parseInt(totalResults, 10)
        const pageLenth = Math.ceil(total / 10)
  
        if (pageLenth > 1) {
          for (let page = 2; page <= pageLenth; page += 1) {
            if (page > (payload.number / 10)) break
            const res = await _fetchMovie({
              ...payload,
              page
            })
            const { Search } = res.data
            commit('updateState', {
              movies: [
                ...state.movies, 
                ..._uniqBy(Search, 'imdbID')
              ]
            })
          }
        }
      } catch (message) {
        commit('updateState', {
          movies: [],
          message
        })
      }
    }
  }
}

function _fetchMovie(payload) {
  const { title, type, year, page } = payload
  const OMDB_API_KEY = '2574b6bd' 
  const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`


  return new Promise((resolve, reject) =>{
    axios.get(url)
      .then(res => {
        if(res.data.Error) {
          reject(res.data.Error.message)
        }
        resolve(res)
      })
      .catch(err => {
        reject(err.message)
      })
  })
}