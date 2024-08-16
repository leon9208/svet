const collectionSlider = new Swiper('.collections-slider', {
	speed: 400,
	spaceBetween: 20,
	slidesPerView: 'auto',
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 'auto',
			spaceBetween: 10
		},
		// when window width is >= 768px
		768: {
			slidesPerView: 'auto',
			spaceBetween: 20
		},
		// when window width is >= 991px
		991: {
			slidesPerView: 3,
			spaceBetween: 20
		}
	}
});


const blogSlider = new Swiper('.blog-slider', {
	speed: 400,
	spaceBetween: 20,
	slidesPerView: 'auto',
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 'auto',
			spaceBetween: 10
		},
		// when window width is >= 768px
		768: {
			slidesPerView: 'auto',
			spaceBetween: 20
		},
		// when window width is >= 991px
		991: {
			slidesPerView: 3,
			spaceBetween: 20
		}
	}
});

const reviewsSlider = new Swiper('.reviews-slider', {
	speed: 400,
	spaceBetween: 20,
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.reviews .swiper-button-next',
		prevEl: '.reviews .swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 'auto',
			spaceBetween: 10
		},
		// when window width is >= 768px
		768: {
			slidesPerView: 'auto',
			spaceBetween: 20
		},
		// when window width is >= 991px
		991: {
			slidesPerView: 2,
			spaceBetween: 20
		}
	}
});

var storiesSlider = new Swiper(".stories-slider", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	centerMode: true,
	loop: false,
	initialSlide: 2,
	navigation: {
		nextEl: '.stories-slider .swiper-button-next',
		prevEl: '.stories-slider .swiper-button-prev',
	},
	pagination: {
		el: '.stories-slider .swiper-pagination',
		type: 'bullets',
	},
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 2,
		slideShadows: false,
		stretch: 0
	},
	breakpoints: {
		0: {
			pagination: { enabled: true },
			navigation: { enabled: false },
		},
		1201: {
			pagination: { enabled: false },
			navigation: { enabled: true },
		}
	}
});

var productSlider = new Swiper(".product-slider", {
	slidesPerView: 1,
	loop: false,
	// init: false,
	pagination: {
		el: '.product-slider .swiper-pagination',
		type: 'bullets',
	},
	breakpoints: {
		0: { enabled: true },
		767: { enabled: false }
	}
});