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
        <img :src="`https://www.themoviedb.org/t/p/w500/${(card.poster_path)}`" :alt="card.title">
        <h4>{{card.title}}</h4>
        <p> Titolo originale: {{card.original_title}}</p>
        <p> Voto: {{card.vote_average}}</p>
        <p> Lingua originale: {{card.original_language}}</p>
    </div>
</template>

<style lang="scss">
    @use '../styles/partials/variables' as *; 
    @use '../styles/partials/mixins' as *; 
</style>