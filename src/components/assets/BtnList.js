import { v4 as uuid } from 'uuid';

export const BTN_LIST = [
  {
    id: uuid(),
    value: 'AC',
  },
  {
    id: uuid(),
    value: '+-',
  },
  {
    id: uuid(),
    value: '%',
  },

  {
    id: uuid(),
    value: '/',
  },
  {
    id: uuid(),
    value: '7',
  },
  {
    id: uuid(),
    value: '8',
  },
  {
    id: uuid(),
    value: '9',
  },
  {
    id: uuid(),
    value: '*',
  },
  {
    id: uuid(),
    value: '4',
  },
  {
    id: uuid(),
    value: '5',
  },
  {
    id: uuid(),
    value: '6',
  },
  {
    id: uuid(),
    value: '-',
  },
  {
    id: uuid(),
    value: '1',
  },
  {
    id: uuid(),
    value: '2',
  },
  {
    id: uuid(),
    value: '3',
  },
  {
    id: uuid(),
    value: '+',
  },
  {
    id: uuid(),
    value: '0',
  },
  {
    id: uuid(),
    value: '.',
  },
  {
    id: uuid(),
    value: '=',
  },
];

export const BTN_BG_COLOR = {
  AC_btn_bg_color: {
    _default: 'rgb(255, 0, 0)',
    onMouseEnter: 'rgb(220, 0, 0)',
    onMouseDown: 'rgb(240, 0, 0)',
  },
  Eq_btn_bg_color: {
    _default: 'rgb(255, 100, 0)',
    onMouseEnter: 'rgb(215, 100, 0)',
    onMouseDown: 'rgb(235, 100, 0)',
  },
  btn_bg_color: {
    _default: 'rgb(240, 240, 240)',
    onMouseEnter: 'rgb(230, 230, 230)',
    onMouseDown: 'rgb(248, 248, 248)',
  },
};
