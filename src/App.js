import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './pages/About'
import Map from './pages/Map'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>

        <Route exact path="/" component={About} />
        <Route path="/map" component={Map} />
        <Route component= {NotFound} />
      </Switch>

    
    </div>

  );
}

export default App;
