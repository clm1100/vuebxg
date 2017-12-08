<template>
<!-- 面包屑 -->
        <div class="body course-category">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">课程管理</a></li>
                    <li class="active">课程分类</li>
                </ol>
                <div class="category-add">
                    <form @submit.prevent="updateCategory" class="form-horizontal">
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
                                <select v-model="obj.cg_pid"  name="" class="form-control input-sm">
                                    <option value="0">顶级分类</option>
                                    <option  :value="item.cg_id" v-for="item in obj.top" value="">{{item.cg_name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-4 control-label">排序</label>
                            <div class="col-md-1">
                                <input type="text" class="form-control input-sm" value="10">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-4 control-label">是否显示</label>
                            <div class="col-md-3">
                                <label class="checkbox-inline">
                                    <input type="radio" v-model="obj.cg_is_hide" value="0"> 是
                                </label>
                                <label class="checkbox-inline">
                                    <input type="radio" v-model="obj.cg_is_hide" value="1"> 否
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-8">
                                <button
                                 class="btn btn-success btn-sm pull-right">
                                 保存
                                </button>
                            </div>                          
                        </div>
                    </form>
                </div>
            </div>
        
</template>

<script>
import { Button } from "iview";
import $ from 'jquery'
export default {    
    data(){
        return {
            id:this.$route.params.id,
            obj:{}
        }
    },
    created(){
        this.getCategory()
    },
    methods:{
        getCategory(){
            $.get('/api/category/edit',{cg_id:this.id}).then((data)=>{
                console.log(data)
                this.obj = data.result
            })
        },
        updateCategory(){
            let url = '/api/category/modify'
            let obj = Object.assign({},this.obj)
            delete obj.top
            console.log(obj)
            $.post(url,obj).then((data)=>{
                console.log(data)
                this.$router.push('/category/list');
            })
            
        }
    }
}
</script>


<style scoped>

</style>