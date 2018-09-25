<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#006b00"
        active-text-color="#006b00">
        <li class="el-menu-item logo"><i></i><span> | Xi`An</span></li>
        <el-menu-item index="1" class="navItem">Learn to code for free.</el-menu-item>
        <el-menu-item index="2" class="navItem">??</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "NavHeader",
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .el-menu-demo {
        display: block;
        height: 50px;
    }

    .el-menu-item {
        height: 50px;
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #006b00 !important;
        i {
            background: url('/static/img/fcc-logo.png') no-repeat;
            background-size: 270px 35px;
            display: inline-block;
            width: 270px;
            height: 35px;
            margin-right: 10px;
        }
        span {
            font-size: 24px;
        }
    }

    .is-active {
        background-color: #006b00 !important;
        color: #fff !important;
    }

    .navItem {
        float: right;
        margin: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            background-color: #006b00 !important;
            color: #fff !important;
        }
    }
</style>
