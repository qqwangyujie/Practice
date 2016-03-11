
//页面加载完毕后
window.onload=function() {
    //DOM的位置
    var con = document.getElementsByClassName("container")[0];
    var div1 = document.getElementsByClassName("div1")[0];
    var div2 = document.getElementsByClassName("div2")[0];
    var div3 = document.getElementsByClassName("div3")[0];
    var div4 = document.getElementsByClassName("div4")[0];
    var div5 = document.getElementsByClassName("div5")[0];
    //事件
    div3.onclick = function () {
        con.className = "container con1";
        div1.className = "div1 con2";
        div2.className = "div2 con2";
        div3.className = "div3 con2";
        div4.className = "div4 con2";
        div5.className = "div5 con2";

    }

};