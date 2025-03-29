import { funFacts, timeline } from './data.js'

// Fun Fact Section
export function renderFunFact() {
	const factDisplay = document.getElementById('fact-display')
	const factButton = document.getElementById('new-fact')

	if (!factDisplay || !factButton) return // Guard clause to avoid errors

	function showRandomFact() {
		const index = Math.floor(Math.random() * funFacts.length)
		factDisplay.textContent = funFacts[index]
	}

	factButton.addEventListener('click', showRandomFact)
	showRandomFact()
}

// Timeline Section
export function renderTimeline() {
	const timelineList = document.getElementById('timeline-list')
	const yearFilter = document.getElementById('year-filter')
	const categoryFilter = document.getElementById('category-filter')

	if (!timelineList || !yearFilter || !categoryFilter) return // Guard clause

	function populateYearOptions() {
		const years = Array.from(new Set(timeline.map((event) => event.year))).sort(
			(a, b) => b - a
		)
		yearFilter.innerHTML = '<option value="all">All</option>'
		years.forEach((year) => {
			const option = document.createElement('option')
			option.value = year
			option.textContent = year
			yearFilter.appendChild(option)
		})
	}

	function displayTimeline() {
		const selectedYear = yearFilter.value
		const selectedCategory = categoryFilter.value

		const filtered = timeline.filter((event) => {
			const matchYear =
				selectedYear === 'all' || event.year.toString() === selectedYear
			const matchCategory =
				selectedCategory === 'all' || event.category === selectedCategory
			return matchYear && matchCategory
		})

		const grouped = {}
		filtered.forEach((event) => {
			if (!grouped[event.year]) grouped[event.year] = []
			grouped[event.year].push(event)
		})

		timelineList.innerHTML = ''

		Object.entries(grouped)
			.sort((a, b) => b[0] - a[0])
			.forEach(([year, events]) => {
				const yearCard = document.createElement('div')
				yearCard.className = 'timeline-year-card'

				const yearTitle = document.createElement('h3')
				yearTitle.textContent = year
				yearCard.appendChild(yearTitle)

				const eventsWrapper = document.createElement('div')
				eventsWrapper.className = 'timeline-events'

				events.forEach((event) => {
					const eventCard = document.createElement('div')
					eventCard.className = 'timeline-event'
					eventCard.innerHTML = event.url
						? `<a href="${event.url}" target="_blank">${event.title}</a><br><small>${event.description}</small>`
						: `<strong>${event.title}</strong><br><small>${event.description}</small>`
					eventsWrapper.appendChild(eventCard)
				})

				yearCard.appendChild(eventsWrapper)
				timelineList.appendChild(yearCard)
			})
	}

	yearFilter.addEventListener('change', displayTimeline)
	categoryFilter.addEventListener('change', displayTimeline)

	populateYearOptions()
	displayTimeline()
}

// Theme Toggle Section (safe for all pages)
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
}

document.addEventListener('DOMContentLoaded', updateThemeIcon)

// Nav Toggle (safe for all pages)
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links')

if (navToggle && navLinks) {
	navToggle.addEventListener('click', () => {
		navLinks.classList.toggle('show')
	})
}
