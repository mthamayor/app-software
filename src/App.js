import React, { Component } from 'react';
import { MuiThemeProvider, Grid, createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Acids, LivingThings, EnvPollution } from './components';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#43a047' }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid className='h-100' container>
          <Router>
            <Route exact path='/' component={EnvPollution} />
            <Route path='/env_pollution' component={EnvPollution} />
            <Route path='/acids' component={Acids} />
            <Route path='/living_things' component={LivingThings} />
          </Router>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
