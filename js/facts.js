import { funFacts } from './data.js'

export function initFacts() {
	const factDisplay = document.getElementById('fact-display')
	const factButton = document.getElementById('new-fact')

	function showRandomFact() {
		const index = Math.floor(Math.random() * funFacts.length)
		factDisplay.textContent = funFacts[index]
	}

	factButton.addEventListener('click', showRandomFact)
	showRandomFact()
}
