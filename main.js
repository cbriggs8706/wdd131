// import {
// 	funFacts,
// 	hobbies,
// 	quizQuestions,
// 	timeline,
// 	dayOptions,
// } from './data.js'

// // Fun Fact Section
// const factDisplay = document.getElementById('fact-display')
// const factButton = document.getElementById('new-fact')

// function showRandomFact() {
// 	const index = Math.floor(Math.random() * funFacts.length)
// 	factDisplay.textContent = funFacts[index]
// }

// factButton.addEventListener('click', showRandomFact)
// showRandomFact()

// // Hobby Filter Section
// const hobbyList = document.getElementById('hobby-list')
// const moodFilter = document.getElementById('mood-filter')

// function displayHobbies(filteredHobbies) {
// 	hobbyList.innerHTML = ''
// 	if (filteredHobbies.length === 0) {
// 		hobbyList.innerHTML = '<li>No hobbies found for that mood.</li>'
// 		return
// 	}
// 	filteredHobbies.forEach((hobby) => {
// 		const li = document.createElement('li')
// 		li.textContent = hobby.name
// 		hobbyList.appendChild(li)
// 	})
// }

// function filterHobbies() {
// 	const mood = moodFilter.value
// 	if (mood === 'all') {
// 		displayHobbies(hobbies)
// 	} else {
// 		const filtered = hobbies.filter((h) => h.mood === mood)
// 		displayHobbies(filtered)
// 	}
// }

// moodFilter.addEventListener('change', filterHobbies)
// filterHobbies()

// // Quiz Section
// const quizContainer = document.getElementById('quiz-container')
// const quizResult = document.getElementById('quiz-result')
// const submitBtn = document.getElementById('submit-quiz')
// let userAnswers = []

// // Render the quiz
// function renderQuiz() {
// 	quizContainer.innerHTML = ''
// 	userAnswers = Array(quizQuestions.length).fill(null) // Reset answers

// 	quizQuestions.forEach((q, index) => {
// 		const questionCard = document.createElement('div')
// 		questionCard.className = 'quiz-card'

// 		const questionText = document.createElement('h3')
// 		questionText.textContent = q.question
// 		questionCard.appendChild(questionText)

// 		const optionsWrapper = document.createElement('div')
// 		optionsWrapper.className = 'quiz-options'

// 		q.options.forEach((opt, i) => {
// 			const option = document.createElement('button')
// 			option.className = 'quiz-option-btn'
// 			option.textContent = opt.text
// 			option.dataset.type = opt.type

// 			option.addEventListener('click', () => {
// 				userAnswers[index] = opt.type

// 				// Remove "selected" from all options for this question
// 				Array.from(optionsWrapper.children).forEach((btn) =>
// 					btn.classList.remove('selected')
// 				)

// 				option.classList.add('selected')
// 			})

// 			optionsWrapper.appendChild(option)
// 		})

// 		questionCard.appendChild(optionsWrapper)
// 		quizContainer.appendChild(questionCard)
// 	})
// }

// // Handle submission
// submitBtn.addEventListener('click', () => {
// 	if (userAnswers.includes(null)) {
// 		quizResult.textContent = 'Please answer all questions!'
// 		quizResult.classList.remove('hidden')
// 		return
// 	}

// 	const score = userAnswers.reduce((acc, type) => {
// 		acc[type] = (acc[type] || 0) + 1
// 		return acc
// 	}, {})

// 	const result = Object.entries(score).reduce((a, b) =>
// 		b[1] > a[1] ? b : a
// 	)[0]

// 	quizResult.textContent = `You're a ${result} developer! 🎉`
// 	quizResult.classList.remove('hidden')
// })

// // Initialize
// renderQuiz()

// // Timeline Section
// const timelineList = document.getElementById('timeline-list')
// const yearFilter = document.getElementById('year-filter')
// const categoryFilter = document.getElementById('category-filter')

// // Populate unique year options
// function populateYearOptions() {
// 	const years = Array.from(new Set(timeline.map((event) => event.year))).sort(
// 		(a, b) => b - a
// 	)

// 	years.forEach((year) => {
// 		const option = document.createElement('option')
// 		option.value = year
// 		option.textContent = year
// 		yearFilter.appendChild(option)
// 	})
// }

// function renderTimeline() {
// 	const selectedYear = yearFilter.value
// 	const selectedCategory = categoryFilter.value

// 	const filtered = timeline.filter((event) => {
// 		const matchYear =
// 			selectedYear === 'all' || event.year.toString() === selectedYear
// 		const matchCategory =
// 			selectedCategory === 'all' || event.category === selectedCategory
// 		return matchYear && matchCategory
// 	})

// 	// Group events by year
// 	const grouped = {}
// 	filtered.forEach((event) => {
// 		if (!grouped[event.year]) grouped[event.year] = []
// 		grouped[event.year].push(event)
// 	})

// 	// Clear existing timeline
// 	timelineList.innerHTML = ''

// 	// Render grouped timeline
// 	Object.entries(grouped)
// 		.sort((a, b) => b[0] - a[0]) // sort years descending
// 		.forEach(([year, events]) => {
// 			const yearCard = document.createElement('div')
// 			yearCard.className = 'timeline-year-card'

// 			const yearTitle = document.createElement('h3')
// 			yearTitle.textContent = year
// 			yearCard.appendChild(yearTitle)

// 			const eventsWrapper = document.createElement('div')
// 			eventsWrapper.className = 'timeline-events'

// 			events.forEach((event) => {
// 				const eventCard = document.createElement('div')
// 				eventCard.className = 'timeline-event'

// 				const title = event.url
// 					? `<a href="${event.url}" target="_blank" rel="noopener noreferrer">${event.title}</a>`
// 					: `<strong>${event.title}</strong>`

// 				eventCard.innerHTML = `${title}<br><small>${event.description}</small>`
// 				eventsWrapper.appendChild(eventCard)
// 			})

// 			yearCard.appendChild(eventsWrapper)
// 			timelineList.appendChild(yearCard)
// 		})
// }

// // Event listeners
// yearFilter.addEventListener('change', renderTimeline)
// categoryFilter.addEventListener('change', renderTimeline)

// // Initialize
// populateYearOptions()
// renderTimeline()

// const morningSelect = document.getElementById('morning')
// const afternoonSelect = document.getElementById('afternoon')
// const eveningSelect = document.getElementById('evening')
// const dayForm = document.getElementById('day-form')
// const daySummary = document.getElementById('day-summary')

// function populateDayOptions() {
// 	Object.entries(dayOptions).forEach(([time, options]) => {
// 		const select = document.getElementById(time)
// 		options.forEach((opt) => {
// 			const option = document.createElement('option')
// 			option.value = opt
// 			option.textContent = opt
// 			select.appendChild(option)
// 		})
// 	})
// }

// function handleDaySubmit(event) {
// 	event.preventDefault()
// 	const morning = morningSelect.value
// 	const afternoon = afternoonSelect.value
// 	const evening = eveningSelect.value
// 	daySummary.textContent = `Your day looks awesome! You’ll start by ${morning.toLowerCase()}, spend the afternoon ${afternoon.toLowerCase()}, and end the day with ${evening.toLowerCase()}.`
// }

// populateDayOptions()
// dayForm.addEventListener('submit', (e) => {
// 	e.preventDefault()

// 	const morning = document.getElementById('morning').value
// 	const afternoon = document.getElementById('afternoon').value
// 	const evening = document.getElementById('evening').value

// 	daySummary.textContent = `Your day looks awesome! You’ll start by ${morning.toLowerCase()}, spend the afternoon ${afternoon.toLowerCase()}, and end the day with ${evening.toLowerCase()}.`
// 	daySummary.classList.remove('hidden')
// })
// const themeToggle = document.getElementById('theme-toggle')
// const themeIcon = document.getElementById('theme-icon')

// // Function to update icon based on mode
// function updateThemeIcon() {
// 	const isDark = document.body.classList.contains('dark-mode')
// 	themeIcon.textContent = isDark ? '🌞' : '🌙'
// }

// // Toggle dark mode and update icon
// themeToggle.addEventListener('click', () => {
// 	document.body.classList.toggle('dark-mode')
// 	updateThemeIcon()
// })

// // Initialize icon on page load
// document.addEventListener('DOMContentLoaded', () => {
// 	updateThemeIcon()
// })

// const navToggle = document.querySelector('.nav-toggle')
// const navLinks = document.querySelector('.nav-links')

// navToggle.addEventListener('click', () => {
// 	navLinks.classList.toggle('show')
// })
