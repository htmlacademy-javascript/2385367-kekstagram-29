const successMessage = document.querySelector('#success')
  .content.querySelector('.success');
const errorMessage = document.querySelector('#error')
  .content.querySelector('.error');
const body = document.querySelector('body');

const hideMessage = () => {
  const messageDomElement = body.querySelectorAll('section');

  for (let i = 0; i < messageDomElement.length; i++) {
    const item = messageDomElement[i];
    if (item.classList.contains('success')) {
      item.remove();
    } else if (item.classList.contains('error')) {
      item.remove();
    }
  }
  body.removeEventListener('click', onBodyClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    hideMessage();
  }
}

function onBodyClick(evt) {
  if (
    evt.target.closest('.success__inner') ||
   evt.target.closest('.error__inner')
  ) {
    return;
  }
  hideMessage();
}

const exposeMessage = (messageElement, closeButtonClass) => {
  body.append(messageElement);
  document.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onDocumentKeydown);
  messageElement.querySelector(closeButtonClass).addEventListener('click', hideMessage);
};

const exposeSuccessMessage = () => {
  exposeMessage(successMessage, '.success__button');
};

const exposeErrorMessage = () => {
  exposeMessage(errorMessage, '.error__button');
};

export { exposeSuccessMessage, exposeErrorMessage };
