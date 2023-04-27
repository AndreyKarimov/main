const BURGER_OPENED_CLASSNAME = 'burger--active';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn--active';
const BODY_FIXED_CLASSNAME = 'body__fix';
const BURGER_CONTENT_CLASSNAME = 'burger__content--active'

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
    bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
    burgerContentNode.classList.toggle(BURGER_CONTENT_CLASSNAME);
}
