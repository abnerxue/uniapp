<!--
 * 梁嘉琪
 * 19/10/17  8:35:24
 -->
<template>
  <div class="index">
    <div class="back">
      <p v-on:click="changeBg(0)"></p>
      <p v-on:click="changeBg(1)"></p>
      <p v-on:click="changeBg(2)"></p>
    </div>
  </div>
</template>

<script>
  // import { Toast } from 'vant';
  /*  import global_ from './global'//引用文件
      Vue.prototype.GLOBAL = global_//挂载到Vue实例上面 */
  export default {
    data () {
      return {
      }
    },
    mounted () {
    },
    // 预编译
    methods: {
      changeBg (index) {
        this.changeColor = index
        console.log(this.changeColor)
        if (index === 0) {
          this.$router.push('/pages/robot/divination/drawLots')
        } else if (index === 1) {
          this.$router.push('/pages/robot/divinationsurnameList')
        } else if (index === 2) {
          this.$router.push('/pages/robot/divination/drawLots')
        }
      },
      gonext () {
        // this.$ajax.post('/cxt/market/top/order', _this.$qs.stringify(data), {
        //     headers: _this.Base.initAjaxHeader(1, data)
        //   }).then(res => {
        //       if(res.data.state==='000'){
        //       this.pagef_data=res.data.data
        //       let a=this.pagef_data.orderno
        //       let b=this.pagef_data.money

        //        this.$router.push({
        //   path:"/webbuy",
        //   query:{
        //    orderNo:a,
        //    money:b
        //   }
        // })
        //       }else{
        //          console.log(res.data.state)
        //         Toast(res.data.msg)
        //       }
        //   });
      },
      getDataList () {

        // this.$ajax.post('/cxt/market/top/index', _this.$qs.stringify(data), {
        //   headers: _this.Base.initAjaxHeader(1, data)
        // }).then(res => {
        //   console.log(res.data.data);
        //   this.page_data=res.data.data;

        // });
      },
      onClickLeft () {
        // this.$router.back("Market");
      }
    }
  }

</script>

<style scoped>
  .index {
    width: 100%;
    height: 100%;
    background: url("../../static/img/1back.jpg") no-repeat;
    background-size: 100% 100%;
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
    background: url("../../static/img/1back.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .back p {
    width: 1.5rem;
    height: 9rem;
    background: url("../../static/img/divination1.png") no-repeat;
    background-size: 100% 100%;
    border-radius: 25px;
  }
  .back p:nth-child(2) {
    background: url("../../static/img/surname1.png") no-repeat;
    background-size: 100% 100%;
  }
  .back p:nth-child(3) {
    background: url("../../static/img/king1.png") no-repeat;
    background-size: 100% 100%;
  }
  .back .changebg {
    background: rgb(232, 205, 20);
  }
</style>

