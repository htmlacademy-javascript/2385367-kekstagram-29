const thumbnailTemplate = document.querySelector('#picture').
  content.querySelector('.picture');

const thumbnailsContainer = document.querySelector('.pictures');

const createRandomThumbnail = ({ url, description, likes, comments }) => {
  const randomThumbnail = thumbnailTemplate.cloneNode(true);

  randomThumbnail.querySelector('.picture__img').src = url;
  randomThumbnail.querySelector('.picture__img').alt = description;
  randomThumbnail.querySelector('.picture__likes').textContent = likes;
  randomThumbnail.querySelector('.picture__comments').textContent = comments.length;

  return randomThumbnail;
};

const renderThumbnails = (pictures) => {
  const containerFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createRandomThumbnail(picture);
    containerFragment.append(thumbnail);
  });

  thumbnailsContainer.append(containerFragment);
};

export { renderThumbnails };
