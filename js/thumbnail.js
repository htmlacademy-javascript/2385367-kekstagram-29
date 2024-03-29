const thumbnailTemplate = document.querySelector('#picture').
  content.querySelector('.picture');

const createRandomThumbnail = ({ url, description, likes, comments, id }) => {
  const randomThumbnail = thumbnailTemplate.cloneNode(true);

  randomThumbnail.querySelector('.picture__img').src = url;
  randomThumbnail.querySelector('.picture__img').alt = description;
  randomThumbnail.querySelector('.picture__likes').textContent = likes;
  randomThumbnail.querySelector('.picture__comments').textContent = comments.length;
  randomThumbnail.dataset.thumbnailId = id;
  return randomThumbnail;
};

const renderThumbnails = (elements, container) => {
  container.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();
  elements.forEach((element) => fragment.append(createRandomThumbnail(element)));
  container.append(fragment);
};

export { renderThumbnails };
