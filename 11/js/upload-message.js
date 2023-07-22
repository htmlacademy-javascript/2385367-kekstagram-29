const successMessage = document.querySelector('#success')
  .content.querySelector('.success');
const errorMessage = document.querySelector('#error')
  .content.querySelector('.error');
const body = document.querySelector('body');

const concealMessage = () => {
  const messageDomElement = body.querySelector('.success') || body.querySelector('.error');
  messageDomElement.remove();
  body.removeEventListener('click', onBodyClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    concealMessage();
  }
}

function onBodyClick(evt) {
  if (
    evt.target.closest('.success__inner') ||
   evt.target.closest('.error__inner')
  ) {
    return;
  }
  concealMessage();
}

const exposeMessage = (messageElement, closeButtonClass) => {
  body.append(messageElement);
  document.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onDocumentKeydown);
  messageElement.querySelector(closeButtonClass).addEventListener('click', concealMessage);
};

const exposeSuccessMessage = () => {
  exposeMessage(successMessage, '.success__button');
};

const exposeErrorMessage = () => {
  exposeMessage(errorMessage, '.error__button');
};

export { exposeSuccessMessage, exposeErrorMessage };

