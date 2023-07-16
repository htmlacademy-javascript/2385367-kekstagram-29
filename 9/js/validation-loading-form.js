import { formValidator } from './input-validation.js';

const pictureLoadingForm = document.querySelector('.img-upload__form');
const upLoadButton = pictureLoadingForm.querySelector('.img-upload__input');
const popupLoading = pictureLoadingForm.querySelector('.img-upload__overlay');

const open = (form) => {
  form.classList.remove('hidden');
  form.addEventListener('click', onFormCancelButtonClick);

  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormKeydown);
};

upLoadButton.addEventListener('change', () => open(popupLoading));

const close = (form) => {
  form.classList.add('hidden');
  form.removeEventListener('click', onFormCancelButtonClick);

  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormKeydown);
};

function onFormCancelButtonClick (evt) {
  if (evt.target.closest('.cancel')) {
    close(evt.currentTarget);
  }
}

const isTextInFormFocused = (item) => (item.tagName === 'INPUT' && item.getAttribute('type') === 'text') || item.tagName === 'TEXTAREA';

function onFormKeydown (evt) {
  if (evt.key === 'Escape' && !isTextInFormFocused(document.activeElement)) {
    document.querySelector('.img-upload__overlay:not(.hidden)').dispatchEvent(new Event('popup::hide'));
    close(document.querySelector('.img-upload__overlay:not(.hidden)'));
  }
}

pictureLoadingForm.addEventListener('popup::hide', () => {
  pictureLoadingForm.reset();
}, true);

pictureLoadingForm.addEventListener('reset', () => formValidator.reset());
