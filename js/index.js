

$(document).ready(function () {

    //轮播图
    var index = 0;
    var timer = setInterval(autoPlay, 3000);
    function autoPlay() {
        if (index == $(".slideshow-content").children().size() - 1) {
            index = 1;
            $(".slideshow-content").css("left", "0px");
        } else {
            index++;
        };
        $(".slideshow-content").animate({
            left: -index * 680 + "px"
        }, 500);
        $("#bt li").eq(index).addClass("current").siblings().removeClass("current");
    }

    $("#bt li").click(function () {
        $(this).eq($("#bt li").index()).addClass("current").siblings().removeClass("current");
        index = $(this).index()
        $(".slideshow-content").css("left", -index * 680 + "px");
    });
    $(".slideshow").mouseleave(function () {
        timer = setInterval(autoPlay, 3000);
    });

    $(".slideshow").mouseenter(function () {
        clearInterval(timer);
    });

    //返回顶部
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height()) {
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    });
    $(".back-to-top").click(function () {
        $("body,html").animate({ scrollTop: "0px" }, 300);
        return false;
    });

    //所有周边 菜单 背景色
    $("#navbg>.navLi").mouseenter(function () {
        var arr = ["#fdd053", "#e65c00", "#64abea", "#b081d3", "#4bccad"];
        $(this).css("background", arr[$(this).index()]).siblings().css("background", "#f5f5f5");
    });
    $("#navbg>.navLi").mouseleave(function () {
        $(this).css("background", "#f5f5f5");
    })
});

