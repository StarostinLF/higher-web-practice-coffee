const faqQuestions = document.querySelectorAll('.faq__question');

faqQuestions.forEach((question) => {
	question.addEventListener('click', () => {
        const faqIcon = question.querySelector('.faq__icon');
		const faqAnswer = question.nextElementSibling;

		faqIcon.classList.toggle('faq__icon_rotated');
		faqAnswer.classList.toggle('faq__answer_visibled');
	});
});
