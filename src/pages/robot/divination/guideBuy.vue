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
        this.$api.httpGet ('findLabelById', 'id='+vm.id).then(function(res){
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
    top: 5.2rem;
    position: absolute;
    display: block;
    width: 2.5rem;
    height: 2.5rem;
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
