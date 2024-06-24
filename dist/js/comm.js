$(document).ready(function () {
    $("#fullPage").fullpage({
        scrollHorizontally: true,
        responsiveWidth: 1024,
        navigation: true,
        showActiveTooltip: true,
        anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage", "sixthPage","footerview"],
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $(".home-wrap").css({
                    width: "100%",
                    height: "450px",
                });
                $(".home-wrap").animate(
                    {
                        opacity: 1,
                    },
                    100
                );
                $(".arrow").css({
                    opacity: 1,
                });
            }
        },
        
        onLeave: function (index, nextIndex, direction) {
            if (index == 1 && direction == "down") {
                $(".home-wrap").css({
                    width: "4000px",
                    height: "2000px",
                });
                $(".arrow").css({
                    opacity: 0,
                });
            }
        },
    });

    // 마우스커서
    var $mousePointer = $("#mouse-pointer"),
        $clickElements = $("a, label");

    function moverCursor(e) {
        $mousePointer.css({
            left: e.pageX,
            top: e.pageY,
        });
    }
    $clickElements.mouseenter(function () {
        $mousePointer.addClass("hover");
    });
    $clickElements.mouseleave(function () {
        $mousePointer.removeClass("hover");
    });

    $(window).on("mousemove", moverCursor);

    $(".app-form-button").on("click", function () {
        swal({
            title: "이메일 전송완료!🤗",
            icon: "success",
        });
    });

    const menu = document.querySelector('.headerview-menu');
    const menuList = document.querySelector('.headerview-list');

    menu.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.toggle('add');
        menuList.classList.toggle('show');
    });



    
// 버튼 요소를 가져옵니다.
var scrollToTopBtn = document.getElementById("scrollTopBtn");

// 페이지를 맨 위로 스크롤하는 함수를 정의합니다.
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // 부드러운 스크롤 효과 적용
    });
}

// 사용자가 스크롤할 때 버튼을 표시하거나 숨깁니다.
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener('click', topFunction)



    
    $(window).scroll(function(){
        if($('body').hasClass('fp-viewing-sevenPage')){
            $('#fp-nav').css('display','none')
        } else {
            $('#fp-nav').css('display','inline-block')
        }
    });
});