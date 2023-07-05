const fullSizePicture = document.querySelector('.big-picture');
const commentTemplate = fullSizePicture.querySelector('.social__comment');
const commentListItems = fullSizePicture.querySelector('.social__comments');
const commentCountItem = fullSizePicture.querySelector('.social__comment-count');
const commentsLoaderButton = fullSizePicture.querySelector('.comments-loader');
const pictureCancelButton = fullSizePicture.querySelector('.big-picture__cancel');
const bodyTag = document.querySelector('body');

const createComment = ({ avatar, name, message }) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (elements) => {
  const fragmentList = document.createDocumentFragment();
  elements.forEach((element) => fragmentList.append(createComment(element)));
  commentListItems.append(fragmentList);
};

const renderFullSizePictureDetails = ({ url, description, likes, comments }) => {
  fullSizePicture.querySelector('.big-picture__img img').src = url;
  fullSizePicture.querySelector('.big-picture__img img').alt = description;
  fullSizePicture.querySelector('.social__caption').textContent = description;
  fullSizePicture.querySelector('.likes-count').textContent = likes;
  fullSizePicture.querySelector('.comments-count').textContent = comments.length;
};

const openFullSizePicture = (data) => {
  fullSizePicture.classList.remove('hidden');
  bodyTag.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  commentCountItem.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');
  commentListItems.innerHTML = '';
  renderFullSizePictureDetails(data);
  renderComments(data.comments);
};

const closeFullSizePicture = () => {
  fullSizePicture.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentListItems.innerHTML = '';
};

function onDocumentKeydown(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    closeFullSizePicture();
  }
}
pictureCancelButton.addEventListener('click', closeFullSizePicture);

export { openFullSizePicture };
