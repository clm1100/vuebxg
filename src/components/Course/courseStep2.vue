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
                            <img :src="obj.cs_cover_original" alt="">
                        </div>
                        <dl class="info">
                            <dt>{{obj.cs_name}}</dt>
                            <dd><b>讲师：</b>{{obj.tc_name}}</dd>
                            <dd>课时：32</dd>
                        </dl>
                    </div>
                    <!-- 步聚 -->
                    <ul class="forwards list-unstyled">
                        <li>
                            <router-link 
                             v-bind="{to:'/course/add/step1/'+obj.cs_id}"
                             class="done">
                                <b>1</b>
                                 基本信息
                            </router-link>
                        </li>
                        <li>
                            <router-link 
                             v-bind="{to:'/course/add/step2/'+obj.cs_id}"
                             class="active"
                             >
                                <b>2</b>
                                课程图片
                            </router-link>
                        
                        </li>
                        <li>
                            <router-link 
                             v-bind="{to:'/course/add/step3/'+obj.cs_id}"
                             >
                            <b>3</b>
                            课时管理
                            </router-link>
                        </li>
                    </ul>
                    <!-- 课程图片 -->
                    <div class="content">
                        <!-- 标题 -->
                        <div class="title">
                            <h5>课程图片 <small>COURSE PICTURE</small></h5>
                        </div>
                        <!-- 上传图片 -->
                        <div class="picture col-md-offset-2">
                            <div class="preview">
                                <img :src="obj.cs_cover_original" alt="">
                            </div>
                            <p class="tips">
                                可上传jpg, gif, png格式文件, 图片建议尺寸大于300x150，文件大小不能超过2M。
                            </p>
                            <div  class="col-md-2 upimg btn btn-success btn-sm">
                                <input 
                                @change="updataImg" 
                                type="file"
                                class="btn btn-success btn-sm" />
                            </div>
                            <div class="col-md-2">
                                <button
                                @click="nextStep"
                                 class="btn btn-warning btn-sm" >
                                    下一步
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import $ from "jquery";
import 'cropper/dist/cropper.css'
import 'cropper'
import { Button } from "iview";


export default {
    data(){
        return {
            obj:{
                cs_cover:"",
                cs_cover_original:"",
                cs_id:this.$route.params.id,
                cs_name:"",
                tc_name:""
            }
        }
    },
    components:{
        
    },
    methods:{
        nextStep(){
            this.$router.push('/course/add/step3/'+this.obj.cs_id)
        },
        getData(){
            return new Promise((resolve,reject)=>{
                $.get('/api/course/picture',{cs_id:this.obj.cs_id}).then((data)=>{
                    resolve(data)
                })
            })
        },
        updataImg(ele){
            var formDate = new FormData();
            formDate.append('cs_cover_original',ele.target.files[0])
            formDate.append('cs_id',this.obj.cs_id);
            console.log(formDate);
            $.ajax({
                url: "/api/uploader/cover",
                type: "POST",
                data: formDate,
                // mimeType: "multipart/form-data",
                processData: false,  // 不处理数据
                contentType: false   // 不设置内容类型
                }).then((data)=>{
                    this.obj.cs_cover_original = data.result.path;
                    // jcropImage()
                })
        }
    },
    created(){
        this.getData().then((data)=>{
            console.log(data)
            this.obj = data.result    
            })
    }
}
</script>


<style scoped>
.upimg{
    overflow: hidden;
    width:58px;
    height: 30px;
}
.upimg input{
    opacity: 0;
    
}
</style>