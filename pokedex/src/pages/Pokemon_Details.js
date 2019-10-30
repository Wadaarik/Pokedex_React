import React from 'react';
import Loader from '../components/Loader';

class Pokemon_Details extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            isLoading: false,
            data: [],
        };

    }


    async componentDidMount() {
        this.setState({isLoading: true});
        try {
            const res = await fetch(
                'https://pokeapi.co/api/v2/pokemon/1/'
            );
            const data = await res.json();

            this.setState({data: data, isLoading: false});

        } catch (err) {
            console.log(err.msg);
            this.setState({isLoading: false});
            throw err;
        }
    }


    render() {
        const {isLoading, data} = this.state;
        return (
                <div>
                    <h2>Pokemon</h2>
                    {isLoading ? <Loader/> :
                        <ul>
                            <li>
                                Nom du pokémon : {data.sprites}
                            </li>
                            <li>
                                Nom du pokémon : {data.name}
                            </li>
                            <li>
                                N° du pokémon : {data.id}
                            </li>
                            <li>
                                Taille du pokémon : {data.height} ft
                            </li>
                            <li>
                                Poid du pokémon : {data.weight} pnd
                            </li>
                        </ul>
                    }
                </div>
        );
    }
}
export default Pokemon_Details;
