<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>
import 'iview/dist/styles/iview.css'
import './assets/bootstrap/css/bootstrap.css'
import './assets/font-awesome/css/font-awesome.css'
import './assets/index/index.css'
import './assets/nprogress.css'
import nprogress from 'nprogress'
export default {
  name: 'app',
  components:{
  },
  created(){
    nprogress.start();
    setTimeout(function(){
      nprogress.done();
    },200)
  }
}
</script>

<style>
#app {

}
</style>