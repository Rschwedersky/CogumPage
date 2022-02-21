import React, { useState } from 'react';
import { Card } from './Topbar.styles';
import background from '../../assets/background.png'
import branco from '../../assets/branco.png'
import rosa from '../../assets/rosa.png'
import amarelo from '../../assets/amarelo.png'
import { Zoom } from 'react-slideshow-image';
import { SlideShowConteiner, SlideShowIndicator, SlideShowImg} from './Topbar.styles';
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