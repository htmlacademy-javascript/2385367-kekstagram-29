const pictureLoadingForm = document.querySelector('.img-upload__form');
const upLoadButton = pictureLoadingForm.querySelector('.img-upload__input');
const popupLoading = pictureLoadingForm.querySelector('.img-upload__overlay');

const isTextInFormFocused = (item) =>
  (item.tagName === 'INPUT' && item.getAttribute('type') === 'text') || item.tagName === 'TEXTAREA';

const onFormKeydown = (evt) => {
  if (evt.key === 'Escape' && !isTextInFormFocused(document.activeElement)) {
    document.querySelector('.img-upload__overlay:not(.hidden)').dispatchEvent(new Event('popup::hide'));
    closeForm(document.querySelector('.img-upload__overlay:not(.hidden)'));
  }
};

const onFormCancelButtonClick = (evt) => {
  if (evt.target.closest('.cancel')) {
    closeForm(evt.currentTarget);
  }
};

function openForm(form) {
  form.classList.remove('hidden');
  form.addEventListener('click', onFormCancelButtonClick);

  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormKeydown);
}

upLoadButton.addEventListener('change', () => {

  openForm(popupLoading);

});

function closeForm(form) {
  form.classList.add('hidden');
  form.removeEventListener('click', onFormCancelButtonClick);

  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormKeydown);
}

pictureLoadingForm.addEventListener('popup::hide', () => {
  pictureLoadingForm.reset();
}, true);
