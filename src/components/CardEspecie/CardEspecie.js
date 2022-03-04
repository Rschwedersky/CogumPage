import { CardG, CardGTitle, GamesP, Image, ShowMore, Thumbnail } from "./CardEspecies.styles";
import React from 'react';
export const CardEspecies = ({cogum}) => {
    

return(

<CardG  /* onClick={} */>
      <Thumbnail >
        <Image  src={cogum.image} alt={cogum.name} />
      </Thumbnail>
      <CardGTitle >{cogum.name}</CardGTitle>
      <div >  
      <p>teste</p> 

        <GamesP>tipo:  tipo</GamesP>  
      </div>
      {/* <ShowMore onClick={()=>navigate(`//detail/${games.id}`,)}>Show More</ShowMore> */}
    </CardG>
  );
};