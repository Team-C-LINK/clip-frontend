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

const Header = {
  H1: `font-size : 6.4rem; line-height : 7.6rem; font-weight : 600; font-style: normal;`,
  H2: `font-size : 3.6rem; line-height : 4.4rem; font-weight : 600; font-style: normal;`,
  H3: `font-size : 2.8rem; line-height : 2.8rem; font-weight : 600; font-style: normal;`,
  H4: `font-size : 2.0rem; line-height : 2.0rem; font-weight : 600; font-style: normal;`,
};

const Regular = {
  B1: `font-size : 1.8rem; line-height : 2.8rem; font-weight : 400; font-style: normal;`,
  B2: `font-size : 1.6rem; line-height : 2.4rem; font-weight : 400; font-style: normal;`,
  B3: `font-size : 1.4rem; line-height : 2.0rem; font-weight : 400; font-style: normal;`,
  B4: `font-size : 1.2rem; line-height : 1.6rem; font-weight : 400; font-style: normal;`,
};

const Medium = {
  B1: `font-size : 1.8rem; line-height : 2.8rem; font-weight : 500; font-style: normal;`,
  B2: `font-size : 1.6rem; line-height : 2.4rem; font-weight : 500; font-style: normal;`,
  B3: `font-size : 1.4rem; line-height : 2.0rem; font-weight : 500; font-style: normal;`,
  B4: `font-size : 1.2rem; line-height : 1.6rem; font-weight : 500; font-style: normal;`,
};

const SemiBold = {
  B1: `font-size : 1.8rem; line-height : 2.8rem; font-weight : 600; font-style: normal;`,
  B2: `font-size : 1.6rem; line-height : 2.4rem; font-weight : 600; font-style: normal;`,
  B3: `font-size : 1.4rem; line-height : 2.0rem; font-weight : 600; font-style: normal;`,
  B4: `font-size : 1.2rem; line-height : 1.6rem; font-weight : 600; font-style: normal;`,
};

const FONT = {
  Header,
  Regular,
  Medium,
  SemiBold,
};

export const THEME = {
  PURPLE,
  TEXT,
  ORANGE,
  LINE,
  STATUS,
  BACKGROUND,
  FONT,
};

export type ThemeType = typeof THEME;
