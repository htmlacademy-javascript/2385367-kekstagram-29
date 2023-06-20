import {randomNames, commentMessages, imageDescriptions} from './mocks.js';
import {getRandomInteger, createIdGenerator, getRandomArrayElement} from './util.js';

const generateCommentId = createIdGenerator ();

const similarCommentCount = 25;

const createComments = () => ({
  id: generateCommentId (),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(commentMessages),
  name: getRandomArrayElement(randomNames),
});

const similarComments = Array.from({length: similarCommentCount}, createComments);
// eslint-disable-next-line no-console
console.log(similarComments);

const createCommentCards = () => {
  const commentsArray = Array.from({length: getRandomInteger(0, 30)}, createComments);
  return {
    id: getRandomInteger(1, 25),
    url: `photos/-${getRandomInteger(1, 25)}.jpg`,
    description: getRandomArrayElement(imageDescriptions),
    likes: getRandomInteger(15, 200),
    comments: commentsArray,
  };
};

const cardsArray = Array.from({length: similarCommentCount}, createCommentCards);
export {cardsArray};
