<!--
 * 万鹏飞
 * 19/10/22  14:40:00
 事业页面
 -->
 <template>
  <div class="sy">
    <div class="book"></div>
    <div class="text"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      goNext () {
        const TIME_COUNT = 10
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
              this.$router.push({ name: 'guide' })
            }
          }, 1000)
        }
      }

    },
    destroyed () {
      clearInterval(this.timer)
    }
  }
</script>

 <style>
  .sy {
    position: relative;
    height: 100%;
    width: 100%;
    background: url(../../../static/img/11back.jpg);
    background-size: 100% 100%;
  }
  .book {
    position: absolute;
    top: 2.6rem;
    left: 5rem;
    height: 5.5rem;
    width: 10rem;
    background: url(../../../static/img/28.png);
    background-size: 100% 100%;
  }
  .text {
    position: absolute;
    top: 2.6rem;
    left: 5rem;
    height: 5.5rem;
    width: 10rem;
    background: url(../../../static/img/11_02.png);
    background-size: 100% 100%;
  }
</style>
