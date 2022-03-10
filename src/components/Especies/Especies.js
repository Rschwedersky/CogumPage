import React from 'react';
import { CardGrid, Container} from './Especies.styles';
import {useCogums} from './../../context/cogums/useCogums'
import { GiSuperMushroom, GiGrassMushroom } from 'react-icons/gi';
import { CardEspecies } from '../CardEspecie/CardEspecie';
export const Especies = () => {
    
    const {listaEspecie} = useCogums();
    return(<>
    <Container>
        <h2 style={{marginLeft: '60px', color:'brown',fontFamily: 'Fredoka',textShadow:' 3px 2px 2px rgba(151, 150, 150, 1)'}}><GiGrassMushroom color='#2b2b2b'/><GiSuperMushroom color='#2b2b2b'/> Nossos Cogums <GiSuperMushroom color='#2b2b2b'/><GiGrassMushroom color='#2b2b2b'/></h2>
    <CardGrid>
    {listaEspecie.length === 0
    ? <></>
    : listaEspecie.map((elemento, index) => <CardEspecies key={index} cogum={elemento} />)}
    </CardGrid>
    </Container>
    </>
    );
    
    };