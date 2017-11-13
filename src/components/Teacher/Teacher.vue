<template>
    <div class="main">
        <div class="container-fluid">
            <!-- 头部 -->
            <BHeader />
            <!-- 讲师列表 -->
            <router-view />
            
        </div>
    </div>
</template>

<script>
import BHeader from '../../common/BHeader'
export default {
    components:{
        BHeader
    }
}
</script>


<style scoped>

</style>
