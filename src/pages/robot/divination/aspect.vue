<!--
 * 梁嘉琪
 * 8:35:24
 选择解签方面页面
 -->
<template>
  <div class="aspect">
    <div class="back">
      <h1>点击查看您想要问的方面</h1>
      <div class="box">
        <p v-for="(item,i) in sideList" :key="i">
          <span v-on:click="goAspect(item,i)">{{item}}</span>
        </p>
      </div>
      <!-- 6666 -->
      <div class="buttonBox">
        <p v-on:click="backIndex()">返回主页</p>
        <p v-on:click="goback()">返回</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: '', // 倒计时
        sideList: ['事业', '姻缘', '失物', '远行', '财利', '考试', '健康', '房地', '诉讼']
      }
    },
    mounted () {
    },
    methods: {
      goAspect (item, i) {
        this.$router.push({ name: 'aspectExplain', params: { side: item, number: i } })
      },
      backIndex () { // 放回主页
        this.$router.push({ name: 'index' })
      },
      goback () { // 返回上一页
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .aspect {
    width: 100%;
    height: 100%;
    background: url(../../../static/img/aibanner1.jpg) no-repeat;
    background-size: 100% 100%;
    margin: 0;
    padding: 0;
  }
  .back {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background: url("../../../static/img/aibanner1.jpg") no-repeat;
  }
  .aspect h1 {
    font-size: 0.8rem;
    text-align: center;
    padding-top: 0.5rem;
  }
  .box {
    padding: 1rem;
    height: 6rem;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .box p {
    font-size: 0.5rem;
    width: 30%;
    height: 1.2rem;
    text-align: center;
    font-weight: 900;
  }
  .box span {
    background-color: rgb(103, 185, 240);
    float: left;
    width: 3rem;
    color: white;
    margin: 0.1rem 1rem;
    height: 1rem;
    line-height: 1rem;
    border-radius: 30px;
    text-align: center;
    box-sizing: border-box;
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
    height: 1rem;
    color: white;
    background: #ff5656;
    border-radius: 5px;
    text-align: center;
    line-height: 1rem;
    font-size: 0.5rem;
  }
</style>
