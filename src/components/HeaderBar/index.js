import React, {useEffect, useState} from 'react';
import InputSearch from '../InputSearch';


function HeaderBar (){



    return (
        <section className="App-SearchBar">
            <img src="../../../public/LOGO.png" alt="logo"  style={{height:120, width: 290, marginBottom: 30}} />
            <InputSearch />
        </section>
    );
}

export default HeaderBar;