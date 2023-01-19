<script>
import AppContent from './components/AppContent.vue'

import { store } from './store.js';

export default{
  components: {
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
    <AppContent/>
    
  </div>
</template>

<style lang="scss">
   @use './styles/generals.scss' as *
</style>
