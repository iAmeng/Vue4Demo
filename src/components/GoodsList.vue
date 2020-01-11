<template>
  <div name="show">
    <ul class="GoodsList">
      <!-- 没有v-bind:key 会报错 -->
      <li v-for="goods in list" v-bind:key="goods">
        <img v-bind:src="goods.img" />
        <p>{{goods.goodName}}</p>
      </li>
    </ul>
  </div>
</template>

<style type="text/css">
.GoodsList li {
  width: 200px;
  height: 200px;
  list-style: none;
  float: left;
  font-size: 9px;
  color: red;
  margin-bottom: 30px;
}
.GoodsList img {
  width: 180px;
  height: 180px;
}
</style>

<script type="text/javascript">
export default {
  name: "show", //这个和div name = show一致.  有什么用呢??
  data() {
    var _this = this;

    var url = "";
    if (_this.goodsId == 1) {
      url = "json/bjb.json";
    } else if (_this.goodsId == 2) {
      url = "json/shouji.json";
    } else {
        //设置默认的URL 
       url = "json/bjb.json"; 
    }

    //用axios插件 get 方式 获取数据.
    //然后then处理数据.
    this.$http.get(url).then(function(res) {
      //list是 for循环处的那个 list
      _this.list = res.data;
    });

    return {
      list: [] //返回一个list 格式是数组. []定义数组.
    };
  },
  /**
   * 父子之间的传值, 用props 这个属性.  同级之间用 事件总线?
   */
  props: {
    //goodsId 是 Right页面里边写的. 要一致.
    //这个参数会 传过来.
    goodsId: Number
  },
  /**
   * 监听参数的变化, 父传给子的参数. 就是这样传的.
   * <GoodsListVue :goodsId="1"></GoodsListVue>
   */
  watch: {
    goodsId() {
      var _this = this;
      var url = "";
      if (_this.goodsId == 1) {
        url = "json/bjb.json";
      } else if (_this.goodsId == 2) {
        url = "json/shouji.json";
      }

      this.$http.get(url).then(function(res) {
        //list是 for循环处的那个 list
        _this.list = res.data;
      });

      return {
        list: [] //返回一个list 格式是数组. []定义数组.
      };
    }
  }
};
</script>