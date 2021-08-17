<template>
    <nav>
        <ul>
            <li><div class="sys-photo"><img ref="#" alt="图片"></div></li>
            <li><router-link to="/" >首页</router-link></li>
            <li>
                <form class="search">
                    <input type="text">
                    <button>搜索</button>
                </form>
            </li>
            <li><router-link to="/">写作中心</router-link></li>
            <li><router-link v-bind:to="'userpath'">个人中心</router-link></li>
            <li><router-link to="login">登录注册</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    el: 'navigation',
    data() {
        return {
            userpath: '',
        }
    },
    created() {
        this.userpath = '/user/' + this.userId; 
    }    
}
</script>

<style scoped>
ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-color: black;
}
li {
    list-style: none;
}

.sys-photo {
    width: 60px;
    height: 60px;
    border: 1px;
    border-style: solid;
    border-radius: 50%;
}

.search {
    line-height: 60px;
}

li a {
    text-decoration: none;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
    
}
</style>