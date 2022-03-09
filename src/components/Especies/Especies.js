import React from 'react';
import { CardGrid, Container} from './Especies.styles';
import {useCogums} from './../../context/cogums/useCogums'
import { CardEspecies } from '../CardEspecie/CardEspecie';
export const Especies = () => {
    
    const {listaEspecie} = useCogums();
    return(<>
    <Container>
        <h2 style={{marginLeft: '60px', color:'brown',fontFamily: 'Fredoka'}}>Especies do nosso portifólio</h2>
    <CardGrid>
    {listaEspecie.length === 0
    ? <></>
    : listaEspecie.map((elemento, index) => <CardEspecies key={index} cogum={elemento} />)}
    </CardGrid>
    </Container>
    </>
    );
    
    };