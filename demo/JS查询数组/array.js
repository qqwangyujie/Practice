
    //作业的大体思路：1、先遍历整个数组，找到重复的元素，计算 每个元素的重复的次数
    //                2、比较每个元素重复的次数，计算出重复最多的元素的次数，以及该元素的值
    //                3、根据得到重复最多的元素，计算该元素在数组中的位置
(function() {
    var box = document.getElementById("box");
    var box1 = document.getElementById("box1");
    var array = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];//数组
    var count = 1;                                                  //出现的次数
    var ele = [];//存放数组array的不重复的元素
    var time = []; //存放数组array中每个不同元素的出现的次数
    var max = 0;    //存放time中计算得到的最大值,也就是出现的最多的次数；
    var most;   //存放出现最多的元素
    var num = 0;        //indexOf查找元素的位置的开始的地方

    //1.----------------找到重复最多的元素。和次数-------------
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++;//用来计算与当前这个元素相同的个数
                array.splice(j, 1); //每找到一个相同的元素，就要把它移除掉，
                j--;
            }
        }
        ele[i] = array[i];//将当前的元素存入到ele数组中，已经改变了原来数组中的值
        time[i] = count;  //并且将有多少个当前这样的元素的个数存入time数组中
        count = 1;  //再将count重新赋值，进入下一个元素的判断
    }

    //2、---------------比较每个元素重复的次数，计算出重复最多的元素的次数，以及该元素的值-----------

    for (var m = 0; m < time.length; m++) {    //循环time中的元素
        if (max < time[m]) {                //计算time中的最大次数
            max = time[m];
            most = ele[m];              //time中最大次数的位置 对应着 ele中的元素位置，得到了重复次数最多的元素
        }
    }
    //将重复最多的元素和次数在页面上显示
    (function () {
        var p = document.createElement("p");
        var node = document.createTextNode("重复最多的是:" + most + "重复了" + max + "次");
        p.appendChild(node);
        box1.appendChild(p);
    })(most, max);


    //3.---------------------------确定重复最多元素的位置----------------------------------
    (function () {
        var array = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];//   由于计算重复最多的元素，改变了数组的值  ，这里重新写了次这个数组
        var num = 0;
        var position = array.indexOf(most, num);      //查询所在的位置
        while (position != -1) {
            //将查询的位置显示在页面上
            (function () {
                var p = document.createElement("p");
                var node = document.createTextNode("在" + position + "位置");
                p.appendChild(node);
                box.appendChild(p);
            })(position);
            num = position + 1;                        //下次开始查找的位置 = 当前字符的位置+1
            position = array.indexOf(most, num);    //第二次查找
        }
    })()
})()

