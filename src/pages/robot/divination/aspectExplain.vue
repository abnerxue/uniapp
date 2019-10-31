<!--
 * 梁嘉琪
 * 19/10/17  8:35:24
 方面解签页面
 -->
<template>
  <div class="aspectExplain" :style="'background: url(../../../static/img/9-' + i + '.jpg) no-repeat;'">
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
        data: null,
        timer: null, // 延时器
        word: null
      }
    },
    mounted () {
      // 获取路由器传过来的值
      this.side = this.$route.params.side
      this.i = this.$route.params.number + 1
      this.id = this.$route.params.id;
      // console.log(this.$route.params.number + 1,this.$route.params.side)
      // 自动播放
      this.goNext()
      this.getDate()
    },
    methods: {
      getDate () {
        var vm = this
        this.$api.httpGet ('findLabelById', 'id='+vm.id).then(function(res){
          if(vm.side == '事业'){
            vm.word = res.label.label_type_shiye
          }else if(vm.side == '房地'){
            vm.word = res.label.label_type_fangdi
          }else if(vm.side == '财利'){
            vm.word = res.label.label_type_caili
          }else if(vm.side == '姻缘'){
            vm.word = res.label.label_type_hunyin
          }else if(vm.side == '健康'){
            vm.word = res.label.label_type_jiankang
          }else if(vm.side == '考试'){
            vm.word = res.label.label_type_kaoshi
          }else if(vm.side == '失物'){
            vm.word = res.label.label_type_shiwu
          }else if(vm.side == '诉讼'){
            vm.word = res.label.label_type_susong
          }else if(vm.side == '远行'){
            vm.word = res.label.label_type_yuanxing
          }
          
        })
      },
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
              this.$router.push({ path: 'guide', params: { id: this.id} })
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
    display: inline-block;
    font-size: 38px;
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
