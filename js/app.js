burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navItems = document.querySelector('.nav-items')
navSearch = document.querySelector('.nav-search')

burger.addEventListener('click', () => {
    navItems.classList.toggle('v-class-resp')
    navSearch.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})