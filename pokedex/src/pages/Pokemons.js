import React from 'react';
import '../App.css';
import List from '../container/List';
import Form from '../components/form';
import data from "../data.json";


class Pokemon_choice extends React.Component {

    state = {
        value: '',
    };

    handleSubmit = this.handleSubmit.bind(this);

    handleSubmit(ev) {
        ev.preventDefault();
        this.setState({
            value: new FormData(ev.currentTarget).get('filter'),
        });

    }


    render(){

        const filteredPokemons = data.Pokemons.filter(Pokemons =>
            Pokemons.name.toLowerCase().includes(this.state.value.toLowerCase()),
        );//filtre les 'pokemons'

        return (
            <div className="Pokedex">
                <header className="Pokedex">
                    <h1>Pokedex</h1>
                </header>
                <div className="Pokedex">
                    <section className="Pokedex">
                        <List Pokemons={filteredPokemons}/>
                    </section>
                    <Form handleSubmit={this.handleSubmit} value={this.state.value}/>
                </div>

            </div>
        );
    }
}



export default Pokemon_choice;
