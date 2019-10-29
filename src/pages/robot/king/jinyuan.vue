<!--
 * 万鹏飞
 * 19/10/23  14:40:00
 晋元帝页面
 -->
 <template>
  <div class='jinyuan'>
    <div class='box1'>
      <p v-on:click='tu()'></p>
      <p v-on:click='wen()'></p>
    </div>
    <div class='box2'>
      <p v-on:click='backIndex()'></p>
      <p v-on:click='backKing()'></p>
    </div>
  </div>
</template>
 <style >
  .jinyuan {
    height: 100%;
    width: 100%;
    background: url(../../../static/img/jinyuan4.jpg);
    background-size: 100% 100%;
  }
  .box1 {
    position: relative;
    height: 8rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .box1 p {
    position: absolute;
    top: 2rem;
    left: 1.5rem;
    height: 5.5rem;
    width: 4rem;
    background: url(../../../static/img/jinyuan4_03.png);
    background-size: 100% 100%;
    border-radius: 25px;
  }
  .box1 p:nth-child(2) {
    left: 6.5rem;
    width: 11rem;
    background: url(../../../static/img/jinyuan4_05.png);
    background-size: 100% 100%;
  }
  .box2 {
    height: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .box2 p {
    height: 1rem;
    width: 3rem;
    background: url(../../../static/img/qq19.png);
    background-size: 100% 100%;
    border-radius: 25px;
  }
  .box2 p:nth-child(2) {
    background: url(../../../static/img/qq15.png);
    background-size: 100% 100%;
  }
</style>
