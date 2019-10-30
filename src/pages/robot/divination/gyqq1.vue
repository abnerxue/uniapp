<!--
 * 万鹏飞
 * 19/10/23  14:40:00
 观音求签页面
 -->
 <template>
  <div class='buddle'>
    <div class="box">
      <div class='qq'></div>
      <p class="size">{{ji}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ji: null,
        count: '', // 倒计时
        timer: null, // 延时器
        id: null
      }
    },
    mounted () {
      this.goNext()
      this.getDate()
    },
    methods: {
      getDate () {
        var vm = this;
        this.$api.httpGet ('findLabel', '').then(function(res){
          vm.ji = res.label.label_no;
          vm.id = res.label.id;
        });
      },
      goNext () { // 自动跳转到下一个页面
        const TIME_COUNT = 1
        if (!this.timer) {
          this.count = TIME_COUNT
          this.timer = setInterval(() => { // 定时器
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              clearInterval(this.timer)
              this.timer = null
              this.$router.push({ path: 'solution', params: { id: this.id} })
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
    top: 2rem;
    right: 4.3rem;
    position: absolute;
    height: 9rem;
    width: 2rem;
    font-size: 72px;
    writing-mode: tb-rl;
  }
</style>
