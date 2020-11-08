import React, {Component} from 'react';
import InputSearch from './InputSearch';
import MainPanel from './MainPanel';
import AllCharactersPanel from './AllCharactersPanel';
import { Provider } from 'react-redux';
import store from '../redux/store';
import './App.css';


function App () {

    console.log('estado inicial', store.getState());

    
    const handleClick = () => {
        const task = this.state.task;
        task.done = !task.done;
        this.setState({ task })
    }
    

    return (
        <Provider store={store} >

            <div className="App">

                <section className="App-SearchBar">
                    <img src="../../public/LOGO.png" alt="logo"  style={{height:120, width: 290, marginBottom: 30}} />
                    <InputSearch />
                </section>

                <section className="App-content">
                    <AllCharactersPanel />
                </section>
            </div>
        </Provider>
    );
    
}

export default App;