import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          variant="contained"
          color="primary"
          // style={{
          //   fontSize: 26
          // }}
          >
          Click Me
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
