<template>
  <view class="meal">
    <image src="https://s-open.qiniuniu99.com/wwwroot/uploads/api/2019-08-27/5d651e35d9eb362b7cfd8949.jpg" class="iamge" />
    <view class="rob-tit">
      <view class="big-tit">今日必抢</view>
    </view>
    <zk-product-list :widget="viewModel"></zk-product-list>
    <!-- <zk-index-day-update :widget="dayUpdateData" style="background:#1c1a26; "></zk-index-day-update> -->
    <image src="https://s-open.qiniuniu99.com/wwwroot/uploads/api/2019-08-27/5d651e35d9eb362b7cfd8948.jpg" class="image-img" />
    <view class="rob-tit">
      <view class="big-tit">好货一折起</view>
    </view>
    <zk-product-list :widget="productList"></zk-product-list>
  </view>
</template>
<script>
  import dayUpdateJson from '../json/dayUpdate.json'
  export default {
    data () {
      return {
        dayUpdateData: dayUpdateJson,
        viewModel: {
          classIds: [],
          isPage: false,
          styleStype: 'single'
        },
        productList: {
          classIds: [],
          isPage: false,
          styleStype: 'product'
        }
        // typeListData: typeListJson
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        uni.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#1C1A26'
        })
      }
    }
  }
</script>

<style lang="scss">
  .meal {
    background-color: #1c1a26;
    .image-img,
    .iamge {
      width: 100%;
    }
    .rob-tit {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 40px;
      .big-tit {
        color: #ffffff;
        font-size: 21px;
        font-weight: 700;
        width: 120px;
        // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWMAAABkCAYAAABTsFHtAAAAGXRFW…V/9VFatDrDMrF7crVQ9o82Vbs9yNMBY2ZWio/rnT/FvwQYAEMF2QR7lF22AAAAAElFTkSuQmCC)
        //   no-repeat;
      }
    }
    .image-img {
      margin-top: 20px;
      height: 170px;
    }
  }
</style>
