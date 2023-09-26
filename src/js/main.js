const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleNav = () => {
	document.body.classList.toggle('sticky-body')
	navMobile.classList.toggle('nav-mobile--active')

	if (document.body.classList.contains('sticky-body')) {
		burgerBtn.classList.toggle('is-active')
	} else {
		burgerBtn.classList.remove('is-active')
	}
}

navMobile.querySelectorAll('a.nav__link').forEach(el =>
	el.addEventListener('click', () => {
		navMobile.classList.remove('nav-mobile--active')
	})
)

handleCurrentYear()
burgerBtn.addEventListener('click', handleNav)
