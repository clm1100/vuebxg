<template>
<div class="body course-add">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">课程管理</a></li>
                    <li class="active">课程添加</li>
                </ol>
                <div class="steps">
                    <!-- 摘要 -->
                    <div class="brief">
                        <div class="thumb">
                            <img :src="obj.tc_avatar" :onerror="defaultImg">                           
                        </div>
                        <dl class="info">
                            <dt>{{obj.cs_name}}</dt>
                            <dd>讲师：{{obj.tc_name||'未设置'}}</dd>
                        </dl>
                    </div>
                    <!-- 步聚 -->
                    <ul class="forwards list-unstyled">
                        <li>
                            <a href="./course_add_step1.html" class="active">
                            <b>1</b>
                            基本信息
                            </a>
                        </li>
                        <li>
                            <a href="./course_add_step2.html">
                            <b>2</b>
                            课程图片
                            </a>
                        </li>
                        <li>
                            <a href="./course_add_step3.html">
                            <b>3</b>
                            课时管理
                            </a>
                        </li>
                    </ul>
                    <!-- 基本信息 -->
                    <div class="content">
                        <!-- 标题 -->
                        <div class="title">
                            <h5>基本信息 <small>BASIC INFORMATION</small></h5>
                        </div>
                        <form action="" class="basic form-horizontal">
                            <div class="form-group">
                                <label for="" class="col-md-2 control-label">标题</label>
                                <div class="col-md-8">
                                    <input 
                                    type="text" 
                                    class="form-control input-sm" 
                                    v-model="obj.cs_name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-md-2 control-label">课程描述</label>
                                <div class="col-md-8 ckeditor">
                                     <vue-editor v-model="obj.cs_brief"></vue-editor>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-md-2 control-label">讲师</label>
                                <div class="col-md-8">
                                    <select
                                    v-model="obj.cs_tc_id" 
                                    name="" 
                                    class="form-control input-sm">
                                        <option value="0">请选择</option>
                                        <option 
                                        v-for="item in teacher"
                                         :value="item.tc_id"
                                         >{{item.tc_name}}
                                         </option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-md-2 control-label">分类</label>
                                <div class="col-md-8">
                                    <select
                                    @change="getChild" 
                                    v-model="obj.cs_cg_pid"
                                    name="" 
                                    class="form-control input-sm">
                                        <option value="0">请选择</option>
                                        <option 
                                        v-for="item in obj.category.top"
                                         :value="item.cg_id"
                                         >{{item.cg_name}}
                                         </option>
                                    </select>
                                    <select 
                                    v-model="obj.cs_cg_id"
                                    name="" 
                                    class="form-control input-sm">
                                        <option value="0">请选择</option>
                                        <option
                                        v-for="item in childid" 
                                        :value="item.cg_id">{{item.cg_name}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-md-2 control-label">标签</label>
                                <div class="col-md-8">
                                    <input type="text" class="form-control input-sm">
                                    <p class="help-block">将会应用于按标签搜索课程、相关课程的提取等</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-10">
                                    <a href="./course_add_step2.html" class="btn btn-success btn-sm pull-right">保 存</a>
                                </div>                          
                            </div>
                        </form>
                    </div>
                </div>
            </div>
</template>

<script>
import $ from 'jquery'
import { VueEditor } from 'vue2-editor'
function p(url,data){
    return new Promise(function(resolve, reject){
        $.get(url,data).then((data)=>{
            resolve(data)
        })
    })
}
export default {
    data(){
        return {
            teacher:{
                tc_id:'0'
            },
            defaultImg: 'this.src="' + require('../../assets/images/course.png') + '"',
            obj:{
                cs_cg_pid:0,
                cs_cg_id:'0',
                cs_tc_id:'0',
                category:{
                    top:''
                },
                cs_brief:'',
                tc_avatar:'',
                cs_id:this.$route.params.id
            },
            childid:[]
        }
    },
    created(){
        console.log(this.$route.params.id)
        // this.getCouresdata();
        this.getAlldata()
    },
    components:{
        VueEditor
    },
    methods:{
        getAlldata(){
            Promise.all([
                p('/api/teacher'),
                p('/api/course/basic',{cs_id:this.obj.cs_id})
            ]).then((results)=>{
                console.log(results);
                if(results[0].code==200&&results[1].code==200){
                    this.teacher = results[0].result;
                    this.obj = results[1].result
                }
            })
        },
        getChild(ele){
            // console.log(this.obj.cs_cg_id);
            this.obj.cs_cg_id= "0"
            console.log(ele.target.value)
            var url = '/api/category/child'
            $.get(url,{cg_id:ele.target.value}).then((data)=>{
                console.log(data);
                this.childid = data.result
            })            
        }

    }
}
</script>


<style scoped>

</style>