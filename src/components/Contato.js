import React from 'react';

export default function Contato () {
 return(
    <div style={{backgroundColor:'green',width:"100vw", display:"flex",flexWrap:'wrap'}}>
        <div>
        <iframe style={{width:"60vw",minWidth:'350px',height:"60vh", border:0, borderRadius:'10vh',padding:'12px',margin:'2.5vw'}} loading="lazy"
src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNfCOYSs7J5URZtxdOO1XQvk&key=AIzaSyD4FYqwJvdzD8z-fUn7O4hU5Dhn6y17adM"
title="maps"></iframe>
</div>
        <div style={{width:"30vw",minWidth:'350px',height:"80vh", border:0, borderRadius:'10vh',padding:'12px',margin:'2.5vw'}}>
            <h2>Estamos produzindo nossos cogums bem pertinho!</h2>
            <p>A produção localizada no sul da ilha de Florianópolis - SC, na praia do Campeche é ideal para entregar os cogums fresquinhos na sua residência. Marque uma visita para conhecer um pouco da dedicação na produção desse alimento fascinante!</p>
        </div>
    </div>

    );
};