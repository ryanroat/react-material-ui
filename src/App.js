import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField } from '@material-ui/core/'
import { ArrowForward, ArrowBack, ToggleOff, ToggleOn } from '@material-ui/icons/'

import React from 'react'

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
          autoFocus="true"
          fullWidth="true"
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
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
