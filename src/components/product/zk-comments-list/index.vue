<template>
  <view class="zk-comments-list">
    <view>
      <view class="uni-padding-wrap">
        <!-- 评论区 start -->
        <view class="uni-comment">
          <view class="uni-comment-list">
            <view class="uni-comment-face">
              <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix" />
            </view>
            <view class="uni-comment-body">
              <view class="uni-comment-top">
                <text>网友</text>
              </view>
              <view class="uni-comment-date">
                <text>08/10 08:12</text>
              </view>
              <view class="uni-comment-content">很酷的HBuilderX和uni-app，开发一次既能生成小程序，又能生成App</view>
              <div class="bg-img">
                <img src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" alt="">
              </div>
            </view>
          </view>
          <view class="uni-comment-list">
            <view class="uni-comment-face">
              <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix" />
            </view>
            <view class="uni-comment-body">
              <view class="uni-comment-top">
                <text>马克一天</text>
              </view>
              <view class="uni-comment-content">很强大，厉害了我的uni-app!</view>
            </view>
          </view>
          <view class="uni-comment-list">
            <view class="uni-comment-face">
              <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix" />
            </view>
            <view class="uni-comment-body">
              <view class="uni-comment-top">
                <text>今生缘</text>
              </view>
              <view class="uni-comment-content">好牛逼的感觉，是不是小程序、App、移动端都互通了？</view>
              <view class="uni-comment-date">
                <text>08/10 07:55</text>
              </view>
            </view>
          </view>
          <view class="uni-comment-list">
            <view class="uni-comment-face">
              <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix" />
            </view>
            <view class="uni-comment-body">
              <view class="uni-comment-top">
                <text>小猫咪</text>
              </view>
              <view class="uni-comment-content">支持国产，支持DCloud!</view>
              <view class="uni-comment-date">
                <view>2天前</view>
                <view class="uni-comment-replay-btn">5回复</view>
              </view>
            </view>
          </view>
        </view>
        <!-- 评论区 end -->
      </view>
    </view>
  </view>
</template>

<script>
 
  import './var.scss'
  import './styles/a.scss'


  export default {
    
    data () {
      return {
        widgetModel: {}
      }
    },
    props: {
      widget: {}
    },
    mounted () {
      this.init()
    },
    methods: {
      async init () {
                  this.widgetModel = await this.$api.themeWidget(this.widget)
      }
    }
  }
</script>
 <style lang="scss" >
</style>

