<template>
    <div id="index">
        <el-container>
            <el-header class="indexHeader">
                <nav-header></nav-header>
            </el-header>
            <!--<el-aside></el-aside>-->
            <el-main>
                <global-intro></global-intro>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script>
    import NavHeader from '@/views/home/component/NavHeader.vue'
    import GlobalIntro from '@/views/home/component/GlobalIntro.vue'
    import ChinaIntro from '@/views/home/component/ChinaIntro.vue'
    import SkillIntro from '@/views/home/component/SkillIntro.vue'
    import XiAnIntro from '@/views/home/component/XiAnIntro.vue'
    import JoinUs from '@/views/home/component/JoinUs.vue'
    import NavFooter from '@/views/home/component/NavFooter.vue'

    export default {
        name: "Index",
        components: {
            NavHeader,
            GlobalIntro,
            ChinaIntro,
            SkillIntro,
            XiAnIntro,
            JoinUs,
            NavFooter
        },
        data () {
            return {

            }
        }
    }
</script>

<style>
    .el-header, .el-main, .el-footer {
        margin: 0!important;
        padding: 0!important;
    }

    .indexHeader {
        height: 50px!important;
    }
</style>
