import React from "react";
import { Especies } from "../../components/Especies/Especies";
import { Footer } from "../../components/Footer/Footer";
import { Topbar } from "../../components/Topbar";
import { ParallaxFood } from "../../components/ParallaxFood/ParallaxFood";
import { Contato } from "../../components/Contato/Contato";

export const Home = ()=>{
    
    return(
    <>
        <Topbar/>
        <Especies/>
        <ParallaxFood/>
        <Contato/>
        <Footer/>
        

    </>
    );
};

