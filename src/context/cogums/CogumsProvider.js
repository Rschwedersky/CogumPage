import { CogumsContext } from './CogumsContext';
import React, { useState } from 'react';
import brancoScreen from '../../assets/black-white.webp'
import rosaScreen from '../../assets/rosa.webp'
import amareloScreen from '../../assets/amarelo.webp'
import shimofuriScreen from '../../assets/shimofuri.webp'
import lionsScreen from '../../assets/lions.webp'
import logo from './../../assets/Logo.png'
import { getCogums } from '../../services/cogums';

export const CogumsProvider = ({ children }) => {


    const[listaCogums]= useState([brancoScreen, rosaScreen, amareloScreen, shimofuriScreen, lionsScreen])
    const[listaEspecie] = useState(getCogums());
console.log(getCogums());
return(<CogumsContext.Provider value={{ listaCogums, listaEspecie, logo }}>
    {children}
  </CogumsContext.Provider>);

};