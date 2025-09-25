import React, { useState } from "react";
import  {Nav_bar, Nav_bar_with_searchbar, Nav_bar_with_searchbar_vitrine}  from '../composants';
import img_pub from '../img/publicite_compressee.webp';
import '../CSS.css';
import Carousel from '../carousel';
import img_prod_pub from '../img/fonc_prod_1.png'


export function Produits_vitr({ active, setActive }){
        return(
      <>
      <Nav_bar_with_searchbar_vitrine active={active} setActive={setActive}/>

      <div className="relative  container mx-auto bg-white min-h-screen flex">
            <img src="" alt="" />
      </div>
      </>)
    }
function Produit_vitrine(){
    
}
export default Produit_vitrine;