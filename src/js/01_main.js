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
			clickable: true,
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
	
	// product-card slider
	var productSlider = new Swiper(".product-slider", {
		slidesPerView: 1,
		loop: false,
		pagination: {
			el: '.product-slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			0: { enabled: true },
			767: { enabled: false }
		}
	});
	
	// big product carousel
	var productSlider = new Swiper(".product-carousel", {
		slidesPerView: 1,
		loop: false,
		pagination: {
			el: '.product-carousel .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});
	
	// recommended products
	var productListSlider = new Swiper(".product-list-slider", {
		slidesPerView: 4,
		loop: false,
		spaceBetween: 20,
		breakpoints: {
			0: { 
				slidesPerView: 2,
				spaceBetween: 10, 
			},
			768: { 
				slidesPerView: 3,
				spaceBetween: 15, 
			},
			992: { 
				slidesPerView: 4,
				spaceBetween: 20, 
			}
		}
	});
	
	var pinSliderMobile = new Swiper(".pin-slider--mobile", {
		slidesPerView: 'auto',
		loop: false,
		spaceBetween: 10,
		breakpoints: {
			0: { enabled: true },
			767: { enabled: false }
		}
	});
	
	var pinSliderDesktop = new Swiper(".pin-slider--desktop", {
		slidesPerView: 1,
		loop: false,
		spaceBetween: 20,
		breakpoints: {
			0: { enabled: false },
			767: { enabled: true }
		}
	});
	
	var designCarouselMobile = new Swiper(".design-carousel-mobile", {
		slidesPerView: 'auto',
		loop: false,
		spaceBetween: 10,
		pagination: {
			el: '.design-carousel-mobile .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			0: { enabled: true },
			767: { enabled: false }
		}
	});
	
	var designCarouselDesktop = new Swiper(".design-carousel-desktop", {
		slidesPerView: 1,
		loop: false,
		spaceBetween: 20,
		navigation: {
			nextEl: '.design-carousel .swiper-button-next',
			prevEl: '.design-carousel .swiper-button-prev',
		},
		breakpoints: {
			0: { enabled: false },
			767: { enabled: true }
		}
	});
	
	var productFilterSlider = new Swiper(".product-filter-slider", {
		slidesPerView: 1,
		loop: false,
		spaceBetween: 10,
		pagination: {
			el: '.product-filter-slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			0: { enabled: true },
			767: { enabled: false }
		}
	});
	
	var combinationSlider = new Swiper(".combination-slider", {
		slidesPerView: 1,
		loop: false,
		spaceBetween: 10,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		navigation: {
			nextEl: '.combination-slider .swiper-button-next',
			prevEl: '.combination-slider .swiper-button-prev',
		},
		pagination: {
			el: '.combination-slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			0: { pagination: { enabled: true} },
			767: { pagination: { enabled: false} }
		}
	});


	var optionsSlider = new Swiper(".options-slider", {
		slidesPerView: 'auto',
		loop: false,
		spaceBetween: 10,
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

// video iframe in modal
let videoSrc;

// Add click event listener to all elements with class "video-btn"
var videoBtns = document.querySelectorAll('.video-btn')
if(videoBtns.length > 0) {
	videoBtns.forEach(button => {
		button.addEventListener('click', () => {
			videoSrc = button.dataset.src;
		});
	});
}

// Add event listener for when the modal is opened
document.getElementById('modalVideo').addEventListener('shown.bs.modal', () => {
	document.getElementById('video').src = videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";
});

// Add event listener for when the modal is closed
document.getElementById('modalVideo').addEventListener('hide.bs.modal', () => {
	document.getElementById('video').src = videoSrc;
});


//gamer options tab
$('.options-item').on('mouseover', function() {
	let optImages = $('.options-images__item');
	optImages.removeClass('active');
	$(optImages[$(this).index()]).addClass('active')
})

//combination presentation section
const checkboxes = document.querySelectorAll('.combination input[type="checkbox"]');
let selectedValues = [];

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('change', () => {
		let currentImg = checkbox.closest('.combination-item').querySelector('.combination-item__img img');
		let imgDataName = currentImg.dataset.img;
		let imgFileName
		if (checkbox.checked) {
			selectedValues.push(parseInt(checkbox.value));
		} else {
			selectedValues = selectedValues.filter(value => value !== parseInt(checkbox.value));
		}

		selectedValues.sort((a, b) => a - b);

		if (selectedValues.length === 1) {
			imgFileName = imgDataName+'-'+selectedValues[0];
		} else if (selectedValues.length === 2) {
			imgFileName = imgDataName+'-'+selectedValues.join('-');
		} else if (selectedValues.length === 3) {
			imgFileName = imgDataName+'-'+selectedValues.join('-');
		} else {
			imgFileName = imgDataName;
		}
		console.log(`img/${imgFileName}.webp`);

		// currentImg.src = `img/${imgFileName}.webp`;
	});
});

// product description collapse
var collapseBtn = document.querySelectorAll('.product-description__btn');

if(collapseBtn.length > 0) {
	collapseBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			if(btn.classList.contains('isopen')) {
				btn.classList.remove('isopen')
				btn.innerHTML = 'Подробнее'
			} else {
				btn.classList.add('isopen')
				btn.innerHTML = 'Скрыть'
			}
		})
	})
}