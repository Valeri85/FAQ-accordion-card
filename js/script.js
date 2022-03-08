'use strict';

// Select accordion
const FAQ = document.querySelector('.main__faq');
// select questions
const buttons = FAQ.querySelectorAll('.main__faq-button');
// select answers
const answers = FAQ.querySelectorAll('.main__faq-answer');

// Loop through buttons
buttons.forEach(currentButton =>
	// Add event listeners on current buttons
	currentButton.addEventListener('click', event => {
		// Select current FAQ items
		const currentFAQItem = event.target.closest('.main__faq-item');
		// Select current answers
		const currentAnswer = currentFAQItem.querySelector('.main__faq-answer');

		// Loop through buttons
		buttons.forEach(button => {
			// If button is not current button
			button !== currentButton
				? button.classList.remove('active') // Remove 'active' class from all buttons
				: currentButton.classList.toggle('active'); // Toggle 'active' class on current button

			// If button is active
			button.classList.contains('active')
				? button.setAttribute('aria-expanded', true) // Aria-expanded attribute set to true
				: button.setAttribute('aria-expanded', false); // Aria-expanded attribute set to false if button is not active
		});

		// Loop through answers
		answers.forEach(answer => {
			// If answer is not current answer
			answer !== currentAnswer
				? answer.classList.remove('show') // Remove 'show' class from all answers
				: currentAnswer.classList.toggle('show'); // Toggle 'show' class on current answer

			// If answer is shown
			answer.classList.contains('show')
				? answer.setAttribute('aria-hidden', false) // Aria-hidden attribute set to false
				: answer.setAttribute('aria-hidden', true); // Aria-hidden attribute set to true if answer is not shown
		});
	})
);
