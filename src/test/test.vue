<template>

<div>
<div class="out">
        <div id="wrapper">
    <VueCropper
	ref="cropper2"
	:img="example2.img"
	:outputSize="example2.size"
	:outputType="example2.outputType"
	:info="example2.info"
	:canScale="example2.canScale"
	:autoCrop="example2.autoCrop"
	:autoCropWidth="example2.autoCropWidth"
	:autoCropHeight="example2.autoCropHeight"
	:fixed="example2.fixed"
	:fixedNumber="example2.fixedNumber"
     @realTime="realTime"
    
></VueCropper>




</div>
</div>
<button @click="getImg" class="btn">changeImg</button>
<div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
    <div :style="previews.div">
        <img :src="previews.url" :style="previews.img">
    </div>
</div>
</div>

</template>

<script>
import VueCropper from 'vue-cropper'
export default {
  data: function () {
    return {
        crap: false,
			previews: {},
			example2: {
				img: 'http://ofyaji162.bkt.clouddn.com/bg1.jpg',
				info: true,
				size: 1,
				outputType: 'jpeg',
				canScale: false,
                autoCrop: false,
				// 只有自动截图开启 宽度高度才生效
				// autoCropWidth: 300,
				// autoCropHeight: 250,
				// 开启宽度和高度比例
				// fixed: true,
				fixedNumber: [4, 3]
			}
		}
   },
components:{
      VueCropper
  },
  created(){

  },
  methods: {
		getImg () {
            // start
            this.crap = true
            console.log(this.$refs.cropper2)
            this.$refs.cropper2.startCrop()
            console.log(this.$refs.cropper2.getCropData)
 
		},
		stopCrop () {
			//  stop
			this.crap = false
			this.$refs.cropper.stopCrop()
		},
		clearCrop () {
			// clear
			this.$refs.cropper.clearCrop()
		},
		// 实时预览函数
		realTime (data) {
			this.previews = data
        },
  }
}
</script>
<style>
.out{
    height: 300px;
}
#wrapper{
    width:300px;
height: 300px;
    background-color: #f45
}
img{width: 100%}
</style>

