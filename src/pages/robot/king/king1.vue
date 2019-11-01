<!--
 * 万鹏飞
 * 19/10/22  14:40:00
 皇帝页面
 -->
 <template>
  <div>
    <div class='box1'>
      <p v-on:click='kang()'></p>
      <p v-on:click='cheng()'></p>
      <p v-on:click='ming()'></p>
      <p v-on:click='yuan()'></p>
    </div>
    <div class='box2'>
      <p v-on:click='backIndex()'></p>
      <p v-on:click='backKing()'></p>
    </div>
  </div>
</template>
 <style >
  .box1 {
    height: 9rem;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .box1 p {
    height: 9rem;
    width: 1.5rem;
    background: url(../../../static/img/king3_10.png);
    background-size: 100% 100%;
    border-radius: 25px;
  }
  .box1 p:nth-child(2) {
    background: url(../../../static/img/king3_03.png);
    background-size: 100% 100%;
  }
  .box1 p:nth-child(3) {
    background: url(../../../static/img/king3_05.png);
    background-size: 100% 100%;
  }
  .box1 p:nth-child(4) {
    background: url(../../../static/img/king3_07.png);
    background-size: 100% 100%;
  }

  .box2 {
    height: 1.5rem;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .box2 p {
    height: 1.5rem;
    width: 3rem;
    background: url(../../../static/img/king3_18.png);
    background-size: 100% 100%;
    border-radius: 25px;
  }
  .box2 p:nth-child(2) {
    background: url(../../../static/img/king3_19.png);
    background-size: 100% 100%;
  }
</style>
