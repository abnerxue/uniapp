<!--
 * 梁嘉琪
 * 8:35:24
 引导1页面
 -->
<template>
  <div class="guide1">
    <div class="box">
      <p>{{word}}</p>
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
        timer: null, // 延时器
        word: null,
        obj: {}
      }
    },
    mounted () {
      this.obj = this.$route.params.obj;
      // 自动播放
      this.goNext()
      this.getDate()
    },
    methods: {
      getDate () {
        var arr = this.obj.goods.split('\n');
        this.word = arr[1];
      },
      goNext () {
        const TIME_COUNT = 5
        if (!this.timer) {
          this.count = TIME_COUNT
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
              this.$router.push({ path: 'guideBuy', params: { obj: this.obj } })
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
  .guide1 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../../../static/img/12back.jpg") no-repeat;
    background-size: 100% 100% !important;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .box {
    position: absolute;
    top:0.5rem;
    left:1rem;
    color: rgb(60, 58, 59);
    font-size: 0.5rem;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: url("../../../static/img/12_03.png") no-repeat;
    background-size: 90% 70%;
    /* box-sizing: border-box; */
  }
  .box p {
    position: absolute;
    top: 3rem;
    left: 2rem;
    width: 70%;
  }
  .buttonBox {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 0 11%;
    bottom: 1%;
  }
  .buttonBox p {
    position: absolute;
    top:9.7rem;
    left:-8.5rem;
    float: left;
    width: 100%;
    height: 100%;
    color: white;
    background: url(../../../static/img/z2.png) no-repeat;
  }
  .buttonBox p:nth-child(2) {
    left:3.8rem;
    float: right;
    background: url(../../../static/img/z1.png) no-repeat;
  }
</style>
