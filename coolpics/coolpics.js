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
