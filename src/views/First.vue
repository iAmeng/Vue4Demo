<template>
    <div class="main">
        <div class="left">
            <!-- view中使用 components -->
            <Left></Left>
        </div>
           
        <div class="right">
            <div class="top">
                <img src="img/title.jpeg" alt="">
            </div>
            <div class="bottom">
                <Right></Right>
            </div>
        </div>

    </div>
</template>

<style type="text/css">
    /*padding, margin 初始化为0,  避免各个浏览器的默认值不同 */
    *{  
        padding: 0;
        margin: 0;
    }

    .left {
        width:100px;
        float: left;
        margin-right: 10px;
    }

    .right {
        width: 1000px;
        float: left;
        margin-left: 10px;
    }

    .main {
        width: 1200px; /*为了能有居中的效果, 如果不设置宽度, 居中不了*/
        margin: 20px auto; /*上下20px 左右自动*/
    }

    .top img {
        height: 300px;
        width: 1000px;
    }

    .left, .right {
        background-color:gainsboro;
        /* 高度是为了看效果, 实际是由内容撑起来的, 暂时放着 */
        /*height: 800px; */
    }

</style>

<script type="text/javascript">
    import Left from "../components/Left.vue"  //引入components部分的组件
    import Right from "../components/Right.vue"
    export default { //注册组件
        components: {
            Left,
            Right //声明组件, 在本view中使用.
        }
    }
</script>
