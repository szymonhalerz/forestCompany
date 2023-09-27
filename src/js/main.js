const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const navDesktop = document.querySelector('.nav-desktop')
const footerYear = document.querySelector('.footer__year')
const menuItems = navDesktop.querySelectorAll('a.nav__link')
const scrollSpySections = document.querySelectorAll('.section')


const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleNav = () => {
	document.body.classList.toggle('sticky-body')
	navMobile.classList.toggle('nav-mobile--active')
	burgerBtn.classList.toggle('is-active')
}

navMobile.querySelectorAll('a.nav__link').forEach(el =>
	el.addEventListener('click', () => {
		navMobile.classList.remove('nav-mobile--active')
		burgerBtn.classList.remove('is-active')
		document.body.classList.remove('sticky-body')
	})
)

const handleScrollSpy = () => {
	const sections = []

	scrollSpySections.forEach(section => {
		if(window.scrollY <= section.offsetTop + section.offsetHeight) {
			sections.push(section)

			const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

			console.log(activeSection);

			menuItems.forEach(item => item.classList.remove('active'))

			activeSection.classList.add('active')
		}
	})
}

handleCurrentYear()
burgerBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleScrollSpy)