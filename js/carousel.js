document.addEventListener('DOMContentLoaded', () => {
	const list = document.querySelector('.promotions__list');
	const slides = Array.from(document.querySelectorAll('.promotions__item'));
	const prevButton = document.querySelector('.promotions__button--prev');
	const nextButton = document.querySelector('.promotions__button--next');

	if (!list || slides.length === 0 || !prevButton || !nextButton) return;

	let currentIndex = 0;
	let autoplayId = null;
	const AUTOPLAY_MS = 5000;

	const normalizeIndex = (index) => {
		const total = slides.length;

		return ((index % total) + total) % total;
	};

	const syncIndicators = (activeIndex) => {
		slides.forEach((slide) => {
			const indicators = Array.from(
				slide.querySelectorAll('.card__indicator-item'),
			);

			if (indicators.length === 0) return;

			indicators.forEach((dot, dotIndex) => {
				dot.classList.toggle(
					'card__indicator-item--active',
					dotIndex === activeIndex,
				);
			});
		});
	};

	const showSlide = (index) => {
		currentIndex = normalizeIndex(index);

		slides.forEach((slide, slideIndex) => {
			const isActive = slideIndex === currentIndex;
			slide.hidden = !isActive;
			slide.setAttribute('aria-hidden', String(!isActive));
		});

		syncIndicators(currentIndex);
	};

	const stopAutoplay = () => {
		if (autoplayId === null) return;

		clearInterval(autoplayId);
		autoplayId = null;
	};

	const startAutoplay = () => {
		stopAutoplay();
		
		autoplayId = setInterval(() => {
			showSlide(currentIndex + 1);
		}, AUTOPLAY_MS);
	};

	prevButton.addEventListener('click', () => {
		showSlide(currentIndex - 1);
		startAutoplay();
	});

	nextButton.addEventListener('click', () => {
		showSlide(currentIndex + 1);
		startAutoplay();
	});

	showSlide(currentIndex);
	startAutoplay();
});
