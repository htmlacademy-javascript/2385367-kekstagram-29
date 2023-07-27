import { getArrayCharacter } from './util.js';

const MAX_HASHTAG_COUNT = 5;
const MAX_COMMENT_CHARACTERS = 140;
const HASTAG_SPECIMEN = /^#[a-za-яё0-9]{1,19}$/i;

const pictureLoadingForm = document.querySelector('.img-upload__form');
const hashTagType = pictureLoadingForm.querySelector('.text__hashtags');
const commentType = pictureLoadingForm.querySelector('.text__description');
const publishButton = pictureLoadingForm.querySelector('.img-upload__submit');

const defaultConfig = {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper--success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error',
  errorTextTag: 'div'
};

const formValidator = new Pristine(pictureLoadingForm, defaultConfig);

pictureLoadingForm.addEventListener('input', () => publishButton.toggleAttribute('disabled', !formValidator.validate()));

const hashTagCountValidate = () => getArrayCharacter(hashTagType.value).length <= MAX_HASHTAG_COUNT;

const hashTagSpecimenValidate = () => getArrayCharacter(hashTagType.value).every((element) => HASTAG_SPECIMEN.test(element));

const hashTagRepeatingValidate = () => getArrayCharacter(hashTagType.value).every((element) => getArrayCharacter(hashTagType.value).indexOf(element) === getArrayCharacter(hashTagType.value).lastIndexOf(element));

const commentValidate = () => commentType.value.length <= MAX_COMMENT_CHARACTERS;

formValidator.addValidator(hashTagType, hashTagCountValidate, 'Хеш-тегов должно быть не более 5', 1, true);
formValidator.addValidator(hashTagType, hashTagSpecimenValidate, 'Bведенный хэш-тег написан с ошибкой', 1, true);
formValidator.addValidator(hashTagType, hashTagRepeatingValidate, 'Вы написали повторяющийся хэш-тег', 1, true);
formValidator.addValidator(commentType, commentValidate, 'Вы ввели слишком длинный комментарий!', 1, true);

export { formValidator };
