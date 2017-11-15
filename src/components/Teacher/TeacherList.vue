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
                                    <Button size="small" 
                                        type="primary"  
                                        @click="getAteacher(item.tc_id)">
                                        查看
                                    </Button>
                                    <Button size="small" type="success" >
                                        <router-link 
                                        v-bind="{to:'/teacher/list/'+item.tc_id}"
                                        class="acolor" >
                                             编辑
                                        </router-link>                                     
                                    </Button>
                                    <Button size="small" 
                                    type="warning" 
                                    @click="modal1 = true">
                                        注销
                                    </Button>    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Modal
                    v-model="modal1"
                    title="讲师信息"
                    ok-text="测试按钮"
                    @on-ok="ok"
                    @on-cancel="cancel"
                    >
                    <div class="panel-body">
                    <table id="modalTeacherInfo" class="table table-bordered table-condensed">
                    <tbody>
                        <tr>
                            <th>姓名:</th><td>{{ obj.tc_name }}</td>
                            <th>职位:</th><td colspan="3">讲师</td>
                            <td rowspan="4" width="128">
                                <div class="avatar">
                                     <img :src="obj.tc_avatar" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>花名:</th><td>{{ obj.tc_roster }}</td>
                            <th>出生日期:</th><td colspan="3">{{ obj.tc_birthday }}</td>
                        </tr>
                        <tr>
                            <th>性别:</th><td>{{ obj.tc_gender == 0 ? '男' : '女' }}</td>
                            <th>入职时间:</th><td colspan="3">{{ obj.tc_join_date }}</td>
                        </tr>
                        <tr>
                            <th>手机号码:</th><td colspan="2">{{ obj.tc_cellphone }}</td>
                            <th>邮箱:</th><td colspan="2">{{ obj.tc_email }}</td>
                        </tr>
                        <tr>
                            <th>籍贯:</th><td colspan="6">{{ obj.tc_hometown  }}</td>
                        </tr>
                        <tr>
                            <td colspan="7">
                                <div class="introduce">
                                    {{ obj.tc_introduce }}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <!-- <span slot="footer">56789</span> -->
                <div slot="footer" >
                    <Button size="small"  type="success" @click='cancel' >
                        <span>取消</span>
                    </Button> 
                    <Button size="small"  type="success"  @click="ok" >
                        <span>测试按钮</span>
                    </Button>
                </div>
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
            list:[],
            obj:{},
            resetObj:{}
        }
    },
    created() {
       this.getTeacherList()
    },
    methods:{
        getAteacher(id){
            let api = '/api/teacher/view';
            $.get(api,{tc_id:id}).then((data)=>{
                this.obj = data.result
                console.log(data.result)
                this.modal1 = true;
            })
        },
        getTeacherList(){
            let api= '/api/teacher'
            $.post(api).then((data)=>{
                this.list  = data.result
            })
        },
        ok () { this.modal1 = false;
                this.obj = Object.assign({},this.resetObj)
        },
        cancel () {this.modal1 = false;
            this.obj = Object.assign({},this.resetObj)
            // this.$Message.info('Clicked cancel')
            // 另外一种方法
            // for(var name in this.obj) {
            //     console.log(this.obj[name])
            //     this.obj[name] = ""
            // };
        }
    }
}
</script>


<style scoped>
.acolor{color: #fff}
</style>
