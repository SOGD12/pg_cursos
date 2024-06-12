(function () {
    const open = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const close = document.querySelector('.nav__close');

    open.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });

})();