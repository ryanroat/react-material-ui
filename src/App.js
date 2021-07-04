import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField } from '@material-ui/core/'
import { ArrowForward, ArrowBack, ToggleOff, ToggleOn } from '@material-ui/icons/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #555 30%, #999 90%)',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 2,
    borderRadius: 28,
    color: 'black',
    margin: '.5rem',
    padding: '1rem',
  }
})

const ButtonStyled = () => {
  const classes = useStyles();
  return (
    <Button className={classes.root}>
      Styled Button      
    </Button>
  )
}


const CheckboxExample = () => {

  const [checked, setChecked] = useState(true)

  return (
    <FormControlLabel
      control = {
        <Checkbox 
        checked={checked}
        onChange={((event) => {
          setChecked(event.target.checked)
        })}
      />
      }
      label="Checkbox Test"
    />
  )
}

const CheckboxIconExample = () => {

  const [checked, setChecked] = useState(true)

  return (
    <FormControlLabel
      control = {
        <Checkbox 
        checked={checked}
        icon={<ToggleOff />}
        checkedIcon={<ToggleOn />}
        onChange={((event) => {
          setChecked(event.target.checked)
        })}
      />
      }
      label="Checkbox Icon Test"
    />
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          variant="outlined"  
          autoFocus={true}
          fullWidth={true}
          helperText="This TextField is autoFocused."
          label="outlined fullWidth TextField"
          placeholder="Type anything"
          />
        <TextField
          type="date"
        />
        <CheckboxExample />
        <CheckboxIconExample />
        <Button
          startIcon={<ArrowForward />}    
          variant="contained"
          color="default"
          // style={{
          //   fontSize: 26
          // }}
          endIcon={<ArrowBack />}
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
        <ButtonStyled />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
