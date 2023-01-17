<script>
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'

import { store } from './store.js';

export default{
  components: {
    AppHeader,
    AppContent,
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
    
  </div>
</template>

<style lang="scss">
   @use './styles/generals.scss' as *
</style>
