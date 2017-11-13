<template>
 <!-- 侧边栏 -->
    <div class="aside">
        <!-- 个人资料 -->
        <div class="profile">
            <!-- 头像 -->
            <div class="avatar img-circle">
                <img src="../assets/avatar.jpg">
            </div>
            <h4>布头儿</h4>
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
                        <li>
                            <router-link to="/course/category">
                                 课程分类
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/course/topic">
                                 课程专题
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
      show:false
    }
  },
  created(){

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
