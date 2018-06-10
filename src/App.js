import React, { Component } from 'react';
import NavBar from './comps/navbar/NavBar';
import Search from './comps/search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import ImageResults from './comps/image-results/ImageResults';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <div >
              <NavBar/>
              <Search/>
          </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
