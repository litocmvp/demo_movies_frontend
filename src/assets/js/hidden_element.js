function hiddenElement(idButton, idTarjet) {
    const button = document.getElementById(idButton);
    const tag = document.getElementById(idTarjet);

    if (tag.classList.contains('d-none')) {
        button.classList.remove('bi-caret-down-square');
        button.classList.add('bi-caret-up-square');
        tag.classList.remove('animate__fadeOutUp');
        tag.classList.remove('d-none');
        tag.classList.add('animate__fadeInDown');
        if (button.hasAttribute('data-bs-content')) {
            button.setAttribute('data-bs-content', 'Minimizar Sección');
        }
    } else {
        button.classList.remove('bi-caret-up-square');
        button.classList.add('bi-caret-down-square');
        tag.classList.remove('animate__fadeInDown');
        tag.classList.add('animate__fadeOutUp');
        window.setTimeout(() => { tag.classList.add('d-none') }, 750);
        if (button.hasAttribute('data-bs-content')) {
            button.setAttribute('data-bs-content', 'Maximizar Sección');
        }
    }
  }

export default hiddenElement;