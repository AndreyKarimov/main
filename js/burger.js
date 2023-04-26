const BURGER_OPENED_CLASSNAME = 'burger-menu_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME_2 = 'body__fix';
const BURGER_CONTENT_CLASSNAME = 'burger-menu__content_open'

const bodyNode2 = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content')
const burgerContactsNode = document.querySelector('.js-burger-menu__contacts')

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContactsNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME_2);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
    burgerContentNode.classList.toggle(BURGER_CONTENT_CLASSNAME);
}
