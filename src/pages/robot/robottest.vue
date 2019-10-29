<!--
 * @Description
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2019-10-28 15:47:47
 * @LastEditors: 薛松田
 * @LastEditTime: 2019-10-29 10:42:47
 -->
<template>
  <div>
    <h3 @click='go'>相信自己，你可以的，机器人，人工智能，机器学习，神经网络，一把梭哈，骚年，未来是你的</h3>
  </div>
</template>
<script>
  export default {
    methods: {
      go () {
        this.$router.push('/pages/robot/test1234')
      }
    }
  }
</script>