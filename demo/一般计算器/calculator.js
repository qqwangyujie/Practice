/*大致思路：
        1 找DOM元素
        2 声明3个全局变量，用于保存结果、临时保存结果、保存运算符号
        3 将输入的结果在页面上显示
        4 根据不同输入方式，比如直接点击等号、点击2次加号，多次点击小数点，排除错误的输入方式
*/
/*浏览器的兼容:
                ie9  和 谷歌都ok；
                火狐挂了；
*/
(function() {
    //DOM
    var num = document.getElementsByClassName("number");
    var ope = document.getElementsByClassName("operator");
    var box = document.getElementById("box").children[0];
    var eq = document.getElementById("equal");
    var point=document.getElementById("point");

    var result="" ;                //保存结果
    var tmp="" ;               //临时保存结果
    var operator;           //保存运算符号

    //循环数字
        for (var i = 0; i < 11; i++) {
            //数字点击事件
            num[i].onclick = function () {
                //将值保存在tmp中
                tmp += this.value;
                //判断tmp中是否有小数点,有小数点就将其禁用
                if (tmp.indexOf(".") != -1) {
                    point.disabled = "disable";
                }
                //将tmp在页面上显示
                box.innerText = tmp;
            }
        }
    //循环符号
    for(var j=0;j<ope.length;j++){
        // 符号点击事件
        ope[j].onclick=function(){
            //将小数点符号启用
            point.disabled="";
            operator=this.value;
            //判断，如果页面上有有值，说明不是第一输入
            if(box.innerText!=""){
                result = box.innerText;
                tmp="";
            }
            //第一次输入
            else{
                result=tmp;
                tmp="";
            }
        }
    }
    //等号点击事件，触发计算函数，给出运算结果
    eq.onclick = function () {
        //判断如果直接点击 =
        if(typeof (operator)=="undefined"){
            tmp = box.innerText;
        }
        //被除数不能为0
        else if(operator=="/"&&tmp==0){
            box.innerText="被除数不能为0";
        }
        //判断如果结果是NaN.输入有错误
        else if(isNaN(calculator(parseFloat(result), operator, parseFloat(tmp)))){
            box.innerText="输入错误";
            console.log(operator,result,tmp)
        }
        //运行计算函数函数
        else{
            box.innerText = calculator(parseFloat(result), operator, parseFloat(tmp));
            tmp="";
        }
    };
    //计算函数
    function calculator(result, operator, tmp) {
        switch (true) {
            case operator == "+":
                return  result + tmp;
                break;
            case operator == "-":
                return result - tmp;
                break;
            case operator == "*":
                return  result * tmp;
                break;
            case operator == "/":
                return  result / tmp;
                break;
            case operator == "sin":
                //result是角度，将角度转换为弧度，带入sin中求值,,由于精度，需要取整,我取的1位
                return Math.ceil( Math.sin( 2*Math.PI/360*result)*10)/10;
                break;
            case operator == "cos":
                //result是角度，将角度转换为弧度，带入cos中求值,,由于精度，需要取整,我取的1位
                return  Math.ceil( Math.cos( 2*Math.PI/360*result)*10)/10;
                break;
            case operator == "%":
                return result / 100;
                break;
            case operator == "√":
               return Math.sqrt(result);
                break;
            default :
                box.innerText = ("输入错误");
        }

    }
    //初始化
    document.getElementById("zero").onclick = function () {
        window.location.reload();
    };
})();