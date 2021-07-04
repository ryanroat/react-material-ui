import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography, Container, Paper, Grid } from '@material-ui/core/'
import { ArrowForward, ArrowBack, ToggleOff, ToggleOn } from '@material-ui/icons/'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'
import 'fontsource-roboto'
// import '@fontsource/acme'

// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

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

const themeName = createMuiTheme({
  typography: {
    h1: {
      fontSize: 30,
      padding: '.5rem',
      textTransform: 'uppercase'
    },
    h2: {
      fontSize: 24,
      padding: '.25rem',
    }
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[400],
    }
  }
})

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
    <ThemeProvider theme={themeName}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <Typography variant="h1" component="h1">
              Welcome to MUI
            </Typography>
            <Typography variant="h2" component="h2">
              Learning Material UI for React
            </Typography>
            <Typography className="subtitle" variant="subtitle">
              demos of some Material UI components
            </Typography>
            <Grid container spacing={3} justify="center">
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>
            <TextField className='text-input'
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
