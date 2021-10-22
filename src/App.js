import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import Routes from './Routes';


function App() {
  return(
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}

export default App;
