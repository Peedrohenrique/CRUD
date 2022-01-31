import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import MainRoutes from './Routes';


function App() {
  return(
    <BrowserRouter>
    <Router>
      <MainRoutes />
      </Router>
    </BrowserRouter>
  )
}

export default App;