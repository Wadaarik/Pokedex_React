import React from 'react';
import '../App.scss';
import Loader from '../components/Loader';

class Test extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoading: false,
            value: '',
            Bulbasaur: [],
        };
    }
    componentDidMount() {
        this.setState({isLoading: true});
        fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur/')
        .then(results =>{
            return results.json();
        })   .then(data => {
            let sprite = data.results.map((pic) =>{
                return(
                    <div key={pic.results}>
                        <img src={pic.sprites.front_default} />
                    </div>
                )
            });
            this.setState({Bulbasaur : sprite});
            console.log(this.state.Bulbasaur);
        })
    }


    render() {
        const {isLoading, data} = this.state;
        return (
            <div className='form_result'>
                <h1>Pokemon</h1>
                {isLoading ? <Loader/> :
                    <div>
                        {console.log(this.state.Bulbasaur)}
                    </div>
                }
            </div>
        );
    }
}
export default Test;
