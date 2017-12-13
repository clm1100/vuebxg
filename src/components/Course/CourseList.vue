<template>
<div class="body course-list">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">课程管理</a></li>
                    <li class="active">课程列表</li>
                </ol>
                <div class="courses" id="course">
                    <!-- 搜索 -->
                    <div class="search">
                        <form action="" class="form-inline">
                            <select name="" class="form-control input-sm">
                                <option value="">按讲师</option>
                            </select>
                            <select name="" class="form-control input-sm">
                                <option value="">按类别</option>
                            </select>
                            <select name="" class="form-control input-sm">
                                <option value="">按课时</option>
                            </select>
                            <button class="btn btn-success btn-sm">筛选</button>
                            <div class="input-group pull-right">
                                <input type="text" class="form-control input-sm">
                                <span class="input-group-btn">
                                    <button class="btn btn-success btn-sm">搜索</button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div key="item.cs_id" v-for="(item,index) in list" class="course">
                        <div class="pic">
                            <img :src="item.cs_cover" alt="">
                        </div>
                        <div class="info">
                            <router-link
                             v-bind="{to:'/course/add/step1/'+item.cs_id}">
                                 {{ item.cs_name }}
                            </router-link>
                            <ul class="list-unstyled">
                                <li>
                                    <span>序列：{{ index }}</span>
                                    <span>讲师：{{ item.tc_name }}</span>
                                    <span>类别：{{ item.cg_name }}</span>
                                </li>
                                <li>
                                    <span>课时：32</span>
                                    <span>学员：9823</span>
                                </li>
                                <li>
                                    <span>浏览：11313</span>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <!-- 分页 -->
                <ul class="pagination pull-right">
                    <li><a href="#">上一页</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">下一页</a></li>
                </ul>
            </div>

</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            $.get('/api/course').then((data)=>{
                console.log(data)
                console.log(data.result[0])
                this.list = data.result.splice(data.result.length-101,100)
            })
        }
    }
};
</script>


<style scoped>

</style>
