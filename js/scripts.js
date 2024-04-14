$(document).ready(function(){

	/*- header -*/	
	$(window).load(function(){
		$(".header").sticky({ topSpacing: 0 });
    });
		
	/*- down scroll -*/	
	var $page = $('html, body');
		$('.to-bottom, .products-link').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 700);
	    return false;
	});

	/*- animation -*/
	jQuery('.first-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animated fadeInLeftBig',
		offset: 100    
	}); 

	jQuery('.second-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animated fadeInRightBig',
		offset: 100    
	}); 

	jQuery('.third-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animated fadeInUpBig',
		offset: 100    
	});  

	jQuery('.fourth-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animated fadeInDownBig',
		offset: 100    
	});    
	
	/*- menu-btn -*/
	var siteToggle = $('.menu-btn'),
		siteMenu= $('.header__sub-menu');


	siteToggle.on('click', function(){
		$(this).toggleClass("collapsed");
		  siteMenu.toggleClass("show");
		$('body').toggleClass('overflow-hd');
	});
	
	/*- promo -*/
	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
		$(".promo__photo").css({
			transform: 'translate3d(0%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/20)/100+')',
		});
	});
	
	/*- page__top-panel -*/
	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
		$(".page__top-panel__photo").css({
			transform: 'translate3d(0%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/20)/100+')',
		});
	});

	/*- presentation-product__promo -*/
	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
		$(".presentation-product__promo__photo").css({
			transform: 'translate3d(0%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/20)/100+')',
		});
	});

	/*- presentation-product__promo -*/
	$('.type-file__input').change(function() {
	    if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
	    else $(this).prev().text('Выберите файлы');
	});
	
	/*- product-slider -*/
	$('.product-slider__big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		infinite: true,
		asNavFor: '.product-slider__small'
	});

	$('.product-slider__small').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.product-slider__big',
		dots: false,
		centerMode: false,
		infinite: true,
		focusOnSelect: true
	});

	/*- tabs -*/
	$(".gl-tabs .js-tabs-link").aniTabs();

	$(".windowsills-tabs .js-tabs-link").aniTabs();

	/*- accessories__slider -*/
	$('.accessories__slider').slick({
		arrows: false,
		adaptiveHeight: true,
		dots: true,
		infinite: true,
		speed: 500,
		fade: false,
		cssEase: 'linear'
	});

	/*- partners-slider -*/
	$('.partners-slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		speed: 500,
		responsive: [
			{
			breakpoint: 991,
			settings: {
				arrows: true,
				slidesToShow: 4
				}
	    	},
	    	{
			breakpoint: 767,
			settings: {
				arrows: true,
				slidesToShow: 3
				}
	    	},
	    	{
			breakpoint: 580,
			settings: {
				arrows: true,
				slidesToShow: 2
				}
	    	}
	  	]
	});

	/*- type-opening-slider -*/
	$('.type-opening-slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		speed: 500,
		responsive: [
			{
			breakpoint: 991,
			settings: {
				arrows: true,
				slidesToShow: 5
				}
	    	},
	    	{
			breakpoint: 767,
			settings: {
				arrows: true,
				slidesToShow: 3
				}
	    	},
	    	{
			breakpoint: 580,
			settings: {
				arrows: true,
				slidesToShow: 2
				}
	    	}
	  	]
	});

	/*- product-navi -*/
	$('.product-navi__in').slick({
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 8,
		speed: 500,
		responsive: [
			{
			breakpoint: 1205,
			settings: {
				arrows: true,
				slidesToShow: 5
				}
	    	},
	    	{
			breakpoint: 1060,
			settings: {
				arrows: true,
				slidesToShow: 4
				}
	    	},
	    	{
			breakpoint: 860,
			settings: {
				arrows: true,
				slidesToShow: 3
				}
	    	},
	    	{
			breakpoint: 670,
			settings: {
				arrows: true,
				slidesToShow: 2
				}
	    	},
	    	{
			breakpoint: 360,
			settings: {
				arrows: true,
				slidesToShow: 1
				}
    		}
	  	]
	});

});











