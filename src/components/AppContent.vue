<script>
import { store } from '../store.js'
import AppCard from './AppCard.vue'
import AppSerie from './AppSerie.vue'
import axios from 'axios'
export default {
    components :{
        AppCard,
        AppSerie
    },
    data(){
        return{
            store,
            cerca :'',
        }
    },
    
    methods:{
        ricercaFilm(cerca){
            let api = `${store.apiMovie}${store.api_key}${cerca}`;
            axios.get(api).then((response => {
                store.movieList = response.data.results
            }))
        },
        ricercaSerie(cerca){
            let apiSerie = `${store.apiSerie}${store.api_key}${cerca}`;
            axios.get(apiSerie).then((response => {
                store.serieList = response.data.results
            }))
        },
        ricercaTutto(cerca){
            this.ricercaSerie(cerca);
            this.ricercaFilm(cerca);
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="form">
                <input type="search" placeholder="Cerca il tuo film o serie" v-model="cerca" @keyup.enter="ricercaTutto(cerca)">
                <button @click="ricercaTutto(cerca)">Cerca</button>
            </div>
        </div>
        <div class="film-trovati">
            <p>Sono presenti {{store.movieList.length}} film</p>
        </div>
        <div class="row-film">
            <AppCard v-for="(item, index) in store.movieList" :key="index" :card="item" class="card"/>
            <AppSerie v-for="(item, index) in store.serieList" :key="index" :cardSerie="item" class="card"/>
        </div>
        
    </div>
</template>

<style lang="scss">

    .container{
        width: 90%;
        margin: 0 auto;

        .row-film{
            display: flex;
            flex-wrap: wrap;

            .card{
                width: calc(100% / 5);
            }
        }
    }
    
</style>