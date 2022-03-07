// 'use strict';

// Select accordion
const FAQ = document.querySelector('.main__faq');
// select questions
const buttons = FAQ.querySelectorAll('.main__faq-button');

// Loop through all buttons
buttons.forEach(button =>
	button.addEventListener('click', event => {
		// Select container of current question and answer
		const parentContainer = event.target.closest('.main__faq-item');
		// Select current answer
		const currentAnswer = parentContainer.querySelector('.main__faq-answer');

		// Toggle active class on buttons
		button.classList.toggle('active');

		// Toggle hide class on answars
		currentAnswer.classList.toggle('show');

		// Toggle aria attributes
		if (button.classList.contains('active')) {
			// Set aria-expanded attribute to true on buttons
			button.setAttribute('aria-expanded', true);
			// Set aria-hidden attribute to false on answers
			currentAnswer.setAttribute('aria-hidden', false);
		} else {
			// Set aria-expanded attribute to true on buttons
			button.setAttribute('aria-expanded', false);
			// Set aria-hidden attribute to false on answers
			currentAnswer.setAttribute('aria-hidden', true);
		}
	})
);
