import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Body = styled.main`
    background-color: black;
    color: white;
    flex:1;
    padding: 50px 5% 0 5%;
    min-height: calc(100vh - 271px);
`


export default function CadastroCategoria() {
    return (
        <>
            <Header />

            <Body>
                <h1>Cadastro de Categorias</h1>

                <Link to="/">
                    Cadastrar Categoria
                </Link>

            </Body>

            <Footer />
        </>
    );
}