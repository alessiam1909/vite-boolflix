<script>
import { store } from '../store';
export default {
    props:{
       card : Object 
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template lang="">
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w342/${(card.poster_path)}`" :alt="card.title" class="img-card">
        <h4>{{card.title}}</h4>
        <p> Titolo originale film: {{card.original_title}}</p>
        <p> Voto: {{card.vote_average}}</p>
        <p> Lingua originale: {{card.original_language}}</p>
        <img :src="`https://www.countryflagicons.com/FLAT/64/${card.original_language.toUpperCase()}.png`" >
    </div>
</template>

<style lang="scss">
    @use '../styles/partials/variables' as *; 
    @use '../styles/partials/mixins' as *; 

    .card{
        height: 100% ;


        .img-card{
            width: 100%;
            height: 400px;
            
        }
    }
</style>