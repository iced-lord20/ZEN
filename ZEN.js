const moon = document.querySelector('.moon');

function toggleTheme() {
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

const menuToggle = document.querySelector('.menu-toggle');

if (menuToggle) {
	menuToggle.addEventListener('click', () => {
		const nav = menuToggle.closest('nav');
		const isOpen = nav.classList.toggle('nav-open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
		menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
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
		menuToggle?.closest('nav')?.classList.remove('nav-open');
	});
});


[...document.querySelectorAll('*')]
  .filter(el => el.scrollWidth > document.documentElement.clientWidth + 1)
  .forEach(el => console.log(el.scrollWidth, el));
  
