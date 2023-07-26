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

commentListItems.innerHTML = '';
const SLICE_OF_COMMENTS = 5;
let commentsAppear = 0;
let comments = [];

const renderComments = () => {
  commentsAppear += SLICE_OF_COMMENTS;

  if (commentsAppear >= comments.length) {
    commentsLoaderButton.classList.add('hidden');
    commentsAppear = comments.length;
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }
  commentListItems.innerHTML = '';

  const fragmentList = document.createDocumentFragment();
  for (let i = commentListItems.childElementCount; i < commentsAppear; i++) {
    const comment = createComment(comments[i]);
    fragmentList.append(comment);
  }
  commentListItems.append(fragmentList);
  commentCountItem.innerHTML = `<span class="comments-slice">${ commentsAppear }</span> из <span class="comments-count">${ comments.length }</span> комментариев</div>`;
};

commentsLoaderButton.addEventListener('click', renderComments);

const renderFullSizePictureDetails = ({ url, description, likes }) => {
  fullSizePicture.querySelector('.big-picture__img img').src = url;
  fullSizePicture.querySelector('.big-picture__img img').alt = description;
  fullSizePicture.querySelector('.social__caption').textContent = description;
  fullSizePicture.querySelector('.likes-count').textContent = likes;
};

const openFullSizePicture = (data) => {
  fullSizePicture.classList.remove('hidden');
  bodyTag.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  renderFullSizePictureDetails(data);
  comments = data.comments;
  if (comments.length > 0){
    renderComments();
  } else {
    commentCountItem.innerHTML = `${ commentsAppear } комментариев</div>`;
    commentListItems.innerHTML = '';
    commentsLoaderButton.classList.add('hidden');
  }
};

const closeFullSizePicture = () => {
  fullSizePicture.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsAppear = 0;
};

function onDocumentKeydown(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    closeFullSizePicture();
  }
}
pictureCancelButton.addEventListener('click', closeFullSizePicture);

export { openFullSizePicture };
