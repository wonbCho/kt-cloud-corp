import Cookies from 'js-cookie';

const setCookie = (key: string, value: string, expires: number) => {
  Cookies.set(key, value, { expires });
};

const getCookie = (key: string) => {
  return Cookies.get(key) || '';
};

const deleteCookie = (key: string) => {
  Cookies.set(key, '', { expires: 0 });
};

export default {
  setCookie,
  getCookie,
  deleteCookie,
}