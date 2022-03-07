import React from 'react';
import { FooterStyle, Span } from './Footer.styles';

export const Footer = () =>{
    
    
 
    
 return(
    <FooterStyle>
        <h3>Design by <Span onClick={()=>window.open('https://www.linkedin.com/in/rodrigo-schwedersky/')}> Rschwedersky</Span></h3>
    </FooterStyle>

    );
};