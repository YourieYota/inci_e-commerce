import React, { useState } from "react";
import { Nav_bar_with_searchbar } from "../composants";
import total_com_img from "../img/icone/icone_total_commande.webp"
import icone_erreur from "../img/icone/icone_erreur.webp"
import icone_termine from "../img/icone/icone_termine.webp"
import icone_attent from "../img/icone/icone_en_attente.webp"
import { useProduit } from "./hookProduitPersonnalise.jsx"
import crayon from "./img/icone/icone_crayon.webp"
import oeil from "./img/icone/icone_oeil.webp"
import del_img from "./img/icone/icone_poubelle.webp"
import { Search, Plus, ArrowLeft } from "lucide-react"



export function DelProduct(produit, setProduit, id){
    setProduit((prev) => prev.filter((prod) => prod.id !== id))
}


function Gest_prod(){
    

}
export default Gest_prod;