<template>
    <el-card class="box-card" shadow="never">
        <div v-for="o in 4" :key="o" class="text item">
            <el-link href="javascript:void(0);" :underline="false" @click="handleSelect">{{ o }}</el-link>
            <el-divider></el-divider>
        </div>

    </el-card>
</template>

<script>
export default {
    methods: {
        handleSelect(key){
            console.log(key)
        }
    }
}
</script>
<style scoped>
    .el-row {
        text-align: center;
    }
</style>