<template>
<!-- 讲师资料 -->
            <div class="body teacher-profile">
                <div class="settings">
                    <form action="" class="form-horizontal">
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">姓名</label>
                            <div class="col-md-5">
                                <p class="form-control-static">{{obj.tc_name}}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">头像</label>
                            <div class="col-md-2 preview">
                                <img :src="obj.tc_avatar" :onerror="defaultImg">
                                <input type="file" id="upfile" @change='change' ref="fileimg">
                                <div class="cover">
                                    <i class="fa fa-upload"></i>                  
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">昵称</label>
                            <div class="col-md-5">
                                <input
                                :value="obj.tc_roster"
                                type="text"
                                 class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">性别</label>
                            <div class="col-md-3">
                                <label class="radio-inline">
                                    <input type="radio" value="0" v-model="obj.tc_gender"> 男
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="1" v-model='obj.tc_gender'> 女
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">出生日期</label>
                            <div class="col-md-5">
                                <input 
                                :value="obj.tc_birthday"
                                type="text" 
                                class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">籍贯</label>
                            <div class="col-md-5">
                                <select name="" class="form-control input-sm">
                                    <option value="">河北省</option>
                                    <option value="">山东省</option>
                                    <option value="">北京市</option>
                                </select>
                                <select name="" class="form-control input-sm">
                                    <option value="">河北省</option>
                                    <option value="">山东省</option>
                                    <option value="">北京市</option>
                                </select>
                                <select name="" class="form-control input-sm">
                                    <option value="">河北省</option>
                                    <option value="">山东省</option>
                                    <option value="">北京市</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">手机号码</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">电子邮箱</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">入职日期</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">个人介绍</label>
                            <div class="col-md-5 ckeditor">
                                <textarea name="" rows="15" class="form-control input-sm"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-8">
                                <a href="./course_add_step2.html" class="btn btn-success btn-sm pull-right">保 存</a>
                                <a href="./repass.html" class="btn btn-link btn-sm pull-right">更改密码？</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
</template>

<script>
import $ from 'jquery'
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            obj:'',
            defaultImg: 'this.src="' + require("../../assets/avatar.jpg") + '"'
        }
    },
    components:{
        
    },
    created(){
    this.getData();
    },
    methods:{
        change(){
            let data = this.$refs.fileimg.files[0];
            var formdata = new FormData();
            formdata.append('tc_avatar',data);
            console.log(formdata);
            $.ajax({
                url:"/api/uploader/avatar",
                data:formdata,
                type:'post',
                processData:false,
                contentType:false
            }).then((data)=>{
                let obj = JSON.parse(this.$cookie.get('userInfo')||"{}")
                obj.tc_avatar = data.result.path
                let objstr = JSON.stringify(obj);
                this.$cookie.set('userInfo',objstr);
                this.obj.tc_avatar=data.result.path                
                this.initHeaderst()
            })
        },
        getData(){
            $.get('/api/teacher/profile').then((data)=>{
                this.obj = data.result;
            })
        },
        ...mapActions(['initHeaderst'])
    }
}
</script>


<style scoped>

</style>
