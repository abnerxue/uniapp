<!--
 * 梁嘉琪
 * 8:35:24
 选择解签方面页面
 -->
<template>
  <div class="guideBuy">
    <div class="box">
      <p>{{word}}</p>
    </div>
    <span></span>
    <div class="buttonBox">
      <p v-on:click="backIndex()"></p>
      <p v-on:click="goback()"></p>
    </div>
  </div>
</template>

<script>




  export default {
    data () {
      return {
        count: '', // 倒计时
        data: null,
        word: '我的左手边有功德箱，上面有条缝，一般大家投200元，您看着给。您也可以选择我胸口的微信支付宝扫码付款哦~   '
      }
    },
    mounted () {
      // 获取路由器传过来的值
      this.side = this.$route.params.side
      this.i = this.$route.params.number
    },
    methods: {
      getDate () {

      },
      backIndex () { // 放回主页
        this.$router.push('/pages/robot/index')
      },
      goback () { // 返回上一页
        this.$router.push('/pages/robot/divination/drawLots')
      }
    }
  }
</script>

<style scoped>
  .guideBuy {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../../../static/img/12back.jpg") no-repeat;
    background-size: 100% 100% !important;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .box {
    padding: 0.4rem 0.4rem;
    color: #f44;
    font-size: 0.6rem;
    display: inline-block;
    font-weight: 900;
    height: 8rem;
    width: 14rem;
    opacity: 0.9;
    background: url(../../../static/img/12_03.png) no-repeat;
    /* box-sizing: border-box; */
  }
  .box p {
    top: 1.5rem;
    left: 4.3rem;
    position: absolute;
    width: 11.2rem;
  }
  span {
    top: 4.1rem;
    left: 8rem;
    position: absolute;
    display: block;
    width: 3rem;
    height: 3rem;
    background-color: white;
  }
  .buttonBox {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .buttonBox p {
    width: 3rem;
    height: 1.1rem;
    background: url(../../../static/img/z2.png) no-repeat;
    border-radius: 5px;
    text-align: center;
    line-height: 1rem;
    font-size: 0.5rem;
  }
  .buttonBox p:nth-child(2) {
    background: url(../../../static/img/z1.png) no-repeat;
  }
</style>
