<template>
    <el-row :gutter="0">
        <el-col :span="3" :offset="1"><div class="sys-photo"><img class="logo" src="../assets/test.jpg" alt="图片"></div></el-col>
        <el-col :span="3" :xs="3" :offset="1"><router-link to="/" >首页</router-link></el-col>
        <el-col :span="6" :xs="0" :offset="0">
            <form class="search">
                <input type="text">
                <button>搜索</button>
            </form>
        </el-col>
        <el-col :span="3" :xs="5" :offset="1"><router-link :to="{path: userPath + '/write_center'}">写作中心</router-link></el-col>
        <el-col :span="3" :xs="5" :offset="0"><router-link :to="userPath">个人中心</router-link></el-col>
        <el-col :span="3" :xs="5" :offset="0"><router-link to="login">登录/注册</router-link></el-col>
    </el-row>
</template>

<script>
export default {
    el: 'navigation',
    data() {
        return {
            userPath: '/user/123',
            userId: '123'
        }
    }  
}
</script>

<style scoped>
.el-row {
    display: flex;
    align-items: center;
}
a {
    text-decoration: none;
    font-size: 20px;
}
.logo {
    /* max-width: 100%;
    max-height: 60px; */
    width: 60px;
    height: 60px;
    border: 1px;
    border-style: solid; 
    border-radius: 50%;
}
@media screen and (max-width: 880px) {
    a {
        text-decoration: none;
        font-size: 16px;
    }
}

</style>