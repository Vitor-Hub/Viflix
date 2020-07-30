import React from 'react';
import './Menu.css';
import ButtonLink from '../ButtonLink';

function Menu () {
    return(
        <header>
            <img src="https://fontmeme.com/permalink/200730/8f427aa277ba793140b354846da3bcdd.png"></img>
            <ButtonLink className="ButtonLink" href= "google.com"> 
                Novo filme
            </ButtonLink>
        </header>
    );
}

export default Menu;