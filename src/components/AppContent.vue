<script>
import { store } from '../store.js'
import AppCard from './AppCard.vue'
import AppPopolari from './AppPopolari.vue'
import AppHeader from './AppHeader.vue'
import AppSerie from './AppSerie.vue'
import axios from 'axios'
export default {
    components :{
        AppCard,
        AppSerie,
        AppHeader,
        AppPopolari
    },
    data(){
        return{
            store,
            cerca: ''
        }
    },
    created(){
        this.elementiIniziali()
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
        },
        elementiIniziali(){
            if (this.cerca == ''){
                axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=dfa9f536819a6b4a63a7a0aee00d2462').then((response) => {
                    store.popolari = response.data.results
                    
                })
            }
        }
    }
}
</script>

<template lang="">
    <div class="container-card">
        <AppHeader @search="ricercaTutto" @cerca="elementiIniziali()"/>
        <div class="film-trovati">
            <p>Sono presenti {{store.movieList.length}} Film e {{store.serieList.length}} Serie Tv</p>
        </div>
        <div class="row-film">
            <AppPopolari  v-for="(item, index) in store.popolari" :key="index" :cardPopolari="item" class="card"/>
            <AppCard v-for="(item, index) in store.movieList" :key="index" :card="item" class="card"/>
            <AppSerie v-for="(item, index) in store.serieList" :key="index" :cardSerie="item" class="card"/>
        </div>
        
    </div>
</template>

<style lang="scss">

    .container-card{
        width: 100%;
        .film-trovati{
            text-align: center;
            margin: 30px 0;
        }

        .row-film{
            display: flex;
            overflow-x: auto;

           .card{
            min-width: 300px;
           }
        }
    }
    
</style>