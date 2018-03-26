<template>
  <el-container class="home-top">
    <el-header>
       <div class="my">我的故事</div>
    </el-header>
  
  <el-container>
    <el-aside width="200px">
       <el-menu default-active="Home" v-bind:router="true" background-color="#545c64"  text-color="#fff"  active-text-color="#ffd04b">
      <el-menu-item index="Home">
          <i class="el-icon-news"></i>
          <span slot="title">首页</span>
      </el-menu-item>

      <el-menu-item index="Movie">
        <i class="el-icon-menu"></i>
         <span slot="title">电影</span>
      </el-menu-item>

      <el-menu-item index="Doc">
        <i class="el-icon-document"></i>
        <span slot="title">日志</span>
      </el-menu-item>

      <el-menu-item index="About">
        <i class="el-icon-setting"></i>
        <span slot="title">关于</span>
      </el-menu-item>

    </el-menu>
    </el-aside>
 
    <el-main>
         <router-view></router-view>
    </el-main>
  </el-container>

   </el-container>
</template>

<script>
export default {
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
    background-color: #303133;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
   .home-top {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }
  .my{
    float: left;
    color: #fff;
    margin-left:30px;
  }
  .el-menu{
    height: 100%;
  }
</style>