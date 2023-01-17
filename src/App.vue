<script>
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'
import AppCard from './components/AppCard.vue'
import { store } from './store.js';

export default{
  components: {
    AppHeader,
    AppContent,
    AppCard
  },
  data(){
    return{
      store
    }
  }
}

</script>

<template>
  <div>
    <AppHeader/>
    <AppContent/>
    <AppCard/>
  </div>
</template>

<style lang="scss">
   @use './styles/generals.scss' as *
</style>
