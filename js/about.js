import { hobbies, quizQuestions } from './data.js'

export function renderHobbies() {
	const hobbyList = document.getElementById('hobby-list')
	const moodFilter = document.getElementById('mood-filter')

	if (!hobbyList || !moodFilter) return

	function displayHobbies(filteredHobbies) {
		hobbyList.innerHTML = ''
		if (filteredHobbies.length === 0) {
			hobbyList.innerHTML = '<li>No hobbies found for that mood.</li>'
			return
		}
		filteredHobbies.forEach((hobby) => {
			const li = document.createElement('li')
			li.textContent = hobby.name
			hobbyList.appendChild(li)
		})
	}

	moodFilter.addEventListener('change', () => {
		const mood = moodFilter.value
		const filtered =
			mood === 'all' ? hobbies : hobbies.filter((h) => h.mood === mood)
		displayHobbies(filtered)
	})

	displayHobbies(hobbies)
}

export function renderQuiz() {
	const quizContainer = document.getElementById('quiz-container')
	const quizResult = document.getElementById('quiz-result')
	const submitBtn = document.getElementById('submit-quiz')

	if (!quizContainer || !quizResult || !submitBtn) return

	let userAnswers = Array(quizQuestions.length).fill(null)

	function displayQuiz() {
		quizContainer.innerHTML = ''

		quizQuestions.forEach((q, index) => {
			const questionCard = document.createElement('div')
			questionCard.className = 'quiz-card'

			const questionText = document.createElement('h3')
			questionText.textContent = q.question
			questionCard.appendChild(questionText)

			const optionsWrapper = document.createElement('div')
			optionsWrapper.className = 'quiz-options'

			q.options.forEach((opt) => {
				const option = document.createElement('button')
				option.className = 'quiz-option-btn'
				option.textContent = opt.text
				option.addEventListener('click', () => {
					userAnswers[index] = opt.type
					Array.from(optionsWrapper.children).forEach((btn) =>
						btn.classList.remove('selected')
					)
					option.classList.add('selected')
				})
				optionsWrapper.appendChild(option)
			})

			questionCard.appendChild(optionsWrapper)
			quizContainer.appendChild(questionCard)
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

	displayQuiz()
}

// Theme Toggle and Nav Toggle (safe for all pages)
document.addEventListener('DOMContentLoaded', () => {
	const themeToggle = document.getElementById('theme-toggle')
	const themeIcon = document.getElementById('theme-icon')

	function updateThemeIcon() {
		if (!themeIcon) return
		const isDark = document.body.classList.contains('dark-mode')
		themeIcon.textContent = isDark ? '🌞' : '🌙'
	}

	if (themeToggle) {
		themeToggle.addEventListener('click', () => {
			document.body.classList.toggle('dark-mode')
			updateThemeIcon()
		})
		updateThemeIcon()
	}

	const navToggle = document.querySelector('.nav-toggle')
	const navLinks = document.querySelector('.nav-links')

	if (navToggle && navLinks) {
		navToggle.addEventListener('click', () => {
			navLinks.classList.toggle('show')
		})
	}
})
