$(document).ready(function(){
	
	//모바일 네비게이션
    
    $('.hambtn').click(openWeb)    
        function openWeb(){
            $('#navs').fadeIn(300);
            
            $('.line1').addClass('open1');
            $('.line2').addClass('open2');
            $('.line3').addClass('open3');
            $('.close').show()
        }
    
    $('.close').click(closeWeb)
    	function closeWeb(){
            $('#navs').fadeOut(300);
            $('.line1').removeClass('open1');
            $('.line2').removeClass('open2');
            $('.line3').removeClass('open3');
            $('.close').hide();
        }
    
    $('.hambtn').mouseenter(function(){
        $('.line').css("background-color","#ec6e6b");
        $('.line1').css("width","40px");
        $('.line2').css("width","30px");
        $('.line3').css("width","20px");
    })
    $('.hambtn').mouseleave(function(){
        $('.line').css("background-color","#616161");
        $('.line1').css("width","40px");
        $('.line2').css("width","40px");
        $('.line3').css("width","40px");
    })
    $('.close').mouseenter(function(){
        $('.line').css("background-color","#ec6e6b");
        $('.line1').css("width","40px");
        $('.line3').css("width","40px");
    })
    $('.close').mouseleave(function(){
        $('.line').css("background-color","#616161");
        $('.line1').css("width","40px");
        $('.line3').css("width","40px");
    })
    
    //뷰 오버
    
    $(".swiper-slide .swiper_view").hover(function(){
        $(this).animate({"bottom":"3%"},500);
    },function(){
        $(this).animate({"bottom":"5%"},100);
    });
    
    //카운트다운
    
    const countDownTimer = function (id, date) { 
        var _vDate = new Date(date); // 전달 받은 일자 
        var _second = 1000; 
        var _minute = _second * 60; 
        var _hour = _minute * 60; 
        var _day = _hour * 24; 
        var timer; 
        function showRemaining() { 
            var now = new Date(); 
            var distDt = _vDate - now; 
            
            if (distDt < 0) { 
                clearInterval(timer);
                document.getElementById(id).textContent = '해당 이벤트가 종료 되었습니다!'; 
                return; 
            } 
            
            var days = Math.floor(distDt / _day); 
            var hours = Math.floor((distDt % _day) / _hour); 
            var minutes = Math.floor((distDt % _hour) / _minute); 
            var seconds = Math.floor((distDt % _minute) / _second);
            
            //document.getElementById(id).textContent = date.toLocaleString() + "까지 : ";
            document.getElementById(id).textContent = days + ' ㅣ ';
            document.getElementById(id).textContent += hours + ' ㅣ ';
            document.getElementById(id).textContent += minutes + ' ㅣ ';
            document.getElementById(id).textContent += seconds;
        } 
        
        timer = setInterval(showRemaining, 1000); 
    } 
    
    var dateObj = new Date(); 
    dateObj.setDate(dateObj.getDate() + 38); 
    countDownTimer('count', dateObj); // 내일까지
//    countDownTimer('sample02', '04/01/2024 00:00 AM'); // 2024년 4월 1일까지, 시간을 표시하려면 01:00 AM과 같은 형식을 사용한다.
//    countDownTimer('sample03', '04/01/2024'); // 2024년 4월 1일까지
//    countDownTimer('sample04', '04/01/2019'); // 2024년 4월 1일까지
    
    //네비게이션
    
    $("#nav_list ul.gnb li").hover(function(){
        $(this).find("ul.sub").stop().slideDown(500);
    },function(){
        $(this).find("ul.sub").stop().slideUp(500);
    });
    

    //라인업 오버
    
    $(".line_up ul li").hover(function(){
        $(this).find("img").fadeIn(100);
    },function(){
        $(this).find("img").fadeOut(100);
    });
    
	
	//슬라이드 쇼
	
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		autoplay : true,
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},
	});
    
    //슬라이드
    
//    $(".slide_bg ul li").eq(0).siblings().css({"left":"-800px"});
//    
//    var slideI = 0;
//    
//    setInterval(function(){
//        
//        if(slideI<2){
//            slideI++;
//        }else{
//            slideI=0
//        }
//        
//        //console.log(slideI);
//        
//        $(".slide_bg ul li").eq(slideI).siblings().animate({"left":"-800px"},500);
//        $(".slide_bg ul li").eq(slideI).animate({"left":"0"},500);
//        
//        
//    },3000);
//    
    
    //탭 메뉴
    
    $(".notice h2").click(function(){
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
        $(".gal h2").removeClass("on");
        $(".gal h2").next("ul").removeClass("on");
    });
    
    $(".gal h2").click(function(){
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
        $(".notice h2").removeClass("on");
        $(".notice h2").next("ul").removeClass("on");
    });
    
    
    //팝업창
    
    $(".notice ul li").eq(0).click(function(){
        $(".modal").stop().fadeIn(500);
    });
    $(".modal .popup button").click(function(){
        $(".modal").stop().fadeOut(500);
    });
    
	// 티저 플레이 버튼
	

	$("#teaser_play").click(function() {
		$("#video_teaser").trigger("play");
        $("#video_teaser").attr({'controls':'controls'});
		$("#section02 ul.containers li .teaser_t").fadeOut(300);
	});
	$("#video_teaser").click(function(){
		$("#section02 ul.containers li .teaser_t").fadeIn(300);
		video.pause();
	});

    
    
    
    
    
});     //ready end