<template>
 <!-- 侧边栏 -->
    <div class="aside">
        <!-- 个人资料 -->
        <div class="profile">
            <!-- 头像 -->
            <div class="avatar img-circle">
                  <img :src="tc_avatar" :onerror="defaultImg">
            </div>
            <h4 v-text="tc_name"></h4>
        </div>
        <!-- 导航菜单 -->
        <div class="navs">
            <ul class="list-unstyled">
                <li>
                    <router-link  to="/home" class="active">
                        <i class="fa fa-home"></i>
                        仪表盘
                    </router-link>
                </li>
                <li>
                    <router-link to="/teacher">
                        <i class="fa fa-bell"></i>
                        讲师管理
                    </router-link>
                </li>
                <li>
                    <router-link to="/category">
                        <i class="fa fa-bell"></i>
                        分类管理
                    </router-link>
                </li>
                <li>
                    <a href="javescript:;" @click="showOrHide">
                        <i class="fa fa-cog"></i>
                        课程管理
                        <i class="arrow fa fa-angle-right"></i>
                    </a>
                    <ul class="list-unstyled" v-bind:style="{display:(show?'block':'none')}">
                        <li>
                            <router-link to="/course/add">
                                 课程添加
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/course/list">
                                 课程列表
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      show:false,
      tc_name:'',
      tc_avatar:'',
      defaultImg: 'this.src="' + require('../assets/avatar.jpg') + '"'
    }
  },
  created(){
    this.tc_name=JSON.parse(this.$cookie.get('userInfo')||'{}').tc_name,
    this.tc_avatar=JSON.parse(this.$cookie.get('userInfo')||'{}').tc_avatar
},
  mounted(){
      
  },
  methods:{
      showOrHide:function(){
          this.show = !this.show
      }
  }
}
</script>


<style scoped>

</style>
