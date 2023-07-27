import { formValidator } from './input-validation.js';
import { resetEffect } from './set-picture-effects.js';
import { resetScale } from './picture-scale.js';

const FYLE_TYPES = ['jpg', 'jpeg', 'png'];

const PublishButtonText = {
  INACTIVE: 'Опубликовать',
  PUBLISHING: 'Oтправляет...',
};

const pictureLoadingForm = document.querySelector('.img-upload__form');
const upLoadButton = pictureLoadingForm.querySelector('.img-upload__input');
const popupLoading = pictureLoadingForm.querySelector('.img-upload__overlay');
const publishButton = pictureLoadingForm.querySelector('.img-upload__submit');
const cancelButton = pictureLoadingForm.querySelector('.img-upload__cancel');
const upLoadPicturePreview = pictureLoadingForm.querySelector('.img-upload__preview img');
const pictureEffectsPreview = pictureLoadingForm.querySelectorAll('.effects__preview');

const open = () => {
  popupLoading.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormKeydown);
};

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FYLE_TYPES.some((it) => fileName.endsWith(it));
};

const onFileInputChange = () => {
  const file = upLoadButton.files[0];
  if (file && isValidType(file)) {
    upLoadPicturePreview.src = URL.createObjectURL(file);
    pictureEffectsPreview.forEach((preview) => {
      preview.style.backgroundImage = `url('${upLoadPicturePreview.src}')`;
    });
  }
  open();
};

upLoadButton.addEventListener('change', onFileInputChange);

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

const isErrorMessageAppear = () => Boolean(document.querySelector('.error'));

function onFormKeydown (evt) {
  if (evt.key === 'Escape' && !isTextInFormFocused(document.activeElement) && !isErrorMessageAppear()) {
    evt.preventDefault();
    close();
  }
}

const togglePublishButton = (isDisabled) => {
  publishButton.disabled = isDisabled;
  publishButton.textContent = isDisabled ? PublishButtonText.PUBLISHING : PublishButtonText.INACTIVE;
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
