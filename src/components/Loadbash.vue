<template>
      <!-- 主体 -->
    <div>
        <AsideBar />
        <div class="main">
            <div class="container-fluid">
                <!-- 头部 -->
                <BHeader />
                <!-- 讲师列表 -->
                <router-view />  
            </div>
        </div>
    </div>
    
</template>

<script>
import AsideBar from  '../components/AsideBar'
import BHeader from '../common/BHeader'
export default {

  components:{
      BHeader,
      AsideBar
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
