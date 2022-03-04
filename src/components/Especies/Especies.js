import React from 'react';
import { CardGrid, Container} from './Especies.styles';
import {useCogums} from './../../context/cogums/useCogums'
import { CardEspecies } from '../CardEspecie/CardEspecie';
export const Especies = () => {
    
    const {listaEspecie} = useCogums();
    return(<>
    <Container>
    <CardGrid>
    {listaEspecie.length === 0
    ? <></>
    : listaEspecie.map((elemento, index) => <CardEspecies key={index} games={elemento} />)}
     <h1>adadaadada</h1>
    </CardGrid>
    </Container>
    </>
    );
    
    };