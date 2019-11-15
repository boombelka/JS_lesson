const windowModal = document.querySelector('.package');
const closeBtnWindowsModal = document.querySelector('span');
const showBtnWindowModal = document.querySelector('button');

closeBtnWindowsModal.addEventListener('click', function () {
    windowModal.classList.add('hidden');
});

showBtnWindowModal.addEventListener('click', function () {
    windowModal.classList.remove('hidden');

});

