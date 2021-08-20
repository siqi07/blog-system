<template>
    <div class="container">
        <el-row class="main" :gutter="0">
            <el-col :span="3" :xs="0" :offset="0"></el-col>
            <el-col :span="18" :xs="24" :offset="0" 
                style="background-color: rgb(221, 219, 219);">
                <el-container :direction="vertical">
                    <el-header height="10%">
                        <!-- Header content -->
                        <navigation></navigation>
                    </el-header>
                    <el-main height="82%">
                        <!-- Main content -->
                        <el-container>
                            <el-aside width="70%">
                                <!-- 左侧列表 -->
                                <main-list class="main-list"></main-list>
                            </el-aside>
                            <el-main>
                                <!-- 右侧分类导航 -->
                                <nav-right class="nav-right"></nav-right>
                            </el-main>
                        </el-container>
                    </el-main>
                    <el-footer height="8%">
                        <!-- Footer content -->
                        <foot></foot>
                    </el-footer>
                </el-container>
            </el-col>
            <el-col :span="3" :xs="0" :offset="0"></el-col>   
        </el-row>    
    </div>
</template>

<script>
import navigation from '../components/navigation.vue'
import mainList from '../components/mainlist.vue'
import navRight from '../components/navright.vue'
import foot from '../components/foot.vue'

export default {
  components: { 
      navigation, 
      mainList,
      navRight,
      foot
      },
  
}
</script>
<style scoped>
    .container {
        min-height: 100%;
        /* overflow: hidden; */
        background-color: rgb(150, 150, 150);;
    }
    .el-row, .el-col, .el-container {
        height: 100%;
    }

    .el-header {
        background-color: #fff;
    }
    .el-main {
        background-color: rgb(221, 219, 219);
        padding: 0;
    }
    .el-footer {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(85, 85, 85);
    }
    .el-aside {
        overflow: hidden;
    }
</style>
