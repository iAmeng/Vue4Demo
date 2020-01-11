<template>
    <!-- 每一个vue文件只能有一个 根 div -->
    <div>
        <div class="title">热门推荐</div>
        <ul class="menu">
            <!-- click写了就得实现, 所以写2个做实验 -->
            <li @click="menu1clicked">notebook</li>
            <li @click="menu2clicked">mobile phone</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
        </ul>
    </div> 
</template>

<style type="text/css">
    .title {
        /* left div with is 100px  */
        width: 100px; 
        color: red;
        /*height 和 line-height 高度一样, 文字就居中了 */
        height: 50px;  
        line-height: 50px;
    }
   
    .menu li{
        /* 去掉每行前边你的小圆点 */
        list-style: none;
        height: 50px;
        margin-bottom: 2px;
        background-color: white;
        line-height: 50px;
        cursor: pointer; /*修改光标为一个手型*/
    }

</style>

<script type="text/javascript">
    import Msg from "../router/Msg.js"
    export default {
        methods:{
            menu1clicked:function() {
                //通过msg emit 发送信息, 在 msg on中去接受数据
                Msg.$emit("val", 1);
            },
            menu2clicked:function() {
                //通过msg emit 发送信息, 在 msg on中去接受数据
                Msg.$emit("val", 2);
            },
        }
    }
</script>