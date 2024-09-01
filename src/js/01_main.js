$(document).ready(function() {
	
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
		slidesPerView: 3,
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
	
	const feedbackSlider = new Swiper('.feedbacks-slider', {
		speed: 400,
		spaceBetween: 20,
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.feedbacks .swiper-button-next',
			prevEl: '.feedbacks .swiper-button-prev',
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
				loop: true,
			},
			768: { loop: false, },
			1201: {
				pagination: { enabled: false },
				navigation: { enabled: true },
			}
		}
	});
	
	var productSlider = new Swiper(".product-slider", {
		slidesPerView: 1,
		loop: false,
		pagination: {
			el: '.product-slider .swiper-pagination',
			type: 'bullets',
		},
		breakpoints: {
			0: { enabled: true },
			767: { enabled: false }
		}
	});
	
	var pinSlider = new Swiper(".pin-slider", {
		slidesPerView: 'auto',
		loop: false,
		spaceBetween: 10,
		breakpoints: {
			0: { enabled: true },
			767: { enabled: false }
		}
	});
	
	var productFilterSlider = new Swiper(".product-filter-slider", {
		slidesPerView: 1,
		loop: false,
		spaceBetween: 10,
		pagination: {
			el: '.product-filter-slider .swiper-pagination',
			type: 'bullets',
		},
		breakpoints: {
			0: { enabled: true },
			767: { enabled: false }
		}
	});
	
	// close dropwdown on click
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
	
	const dropdownCloseBtn = document.querySelectorAll('.product-filter-dropdown-close');
	
	if(dropdownCloseBtn.length > 0) {
		dropdownCloseBtn.forEach(btn => {
			btn.addEventListener('click', () => {
				btn.closest('.dropdown').querySelector('.dropdown-toggle').click()
			})
		})
	};

})


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

//hero block animation
$(window).on('scroll', function() {
	var scrollTop = $(this).scrollTop();
	var percentage = (100 - scrollTop);

	var newRadius = 11
	newRadius = Math.min(100 + scrollTop / 5, 500)/10; // You can adjust these numbers
	var newRadiusOuter = scrollTop; // You can adjust these numbers
	if(scrollTop < 35) {
		newRadiusOuter = 35;
	}

	percentage = parseInt((100 - scrollTop));
	if(scrollTop < 0 || percentage < 0) {
		percentage = 0;
	}

	if(percentage > 55) {
		percentage = 55;
	}

	if ($(window).width() <= 1024) {
		$('.hero-mask').css('background', `radial-gradient(500px 300px at 50% 46%,  rgba(0,0,0,${percentage}%)  0%, rgba(0,0,0,1) ${newRadiusOuter}%)`);
	}
	else {
		$('.hero-mask').css('background', `radial-gradient(ellipse at 50% 42%,  rgba(0,0,0,${percentage}%)  0%, rgba(0,0,0,1) ${newRadiusOuter}%)`);
	}
	if(newRadiusOuter >= 70) {
		$('.hero-title span').addClass('is-visible');
	} else {
		$('.hero-title span').removeClass('is-visible');
	}
});

// subscribe-form success message
$('.subscribe-form').on('submit', function(e) {
	e.preventDefault();
	$('.subscribe-section .form-msg').addClass('active')
	setTimeout(function() {
		$('.subscribe-section .form-msg').removeClass('active')
	}, 5000)
});

// pin tooltip
$('.pin-btn').on('click', function() {
	if($(this).hasClass('isactive')) {
		$(this).removeClass('isactive')
	} else {
		$('.pin-btn.isactive').removeClass('isactive')
		$(this).addClass('isactive')
	}
});