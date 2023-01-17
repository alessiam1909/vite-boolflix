import { reactive } from 'vue'

export const store = reactive({
    apiKey: 'dfa9f536819a6b4a63a7a0aee00d2462',
    apiMovie: 'https://api.themoviedb.org/3/search/movie?api_key=dfa9f536819a6b4a63a7a0aee00d2462&language=en-US&query=',
    movieList: []
});