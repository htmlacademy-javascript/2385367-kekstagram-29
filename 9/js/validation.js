import { getCharacters } from './util.js';

const pictureLoadingForm = document.querySelector('.img-upload__form');
const hashTagType = pictureLoadingForm.querySelector('.text__hashtags');
const commentType = pictureLoadingForm.querySelector('.text__description');
const publishButton = pictureLoadingForm.querySelector('.img-upload__submit');

const hashTagSpecimen = /^#[a-za-яё0-9]{1,19}$/i;

const defaultConfig = {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper--success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error',
  errorTextTag: 'div'
};

const formValidator = new Pristine(pictureLoadingForm, defaultConfig);

pictureLoadingForm.addEventListener('input', () => {

  publishButton.toggleAttribute('disabled', !formValidator.validate());

});


const hashTagCountValidate = () => getCharacters(hashTagType.value).length <= 5;

const hashTagSpecimenValidate = () => getCharacters(hashTagType.value).every((element) => hashTagSpecimen.test(element));

const hashTagRepeatingValidate = () => getCharacters(hashTagType.value).every((element) => getCharacters(hashTagType.value).indexOf(element) === getCharacters(hashTagType.value).lastIndexOf(element));

const commentValidate = () => commentType.value.length <= 140;

formValidator.addValidator(hashTagType, hashTagCountValidate, 'Хеш-тегов должно быть не более 5', 1, true);
formValidator.addValidator(hashTagType, hashTagSpecimenValidate, 'Bведенный хэш-тег написан с ошибкой', 1, true);
formValidator.addValidator(hashTagType, hashTagRepeatingValidate, 'Вы написали повторяющийся хэш-тег', 1, true);
formValidator.addValidator(commentType, commentValidate, 'Вы ввели слишком длинный комментарий!', 1, true);

pictureLoadingForm.addEventListener('reset', () => {

  formValidator.reset();

});
