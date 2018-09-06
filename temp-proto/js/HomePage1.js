const e = function(selector) {
    return document.querySelector(selector)
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

const addNav = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        e('#top').style.position = 'fixed'
        e('#top').style.top = '0'
        e('#top').style.backgroundColor = 'white'
        e('#top').style.zIndex = '900'

    }else {
        e('#top').style.position = 'relative'
        // e('#top').style.background = 'linear-gradient(to left bottom, hsl(154, 100%, 85%) 0%,hsl(43, 100%, 85%) 100%)'
    }
}

const bindAside = function(){
    let target = e('#mobile_nav')
    let close = e('#close_img')
    let aside = e('aside')
    target.addEventListener('click',function(event){
        toggleClass(aside,'hide')
    })
    close.addEventListener('click',function(event){
        toggleClass(aside,'hide')
    })
}

const __main = function(){
    window.onscroll = function() {
        addNav()
    }
    bindAside()
}

__main()
