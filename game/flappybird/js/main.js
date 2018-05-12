const g = 0.2 //向下加速度
const bird = document.getElementsByClassName('bird')[0]
const main = document.getElementsByClassName('main')[0]
let s = 0 //小鸟的速度向下为正
let birdTimer = null
let pipeTimer = null //两个计时器
let y = 100
let minY = 0
let maxY = 450 - 24 //小鸟的高度，0为天,450-24（小鸟的身高）为地
let playing = false //标记是否游戏中
let pipeData = [] //管道存放的数组
const scoreEl = document.getElementsByClassName('score')[0]
let score = 0
/* 初始化，监听输入，设置初始位置 */
function init() {
    window.onkeydown = function (e) {
        if (e.keyCode == 13) {
            playing || startGame()
        }
        if (e.keyCode == 32) {
            s = -4
        }
    }
}
/*更新管道，创建一对竖直位置随机的管道，并且移除用过的管道 */
function updatePipe() {
    let upHeight = Math.round(Math.random() * 120 + 90) //控制高度在60-210之间
    let downHeight = 300 - upHeight
    let pipe = document.createElement('div')
    pipe.className = 'pipe'
    pipe.rangeMinY = upHeight //允许通过的最小y坐标，向下为正
    pipe.rangeMaxY = upHeight + 150 //允许通过的最大Y坐标
    pipe.innerHTML = `<div class="up" style="height:${upHeight}px"></div>
                    <div class="down" style="height:${downHeight}px"></div>`
    main.appendChild(pipe)
    pipeData.push(pipe)
    while (pipeData[0].offsetLeft == -52) {
        main.removeChild(pipeData[0])
        pipeData.shift()
    }
}
/* 开始游戏，开始周期性渲染小鸟位置，生成管道，标记开始,初始化一些值 */
function startGame() {
    playing = true
    y = 100
    score = 0
    scoreEl.innerHTML = score
    s = 0
    pipeData.forEach(function (pipe) {
        main.removeChild(pipe)
    })
    pipeData = []
    main.remove
    document.body.className = ''
    /* 15毫秒渲染一次小鸟 */
    birdTimer = setInterval(function () {
        renderBird()
    }, 15)
    /* 1.5秒生成一对管道 */
    updatePipe()
    pipeTimer = setInterval(function () {
        updatePipe()
    }, 1700)
}
/* 结束游戏，停止周期计时,停止动画 */
function endGame() {
    playing = false
    document.body.className = 'stop'
    clearInterval(birdTimer)
    clearInterval(pipeTimer)
}
/* 碰撞检测 */
function hitDetection() {
    if (y == maxY) {
        endGame()
    }
    pipeData.forEach(function (pipe) {
        if (pipe.offsetLeft >= (150 - 50) && pipe.offsetLeft <= (150 + 32)) {
            if (y <= pipe.rangeMinY || y >= (pipe.rangeMaxY - 24)) {
                endGame()
            }
        }
    })
}
/* 渲染小鸟，计分，渲染后检测碰撞 */
function renderBird() {
    s = s + g
    y = y + s
    y = Math.max(minY, y)
    y = Math.min(maxY, y)
    bird.style = `top:${y}px`
    let currentPipe = pipeData[0] && pipeData[0].scoring ? pipeData[1] : pipeData[0]
    if ((!currentPipe.scoring) && currentPipe.offsetLeft < (150 - 50)) {
        score++
        scoreEl.innerHTML = score
        currentPipe.scoring = true
    }
    hitDetection()
}
init()