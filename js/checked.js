(() => {
  const refs = {
    checkboxChecked: document.querySelector('[data-checked]'),
    checkbox: document.querySelector('[data-check]'),
  };

  refs.checkbox.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.checkboxChecked.classList.toggle('is-checked');
  }
})();
