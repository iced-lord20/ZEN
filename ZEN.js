const moon = document.querySelector('.moon');

function toggleTheme() {
	if (!moon) return;
	const lightMode = document.body.classList.toggle('light-mode');
	moon.setAttribute('aria-pressed', String(lightMode));
	moon.setAttribute('aria-label', lightMode ? 'Switch to dark mode' : 'Switch to light mode');
}

if (moon) {
	moon.addEventListener('click', toggleTheme);

	moon.addEventListener('keydown', (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleTheme();
		}
	});
}

const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');

function setMenu(open) {
	if (!nav || !menuToggle) return;
	nav.classList.toggle('nav-open', open);
	menuToggle.setAttribute('aria-expanded', String(open));
	menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

if (nav && menuToggle) {
	menuToggle.addEventListener('click', (event) => {
		event.stopPropagation();
		setMenu(!nav.classList.contains('nav-open'));
	});

	// Click outside the nav closes the menu
	document.addEventListener('click', (event) => {
		if (!nav.classList.contains('nav-open')) return;
		if (nav.contains(event.target)) return;
		setMenu(false);
	});

	// Escape closes the menu
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && nav.classList.contains('nav-open')) {
			setMenu(false);
			menuToggle.focus();
		}
	});
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.navs a').forEach((link) => {
	const linkPage = link.getAttribute('href').split('/').pop();

	if (linkPage === currentPage) {
		link.classList.add('is-current');
		link.setAttribute('aria-current', 'page');
	}

	link.addEventListener('click', () => {
		setMenu(false);
	});
});