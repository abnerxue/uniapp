<!--
 * 万鹏飞
 * 19/10/23  14:40:00
 观音求签页面
 -->
 <template>
  <div class='buddle'>
    <div class="box">
      <div class='qq'></div>
      <p class="size">观音求签 第 {{ji}} 签</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ji: '一',
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
              this.$router.push('/pages/robot/divination/solution')
            }
          }, 1000)
        }
      },
      backIndex () { // 放回主页
        this.$router.push('/pages/robot/index')
      },
      back () { // 返回上一页
        this.$router.push('/pages/robot/divination/drawLots')
      }
    },
    destroyed () {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped>
  .buddle {
    height: 100%;
    width: 100%;
    background: url(../../../static/img/8back.jpg) no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }
  .box {
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(../../../static/img/8back.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .qq {
    top: 0.5rem;
    right: 2.7rem;
    position: absolute;
    height: 10rem;
    width: 4rem;
    background: url(../../../static/img/8_02.png) no-repeat;
  }
  .box p {
    top: 2.3rem;
    right: 4.3rem;
    position: absolute;
    height: 9rem;
    width: 2rem;
    font-size: 72px;
    writing-mode: tb-rl;
  }
</style>
