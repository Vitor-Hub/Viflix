import React from 'react';
import styled from 'styled-components'

const Button = styled.a`
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    margin-left: auto;
`




function ButtonLink(props) {
    // props => { className: "o que alguém passar" }
    console.log(props)
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;