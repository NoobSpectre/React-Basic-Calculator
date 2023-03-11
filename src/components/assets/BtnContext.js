import { useState, useContext, createContext, useRef } from 'react';

const BtnContext = createContext('');

export const useBtn = () => useContext(BtnContext);

export const BtnProvider = ({ children }) => {
  const [screenValue, setScreenValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [opn, setOpn] = useState('');
  const inputRef = useRef();

  const handleScreenValue = e => {
    if (isNaN(resultValue)) CalFunctions.clear_All();
    if (opn === '') setResultValue('');
    let _result = e.target.value.replace(/[^\d.-]/g, '');
    if (_result.lastIndexOf('-') > 0) return;
    if (_result.indexOf('.') !== _result.lastIndexOf('.')) return;
    if (screenValue !== _result) setScreenValue(_result);
  };

  const handleKeyPress = e => {
    const val = e.key;
    switch (val) {
      case 'Enter':
        CalFunctions.calculate();
        break;
      case '+':
      case '-':
      case '/':
      case '*':
      case '%':
        CalFunctions.setOperation(val);
        break;
      default:
    }
  };

  const CalFunctions = {
    clear_All: () => {
      setScreenValue('');
      setResultValue('');
      setOpn('');
    },
    toggle_ScreenValue: () => {
      if(isNaN(resultValue)) CalFunctions.clear_All();
      if (screenValue === '') {
        setScreenValue(prevVal => prevVal + '-');
      } else if (screenValue === '-') {
        setScreenValue(prevVal => prevVal.slice(1));
      } else {
        const _result = -1 * Number(screenValue);
        setScreenValue(_result.toString());
      }
    },
    setOperation: _opn => {
      if (screenValue === '' && resultValue === '') return;
      let _result = 0;
      if (resultValue === '' && screenValue !== '') {
        _result = Number(screenValue);
        setScreenValue('');
        setResultValue(_result.toString());
      }
      setOpn(_opn);
    },
    calculate: () => {
      let _result = resultValue === '' ? 0 : Number(resultValue);
      if (opn === '') return;
      else if (opn === '+') _result += Number(screenValue);
      else if (opn === '-') _result -= Number(screenValue);
      else if (opn === '/') _result /= Number(screenValue);
      else if (opn === '*') {
        _result *= Number(screenValue);
        _result = Number(_result.toFixed(2));
      } else if (opn === '%') {
        _result *= Number(screenValue) / 100;
        _result = Number(_result.toFixed(2));
      }
      setScreenValue('');
      setOpn('');
      setResultValue(_result.toString());
    },
    append_to_ScreenValue: val => {
      if (isNaN(resultValue)) CalFunctions.clear_All();
      if (val === '.' && screenValue.includes('.')) return;
      if (opn === '') setResultValue('');
      setScreenValue(prevVal => prevVal + val);
    },
  };

  return (
    <BtnContext.Provider
      value={{
        screenValue,
        resultValue,
        handleScreenValue,
        handleKeyPress,
        opn,
        setOpn,
        CalFunctions,
        inputRef,
      }}
    >
      {children}
    </BtnContext.Provider>
  );
};
