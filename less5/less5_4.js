const buttons = document.querySelectorAll('button')
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event)
    });
});

function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;
    const card = {
        package: cardNode,
        img: cardNode.querySelector('img'),
        product: cardNode.querySelector('.product'),
        button: cardNode.querySelector('button'),
    };

    const textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    };
    };
function hideMoreText(card) {
    card.img.style.display = 'block';
    card.package.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}


function showMoreText(card) {
    card.img.style.display = 'none'
    const text = 'Кролики — это не только ценный мех, но и три — четыре килограмма диетического, легкоусвояемого мяса.';
    card.product.insertAdjacentHTML('afterend',  `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}


