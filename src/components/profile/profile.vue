<template>
<!-- 讲师资料 -->
            <div class="body teacher-profile">
                <div class="settings">
                    <form @submit.prevent='updateProfile' class="form-horizontal">
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
                                <DatePicker 
                                v-model="obj.tc_birthday"
                                format="yyyy-MM-dd" 
                                type="date" 
                                placeholder="Select date" 
                                style="width: 100%">
                                </DatePicker>
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
                                <input 
                                name="cellphone"
                                v-validate ="'required'"
                                v-model="obj.tc_cellphone"
                                type="text" 
                                class="form-control input-sm">
                                <span v-show="errors.has('cellphone')">{{ errors.first('cellphone')}}</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">电子邮箱</label>
                            <div class="col-md-5">
                                <input 
                                name="myEmail"
                                v-validate ="'required|email'"
                                v-model="obj.tc_email"
                                type="text" 
                                class="form-control input-sm">
                                <span v-show="errors.has('myEmail')">{{ errors.first('myEmail')}}</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">入职日期</label>
                            <div class="col-md-5">
                                <DatePicker 
                                v-model="obj.tc_join_date"
                                format="yyyy-MM-dd" 
                                type="date" 
                                placeholder="Select date" 
                                style="width: 100%">
                                </DatePicker>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">个人介绍</label>
                            <div class="col-md-5">
                                 <vue-editor v-model="obj.tc_introduce"></vue-editor>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-8">
                                <button type="submit" class="btn btn-success btn-sm pull-right">保 存</button>
                                <a href="./repass.html" class="btn btn-link btn-sm pull-right">更改密码？</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
</template>

<script>

let arr = {
    cellphone:'电话',
    myEmail:'邮箱'
}
import Vue from "vue";
import VeeValidate from "vee-validate";
import zh_CN from "vee-validate/dist/locale/zh_CN";
import { Validator } from "vee-validate";
Validator.addLocale(zh_CN);
const config = {
  locale: "zh_CN",
  events: "submit"
};
Vue.use(VeeValidate, config);
const dictionary = {
  zh_CN: {
    messages: {
      email: () => "邮箱格式不正确哦",
      required: (a) => "请输入您的"+arr[a],
      qq: () => "qq号码不正确"   
    }
  }
};
Validator.updateDictionary(dictionary);

import moment from 'moment'














import { VueEditor } from 'vue2-editor'
import $ from 'jquery'
import objDate from '../../assets/region'

import { DatePicker } from "iview";
let province =  objDate.p['000000']
let city     =  objDate.c
let district =  objDate.d
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            province:province,
            city:[],
            district:[],
            obj:{},
            sheng:[],
            defaultImg: 'this.src="' + require("../../assets/avatar.jpg") + '"'
        }
    },
    components:{
        VueEditor
    },
    computed: {
    
    },
    created(){
    this.getData();
    },
    methods:{
        updateProfile(){
            let url='/api/teacher/modify'
            this.$validator.validateAll().then((data)=>{
                console.log(data) 
                let obj = Object.assign({},this.obj)
                obj.tc_join_date= moment(obj.tc_join_date).format('YYYY-MM-DD') 
                obj.tc_birthday= moment(obj.tc_birthday).format('YYYY-MM-DD')
                console.log(obj)
                delete obj.tc_avatar 
                if(data){
                    $.post(url,obj).then((info)=>{
                        console.log(info)
                    })
                }               

            })
        },
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
