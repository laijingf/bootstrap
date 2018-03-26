<template>
 <el-row :gutter="20">
   <el-col :span="8">
    <el-card :body-style="{ padding:'0px'}" >
      <img src="../assets/image/home/plain.jpg" class="image">
      <div class="text">
        <span>一望无际的平原</span>
        
      </div>
    </el-card>
   </el-col>

   <el-col :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/image/home/lake.jpg" class="image">
      <div class="text">
        <span>一望无际的平原</span>
        
      </div>
    </el-card>
   </el-col>

   <el-col :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/image/home/343.jpg" class="image">
      <div class="text">
        <span>户田惠梨香</span>
      </div>
    </el-card>
   </el-col>
</el-row>

</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }

};
</script>

<style scoped>
 .image {
 	padding:5px 8px;
    width: 95%;
    height: 250px;
    display: block; 
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .el-card{
  	height: 350px;
  }
 .text{
 	margin: -30px 0;
 }
</style>