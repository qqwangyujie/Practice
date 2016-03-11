(function() {
    var box1 = document.getElementById("box1");        //存放结果的盒子
    var btn = document.getElementsByTagName("button")[0].onclick = function () {  //按钮点击事件
        var inp1 = document.getElementsByTagName("input")[0].value;    //第一个输入框的值
        var inp2 = document.getElementsByTagName("input")[1].value;    //第二个输入框的值
        var select = document.getElementById("select").value;                    //运算符号

        if ((isNaN(inp1) || isNaN(inp2)) || (inp1 == "" || inp2 == "")) {              //判断输入是否为数字,是否为空。
            box1.innerHTML = "请输入数字";
        }
        else {
            switch (true) {
                case select == 0:
                    box1.innerHTML = parseInt(inp1) + parseInt(inp2);
                    break;
                case select == 1:
                    box1.innerHTML = parseInt(inp1) - parseInt(inp2);
                    break;
                case select == 2:
                    box1.innerHTML = parseInt(inp1) * parseInt(inp2);
                    break;
                case select == 3:
                    box1.innerHTML = parseInt(inp1) / parseInt(inp2);
                    break;
                default :
                    box1.innerHTML = "error"
            }
        }
    }
})();

