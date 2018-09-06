
//活动展示页
function func(a){
    if (a%2==0){
        document.getElementById("xianToggle").style.display="block";
        document.getElementById("closeNar").style.display="block";
        document.getElementById("openNar").style.display="none";
        a++;
    }else {
        document.getElementById("xianToggle").style.display ="none";
        document.getElementById("closeNar").style.display="none";
        document.getElementById("openNar").style.display ="block";
        a++;
    }
}
