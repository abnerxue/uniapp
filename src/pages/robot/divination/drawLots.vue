<!--
 * 梁嘉琪
 * 8:35:24
 招揽生意视频页面
 -->
<template>
  <div class="drawLots">
    <div class="box">
      <video src="../../../static/img/video.mp4" autoplay loop v-on:click="startDraw()"></video>
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
    methods: {
      startDraw () {
        this.$router.push('/pages/robot/divination/gyqq')
      },
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
  .box video {
    width: 100%;
    height: 100%;
  }
  ::-webkit-media-controls {
    display: none !important;
  }
</style>
