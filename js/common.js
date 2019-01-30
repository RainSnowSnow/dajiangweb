$(function(){
	$("img.lazy").lazyload({ 
		effect : "fadeIn" 
	});
	$("div.lazy").lazyload({ 
		effect : "fadeIn" 
	});
	$("#navbar").hover(function () {
		$('.navbar-drop ').slideDown(500)
		$('.drop-bg').slideDown(500)


	}, function () {
		$('.drop-bg').slideUp(500)
		$('.navbar-drop ').hide(10)

	});

	jQuery(".i-banner").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,scroll:1,vis:1,effect:"fold",autoPlay:true,interTime:5000,mouseOverStop:true,delayTime:600,
	startFun:function(i,c){
		var now=$(".i-banner .bd li").eq(i);
        if(now.attr("data-load")=="no"){
				now.css("backgroundImage","url("+now.attr("data-bg")+")");
				now.attr("data-load","yes");
			}
		},
	endFun:function(i,c){
		var now=$(".i-banner .bd li").eq(i+1);
        if(now.attr("data-load")=="no"){
			setTimeout(function(){
					now.attr("data-load","yes");
					now.css("backgroundImage","url("+now.attr("data-bg")+")");
				}, 3000);
			}
		}
	});
	

	
	
	jQuery(".ind-con1-mediascroll").slide({mainCell:".bd ul",easing:"swing",effect:"left"});
	
	jQuery(".slideTxtBox").slide({effect:"fold",switchLoad:"_src"});
	
	$(".back2top").click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	});
	$(".i-search").mouseover(function(){

		$('.sch_1').css("display","block");
		$('.sch_1').stop().animate({width:300},500);
	});
	$(".i-search").mouseleave(function(){
		$('.sch_1').css("display","none");
		$('.sch_1').stop().animate({width:0},100);
		
	});

	//三级菜单下拉
	$(".mulfast").hover(function(){
		$(this).find("ul").stop().slideDown();
	}, function(){
		$(this).find("ul").stop().slideUp();
	})

	//右侧客服
	$(".float-rig li").hover(function () {
        $(this).addClass("h");
    }, function () {
        $(this).removeClass("h");
    })
    $(".float-rig .b4").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
    })


    //团队、招聘、手风琴效果
    $(".jobChild-head").click(function(){
		if ($(this).hasClass("on")){
			$(this).next().slideUp(500);
			$(this).removeClass("on");
		}
		else{
			$(this).parent().find(".on").next().slideUp(500);
			$(this).parent().find(".on").removeClass("on");
			$(this).next().slideDown(500);
			$(this).addClass("on");
		}
    });
	
});


	
$(window).scroll(function () {

	var _ismobile = false;
	var windowTop = $(window).scrollTop();
	var windowBottom = windowTop + $(window).height();
	var showNum = !_ismobile ? 4 : 16;
	$('.ani-view').each(function(){

		var pageQ1 = $(this).offset().top + $(this).height() / showNum;
		var pageQ3 = $(this).offset().top  + $(this).height() / 1;


		if( ( pageQ1 <= windowBottom ) && ( pageQ3 >= windowTop ) ){

			if( $(this).hasClass("fade-in-down") ) $(this).addClass('fadeInDown');
			if( $(this).hasClass("fade-in-left") )  $(this).addClass('fadeInLeft');
			if( $(this).hasClass("fade-in-right") )  $(this).addClass('fadeInRight');
			if( $(this).hasClass("indCon2-fade-in-down") )  $(this).addClass('indCon2fadeInDown');
			if( $(this).hasClass("indCon2-fade-in-up") )  $(this).addClass('indCon2fadeInUp');
				
		}else {

			// if( $(this).hasClass('fadeInDown') ) $(this).removeClass(' fadeInDown');
			// if( $(this).hasClass('fadeInLeft') ) $(this).removeClass('fadeInLeft');
			// if( $(this).hasClass('fadeInRight') ) $(this).removeClass(' fadeInRight');
			if( $(this).hasClass('fadeInDown') ) $(this).removeClass('ani-view fade-in-down fadeInDown');
			if( $(this).hasClass('fadeInLeft') ) $(this).removeClass('ani-view fade-in-left fadeInLeft');
			if( $(this).hasClass('fadeInRight') ) $(this).removeClass('ani-view fade-in-right fadeInRight');
			if( $(this).hasClass("indCon2fadeInDown") )  $(this).addClass('ani-view indCon2-fade-in-down indCon2fadeInDown');
			if( $(this).hasClass("indCon2fadeInUp") )  $(this).addClass('ani-view indCon2-fade-in-up indCon2fadeInUp');
		}

	});
	
	if (windowTop>300){
		$(".back2top").fadeIn(500);
	}
	else
	{
		$(".back2top").hide();
	}

	if ($(window).scrollTop()>0){
		$(".header-wrap").addClass("header-fixed");
	}
	else{
		$(".header-wrap").removeClass("header-fixed");
	}
			
});