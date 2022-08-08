type ThemeKeys =
  | 'primary'
  | 'info'
  | 'error'
  | 'background'
  | 'font'
  | 'secondary';

export type Theme = Record<ThemeKeys, string>;

const mainColors = {
  primary: '#7FEDC5',
  info: '#2F80ED',
  error: '#EB5757',
  secondary: '#9DA7B5',
};

const dark: Theme = {
  ...mainColors,
  background: '#000000',
  font: '#FFFFFF',
};

const light: Theme = {
  ...mainColors,
  background: '#FFFFFF',
  font: '#000000',
};

export default {
  dark,
  light,
};
