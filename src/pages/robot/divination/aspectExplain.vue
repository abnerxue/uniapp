<!--
 * 梁嘉琪
 * 19/10/17  8:35:24
 方面解签页面
 -->
<template>
  <div class="aspectExplain" :style="'background: url(../../../static/img/9-' + i + '.jpg) no-repeat;'">
    <div class="back">
      <div class="box">
        <p><span>{{side}}</span>：{{word}}</p>
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
        count: '', // 倒计时
        side: '', // 选择的方面
        i: null, // 背景照片
        data: null,
        timer: null, // 延时器
        word: '会有条件很好的人喜欢您，欣赏您，您要把握好机会，就会有一段美好的姻缘。但是切忌一心一意，绝不能三心二意。'
      }
    },
    mounted () {
      // 获取路由器传过来的值
      this.side = this.$route.params.side
      this.i = this.$route.params.number + 1
      // console.log(this.$route.params.number + 1,this.$route.params.side)
      // 自动播放
      this.goNext()
    },
    methods: {
      goNext () {
        const TIME_COUNT = 10 // 自动播放秒数
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
              // 跳转的页面写在此处
              this.$router.push('/pages/robot/divination/guide')
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

<style>
  .aspectExplain {
    position: absolute;
    width: 100%;
    height: 100%;
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
    top: 2.6rem;
    left: 5rem;
    height: 5.5rem;
    width: 10rem;
    background: url(../../../static/img/28.png);
    background-size: 100% 100%;
  }
  .box p {
    position: absolute;
    top: 1.2rem;
    left: 1.3rem;
    height: 5.5rem;
    width: 7rem;
    display: inline-block;
    font-size: 42px;
    color: #606740;
    font-family: "杨任东竹石体";
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
