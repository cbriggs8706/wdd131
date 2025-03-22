import { dayOptions } from './data.js'

export function initDayBuilder() {
	const dayForm = document.getElementById('day-form')
	const daySummary = document.getElementById('day-summary')

	function populateDayOptions() {
		Object.entries(dayOptions).forEach(([time, options]) => {
			const select = document.getElementById(time)
			options.forEach((opt) => {
				const option = document.createElement('option')
				option.value = opt
				option.textContent = opt
				select.appendChild(option)
			})
		})
	}

	dayForm.addEventListener('submit', (e) => {
		e.preventDefault()
		const morning = document.getElementById('morning').value
		const afternoon = document.getElementById('afternoon').value
		const evening = document.getElementById('evening').value
		daySummary.textContent = `Your day looks awesome! You’ll start by ${morning.toLowerCase()}, spend the afternoon ${afternoon.toLowerCase()}, and end the day with ${evening.toLowerCase()}.`
		daySummary.classList.remove('hidden')
	})

	populateDayOptions()
}
