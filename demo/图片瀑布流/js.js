
    $(window).on("load", function () {
        imgLocation();
        var dataImg = {"data": [{"src": "1.jpg"}, {"src": "2.jpg"}, {"src": "3.jpg"}, {"src": "5.jpg"}, {"src": "6.jpg"}]};//加载的数据
        //window鼠标滚动事件
        $(window).scroll(function () {
            //判断是否需要加载图片
            if (scrollSide()) {

                $.each(dataImg.data, function (index, value) {
                        //动态创建DOM,将数据添加到DOM中
                        var box = $("<div>").addClass("box").appendTo(".img-wrapper");
                        var imgContent = $("<div>").addClass("img-content").appendTo(box);
                        var a = $("<a>").appendTo(imgContent);
                        $("<img>").attr("src", "images/" + $(value).attr("src")).appendTo(a)
                    }
                );
                //添加DOM后,将元素按照瀑布流排序
                imgLocation();
            }
        });
    });

//图片放置
function imgLocation() {
    var box = $(".box");
    var boxWidth = box.width();    //获得盒子的宽度
    var boxArr = [];                 //数组用于存放盒子的高度
    var margin = 20;                 //盒子外边距
    var num = Math.floor($(".img-wrapper").width() / boxWidth); //容器的宽度除以盒子的宽度 ，得到一行能放置图片的个数
    box.each(function (index, value) {
        var boxHeight = box.eq(index).height() + margin;  //盒子的高度=高度+外边距 ，使用绝对定位所以要加上外边距
        if (index < num) {
            boxArr[index] = boxHeight;                   //将第一行的盒子高度放置在数组中
        }
        //第2行开始布局
        else {
            var minBoxHeight = Math.min.apply(null, boxArr);  //得到第一行最小高度的盒子
            var minBoxIndex = $.inArray(minBoxHeight, boxArr);    //得到它的位置
            $(value).css({                                      //改变css属性
                position: "absolute",
                top: minBoxHeight,
                left: box.eq(minBoxIndex).position().left
            });
            boxArr[minBoxIndex] += box.eq(index).height() + margin;  //再重新计算它的高度，
        }
    })
}

//滚动加载
function scrollSide() {
    var box = $(".box");
    var lastBoxHeight = box.last().get(0).offsetTop;   //最后一个元素距离顶部的距离
    var scrollHeight = document.body.scrollTop;       //鼠标滚动的高度
    return (lastBoxHeight - scrollHeight < 1000) ? true : false; //返回 "最后一个元素距离顶部的距离"- "鼠标滚动的高度" 的布尔值 ，如果为真需要加载图片
}

