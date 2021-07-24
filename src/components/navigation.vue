<template>
    <nav>
        <ul>
            <li><div class="sys-photo"><img ref="#" alt="图片"></div></li>
            <li><a href="#">首页</a></li>
            <li>
                <form class="search">
                    <input type="text">
                    <button>搜索</button>
                </form>
            </li>
            <li><a href="#">写作中心</a></li>
            <li><a href="#">个人中心</a></li>
            <li><a href="#">登录注册</a></li>
        </ul>
    </nav>
</template>
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