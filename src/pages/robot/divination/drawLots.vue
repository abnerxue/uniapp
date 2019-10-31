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
    methods: {
      startDraw () {
        this.$router.push({ path: 'gyqq1'})
      }
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
