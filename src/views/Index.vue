<template>
    <div class="container">
        <div>
            <!-- 导航栏 -->
            <navigation class="navigation"></navigation>
            <div class="main">
                <!-- 左侧列表 -->
                <main-list class="main-list"></main-list>
                <!-- 右侧分类导航 -->
                <nav-right class="nav-right"></nav-right>

            </div>
            <!-- 底部 -->
            <div class="footer">

            </div>
        </div>
    </div>
</template>

<script>
import navigation from '../components/navigation.vue'
import mainList from '../components/mainlist.vue'
import navRight from '../components/navright.vue'

export default {
  components: { 
      navigation, 
      mainList,
      navRight
      },
  
}
</script>
<style scoped>
`   `.container {
        padding: 0px 12% 0px 12%;
        overflow: hidden;
        background:rgb(150, 150, 150);
    }
    .container>div {
        background-color: rgb(221, 219, 219);
    }
    .navigation {
        width: 100%;
        min-height: 60px;
        box-shadow: 0px 1px 0px 0px;
        background-color: #fff;
    }

    .main {
        position: relative;
    }

    .main-list {
        margin: 20px 10% 0 10%;
        box-sizing: border-box;
        border: 1px solid black;
        height: 100%;
    }

    .footer {
        height: 60px;
        background-color: rgb(85, 85, 85);
    }

@media screen and (min-width: 1000px) {
    .container {
        padding: 0px 200px 0px 200px;
        overflow: hidden;
        background:rgb(150, 150, 150);
    }
    .container>div {
        background-color: rgb(221, 219, 219);
    }
    .navigation {
        width: 100%;
        min-height: 60px;
        box-shadow: 0px 1px 0px 0px;
        background-color: #fff;
    }

    .main {
        position: relative;
    }

    .main-list {
        margin: 20px 0 0 100px;
        box-sizing: border-box;
        border: 1px solid black;
        width: 50%;
        height: 100%;
    }

    .nav-right {
    width: 20%;
    background-color: rgb(255, 255, 255);
    /* border: 1px solid rgb(0, 0, 0); */
    position: absolute;
    left: calc(50% + 100px + 60px);
    top: 0px;
    z-index: 5;
    }

    .footer {
        height: 60px;
        background-color: rgb(85, 85, 85);
    }
}
</style>
