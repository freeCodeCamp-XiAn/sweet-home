<template>
    <el-main class="whitesmoke">
        <el-row>
            <el-col :span="24">
                <h1>Learn to code for free.</h1>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <hr>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <p>freeCodeCamp is an open source community that helps you learn to code, build pro bono projects for nonprofits, and get a job as a developer.</p>
            </el-col>
        </el-row>
        <el-row class="cardWrap">
            <el-col class="card">
                <div class="picture">
                    <img src="/static/img/icon/analysis.png" alt="">
                </div>
                <div class="label">已经发展成为一个30万开发者的社区，通过游戏化的项目实战，来吸引大家学习编程，并在社区内给予实时的帮助。</div>
            </el-col>
            <el-col class="card">
                <div class="picture">
                    <img src="/static/img/icon/shield.png" alt="">
                </div>
                <div class="label">同时，为 NPO、NGO 组织给予技术支持。在社区中学习4个部分课程，并拿到相应证书。</div>
            </el-col>
            <el-col class="card">
                <div class="picture">
                    <img src="/static/img/icon/card.png" alt="">
                </div>
                <div class="label">你将获得 FCC 颁布的4个证书，分别是“前端开发证书”、“数据可视化证书”、“后端开发证书”、“全栈开发证书”。</div>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
    export default {
        name: "GlobalIntro"
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    hr {
        width: 150px;
        height: 2px;
        border: none;
        background-color: #4caf50;
    }

    .whitesmoke {
        background-color: whitesmoke;
    }

    .cardWrap {
        margin: 40px auto 0;
        padding: 0 50px;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }

    .card {
        display: block;
        margin-top: 20px;
        min-width: 210px;
        max-width: 100%;
        overflow: hidden;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border-bottom: 4px solid #4caf50;
        width: 100%;
        width: calc(100% - 20px);
        color: #666;
        background-color: #ffffff;
        text-decoration: none;
        cursor: pointer;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, .08);
        transition-duration: .2s;
        &::before {
            content: '';
        }
        &:hover,
        &:active {
            color: #4caf50;
            box-shadow: 0 8px 24px rgba(0, 0, 0, .12);
            .picture {
                img {
                    transform: scale(1.1) translate(-45%, -45%);
                }
            }
        }
        .picture {
            position: relative;
            margin: auto;
            width: 40%;
            padding-bottom: 50%;
            overflow: hidden;
            img {
                position: absolute;
                width: 80%;
                top: 60%;
                left: 50%;
                transform: scale(1) translate(-50%, -50%);
                transition-duration: 1.2s
            }
        }
        @media (min-width: 768px) {
            width: 25%;
            width: calc(25% - 20px);
        }
    }

    .label {
        font-size: 14px;
        font-weight: 300;
        padding: 20px 40px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        transition: color .4s;
    }
</style>
