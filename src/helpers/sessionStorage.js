const isSessionAvailable = typeof sessionStorage !== 'undefined';

const getSession = (key) => {
  if (isSessionAvailable) {
    return sessionStorage.getItem(key);
  }
};

const setSession = (key, value) => {
  if (isSessionAvailable) {
    return sessionStorage.setItem(key, value);
  }
};

export {getSession, setSession};
