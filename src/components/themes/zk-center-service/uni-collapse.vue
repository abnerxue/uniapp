<template>
  <view class="uni-collapse">
    <slot></slot>
  </view>
</template>
<script>
  export default {
    name: 'uni-collapse',
    props: {
      accordion: {
        type: [Boolean, String],
        default: false
      }
    },
    data () {
      return {}
    },
    provide () {
      return {
        collapse: this
      }
    },
    created () {
      this.childrens = []
    },
    methods: {
      onChange () {
        let activeItem = []
        this.childrens.forEach((vm, index) => {
          if (vm.isOpen) {
            activeItem.push(vm.nameSync)
          }
        })
        this.$emit('change', activeItem)
      }
    }
  }
</script>
<style>
  @charset "UTF-8";

  .uni-collapse {
    background-color: #fff;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .uni-collapse:after {
    position: absolute;
    z-index: 10;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    content: "";
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    background-color: #c8c7cc;
  }

  .uni-collapse:before {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 0;
    left: 0;
    height: 1px;
    content: "";
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    background-color: #c8c7cc;
  }
</style>
