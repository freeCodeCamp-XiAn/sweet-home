<template>
    <el-main class="main">
        <el-row>
            <el-col :xs="24" :sm="14" class="colWrap">
                <div class="intro">
                    <h1>FCC 中国</h1>
                    <hr>
                    <p>&nbsp;&nbsp;<a href="https://www.freecodecamp.cn" target="_blank">FCC中国</a> 是国内的编程爱好者自发的，秉承着开源精神，志愿发展的中文社区。经过大家的不懈努力，现在中文化的进度十分迅速。随着各地的编程爱好者的加入，各地也萌生了FCC地区性组织， 由此FCC在中国的传播速度迅猛。让编程走近每个人，让开源精神凝聚，做一个有温度的开源社区！</p>
                    <ul>
                        <li>我们是一个帮助你学习编程的开源社区。</li>
                        <li>通过我们的自学编程挑战，构建项目，获得证书，还可以参加在线下活动。</li>
                        <li>我们的课程、项目、证书全都是免费的。</li>
                        <li>获取四个证书需要大约2080个小时，你可以掌握自己的学习进度。</li>
                    </ul>
                </div>
            </el-col>
            <el-col :xs="24" :sm="10" class="colWrap">
                <div class="photo">
                    <img src="/static/img/home/china.png" alt="">
                </div>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
    export default {
        name: "ChinaIntro"
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .main {
        padding: 0 20px!important;
    }

    .colWrap {
        height: 500px;
    }

    /* .intro`s father */
    .colWrap:nth-of-type(1) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .intro {
        flex: 1;
        h1 {
            margin: 0;
            padding: 0;
            font-weight: 400;
        }
        hr {
            width: 84%;
            height: 2px;
            border: none;
            background-color: #4caf50;
        }
        p {
            display: inline-block;
            width: 78%;
            font-size: .9rem;
            text-align: left;
            margin: 50px 0;
            a {
                color: #4caf50;
                text-decoration-line: none;
            }
        }
        ul {
            width: 84%;
            margin: auto;
            li {
                font-size: .8rem;
                width: 100%;
                text-align: left;
            }
        }
    }

    .photo {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            flex: 1;
            display: inline-block;
            width: 100%;
        }
    }
</style>
