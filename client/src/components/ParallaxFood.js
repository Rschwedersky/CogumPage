import React from 'react';
import { Parallax } from 'react-parallax';

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
  /* const navigate = useNavigate(); */
  export default function ParallaxFood  () {
   (
    
    <div style={{ textAlign: "center"}} /* onClick={()=>navigate('/receitas')} */>
    <h2>Descubra como adicionar essas belezuras na sua panela!</h2>
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={"/assets/food.webp"}
        bgImageAlt="recipes"
        strength={-200}
    >
       <div style={{ height: 700 }}>
        <div style={insideStyles}>Receitas</div>
      </div>
    </Parallax>
    </div>

)};