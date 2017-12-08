<template>
  <!-- 主体 -->
   <div class="body course-category">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">课程管理</a></li>
                    <li class="active">课程分类</li>
                </ol>
                <div class="category-add">
                    <form @submit.prevent = "createCategory" action="" class="form-horizontal">
                        <div class="form-group">
                            <label for="" class="col-md-4 control-label">名称</label>
                            <div class="col-md-3">
                                <input 
                                v-model="obj.cg_name"
                                type="text"
                                 class="form-control input-sm" 
                                 placeholder="填写分类名称">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-4 control-label">级别</label>
                            <div class="col-md-2">
                                <select v-model="obj.cg_pid" name="" class="form-control input-sm">
                                    <option value=0>顶级分类</option>
                                    <option 
                                    v-for="item in list"
                                    :value="item.cg_id">
                                    {{item.cg_name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-4 control-label">排序</label>
                            <div class="col-md-1">
                                <input 
                                type="text" 
                                class="form-control input-sm" 
                                v-model="obj.cg_order">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-4 control-label">是否显示</label>
                            <div class="col-md-3">
                                <label class="checkbox-inline">
                                    <input value="1" name="cg_is_hide" type="radio" v-model="obj.cg_is_hide" > 是
                                </label>
                                <label class="checkbox-inline">
                                    <input value="0" name="cg_is_hide" type="radio" v-model="obj.cg_is_hide"> 否
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-8">
                                <button  class="btn btn-success btn-sm pull-right">保存</button>
                            </div>                          
                        </div>
                    </form>
                </div>
            </div>
</template>

<script>
import $ from 'jquery'
export default {
    components:{
    },
    data(){
        return{
            obj:{
                cg_pid:"0",
                cg_is_hide:'1'
            },
            list:[]
        }
    },
    methods:{
        getCategory(){
            var url = '/api/category/top'
            $.get(url).then((data)=>{
                console.log(data)
                this.list = data.result
            })
        },
        createCategory(){
            var url = '/api/category/add'
            console.log(this.obj);
            $.post(url,this.obj).then((data)=>{
                if(data.code=="200"){
                    this.$router.push('/category/list')
                }
            })
        }
    },
    created(){
        this.getCategory()
    }
}
</script>


<style scoped>

</style>
