<!--
 * 梁嘉琪
 * 19/10/17  8:35:24
解签页面
 -->
<template>
  <div class="solution">
    <div class="back">
      <div class="box">
        <h1 class="red ">{{obj.no}}</h1>
        <p class="red">{{obj.poetry}}</p>
      </div>
      <div class="slbox">
        <img src="../../../static/img/9_08.png" alt="">
        <p>{{obj.solution}}</p>
      </div>
      <div class="buttonBox">
        <p v-on:click="backIndex()"></p>
        <p v-on:click="goback()"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        obj : {},
        count: '', // 倒计时
        timer: null, // 延时器
      }
    },
    mounted () {
      this.obj = this.$route.params.obj;
      this.goNext();
      
    },
    methods: {
      goNext () { // 自动跳转到下一个页面
        const TIME_COUNT = 5
        if (!this.timer) {
          this.count = TIME_COUNT
          this.timer = setInterval(() => { // 定时器
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              clearInterval(this.timer)
              this.timer = null
              this.$router.push({ path: 'solution1', params: { obj : this.obj} })
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
  .solution {
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
    position: absolute;
    top:-0.5rem;
    left:1rem;
    width: 8rem;
    height: 5rem;
    float: left;
  }
  .slbox p {
    position: absolute;
    top:0rem;
    left:9.5rem;
    float: left;
    width: 9rem;
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
    width: 4.5rem;
    height: 2rem;
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
