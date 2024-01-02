// burger menu

const navMenu = document.getElementById('nav-menu'),
    navToogle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Menu açılır
navToogle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})
// Menu bağlanır
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})
// AXTARIŞ İCONU
const search = document.getElementById('search'),
    searchBtn = document.getElementById('search-btn'),
    searchClose = document.getElementById('search-close')
// AXTARIŞ İCONU AÇILIR

searchBtn.addEventListener('click', () => {
    search.classList.add('show-search')
})
// AXTARIŞ İCONU BAĞLANIR

searchClose.addEventListener('click', () => {
    search.classList.remove('show-search')
})

// LOGİN
const login = document.getElementById('login'),
    loginBtn = document.getElementById('login-btn'),
    loginClose = document.getElementById('login-close')
// LOGİN BÖLMESİ AÇILIŞI
loginBtn.addEventListener('click', () => {
    login.classList.add('show-login')
})

// LOGİN BÖLMESİ BAĞLANIŞI

loginClose.addEventListener('click', () => {
    login.classList.remove('show-login')

})