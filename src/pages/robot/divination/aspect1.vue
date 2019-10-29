<!--
 * 万鹏飞
 * 8:35:24
 选择解签方面页面
 -->
<template>
  <div class="aspect">
    <div class="box1">
      <div class="select"></div>
    </div>
    <div class="box2">
      <p v-on:click="sy()"></p>
      <p v-on:click="yy()"></p>
      <p v-on:click="jk()"></p>
    </div>
    <div class="box3">
      <p v-on:click="yx()"></p>
      <p v-on:click="ss()"></p>
      <p v-on:click="fd()"></p>
    </div>
    <div class="box4">
      <p v-on:click="cl()"></p>
      <p v-on:click="ks()"></p>
      <p v-on:click="sw()"></p>
    </div>   
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: '', // 倒计时
        sideList: ['事业', '姻缘', '失物', '远行', '财利', '考试', '健康', '房地', '诉讼']
      }
    },
    mounted () {
    },
    methods: {
      sy () {
        this.$router.push({ path: 'aspectExplain', params: { side: '事业', number: 0 } })
      },
      yy () {
        this.$router.push({ path: 'aspectExplain', params: { side: '姻缘', number: 1 } })
      },
      jk () {
        this.$router.push({ path: 'aspectExplain', params: { side: '健康', number: 2 } })
      },
      yx () {
        this.$router.push({ path: 'aspectExplain', params: { side: '远行', number: 3 } })
      },
      ss () {
        this.$router.push({ path: 'aspectExplain', params: { side: '诉讼', number: 4 } })
      },
      fd () {
        this.$router.push({ path: 'aspectExplain', params: { side: '房地', number: 5 } })
      },
      cl () {
        this.$router.push({ path: 'aspectExplain', params: { side: '财利', number: 6 } })
      },
      ks () {
        this.$router.push({ path: 'aspectExplain', params: { side: '考试', number: 7 } })
      },
      sw () {
        this.$router.push({ path: 'aspectExplain', params: { side: '失物', number: 8 } })
      }
    }
  }
</script>

<style scoped>
  .aspect {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../../static/img/10.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .box1 {
    height: 2.5rem;
    width: 100%;
    background-size: 100% 100%;
  }
  .select {
    position: absolute;
    top: 1.5rem;
    left: 5rem;
    height: 1rem;
    width: 9rem;
    background: url(../../../static/img/10_03.png) no-repeat;
  }
  .box2 {
    position: relative;
    height: 2rem;
    width: 100%;
    background-size: 100% 100%;
  }
  .box2 p {
    position: absolute;
    top: 0.5rem;
    left: 4rem;
    height: 1.5rem;
    width: 9rem;
    background: url(../../../static/img/10_07.png) no-repeat;
  }
  .box2 p:nth-child(2) {
    position: absolute;
    top: 0.5rem;
    left: 8.5rem;
    height: 1.5rem;
    width: 9rem;
    background: url(../../../static/img/10_09.png) no-repeat;
  }
  .box2 p:nth-child(3) {
    position: absolute;
    top: 0.5rem;
    left: 13rem;
    height: 1.5rem;
    width: 9rem;
    background: url(../../../static/img/10_11.png) no-repeat;
  }
  .box3 {
    position: relative;
    height: 2rem;
    width: 100%;
    background-size: 100% 100%;
  }
  .box3 p {
    position: absolute;
    top: 0.5rem;
    left: 4rem;
    height: 1.5rem;
    width: 9rem;
    background: url(../../../static/img/10_16.png) no-repeat;
  }
  .box3 p:nth-child(2) {
    position: absolute;
    top: 0.5rem;
    left: 8.5rem;
    height: 1.5rem;
    width: 9rem;
    background: url(../../../static/img/10_17.png) no-repeat;
  }
  .box3 p:nth-child(3) {
    position: absolute;
    top: 0.5rem;
    left: 13rem;
    height: 1.5rem;
    width: 9rem;
    background: url(../../../static/img/10_18.png) no-repeat;
  }
  .box4 {
    position: relative;
    height: 2rem;
    width: 100%;
    background-size: 100% 100%;
  }
  .box4 p {
    position: absolute;
    top: 0.5rem;
    left: 4rem;
    height: 1.5rem;
    width: 9rem;
    background: url(../../../static/img/10_22.png) no-repeat;
  }
  .box4 p:nth-child(2) {
    position: absolute;
    top: 0.5rem;
    left: 8.5rem;
    height: 1.5rem;
    width: 9rem;
    background: url(../../../static/img/10_23.png) no-repeat;
  }
  .box4 p:nth-child(3) {
    position: absolute;
    top: 0.5rem;
    left: 13rem;
    height: 1.5rem;
    width: 9rem;
    background: url(../../../static/img/10_24.png) no-repeat;
  }
</style>
