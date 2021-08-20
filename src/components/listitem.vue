<template>
    <div class="container">
        <el-row class="header" :gutter="0">
            <el-col :span="3" :offset="0">{{ article.author }}</el-col>
            <el-col :span="1" :offset="0">|</el-col>
            <el-col :span="4" :offset="0" style="font-size: 12px">{{ article.publish_time }}</el-col>
            <el-col :span="1" :offset="0">|</el-col>
            <el-col :span="15" :offset="0">
                <el-row class="tag" :gutter="20" justify="end">
                    <el-col :span="3" v-for="(index) in article.tag" :key="index">{{ index }}</el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="title" :gutter="0">
            <el-col :span="24" :offset="0">{{ article.articleTitle}}</el-col>
        </el-row>
        <el-row class="content" :gutter="0">
            <el-col :span="20" :offset="0">{{ article.abstract }}</el-col>
            <el-col :span="4" :offset="0"><img class="item-photo" src="../assets/test.jpg" alt="图片"></el-col>
        </el-row>
        <el-row class="footer" :gutter="0">
            <el-col :span="3" :offset="0">
                {{ article.data.comment }}
                </el-col>
            <el-col :span="3" :offset="0">{{ article.data.watch }}</el-col>
            <el-col :span="3" :offset="0">{{ article.data.like }}</el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            article: {
                articleId: "artcle",
                articleTitle: "artcle_title",
                author: "author",
                publish_time: "YYYY-MM-DD",
                abstract: "abstract",
                content: "content",
                tag: ["hh","aa"],
                data: {
                    comment: 123,
                    watch: 456,
                    like: 789
                },
                status: "published"
            },
            aa: {
                title: "ass"
            }
        }
    }
}
</script>
<style scoped>
    .el-row {
        border-style: solid;
        border-color: #000;
        padding: 0px 20px 0px 20px;
        margin: 0px 20px 0px 40px;
    }
    .header {
        border-width: 1px 1px 0px 1px;
        padding-top: 5px;
    }
    .title, .content {
        border-width: 0px 1px 0px 1px;
    }
    .footer {
        border-width: 0px 1px 1px 1px;
        padding-bottom: 5px;
    }
    .tag {
        border: 0px;
    }
    .item-photo {
        width: 100%;
    }

</style>