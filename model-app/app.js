
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
    modalOverlay.style.visibility = 'visible';
    modalOverlay.style.zIndex = '10';
});

closeBtn.addEventListener('click', () => {
    modalOverlay.style.visibility = 'hidden';
    modalOverlay.style.zIndex = '-10';
});

/* modalBtn.addEventListener('click', () => {
    modal.classList.add("open-modal);
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove("open-modal");
});*/
