import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            })
    }
    onsearchchange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filterredrobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (!this.state.robots.length) {
           return  <h1>Loading...</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <Searchbox searchchange={this.onsearchchange} />
                    <Scroll>
                        <Cardlist robots={filterredrobots} />
                    </Scroll>
                </div>
            );
        }
    }
}
export default App;