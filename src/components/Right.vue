<template>
    <div>
        <div v-if="kkk == 1">
            <!-- :goodsId 是参数,参数名字自定义的, 这个参数是要传给 GoodsListVue的. 
            在GoodsListVue里边有判断参数 显示内容. -->
            <GoodsListVue :goodsId="1"></GoodsListVue>
        </div>
        <div v-else-if="kkk == 2">
           <GoodsListVue :goodsId="2"></GoodsListVue> 
        </div>
        <div v-else-if="kkk == 3">
            33333333
        </div>
        <div v-else-if="kkk == 4">
            44444444
        </div>
        <div v-else>
           <GoodsListVue :goodsId="0"></GoodsListVue> 
        </div>
    </div>
</template>

<script type="text/javascript">
    //事件总线 接受消息.
    import Msg from "../router/Msg.js";
    import GoodsListVue from './GoodsList.vue';

    export default {
        //data 是数据初始化时候调用一次.
        data() {
            return {
                kkk:0
            }
        },
       // 接收click数据 emit()
        mounted:function() {
            var _this = this;
            Msg.$on('val', function(m) {
                _this.kkk = m;
            })
        },
        //注册组件
        components: {
            GoodsListVue
        }
    }
</script>