import React from "react";
import { Especies } from "../../components/Especies/Especies";
import { Footer } from "../../components/Footer/Footer";
import { Topbar } from "../../components/Topbar";

export const Home = ()=>{

    return(
    <>
        <Topbar/>
        <Especies/>
        <Footer/>
    </>
    );
};

