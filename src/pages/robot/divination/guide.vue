<!--
 * 梁嘉琪
 * 8:35:24
 引导页面
 -->
<template>
  <div class="guide">
    <div class="box">
      <p>为了保持你的好运，我这里有{{goods}}一串，你拿回去挂在大门口，就能让你的福气维持住，不光你自己有福气，还能把你的好福气带给家人，庇护家庭。</p>
    </div>
    <div class="buttonBox">
      <p v-on:click="backIndex()"></p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: '', // 倒计时
        data: null,
        timer: null, // 延时器
        goods: '五铢钱' // 要卖的物品
      }
    },
    mounted () {
      // 自动播放
      this.goNext()
    },
    methods: {
      getDate () {

      },
      goNext () {
        const TIME_COUNT = 10
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
              this.$router.push('/pages/robot/divination/guide1')
            }
          }, 1000)
        }
      },
      backIndex () { // 放回主页
        this.$router.push('/pages/robot/index')
      }
    },
    destroyed () {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped>
  .guide {
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
    padding: 0.4rem 0.4rem;
    color: #f44;
    font-size: 0.6rem;
    display: inline-block;
    font-weight: 900;
    height: 9rem;
    width: 14rem;
    opacity: 0.9;
    background: url("../../../static/img/12_03.png") no-repeat;
    /* box-sizing: border-box; */
  }
  .box p {
    top: 3.4rem;
    left: 4.6rem;
    position: absolute;
    width: 11.2rem;
  }
  .buttonBox {
    top:9.7rem;
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
</style>
