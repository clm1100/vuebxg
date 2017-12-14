<template>
<div class="body course-add">
  <!-- 面包屑 -->
  <ol class="breadcrumb">
      <li><a href="javascript:;">课程管理</a></li>
      <li class="active">课程添加</li>
  </ol>
  <div class="steps">
      <!-- 摘要 -->
      <div class="brief">
          <div class="thumb">
              <img :src="obj.cs_cover" alt="">
          </div>
          <dl class="info">
              <dt>Git 指南</dt>
              <dd>讲师：{{obj.tc_name}}</dd>
              <dd>课时：32</dd>
          </dl>
      </div>
      <!-- 步聚 -->
      <ul class="forwards list-unstyled">
          <li>
              <a href="./course_add_step1.html" class="done">
              <b class="fa fa-check"></b>
              基本信息
              </a>
          </li>
          <li>
              <a href="./course_add_step2.html" class="done">
              <b class="fa fa-check"></b>
              课程图片
              </a>
          </li>
          <li>
              <a href="./course_add_step3.html" class="active">
              <b>3</b>
              课时管理
              </a>
          </li>
      </ul>
      <!-- 课时管理 -->
      <div class="content">
          <!-- 标题 -->
          <div class="title">
              <h5>课时管理 <small>LESSON MANAGE</small></h5>
              <a 
              href="javascript:;" 
              @click = 'addLesson'
              class="btn btn-success btn-sm pull-right">
                  <i class="fa fa-plus"></i>
                  课时
              </a>
          </div>
          <div class="lessons">
              <ul class="list-unstyled">
                  <li v-for="(item,index) in obj.lessons">
                      <i class="fa fa-file-video-o"></i>
                      <span class="order">课时：{{index+1}}</span>
                      <span class="name">{{item.ct_name}}</span>
                      <span class="duration">{{item.ct_duration}}</span>
                      <!-- 操作 -->
                      <div class="action pull-right">
                          <a
                            @click="getLesson(item.ct_id)"
                           href="javascript:;" 
                          class="btn btn-info btn-xs" 
                          data-toggle="modal" 
                          data-target="#lesson">
                          编辑
                          </a>
                          <a href="javascript:;" class="btn btn-info btn-xs">预览</a>
                          <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
                      </div>
                  </li>        
              </ul>
          </div>
      </div>
  </div>
  <Modal
    width="800"
    v-model="modal1"
    title="课时信息"
    ok-text="测试按钮"
    @on-ok="ok"
    @on-cancel="cancel"
    >
    <form action="" class="form-horizontal">
        <div class="form-group">
            <label for="" class="col-md-2 control-label">标题</label>
            <div class="col-md-6">
                <input
                v-model="lesson.ct_name"
                type="text" 
                class="form-control input-sm">
            </div>
            <div class="col-md-2">
                <div class="checkbox">
                    <label>
                        <input 
                        v-model="lesson.ct_is_free"
                        value="0" 
                        type="checkbox"> 免费课时
                    </label>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-md-2 control-label">简介</label>
            <div class="col-md-8">
                <textarea 
                v-model="lesson.ct_brief"
                class="form-control input-sm">
                </textarea>
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-md-2 control-label">视频</label>
            <div class="col-md-8">
                <div class="input-group">
                    <input 
                    v-model="lesson.ct_video"
                    type="text"
                    class="form-control input-sm"
                    placeholder="支持优酷、土豆、腾讯、网易公开课的视频页面地址导入">
                    <span class="input-group-btn">
                        <button class="btn btn-success btn-sm">获取</button>
                    </span>
                </div>
            </div>
        </div>
        <div class="form-group form-inline">
            <label for="" class="col-md-2 control-label">时长</label>
            <div class="col-md-8">
                <input 
                v-model="lesson.ct_minutes"
                type="text" 
                class="form-control input-sm small">
                分
                <input
                v-model="lesson.ct_seconds" 
                type="text"
                class="form-control input-sm small">
                秒
                  <p class="help-block">时长必须为整数。</p>
            </div>
        </div>
        <div class="form-group form-inline">
            <label for="" class="col-md-2 control-label">建议学习时长</label>
            <div class="col-md-8">
                <input
                v-model="lesson.ct_recommend_duration" 
                type="text" 
                class="form-control input-sm small">
                小时
                  <p class="help-block">（如未设置，则默认学习时长为视频时长3倍取整。）</p>
            </div>
        </div>
    </form>
  </Modal>
</div>

</template>

<script>
import $ from "jquery";
 import {Button,Modal} from 'iview'
let imgurl = 'http://static.botue.com/images/cover'
export default {
    data(){
        return {
            modal1:false,
            obj:{
                cs_id:this.$route.params.id,
            },
            lesson:{}
        }
    },
    components:{
        
    },
    methods:{
      addLesson(){
        this.modal1 = true
      },
      cancel(){
        this.lesson = Object.assign({})
      },
      ok(){
        let lessonData = Object.assign({},this.lesson)
        lessonData.ct_is_free = lessonData.ct_is_free?"1":"0"
        if(lessonData.ct_id){
          let url = '/api/course/chapter/modify'
        $.post(url,lessonData).then((data)=>{
          console.log(data)
          this.lesson= Object.assign({});
          this.getData()
        })
        }else{
          let url = '/api/course/chapter/add'
          lessonData.ct_cs_id = this.obj.cs_id
          console.log(lessonData)
          $.post(url,lessonData).then((data)=>{
            console.log(data)
            this.lesson= Object.assign({});
            this.getData()
          })
        }
      },
      getLesson(id){
        let url ="/api/course/chapter/edit"
        let obj={ct_id:id}
        $.get(url,obj).then((data)=>{
          console.log(data)
          this.modal1 = true;
          this.lesson = data.result
        })
      },
      getData(){
        let url = '/api/course/lesson'
        let obj = {
          cs_id:this.obj.cs_id
        }
        $.get(url,obj).then((data)=>{
          console.log(data)
          this.obj = data.result
        })
      }
    },
    created(){
      this.getData()
    }
}
</script>


<style scoped>
.w{width: 1000px}
</style>