import React from 'react';
import branco from '../../assets/black-white.webp'
import rosa from '../../assets/rosa.webp'
import amarelo from '../../assets/amarelo.webp'
import shimofuri from '../../assets/shimofuri.webp'
import lions from '../../assets/lions.webp'

import { Zoom } from 'react-slideshow-image';
import { SlideShowConteiner, Box} from './Topbar.styles';
import 'react-slideshow-image/dist/styles.css'
import { useCogums } from '../../context/cogums/useCogums';



export const Topbar = () =>
{
  const {logo, listaCogums}= useCogums();
  


    const images = [branco, rosa, amarelo, shimofuri, lions];
    
    const zoomOutProperties = {
        indicators: true,
        scale: 0.4,
        /* indicators: i => (<img src={lista[i]} alt="Screenshoots"/>), */
        autoplay:true
      }


    return(
        
        <SlideShowConteiner >
          <Box >
          <img src={logo} style={{width: "20%", margin: "5%"}}/>
            
            <div style={{marginLeft:"auto", display:"flex", padding:"1%",flexWrap: "wrap", width: "100vw", justifyContent:"end"}}>
            <h1 style={{margin:"2%", color:'green'}}>Home</h1>
              <h1 style={{margin:"2%", color:'green'}} > Receitas</h1>
            </div>
            
          
          </Box>
        <Zoom {...zoomOutProperties}>
        {listaCogums.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} />
          </div>
        ))}
      </Zoom>
      </SlideShowConteiner>
     
)
};