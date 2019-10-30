import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokemon_choice from './pages/Pokemons';
import Pokemon_Details from './pages/Pokemon_Details';

class App extends React.Component{
  render() {
    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Pokemon_Details">Pokedex</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/Pokemon_Details">
                <Pokemon_Details />
              </Route>
              <Route path="/">
                <h2>Home</h2>
              </Route>

            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
