import { cardsArray } from './data.js';

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content;

const containerFragment = document.createDocumentFragment();

const randomPictures = cardsArray();
randomPictures.forEach(({url, description, likes, comments}) => {
  const randomPicture = pictureTemplate.cloneNode(true);
  randomPicture.querySelector('.picture__img').src = url;
  randomPicture.querySelector('.picture__img').alt = description;
  randomPicture.querySelector('.picture__likes').textContent = likes;
  randomPicture.querySelector('.picture__comments').textContent = comments.length;
  containerFragment.appendChild(randomPicture);
});

picturesContainer.appendChild(containerFragment);
// eslint-disable-next-line no-console
console.log(picturesContainer);
