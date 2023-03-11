import { BTN_BG_COLOR } from './assets/BtnList';

const Button = ({ value, onClick }) => {
  const cmnBtnProps = {
    fontSize: '2rem',
    border: 0,
    outline: 0,
    borderRadius: '5px',
    boxShadow: '0 0 2px',
  };

  const equalsBtnProps = {
    ...cmnBtnProps,
    gridColumn: '3 / 5',
    backgroundColor: BTN_BG_COLOR.Eq_btn_bg_color._default,
  };

  const btnProps = {
    ...cmnBtnProps,
    fontSize: value === '.' ? '2.8rem' : '2rem',
    paddingBlockStart: value === '*' ? '1rem' : '',
    paddingBlockEnd: value === '.' ? '1rem' : '',
    backgroundColor:
      value === 'AC'
        ? BTN_BG_COLOR.AC_btn_bg_color._default
        : BTN_BG_COLOR.btn_bg_color._default,
  };

  const handleMouseEnter = e => {
    let bg_color = BTN_BG_COLOR.btn_bg_color.onMouseEnter;
    if (value === 'AC')
      bg_color = BTN_BG_COLOR.AC_btn_bg_color.onMouseEnter;
    else if (value === '=')
      bg_color = BTN_BG_COLOR.Eq_btn_bg_color.onMouseEnter;
    e.target.style.backgroundColor = bg_color;
  };

  const handleMouseLeave = e => {
    let bg_color = BTN_BG_COLOR.btn_bg_color._default;
    if (value === 'AC') bg_color = BTN_BG_COLOR.AC_btn_bg_color._default;
    else if (value === '=')
      bg_color = BTN_BG_COLOR.Eq_btn_bg_color._default;
    e.target.style.backgroundColor = bg_color;
  };

  const handleMouseDown = e => {
    let bg_color = BTN_BG_COLOR.btn_bg_color.onMouseDown;
    if (value === 'AC') bg_color = BTN_BG_COLOR.AC_btn_bg_color.onMouseDown;
    else if (value === '=')
      bg_color = BTN_BG_COLOR.Eq_btn_bg_color.onMouseDown;
    e.target.style.backgroundColor = bg_color;
  };

  return (
    <button
      style={value === '=' ? equalsBtnProps : btnProps}
      onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
