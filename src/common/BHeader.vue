<template>
<!-- 头部 -->
    <div class="header">
        <nav class="navbar navbar-custom">
            <div class="navbar-header">
                <a href="javascript:;" class="navbar-brand">
                    <i class="fa fa-navicon"></i>
                </a>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-bell"></i>
                        <span class="badge">8</span>
                    </a>
                </li>
                <li>
                    <router-link to="/profile">
                        <i class="fa fa-user"></i>
                        个人中心
                    </router-link>
                </li>
                <li>
                    <a href="javascript:;" @click='logout'>
                        <i class="fa fa-sign-out"></i>
                        退出
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-tasks"></i>
                    </a>
                </li>
            </ul>
        </nav>          
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    created(){
        
    },
    methods: {
        logout:function(){
            let _this = this
            console.log(this.$route);
            let api = '/api/logout'
            $.post(api,function(info){
                 if(info.code === '200'){
                     _this.$router.push('/login')
                 }
            })
        }
    }
}
</script>


<style scoped>

</style>
