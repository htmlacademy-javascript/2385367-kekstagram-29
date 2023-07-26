const PICTURES_COUNT = 10;
const filterOptions = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterBox = document.querySelector('.img-filters');
let currentFilter = filterOptions.DEFAULT;
let pictures = [];

const sortInRandomOrder = () => Math.random() - 0.5;

const sortByComments = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

const getSortedPictures = () => {
  switch(currentFilter) {
    case filterOptions.RANDOM:
      return [...pictures].sort(sortInRandomOrder).slice(0, PICTURES_COUNT);
    case filterOptions.DISCUSSED:
      return [...pictures].sort(sortByComments);
    default:
      return [...pictures];
  }
};

const setOnFilterClick = (cb) => {
  filterBox.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }
    const clickedButton = evt.target;
    if (clickedButton.id === currentFilter) {
      return;
    }
    filterBox.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    currentFilter = clickedButton.id;
    cb(getSortedPictures());
  });
};

const init = (loadedPictures, cb) => {
  filterBox.classList.remove('img-filters--inactive');
  pictures = [...loadedPictures];
  setOnFilterClick(cb);
};

export { init, getSortedPictures };
