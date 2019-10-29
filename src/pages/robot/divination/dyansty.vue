<!--
 * 万鹏飞
 * 19/10/23  8:40:00
 朝代页面
 -->
 <template>
  <div class='dyansty'>
    <div class='box1'>
      <p v-on:click='xia()'></p>
      <p v-on:click='shang()'></p>
      <p v-on:click='zhou()'></p>
      <p v-on:click='qing()'></p>
    </div>
    <div class='box2'>
      <p v-on:click='xijin()'></p>
      <p v-on:click='sanguo()'></p>
      <p v-on:click='dhan()'></p>
      <p v-on:click='xhan()'></p>
    </div>
    <div class='box3'>
      <p v-on:click='djin()'></p>
      <p v-on:click='sui()'></p>
      <p v-on:click='tang()'></p>
      <p v-on:click='wudai()'></p>
    </div>
    <div class='box4'>
      <p v-on:click='qing()'></p>
      <p v-on:click='ming()'></p>
      <p v-on:click='yuan()'></p>
      <p v-on:click='song()'></p>
    </div>
  </div>
</template>
 <style>
  .dyansty {
    position: relative;
    height: 100%;
    width: 100%;
    background: url(../../../static/img/dyansty2.png) no-repeat;
    background-size: 100% 100%;
  }
</style>
