const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')

const handleNav = () => {
    navMobile.classList.toggle('nav-mobile--active')
}

burgerBtn.addEventListener('click', handleNav)