import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import Routes from './Routes';


function App() {
  return(
    <BrowserRouter>
    <Router>
      <Routes/>
      </Router>
    </BrowserRouter>
  )
}

export default App;