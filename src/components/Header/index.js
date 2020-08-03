import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Menu () {

    const Button = styled.a`
    background-color: black;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: ${props => `${props.fontSize}px`};
    padding: 10px 20px;
    margin-right: 50px;

    h3{
        font-size: 15px;
        margin:0;
        color: #fff;
    }
`

    const Header = styled.div`
    
    border-bottom: 1px solid #fff;
    background-color: black;
    display:flex;
    justify-content: space-between;
    align-items: center;

    img{
        height: 40px;
        width: 100px;
        padding: 10px 0;
        margin-left: 50px;
    }
`

    return(
        <Header as='div'>
            <Link to = "/">
                <img src="https://fontmeme.com/permalink/200730/43cfa9a7ab0042a0c9f3084038f4e273.png" />
            </Link>

            <Button as={Link} className="ButtonLink" fontSize={5} to="/cadastro/video"> 
                <h3 >Novo filme</h3>
            </Button>
        </Header>
    );
}

export default Menu;