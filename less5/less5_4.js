const buttons = document.querySelectorAll('buttons')
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event)
    });
});

function handleClick(clickButtonEvent) {
    const cardNode = clickButtonEvent.target.parentNode;
    const card = {
        package: cardNode,
        img: cardNode.querySelector('img'),
        product: cardNode.querySelector('.product'),
        button: cardNode.querySelector('button'),
    };
};
    const textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    }

function showMoreText(card) {

}


