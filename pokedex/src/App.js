import React from 'react';
import logo from './poke_ball_icon.png';
import pokedex from './pokedex.png';
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
                <div className='container'>
                  <h1>Le pokédex</h1>
                  <img src={pokedex}/>
                  <p>Le Pokédex est un outil de recherche sur les Pokémon.
                    <br/> Il enregistre et apprend aux dresseurs les caractéristiques de chaque Pokémon que l'on rencontre ou capture.
                    <br/>Au fil des générations, il est de plus en plus évolué.</p>
                </div>
              </Route>

            </Switch>
          </div>
        </Router>

    );
  }
}

export default App;
