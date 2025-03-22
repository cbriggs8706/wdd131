import { hobbies } from './data.js'

export function initHobbies() {
	const hobbyList = document.getElementById('hobby-list')
	const moodFilter = document.getElementById('mood-filter')

	function displayHobbies(filtered) {
		hobbyList.innerHTML = ''
		if (filtered.length === 0) {
			hobbyList.innerHTML = '<li>No hobbies found for that mood.</li>'
			return
		}
		filtered.forEach((hobby) => {
			const li = document.createElement('li')
			li.textContent = hobby.name
			hobbyList.appendChild(li)
		})
	}

	function filterHobbies() {
		const mood = moodFilter.value
		const filtered =
			mood === 'all' ? hobbies : hobbies.filter((h) => h.mood === mood)
		displayHobbies(filtered)
	}

	moodFilter.addEventListener('change', filterHobbies)
	filterHobbies()
}
