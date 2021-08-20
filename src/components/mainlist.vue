<template>
    <el-container direction="verical">
        <el-header height="8%">
            <!-- Header content -->
                <el-menu
                    class="menu"
                    default-active="1"
                    mode="horizontal"
                    @select="handleSelect"
                    text-color="#ffffff"
                    active-text-color="#36458a"
                    background-color="#dddbdb">
                    <el-menu-item index="hot">热门</el-menu-item>
                    <el-menu-item index="latest">最新</el-menu-item>
                    <el-menu-item index="focus">关注</el-menu-item>
                </el-menu>
        </el-header>
        <el-main height="91%">
            <!-- Main content -->
            <!-- <keep-alive>
                <component :is="listName"></component>
            </keep-alive> -->
            <list-item></list-item>
            <list-item></list-item>
            <list-item></list-item>
            <list-item></list-item>
        </el-main> 
    </el-container>
</template>
<script>
import ListItem from './listitem.vue'
export default {
    components: {
        ListItem
    },
    data() {
        return {
            listName: 'hot',
            items: [1,2,3,4,5,6]
        }
    },
    methods: {
        handleSelect(key) {
            this.listName = key;
        }
    }
}
</script>

<style scoped>
    .menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-weight: bold;
    }
    .el-main {
        padding: 0;
        overflow: hidden
    }
</style>