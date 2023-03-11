import Wrapper from './components/Wrapper';

function App() {
  const app = {
    display: 'flex',
    padding: '1rem',
    justifyContent: 'center',
  };

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Welcome to React Basic Calculator</h1>
      <div style={app}>
      <Wrapper />
    </div>
    </>
  );
}

export default App;
