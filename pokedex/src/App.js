import React from 'react';
import logo from './poke_ball_icon.png';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
                  <img src={logo} alt='logo'/>
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
                <h1>Home</h1>
              </Route>

            </Switch>
          </div>
        </Router>

    );
  }
}

export default App;
