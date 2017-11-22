<template>
  <!-- 主体 -->
<div class="body course-add">
        <!-- 面包屑 -->
        <ol class="breadcrumb">
            <li><a href="javascript:;">课程管理</a></li>
            <li class="active">创建课程</li>
        </ol>
        <div class="steps create">
            <div class="title">
                <h5>创建课程 <small>CREATE A COURSE</small></h5>
            </div>
            <form @submit.prevent='createCourse' id="createForm" class="form-horizontal col-xs-7">
                <div class="form-group">
                    <label for="" class="col-xs-2 control-label">课程标题</label>
                    <div class="col-xs-9">
                        <input 
                        v-model="cs_name"
                        type="text" 
                        class="form-control input-sm" 
                        name="cs_name" 
                        placeholder="请填写课程标题">
                    </div>
                </div>
                <div class="col-xs-11">
                    <button type="submit" class="btn btn-success btn-sm pull-right">创建课程</button>
                </div>
            </form>
            <div class="extra col-xs-3">
                <h5>从视频专辑导入课程</h5>
                <p>已支持优酷、腾讯视频、网易公开课、爱奇艺教育的视频专辑导入。</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return {
            cs_name:''
        }
    },
    methods:{
        createCourse(){
            var url = '/api/course/create'
            $.get(url,{cs_name:this.cs_name}).then((data)=>{
                console.log(data);
                this.$router.push('/course/add/step1/'+data.result.cs_id)
            })
        }
    }
};
</script>


<style scoped>

</style>
