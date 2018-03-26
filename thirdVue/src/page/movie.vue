<template>
<el-row>
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/movie' }"><b>我喜爱的电影</b></el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24">
      <el-carousel height="500px">
        <el-carousel-item v-for="img in imgList" :key  ="img" >
           <img v-bind:src="img.url" class="image">
        </el-carousel-item>
     
      </el-carousel>
    </el-col>
</el-row>
</template>

<script>
export default {
   data(){
     return{
     	
     	imgList:[
           {
           	url:require("../assets/image/moive/076.jpg")//当当使用：src=""来绑定的时候，使用require手动把图片引入，不然写在data里面的路径只会当成一个字符串
           },
            {
           	url:require("../assets/image/moive/918.jpg")
           }, 
            {
           	url:require("../assets/image/moive/637.jpg")
           }, 
            {
           	url:require("../assets/image/moive/375.jpg")
           }
     	]
     }
   }

}
</script>

<style scoped>
 h3{
 	
 }
 .img-container{
   margin:70px 0 0 100px;
 }

 .image{
  width: 800px;
  height: 430px;
 	margin: 30px auto;
 }

</style>