import { timeline } from './data.js'

export function initTimeline() {
	const timelineList = document.getElementById('timeline-list')
	const yearFilter = document.getElementById('year-filter')
	const categoryFilter = document.getElementById('category-filter')

	function populateYearOptions() {
		const years = [...new Set(timeline.map((e) => e.year))].sort(
			(a, b) => b - a
		)
		years.forEach((year) => {
			const option = document.createElement('option')
			option.value = year
			option.textContent = year
			yearFilter.appendChild(option)
		})
	}

	function renderTimeline() {
		const selectedYear = yearFilter.value
		const selectedCategory = categoryFilter.value

		const filtered = timeline.filter((event) => {
			return (
				(selectedYear === 'all' || event.year.toString() === selectedYear) &&
				(selectedCategory === 'all' || event.category === selectedCategory)
			)
		})

		const grouped = {}
		filtered.forEach((event) => {
			grouped[event.year] = grouped[event.year] || []
			grouped[event.year].push(event)
		})

		timelineList.innerHTML = ''
		Object.entries(grouped)
			.sort((a, b) => b[0] - a[0])
			.forEach(([year, events]) => {
				const yearCard = document.createElement('div')
				yearCard.className = 'timeline-year-card'
				yearCard.innerHTML = `<h3>${year}</h3>`

				const wrapper = document.createElement('div')
				wrapper.className = 'timeline-events'

				events.forEach((event) => {
					const card = document.createElement('div')
					card.className = 'timeline-event'
					const title = event.url
						? `<a href="${event.url}" target="_blank">${event.title}</a>`
						: `<strong>${event.title}</strong>`
					card.innerHTML = `${title}<br><small>${event.description}</small>`
					wrapper.appendChild(card)
				})

				yearCard.appendChild(wrapper)
				timelineList.appendChild(yearCard)
			})
	}

	yearFilter.addEventListener('change', renderTimeline)
	categoryFilter.addEventListener('change', renderTimeline)

	populateYearOptions()
	renderTimeline()
}
