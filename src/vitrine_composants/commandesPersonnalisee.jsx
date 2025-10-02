import React, { useState } from "react";
import  {Nav_bar, Nav_bar_with_searchbar, Nav_bar_with_searchbar_vitrine}  from '../composants';
import img_banniere from '../img/banniere_compressee.webp';
import '../CSS.css';
import Carousel from '../carousel';

  

const cat_prod = ["Cartes de Visite", "Flyers", "Affiches", "Brochures", "Banderoles", "Autocollants", "Autres à préciser"]


export function Custom_prod({active, setActive}){
    return (
        <>
    <Nav_bar_with_searchbar_vitrine active={active} setActive={setActive}/>

    <div className="relative mx-auto">
        <section className="bg-gray-200 py-20 pt-35 px-50">
            <div className="flex flex-col max-w-[685px] min-h-auto">
              <div className="container mb-5">
                <h1 className="text-7xl mb-10 font-bold">
              Créez Quelque Chose d'Unique
              </h1>
              <p className="text-xl text-gray-500">
              Notre équipe d'experts transforme vos idées en impressions exceptionnelles. Partagez votre vision et nous la concrétiserons.
              </p>
              </div>
              
      </div>
        </section>
        <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="h-[900px] border-1 p-6 rounded-2xl border-gray-300 shadow-lg col-span-2">
                <div className="grid grid-rows-[auto,auto] gap-1 items-start pb-6">
                    <div className="font-bold text-xl">
                      Formulaire de Commande Personnalisée
                    </div>
                    <div className="text-gray-500 text-xs">
                      Remplissez les détails de votre projet et nous vous contacterons sous 24h
                    </div>
                </div>
                <div className="px-6">
                  <form action="" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="grid grid-rows-2 space-y-2 h-20">
                        <label htmlFor="">
                        Nom Complet *
                      </label>  
                      <input type="text" className="border-1 rounded-lg px-4" placeholder="Koffi jean"/>
                      </div>
                      <div className="grid grid-rows-2 space-y-2 h-20">
                        <label htmlFor="">
                        Email *
                      </label>
                      <input type="text" className="border-1 rounded-lg px-4" placeholder="jean@email.com"/>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="grid grid-rows-2 space-y-2 h-20">
                        <label htmlFor="">
                        Téléphone *
                      </label>  
                      <input type="text" className="border-1 rounded-lg px-4" placeholder="0101010101"/>
                      </div>
                      <div className="grid grid-rows-2 space-y-2 h-20">
                        <label htmlFor="">
                        Entreprise *
                      </label>
                      <input type="text" className="border-1 rounded-lg px-4 " placeholder="sp bouaké"/>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor="">
                        Type d'impression *
                      </label>  
                      <select name="" id="" className="border-1 w-80 h-10 rounded-lg">
                          {cat_prod.map((index, id)=>{
                          return <option value="" key={id}>
                            {index}
                        </option>
                      })}
                      </select>

                      </div>
                      <div className="flex flex-col space-y-2 py-2">
                        <label htmlFor="">
                        Quantité Estimée *
                      </label>
                      <input type="number" className="border-1 rounded-lg px-4 py-2" placeholder="100"/>
                      </div>

                      <div className="flex flex-col space-y-2 ">
                        <label htmlFor="">
                          Description du projet *
                        </label>
                      <textarea className="border-1 rounded-lg px-4 h-32 py-2" placeholder="décrivez votre projet en detail : Dimensions, Couleurs, Finitions souhaitées, délais..."/>
                      </div>
                     
                     <div className="grid grid-rows-2 space-y-2">
                        <label htmlFor="">
                        Fichier de Design *
                      </label>
                      <input type="file" className="border-1 rounded-lg px-4" placeholder="Cliquez pour"/>
                      </div>
                      
                  </form>

                </div>
            </div>

              <div className="col-span-1 space-y-6">
                  <div className=" rounded-2xl border-gray-300 shadow-lg border-1 h-[364px] py-6">

                  </div>
                  <div className=" rounded-2xl border-gray-300 shadow-lg border-1 h-[211px] py-6 bg-gray-200">

                  </div>
              </div>

            </div>
        </section>
        </div>
      </>    
    )
}

function CommandesPersonnalisees(){

}

export default CommandesPersonnalisees;
