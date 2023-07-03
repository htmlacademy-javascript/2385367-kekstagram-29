import { getRandomInteger, createRandomIdFromRangeGenerator, createIdGenerator, getRandomArrayElement } from './util.js';
import { getData } from './mocks.js';

const COPY_NAMES = getData().RANDOM_NAMES;

const COPY_MESSAGES = getData().COMMENT_MESSAGES;

const COPY_DESCRIPTIONS = getData().IMAGE_DESCRIPTIONS;

const OBJECT_COUNT = 25;

const generateCommentId = createIdGenerator ();

const generateCardId = createRandomIdFromRangeGenerator(1, 25);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COPY_MESSAGES),
  name: getRandomArrayElement(COPY_NAMES),
});

const similarComments = () => Array.from({length: OBJECT_COUNT}, createComment);
similarComments();

const createCommentCard = () => {
  const commentsArray = Array.from({length: getRandomInteger(0, 30)}, createComment);
  return {
    id: generateCardId(),
    url: `photos/${generateCardId()}.jpg`,
    description: getRandomArrayElement(COPY_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: commentsArray,
  };
};

const cardsArray = () => Array.from({length: OBJECT_COUNT}, createCommentCard);
cardsArray();
console.log(cardsArray());
export { cardsArray };
