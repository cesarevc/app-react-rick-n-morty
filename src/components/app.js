import React, {Component} from 'react';
import InputSearch from './InputSearch';
import MainPanel from './MainPanel';
import AllCharactersPanel from './AllCharactersPanel';
import './App.css';


function App () {

    
    
    const handleClick = () => {
        const task = this.state.task;
        task.done = !task.done;
        this.setState({ task })
    }
    

    return (
        <div className="App">

            <section className="App-SearchBar">
                <img src="../../public/LOGO.png" alt="logo"  style={{height:120, width: 290, marginBottom: 30}} />
                <InputSearch />
            </section>

            <section className="App-content">
                <AllCharactersPanel />
            </section>

            
        </div>
    );
    
}

export default App;