import React, {Component} from 'react';
import InputSearch from './InputSearch';
import MainPanel from './MainPanel';
import HeaderBar from './HeaderBar';
import AllCharactersPanel from './AllCharactersPanel';
import { Provider } from 'react-redux';
import store from '../redux/store';
import './app.css';


function App () {

    return (
        <Provider store={store} >

            <div className="App">
                <HeaderBar />
                <MainPanel />

                <section className="App-content">
                    <AllCharactersPanel />
                </section>
            </div>
        </Provider>
    );
    
}



export default App;