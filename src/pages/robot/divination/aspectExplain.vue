<!--
 * 梁嘉琪
 * 19/10/17  8:35:24
 方面解签页面
 -->
<template>
  <div class="aspectExplain" :style="'background: url(../../../static/img/9--' + i + '.jpg) no-repeat;'">
    <div class="back">
      <div class="box">
        <p><span></span>{{word}}</p>
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
        timer: null, // 延时器
        word: null,
        obj: {}
      }
    },
    mounted () {
      // 获取路由器传过来的值
      this.i = this.$route.params.number + 1
      this.obj = this.$route.params.obj;
      this.side = this.$route.params.side;
      if(this.side == '事业'){
        this.word = this.obj.shiye
      }else if(this.side == '房地'){
        this.word = this.obj.fangdi
      }else if(this.side == '财利'){
        this.word = this.obj.caili
      }else if(this.side == '姻缘'){
        this.word = this.obj.huiyin
        console.log(this.obj.hunyin)
      }else if(this.side == '健康'){
        this.word = this.obj.jiankang
      }else if(this.side == '考试'){
        this.word = this.obj.kaoshi
      }else if(this.side == '失物'){
        this.word = this.obj.shiwu
      }else if(this.side == '诉讼'){
        this.word = this.obj.susong
      }else if(this.side == '远行'){
        this.word = this.obj.yuanxing
      }
      // 自动播放
      this.goNext()
      
    },
    methods: {
      goNext () {
        const TIME_COUNT = 5 // 自动播放秒数
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
              this.$router.push({ path: 'guide', params: { obj: this.obj} })
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
    top: 0.5rem;
    left: 1.3rem;
    height: 5.5rem;
    width: 7.5rem;
    font-weight: 900;
    display: inline-block;
    font-size: 38px;
    color: white;
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
