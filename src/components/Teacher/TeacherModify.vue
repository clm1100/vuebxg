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
                                v-model="obj.tc_name"
                                type="text" 
                                class="form-control input-sm" 
                                placeholder="讲师名称">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-md-3 control-label">入职时间</label>
                            <div class="col-md-4">
                                <DatePicker 
                                :value="obj.tc_join_date" 
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
import { Button } from "iview";
import { DatePicker } from "iview";
import $ from 'jquery'
export default {
    data(){
        return {
            id:this.$route.params.id,
            obj:{}
        }
    },
    created(){
        this.getTeacher()
    },
    methods:{
        getTeacher(){
            $.get('/api/teacher/edit',{tc_id:this.id}).then((data)=>{
                console.log(data)
                this.obj = data.result
            })
        },
        createdAteacher(){
            let url = ''
            // $.post(url,this.obj).then(function(data){
            //     console.log(data);
            //     this.$route.push('/home');
            // })
            console.log(this.obj)
        }
    }
}
</script>


<style scoped>

</style>
