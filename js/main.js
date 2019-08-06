$(function () {
    //動態產生49個li
    for (var i = 0; i < 7 * 7; i++) {
        $("#board").append($("<li>"))
    };

    //選取每個li，動態塞入數字
    $("#board li").text(function (index) {
        return index
    });

    //選取偶數的li，改變背景色
    $("#board li:even").addClass("black");

    // $("#board li:even").css({
    //   "background":"#222",
    //   "color":"#fff"
    // });

    //插入圖片
    $("#board li").html("<img src='./img/true.png'>");


});