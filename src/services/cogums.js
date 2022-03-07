
import brancoEspecie from './../assets/especies/brancoEspecie.webp'
import amareloEspecie from './../assets/especies/amareloEspecie.webp'
import lionsEspecie from './../assets/especies/lionsEspecie.webp'
import perolaEspecie from './../assets/especies/perolaEspecie.webp'
import rosaEspecie from './../assets/especies/rosaEspecie.webp'
import shimofuriEspecie from './../assets/especies/shimofuriEspecie.webp'



  
    const cogums = [
    {
      name: 'Pleurotus Ostreatus',
      comName:'Shimeji branco',
      image: brancoEspecie,
      estacao: ['verao','inverno']
    },
    {
      name: 'Pleurotus Citrinopilleatus',
      comName:'Shimeji amarelo',
      image: amareloEspecie,
      estacao: ['verao','inverno']
    },
    {
      name: 'Hericium erinaceus',
      comName:'Juba de Leão',
      image: lionsEspecie,
      estacao: ['verao','inverno']
    },
    {
      name: 'Pleurotus Ostreatus',
      comName:'Shimeji pérola',
      image: perolaEspecie,
      estacao: ['verao','inverno']
    },
    {
      name: 'Pleurotus Djamor',
      comName:'Shimeji rosa',
      image: rosaEspecie,
      estacao: ['verao','inverno']
    },
    {
      name: 'Pleurotus Ostreatus',
      comName:'Shimeji premium',
      image: shimofuriEspecie,
      estacao: ['verao','inverno']
    },
    ]

    export const getCogums = () => {
        return cogums;
      };