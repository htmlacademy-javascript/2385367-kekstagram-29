const SERVER_URL = 'https://29.javascript.pages.academy/kekstagram';

const Path = {
  PROCURE_DATA: '/data',
  TRANSMIT_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorMessage = {
  PROCURE_DATA: 'Данные не скачались. Вы можете попробовать перезагрузить страницу.',
  TRANSMIT_DATA: 'Форма не отправлена. Пожалуйста, попробуйте еще раз.',
};

const load = async (path, errorMessage, method = Method.GET, body = null) => {
  try {
    const response = await fetch(`${SERVER_URL}${path}`, {method, body});
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch {
    throw new Error(errorMessage);
  }
};

const procureData = () => load(Path.PROCURE_DATA, ErrorMessage.PROCURE_DATA);

const transmitData = (body) => load(Path.TRANSMIT_DATA, ErrorMessage.TRANSMIT_DATA, Method.POST, body);

export { procureData, transmitData };
