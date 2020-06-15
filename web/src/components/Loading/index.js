import React from 'react';
import {FaSpinner} from 'react-icons/fa';
import {Container} from './style';

const Loading = () => {
    return (
        <>
            <Container>
               <p>Carregando dados <span><FaSpinner/></span></p> 
            </Container>
            
        </>
    )
}

export default Loading;