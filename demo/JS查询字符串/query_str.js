

var str1 = document.getElementsByTagName("textarea")[0];//文本的位置
var str2 = document.getElementsByTagName("input")[0];//查询的位置
var box1  = document.getElementById("box1");              //存放查询到次数
var box2  = document.getElementById("box2");              //存放查询到位置
var btn  = document.getElementsByTagName("button")[0].onclick=query;//按钮绑定查询事件
function query(){
    var value1 = str1.value;   //文本的内容
    var value2 = str2.value;  //查询的内容
    var position = value1.indexOf(value2,num);  //确定一个字符串在另一个字符串中的位置
    var num= 0;   // 字符串开始查找的初始位置
    var time=0;   //循环的次数    （一个字符串在另一个字符串中找到了多少个相同值）

    if(  (value2.length>value1.length) ||((value1||value2) == "") ){
        box1.innerHTML = "查询不能为空或查询内容太长,请重新输入" ; //查询的内容>文本内容，或为空,返回错误
        return false
    }
    else if(position==-1){
        box1.innerHTML = "没找到";                     //没有查询到
        return false
    }
    else{
        while(position!=-1){
            //  console.log(position);                  //当前字符的位置，默认为0。第一次查找
            (function(){                                                                //创建节点存放查询到的数据。为了便于人的习惯顺序从1开始，位置默认+1；
                var p =document.createElement("p");
                var node = document.createTextNode("在第"+(parseInt(position) +1)+"位置");
                p.appendChild(node);
                box2.appendChild(p);
            })(position);
            num=position+value2.length ;             //下次开始查找的位置 = 当前字符的位置+查找的字符串的长度
            position = value1.indexOf(value2,num);    //第二次查找
            time++;                                   //找到多少次
        }
        box1.innerHTML = "查到了"+time+"次";
    }
}

