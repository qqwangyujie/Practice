window.onload=function(){
    var form = document.getElementById("form");
    var name = document.getElementById("username");
    var passWord = document.getElementById("password");
    //提交方式
    form.method="post";
    form.action="test.php";
    //绑定事件  特效
    name.addEventListener("click",function(){ this.className="ihover";},false);
    name.addEventListener("mouseout",function(){ this.className = ""; },false);
    passWord.addEventListener("click",function(){ this.className="ihover"; },false);
    passWord.addEventListener("mouseout",function(){ this.className = ""; },false);
    //判断是否有输入信息，没有信息就阻止提交
    form.addEventListener("submit",function(ev){
        if(name.value == "" || passWord.value == ""){
            alert("随便填点什么吧");
            ev.preventDefault();
        }
    },false)
};
