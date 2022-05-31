import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import List from './components/List/List';
import About from './views/About/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <About />
        </Route>
        <Route path="/offer">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
