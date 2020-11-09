import React, {useEffect, useState} from 'react';
import InputSearch from '../InputSearch';


function HeaderBar (){



    return (
        <section className="App-SearchBar">
            <img src="https://occ-0-1722-92.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e" alt="logo"  style={{height:120, width: 290, marginBottom: 30}} />
            <InputSearch />
        </section>
    );
}

export default HeaderBar;