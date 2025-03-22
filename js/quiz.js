import { quizQuestions } from './data.js'

export function initQuiz() {
	const quizContainer = document.getElementById('quiz-container')
	const quizResult = document.getElementById('quiz-result')
	const submitBtn = document.getElementById('submit-quiz')
	let userAnswers = []

	function renderQuiz() {
		quizContainer.innerHTML = ''
		userAnswers = Array(quizQuestions.length).fill(null)

		quizQuestions.forEach((q, index) => {
			const card = document.createElement('div')
			card.className = 'quiz-card'
			card.innerHTML = `<h3>${q.question}</h3>`
			const optionsWrapper = document.createElement('div')
			optionsWrapper.className = 'quiz-options'

			q.options.forEach((opt) => {
				const btn = document.createElement('button')
				btn.className = 'quiz-option-btn'
				btn.textContent = opt.text
				btn.dataset.type = opt.type
				btn.addEventListener('click', () => {
					userAnswers[index] = opt.type
					;[...optionsWrapper.children].forEach((b) =>
						b.classList.remove('selected')
					)
					btn.classList.add('selected')
				})
				optionsWrapper.appendChild(btn)
			})

			card.appendChild(optionsWrapper)
			quizContainer.appendChild(card)
		})
	}

	submitBtn.addEventListener('click', () => {
		if (userAnswers.includes(null)) {
			quizResult.textContent = 'Please answer all questions!'
			quizResult.classList.remove('hidden')
			return
		}
		const score = userAnswers.reduce((acc, type) => {
			acc[type] = (acc[type] || 0) + 1
			return acc
		}, {})
		const result = Object.entries(score).reduce((a, b) =>
			b[1] > a[1] ? b : a
		)[0]
		quizResult.textContent = `You're a ${result} developer! 🎉`
		quizResult.classList.remove('hidden')
	})

	renderQuiz()
}
