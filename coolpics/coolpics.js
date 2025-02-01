const menuButton = document.querySelector('.menu')
const navLinks = document.querySelectorAll('nav a')

menuButton.addEventListener('click', () => {
	navLinks.forEach((link) => {
		link.classList.toggle('hide')
	})
})

const mediaQuery = window.matchMedia('(min-width: 700px)')

function handleMediaQueryChange() {
	if (mediaQuery.matches) {
		navLinks.forEach((link) => {
			link.classList.remove('hide')
		})
		menuButton.style.display = 'none'
	} else {
		menuButton.style.display = 'block'
	}
}

mediaQuery.addEventListener('change', handleMediaQueryChange)
handleMediaQueryChange()

function handleResize() {
	if (window.innerWidth > 1000) {
		navLinks.forEach((link) => {
			link.classList.remove('hide')
		})
		menuButton.style.display = 'none'
	} else {
		navLinks.forEach((link) => {
			link.classList.add('hide')
		})
		menuButton.style.display = 'block'
	}
}

window.addEventListener('resize', handleResize)

handleResize()

function viewHandler(event) {
	if (event.target.tagName === 'IMG') {
		const existingViewer = document.getElementById('imageViewer')
		if (existingViewer) {
			existingViewer.remove()
		}

		const clickedElement = event.target

		const srcValue = clickedElement.src.split('-')
		const fullImageName = srcValue[0] + '-full.jpeg'

		const viewerTemplate = `
        <div id="imageViewer" class="viewer">
            <img src="${fullImageName}" alt="Full Image">
            <button id="closeViewer" class="close-viewer">X</button>
        </div>
    `

		document.body.insertAdjacentHTML('afterbegin', viewerTemplate)

		const closeButton = document.getElementById('closeViewer')
		closeButton.addEventListener('click', closeViewer)
	}
}

function closeViewer() {
	const viewer = document.getElementById('imageViewer')
	if (viewer) {
		viewer.remove()
	}
}

const gallery = document.querySelector('.gallery')
gallery.addEventListener('click', viewHandler)
