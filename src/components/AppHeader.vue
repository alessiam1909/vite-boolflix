

<script>

export default {
    data(){
        return{
            cerca:''
        }
    },
    methods:{
        ricerca(){
            console.log(this.cerca)
            this.$emit('search', this.cerca)
            this.$emit('cerca', this.cerca)
        },
        
    }
}
</script>

<template lang="">
    <div class="row">
            <div class="contenitore-logo">
                <img src="https://images-ext-2.discordapp.net/external/CzVIdG9OzuWDdzsXO6HK4SayTOlC8QSEdV1Edt0qP8w/https/image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="logo-app">
                <ul>
                    <li><a href=""> Home</a></li>
                    <li><a href="">Serie Tv</a> </li>
                    <li><a href=""> Film </a></li>
                    <li><a href=""> Originali Netflix</a></li>
                </ul>
            </div>
            <div class="form">
                <input type="search" placeholder="Cerca il tuo film o serie" v-model="cerca" @keyup.enter="ricerca()">
                <button @click="ricerca()">Cerca</button>
            </div>
        </div>
</template>

<style lang="scss">
    @use '../styles/generals.scss' as *;
    @use '../styles/partials/variables' as *; 
    @use '../styles/partials/mixins' as *; 

        .row{
            @include center;
            margin: 30px auto;
            width: 90%;

            .contenitore-logo{
                @include center;

                img{
                    width: 100px;
                    height: 30px;
                    margin-right: 50px;
                }

                ul{
                    display: flex;
                    list-style-type: none;

                    li{
                        padding: 10px;
                        

                        a{
                            text-decoration: none;
                            color: rgb(145, 143, 143);
                            padding: 20px 10px;
                            font-size: 23px;
                            
                            &:hover, &:active, &:focus{
                                color: white;
                            }
                        }
                        
                    }
                }
            }

            .form{
                width: 30%;

                input{
                    width: 70%;
                    height: 40px;
                    border: 1px solid black;
                    border-radius: 20px;
                    padding-left: 20px;


                    &:active, &:focus{
                        border: 2px solid red;
                        outline: none;
                    }
                }

                button{
                    width: 15%;
                    height: 40px;
                    background-color: white;
                    color: black;
                    margin-left: 30px;
                    border-radius: 20px;
                    border: 1px solid black;

                    &:active{
                        border: 2px solid black;
                    }
                    &:hover{
                        background-color: red;
                        color: white;
                        transition: all 1s ;
                    }
                }
            }
        }
</style>