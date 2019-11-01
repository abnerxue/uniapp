<!--
 * 梁嘉琪
 * 8:35:24
 招揽生意视频页面
 -->
<template>
  <div class="drawLots">
    <div class="box">
      <embed src="../../../static/img/video.gif" autoplay loop v-on:click="startDraw()" />
      <!-- <video src="../../../static/img/video.gif" autoplay loop v-on:click="startDraw()"></video> -->
    </div>
    <!-- <p class="start" v-on:click="startDraw()">开始抽签</p>
    <div class="buttonBox">
      <p v-on:click="backIndex()"></p>
    </div> -->
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted(){
      window.android.startSpeak('嗨，各位叔叔阿姨，大家好！咳，请听我认真来说，你们知道观音灵签吗？求签祈福保平安。告诉你这是一个集传统文化和人文科学于一身的科技项目，快来点击开始抽签吧。');
      window.android.handDoAbsoluteAngleMotion(10,1,270);
      window.android.setLED(0,25,1,7);
    },
    methods: {
      startDraw () {
        this.$router.push({ path: 'gyqq1'})
      }
    },
    destroyed(){
      window.android.stopSpeak();
    }
  }
</script>

<style>
  .drawLots {
    width: 100%;
    height: 100%;
  }
  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .box embed {
    width: 100%;
    height: 100%;
  }
  ::-webkit-media-controls {
    display: none !important;
  }
</style>
