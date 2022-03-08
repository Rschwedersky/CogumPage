import { CardG, CardGTitle, GamesP, Image, ShowMore, Thumbnail } from "./CardEspecies.styles";
import React from 'react';
export const CardEspecies = ({cogum}) => {
    

return(

<CardG  /* onClick={} */>
      <Thumbnail >
        <Image  src={cogum.image} alt={cogum.name} />
      </Thumbnail>
      <CardGTitle >{cogum.name}</CardGTitle>
      <h2>{cogum.comName}</h2>
      <div>
        <h2>Estacões:</h2>
      {cogum.estacao.length === 0
            ? <></>
            : cogum.estacao.map((item,index) => <GamesP key={index}>{item}</GamesP>)}
          
      </div>
      {/* <ShowMore onClick={()=>navigate(`//detail/${games.id}`,)}>Show More</ShowMore> */}
    </CardG>
  );
};