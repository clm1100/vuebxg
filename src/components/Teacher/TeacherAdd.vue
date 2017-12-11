<template>
     <div class="body teacher">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">讲师管理</a></li>
                    <li class="active">讲师添加</li>
                </ol>
                <div class="teacher-add">
                    <form action="" class="form-horizontal col-md-offset-2">
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">姓名</label>
                            <div class="col-md-4">
                                <input 
                                name="tc_name"
                                v-validate ="'required'"
                                v-model="obj.tc_name"
                                type="text" 
                                class="form-control input-sm" 
                                placeholder="讲师名称">
                            </div>
                            <div class="col-md-2">
                                 <span v-show="errors.has('tc_name')">{{ errors.first('tc_name')}}</span>                                 
                            </div>
                        </div>


                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">密码</label>
                            <div class="col-md-4">
                                <input 
                                name="tc_pass"
                                v-validate = "'required'"
                                v-model="obj.tc_pass"
                                type="password" 
                                placeholder="密码"
                                class="form-control input-sm">
                            </div>
                            <div class="col-md-2">
                                 <span v-show="errors.has('tc_pass')">{{ errors.first('tc_pass')}}</span>                                 
                            </div>
                        </div>
                       
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">入职时间</label>
                            <div class="col-md-4">
                                <DatePicker 
                                v-model="obj.tc_join_date"
                                format="yyyy-MM-dd" 
                                type="date" 
                                style="width: 100%">
                                </DatePicker>
                             </div>
                        </div>

                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">类型</label>
                            <div class="col-md-2">
                                <select 
                                v-model="obj.tc_type"
                                name="" 
                                class="form-control input-sm">
                                    <option value="1">讲师</option>
                                    <option value="0">管理员</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">性别</label>
                            <div class="col-md-4">
                                <label class="radio-inline">
                                    <input type="radio" value="0" v-model="obj.tc_gender"> 男
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="1" v-model="obj.tc_gender"> 女
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
var obj = {
    tc_name:'讲师名称',
    tc_pass:'密码'
}
Vue.use(VeeValidate, config);
const dictionary = {
  zh_CN: {
    messages: {
      required: (ele) => "请输入"+obj[ele],
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
      dateValue:'2016-01-01',
      obj: {
          tc_gender:'0',
          tc_type:'1',
          tc_join_date:moment().format("YYYY-MM-DD")
      }
    };
  },
  created() {
  },
  methods: {
  
    createdAteacher() {
      let url = "/api/teacher/add";
      let obj = Object.assign({},this.obj);
      obj.tc_join_date = moment(obj.tc_join_date).format("YYYY-MM-DD")

      this.$validator.validateAll().then(data => {
        if (data) {
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
