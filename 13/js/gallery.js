import { renderThumbnails } from './thumbnail.js';
import { openFullSizePicture } from './big-picture.js';

const container = document.querySelector('.pictures');
let pictures = [];

const onContainerClick = (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if(!thumbnail) {
    return;
  }
  evt.preventDefault();
  const picture = pictures.find(
    (item) => item.id === +thumbnail.dataset.thumbnailId
  );
  openFullSizePicture(picture);
};


const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderThumbnails(pictures, container);
  container.addEventListener('click', onContainerClick);
};

export { renderGallery };