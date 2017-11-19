<template>
    <div class="body course-category">
        <!-- 面包屑 -->
        <ol class="breadcrumb">
            <li><a href="javascript:;">课程管理</a></li>
            <li class="active">课程分类</li>
        </ol>
        <div class="page-title">
            <a href="./course_category_add.html" class="btn btn-success btn-sm pull-right">添加分类</a>
        </div>
        <div class="panel panel-default">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th width="18%">分类名称</th>
                        <th>课程数量</th>
                        <th>是否显示</th>
                        <th>排序</th>
                        <th width="10%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list"  :class="{active:item.cg_pid == 0}">
                        <td v-if="item.cg_pid != 0" class="text-left">&nbsp;&nbsp;├ {{item.cg_name}}</td>
                        <td v-else class="text-left">{{item.cg_name}}</td>
                        <td>{{item.total}}</td>
                        <td v-if="item.cg_is_hide==1">是</td>
                        <td v-else>否</td>
                        <td>{{item.cg_order}}</td>
                        <td>
                           <Button size="small" type="success" >
                                        <router-link 
                                        v-bind="{to:'/category/list/'+item.tc_id}"
                                        class="acolor" >
                                             编辑
                                        </router-link>                                     
                                    </Button>
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import $ from "jquery"
export default {
    data(){
        return{
            list:[]
        }
    },
  components: {},
  created(){
      console.log("2222")
      this.getCategory()
  },
  methods:{
       getCategory(){
           $.get('/api/category',(data)=>{
               console.log(data);
               this.list = data.result
           })
       }
  }
};
</script>


<style scoped>

</style>
