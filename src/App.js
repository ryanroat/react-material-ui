import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          startIcon={<ArrowForwardIcon />}
          variant="contained"
          color="primary"
          // style={{
          //   fontSize: 26
          // }}
          endIcon={<ArrowBackIcon />}
          >
          Click Me
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
