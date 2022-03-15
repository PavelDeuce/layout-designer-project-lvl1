const modalCloseButtons = document.querySelectorAll('.modal-close');
const modalOpenButtons = document.querySelectorAll('.modal-open');

const toggleModal = (modalId) => {
  const modal = document.getElementById(modalId);
  modal.classList.toggle('open');
};

[...modalCloseButtons, ...modalOpenButtons].forEach((closeButton) => {
  const modalId = closeButton.dataset.modalId;
  closeButton.addEventListener('click', () => toggleModal(modalId));
});

export default toggleModal;
