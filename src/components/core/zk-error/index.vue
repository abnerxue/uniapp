<template>
  <view
    class="uni-async-error"
    @click="_onClick">
    网络不给力，点击屏幕重试
  </view>
</template>

<script>
 
  export default {
    
    methods: {
    _onClick () {
      // TODO 临时采用 reload
      window.location.reload()
    }
  }
  }
</script>
<style>
	.uni-async-error {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		color: #999;
		padding: 100px 0;
		text-align: center;
	}
</style>
