<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-descrease " v-show="food.count>0" @click="descrease">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },
    created() {

    },
    methods: {
      addCart(event) {
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$root.eventHub.$emit('shopcart-position', event.target);
      },
      descrease(event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .cartcontrol{
    font-size: 0;
    .cart-descrease{
      display: inline-block;
      padding: 6px;
      transition: all 0.4s linear;
      &.move-enter-active,&.move-leave{
        opacity: 1;
        transform: translate3d(0,0,0);

      }
      &.move-enter,&.move-leave-active{
        opacity: 0;
        transform: translate3d(24px,0,0);
        .inner{
          transform: rotate(180deg);
        }
      }
      .inner{
        display: inline-block;
        line-height: 24px;
        font-size: 24px;
        color: rgb(0,160,220);
        transition: all 0.4s linear;
        transform: rotate(0deg);
      }
    }
    .cart-count{
      display: inline-block;
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: rgb(147,153,159);
    }
    .cart-add{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0,160,220);
    }
  }
</style>
