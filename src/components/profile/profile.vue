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
                                <select 
                                @change="provinceChange"
                                name="" 
                                class="form-control input-sm" 
                                v-model="obj.tc_province">
                                    <option value="0">请选择</option>
                                    <option v-for="(v,k) in province" :value="k">{{v}}</option>                          
                                </select>



                                <select 
                                @change="cityChange"
                                name=""
                                 class="form-control input-sm" 
                                 v-model="obj.tc_city">
                                    <option checked value="0">请选择</option>
                                    <option v-for="(v,k) in city"  :value="k">{{v}}</option>
                                </select>



                                <select name="" class="form-control input-sm" v-model="obj.tc_district">
                                    <option disabled value="0">请选择</option>
                                    <option v-for="(v,k) in district" :value="k">{{v}}</option>
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
// let vv = require('../../assets/region');
import objDate from '../../assets/region'

let province =  objDate.p['000000']
let city     =  objDate.c
let district =  objDate.d
console.log(district)
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            province:province,
            city:[],
            district:[],
            obj:'',
            sheng:[],
            defaultImg: 'this.src="' + require("../../assets/avatar.jpg") + '"'
        }
    },
    components:{
        
    },
    computed: {
    
    },
    created(){
    this.getData();
    },
    methods:{
        provinceChange(e){
            console.log(e.target.value);
            this.city = city[e.target.value]
            this.obj.tc_city = "0"
            this.obj.tc_district = "0"
            this.district = null
        },
        cityChange(e){
            console.log(e.target.value);
            this.district = district[e.target.value]
            this.obj.tc_district = "0"
        },
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
                console.log(data)
                console.log()
                this.obj = data.result;
                console.log(this.obj.tc_city.slice(0,2)+'0000')
                this.city = city[this.obj.tc_city.slice(0,2)+'0000']
                this.district = district[this.obj.tc_district.slice(0,4)+'00']
            })
        },
        ...mapActions(['initHeaderst'])
    }
}
</script>


<style scoped>

</style>
