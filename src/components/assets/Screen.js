import { forwardRef } from 'react';
import { useBtn } from './BtnContext';

const Screen = forwardRef((props, ref) => {
  const { screenValue, handleScreenValue, resultValue } = useBtn();

  const screen = {
    margin: 0,
    width: props.inputScreen ? '97%' : '100%',
    paddingInline: '0.3rem',
    paddingBlock: props.inputScreen ? '0.2rem 0.5rem' : '0.4rem 0.2rem',
    fontSize: props.inputScreen ? '1.8rem' : '1.2rem',
    textAlign: props.inputScreen ? 'left' : 'right',
    border: 0,
    outline: 0,
    backgroundColor: '#b0b0b0',
    borderRadius: props.inputScreen ? '5px 5px 0 0' : '0 0 5px 0',
  };

  return (
    <input
      ref={ref}
      value={props.inputScreen ? screenValue : resultValue}
      onChange={props.inputScreen ? handleScreenValue : null}
      style={screen}
      readOnly={!props.inputScreen}
      placeholder="0"
    />
  );
});

export default Screen;
