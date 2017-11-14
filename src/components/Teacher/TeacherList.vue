<template>
     <div class="body teacher-list">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">讲师管理</a></li>
                    <li class="active">讲师列表</li>
                </ol>
                <div class="page-title">
                    <router-link to="/teacher/add" class="btn btn-success btn-sm pull-right">
                        添加讲师
                    </router-link>
                </div>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <form action="" class="form-inline">
                            <div class="input-group">
                                <input type="text" class="form-control input-sm">
                                <span class="input-group-btn">
                                    <button class="btn btn-success btn-sm">搜索</button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <table class="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>编号</th>
                                <th>姓名</th>
                                <th>昵称</th>
                                <th>年龄</th>
                                <th>性别</th>
                                <th>手机号码</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="( item,index) in list">
                                <td>{{index+1}}</td>
                                <td>{{item.tc_name}}</td>
                                <td>{{item.tc_roster}}</td>
                                <td>{{item.tc_birthday}}</td>
                                <td>{{item.tc_gender==1?'女':'男'}}</td>
                                <td>{{item.tc_join_date}}</td>
                                <td>
                                    <Button size="small" type="primary" @click="modal1 = true">查看</Button>
                                    <Button size="small" type="success" @click="modal1 = true">
                                        <router-link to="/teacher/list/313131" class="acolor">
                                             编辑
                                        </router-link>                                     
                                    </Button>
                                    <Button size="small" type="warning" @click="modal1 = true">注销</Button>    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Modal
                    v-model="modal1"
                    title="Common Modal dialog box title"
                    @on-ok="ok"
                    @on-cancel="cancel">
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                </Modal>
            </div>
</template>

<script>
 import {Button,Modal} from 'iview'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
import $ from 'jquery'
export default {
    data(){
        return {
            modal1: false,
            list:[]
        }
    },
    created() {
       this.getTeacherList()
    },
    methods:{
        getTeacherList(){
            let api= '/api/teacher'
            $.post(api).then((data)=>{
                this.list  = data.result
            })
        },
        ok () {
                // this.$Message.info('Clicked ok');
        },
        cancel () {
            // this.$Message.info('Clicked cancel');
        }
    }
}
</script>


<style scoped>
.acolor{color: #fff}
</style>
