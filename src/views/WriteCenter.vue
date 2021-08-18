<template>
    <div class="container">
        <el-row class="main" :gutter="0">
            <el-col :span="3" :xs="0" :offset="0"></el-col>
            <el-col :span="18" :xs="24" :offset="0" 
                style="background-color: rgb(221, 219, 219);">
                <el-container :direction="vertical">
                    <el-header height="10%">
                        <!-- Header content -->
                        <el-row :gutter="0" class="nav">
                            <el-col :span="2" class="logo">
                                <el-image :src="logo" fit="cover" :lazy="true">
                                    <template #error>
                                        <div class="image-slot">
                                            <i class="el-icon-picture-outline"></i>
                                        </div>
                                    </template>
                                </el-image>
                            </el-col>
                            <el-col :span="4" class="title">
                                <span>写作中心</span>
                            </el-col>
                            <el-col :span="3" :offset="15">
                                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            </el-col>
                        </el-row>
                    </el-header>
                    <el-main height="84%">
                        <!-- Main content -->
                        <el-container :direction="vertical">
                            <el-aside width="200px" style="background-color: #fff">
                                <!-- Aside content -->
                                <el-menu
                                 default-active="1"
                                 @open="handleOpen"
                                 @close="handleClose"
                                 @select="handleSelect">
                                    <el-menu-item index="1">
                                        <template #title>博客管理</template>
                                    </el-menu-item>
                                    <el-submenu index="2">
                                        <template #title>数据中心</template>
                                        <el-menu-item index="2-1">内容数据</el-menu-item>
                                        <el-menu-item index="2-2">关注数据</el-menu-item>
                                    </el-submenu>
                                </el-menu>
                            </el-aside>
                            <el-main>
                                <keep-alive>
                                    <component :is="mainName"></component>
                                </keep-alive>
                            </el-main>
                        </el-container>
                    </el-main>
                    <el-footer height="6%">
                        <!-- Footer content -->
                    </el-footer>
                </el-container>
            </el-col>
            <el-col :span="3" :xs="0" :offset="0"></el-col>
            
        </el-row>
          
    </div>
    
</template>
<script>
import listItem from '../components/listitem.vue'
import blogManage from '../components/blogmanage.vue'

export default {
    components: {
        listItem,
        blogManage
    },
    data() {
        return {
            logo: '/blog-system/src/assets/test.jpg',
            menus: [{
                title: '数据中心',
                menus: [{
                    title: '内容数据'
                },{
                    title: '关注数据'
                }]
            }],
            mainName: 'blogManage'
        }
    },
    methods: {
        handleSelect(key){
            switch(key){
                case '1':{
                    this.mainName = 'blogManage';
                    return;
                    }
                case '2-1':{
                    this.mainName = null;
                    return
                }
                case '2-2': {
                    this.mainName = null;
                    return
                }
            }
        }
    }
}
</script>
<style scoped>
    .container {
        height: 100%;
        overflow: hidden;
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
        background-color: rgb(85, 85, 85);
    }
    .nav > .el-col {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>