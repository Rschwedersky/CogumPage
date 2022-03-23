import React from 'react';
import { Parallax } from 'react-parallax';
import food from './../../assets/food.jpg';
import { useNavigate } from 'react-router-dom';

const insideStyles = {
    background: "white",
    padding: 20,
    color: "green",
    borderRadius: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  
export const ParallaxFood = () =>{ 
    const navigate = useNavigate();
    
    return(<>
    
    <div style={{ textAlign: "center"}} /* onClick={()=>navigate('/receitas')} */>
    <h2>Descubra como adicionar essas belezuras na sua panela!</h2>
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={food}
        bgImageAlt="recipes"
        strength={-200}
    >
       <div style={{ height: 500 }}>
        <div style={insideStyles}>Receitas</div>
      </div>
    </Parallax>
    </div>
    </>
)};