import { formValidator } from './input-validation.js';
import { resetEffect } from './set-picture-effects.js';
import { resetScale } from './picture-scale.js';

const pictureLoadingForm = document.querySelector('.img-upload__form');
const upLoadButton = pictureLoadingForm.querySelector('.img-upload__input');
const popupLoading = pictureLoadingForm.querySelector('.img-upload__overlay');
const publishButton = pictureLoadingForm.querySelector('.img-upload__submit');
const cancelButton = pictureLoadingForm.querySelector('.img-upload__cancel');

const open = () => {
  popupLoading.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormKeydown);
};

upLoadButton.addEventListener('change', open);

const close = () => {
  popupLoading.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormKeydown);
  formValidator.reset();
  resetScale();
  resetEffect();
  pictureLoadingForm.reset();
};

cancelButton.addEventListener('click', close);

const isTextInFormFocused = (item) => (item.tagName === 'INPUT' && item.getAttribute('type') === 'text') || item.tagName === 'TEXTAREA';

function onFormKeydown (evt) {
  if (evt.key === 'Escape' && !isTextInFormFocused(document.activeElement)) {
    document.querySelector('.img-upload__overlay:not(.hidden)').dispatchEvent(new Event('popup::hide'));
    close();
  }
}

const publishButtonText = {
  INACTIVE: 'Опубликовать',
  PUBLISHING: 'Oтправляет...',
};

const togglePublishButton = (isDisabled) => {
  publishButton.disabled = isDisabled;
  publishButton.textContent = isDisabled ? publishButtonText.PUBLISHING : publishButtonText.INACTIVE;
};

const uploadFormOnSubmit = (cb) => {
  pictureLoadingForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = formValidator.validate();

    if (isValid) {
      togglePublishButton(true);
      await cb(new FormData (pictureLoadingForm));
      togglePublishButton();
    }
  });
};

export { uploadFormOnSubmit, close };
