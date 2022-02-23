import React from 'react';
import branco from '../../assets/branco.png'
import rosa from '../../assets/rosa.png'
import amarelo from '../../assets/amarelo.png'
import logo from './../../assets/Logo.png'
import { Zoom } from 'react-slideshow-image';
import { SlideShowConteiner, SlideShowIndicator, SlideShowImg, Box, Logo} from './Topbar.styles';
import 'react-slideshow-image/dist/styles.css'


export const Topbar = () =>
{
    const images = [branco, rosa, amarelo];
    
    const zoomOutProperties = {
        indicators: true,
        scale: 0.4,
        /* indicators: i => (<img src={lista[i]} alt="Screenshoots"/>), */
        autoplay:true
      }


    return(
        
        <SlideShowConteiner>
          <Box>
          <img src={logo} style={{width: "20%", margin: "5%"}}/>
            <div style={{marginLeft:"auto", display:"flex", padding:"3%",flexWrap: "nowrap"}}>
            <h1 style={{margin:"2%"}}>dfgdfgdfgd</h1>
              <h1 style={{margin:"2%"}} > dadawdad</h1>
            </div>
            
          
          </Box>
        <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} />
          </div>
        ))}
      </Zoom>
      </SlideShowConteiner>
     
)
};