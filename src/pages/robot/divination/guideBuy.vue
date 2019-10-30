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
        data: null,
        word: null
      }
    },
    mounted () {
      this.id = this.$route.params.id;
      this.getDate()
    },
    methods: {
      getDate () {
        var vm = this;
        this.$api.httpGet('findLabelById', 'id=' + vm.id).then(function (res) {
          var arr = res.labelType.goods.split('\n');
          console.log(arr);
          vm.word = arr[2]
        });
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
    position: relative;
    color: rgb(60, 58, 59);
    font-size: 0.5rem;
    display: inline-block;
    font-weight: 900;
    height: 70%;
    width: 70%;
    background: url(../../../static/img/12_03.png) no-repeat;
    /* box-sizing: border-box; */
  }
  .box p {
    top: 16%;
    left: 10%;
    position: absolute;
    width: 82%;
  }
  .box span {
    top: 50%;
    position: absolute;
    left: 37%;
    display: block;
    width: 23%;
    height: 40%;
    background-color: white;
  }
  .buttonBox {
    width: 100%;
    height: 11%;
    position: absolute;
    padding: 0 11%;
    bottom: 1%;
  }
  .buttonBox p {
    float: left;
    width: 18%;
    height: 100%;
    color: white;
    background: url(../../../static/img/z2.png) no-repeat;
  }
  .buttonBox p:nth-child(2) {
    float: right;
    background: url(../../../static/img/z1.png) no-repeat;
  }
</style>
