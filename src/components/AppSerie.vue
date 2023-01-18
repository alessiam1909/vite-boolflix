
<script>
import { store } from '../store';
export default {
    props:{
       cardSerie : Object 
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
        <img :src="`https://www.themoviedb.org/t/p/w500/${(cardSerie.poster_path)}`" :alt="cardSerie.name" class="img-card">
        <h4>{{cardSerie.name}}</h4>
        <p> Titolo originale: {{cardSerie.original_name}}</p>
        <p> Voto: {{cardSerie.vote_average}}</p>
        <p> Lingua originale: {{cardSerie.original_language}}</p>
        <img :src="`https://www.countryflagicons.com/FLAT/64/${cardSerie.original_language.toUpperCase()}.png`" >
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