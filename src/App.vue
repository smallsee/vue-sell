<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
          <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
          <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
          <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <div>
        <router-view :seller="seller"></router-view>
    </div>



  </div>
</template>

<script type="text/ecmascript-6">
    import {urlParse} from 'common/js/util';
    import header from './components/header/header.vue';

    const ERR_OK = 0;

    export default{
      data() {
        return {
           seller: {
             id: (() => {
               let queryParam = urlParse();
               console.log(queryParam);
               return queryParam.id;
             })()
           }
        };
      },
      created() {
        this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
          response = response.body;
            if (response.errno === ERR_OK) {
              this.seller = Object.assign({}, this.seller, response.data);
              console.log(this.seller.id);
            }
        });
      },
      components: {
        'v-header': header
      }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "./common/scss/index.Scss";

    .tab{
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        @include border-bottom-1px(rgba(7,17,27,0.1));
        .tab-item{
            flex:1;
            text-align: center;
            &>a{
                display: block;
                font-size: 14px;
                color: rgb(77,85,93);
                &.router-link-active{
                    color: red;
                }
            }
        }
    }


</style>
