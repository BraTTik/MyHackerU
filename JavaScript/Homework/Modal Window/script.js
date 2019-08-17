let modalElem = document.querySelector('.modal');
let modalWindow = document.querySelector('.modal_window')
let showModalButton = document.querySelector('.modal_button');
let closeModalButton = document.querySelector('.close_button');


let height = modalWindow.offsetHeight;
let positionY = -500 - height;
modalWindow.style.top = positionY + 'px';

let blockPosition = 0 + window.pageYOffset;

function showModal() {
    positionY = 100;
    modalWindow.style.top = positionY + pageYOffset + 'px';
}

function closeModal() {
    positionY = -500 - positionY - height;
    modalWindow.style.top = positionY + 'px';
}

function blockContent() {
    modalElem.style.top = blockPosition + window.pageYOffset + 'px';
    modalElem.style.display = 'block';
}

function unblockContent() {
    modalElem.style.display = 'none';
}

showModalButton.addEventListener('click', function() {
    showModal();
    blockContent();
});
closeModalButton.addEventListener('click', function() {
    closeModal();
    unblockContent();
});

window.addEventListener('scroll', function() {
    modalElem.style.top = blockPosition + window.pageYOffset + 'px';
    modalWindow.style.top = positionY + pageYOffset + 'px';
});