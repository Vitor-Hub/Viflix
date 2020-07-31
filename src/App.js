import React from 'react';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';

export default function App(){
    return (
        <>
            <div>
                <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo} 
                            url= {dadosIniciais.categorias[0].videos[0].url}
                            videoDescription= {"O que é Front-end?"}
                />

                <Carousel ignoreFirstVideo
                            category={dadosIniciais.categorias[0]}
                />            

            </div>
        </>
    );
}
