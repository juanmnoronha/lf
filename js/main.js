(function(){

	function init() {
		responsiveNav();
		scrollDown();
		tabs();
		grids();
		team();
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

	function scrollDown() {

		// $(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function(e) {
			e.preventDefault();		

			$(document).off("scroll");
 
			var target = this.hash,
				$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top + 1
			}, 500, 'swing', function () {
				// window.location.hash = target;
				// $(document).on("scroll", onScroll);
			});
		});
	}

	function onScroll(event) {
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

	function tabs() {
		$('.tabs-nav .tab-item').click(function(e) {
			e.preventDefault();

			var $this = $(this),
				$tabId = $this.attr('data-tab'),
				$parent = $this.parents('.content');

			$parent.find('.tab-item').removeClass('active disabled');
			$parent.find('.tab-content').removeClass('active');

			$this.toggleClass('active').siblings().addClass('disabled');

			if($this.parents().is('.what-we-do')) {
				$parent.find("." + $tabId).addClass('active fadeInDown animated');
			} else if($this.parents().is('.who-we-are')) {
				$parent.find("." + $tabId).addClass('active fadeInDown fadeInUp animated');
			} else if($this.parents().is('.inspiration')) {
				$parent.find("." + $tabId).addClass('active fadeInDown fadeInUp animated');
			} else if($this.parents().is('.leap-with-us')) {
				$parent.find("." + $tabId).addClass('active fadeInDown fadeInUp animated');
			}
		});
	}

	function grids() {
		$('.grids-nav .grid-item').click(function(e) {
			e.preventDefault();

			var $this = $(this),
				$gridId = $this.attr('data-grid'),
				$parent = $this.parents('body');

			$parent.find('.grid-item').removeClass('active disabled');
			$parent.find('.grid-content').removeClass('active');

			$this.toggleClass('active').siblings().addClass('disabled');

			$parent.find("." + $gridId).addClass('active fadeInDown animated');
		});
	}

	function team() {
		$('.grids-nav .grid-item').click(function(e) {
			e.preventDefault();

			var $this = $(this);

			$this.find('.profile').addClass('active').parent().siblings().find('.profile').removeClass('active');
		});
	}

	function postAnimated() {
		$('.post').addClass('flipInY animated');
	}

	init();

}());