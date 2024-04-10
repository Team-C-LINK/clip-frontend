const PURPLE = {
  _00: '#580F9F',
  _01: '#790DE4',
  _02: '#BB92FF',
  _03: '#E1CEFF',
  _04: '#F7F2FF',
};

const TEXT = {
  _01: '#252525',
  _02: '#6C6C6C',
  _03: '#BFBFBF',
  _04: '#FFFFFF',
  _05: '#5D6474',
};

const ORANGE = {
  _01: '#0059FF',
  _02: '#337AFF',
};

const LINE = {
  _01: '#D9D9D9',
};

const STATUS = {
  _ALERT: '#FF0000',
  _ALERT2: '#FF3D00',
  _POSITIVE: '#07A320',
};

const BACKGROUND = {
  _01: '#F9FAFB',
  _02: '#FFFFFF',
  _DISABLE: '#F2F2F2',
  _DARK: '#1D2939',
};

export const PALETTE = {
  PURPLE,
  TEXT,
  ORANGE,
  LINE,
  STATUS,
  BACKGROUND,
};

export type ThemeType = typeof PALETTE;
