
window.addEventListener('scroll',() => {
    document.querySelector('.nav_bar').classList.toggle('window-scroll', window.scrollY > 0 );
    document.querySelector('.btn2').classList.toggle('window-scroll' , window.scrollY > 0);
})

/* NAVBAR  */
const menu = document.querySelector('.nav_buttons');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
    openBtn.classList.toggle('active');
    closeBtn.classList.toggle('active');
})

/* Close Navbar */
closeBtn.addEventListener('click',() => {
    menu.classList.remove('active');
    openBtn.classList.remove('active');
    closeBtn.classList.remove('active');
})

/* Search icon */
const openSearch = document.querySelector('.search-icon');
const closeSearch = document.querySelector('.close-search');
const navBar2 = document.querySelector('.navbar2');
const navBar = document.querySelector('nav');

openSearch.addEventListener('click',() =>{
    navBar2.classList.toggle('search');
    closeSearch.classList.toggle('search');
    openSearch.classList.toggle('search');
    navBar.classList.toggle('search');
})

/* Close Search */
closeSearch.addEventListener('click',() => {
    navBar2.classList.remove('search');
    openSearch.classList.remove('search');
    closeSearch.classList.remove('search');
    navBar.classList.remove('search');
})