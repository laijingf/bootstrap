<template>
<el-row class="doc">
   <el-col :span="24">
      <transition :name="transitionName">
         <router-view class="child-view"></router-view>
         
       </transition>
      <BottomNav></BottomNav>
    </el-col>    
</el-row>
</template>

<script>
import BottomNav from '@/components/DocPage/BottomNav'

export default {
	data () {
      return {
        transitionName: 'slide-left'
      }
    },
    
    components:{BottomNav}
}
</script>

<style scoped>
ul,li{
	list-style: none;
}
 .child-view {
  position: absolute;
  width:100%;
  transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter{
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active{
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  } 
</style>