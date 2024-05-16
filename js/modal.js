// (() => {
//     const refs = {
//         openModalBtn: document.querySelector("[data-modal-open]"),
//         closeModalBtn: document.querySelector("[data-modal-close]"),
//         modal: document.querySelector("[data-modal]"),
//     };

//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);

//     function toggleModal() {
//         refs.modal.classList.toggle("is-hidden");
//     }
// })();

const xButton = document.querySelector('.x-button');
const modal = document.querySelector('.modal');
xButton.addEventListener('click', () => {
    modal.classList.add('is-closed');
});
window.addEventListener('click', (event) => {
    if (event.target === modal) {
  modal.classList.add('is-closed');
    }
});