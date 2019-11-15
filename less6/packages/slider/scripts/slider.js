document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let slider = document.querySelector('.slider');

//иконка загрузки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);
// Создаем иконку загрузки
//let loadIcon = document.createElement('i');
//loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
//slider.insertAdjacentElement("afterbegin", loadIcon);


//левая стрелка
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

//правая стрелка
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

//ожидание загрузки страницы
//window.addEventListener('load', function() {
//    leftArrow.addEventListener('click', function () {
//       images.setNextLeftImage();
//    });
window.addEventListener('load', function () {
    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });
    rightArrow.addEventListener('click', function () {
       images.setNextRightImage();
    });
    //инициализация слайдера
    images.init();
    //скрытие иконки
    hideLoadIcon(loadIcon);
    });

//функция для скрытия иконки загрузки
function hideLoadIcon(loadIcon) {
    loadIcon.style.display = "none";
}

let images = {
    currentIdx: 0,

    slides: [],

    init() {
        this.slides = document.querySelectorAll('slider-component');
        this.showImageWithCurrentIdx();

    },
    //открытие текущего слайда
    //showImageWithCurrentIdx() {
    //this.slides[this.currentIdx].classList.remove('hidden-slide')
      //  const currentSlide = this.slides[this.currentIdx];
        //currentSlide.classList.remove('hidden-slide');
        //currentSlide.classList.remove('hidden-slide');
        showImageWithCurrentIdx() {
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.remove('hidden-slide');
    },

//},
    //перебор слайдов для выставления индекска hidden-slide
    hideVisbleImages() {
        this.slides.forEach(function (slide) {
            //slide.classList.contains('hidden-slide')
            slide.classList.add('hidden-slide');
        });
    },


  //переключение на изображение влево hideVisbleImages или вправо hideVisbleImages
    setNextLeftImage() {
        this.hideVisbleImages();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
            } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },
    setNextRightImage() {
        this.hideVisbleImages();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
            } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },

};