<script>
import { store } from '../store.js'
import AppCard from './AppCard.vue'
import axios from 'axios'
export default {
    components :{
        AppCard
    },
    data(){
        return{
            store,
            cercaFilm :'',
        }
    },
    
    methods:{
        ricercaFilm(input){
            let api = store.apiMovie + input;
            axios.get(api).then((response => {
                store.movieList = response.data.results
            }))

        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="form">
                <input type="search" placeholder="Cerca il tuo film o serie" v-model="cercaFilm" @keyup.enter="ricercaFilm(cercaFilm)">
                <button @click="ricercaFilm(cercaFilm)">Cerca</button>
            </div>
        </div>
        <div class="film-trovati">
            <p>Sono presenti {{store.movieList.length}} film</p>
        </div>
        <div class="row-film">
            <AppCard v-for="(item, index) in store.movieList" :key="index" :card="item"/>
        </div>
        
    </div>
</template>

<style lang="scss">
    
</style>