(function(){

	function init(){
		responsiveNav();
		navPage();
		whyQuestions();
		pushNav();
	}

	function responsiveNav() {
		$('.menu').click(function(e) {
			e.preventDefault();

			$(this).toggleClass('open');

			if($(this).hasClass('open')) {
				$('#header .nav').show().removeClass('slideOutUp animated').addClass('slideInDown animated');
			} else {
				$('#header .nav').fadeOut().removeClass('slideInDown animated').addClass('slideOutUp animated');
			}

		});
	}

	function navPage() {
		$('#homepage #main').fullpage({
			verticalCentered: false,
			anchors: ['home', 'why'],
			onLeave: function(index, nextIndex, direction){
	            var leavingSection = $(this);

	            if(index == 1){
	                $('#header').addClass('sticky fadeInDown animated').promise().done(function() {
						$('#sidebar').show().removeClass('fadeOutLeft animated').addClass('fadeInLeft animated');
					});
	            }

	            if(index == 2){
	                $('#header').removeClass('sticky  fadeInDown animated');
					$('#sidebar').removeClass('fadeInLeft animated').addClass('fadeOutLeft animated');
	            }
	        },
		});

		$.fn.fullpage.setAllowScrolling(false);

		$('.scrolldown').click(function(e){
			e.preventDefault();
			$.fn.fullpage.moveSectionDown();
		});

		$('.scrollup').click(function(e){
			e.preventDefault();
			$.fn.fullpage.moveSectionUp();
		});
	}

	function pushNav() {

		var $sidebar = $('.pushmenu-left'),
			$menu = $('.menu-trigger');
		
		$menu.click(function(e) {
			e.preventDefault();
			$(this).toggleClass('active');
			$('#homepage').toggleClass('pushmenu-push-toright');
			$sidebar.toggleClass('pushmenu-open');
		});

	}

	function whyQuestions() {

		$('.top').click(function(e) {
			e.preventDefault();
			$('.reset').trigger('click');
		});

		$('.why .scrolldown').click(function(e) {
			e.preventDefault();

		    var nextSlide  = $('.fadeInUp').removeClass('fadeInUp animated').next();

		    if (!nextSlide.length) {
		        nextSlide = $('.question').first();
		        $('.question').last().addClass('last');
		    }

		    nextSlide.addClass('fadeInUp animated');

		    if ($('.puzzle').is(':visible')) {
		        $('#sidebar').removeClass('fadeInLeft animated').addClass('fadeOutLeft animated');
		        $('.why').addClass('bg-puzzle');
		    } else {
		    	$('#sidebar').removeClass('fadeOutLeft animated').addClass('fadeIntLeft animated');
		    	$('.why').removeClass('bg-puzzle');
		    }

		    if ($('.last').is(':visible')) {
		    	$('.why .scrollup').addClass('fadeInUp animated');
		    } else {
		    	$('.why .scrollup').removeClass('fadeInUp animated');
		    }

		});
	}

	function scrollDown() {
		$(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();		

			$(document).off("scroll");
 
			var target = this.hash,
				$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	}

	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('nav a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('nav ul li a').removeClass("active");
				currentLink.addClass("active");
			}
			else{
				currentLink.removeClass("active");
			}
		});
	}

	init();

}());