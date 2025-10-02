import React, { useState } from "react";
import  {Nav_bar, Nav_bar_with_searchbar, Nav_bar_with_searchbar_vitrine}  from '../composants';
import '../CSS.css';
import carte_visite from "../img/produits/carte_de_visite.webp"
import banderole from "../img/produits/banderole.webp"
import brochure from "../img/produits/brochure.webp"
import affiche from "../img/produits/affiche.webp"
import carte_pro from "../img/produits/carte_pro.webp"
import flyer from "../img/produits/flyer.webp"

export function Produits_vitr({ active, setActive }){

  const tab_prod =[
    {
      src : carte_visite,
      nom : "carte de visite",
      prix : "3000 FCFA",
      description : "petite description du modèle cité"
    },

    {
      src : banderole,
      nom : "banderole",
      prix : "5000 FCFA",
      description : "petite description du modèle cité"
    },
    {
      src : brochure,
      nom : "brochure",
      prix : "3000 FCFA",
      description : "petite description du modèle cité"
    },
    {
      src : affiche,
      nom : "affiche",
      prix : "5000 FCFA",
      description : "petite description du modèle cité"
    },
    {
      src : carte_pro,
      nom : "carte pro",
      prix : "5000 FCFA",
      description : "petite description du modèle cité"
    },
    {
      src : flyer,
      nom : "flyer",
      prix : "2000 FCFA",
      description : "petite description du modèle cité"
    }
  ]
        return(
      <>
      <Nav_bar_with_searchbar_vitrine active={active} setActive={setActive}/>
      <div className="relative mx-auto">
        <section className="bg-gray-100 py-40 px-50">
            <div className="flex flex-col max-w-[685px] min-h-auto">
              <div className="container mb-5">
                <h1 className="text-7xl mb-10 font-bold">
              Maîtrisez votre production
              </h1>
              <p className="text-xl text-gray-500">
              Impression professionnelle de haute qualité pour tous vos besoins. Des cartes de visite aux grandes banderoles.
              </p>
              </div>
              <div className="container flex justify-between w-lg gap-10">
                  <button className="bg-blue-500 rounded-xl px-9 py-3 mt-2 text-white border-1 hover: cursor-pointer w-80 gap">
                    Voir les produits
                  </button>
                  <button className="bg-white rounded-xl py-2 px-2  mt-2 border-1 border-gray-300 text-black hover: cursor-pointer w-90 mr-5">
                    Commandes personnalisés
                  </button>
              </div>
      </div>
        </section>

        <section className="bg-white pt-25 px-50 ">
            <div>
              <h1 className="text-5xl mb-5 font-bold">
              Nos produits
              </h1>
              <p className="text-xl text-gray-500">
              Découvrez notre gamme complète de produits d'impression professionnelle
              </p>
            </div>
            {/*division pour les cadres*/}

            <div className="grid grid-cols-3 gap-5 align-middle justify-center pt-10 mb-5">
                {tab_prod.map((index, id)=>(
                  <div className="flex flex-col border-1 rounded-xl justify-center" key={id}>
                      <div className="flex justify-center p-2">
                          <img src={index.src} alt={`illustration de ${index.nom}`} className="rounded-xl w-[312] h-[439px] hover:scale-102" />
                      </div>
                      <div className="px-10">
                        <h1 className="text-2xl py-2">
                          {index.nom}
                        </h1>
                        <p className="text-xl pb-5">
                          {index.description}
                        </p>
                        <div className="flex flex-row pb-4 items-center justify-between">
                          <p className="text-xl font-bold">
                          {index.prix}
                        </p>
                        <button className="flex border-1 rounded-xl p-2 bg-black text-white hover:cursor-pointer hover:opacity-80">
                          Ajouter au panier
                        </button>
                        </div>
                        
                      </div>
                  </div>
                ))}
            </div>
            
        </section>
      
      </div>
      
      </>)
    }
function Produit_vitrine(){
    
}
export default Produit_vitrine;