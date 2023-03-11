import Display from './Display';
import ButtonBox from './ButtonBox';
import { BtnProvider } from './assets/BtnContext';

const Wrapper = () => {
  const wrapper = {
    width: '23rem',
    padding: '0.625rem 0.5rem',
    borderRadius: '4px',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={wrapper}>
      <BtnProvider>
        <Display />
        <ButtonBox />
      </BtnProvider>
    </div>
  );
};

export default Wrapper;
