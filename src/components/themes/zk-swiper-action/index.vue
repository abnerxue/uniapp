<template>
  <view class="uni-swipe-action">
    <view class="uni-swipe-action__container" :class="{'uni-swipe-action--show':isShowBtn}" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" @touchcancel="touchEnd" :style="{'transform':transformX,'-webkit-transform':transformX}">
      <view class="uni-swipe-action__content">
        <slot></slot>
      </view>
      <view class="uni-swipe-action__btn-group" :id="elId">
        <view class="uni-swipe-action--btn" :style="{backgroundColor: '#c81432',color: '#FFFFFF',fontSize: '28upx'}">删除</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'uni-swipe-action',
    data () {
      const elId = `Uni_${Math.ceil(Math.random() * 10e5).toString(36)}`
      return {
        elId: elId,
        isShowBtn: false,
        transformX: 'translateX(0px)',
        isOpened: false,
        autoClose: true,
        direction: '',
        startX: 0,
        startY: 0,
        btnGroupWidth: 0,
        isMoving: false
      }
    },
    // #ifdef H5
    mounted () {
      this.getSize()
    },
    // #endif
    // #ifndef H5
    onReady () {
      this.getSize()
    },
    // #endif
    methods: {
      getSize () {
        uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
          this.btnGroupWidth = ret[0].width
        })
        if (this.isOpened === true) {
          this.isShowBtn = true
          this.endMove()
        }
      },
      bindClickCont (e) {
        if (this.isShowBtn && this.autoClose === true) {
          this.isShowBtn = false
          this.endMove()
        }
      },
      touchStart (event) {
        this.startX = event.touches[0].pageX
        this.startY = event.touches[0].pageY
      },
      touchMove (event) {
        var moveY = event.touches[0].pageY - this.startY
        var moveX = event.touches[0].pageX - this.startX
        if (!this.isMoving && Math.abs(moveY) > Math.abs(moveX)) { // 纵向滑动
          this.direction = 'Y'
          return
        }
        this.direction = moveX > 0 ? 'right' : 'left'
        this.isMoving = true
      },
      touchEnd (event) {
        this.isMoving = false
        if (this.direction !== 'right' && this.direction !== 'left') {
          this.direction = ''
          return
        }
        if (this.direction === 'right') {
          this.isShowBtn = false
        } else {
          this.isShowBtn = true
        }
        this.endMove()
      },
      endMove () {
        if (this.isShowBtn) {
          this.transformX = `translateX(${-this.btnGroupWidth}px)`
        } else {
          this.transformX = 'translateX(0px)'
        }
        this.direction = ''
      },
      close () {
        this.isShowBtn = false
        this.endMove()
      }
    }
  }
</script>

<style>
  @charset "UTF-8";

  .uni-swipe-action {
    width: 100%;
    overflow: hidden;
  }

  .uni-swipe-action__container {
    position: relative;
    background-color: #fff;
    width: 200%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    transition: transform 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .uni-swipe-action__content {
    width: 50%;
  }

  .uni-swipe-action__btn-group {
    display: flex;
    flex-direction: row;
  }

  .uni-swipe-action--show {
    position: relative;
    z-index: 1000;
  }

  .uni-swipe-action--btn {
    padding: 0 32upx;
    color: #fff;
    background-color: #c7c6cd;
    font-size: 28upx;
    display: inline-flex;
    text-align: center;
    flex-direction: row;
    align-items: center;
  }

  .uni-swipe-action__mask {
    display: block;
    opacity: 0;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
