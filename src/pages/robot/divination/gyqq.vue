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
        this.$router.push({ path: 'gyqq1'})
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
    top: 0.5rem;
    right: -11rem;
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(../../../static/img/qq7_03.png) no-repeat;
  }
  .buddle p {
    top: 8.5rem;
    right: -12.5rem;
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(../../../static/img/qq7_07.png) no-repeat;
  }
</style>
