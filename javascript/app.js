const icon = document.querySelector('.header__nav__icon');
const navLinks = document.querySelector('.header__nav__ul');
const links = document.querySelectorAll('.header__nav__ul__li');

icon.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});

