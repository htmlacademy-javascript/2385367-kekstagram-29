const randomNames = [
  'Паша',
  'Денис',
  'Иван',
  'Александр',
  'Алина',
  'Алла',
  'Алиса'
];
const commentMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const imageDescriptions = [
  'Поиск основных предметов и лиц. Эти существительные следует выписать в первый столбик, отступив от каждого немного места.',
  'Фотография помогает запечатлеть самые яркие и счастливые моменты, которые хочется вспоминать снова и снова',
  'Подбор синонимов — важная часть работы. В описании предложения имеют сходную структуру, поэтому могут появиться повторы слов, а значит, есть риск допустить стилистические ошибки.',
  'Словесное изображение действий, которые совершают люди, запечатлённые на снимке. Необходимо обратить внимание на то, что делает человек, куда направлен его взгляд.',
  'Описание пейзажа. Следует рассказать о месте, где сделана фотография (в помещении или на свежем воздухе), определить время года, обратить внимание на природу, интерьер. В монологическом высказывании необходимо упомянуть цветовые эффекты, а также яркие детали, которые вызывают интерес зрителя.',
  'Оценка кадра. В заключении следует выразить своё отношение к фотографии, используя имена прилагательные, и эмоций, которые она вызывает.',
  'К структуре основной части не предъявляются строгие требования. Однако высказывание обязательно должно содержать все пункты, указанные в задании, последовательно изложенные и связанные между собой. Их наличие необходимо ещё раз проверить, закончив подготовку.'
];
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};
const generateCommentId = createIdGenerator ();
const similarCommentCount = 25;
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
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
// eslint-disable-next-line no-console
console.log(cardsArray);
