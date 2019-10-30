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
  }
  .box video {
    width: 100%;
    height: 100%;
  }
  .start {
    position: absolute;
    width: 5rem;
    height: 1.5rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: rgb(103, 185, 240);
    text-align: center;
    border-radius: 5px;
    font-size: 1rem;
    color: white;
  }
  .buttonBox {
    width: 80%;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  .buttonBox p {
    width: 3rem;
    height: 1.1rem;
    color: white;
    background: url(../../../static/img/z2.png) no-repeat;
    border-radius: 5px;
    text-align: center;
    line-height: 1rem;
    font-size: 0.5rem;
  }
</style>
