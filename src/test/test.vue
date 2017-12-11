<template>
<div>
<form action="" @submit.prevent="Onsubmit">
  <div>
      <label for="email">邮箱：</label>
      <input v-validate ="'required|email'" type="text" id="email" name="myEmail">
    </div>
    <span v-show="errors.has('myEmail')">{{ errors.first('myEmail')}}</span>

    <div>
        <label for="qq">QQ：</label>
        <input v-validate ="'required'" type="text" id="qq" name="QQ">
    </div>
    <span v-show="errors.has('QQ')">{{ errors.first('QQ')}}</span>
    <button>提交</button>
</form>
</div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import { Validator } from 'vee-validate';
Validator.addLocale(zh_CN);
const config = {
  locale: 'zh_CN',
  events: 'submit',
};
Vue.use(VeeValidate, config);
const dictionary = {
  zh_CN: {
    messages: {
      email: () => '邮箱格式不正确哦',
      required:()=>'请输入内容',
      qq:()=>'qq号码不正确'
    }
  }
};
Validator.updateDictionary(dictionary);

export default {
  methods:{
    Onsubmit(){
      this.$validator.validateAll().then((data)=>{
        console.log(data)
      })
    }
  },
  created(){
  }
};

</script>


<style scoped>
.input{border: 1px solid red}
.is-danger{color: red}
</style>
