<!--
 * 万鹏飞
 * 19/10/22  14:40:00
 观音求签页面
 -->
 <template>
  <div class='buddle'>
    <div class='box'>
      <div class='cqh'></div>
      <p v-on:click="button()"></p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      button () {
        this.$router.push('/pages/robot/divination/gyqq1')
      }
    }
  }
</script>

<style scoped>
  .buddle {
    height: 100%;
    width: 100%;
    background: url(../../../static/img/qq7.jpg) no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }
  .box {
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(../../../static/img/qq7.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .cqh {
    top: 1.6rem;
    right: 3rem;
    position: absolute;
    height: 5rem;
    width: 4.5rem;
    background: url(../../../static/img/qq7_03.png);
  }
  .buddle p {
    top: 7.5rem;
    right: 2.5rem;
    position: absolute;
    height: 3rem;
    width: 4rem;
    background: url(../../../static/img/qq7_07.png) no-repeat;
  }
</style>
