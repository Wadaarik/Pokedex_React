import React from 'react';
import Loader from '../components/Loader';
import Form from "../components/form";

class Pokemon_Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            value: '',
            data: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount(index) {
        this.setState({isLoading: true});
        try {
            const res = await fetch(
                'https://pokeapi.co/api/v2/pokemon/'+index
            );
            const data = await res.json();
            this.setState({data: data, isLoading: false});

        } catch (err) {
            console.log(err.msg);
            this.setState({isLoading: false});
            throw err;
        }
    }

    handleSubmit(event) {
        console.log('Hello world');
        event.preventDefault();
        this.componentDidMount(this.state.value);
        this.setState({
            value: new FormData(event.currentTarget).get('search'),
        });

    }

    render() {
        const {isLoading, data} = this.state;
        return (
                <div>
                    <h1>Pokemon</h1>
                    <Form handleSubmit={this.handleSubmit} value={this.state.value}/>
                    {isLoading ? <Loader/>  :
                        <ul>
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
