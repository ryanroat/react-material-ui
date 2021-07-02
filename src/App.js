import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@material-ui/core/'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          startIcon={<ArrowForwardIcon />}
          variant="contained"
          color="default"
          // style={{
          //   fontSize: 26
          // }}
          endIcon={<ArrowBackIcon />}
          >
          Click Me
        </Button>
        <ButtonGroup variant="contained">
          <Button
            color="primary"
          >
          left button
          </Button>
          <Button
            color="secondary"
          >
          right button
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
