<!--
 * 梁嘉琪
 * 8:35:24
 引导页面
 -->
<template>
  <div class="guide">
    <div class="box">
      <p>{{goods}}</p>
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
        goods: null, // 要卖的物品
        obj: {},
      }
    },
    mounted () {
      this.obj = this.$route.params.obj;
      window.android.handDoAbsoluteAngleMotion(10,1,0);
      window.android.setLED(0,25,1,7);
      // 自动播放
      this.goNext()
      this.getDate()
    },
    methods: {
      getDate () {
        var arr = this.obj.goods.split('\n');
        this.goods = arr[0]
        window.android.startSpeak(this.goods);
      },
      goNext () {
        const TIME_COUNT = 60
        if (!this.timer) {
          this.count = TIME_COUNT
          this.timer = setInterval(() => { // 定时器
            if (this.count > 0 && this.count <= TIME_COUNT) {
              window.android.handDoAbsoluteAngleMotion(10,1,this.count);
              if(window.android.isSpeaking()==1){
                this.count--;
              } else {
                clearInterval(this.timer)
                this.timer = null
                this.$router.push({ path: 'guide1', params: { obj: this.obj } })
              }
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
      window.android.stopSpeak();
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
    overflow: hidden;
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
    height: 20%;
    position: absolute;
    padding: 0 11%;
    bottom: 1%;
  }
  .buttonBox p {
    top: -0.5rem;
    left: -8.5rem;
    float: left;
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    background: url(../../../static/img/z2.png) no-repeat;
  }
  .buttonBox p:nth-child(2) {
    left: 3.8rem;
    float: right;
    background: url(../../../static/img/z1.png) no-repeat;
  }
  
</style>
