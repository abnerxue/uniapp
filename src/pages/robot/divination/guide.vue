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
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: '', // 倒计时
        data: null,
        timer: null, // 延时器
        goods: null // 要卖的物品
      }
    },
    mounted () {
      this.id = this.$route.params.id;
      // 自动播放
      this.goNext()
      this.getDate()
    },
    methods: {
      getDate () {
        var vm = this;
        this.$api.httpGet('findLabelById', 'id=' + vm.id).then(function (res) {
          var arr = res.labelType.goods.split('\n');
          console.log(arr);
          vm.goods = arr[0]
        });
      },
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
              this.$router.push({ path: 'guide1', params: { id: this.id } })
            }
          }, 1000)
        }
      },
      backIndex () { // 放回主页
        this.$router.push('/pages/robot/index')
      }
    },
    destroyed () {
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
    height: 100%;
    position: absolute;
    padding: 0 11%;
    bottom: 1%;
  }
  .buttonBox p {
    position: absolute;
    top:9.7rem;
    left:-8.5rem;
    float: left;
    width: 100%;
    height: 100%;
    color: white;
    background: url(../../../static/img/z2.png) no-repeat;
  }
</style>
