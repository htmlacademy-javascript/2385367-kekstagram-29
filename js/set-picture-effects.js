import { getEffect } from './effects-properties.js';

const pictureLoadingForm = document.querySelector('.img-upload__form');
const sliderContainer = pictureLoadingForm.querySelector('.img-upload__effect-level');
const effectFieldSet = pictureLoadingForm.querySelector('.effects');
const picturePreview = pictureLoadingForm.querySelector('.img-upload__preview img');
const effectSetLevel = pictureLoadingForm.querySelector('.effect-level__value');
const effectSlider = pictureLoadingForm.querySelector('.effect-level__slider');

noUiSlider.create (effectSlider, {
  start: 100,
  step: 0,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 0
  }
});

const setEffect = (effect) => {
  sliderContainer.classList.remove('hidden');
  const effectProperties = getEffect();

  const {max, min, step, unit, style} = effectProperties[effect];
  effectSlider.noUiSlider.updateOptions({
    start: max,
    range: {min: min, max:max},
    step: step,
    format: {
      to: function (value) {
        return `${style}(${value}${unit})`;
      },
      from: function (value) {
        return Number.parseFloat(value);
      }}
  });
  picturePreview.style.filter = effectSlider.noUiSlider.get();
  effectSetLevel.value = effectSlider.noUiSlider.get(true);
};

const changeEffectLevel = () => {
  const level = effectSlider.noUiSlider.get(true);
  effectSetLevel.value = level;

  picturePreview.style.filter = effectSlider.noUiSlider.get();
};

effectSlider.noUiSlider.on('update', () => changeEffectLevel());

let currentEffect = 'none';

const resetEffect = () => {
  sliderContainer.classList.add('hidden');
  picturePreview.style.filter = 'none';
};

effectFieldSet.addEventListener('change', (evt) => {

  currentEffect = (evt.target).value;

  switch (currentEffect) {

    case 'none': resetEffect(); break;

    default: setEffect(currentEffect);

  }

});

export { resetEffect };
