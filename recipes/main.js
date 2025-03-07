import recipes from './recipes.mjs'

function random(num) {
	return Math.floor(Math.random() * num)
}

function getRandomListEntry(list) {
	const listLength = list.length
	const randomNum = random(listLength)
	return list[randomNum]
}

function tagsTemplate(tags) {
	return `<ul>${tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>`
}

function ratingTemplate(rating) {
	let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`
	for (let i = 1; i <= 5; i++) {
		html +=
			i <= rating
				? `<span aria-hidden="true" class="icon-star">⭐</span>`
				: `<span aria-hidden="true" class="icon-star-empty">☆</span>`
	}
	html += `</span>`
	return html
}

function recipeTemplate(recipe) {
	return `<section class="recipe">
				<div class="recipe-image-col">
					<img
						src="${recipe.image}"
						alt="Plate of ${recipe.name}"
						class="recipe-image"
					/>
				</div>
				<div class="recipe-info">
					<div class="tags">
						${tagsTemplate(recipe.tags)}
					</div>
					<div class="recipe-title">
						<h2>${recipe.name}</h2>
						<div class="recipe-rating">
							${ratingTemplate(recipe.rating)}
						</div>
					</div>
					<p class="recipe-description">
						${recipe.description}
					</p>
				</div>
			</section>`
}

// const recipe = getRandomListEntry(recipes)
// console.log(recipeTemplate(recipe))

function renderRecipes(recipeList) {
	const outputElement = document.getElementById('recipe-container')
	const recipeHTML = recipeList.map(recipeTemplate).join('')
	outputElement.innerHTML = recipeHTML
}

function init() {
	const recipe = getRandomListEntry(recipes)
	renderRecipes([recipe])
}

function searchHandler(e) {
	e.preventDefault()

	const searchInput = document.getElementById('search-input')
	const query = searchInput.value.trim().toLowerCase()

	const filteredRecipes = filterRecipes(query)
	renderRecipes(filteredRecipes)
}

function filterRecipes(query) {
	const filtered = recipes.filter(
		(recipe) =>
			recipe.name.toLowerCase().includes(query) ||
			recipe.description.toLowerCase().includes(query) ||
			recipe.tags.find((tag) => tag.toLowerCase().includes(query)) ||
			recipe.recipeIngredient.find((ingredient) =>
				ingredient.toLowerCase().includes(query)
			)
	)

	const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name))

	return sorted
}

document.addEventListener('DOMContentLoaded', () => {
	init()
	const searchButton = document.getElementById('search-button')
	if (searchButton) {
		searchButton.addEventListener('click', searchHandler)
	}
})
