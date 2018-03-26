<template>
  <div id="bottomNav" >
    <router-link to="/pageA" class="tab">旅行日志</router-link>
    <router-link to="/pageB" class="tab">观影日志</router-link>
    <router-link to="/pageC" class="tab">生活日志</router-link>
  </div>
</template>

<script>
export default{
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #bottomNav {
    display: flex;/*垂直居中*/
    width: 1080px;
    height: 35px;
    line-height: 35px;
    padding: 10px 0;
    text-align: center;
    border: 1px solid #999999;
    position: fixed;
    right: 0;
    bottom:0;
  }

  .tab {
    flex: 1;
    text-align: center;
    border-right: 1px solid #999999;
  }
</style>