<template>
     <div class="body teacher">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">讲师管理</a></li>
                    <li class="active">讲师添加</li>
                </ol>
                <div class="teacher-add">
                    <form action="" class="form-horizontal col-md-offset-2">

                    <!-- <div>
                        <label for="email">邮箱：</label>
                        <input v-validate ="'required|email'" type="text" id="email" name="myEmail">
                    </div>
                    <span v-show="errors.has('myEmail')">{{ errors.first('myEmail')}}</span> -->



                    <div class="form-group">
                            <label for="" class="col-md-3 control-label">姓名</label>
                            <div class="col-md-4">
                                <input 
                                name="myEmail"
                                v-validate ="'required'"
                                v-model="obj.tc_name"
                                type="text" 
                                class="form-control input-sm" 
                                placeholder="讲师名称">
                                <span v-show="errors.has('myEmail')">{{ errors.first('myEmail')}}</span>
                            </div>
                        </div>


                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">入职时间</label>
                            <div class="col-md-4">
                                <DatePicker 
                                v-model="obj.tc_join_date"
                                format="yyyy-MM-dd" 
                                type="date" 
                                placeholder="Select date" 
                                style="width: 100%">
                                </DatePicker>
                             </div>
                            <!-- <div class="col-md-4">
                                <input  
                                v-model="obj.tc_join_date"
                                type="text" 
                                class="form-control input-sm">
                            </div> -->
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">类型</label>
                            <div class="col-md-2">
                                <select 
                                v-model="obj.tc_type"
                                name="" 
                                class="form-control input-sm">
                                    <option value="1">讲师</option>
                                    <option value="2">管理员</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label 
                            for="" 
                            class="col-md-3 control-label">性别</label>
                            <div class="col-md-4">
                                <label class="radio-inline">
                                    <input type="radio" value="0" v-model="obj.tc_gender"> 男
                                </label>
                                <label class="radio-inline" >
                                    <input type="radio" value="1"  v-model="obj.tc_gender"> 女
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-7">
                                <Button @click="createdAteacher"  class="btn btn-success btn-sm pull-right"> 添 加 </Button>
                            </div>                          
                        </div>
                    </form>
                </div>
            </div>
</template>

<script>
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
      required: () => "请输入内容",
      qq: () => "qq号码不正确"
    }
  }
};
Validator.updateDictionary(dictionary);

import moment from 'moment'

import { Button } from "iview";
import { DatePicker } from "iview";
import $ from "jquery";
export default {
  data() {
    return {
      id: this.$route.params.id,
      obj: {}
    };
  },
  created() {
    this.getTeacher();
  },
  methods: {
    getTeacher() {
      $.get("/api/teacher/edit", { tc_id: this.id }).then(data => {
        this.obj = data.result;
      });
    },
    createdAteacher() {
      let url = "/api/teacher/update";
      let _this = this;
      this.$validator.validateAll().then(data => {
        if (data) {
            let obj = Object.assign({},this.obj);
            console.log(moment(obj.tc_join_date).format('YYYY-MM-DD'))
            obj.tc_join_date = moment(this.obj.tc_join_date).format('YYYY-MM-DD')
            console.log(obj.tc_join_date);
            console.log(obj)
          $.post(url, obj).then(data => {
            // this.$router.push({path: '/home',query:{stage: 212331}});
            this.$router.push('/home');
          });
        }
      });
    }
  }
};
</script>


<style scoped>

</style>
