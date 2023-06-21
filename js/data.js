import {getRandomInteger, createIdGenerator, getRandomArrayElement} from './util.js';
import {getName, getComment, getDescription} from './mocks.js';

const randomName = getName().randomNames;

const commentMessage = getComment().commentMessages;

const imageDescription = getDescription().imageDescriptions;

const objectCount = 25;

const generateCommentId = createIdGenerator ();

const createComment = () => ({
  id: generateCommentId (),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(commentMessage),
  name: getRandomArrayElement(randomName),
});

const similarComments = Array.from({length: objectCount}, createComment);
// eslint-disable-next-line no-console
console.log(similarComments);

const createCommentCard = () => {
  const commentsArray = Array.from({length: getRandomInteger(0, 30)}, createComment);
  return {
    id: getRandomInteger(1, 25),
    url: `photos/-${getRandomInteger(1, 25)}.jpg`,
    description: getRandomArrayElement(imageDescription),
    likes: getRandomInteger(15, 200),
    comments: commentsArray,
  };
};

const cardsArray = Array.from({length: objectCount}, createCommentCard);
export {cardsArray};
