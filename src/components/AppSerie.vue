
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
    },
    methods:{
        getFlags(){
            let flags = `https://www.countryflagicons.com/FLAT/64/${this.cardSerie.original_language.toUpperCase()}.png`
            if ( this.cardSerie.original_language == "en"){
                this.cardSerie.original_language = "gb"
            } else if (this.cardSerie.original_language == "ja"){
                this.cardSerie.original_language = "jp"
            }else if (this.cardSerie.original_language == "ko"){
                this.cardSerie.original_language = "kr"
            }

            return flags
        },
        imageEmpty(){
            if (this.cardSerie.poster_path != null){
                return `https://image.tmdb.org/t/p/w342/${(this.cardSerie.poster_path)}`
            } else{
                return "https://vignette.wikia.nocookie.net/hellsing/images/2/26/Immagine_non_disponibile.jpg/revision/latest?cb=20150610113249&path-prefix=it"
            }
        },
        titleEmpty(){
            if (this.cardSerie.original_name != null){
                return `Titolo originale: ${this.cardSerie.original_name}`
            } else{
                return ''
            }
        }
    }
}
</script>

<template lang="">
    <div class="card">
        <img :src="imageEmpty()" :alt="cardSerie.name" class="img-card">
        <div class="info">
            <h4>{{cardSerie.name}}</h4>
            <p> {{titleEmpty()}}</p>
            <div> 
                <span>Voto: </span>
                <i class="fa-solid fa-star stella-piena"  v-for="(item, index) in Math.floor(cardSerie.vote_average / 2)" ></i>
                <i class="fa-regular fa-star stella-vuota"  v-for="(item, index) in (5 - Math.floor(cardSerie.vote_average / 2))" ></i>
            </div>
            <p> Lingua originale: {{cardSerie.original_language}}</p>
            <img :src="getFlags()" >
        </div>
    </div>
</template>

<style lang="scss">
    @use '../styles/generals.scss' as *;
    @use '../styles/partials/variables' as *; 
    @use '../styles/partials/mixins' as *; 

    .card{
    border-radius: 15px;
    padding: 1em;
    margin: 1em;
    background: white;
    position: relative;
    display: flex;
    align-items: flex-end;
    align-items: stretch;
    transition: 0.4s ease-out;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
    border-color: black;
    &:hover{
        transform: translateY(-20px);
        &:before{
            opacity: 1
        }
        .info {
        opacity: 1;
        transform: translateY(0px);
        }
    }
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background: rgba(0, 0, 0, 0.6);
        z-index: 2;
        transition: 0.5s;
        opacity: 0;
    }
    .img-card {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 15px;
    }
    .info {
        position: relative;
        z-index: 3;
        color: white;
        opacity: 0;
        padding-top: 300px;
        transform: translateY(30px);
        transition: 0.5s;

        .stella-piena, .stella-vuota{
                color: rgb(255, 238, 5);
            }
    }
}
</style>