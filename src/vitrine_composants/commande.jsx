import React, { useState } from "react";
import  {Nav_bar, Nav_bar_with_searchbar, Nav_bar_with_searchbar_vitrine}  from '../composants';
import img_banniere from '../img/banniere_compressee.webp';
import '../CSS.css';
import Carousel from '../carousel';

export function Commande({active, setActive}){
    return (
        <>
            <Nav_bar_with_searchbar_vitrine active={active} setActive={setActive}/>
        </>
    )
}

function Commandes_user(){
    const [active, setActive] = useState("MES COMMANDES");
    return(
        <Commande active={active} setActive={setActive}/>
    )
}
export default Commandes_user;
