import React, { useState } from "react";
import  {Nav_bar, Nav_bar_with_searchbar, Nav_bar_with_searchbar_vitrine}  from '../composants';
import '../CSS.css';
import Carousel from '../carousel';
import img_fond from "../img/fond_prod.webp"


export function Produits_vitr({ active, setActive }){
        return(
      <>
      <Nav_bar_with_searchbar_vitrine active={active} setActive={setActive}/>
      <div className="relative container mx-auto">
      <div className="container mx-auto flex flex-col text-center align-middle justify-center pt-15">
            <img src={img_fond} alt="" className="w-[80%] h-100 mx-auto"/>
            <p className="text-red-600 text-xl hover : cursor-pointer  text-blue-600">cliquez ici</p>
            <div className="absolute right-38 from-transparent via-gray-500 to-black bg-gradient-to-r opacity-80 top-15 h-100 w-150">
            </div>
            <div className="absolute right-[30%] text-yellow-500 font-bold top-[35%]"><p className="text-6xl w-150">PERSONNALISEZ VOS IMPRIMES</p></div>
            
      </div>
      </div>
      
      </>)
    }
function Produit_vitrine(){
    
}
export default Produit_vitrine;