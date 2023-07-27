export const getArrayCharacter = (string) => string.toLowerCase().split(' ').filter(Boolean);

export const getNumber = (string) => parseInt(string.replace(/[^0-9]/g, ''), 10);

const TIME_BANNER_APPEAR = 5000;

export const showBanner = (message) => {
  const banner = document.createElement('div');
  banner.style.position = 'absolute';
  banner.style.zIndex = '100';
  banner.style.left = '0';
  banner.style.top = '0';
  banner.style.right = '0';
  banner.style.padding = '10px 3px';
  banner.style.fontSize = '20px';
  banner.style.textAlign = 'center';
  banner.style.backgroundColor = 'red';
  banner.textContent = message;
  document.body.append(banner);

  setTimeout(() => {
    banner.remove();
  }, TIME_BANNER_APPEAR);
};

export const debounce = (cb, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb.apply(this, rest), timeoutDelay);
  };
};
