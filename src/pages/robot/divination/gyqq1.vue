<!--
 * 万鹏飞
 * 19/10/23  14:40:00
 观音求签页面
 -->
 <template>
  <div class='buddle'>
    <div class="box">
      <!-- <div class='qq'></div>
      <p class="size">观音求签 第 {{ji}} 签</p> -->
      <embed v-if="show" src="../../../static/img/drawLots.gif" />
      <p v-if="show1">
        <i>{{number}}</i>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // ji: '一',
        count: '', // 倒计时
        timer: null, // 延时器
        show: true,
        show1: false,
        number: 19,
        timer1: null,
        id: null
      }
    },
    mounted () {
      this.timer1 = setInterval(() => { // 定时器
        this.show = false;
        this.show1 = true;
        clearInterval(this.timer1)
      }, 5000)
      this.goNext()
      this.getDate()
    },
    methods: {
      getDate () {
        var vm = this;
        this.$api.httpGet ('/findLabel', '').then(function(res){
          console.log(res)
          vm.ji = res.label.label_no;
          vm.id = res.label.id;
        });
      },
      goNext () { // 自动跳转到下一个页面
        const TIME_COUNT = 3;
        if (!this.timer) {
          this.count = TIME_COUNT
          this.timer = setInterval(() => { // 定时器
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              clearInterval(this.timer)
              this.timer = null
              this.$router.push({ path: 'solution', params: { id: this.id} })
            }
          }, 3000)
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
    /* background: url(../../../static/img/8back.jpg) no-repeat; */
    background-size: 100% 100%;
    overflow: hidden;
  }
  .box {
    position: absolute;
    height: 100%;
    width: 100%;
    /* background: url(../../../static/img/8back.jpg) no-repeat; */
    background-size: 100% 100%;
  }
  embed {
    height: 100%;
    width: 100%;
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
    width: 100%;
    height: 100%;
    background: url(../../../static/img/drawLots.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .box p i {
    width: 4%;
    height: 6%;
    position: absolute;
    top: 33%;
    left: 47.8%;
    font-style: normal;
    font-size: 68%;
    text-align: center;
  }
</style>
