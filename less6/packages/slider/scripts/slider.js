document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let slider = document.querySelector('.slider');

//иконка загрузки
let loadIcon = document.createElement('fas', 'fa-sprinner', 'fa-spin');
loadIcon.classList.add("afterbegin", loadIcon);
slider.insertAdjacentElement("afterbegin", loadIcon);

//левая стрелка
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

//правая стрелка
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", rightArrow);
