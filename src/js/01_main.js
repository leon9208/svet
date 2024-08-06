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