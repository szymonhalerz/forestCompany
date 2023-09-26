const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const navDesktop = document.querySelector('.nav-desktop')
const footerYear = document.querySelector('.footer__year')

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

//------------------------------------------------------------------

// OSTATNIE ZMIANY

// const sections = document.querySelectorAll('section')
// const navLinks = navDesktop.querySelectorAll('a.nav__link')

// window.onscroll = () => {
// 	sections.forEach(sec => {
// 		let top = window.scrollY
// 		let offset = sec.offsetTop - 150
// 		let height = sec.offsetHeight
// 		let id = sec.getAttribute('id')

// 		if (top >= offset && top < offset + height) {
// 			navLinks.forEach(links => {
// 				links.classList.remove('active')
// 				document.querySelector(`.nav-desktop a.nav__link[href*="${id}"]`).classList.add('active')
// 			})
// 		}
// 	})
// }

//------------------------------------------------------------------

// const handleScrollSpy = () => {
// 	if (document.body.classList.contains('main-page')) {
// 		const sections = []

// 		scrollSpySections.forEach(section => {
// 			if (window.scrollY <= section.offsetTop + section.offsetHeight - 103) {
// 				sections.push(section)

// 				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

// 				menuItems.forEach(item => item.classList.remove('active'))

// 				activeSection.classList.add('active')
// 			}

// 			// if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
// 			//     const lastSection = document.querySelector('a:last-of-type')

// 			//     menuItems.forEach(item => item.classList.remove('active'))

// 			//     lastSection.classList.add('active')
// 			// }
// 		})
// 	}
// }

handleCurrentYear()
burgerBtn.addEventListener('click', handleNav)
// window.addEventListener('scroll', handleScrollSpy)
