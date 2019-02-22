$(function() {

	$('.owl-slider').owlCarousel({
		dots: true,
		nav: false,
		loop: true,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 1
			},
			1100: {
				items: 1
			}
		}
	});

});
