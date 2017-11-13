<template>
  <!-- 登录 -->
    <div class="login">
        <div class="login-wrap">
            <div class="avatar">
                <img src="#" class="img-circle" alt="">
            </div>
            <form @submit.prevent="submit"
             action=""
             class="col-md-offset-1 col-md-10">
                <div class="input-group input-group-lg">
                    <span class="input-group-addon">
                        <i class="fa fa-user"></i>
                    </span>
                    <input v-model="tc_name" 
                    type="text" 
                    class="form-control" 
                    placeholder="用户名">
                </div>
                <div class="input-group input-group-lg">
                    <span class="input-group-addon">
                        <i class="fa fa-key"></i>
                    </span>
                    <input type="password" 
                    v-model="tc_pass"
                    class="form-control" 
                    placeholder="密码">
                </div>
                <button  type="submit" class="btn btn-lg btn-primary btn-block">登 录</button>
            </form>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  components:{

  },
  data(){
      return {
          tc_name:'小白',
          tc_pass:'123456',
      }
  },
  created(){
    // let api = '/api/login'
    // console.log(this.tc_name)
    // $.post(api,{
    //     tc_name:this.tc_name,
    //     tc_pass:this.tc_pass
    // }).then(function(data){
    //     console.log(data)
    // })
  },
   methods: {  
    submit:function() {  
            let api = '/api/login'
            $.post(api,{
                tc_name:this.tc_name,
                tc_pass:this.tc_pass
            }).then((data)=>{
                this.$cookie.set('userInfo',JSON.stringify(data.result||'{}'))
                this.$router.push('/')
            });

        }
    }
}
</script>

<style>

</style>