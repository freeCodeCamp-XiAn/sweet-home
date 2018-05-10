<template>
    <div id="index">
        <nav-header></nav-header>
        <global-intro></global-intro>
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
    body {
        margin: 0;
        padding: 0;
    }
</style>
