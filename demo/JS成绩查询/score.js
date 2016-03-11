
(function() {
    var score = document.getElementsByTagName("input")[0];  //查询的分数
    var btn = document.getElementsByTagName("button")[0];  //查询按钮
    var box1 = document.getElementById("box1");            //存放查询的结果
    btn.onclick = search;                                     //点击事件
    function search() {
        var s = score.value;                                 //获得查询的分数的值
        if(s==""|| s<0 || s>100 ){
            box1.innerHTML = "请输入0-100的数字";
            return false;
        }else{
            switch (true) {
                case ( s >= 90 && s <= 100):
                {
                    box1.innerHTML = "1等生";
                    break;
                }
                case ( s >= 80 && s < 90 ):
                {
                    box1.innerHTML = "2等生";
                    break;
                }
                case ( s >= 70 && s < 80 ):
                {
                    box1.innerHTML = "3等生";
                    break;
                }
                case ( s >= 60 && s < 70 ):
                {
                    box1.innerHTML = "4等生";
                    break;
                }
                case( s >= 50 && s < 60 ):
                {
                    box1.innerHTML = "5等生";
                    break;
                }
                case ( s >= 40 && s < 50 ):
                {
                    box1.innerHTML = "6等生";
                    break;
                }
                case( s >= 30 && s < 40 ):
                {
                    box1.innerHTML = "7等生";
                    break;
                }
                case( s >= 20 && s < 30 ):
                {
                    box1.innerHTML = "8等生";
                    break;
                }
                case ( s >= 10 && s < 20 ):
                {
                    box1.innerHTML = "9等生";
                    break;
                }
                case ( s >= 0 && s < 10 ):
                {
                    box1.innerHTML = "10等生";
                    break;
                }
                default:
                {
                    box1.innerHTML = "请输入数字"
                }
            }
        }
    }
})();