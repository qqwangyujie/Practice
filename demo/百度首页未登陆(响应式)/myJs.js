
//input焦点事件
var con = document.getElementById("con");
var input =document.getElementById("input");
input.onfocus=function(even){
    con.style.borderColor="#3385ff"
};
input.onblur=function(){
    con.style.borderColor="#e2e2e2"
};
//移动input阴影
input.onmouseover=function(){
    this.style.borderColor="#cecece";
};
input.onmouseout=function(){
    this.style.borderColor="#e2e2e2";
};