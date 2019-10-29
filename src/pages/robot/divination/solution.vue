<!--
 * 梁嘉琪
 * 19/10/17  8:35:24
解签页面
 -->
<template>
  <div class="solution">\
    <div class="back">
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
  </div>
</template>

<script>
  export default {
    data () {
      return {
        number: '观音灵签第一签',
        poetry: '开天辟地作良缘 吉日良时万物全 若得此签非小可 人行忠正帝王宣',
        solution: '      您好，您运气真好，今天您抽到了我的第一个上上签，这是个天王签，能在自己工作的领域中称王，但千万要注意提防小人，要低调做人。这签意思是说您求的无论是哪个方面都会有个好的结果。',
        count: '', // 倒计时
        timer: null, // 延时器
        ku: {
          // 数据结构见下方文档
        },
        goods: {
          // 数据结构见下方文档
        },
        messageConfig: {
          // 数据结构见下方文档
        }
      }
    },
    mounted () {
      this.goNext() // 执行自动跳转
      this.getDate()
    },
    methods: {
      getDate () {
        this.page_data = { id: 1 }

        this.$ajax.get('/cxt/findLabelById?id=1').then(res => {
          console.log(res)
          // if(res.data.state==='000'){
          //     this.pagef_data=res.data.data
          //     let a=this.pagef_data.orderno
          //     let b=this.pagef_data.money
          // }else{
          //     console.log(res.data.state);
          //     Toast(res.data.msg);
          // }
        }).catch(function (error) {
          console.log(error)
        })
      },
      goNext () { // 自动跳转到下一个页面
        const TIME_COUNT = 10
        if (!this.timer) {
          this.count = TIME_COUNT
          this.timer = setInterval(() => { // 定时器
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              clearInterval(this.timer)
              this.timer = null
              this.$router.push('/pages/robot/divination/solution1')
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
