document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.burger');
	const burgerNav = document.querySelector('.burger__navigation');

	if (!burger || !burgerNav) return;

	burger.addEventListener('click', function () {
		const isExpanded = burger.getAttribute('aria-expanded') === 'true';

		burger.setAttribute('aria-expanded', !isExpanded);
		burger.setAttribute(
			'aria-label',
			isExpanded ? 'Открыть меню' : 'Закрыть меню',
		);

		burger.classList.toggle('burger_active');
		burgerNav.classList.toggle('burger__navigation_open');
	});
});
