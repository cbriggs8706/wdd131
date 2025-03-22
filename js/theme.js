export function initThemeToggle() {
	const themeToggle = document.getElementById('theme-toggle')
	const themeIcon = document.getElementById('theme-icon')

	function updateThemeIcon() {
		const isDark = document.body.classList.contains('dark-mode')
		themeIcon.textContent = isDark ? '🌞' : '🌙'
	}

	themeToggle.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode')
		updateThemeIcon()
	})

	document.addEventListener('DOMContentLoaded', updateThemeIcon)
}
