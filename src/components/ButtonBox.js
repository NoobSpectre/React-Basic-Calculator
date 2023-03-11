import { useBtn } from './assets/BtnContext';
import { BTN_LIST } from './assets/BtnList';
import Button from './Button';

const ButtonBox = () => {
  const { CalFunctions, inputRef } = useBtn();

  const handleClick = e => {
    e.preventDefault();

    const val = e.target.innerText;
    switch (val) {
      case 'AC':
        CalFunctions.clear_All();
        inputRef.current.focus();
        break;
      case '+-':
        CalFunctions.toggle_ScreenValue();
        inputRef.current.focus();
        break;
      case '%':
      case '/':
      case '*':
      case '-':
      case '+':
        CalFunctions.setOperation(val);
        inputRef.current.focus();
        break;
      case '9':
      case '8':
      case '7':
      case '6':
      case '5':
      case '4':
      case '3':
      case '2':
      case '1':
      case '0':
      case '.':
        CalFunctions.append_to_ScreenValue(val);
        inputRef.current.focus();
        break;
      case '=':
        CalFunctions.calculate();
        inputRef.current.focus();
        break;
        default:
          console.error('Invalid operation');
    }
  };

  const btnBox = {
    width: '100%',
    height: 'calc(100% - 6.875px)',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridGap: '.625rem',
  };

  return (
    <div style={btnBox}>
      {BTN_LIST.map(btn => {
        return <Button key={btn.id} value={btn.value} onClick={handleClick} />;
      })}
    </div>
  );
};

export default ButtonBox;
