export const getData = () => {
  const RANDOM_NAMES = [
    'Паша',
    'Денис',
    'Иван',
    'Александр',
    'Алина',
    'Алла',
    'Алиса'
  ];
  const COMMENT_MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const IMAGE_DESCRIPTIONS = [
    'Поиск основных предметов и лиц. Эти существительные следует выписать в первый столбик, отступив от каждого немного места.',
    'Фотография помогает запечатлеть самые яркие и счастливые моменты, которые хочется вспоминать снова и снова',
    'Подбор синонимов — важная часть работы. В описании предложения имеют сходную структуру, поэтому могут появиться повторы слов, а значит, есть риск допустить стилистические ошибки.',
    'Словесное изображение действий, которые совершают люди, запечатлённые на снимке. Необходимо обратить внимание на то, что делает человек, куда направлен его взгляд.',
    'Описание пейзажа. Следует рассказать о месте, где сделана фотография (в помещении или на свежем воздухе), определить время года, обратить внимание на природу, интерьер. В монологическом высказывании необходимо упомянуть цветовые эффекты, а также яркие детали, которые вызывают интерес зрителя.',
    'Оценка кадра. В заключении следует выразить своё отношение к фотографии, используя имена прилагательные, и эмоций, которые она вызывает.',
    'К структуре основной части не предъявляются строгие требования. Однако высказывание обязательно должно содержать все пункты, указанные в задании, последовательно изложенные и связанные между собой. Их наличие необходимо ещё раз проверить, закончив подготовку.'
  ];
  return {RANDOM_NAMES, COMMENT_MESSAGES, IMAGE_DESCRIPTIONS};
};
