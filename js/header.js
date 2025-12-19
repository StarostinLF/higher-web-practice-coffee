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

		burgerNav.setAttribute('aria-hidden', String(isExpanded));

		burger.classList.toggle('burger--active');
		burgerNav.classList.toggle('burger__navigation--open');
	});
});
