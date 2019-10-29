<!--
 * 梁嘉琪
 * 8:35:24
 解签页面
 -->
<template>
  <div class="solution1">
    <div class="box">
      <h1 class="red ">{{number}}</h1>
      <p class="red">签文：{{poetry}}</p>
    </div>
    <div class="slbox">
      <img src="../../../static/img/9_08.png" alt="">
      <p>{{solution}}</p>
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
        number: '观音灵签第一签',
        poetry: '开天辟地作良缘 吉日良时万物全 若得此签非小可 人行忠正帝王宣',
        solution: '每一件事情都会顺顺利利的，出门旅游都会平平安安的，运气好的话还能捡到宝。但是您也并不能松懈下来，还是要老老实实工作，到时候您本身运气好，就会得到赏识和拥戴，福运自然而然的来。',
        count: '', // 倒计时
        timer: null // 延时器
      }
    },
    mounted () {
      this.goNext()
    },
    methods: {
      goNext () {
        const TIME_COUNT = 10
        if (!this.timer) {
          this.count = TIME_COUNT
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              clearInterval(this.timer)
              this.timer = null
              this.$router.push('/pages/robot/divination/explain')
            }
          }, 1000)
        }
      },
      backIndex () { // 放回主页
        this.$router.push('/pages/robot/index')
      },
      goback () { // 返回上一页
        this.$router.push('/pages/robot/divination/drawLots')
      }
    },
    destroyed () {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped>
  .solution1 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../../static/img/9back.jpg);
    background-size: 100% 100%;
  }
  .box {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 0.4rem;
    height: 2rem;
    text-align: center;
  }
  .box h1 {
    font-size: 0.8rem;
  }
  .box p {
    font-size: 0.4rem;
  }
  .slbox {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    bottom: 0;
    width: 100%;
    height: 8rem;
    padding-top: 0.5rem;
    box-sizing: border-box;
  }
  .slbox img {
    width: 8rem;
    height: 5rem;
    float: left;
  }
  .slbox p {
    float: left;
    width: 8rem;
    font-size: 0.5rem;
    height: 5rem;
  }
  .red {
    color: rgb(249, 109, 109);
  }
  .buttonBox {
    width: 80%;
    position: absolute;
    left: 1.8rem;
    bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  .buttonBox p:nth-child(2) {
    background: url(../../../static/img/z1.png) no-repeat;
  }
</style>
