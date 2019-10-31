<!--
 * 梁嘉琪
 * 8:35:24
 解签说明页面
 -->
<template>
  <div class="explain">
    <div class="box">
      <p>签是问事的，请问您求什么?<br />问一件事求一次签，心诚则灵。</p>
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
        timer: null, // 延时器
        obj: null,
      }
    },
    mounted () {
      this.obj = this.$route.params.obj;
      this.goNext()
    },
    methods: {
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
              this.$router.push({ path: 'aspect1', params: { obj: this.obj} })
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
  .explain {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../../static/img/9--4.jpg) no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 3rem;
    width: 100%;
  }
  .box{
    position: absolute;
    top: 2.6rem;
    left: 5rem;
    height: 5.5rem;
    width: 10rem;
    background: url(../../../static/img/28.png) no-repeat;
    background-size: 100% 100%;
  }
  .box > p {
    position: absolute;
    left:0.4rem;
    color: white;
    font-size: 1rem;
    font-weight: 900;
    display: inline-block;
    opacity: 0.9;
    padding: 0.8rem 1.4rem 0.8rem 0.8rem;
    font-size:48px;
    text-align: center;
    line-height: 1rem;
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
    position: absolute;
    top:2.2rem;
    left:-5rem;
    width: 4.5rem;
    height: 2rem;
    background: url(../../../static/img/z2.png) no-repeat;
    border-radius: 5px;
    text-align: center;
  }
  .buttonBox p:nth-child(2) {
    top:2.2rem;
    left:6.7rem;
    background: url(../../../static/img/z1.png) no-repeat;
  }
</style>
