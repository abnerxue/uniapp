<!--
 * 梁嘉琪
 * 8:35:24
 选择解签方面页面
 -->
<template>
  <div class="guideBuy">
    <div class="box">
      <p>{{word}}</p>
      <span></span>
    </div>
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
        obj: {},
        word: null,
      }
    },
    mounted () {
      this.obj = this.$route.params.obj;
      this.getDate();
    },
    methods: {
      getDate () {
        var arr = this.obj.goods.split('\n');
        this.word = arr[2]
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
    position: absolute;
    top:0.5rem;
    left:1rem;
    color: rgb(60, 58, 59);
    font-size: 0.5rem;
    display: inline-block;
    font-weight: 900;
    height: 100%;
    width: 100%;
    background: url(../../../static/img/12_03.png) no-repeat;
    background-size: 90% 70%;
    /* box-sizing: border-box; */
  }
  .box p {
    top: 1rem;
    left: 1.6rem;
    position: absolute;
    width: 75%;
  }
  .box span {
    top: 3rem;
    position: absolute;
    left: 6.5rem;
    display: block;
    width: 4.5rem;
    height: 4.5rem;
    background-color: white;
  }
  .buttonBox {
    width: 100%;
    height: 20%;
    position: absolute;
    padding: 0 11%;
    bottom: 1%;
  }
  .buttonBox p {
    top: -0.5rem;
    left: 1.5rem;
    float: left;
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    background: url(../../../static/img/z2.png) no-repeat;
  }
  .buttonBox p:nth-child(2) {
    left: 13.8rem;
    float: right;
    background: url(../../../static/img/z1.png) no-repeat;
  }
</style>
