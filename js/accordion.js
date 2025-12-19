const faqQuestions = document.querySelectorAll('.faq__question');

faqQuestions.forEach((question) => {
	question.addEventListener('click', () => {
		const faqIcon = question.querySelector('.faq__icon');
		const faqAnswer = question.nextElementSibling;

		if (!faqAnswer) return;

		const isExpanded = question.getAttribute('aria-expanded') === 'true';
		
		question.setAttribute('aria-expanded', String(!isExpanded));
		faqAnswer.setAttribute('aria-hidden', String(isExpanded));

		faqIcon?.classList.toggle('faq__icon--rotated');
		faqAnswer.classList.toggle('faq__answer--visible');
	});
});
