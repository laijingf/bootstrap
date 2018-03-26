<template>
  <div class="subpageA">
    <el-button type="primary" icon="el-icon-back" @click="goback">返回</el-button>
    <h1> This is subpageA </h1>
  </div>
</template>

<script>
export default {
    methods: {
    goback () {
      this.$router.goBack()
    }
  }
  }


</script>

<style scoped>
.el-button{
    position:absolute;
    right: 10px;
    top:0px;
}
</style>