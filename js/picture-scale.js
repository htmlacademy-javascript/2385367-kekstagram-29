import { getNumber } from './util.js';

const INIT_SCALE = 100;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP_SCALE = 25;

const pictureLoadingForm = document.querySelector('.img-upload__form');
const picturePreview = pictureLoadingForm.querySelector('.img-upload__preview img');
const scaleInput = pictureLoadingForm.querySelector('.scale__control--value');
const scaleSmaller = pictureLoadingForm.querySelector('.scale__control--smaller');
const scaleBigger = pictureLoadingForm.querySelector('.scale__control--bigger');

let currentScale = getNumber(scaleInput.getAttribute('value'));

const onScaleBiggerClick = () => {
  if (currentScale !== MAX_SCALE) {
    currentScale += STEP_SCALE;
    scaleInput.setAttribute('value', `${currentScale}%`);
    picturePreview.style.transform = `scale(${currentScale / 100})`;
  }
};

const onScaleSmallerClick = () => {
  if (currentScale !== MIN_SCALE) {
    currentScale -= STEP_SCALE;
    scaleInput.setAttribute('value', `${currentScale}%`);
    picturePreview.style.transform = `scale(${currentScale / 100})`;
  }
};

const resetScale = () => {
  currentScale = INIT_SCALE;
  scaleInput.setAttribute('value', `${currentScale}%`);
  picturePreview.style.transform = `scale(${currentScale / 100})`;
};

scaleBigger.addEventListener('click', onScaleBiggerClick);
scaleSmaller.addEventListener('click', onScaleSmallerClick);

export { resetScale };
