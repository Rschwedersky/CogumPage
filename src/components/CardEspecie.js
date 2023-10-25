import { CardG, CardGTitle, Image, Thumbnail } from "./CardEspecies.styles";
import React from 'react';
import { BsThermometerSnow } from 'react-icons/bs';
import { BsThermometerSun } from 'react-icons/bs';


export default function CardEspecies ({cogum}) {
    

return(

<CardG  /* onClick={} */>
      <CardGTitle >{cogum.comName}</CardGTitle>
      <Thumbnail >
        <Image  src={cogum.image} alt={cogum.name} />
      </Thumbnail>
      
      <h2>{cogum.name}</h2>
      <div>
        <h2>Estacões:</h2>
      {cogum.estacao.length === 0
            ? <></>
            : cogum.estacao.map((item,index) => (item === 'verao')? <BsThermometerSun key={index} color="red"/>:<BsThermometerSnow key={index} color="blue"/>)}
          
      </div>
      {/* <ShowMore onClick={()=>navigate(`//detail/${games.id}`,)}>Show More</ShowMore> */}
    </CardG>
  );
};