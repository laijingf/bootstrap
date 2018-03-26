<template>
  <el-row :gutter="20">
  <el-col :span="8" v-bind:router="true">
     <router-link to="/subpageA"><el-card :body-style="{ padding:'0px'}" >
     <img src="../../assets/image/home/219.jpg" class="image">
      <div class="text">
        <span>
       户田惠梨香</span>
      </div>
    </el-card></router-link>
  </el-col>

    <el-col :span="8">
    <el-card :body-style="{ padding:'0px'}" >
      <img src="../../assets/image/home/916.jpg" class="image">
      <div class="text">
        <span>户田惠梨香</span> 
      </div>
    </el-card>
  </el-col>

  <el-col :span="8">
    <el-card :body-style="{ padding:'0px'}" >
      <img src="../../assets/image/home/343.jpg" class="image">
      <div class="text">
        <span>户田惠梨香</span> 
      </div>
    </el-card>
  </el-col>
</el-row>  
</template>

<script>
export default {
  
  }


</script>

<style scoped>
.image {
  padding:5px 8px;
    width: 95%;
    height: 250px;
    display: block; 
  }
</style>