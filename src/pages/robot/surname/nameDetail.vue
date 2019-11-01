<!--
 * 梁嘉琪
 * 19/10/17  8:35:24
 -->
<template>
  <div class="surnameList">
    <div class="box">
      <p>{{name}}</p>
      <p>{{detail}}</p>
    </div>
    <div class="buttonBox">
      <p v-on:click="backIndex()">返回主页</p>
      <p v-on:click="goback()">返回</p>
    </div>
  </div>
</template>

<script>
  // import { Toast } from 'vant';
  export default {
    data () {
      return {
        name: '',
        detail: '赵姓，宋代《百家姓》排名第一，而在2006年新百家姓排名第八位 。发祥地在今山西省，曾是晋国六卿之一。周穆王时的造父是汉族赵姓之始祖，截至2014年总人口大约有2670万，赵姓在北方地区是常见的姓氏之一。赵姓著名郡望有天水、涿郡、下邳、南阳、金城、颍川、敦煌、酒泉、扶风、新安、平原等11个。堂号除了与郡望名相同外，主要有半部、琴鹤、孝思、萃涣、敬彝、创基等。 据考证，赵姓出自嬴姓，远祖是伯益，而伯益则是历史上著名的黄帝之孙——“黑帝”颛顼高阳氏的后裔。'
      }
    },
    mounted () {
      this.name = this.$route.params.name
    },
    // 预编译
    methods: {
      getDataList () {

        // this.$ajax.post('/cxt/market/top/index', _this.$qs.stringify(data), {
        //   headers: _this.Base.initAjaxHeader(1, data)
        // }).then(res => {
        //   console.log(res.data.data);
        //   this.page_data=res.data.data;

        // });
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
  .surnameList {
    width: 100%;
    height: 100%;
    background-color: rgb(213, 200, 185);
    overflow: hidden;
  }
  .box {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 80%;
    padding: 0 1rem;
    box-sizing: border-box;
    justify-content: space-around;
  }
  .surnameList .box p:nth-child(1) {
    font-size: 3rem;
    margin: 1rem;
  }
  .surnameList .box p:nth-child(2) {
    font-size: 0.4rem;
    margin: 1rem;
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
    background: rgb(103, 185, 240);
    border-radius: 5px;
    text-align: center;
    line-height: 1rem;
    font-size: 0.5rem;
  }
</style>

