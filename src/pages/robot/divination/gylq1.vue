<!--
 * 万鹏飞
 * 19/10/23  14:40:00
 观音灵签第一签页面
 -->
 <template>
  <div class='gylq1'>
    <div class="box1">
      <p v-on:click='title()'></p>
    </div>
    <div class="box2">
      <p v-on:click='qw()'></p>
    </div>
    <div class='box3'>
      <p v-on:click='tu()'></p>
      <p v-on:click='wen()'></p>
    </div>
    <div class='box4'>
      <p v-on:click='backIndex()'></p>
      <p v-on:click='back()'></p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
      this.goNext()
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
              this.$router.push({ name: 'explain' })
            }
          }, 1000)
        }
      },
      backIndex () { // 放回主页
        this.$router.push({ name: 'index' })
      },
      back () { // 返回上一页
        this.$router.go({ name: 'drawLots' })
      }
    },
    destroyed () {
      clearInterval(this.timer)
    }
  }
</script>

 <style scoped>
  .gylq1 {
    height: 100%;
    width: 100%;
    background: url(../../../static/img/9back.jpg);
    background-size: 100% 100%;
  }
  .box1 {
    height: 1.5rem;
    width: 100%;
    background-size: 100% 100%;
  }
  .box1 p {
    height: 1.5rem;
    width: 100%;
    background: url(../../../static/img/9_03.png) no-repeat;
    background-position: center;
  }
  .box2 {
    height: 1.5rem;
    width: 100%;
    background-size: 100% 100%;
  }
  .box2 p {
    height: 1.5rem;
    width: 100%;
    background: url(../../../static/img/9_06.png) no-repeat;
    background-position: center;
  }
  .box3 {
    height: 5rem;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .box3 p {
    height: 5rem;
    width: 5rem;
    background: url(../../../static/img/9_08.png) no-repeat;
    background-size: 100% 100%;
  }
  .box3 p:nth-child(2) {
    height: 5rem;
    width: 7rem;
    background: url(../../../static/img/9_09.png) no-repeat;
    background-size: 100% 100%;
  }
  .box4 {
    height: 2rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .box4 p {
    height: 1.3rem;
    width: 2.8rem;
    background: url(../../../static/img/9_11.png);
    background-size: 100% 100%;
    border-radius: 25px;
  }
  .box4 p:nth-child(2) {
    background: url(../../../static/img/9_13.png);
    background-size: 100% 100%;
  }
</style>
