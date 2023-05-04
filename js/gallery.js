const ACTIVE_SLIDE_CLASSNAME = 'project__item_open';

const slidesNodes = Array.from(document.querySelectorAll('.project__item'));
console.log(slidesNodes);
const prevButtonNode = document.querySelector('.project__prev-btn');
const nextButtonNode = document.querySelector('.project__next-btn');
let activeId;

init();

function init() {
    activeId = 0;
    
    prevButtonNode.addEventListener('click', () => {
        setActiveSlideById(getPrevId());
    });
    
    nextButtonNode.addEventListener('click', () => {
        setActiveSlideById(getNextId());
    });
}

function setActiveSlideById(id) {
    const currentId = activeId;
    activeId = id;

    slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME)
    slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME)
}

function getPrevId() {
    return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
    return activeId === (slidesNodes.length - 1) ? 0: activeId + 1;
}
