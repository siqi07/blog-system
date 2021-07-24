<template>
    <div>
        <ul class="classify">
            <li>热门</li><span>|</span>
            <li>最新</li><span>|</span>
            <li>关注</li>
        </ul>
        <div>
            <!--使用v-if来显示 -->
            <template v-if="hotlist">
                <list-item></list-item>
            </template>
            <template v-else-if="latestlist">
                <list-item></list-item>
            </template>
            <template v-else-if="attentionlist">
                <!-- <div v-for="item in items" key="item"> -->
                    <list-item>item</list-item>
                    <list-item>item</list-item>
                    <list-item>item</list-item>
                    <list-item>item</list-item>
                    <list-item>item</list-item>
                    <list-item>item</list-item>
                    <list-item>item</list-item>
                <!-- </div> -->
                
            </template>
        </div>
    </div>
</template>
<script>
import ListItem from './listitem.vue'
export default {
    components: {
        ListItem
    },
    data() {
        return {
            hotlist: false,
            latestlist: false,
            attentionlist: true,
            items: [1,2,3,4,5,6]
        }
    }
}
</script>

<style scoped>
    .classify {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 40px;
        border: solid black;
        border-width: 0px 0px 1px;
    }

    .classify>span {
        line-height: 40px;
    }

    .classify>li {
        flex: 1;
        box-sizing: border-box;
        line-height: 40px;
        list-style: none;
        text-align: center;
    }
    
</style>